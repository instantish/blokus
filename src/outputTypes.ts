/* eslint-disable no-use-before-define,camelcase */
import { BlockTypes } from './contants';

export interface BlockPayload {
  type: string;
}

export interface ActionBlockPayload extends BlockPayload {
  type: BlockTypes.action;
  block_id?: string;
  elements: ActionElementPayload[];
}

export interface ContextBlockPayload extends BlockPayload {
  type: BlockTypes.context;
  block_id?: string;
  elements: (ImageElementPayload | TextObjectPayload)[];
}

export interface DividerBlockPayload extends BlockPayload {
  type: BlockTypes.divider;
  block_id?: string;
}

export interface FileBlockPayload extends BlockPayload {
  type: BlockTypes.file;
  block_id?: string;
  external_id: string;
  source: 'remote';
}

export interface HeaderBlockPayload extends BlockPayload {
  type: BlockTypes.header;
  block_id?: string;
  text: string;
}

export interface ImageBlockPayload extends BlockPayload {
  type: BlockTypes.image;
  block_id?: string;
  image_url: string;
  alt_text: string;
  title?: PlainTextObjectPayload;
}

export interface InputBlockPayload extends BlockPayload {
  type: BlockTypes.input;
  block_id?: string;
  label: PlainTextObjectPayload;
  element: FormElementPayload;
  dispatch_action?: boolean;
  hint?: PlainTextObjectPayload;
  optional?: boolean;
}

export interface SectionBlockPayload extends BlockPayload {
  type: BlockTypes.section;
  block_id?: string;
  text?: TextObjectPayload;
  fields?: TextObjectPayload[];
  accessory?: ElementBlockPayload;
}

export type PresentationalBlockPayload =
  | ActionBlockPayload
  | ContextBlockPayload
  | DividerBlockPayload
  | FileBlockPayload
  | HeaderBlockPayload
  | ImageBlockPayload
  | InputBlockPayload
  | SectionBlockPayload;

interface InteractiveElementPayloadBlockPayload extends BlockPayload {
  action_id: string;
}

export interface ButtonElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.button;
  text: PlainTextObjectPayload;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
  confirm?: ConfirmObjectPayload;
}

export interface CheckboxGroupElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.checkboxes;
  options: OptionObjectPayload[];
  initial_options?: OptionObjectPayload[];
  confirm?: ConfirmObjectPayload;
}

export interface DatepickerElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.datepicker;
  placeholder?: TextObjectPayload;
  initial_date?: string;
  confirm?: ConfirmObjectPayload;
}

export interface ImageElementPayload extends BlockPayload {
  type: BlockTypes.image;
  image_url: string;
  atl_text?: string;
}

export interface StaticMultiSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.multiStaticSelect;
  placeholder?: PlainTextObjectPayload;
  options?: OptionObjectPayload[];
  option_groups?: OptionGroupObjectPayload[];
  initial_options?: OptionObjectPayload[];
  confirm?: ConfirmObjectPayload;
  max_selected_items?: number;
}

export interface ExternalMultiSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.multiExternalSelect;
  placeholder?: PlainTextObjectPayload;
  min_query_length?: number;
  initial_options?: OptionObjectPayload[];
  confirm?: ConfirmObjectPayload;
  max_selected_items?: number;
}

export interface UserMultiSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.multiUsersSelect;
  placeholder?: PlainTextObjectPayload;
  initial_users?: string[];
  confirm?: ConfirmObjectPayload;
  max_selected_items?: number;
}

export interface ConversationMultiSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.multiConversationsSelect;
  placeholder?: PlainTextObjectPayload;
  initial_conversations?: string[];
  default_to_current_conversation?: boolean;
  confirm?: ConfirmObjectPayload;
  max_selected_items?: number;
  filter?: FilterObjectPayload;
}

export interface PublicChannelsMultiSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.multiChannelsSelect;
  placeholder?: PlainTextObjectPayload;
  initial_channels?: string[];
  confirm?: ConfirmObjectPayload;
  max_selected_items?: number;
}

export type MultiSelectElementPayload =
  | StaticMultiSelectMenuElementPayload
  | ExternalMultiSelectMenuElementPayload
  | UserMultiSelectMenuElementPayload
  | ConversationMultiSelectMenuElementPayload
  | PublicChannelsMultiSelectMenuElementPayload;

export interface OverflowMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.overflow;
  options: OptionObjectPayload[];
  confirm?: ConfirmObjectPayload;
}

export interface PlainTextInputElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.plainTextInput;
  placeholder?: PlainTextObjectPayload;
  initial_value?: string;
  multiline?: boolean;
  min_length?: number;
  max_length?: number;
  dispatch_action_config?: DispatchActionConfigObjectPayload;
}

