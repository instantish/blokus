import {
  Props,
  ComponentBlock,
  View,
  BlockOrGenerator,
  PlainTextObject,
  ActionElement,
  ViewBlocks,
  BlocksOrGenerators,
  ImageElementBlock,
  TextObject,
  ElementBlock,
  OptionObject,
  OptionGroupObject,
  FormElement,
  ConfirmObject,
  MarkdownTextObject,
  FilterObject,
  DispatchActionConfigObject,
  Block,
  MessageBlock,
  ModalView,
  HomeTabView,
  MessageView,
} from './types';
import {
  ActionElementPayload,
  ConfirmObjectPayload,
  DispatchActionConfigObjectPayload,
  ElementBlockPayload,
  FilterObjectPayload,
  FormElementPayload,
  ImageElementPayload,
  MarkdownTextObjectPayload,
  OptionGroupObjectPayload,
  OptionObjectPayload,
  PlainTextObjectPayload,
  ViewBlockPayload,
  TextObjectPayload,
  ViewPayload,
  MessageBlockPayload,
  ModalPayload,
  HomeTabPayload,
  MessagePayload,
} from './outputTypes';
import { BlockTypes } from './contants';
import { validateHome, validateModal, validateMessage } from './validation';

const executeComponent = async <O>(component: ComponentBlock<Props, O>): Promise<O | O[]> => {
  return component.type({
    ...component.params,
    children: component.children,
  });
};

const convertChild = async <O>(child: ComponentBlock<Props, O> | ComponentBlock<Props, O[]> | O): Promise<O | O[]> => {
  const component = child as ComponentBlock<Props, O>;
  if (component.type && typeof component.type === 'function') {
    return await executeComponent<O>(component);
  }
  return child as O;
};

const handleSingleChild = async <T extends Block, O>(
  child: BlockOrGenerator<T>,
  handleFunction: (el: T) => Promise<O> | O
): Promise<O | undefined> => {
  if (!child) {
    return undefined;
  }

  let result = child;
  if (child.type && typeof child.type === 'function') {
    const value = await executeComponent<T>(child as ComponentBlock<Props, T>);
    if (Array.isArray(result)) {
      throw new Error('Expected a single child for block, got multiple children from component function.');
    }
    result = value as T;
  }

  return handleFunction(result as T);
};

const handleDefinedSingleChild = async <T extends Block, O>(
  child: BlockOrGenerator<T>,
  handleFunction: (el: T) => Promise<O> | O
): Promise<O> => {
  if (!child) {
    throw new Error('Element was not specified, but it is required');
  }

  return (await handleSingleChild<T, O>(child, handleFunction)) as O;
};

const handleChildren = async <T, O>(
  children: BlocksOrGenerators<T>,
  handleFunction: (el: T) => Promise<O> | O
): Promise<O[]> => {
  const blocks: O[] = [];

  for (const block of children) {
    if (!block) {
      continue;
    }
    const result = await convertChild<T>(block);
    if (Array.isArray(result)) {
      for (const subblock of result) {
        blocks.push(await handleFunction(subblock));
      }
      continue;
    }
    blocks.push(await handleFunction(result));
  }

  return blocks;
};

const handlePlainText = async (text: PlainTextObject): Promise<PlainTextObjectPayload> => ({
  type: text.type,
  text: text.text,
  emoji: text.emoji,
});

const handleMarkdown = async (text: MarkdownTextObject): Promise<MarkdownTextObjectPayload> => ({
  type: text.type,
  text: text.text,
  verbatim: text.verbatim,
});

const handleText = async (text: TextObject): Promise<TextObjectPayload> => {
  switch (text.type) {
    case BlockTypes.mrkdwn:
      return handleMarkdown(text);
    case BlockTypes.plainText:
      return handlePlainText(text);
    default:
      throw new Error("Unknown text object, should be one of 'plain_text' or 'mrkdwn'");
  }
};

const handleConfirm = async (confirm: ConfirmObject): Promise<ConfirmObjectPayload> => ({
  text: await handleDefinedSingleChild<TextObject, TextObjectPayload>(confirm.text, handleText),
  style: confirm.style,
  title: await handleDefinedSingleChild<PlainTextObject, PlainTextObjectPayload>(confirm.title, handlePlainText),
  confirm: await handleDefinedSingleChild<PlainTextObject, PlainTextObjectPayload>(confirm.confirm, handlePlainText),
  deny: await handleDefinedSingleChild<PlainTextObject, PlainTextObjectPayload>(confirm.deny, handlePlainText),
});

const handleOption = async (option: OptionObject): Promise<OptionObjectPayload> => ({
  description: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(option.description, handlePlainText),
  text: await handleDefinedSingleChild<TextObject, TextObjectPayload>(option.text, handleText),
  url: option.url,
  value: option.value,
});

