import {
  BlocksOrGenerators,
  BlockOrGenerator,
  ButtonElement,
  CheckboxGroupElement,
  ConversationMultiSelectMenuElement,
  ConversationSelectMenuElement,
  DatepickerElement,
  ExternalMultiSelectMenuElement,
  ExternalSelectMenuElement,
  ImageElementBlock,
  OptionGroupObject,
  OptionObject,
  OverflowMenuElement,
  PlainTextInputElement,
  PlainTextObject,
  PublicChannelsMultiSelectMenuElement,
  PublicChannelsSelectMenuElement,
  RadioButtonGroupElement,
  StaticMultiSelectMenuElement,
  StaticSelectMenuElement,
  TimepickerElement,
  UserMultiSelectMenuElement,
  UserSelectMenuElement,
  PartialBy,
} from '../types';
import { BlockTypes } from '../contants';
import { Text } from './objectsFactories';

export const Button = (
  params: PartialBy<Omit<ButtonElement, 'type'>, 'text'>,
  text: BlockOrGenerator<PlainTextObject | string>
): ButtonElement => ({
  type: BlockTypes.button,
  text: typeof text === 'string' ? Text({ text }) : (text as BlockOrGenerator<PlainTextObject>),
  ...params,
});

export const CheckboxGroup = (
  params: PartialBy<Omit<CheckboxGroupElement, 'type'>, 'options'>,
  ...options: BlocksOrGenerators<OptionObject> | BlocksOrGenerators<OptionObject>[]
): CheckboxGroupElement => ({
  type: BlockTypes.checkboxes,
  options: options.flat(),
  ...params,
});

export const Datepicker = (params: Omit<DatepickerElement, 'type'>): DatepickerElement => ({
  type: BlockTypes.datepicker,
  ...params,
});

export const ImageElement = (params: Omit<ImageElementBlock, 'type'>): ImageElementBlock => ({
  type: BlockTypes.image,
  ...params,
});

export const StaticMultiSelect = (
  params: Omit<StaticMultiSelectMenuElement, 'type' | 'givenOptions'>,
  ...options:
    | BlocksOrGenerators<OptionObject | OptionGroupObject>
    | BlocksOrGenerators<OptionObject | OptionGroupObject>[]
): StaticMultiSelectMenuElement => ({
  type: BlockTypes.multiStaticSelect,
  givenOptions: options.flat(),
  ...params,
});

export const ExternalMultiSelect = (
  params: Omit<ExternalMultiSelectMenuElement, 'type'>
): ExternalMultiSelectMenuElement => ({
  type: BlockTypes.multiExternalSelect,
  ...params,
});

export const UserMultiSelect = (params: Omit<UserMultiSelectMenuElement, 'type'>): UserMultiSelectMenuElement => ({
  type: BlockTypes.multiUsersSelect,
  ...params,
});

export const ConversationMultiSelect = (
  params: Omit<ConversationMultiSelectMenuElement, 'type'>
): ConversationMultiSelectMenuElement => ({
  type: BlockTypes.multiConversationsSelect,
  ...params,
});

export const PublicChannelsMultiSelect = (
  params: Omit<PublicChannelsMultiSelectMenuElement, 'type'>
): PublicChannelsMultiSelectMenuElement => ({
  type: BlockTypes.multiChannelsSelect,
  ...params,
});

export const OverflowMenu = (
  params: PartialBy<Omit<OverflowMenuElement, 'type'>, 'options'>,
  ...options: BlocksOrGenerators<OptionObject> | BlocksOrGenerators<OptionObject>[]
): OverflowMenuElement => ({
  type: BlockTypes.overflow,
  options: options.flat(),
  ...params,
});

export const PlainTextInput = (params: Omit<PlainTextInputElement, 'type'>): PlainTextInputElement => ({
  type: BlockTypes.plainTextInput,
  ...params,
});

export const RadioButtonGroup = (
  params: PartialBy<Omit<RadioButtonGroupElement, 'type'>, 'options'>,
  ...options: BlocksOrGenerators<OptionObject> | BlocksOrGenerators<OptionObject>[]
): RadioButtonGroupElement => ({
  type: BlockTypes.radioButtons,
  options: options.flat(),
  ...params,
});

export const StaticSelect = (
  params: Omit<StaticSelectMenuElement, 'type' | 'givenOptions'>,
  ...options:
    | BlocksOrGenerators<OptionObject | OptionGroupObject>
    | BlocksOrGenerators<OptionObject | OptionGroupObject>[]
): StaticSelectMenuElement => ({
  type: BlockTypes.staticSelect,
  givenOptions: options.flat(),
  ...params,
});

export const ExternalSelect = (params: Omit<ExternalSelectMenuElement, 'type'>): ExternalSelectMenuElement => ({
  type: BlockTypes.externalSelect,
  ...params,
});

export const UserSelect = (params: Omit<UserSelectMenuElement, 'type'>): UserSelectMenuElement => ({
  type: BlockTypes.usersSelect,
  ...params,
});

export const ConversationSelect = (
  params: Omit<ConversationSelectMenuElement, 'type'>
): ConversationSelectMenuElement => ({
  type: BlockTypes.conversationsSelect,
  ...params,
});

export const PublicChannelsSelect = (
  params: Omit<PublicChannelsSelectMenuElement, 'type'>
): PublicChannelsSelectMenuElement => ({
  type: BlockTypes.channelsSelect,
  ...params,
});

export const Timepicker = (params: Omit<TimepickerElement, 'type'>): TimepickerElement => ({
  type: BlockTypes.timepicker,
  ...params,
});