export interface RadioButtonGroupElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.radioButtons;
  options: OptionObjectPayload[];
  initial_option: OptionObjectPayload;
  confirm?: ConfirmObjectPayload;
}

export interface StaticSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.staticSelect;
  placeholder?: PlainTextObjectPayload;
  options?: OptionObjectPayload[];
  option_groups?: OptionGroupObjectPayload[];
  initial_option?: OptionObjectPayload;
  confirm?: ConfirmObjectPayload;
}

export interface ExternalSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.externalSelect;
  placeholder?: PlainTextObjectPayload;
  min_query_length?: number;
  initial_option?: OptionObjectPayload;
  confirm?: ConfirmObjectPayload;
}

export interface UserSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.usersSelect;
  placeholder?: PlainTextObjectPayload;
  initial_user?: string;
  confirm?: ConfirmObjectPayload;
}

export interface ConversationSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.conversationsSelect;
  placeholder?: PlainTextObjectPayload;
  initial_conversation?: string;
  default_to_current_conversation?: boolean;
  confirm?: ConfirmObjectPayload;
  filter?: FilterObjectPayload;
}

export interface PublicChannelsSelectMenuElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.channelsSelect;
  placeholder?: PlainTextObjectPayload;
  initial_channel: string;
  confirm?: ConfirmObjectPayload;
}

export interface TimepickerElementPayload extends InteractiveElementPayloadBlockPayload {
  type: BlockTypes.timepicker;
  placeholder?: PlainTextObjectPayload;
  initial_time?: string;
  confirm?: ConfirmObjectPayload;
}

export type SelectElementPayload =
  | StaticSelectMenuElementPayload
  | ExternalSelectMenuElementPayload
  | UserSelectMenuElementPayload
  | ConversationSelectMenuElementPayload
  | PublicChannelsSelectMenuElementPayload;

export type FormElementPayload =
  | PlainTextInputElementPayload
  | CheckboxGroupElementPayload
  | RadioButtonGroupElementPayload
  | SelectElementPayload
  | MultiSelectElementPayload
  | DatepickerElementPayload;

export type ActionElementPayload =
  | ButtonElementPayload
  | SelectElementPayload
  | MultiSelectElementPayload
  | OverflowMenuElementPayload
  | DatepickerElementPayload;

export type ElementBlockPayload =
  | ButtonElementPayload
  | CheckboxGroupElementPayload
  | DatepickerElementPayload
  | ImageElementPayload
  | MultiSelectElementPayload
  | OverflowMenuElementPayload
  | PlainTextInputElementPayload
  | RadioButtonGroupElementPayload
  | SelectElementPayload
  | TimepickerElementPayload;

export interface PlainTextObjectPayload extends BlockPayload {
  type: BlockTypes.plainText;
  text: string;
  emoji?: string;
}

export interface MarkdownTextObjectPayload extends BlockPayload {
  type: BlockTypes.mrkdwn;
  text: string;
  verbatim?: string;
}

export type TextObjectPayload = PlainTextObjectPayload | MarkdownTextObjectPayload;

export interface ConfirmObjectPayload {
  title: PlainTextObjectPayload;
  text: TextObjectPayload;
  confirm: PlainTextObjectPayload;
  deny: PlainTextObjectPayload;
  style?: 'primary' | 'danger';
}

export interface OptionObjectPayload {
  text: TextObjectPayload;
  value: string;
  description?: PlainTextObjectPayload;
  url?: string;
}

export interface OptionGroupObjectPayload {
  label: PlainTextObjectPayload;
  options: OptionObjectPayload[];
}

export interface DispatchActionConfigObjectPayload {
  trigger_actions_on?: ('on_enter_pressed' | 'on_character_entered')[];
}

export interface FilterObjectPayload {
  include?: ('im' | 'mpim' | 'private' | 'public')[];
  exclude_external_shared_channels?: boolean;
  exclude_bot_users?: boolean;
}

export type CompositionObjectPayloads =
  | TextObjectPayload
  | ConfirmObjectPayload
  | OptionObjectPayload
  | OptionGroupObjectPayload
  | DispatchActionConfigObjectPayload
  | FilterObjectPayload;

export interface ModalPayload extends BlockPayload {
  type: BlockTypes.modal;
  title: PlainTextObjectPayload;
  blocks: PresentationalBlockPayload[];
  close?: PlainTextObjectPayload;
  submit?: PlainTextObjectPayload;
  private_metadata?: string;
  callback_id?: string;
  clear_on_close?: boolean;
  notify_on_close?: boolean;
  external_id?: string;
  submit_disabled?: boolean;
}

export interface HomeTabPayload extends BlockPayload {
  type: BlockTypes.home;
  blocks: PresentationalBlockPayload[];
  private_metadata?: string;
  callback_id?: string;
  external_id?: string;
}

export type ViewPayload = ModalPayload | HomeTabPayload;
