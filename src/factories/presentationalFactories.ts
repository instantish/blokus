import {
  ActionBlock,
  ContextBlock,
  DividerBlock,
  FileBlock,
  HeaderBlock,
  ImageBlock,
  InputBlock,
  SectionBlock,
  ActionElement,
  ImageElementBlock,
  TextObject,
  FormElement,
  BlocksOrGenerators,
  BlockOrGenerator,
  PartialBy,
  PlainTextObject,
} from '../types';
import { BlockTypes } from '../contants';
import { Text } from './objectsFactories';

/**
 * Generates an action block from slack.
 *
 * **JSX tag**: <action>
 * @param params  The various properties available to this block or element.
 * @param elements  The action elements to use for the element, sub-arrays will
 * automatically be flattened. Replaces the `elements` property.
 * @see {@link https://api.slack.com/reference/block-kit/blocks#actions|Official documentation}
 */
export const Action = (
  params: PartialBy<Omit<ActionBlock, 'type'>, 'elements'>,
  ...elements: BlocksOrGenerators<ActionElement> | BlocksOrGenerators<ActionElement>[]
): ActionBlock => ({
  type: BlockTypes.action,
  elements: elements.flat(),
  ...params,
});

/**
 * Generates a context block from slack.
 *
 * **JSX tag**: <context>
 * @param params  The various properties available to this block or element.
 * @param elements  The elements to use for the block, sub-arrays will automatically
 * be flattened. Will automatically convert strings to plain_text elements.
 * Replaces the `elements` property.
 * @see {@link https://api.slack.com/reference/block-kit/blocks#context|Official documentation}
 */
export const Context = (
  params: PartialBy<Omit<ContextBlock, 'type'>, 'elements'>,
  ...elements:
    | BlocksOrGenerators<ImageElementBlock | TextObject | string>
    | BlocksOrGenerators<ImageElementBlock | TextObject | string>[]
): ContextBlock => ({
  type: BlockTypes.context,
  elements: elements
    .flat()
    .map(element =>
      typeof element === 'string'
        ? Text({ text: element })
        : (element as BlockOrGenerator<ImageElementBlock | TextObject>)
    ),
  ...params,
});

/**
 * Generates a divider block from slack.
 *
 * **JSX tag**: <divider>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/blocks#divider|Official documentation}
 */
export const Divider = (params: Omit<DividerBlock, 'type'>): DividerBlock => ({
  type: BlockTypes.divider,
  ...params,
});

/**
 * Generates a file block from slack.
 *
 * **JSX tag**: <file>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/blocks#file|Official documentation}
 */
export const File = (params: Omit<FileBlock, 'type'>): FileBlock => ({
  type: BlockTypes.file,
  ...params,
});

/**
 * Generates a header block from slack.
 *
 * **JSX tag**: <header>
 * @param params  The various properties available to this block or element.
 * @param text  The text to add inside the block, strings will automatically
 * converted to plain_text blocks. Replaces the `text` property.
 * @see {@link https://api.slack.com/reference/block-kit/blocks#header|Official documentation}
 */
export const Header = (
  params: PartialBy<Omit<HeaderBlock, 'type'>, 'text'>,
  text: BlockOrGenerator<PlainTextObject | string>
): HeaderBlock => ({
  type: BlockTypes.header,
  text: typeof text === 'string' ? Text({ text }) : (text as BlockOrGenerator<PlainTextObject>),
  ...params,
});

/**
 * Generates an image block from slack.
 *
 * **JSX tag**: <image>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/blocks#image|Official documentation}
 */
export const Image = (params: Omit<ImageBlock, 'type'>): ImageBlock => ({
  type: BlockTypes.image,
  ...params,
});

/**
 * Generates an input block from slack.
 *
 * **JSX tag**: <input>
 * @param params  The various properties available to this block or element.
 * @param element  The form element to use for the block. Replaces the `element` property.
 * @see {@link https://api.slack.com/reference/block-kit/blocks#input|Official documentation}
 */
export const Input = (
  params: PartialBy<Omit<InputBlock, 'type'>, 'element'>,
  element: BlockOrGenerator<FormElement>
): InputBlock => ({
  type: BlockTypes.input,
  element,
  ...params,
});

/**
 * Generates a section block from slack.
 *
 * **JSX tag**: <section>
 * @param params  The various properties available to this block or element.
 * @param fields  The fields to use for the block, sub-arrays will automatically
 * be flattened. Will automatically convert strings to plain_text elements.
 * Replaces the `fields` property.
 * @see {@link https://api.slack.com/reference/block-kit/blocks#section|Official documentation}
 */
export const Section = (
  params: PartialBy<Omit<SectionBlock, 'type'>, 'fields'>,
  ...fields: BlocksOrGenerators<TextObject | string> | BlocksOrGenerators<TextObject | string>[]
): SectionBlock => ({
  type: BlockTypes.section,
  fields: fields
    .flat()
    .map(element =>
      typeof element === 'string' ? Text({ text: element }) : (element as BlockOrGenerator<TextObject>)
    ),
  ...params,
});
