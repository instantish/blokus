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
} from '../types';
import { BlockTypes } from '../contants';
import { Text } from './objectsFactories';

export const Action = (
  params: PartialBy<Omit<ActionBlock, 'type'>, 'elements'>,
  ...elements: BlocksOrGenerators<ActionElement> | BlocksOrGenerators<ActionElement>[]
): ActionBlock => ({
  type: BlockTypes.action,
  elements: elements.flat(),
  ...params,
});

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

export const Divider = (params: Omit<DividerBlock, 'type'>): DividerBlock => ({
  type: BlockTypes.divider,
  ...params,
});

export const File = (params: Omit<FileBlock, 'type'>): FileBlock => ({
  type: BlockTypes.file,
  ...params,
});

export const Header = (params: Omit<HeaderBlock, 'type'>): HeaderBlock => ({
  type: BlockTypes.header,
  ...params,
});

export const Image = (params: Omit<ImageBlock, 'type'>): ImageBlock => ({
  type: BlockTypes.image,
  ...params,
});

export const Input = (
  params: PartialBy<Omit<InputBlock, 'type'>, 'element'>,
  element: BlockOrGenerator<FormElement>
): InputBlock => ({
  type: BlockTypes.input,
  element,
  ...params,
});

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
