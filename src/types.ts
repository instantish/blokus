/* eslint-disable no-use-before-define */
import { BlockTypes } from './contants';

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props<T = {}> = T & {};
export type PropsWithChildren<T = Props> = T & {
  children?: BlocksOrGenerators<Block>;
};

export type FunctionalComponent<T extends PropsWithChildren, O> = (params: PropsWithChildren<T>) => Promise<O> | O;

export interface ComponentBlock<T, O> {
  type: FunctionalComponent<T, O>;
  params: Props;
  children: BlocksOrGenerators<Block>;
}

export type BlockOrGenerator<T> = T | ComponentBlock<Props, T> | null | undefined;
export type BlocksOrGenerators<T> = (T | ComponentBlock<Props, T> | ComponentBlock<Props, T[]> | null | undefined)[];

export interface Block {
  type: string;
}

export interface ActionBlock extends Block {
  type: BlockTypes.action;
  blockId?: string;
  elements: BlocksOrGenerators<ActionElement>;
}

export interface ContextBlock extends Block {
  type: BlockTypes.context;
  blockId?: string;
  elements: BlocksOrGenerators<ImageElementBlock | TextObject>;
}

export interface DividerBlock extends Block {
  type: BlockTypes.divider;
  blockId?: string;
}

export interface FileBlock extends Block {
  type: BlockTypes.file;
  blockId?: string;
  externalId: string;
  source: 'remote';
}

export interface HeaderBlock extends Block {
  type: BlockTypes.header;
  blockId?: string;
  text: BlockOrGenerator<PlainTextObject>;
}

export interface ImageBlock extends Block {
  type: BlockTypes.image;
  blockId?: string;
  imageUrl: string;
  altText: string;
  title?: BlockOrGenerator<PlainTextObject>;
}

export interface InputBlock extends Block {
  type: BlockTypes.input;
  blockId?: string;
  label: BlockOrGenerator<PlainTextObject>;
  element: BlockOrGenerator<FormElement>;
  dispatchAction?: boolean;
  hint?: BlockOrGenerator<PlainTextObject>;
  optional?: boolean;
}

export interface SectionBlock extends Block {
  type: BlockTypes.section;
  blockId?: string;
  text?: BlockOrGenerator<TextObject>;
  fields?: BlocksOrGenerators<TextObject>;
  accessory?: BlockOrGenerator<ElementBlock>;
}

export type PresentationalBlock =
  | ActionBlock
  | ContextBlock
  | DividerBlock
  | FileBlock
  | HeaderBlock
  | ImageBlock
  | InputBlock
  | SectionBlock;

interface InteractiveElementBlock extends Block {
  actionId: string;
}

export interface ButtonElement extends InteractiveElementBlock {
  type: BlockTypes.button;
  text: BlockOrGenerator<PlainTextObject>;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export interface CheckboxGroupElement extends InteractiveElementBlock {
  type: BlockTypes.checkboxes;
  options: BlocksOrGenerators<OptionObject>;
  initialOptions?: BlocksOrGenerators<OptionObject>;
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export interface DatepickerElement extends InteractiveElementBlock {
  type: BlockTypes.datepicker;
  placeholder?: BlockOrGenerator<TextObject>;
  initialDate?: string;
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export interface ImageElementBlock extends Block {
  type: BlockTypes.image;
  imageUrl: string;
  altText?: string;
}

export interface StaticMultiSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.multiStaticSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  options?: BlocksOrGenerators<OptionObject>;
  optionGroups?: BlocksOrGenerators<OptionGroupObject>;
  initialOptions?: BlocksOrGenerators<OptionObject>;
  confirm?: BlockOrGenerator<ConfirmObject>;
  maxSelectedItems?: number;
  givenOptions?: BlocksOrGenerators<OptionObject | OptionGroupObject>;
}

export interface ExternalMultiSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.multiExternalSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  minQueryLength?: number;
  initialOptions?: BlocksOrGenerators<OptionObject>;
  confirm?: BlockOrGenerator<ConfirmObject>;
  maxSelectedItems?: number;
}

export interface UserMultiSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.multiUsersSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  initialUsers?: string[];
  confirm?: BlockOrGenerator<ConfirmObject>;
  maxSelectedItems?: number;
}

export interface ConversationMultiSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.multiConversationsSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  initialConversations?: string[];
  defaultToCurrentConversation?: boolean;
  confirm?: BlockOrGenerator<ConfirmObject>;
  maxSelectedItems?: number;
  filter?: BlockOrGenerator<FilterObject>;
}

export interface PublicChannelsMultiSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.multiChannelsSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  initialChannels?: string[];
  confirm?: BlockOrGenerator<ConfirmObject>;
  maxSelectedItems?: number;
}

export type MultiSelectElement =
  | StaticMultiSelectMenuElement
  | ExternalMultiSelectMenuElement
  | UserMultiSelectMenuElement
  | ConversationMultiSelectMenuElement
  | PublicChannelsMultiSelectMenuElement;

