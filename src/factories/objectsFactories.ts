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

export const Text = (params: PartialBy<Omit<PlainTextObject, 'type'>, 'text'>, text = ''): PlainTextObject => ({
  type: BlockTypes.plainText,
  text,
  ...params,
});

export const Markdown = (
  params: PartialBy<Omit<MarkdownTextObject, 'type'>, 'text'>,
  text = ''
): MarkdownTextObject => ({
  type: BlockTypes.mrkdwn,
  text,
  ...params,
});

export const Confirm = (
  params: PartialBy<Omit<ConfirmObject, 'type'>, 'text'>,
  text: BlockOrGenerator<TextObject | string>
): ConfirmObject => ({
  type: BlockTypes.confirm,
  text: typeof text === 'string' ? Text({ text }) : (text as BlockOrGenerator<TextObject>),
  ...params,
});

export const Option = (
  params: PartialBy<Omit<OptionObject, 'type'>, 'text'>,
  text: BlockOrGenerator<TextObject | string>
): OptionObject => ({
  type: BlockTypes.option,
  text: typeof text === 'string' ? Text({ text }) : (text as BlockOrGenerator<TextObject>),
  ...params,
});

export const OptionGroup = (
  params: PartialBy<Omit<OptionGroupObject, 'type'>, 'options'>,
  ...options: BlocksOrGenerators<OptionObject> | BlocksOrGenerators<OptionObject>[]
): OptionGroupObject => ({
  type: BlockTypes.optionGroup,
  options: options.flat(),
  ...params,
});

export const DispatchActionConfig = (params: Omit<DispatchActionConfigObject, 'type'>): DispatchActionConfigObject => ({
  type: BlockTypes.dispatchAction,
  ...params,
});

export const Filter = (params: Omit<FilterObject, 'type'>): FilterObject => ({
  type: BlockTypes.filter,
  ...params,
});
