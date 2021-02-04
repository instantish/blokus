import {
  Component,
  Modal,
  HomeTab,
  Message,
  Action,
  Context,
  Divider,
  File,
  Header,
  Image,
  Input,
  Section,
  Button,
  CheckboxGroup,
  Datepicker,
  ImageElement,
  StaticMultiSelect,
  ExternalMultiSelect,
  UserMultiSelect,
  ConversationMultiSelect,
  PublicChannelsMultiSelect,
  OverflowMenu,
  PlainTextInput,
  RadioButtonGroup,
  StaticSelect,
  ExternalSelect,
  UserSelect,
  ConversationSelect,
  PublicChannelsSelect,
  Timepicker,
  Confirm,
  DispatchActionConfig,
  Filter,
  Option,
  OptionGroup,
  Mrkdwn,
  Text,
} from './factories';
import {
  Block,
  ComponentBlock,
  FunctionalComponent,
  ActionBlock,
  ButtonElement,
  CheckboxGroupElement,
  ContextBlock,
  DatepickerElement,
  DividerBlock,
  FileBlock,
  HeaderBlock,
  HomeTabView,
  ImageBlock,
  ImageElementBlock,
  InputBlock,
  MessageView,
  ModalView,
  SectionBlock,
  StaticMultiSelectMenuElement,
  ExternalMultiSelectMenuElement,
  UserMultiSelectMenuElement,
  ConversationMultiSelectMenuElement,
  PublicChannelsMultiSelectMenuElement,
  OverflowMenuElement,
  PlainTextInputElement,
  RadioButtonGroupElement,
  StaticSelectMenuElement,
  ExternalSelectMenuElement,
  UserSelectMenuElement,
  ConversationSelectMenuElement,
  PublicChannelsSelectMenuElement,
  TimepickerElement,
  ConfirmObject,
  DispatchActionConfigObject,
  FilterObject,
  OptionObject,
  OptionGroupObject,
  MrkdwnTextObject,
  PlainTextObject,
  PartialBy,
} from './types';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      home: PartialBy<Omit<HomeTabView, 'type'>, 'blocks'>;
      modal: PartialBy<Omit<ModalView, 'type'>, 'blocks'>;
      message: PartialBy<Omit<MessageView, 'type'>, 'blocks'>;
      action: PartialBy<Omit<ActionBlock, 'type'>, 'elements'>;
      context: PartialBy<Omit<ContextBlock, 'type'>, 'elements'>;
      divider: Omit<DividerBlock, 'type'>;
      filer: Omit<FileBlock, 'type'>;
      header: PartialBy<Omit<HeaderBlock, 'type'>, 'text'>;
      image: Omit<ImageBlock, 'type'>;
      input: PartialBy<Omit<InputBlock, 'type'>, 'element'>;
      section: PartialBy<Omit<SectionBlock, 'type'>, 'fields'>;
      button: PartialBy<Omit<ButtonElement, 'type'>, 'text'>;
      checkboxes: PartialBy<Omit<CheckboxGroupElement, 'type'>, 'options'>;
      datepicker: Omit<DatepickerElement, 'type'>;
      'image-element': Omit<ImageElementBlock, 'type'>;
      multiselect: Omit<StaticMultiSelectMenuElement, 'type' | 'givenOptions'>;
      'external-multiselect': Omit<ExternalMultiSelectMenuElement, 'type'>;
      'users-multiselect': Omit<UserMultiSelectMenuElement, 'type'>;
      'conversation-multiselect': Omit<ConversationMultiSelectMenuElement, 'type'>;
      'channels-multiselect': Omit<PublicChannelsMultiSelectMenuElement, 'type'>;
      overflow: PartialBy<Omit<OverflowMenuElement, 'type'>, 'options'>;
      'text-input': Omit<PlainTextInputElement, 'type'>;
      radio: PartialBy<Omit<RadioButtonGroupElement, 'type'>, 'options'>;
      select: Omit<StaticSelectMenuElement, 'type' | 'givenOptions'>;
      'external-select': Omit<ExternalSelectMenuElement, 'type'>;
      'users-select': Omit<UserSelectMenuElement, 'type'>;
      'conversation-select': Omit<ConversationSelectMenuElement, 'type'>;
      'channels-select': Omit<PublicChannelsSelectMenuElement, 'type'>;
      timepicker: Omit<TimepickerElement, 'type'>;
      confirm: PartialBy<Omit<ConfirmObject, 'type'>, 'text'>;
      'dispatch-config': Omit<DispatchActionConfigObject, 'type'>;
      filter: Omit<FilterObject, 'type'>;
      option: PartialBy<Omit<OptionObject, 'type'>, 'text'>;
      'option-group': PartialBy<Omit<OptionGroupObject, 'type'>, 'options'>;
      mrkdwn: PartialBy<Omit<MrkdwnTextObject, 'type'>, 'text'>;
      text: PartialBy<Omit<PlainTextObject, 'type'>, 'text'>;
    }
  }
}

