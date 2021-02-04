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

/**
 * Generates a button element from slack.
 *
 * **JSX tag**: <button>
 * @param params  The various properties available to this block or element.
 * @param text  The text to add inside the element, strings will automatically
 * converted to plain_text blocks. Replaces the `text` property.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#button|Official documentation}
 */
export const Button = (
  params: PartialBy<Omit<ButtonElement, 'type'>, 'text'>,
  text: BlockOrGenerator<PlainTextObject | string>
): ButtonElement => ({
  type: BlockTypes.button,
  text: typeof text === 'string' ? Text({ text }) : (text as BlockOrGenerator<PlainTextObject>),
  ...params,
});

/**
 * Generates a checkboxes element from slack.
 *
 * **JSX tag**: <checkboxes>
 * @param params  The various properties available to this block or element.
 * @param options  The options to use for the element, sub-arrays will automatically
 * be flattened. Replaces the `options` property.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#checkboxes|Official documentation}
 */
export const CheckboxGroup = (
  params: PartialBy<Omit<CheckboxGroupElement, 'type'>, 'options'>,
  ...options: BlocksOrGenerators<OptionObject> | BlocksOrGenerators<OptionObject>[]
): CheckboxGroupElement => ({
  type: BlockTypes.checkboxes,
  options: options.flat(),
  ...params,
});

/**
 * Generates a datepicker element from slack.
 *
 * **JSX tag**: <datepicker>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#datepicker|Official documentation}
 */
export const Datepicker = (params: Omit<DatepickerElement, 'type'>): DatepickerElement => ({
  type: BlockTypes.datepicker,
  ...params,
});

/**
 * Generates an image element from slack.
 *
 * **JSX tag**: <image-element>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#image|Official documentation}
 */
export const ImageElement = (params: Omit<ImageElementBlock, 'type'>): ImageElementBlock => ({
  type: BlockTypes.image,
  ...params,
});

/**
 * Generates a static multi select element from slack.
 *
 * **JSX tag**: <multiselect>
 * @param params  The various properties available to this block or element.
 * @param options  The options to use for the element, sub-arrays will automatically
 * be flattened. May pass either options and option groups types, blokus will
 * automatically process them. Replaces the `options` and `optionGroups` properties.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select|Official documentation}
 */
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

/**
 * Generates an external multi select element from slack.
 *
 * **JSX tag**: <external-multiselect>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select|Official documentation}
 */
export const ExternalMultiSelect = (
  params: Omit<ExternalMultiSelectMenuElement, 'type'>
): ExternalMultiSelectMenuElement => ({
  type: BlockTypes.multiExternalSelect,
  ...params,
});

/**
 * Generates a user multi select element from slack.
 *
 * **JSX tag**: <user-multiselect>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select|Official documentation}
 */
export const UserMultiSelect = (params: Omit<UserMultiSelectMenuElement, 'type'>): UserMultiSelectMenuElement => ({
  type: BlockTypes.multiUsersSelect,
  ...params,
});

/**
 * Generates a conversation multi select element from slack.
 *
 * **JSX tag**: <conversation-multiselect>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|Official documentation}
 */
export const ConversationMultiSelect = (
  params: Omit<ConversationMultiSelectMenuElement, 'type'>
): ConversationMultiSelectMenuElement => ({
  type: BlockTypes.multiConversationsSelect,
  ...params,
});

/**
 * Generates a public channels multi select element from slack.
 *
 * **JSX tag**: <channels-multiselect>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select|Official documentation}
 */
export const PublicChannelsMultiSelect = (
  params: Omit<PublicChannelsMultiSelectMenuElement, 'type'>
): PublicChannelsMultiSelectMenuElement => ({
  type: BlockTypes.multiChannelsSelect,
  ...params,
});

/**
 * Generates an overflow menu element from slack.
 *
 * **JSX tag**: <overflow>
 * @param params  The various properties available to this block or element.
 * @param options  The options to use for the element, sub-arrays will automatically
 * be flattened. Replaces the `options` property.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#overflow|Official documentation}
 */
export const OverflowMenu = (
  params: PartialBy<Omit<OverflowMenuElement, 'type'>, 'options'>,
  ...options: BlocksOrGenerators<OptionObject> | BlocksOrGenerators<OptionObject>[]
): OverflowMenuElement => ({
  type: BlockTypes.overflow,
  options: options.flat(),
  ...params,
});

/**
 * Generates a plain text input element from slack.
 *
 * **JSX tag**: <plain-text>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#input|Official documentation}
 */
export const PlainTextInput = (params: Omit<PlainTextInputElement, 'type'>): PlainTextInputElement => ({
  type: BlockTypes.plainTextInput,
  ...params,
});

/**
 * Generates an radio button group element from slack.
 *
 * **JSX tag**: <radio>
 * @param params  The various properties available to this block or element.
 * @param options  The options to use for the element, sub-arrays will automatically
 * be flattened. Replaces the `options` property.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#radio|Official documentation}
 */
export const RadioButtonGroup = (
  params: PartialBy<Omit<RadioButtonGroupElement, 'type'>, 'options'>,
  ...options: BlocksOrGenerators<OptionObject> | BlocksOrGenerators<OptionObject>[]
): RadioButtonGroupElement => ({
  type: BlockTypes.radioButtons,
  options: options.flat(),
  ...params,
});

/**
 * Generates a static select element from slack.
 *
 * **JSX tag**: <select>
 * @param params  The various properties available to this block or element.
 * @param options  The options to use for the element, sub-arrays will automatically
 * be flattened. May pass either options and option groups types, blokus will
 * automatically process them. Replaces the `options` and `optionGroups` properties.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#static_select|Official documentation}
 */
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

/**
 * Generates an external select element from slack.
 *
 * **JSX tag**: <external-select>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#external_select|Official documentation}
 */
export const ExternalSelect = (params: Omit<ExternalSelectMenuElement, 'type'>): ExternalSelectMenuElement => ({
  type: BlockTypes.externalSelect,
  ...params,
});

/**
 * Generates a user select element from slack.
 *
 * **JSX tag**: <user-select>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#users_select|Official documentation}
 */
export const UserSelect = (params: Omit<UserSelectMenuElement, 'type'>): UserSelectMenuElement => ({
  type: BlockTypes.usersSelect,
  ...params,
});

/**
 * Generates a conversation select element from slack.
 *
 * **JSX tag**: <conversation-select>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|Official documentation}
 */
export const ConversationSelect = (
  params: Omit<ConversationSelectMenuElement, 'type'>
): ConversationSelectMenuElement => ({
  type: BlockTypes.conversationsSelect,
  ...params,
});

/**
 * Generates a public channels select element from slack.
 *
 * **JSX tag**: <channels-select>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#channel_select|Official documentation}
 */
export const PublicChannelsSelect = (
  params: Omit<PublicChannelsSelectMenuElement, 'type'>
): PublicChannelsSelectMenuElement => ({
  type: BlockTypes.channelsSelect,
  ...params,
});

/**
 * Generates a timepicker element from slack.
 *
 * **JSX tag**: <timepicker>
 * @param params  The various properties available to this block or element.
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#timepicker|Official documentation}
 */
export const Timepicker = (params: Omit<TimepickerElement, 'type'>): TimepickerElement => ({
  type: BlockTypes.timepicker,
  ...params,
});
