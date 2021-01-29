import {
  BlocksOrGenerators,
  BlockOrGenerator,
  ConfirmObject,
  DispatchActionConfigObject,
  FilterObject,
  MarkdownTextObject,
  OptionGroupObject,
  OptionObject,
  PlainTextObject,
  TextObject,
  PartialBy,
} from '../types';
import { BlockTypes } from '../contants';

/**
 * Generates a text composition object from slack with the plain_text type.
 * @param params  The various properties available to this object.
 * @param text  The text to add inside of this text object. Replaces the `text`
 * property.
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#text|Official documentation}
 */
export const Text = (params: PartialBy<Omit<PlainTextObject, 'type'>, 'text'>, text = ''): PlainTextObject => ({
  type: BlockTypes.plainText,
  text,
  ...params,
});

/**
 * Generates a text composition object from slack with the markdown type.
 * @param params  The various properties available to this object.
 * @param text  The markdown text to add inside of this text object. Replaces
 * the `text` property.
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#text|Official documentation}
 */
export const Markdown = (
  params: PartialBy<Omit<MarkdownTextObject, 'type'>, 'text'>,
  text = ''
): MarkdownTextObject => ({
  type: BlockTypes.mrkdwn,
  text,
  ...params,
});

/**
 * Generates a confirm composition object from slack.
 * @param params  The various properties available to this object.
 * @param text  The markdown text to add inside of this confirm object. Replaces
 * the `text` property.
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|Official documentation}
 */
export const Confirm = (
  params: PartialBy<Omit<ConfirmObject, 'type'>, 'text'>,
  text: BlockOrGenerator<TextObject | string>
): ConfirmObject => ({
  type: BlockTypes.confirm,
  text: typeof text === 'string' ? Text({ text }) : (text as BlockOrGenerator<TextObject>),
  ...params,
});

/**
 * Generates an option composition object from slack.
 * @param params  The various properties available to this object.
 * @param text  The markdown text to add inside of this option object. Replaces
 * the `text` property.
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#option|Official documentation}
 */
export const Option = (
  params: PartialBy<Omit<OptionObject, 'type'>, 'text'>,
  text: BlockOrGenerator<TextObject | string>
): OptionObject => ({
  type: BlockTypes.option,
  text: typeof text === 'string' ? Text({ text }) : (text as BlockOrGenerator<TextObject>),
  ...params,
});

/**
 * Generates an option group composition object from slack.
 * @param params  The various properties available to this object.
 * @param options  The options to use for the object, sub-arrays will automatically
 * be flattened. Replaces the `options` property.
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#option_group|Official documentation}
 */
export const OptionGroup = (
  params: PartialBy<Omit<OptionGroupObject, 'type'>, 'options'>,
  ...options: BlocksOrGenerators<OptionObject> | BlocksOrGenerators<OptionObject>[]
): OptionGroupObject => ({
  type: BlockTypes.optionGroup,
  options: options.flat(),
  ...params,
});

/**
 * Generates a dispatch action config composition object from slack.
 * @param params  The various properties available to this object.
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#dispatch_action_config|Official documentation}
 */
export const DispatchActionConfig = (params: Omit<DispatchActionConfigObject, 'type'>): DispatchActionConfigObject => ({
  type: BlockTypes.dispatchAction,
  ...params,
});

/**
 * Generates a filter composition object from slack.
 * @param params  The various properties available to this object.
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#filter_conversations|Official documentation}
 */
export const Filter = (params: Omit<FilterObject, 'type'>): FilterObject => ({
  type: BlockTypes.filter,
  ...params,
});