export interface OverflowMenuElement extends InteractiveElementBlock {
  type: BlockTypes.overflow;
  options: BlocksOrGenerators<OptionObject>;
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export interface PlainTextInputElement extends InteractiveElementBlock {
  type: BlockTypes.plainTextInput;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
  dispatchActionConfig?: DispatchActionConfigObject;
}

export interface RadioButtonGroupElement extends InteractiveElementBlock {
  type: BlockTypes.radioButtons;
  options: BlocksOrGenerators<OptionObject>;
  initialOption: BlockOrGenerator<OptionObject>;
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export interface StaticSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.staticSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  options?: BlocksOrGenerators<OptionObject>;
  optionGroups?: BlocksOrGenerators<OptionGroupObject>;
  initialOption?: BlockOrGenerator<OptionObject>;
  confirm?: BlockOrGenerator<ConfirmObject>;
  givenOptions?: BlocksOrGenerators<OptionObject | OptionGroupObject>;
}

export interface ExternalSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.externalSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  minQueryLength?: number;
  initialOption?: BlockOrGenerator<OptionObject>;
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export interface UserSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.usersSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  initialUser?: string;
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export interface ConversationSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.conversationsSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  initialConversation?: string;
  defaultToCurrentConversation?: boolean;
  confirm?: BlockOrGenerator<ConfirmObject>;
  filter?: BlockOrGenerator<FilterObject>;
}

export interface PublicChannelsSelectMenuElement extends InteractiveElementBlock {
  type: BlockTypes.channelsSelect;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  initialChannel: string;
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export interface TimepickerElement extends InteractiveElementBlock {
  type: BlockTypes.timepicker;
  placeholder?: BlockOrGenerator<PlainTextObject>;
  initialTime?: string;
  confirm?: BlockOrGenerator<ConfirmObject>;
}

export type SelectElement =
  | StaticSelectMenuElement
  | ExternalSelectMenuElement
  | UserSelectMenuElement
  | ConversationSelectMenuElement
  | PublicChannelsSelectMenuElement;

export type FormElement =
  | PlainTextInputElement
  | CheckboxGroupElement
  | RadioButtonGroupElement
  | SelectElement
  | MultiSelectElement
  | DatepickerElement;

export type ActionElement =
  | ButtonElement
  | SelectElement
  | MultiSelectElement
  | OverflowMenuElement
  | DatepickerElement;

export type ElementBlock =
  | ButtonElement
  | CheckboxGroupElement
  | DatepickerElement
  | ImageElementBlock
  | MultiSelectElement
  | OverflowMenuElement
  | PlainTextInputElement
  | RadioButtonGroupElement
  | SelectElement
  | TimepickerElement;

export interface PlainTextObject extends Block {
  type: BlockTypes.plainText;
  text: string;
  emoji?: string;
}

export interface MarkdownTextObject extends Block {
  type: BlockTypes.mrkdwn;
  text: string;
  verbatim?: string;
}

export type TextObject = PlainTextObject | MarkdownTextObject;

export interface ConfirmObject extends Block {
  type: BlockTypes.confirm;
  title: BlockOrGenerator<PlainTextObject>;
  text: BlockOrGenerator<TextObject>;
  confirm: BlockOrGenerator<PlainTextObject>;
  deny: BlockOrGenerator<PlainTextObject>;
  style?: 'primary' | 'danger';
}

export interface OptionObject extends Block {
  type: BlockTypes.option;
  text: BlockOrGenerator<TextObject>;
  value: string;
  description?: BlockOrGenerator<PlainTextObject>;
  url?: string;
}

export interface OptionGroupObject extends Block {
  type: BlockTypes.optionGroup;
  label: BlockOrGenerator<PlainTextObject>;
  options: BlocksOrGenerators<OptionObject>;
}

export interface DispatchActionConfigObject extends Block {
  type: BlockTypes.dispatchAction;
  triggerActionsOn?: ('on_enter_pressed' | 'on_character_entered')[];
}

export interface FilterObject extends Block {
  type: BlockTypes.filter;
  include?: ('im' | 'mpim' | 'private' | 'public')[];
  excludeExternalSharedChannels?: boolean;
  excludeBotUsers?: boolean;
}

export type CompositionObjects =
  | TextObject
  | ConfirmObject
  | OptionObject
  | OptionGroupObject
  | DispatchActionConfigObject
  | FilterObject;

export interface ModalBlock extends Block {
  type: BlockTypes.modal;
  title: BlockOrGenerator<PlainTextObject>;
  blocks: BlocksOrGenerators<PresentationalBlock>;
  close?: BlockOrGenerator<PlainTextObject>;
  submit?: BlockOrGenerator<PlainTextObject>;
  privateMetadata?: string;
  callbackId?: string;
  clearOnClose?: boolean;
  notifyOnClose?: boolean;
  externalId?: string;
  submitDisabled?: boolean;
}

export interface HomeTabBlock extends Block {
  type: BlockTypes.home;
  blocks: BlocksOrGenerators<PresentationalBlock>;
  privateMetadata?: string;
  callbackId?: string;
  externalId?: string;
}

export type View = ModalBlock | HomeTabBlock;