const handleOptionGroup = async (option: OptionGroupObject): Promise<OptionGroupObjectPayload> => ({
  label: await handleDefinedSingleChild<PlainTextObject, PlainTextObjectPayload>(option.label, handlePlainText),
  options: await handleChildren<OptionObject, OptionObjectPayload>(option.options, handleOption),
});

const handleFilter = (filter: FilterObject): FilterObjectPayload => ({
  exclude_bot_users: filter.excludeBotUsers,
  exclude_external_shared_channels: filter.excludeExternalSharedChannels,
  include: filter.include,
});

const handleDispatchActionConfig = (config: DispatchActionConfigObject): DispatchActionConfigObjectPayload => ({
  trigger_actions_on: config.triggerActionsOn,
});

const handleSelectOptions = async (
  givenOptions: BlocksOrGenerators<OptionObject | OptionGroupObject> | undefined,
  baseOptions: BlocksOrGenerators<OptionObject> | undefined,
  baseOptionGroups: BlocksOrGenerators<OptionGroupObject> | undefined
): Promise<[OptionObjectPayload[] | undefined, OptionGroupObjectPayload[] | undefined]> => {
  if (!givenOptions) {
    // If we were not given any options as children, use the options given in params.
    return [
      baseOptions ? await handleChildren<OptionObject, OptionObjectPayload>(baseOptions, handleOption) : undefined,
      baseOptionGroups
        ? await handleChildren<OptionGroupObject, OptionGroupObjectPayload>(baseOptionGroups, handleOptionGroup)
        : undefined,
    ];
  }
  const options: OptionObjectPayload[] = [];
  const optionGroups: OptionGroupObjectPayload[] = [];

  const allElements: (OptionObject | OptionGroupObject)[] = [];
  const allOptions: BlocksOrGenerators<OptionObject | OptionGroupObject> = givenOptions;
  if (baseOptions) {
    allOptions.push(...baseOptions);
  }
  if (baseOptionGroups) {
    allOptions.push(...baseOptionGroups);
  }

  for (const option of allOptions) {
    if (!option) {
      continue;
    }
    const result = await convertChild<OptionObject | OptionGroupObject>(option);
    if (Array.isArray(result)) {
      for (const subblock of result) {
        allElements.push(subblock);
      }
      continue;
    }
    allElements.push(result);
  }

  for (const element of allElements) {
    switch (element.type) {
      case BlockTypes.option:
        options.push(await handleOption(element));
        break;
      case BlockTypes.optionGroup:
        optionGroups.push(await handleOptionGroup(element));
        break;
      default:
        throw new Error('Unknown option type');
    }
  }

  if (options.length && optionGroups.length) {
    throw new Error('Selects cannot provide both options and option groups');
  } else if (!options.length && !optionGroups.length) {
    throw new Error('Selects should provide only one of options or option groups');
  }

  return [options.length ? options : undefined, optionGroups.length ? optionGroups : undefined];
};