type AnyTag =
  | typeof Modal
  | typeof HomeTab
  | typeof Message
  | typeof Action
  | typeof Context
  | typeof Divider
  | typeof File
  | typeof Header
  | typeof Image
  | typeof Input
  | typeof Section
  | typeof Button
  | typeof CheckboxGroup
  | typeof Datepicker
  | typeof ImageElement
  | typeof StaticMultiSelect
  | typeof ExternalMultiSelect
  | typeof UserMultiSelect
  | typeof ConversationMultiSelect
  | typeof PublicChannelsMultiSelect
  | typeof OverflowMenu
  | typeof PlainTextInput
  | typeof RadioButtonGroup
  | typeof StaticSelect
  | typeof ExternalSelect
  | typeof UserSelect
  | typeof ConversationSelect
  | typeof PublicChannelsSelect
  | typeof Timepicker
  | typeof Confirm
  | typeof DispatchActionConfig
  | typeof Filter
  | typeof Option
  | typeof OptionGroup
  | typeof Mrkdwn
  | typeof Text;

const tagToFactory: Record<string, AnyTag> = {
  home: HomeTab,
  modal: Modal,
  message: Message,
  action: Action,
  context: Context,
  divider: Divider,
  filer: File,
  header: Header,
  image: Image,
  input: Input,
  section: Section,
  button: Button,
  checkboxes: CheckboxGroup,
  datepicker: Datepicker,
  'image-element': ImageElement,
  multiselect: StaticMultiSelect,
  'external-multiselect': ExternalMultiSelect,
  'users-multiselect': UserMultiSelect,
  'conversation-multiselect': ConversationMultiSelect,
  'channels-multiselect': PublicChannelsMultiSelect,
  overflow: OverflowMenu,
  'text-input': PlainTextInput,
  radio: RadioButtonGroup,
  select: StaticSelect,
  'external-select': ExternalSelect,
  'users-select': UserSelect,
  'conversation-select': ConversationSelect,
  'channels-select': PublicChannelsSelect,
  timepicker: Timepicker,
  confirm: Confirm,
  'dispatch-config': DispatchActionConfig,
  filter: Filter,
  option: Option,
  'option-group': OptionGroup,
  mrkdwn: Mrkdwn,
  text: Text,
};

const isInternalTag = (tag: AnyTag | FunctionalComponent): boolean =>
  tag === Modal ||
  tag === HomeTab ||
  tag === Message ||
  tag === Action ||
  tag === Context ||
  tag === Divider ||
  tag === File ||
  tag === Header ||
  tag === Image ||
  tag === Input ||
  tag === Section ||
  tag === Button ||
  tag === CheckboxGroup ||
  tag === Datepicker ||
  tag === ImageElement ||
  tag === StaticMultiSelect ||
  tag === ExternalMultiSelect ||
  tag === UserMultiSelect ||
  tag === ConversationMultiSelect ||
  tag === PublicChannelsMultiSelect ||
  tag === OverflowMenu ||
  tag === PlainTextInput ||
  tag === RadioButtonGroup ||
  tag === StaticSelect ||
  tag === ExternalSelect ||
  tag === UserSelect ||
  tag === ConversationSelect ||
  tag === PublicChannelsSelect ||
  tag === Timepicker ||
  tag === Confirm ||
  tag === DispatchActionConfig ||
  tag === Filter ||
  tag === Option ||
  tag === OptionGroup ||
  tag === Mrkdwn ||
  tag === Text;

export const b = (
  tag: AnyTag | string | FunctionalComponent,
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: {} | null,
  // eslint-disable-next-line @typescript-eslint/ban-types
  ...children: (Block | ComponentBlock<{}, Block> | ComponentBlock<{}, Block[]> | null | undefined)[]
): Block | ComponentBlock => {
  if (typeof tag === 'string') {
    const foundTag = tagToFactory[tag];

    if (!foundTag) {
      throw new Error(`Invalid tag provided, ${tag} received.`);
    }

    // FIXME: Having to use ts-ignore here as TypeScript can't interpret the size of our AnyTag union
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return foundTag(props || {}, ...children) as Block;
  }
  if (typeof tag === 'function' && isInternalTag(tag)) {
    // FIXME: Having to use ts-ignore here as TypeScript can't interpret the size of our AnyTag union
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return tag(props || {}, ...children) as Block;
  }
  if (typeof tag === 'function') {
    return Component(tag as FunctionalComponent, props || {}, ...children);
  }
  throw new Error(
    `Unknown tag type, be sure to pass only functions or string to the JSX factory. ${typeof tag} received`
  );
};