const handleElement = async (element: ElementBlock): Promise<ElementBlockPayload> => {
  switch (element.type) {
    case BlockTypes.image:
      return {
        type: element.type,
        alt_text: element.altText,
        image_url: element.imageUrl,
      };
    case BlockTypes.button:
      return {
        type: element.type,
        action_id: element.actionId,
        style: element.style,
        url: element.url,
        value: element.value,
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
        text: await handleDefinedSingleChild<PlainTextObject, PlainTextObjectPayload>(element.text, handlePlainText),
      };
    case BlockTypes.channelsSelect:
      return {
        type: element.type,
        action_id: element.actionId,
        initial_channel: element.initialChannel,
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    case BlockTypes.checkboxes: {
      const options = await handleChildren<OptionObject, OptionObjectPayload>(element.options, handleOption);
      const initialOptions =
        element.initialOptions &&
        (await handleChildren<OptionObject, OptionObjectPayload>(element.initialOptions, handleOption));

      return {
        type: element.type,
        action_id: element.actionId,
        options,
        initial_options: initialOptions,
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    }
    case BlockTypes.conversationsSelect:
      return {
        type: element.type,
        action_id: element.actionId,
        default_to_current_conversation: element.defaultToCurrentConversation,
        initial_conversation: element.initialConversation,
        filter: await handleSingleChild<FilterObject, FilterObjectPayload>(element.filter, handleFilter),
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    case BlockTypes.datepicker:
      return {
        type: element.type,
        action_id: element.actionId,
        initial_date: element.initialDate,
        placeholder: await handleSingleChild<TextObject, TextObjectPayload>(element.placeholder, handleText),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    case BlockTypes.externalSelect:
      return {
        type: element.type,
        action_id: element.actionId,
        min_query_length: element.minQueryLength,
        initial_option: await handleSingleChild<OptionObject, OptionObjectPayload>(element.initialOption, handleOption),
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    case BlockTypes.multiChannelsSelect:
      return {
        type: element.type,
        action_id: element.actionId,
        initial_channels: element.initialChannels,
        max_selected_items: element.maxSelectedItems,
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    case BlockTypes.multiConversationsSelect:
      return {
        type: element.type,
        action_id: element.actionId,
        initial_conversations: element.initialConversations,
        default_to_current_conversation: element.defaultToCurrentConversation,
        filter: await handleSingleChild<FilterObject, FilterObjectPayload>(element.filter, handleFilter),
        max_selected_items: element.maxSelectedItems,
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    case BlockTypes.multiExternalSelect: {
      const initialOptions =
        element.initialOptions &&
        (await handleChildren<OptionObject, OptionObjectPayload>(element.initialOptions, handleOption));

      return {
        type: element.type,
        action_id: element.actionId,
        min_query_length: element.minQueryLength,
        max_selected_items: element.maxSelectedItems,
        initial_options: initialOptions,
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    }
    case BlockTypes.multiStaticSelect: {
      const [options, optionGroups] = await handleSelectOptions(
        element.givenOptions,
        element.options,
        element.optionGroups
      );
      const initialOptions =
        element.initialOptions &&
        (await handleChildren<OptionObject, OptionObjectPayload>(element.initialOptions, handleOption));

      return {
        type: element.type,
        action_id: element.actionId,
        options,
        option_groups: optionGroups,
        max_selected_items: element.maxSelectedItems,
        initial_options: initialOptions,
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    }
    case BlockTypes.multiUsersSelect:
      return {
        type: element.type,
        action_id: element.actionId,
        max_selected_items: element.maxSelectedItems,
        initial_users: element.initialUsers,
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    case BlockTypes.overflow: {
      const options =
        element.options && (await handleChildren<OptionObject, OptionObjectPayload>(element.options, handleOption));

      return {
        type: element.type,
        action_id: element.actionId,
        options,
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    }
    case BlockTypes.plainTextInput:
      return {
        type: element.type,
        action_id: element.actionId,
        initial_value: element.initialValue,
        max_length: element.maxLength,
        min_length: element.minLength,
        multiline: element.multiline,
        dispatch_action_config: await handleSingleChild<DispatchActionConfigObject, DispatchActionConfigObjectPayload>(
          element.dispatchActionConfig,
          handleDispatchActionConfig
        ),
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
      };
    case BlockTypes.radioButtons: {
      const options = await handleChildren<OptionObject, OptionObjectPayload>(element.options, handleOption);

      return {
        type: element.type,
        action_id: element.actionId,
        options,
        initial_option: await handleDefinedSingleChild<OptionObject, OptionObjectPayload>(
          element.initialOption,
          handleOption
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    }
    case BlockTypes.staticSelect: {
      const [options, optionGroups] = await handleSelectOptions(
        element.givenOptions,
        element.options,
        element.optionGroups
      );

      return {
        type: element.type,
        action_id: element.actionId,
        options,
        option_groups: optionGroups,
        initial_option: await handleSingleChild<OptionObject, OptionObjectPayload>(element.initialOption, handleOption),
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    }
    case BlockTypes.timepicker:
      return {
        type: element.type,
        action_id: element.actionId,
        initial_time: element.initialTime,
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    case BlockTypes.usersSelect: {
      return {
        type: element.type,
        action_id: element.actionId,
        initial_user: element.initialUser,
        placeholder: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(
          element.placeholder,
          handlePlainText
        ),
        confirm: await handleSingleChild<ConfirmObject, ConfirmObjectPayload>(element.confirm, handleConfirm),
      };
    }
    default:
      throw new Error('Unknown block type');
  }
};

const handleFormElement = async (element: FormElement): Promise<FormElementPayload> => {
  return (await handleElement(element as ElementBlock)) as FormElementPayload;
};

const handleActionElement = async (element: ActionElement): Promise<ActionElementPayload> => {
  return (await handleElement(element as ElementBlock)) as ActionElementPayload;
};

const handlePresentationalBlock = async (
  block: ViewBlocks | MessageBlock
): Promise<ViewBlockPayload | MessageBlockPayload> => {
  switch (block.type) {
    case BlockTypes.action: {
      const elements = await handleChildren<ActionElement, ActionElementPayload>(block.elements, handleActionElement);
      return {
        type: block.type,
        block_id: block.blockId,
        elements,
      };
    }
    case BlockTypes.context: {
      const elements = await handleChildren<ImageElementBlock | TextObject, ImageElementPayload | TextObjectPayload>(
        block.elements,
        (block: ImageElementBlock | TextObject): Promise<ImageElementPayload | TextObjectPayload> => {
          switch (block.type) {
            case BlockTypes.image: {
              return handleDefinedSingleChild<ImageElementBlock, ImageElementPayload>(
                block,
                (el: ImageElementBlock): ImageElementPayload => ({
                  type: el.type,
                  image_url: el.imageUrl,
                  alt_text: el.altText,
                })
              );
            }
            case BlockTypes.plainText: {
              return handlePlainText(block);
            }
            case BlockTypes.mrkdwn: {
              return handleMarkdown(block);
            }
          }
        }
      );
      return {
        type: block.type,
        block_id: block.blockId,
        elements,
      };
    }
    case BlockTypes.divider:
      return {
        type: block.type,
        block_id: block.blockId,
      };
    case BlockTypes.file:
      return {
        type: block.type,
        block_id: block.blockId,
        external_id: block.externalId,
        source: block.source,
      };
    case BlockTypes.header:
      return {
        type: block.type,
        block_id: block.blockId,
        text: await handleDefinedSingleChild<PlainTextObject, PlainTextObjectPayload>(block.text, handlePlainText),
      };
    case BlockTypes.image:
      return {
        type: block.type,
        block_id: block.blockId,
        alt_text: block.altText,
        image_url: block.imageUrl,
        title: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(block.title, handlePlainText),
      };
    case BlockTypes.input:
      return {
        type: block.type,
        block_id: block.blockId,
        dispatch_action: block.dispatchAction,
        element: await handleDefinedSingleChild<FormElement, FormElementPayload>(block.element, handleFormElement),
        hint: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(block.hint, handlePlainText),
        label: await handleDefinedSingleChild<PlainTextObject, PlainTextObjectPayload>(block.label, handlePlainText),
        optional: block.optional,
      };
    case BlockTypes.section: {
      const fields = block.fields && (await handleChildren<TextObject, TextObjectPayload>(block.fields, handleText));
      return {
        type: block.type,
        block_id: block.blockId,
        text: await handleSingleChild<TextObject, TextObjectPayload>(block.text, handleText),
        accessory: await handleSingleChild<ElementBlock, ElementBlockPayload>(block.accessory, handleElement),
        fields,
      };
    }
    default:
      throw new Error('Unknown block type');
  }
};

/**
 * Renders the given view and generates the valid payload for Slack. It will
 * execute the components and validate the inputs based on slack's
 * documentation.
 * @param view  The view to generate.
 * @returns  Returns the generated payload, validated.
 * @throws  Will throw errors if the payload is invalid or if generation is
 * impossible.
 */
export const render = async (view: View): Promise<ViewPayload> => {
  const blocks = await handleChildren<ViewBlocks | MessageBlock, ViewBlockPayload | MessageBlockPayload>(
    view.blocks || [],
    handlePresentationalBlock
  );

  if (view.type === BlockTypes.modal) {
    const converted = view as ModalView;
    const payload: ModalPayload = {
      type: view.type,
      title: await handleDefinedSingleChild<PlainTextObject, PlainTextObjectPayload>(converted.title, handlePlainText),
      blocks: (blocks as unknown) as ViewBlockPayload[],
      close: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(converted.close, handlePlainText),
      submit: await handleSingleChild<PlainTextObject, PlainTextObjectPayload>(converted.submit, handlePlainText),
      private_metadata: converted.privateMetadata,
      callback_id: converted.callbackId,
      clear_on_close: converted.clearOnClose,
      notify_on_close: converted.notifyOnClose,
      external_id: converted.externalId,
      submit_disabled: converted.submitDisabled,
    };
    validateModal(payload);
    return payload;
  } else if (view.type === BlockTypes.home) {
    const converted = view as HomeTabView;
    const payload: HomeTabPayload = {
      type: view.type,
      blocks: (blocks as unknown) as ViewBlockPayload[],
      private_metadata: converted.privateMetadata,
      callback_id: converted.callbackId,
      external_id: converted.externalId,
    };
    validateHome(payload);
    return payload;
  } else if (view.type === BlockTypes.message) {
    const converted = view as MessageView;
    const payload: MessagePayload = {
      blocks: view.blocks ? ((blocks as unknown) as MessageBlockPayload[]) : undefined,
      text: converted.text,
      thread_ts: converted.threadTS,
      mrkdwn: converted.mrkdwn,
    };
    validateMessage(payload);
    return payload;
  }
  throw new Error('Unknown view type provided');
};
