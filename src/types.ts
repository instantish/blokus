/* eslint-disable no-use-before-define */
import { BlockTypes } from './contants';

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Properties helper type to pass to components.
 * @typeParam T  Props object, should be a nullable object.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type Props<T = {}> = T & {};

/**
 * Properties helper type to pass to components, include the children property
 * passed when executing components.
 * @typeParam T  Props object, should be a nullable object.
 */
export type PropsWithChildren<T = Props> = T & {
  children?: BlocksOrGenerators<Block>;
};

/**
 * The type definition for the function components given as generators to blocks.
 * @typeParam T  Props object.
 * @typeParam T  Output type, should be a valid block.
 */
export type FunctionalComponent<T extends PropsWithChildren, O> = (params: PropsWithChildren<T>) => Promise<O> | O;

/**
 * Virtual component block that's used for rendering the final blocks tree.
 * @typeParam T  Props object.
 * @typeParam T  Output type, should be a valid block.
 * @internal
 */
export interface ComponentBlock<T, O> {
  type: FunctionalComponent<T, O>;
  params: Props;
  children: BlocksOrGenerators<Block>;
}

/**
 * Helper type to define a block, pure type, or component generator for the
 * previous two. When used ot type a property of a block, this means a component
 * can be used to generate the property, or it can be given as-is.
 * @typeParam T  Props object.
 * @internal
 */
export type BlockOrGenerator<T> = T | ComponentBlock<Props, T> | null | undefined;

/**
 * Helper type to define an array of blocks, pure types, or component generators for the
 * previous two. When used ot type a property of a block, this means a component
 * can be used to generate the property, or it can be given as-is. Component can return both
 * single elements or arrays.
 * @typeParam T  Props object.
 * @internal
 */
export type BlocksOrGenerators<T> = (T | ComponentBlock<Props, T> | ComponentBlock<Props, T[]> | null | undefined)[];

/**
 * Base interface for blocks. Adds a mandatory type property to all blocks.
 * @internal
 */
export interface Block {
  type: string;
}

/**
 * A block that is used to hold interactive elements.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/blocks#actions|Official documentation}
 */
export interface ActionBlock extends Block {
  /**
   * The type of block. For an actions block, type is always actions.
   */
  type: BlockTypes.action;

  /**
   * A string acting as a unique identifier for a block. If not specified, a
   * block_id will be generated. You can use this block_id when you receive an
   * interaction payload to identify the source of the action. Maximum length
   * for this field is 255 characters. block_id should be unique for each
   * message and each iteration of a message. If a message is updated, use a
   * new block_id.
   */
  blockId?: string;

  /**
   * An array of interactive element objects - buttons, select menus, overflow
   * menus, or date pickers. There is a maximum of 5 elements in each action block.
   */
  elements: BlocksOrGenerators<ActionElement>;
}

/**
 * Displays message context, which can include both images and text.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/blocks#context|Official documentation}
 */
export interface ContextBlock extends Block {
  /**
   * The type of block. For a context block, type is always context.
   */
  type: BlockTypes.context;

  /**
   * A string acting as a unique identifier for a block. If not specified, a
   * block_id will be generated. You can use this block_id when you receive an
   * interaction payload to identify the source of the action. Maximum length
   * for this field is 255 characters. block_id should be unique for each
   * message and each iteration of a message. If a message is updated, use a
   * new block_id.
   */
  blockId?: string;

  /**
   * An array of image elements and text objects. Maximum number of items is 10.
   */
  elements: BlocksOrGenerators<ImageElementBlock | TextObject>;
}

/**
 * A content divider, like an <hr>, to split up different blocks inside of a
 * message. The divider block is nice and neat, requiring only a type.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/blocks#divider|Official documentation}
 */
export interface DividerBlock extends Block {
  /**
   * The type of block. For a divider block, type is always divider.
   */
  type: BlockTypes.divider;

  /**
   * A string acting as a unique identifier for a block. If not specified, a
   * block_id will be generated. You can use this block_id when you receive an
   * interaction payload to identify the source of the action. Maximum length
   * for this field is 255 characters. block_id should be unique for each
   * message and each iteration of a message. If a message is updated, use a
   * new block_id.
   */
  blockId?: string;
}

/**
 * Displays a remote file. You can't add this block to app surfaces directly,
 * but it will show up when retrieving messages that contain remote files.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/blocks#file|Official documentation}
 */
export interface FileBlock extends Block {
  /**
   * The type of block. For a file block, type is always file.
   */
  type: BlockTypes.file;

  /**
   * A string acting as a unique identifier for a block. If not specified, a
   * block_id will be generated. You can use this block_id when you receive an
   * interaction payload to identify the source of the action. Maximum length
   * for this field is 255 characters. block_id should be unique for each
   * message and each iteration of a message. If a message is updated, use a
   * new block_id.
   */
  blockId?: string;

  /**
   * The external unique ID for this file.
   */
  externalId: string;

  /**
   * At the moment, source will always be remote for a remote file.
   */
  source: 'remote';
}

/**
 * A header is a plain-text block that displays in a larger, bold font. Use it
 * to delineate between different groups of content in your app's surfaces.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/blocks#header|Official documentation}
 */
export interface HeaderBlock extends Block {
  /**
   * The type of block. For this block, type will always be header.
   */
  type: BlockTypes.header;

  /**
   * A string acting as a unique identifier for a block. If not specified, a
   * block_id will be generated. You can use this block_id when you receive an
   * interaction payload to identify the source of the action. Maximum length
   * for this field is 255 characters. block_id should be unique for each
   * message and each iteration of a message. If a message is updated, use a
   * new block_id.
   */
  blockId?: string;

  /**
   * The text for the block, in the form of a plain_text text object.
   * Maximum length for the text in this field is 150 characters.
   */
  text: BlockOrGenerator<PlainTextObject>;
}

/**
 * A simple image block, designed to make those cat photos really pop.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/blocks#image|Official documentation}
 */
export interface ImageBlock extends Block {
  /**
   * The type of block. For an image block, type is always image.
   */
  type: BlockTypes.image;

  /**
   * A string acting as a unique identifier for a block. If not specified, a
   * block_id will be generated. You can use this block_id when you receive an
   * interaction payload to identify the source of the action. Maximum length
   * for this field is 255 characters. block_id should be unique for each
   * message and each iteration of a message. If a message is updated, use a
   * new block_id.
   */
  blockId?: string;

  /**
   * The URL of the image to be displayed. Maximum length for this field is
   * 3000 characters.
   */
  imageUrl: string;

  /**
   * A plain-text summary of the image. This should not contain any markup.
   * Maximum length for this field is 2000 characters.
   */
  altText: string;

  /**
   * An optional title for the image in the form of a text object that can only
   * be of type: plain_text. Maximum length for the text in this field is
   * 2000 characters.
   */
  title?: BlockOrGenerator<PlainTextObject>;
}

/**
 * A block that collects information from users - it can hold a plain-text input
 * element, a checkbox element, a radio button element, a select menu element,
 * a multi-select menu element, or a datepicker.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/blocks#input|Official documentation}
 */
export interface InputBlock extends Block {
  /**
   * The type of block. For an input block, type is always input.
   */
  type: BlockTypes.input;

  /**
   * A string acting as a unique identifier for a block. If not specified, a
   * block_id will be generated. You can use this block_id when you receive an
   * interaction payload to identify the source of the action. Maximum length
   * for this field is 255 characters. block_id should be unique for each
   * message and each iteration of a message. If a message is updated, use a
   * new block_id.
   */
  blockId?: string;

  /**
   * A label that appears above an input element in the form of a text object
   * that must have type of plain_text. Maximum length for the text in this
   * field is 2000 characters.
   */
  label: BlockOrGenerator<PlainTextObject>;

  /**
   * A plain-text input element, a checkbox element, a radio button element,
   * a select menu element, a multi-select menu element, or a datepicker.
   */
  element: BlockOrGenerator<FormElement>;

  /**
   * A boolean that indicates whether or not the use of elements in this block
   * should dispatch a block_actions payload. Defaults to false.
   */
  dispatchAction?: boolean;

  /**
   * An optional hint that appears below an input element in a lighter grey.
   * It must be a a text object with a type of plain_text. Maximum length for
   * the text in this field is 2000 characters.
   */
  hint?: BlockOrGenerator<PlainTextObject>;

  /**
   * A boolean that indicates whether the input element may be empty when a
   * user submits the modal. Defaults to false.
   */
  optional?: boolean;
}

/**
 * A section is one of the most flexible blocks available - it can be used as a
 * simple text block, in combination with text fields, or side-by-side with any
 * of the available block elements.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/blocks#section|Official documentation}
 */
export interface SectionBlock extends Block {
  /**
   * The type of block. For a section block, type will always be section.
   */
  type: BlockTypes.section;

  /**
   * A string acting as a unique identifier for a block. If not specified, a
   * block_id will be generated. You can use this block_id when you receive an
   * interaction payload to identify the source of the action. Maximum length
   * for this field is 255 characters. block_id should be unique for each
   * message and each iteration of a message. If a message is updated, use a
   * new block_id.
   */
  blockId?: string;

  /**
   * The text for the block, in the form of a text object. Maximum length for
   * the text in this field is 3000 characters. This field is not required if a
   * valid array of fields objects is provided instead.
   */
  text?: BlockOrGenerator<TextObject>;

  /**
   * Required if no text is provided. An array of text objects. Any text objects
   * included with fields will be rendered in a compact format that allows for 2
   * columns of side-by-side text. Maximum number of items is 10. Maximum length
   * for the text in each item is 2000 characters.
   */
  fields?: BlocksOrGenerators<TextObject>;

  /**
   * One of the available element objects.
   */
  accessory?: BlockOrGenerator<ElementBlock>;
}

/**
 * Blocks available in the two common views, modals and messages.
 * @internal
 */
export type ViewBlocks =
  | ActionBlock
  | ContextBlock
  | DividerBlock
  | HeaderBlock
  | ImageBlock
  | InputBlock
  | SectionBlock;

/**
 * Blocks available for message views.
 * @internal
 */
export type MessageBlock =
  | ActionBlock
  | ContextBlock
  | DividerBlock
  | HeaderBlock
  | ImageBlock
  | FileBlock
  | SectionBlock;

/**
 * Base interface for interactive elements. Adds a mandatory actionId property
 * to all blocks.
 * @extends Block
 * @internal
 */
interface InteractiveElementBlock extends Block {
  /**
   * An identifier for this action. You can use this when you receive an
   * interaction payload to identify the source of the action. Should be unique
   * among all other action_ids in the containing block. Maximum length for
   * this field is 255 characters.
   */
  actionId: string;
}

/**
 * An interactive component that inserts a button. The button can be a trigger
 * for anything from opening a simple link to starting a complex workflow.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#button|Official documentation}
 */
export interface ButtonElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always button.
   */
  type: BlockTypes.button;

  /**
   * A text object that defines the button's text. Can only be of type:
   * plain_text. Maximum length for the text in this field is 75 characters.
   */
  text: BlockOrGenerator<PlainTextObject>;

  /**
   * A URL to load in the user's browser when the button is clicked. Maximum
   * length for this field is 3000 characters. If you're using url, you'll
   * still receive an interaction payload and will need to send an
   * acknowledgement response.
   */
  url?: string;

  /**
   * The value to send along with the interaction payload. Maximum length
   * for this field is 2000 characters.
   */
  value?: string;

  /**
   * Decorates buttons with alternative visual color schemes.
   * Use this option with restraint.
   *
   * `primary` gives buttons a green outline and text, ideal for affirmation or
   * confirmation actions. primary should only be used for one button within a
   * set.
   *
   * `danger` gives buttons a red outline and text, and should be used when the
   * action is destructive. Use danger even more sparingly than primary.
   *
   * If you don't include this field, the default button style will be used.
   */
  style?: 'primary' | 'danger';

  /**
   * A confirm object that defines an optional confirmation dialog after the
   * button is clicked.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * A checkbox group that allows a user to choose multiple items from a list of
 * possible options.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#checkboxes|Official documentation}
 */
export interface CheckboxGroupElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always checkboxes.
   */
  type: BlockTypes.checkboxes;

  /**
   * An array of option objects. A maximum of 10 options are allowed.
   */
  options: BlocksOrGenerators<OptionObject>;

  /**
   * An array of option objects that exactly matches one or more of the options
   * within options. These options will be selected when the checkbox group
   * initially loads.
   */
  initialOptions?: BlocksOrGenerators<OptionObject>;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after clicking one of the checkboxes in this element.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * An element which lets users easily select a date from a calendar style UI.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#datepicker|Official documentation}
 */
export interface DatepickerElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always datepicker.
   */
  type: BlockTypes.datepicker;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the datepicker. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<TextObject>;

  /**
   * The initial date that is selected when the element is loaded. This should
   * be in the format `YYYY-MM-DD`.
   */
  initialDate?: string;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after a date is selected.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * An element to insert an image as part of a larger block of content. If you
 * want a block with only an image in it, you're looking for the image block.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#image|Official documentation}
 */
export interface ImageElementBlock extends Block {
  /**
   * The type of element. In this case type is always image.
   */
  type: BlockTypes.image;

  /**
   * The URL of the image to be displayed.
   */
  imageUrl: string;

  /**
   * A plain-text summary of the image. This should not contain any markup.
   */
  altText?: string;
}

/**
 * A multi-select menu allows a user to select multiple items from a list of
 * options. Just like regular select menus, multi-select menus also include
 * type-ahead functionality, where a user can type a part or all of an option
 * string to filter the list.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#multi_select|Official documentation}
 */
export interface StaticMultiSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always multi_static_select.
   */
  type: BlockTypes.multiStaticSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * An array of option objects. Maximum number of options is 100. If
   * option_groups is specified, this field should not be.
   */
  options?: BlocksOrGenerators<OptionObject>;

  /**
   * An array of option group objects. Maximum number of option groups is 100.
   * If options is specified, this field should not be.
   */
  optionGroups?: BlocksOrGenerators<OptionGroupObject>;

  /**
   * An array of option objects that exactly match one or more of the options
   * within options or option_groups. These options will be selected when the
   * menu initially loads.
   */
  initialOptions?: BlocksOrGenerators<OptionObject>;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * before the multi-select choices are submitted.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;

  /**
   * Specifies the maximum number of items that can be selected in the menu.
   * Minimum number is 1.
   */
  maxSelectedItems?: number;

  /**
   * Internal property used to divide the given options in the creator function
   * into the 2 options properties.
   * @internal
   */
  givenOptions?: BlocksOrGenerators<OptionObject | OptionGroupObject>;
}

/**
 * This menu will load its options from an external data source, allowing for
 * a dynamic list of options.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select|Official documentation}
 */
export interface ExternalMultiSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always multi_external_select.
   */
  type: BlockTypes.multiExternalSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * When the typeahead field is used, a request will be sent on every character
   * change. If you prefer fewer requests or more fully ideated queries, use the
   * min_query_length attribute to tell Slack the fewest number of typed
   * characters required before dispatch. The default value is 3.
   */
  minQueryLength?: number;

  /**
   * An array of option objects that exactly match one or more of the options
   * within options or option_groups. These options will be selected when the
   * menu initially loads.
   */
  initialOptions?: BlocksOrGenerators<OptionObject>;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * before the multi-select choices are submitted.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;

  /**
   * Specifies the maximum number of items that can be selected in the menu.
   * Minimum number is 1.
   */
  maxSelectedItems?: number;
}

/**
 * This multi-select menu will populate its options with a list of Slack users
 * visible to the current user in the active workspace.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select|Official documentation}
 */
export interface UserMultiSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always multi_users_select.
   */
  type: BlockTypes.multiUsersSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * An array of user IDs of any valid users to be pre-selected when the menu
   * loads.
   */
  initialUsers?: string[];

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * before the multi-select choices are submitted.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;

  /**
   * Specifies the maximum number of items that can be selected in the menu.
   * Minimum number is 1.
   */
  maxSelectedItems?: number;
}

/**
 * This multi-select menu will populate its options with a list of public and
 * private channels, DMs, and MPIMs visible to the current user in the active
 * workspace.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|Official documentation}
 */
export interface ConversationMultiSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always multi_conversations_select.
   */
  type: BlockTypes.multiConversationsSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * An array of one or more IDs of any valid conversations to be pre-selected
   * when the menu loads. If default_to_current_conversation is also supplied,
   * initial_conversations will be ignored.
   */
  initialConversations?: string[];

  /**
   * Pre-populates the select menu with the conversation that the user was
   * viewing when they opened the modal, if available. Default is false.
   */
  defaultToCurrentConversation?: boolean;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * before the multi-select choices are submitted.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;

  /**
   * Specifies the maximum number of items that can be selected in the menu.
   * Minimum number is 1.
   */
  maxSelectedItems?: number;

  /**
   * A filter object that reduces the list of available conversations using the
   * specified criteria.
   */
  filter?: BlockOrGenerator<FilterObject>;
}

/**
 * This multi-select menu will populate its options with a list of public
 * channels visible to the current user in the active workspace.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select|Official documentation}
 */
export interface PublicChannelsMultiSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always multi_channels_select.
   */
  type: BlockTypes.multiChannelsSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * An array of one or more IDs of any valid public channel to be pre-selected
   * when the menu loads.
   */
  initialChannels?: string[];

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * before the multi-select choices are submitted.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;

  /**
   * Specifies the maximum number of items that can be selected in the menu.
   * Minimum number is 1.
   */
  maxSelectedItems?: number;
}

/**
 * Union of all the multi select elements.
 * @internal
 */
export type MultiSelectElement =
  | StaticMultiSelectMenuElement
  | ExternalMultiSelectMenuElement
  | UserMultiSelectMenuElement
  | ConversationMultiSelectMenuElement
  | PublicChannelsMultiSelectMenuElement;

/**
 * This is like a cross between a button and a select menu - when a user clicks
 * on this overflow button, they will be presented with a list of options to
 * choose from. Unlike the select menu, there is no typeahead field, and the
 * button always appears with an ellipsis ("…") rather than customisable text.
 *
 * As such, it is usually used if you want a more compact layout than a select
 * menu, or to supply a list of less visually important actions after a row of
 * buttons. You can also specify simple URL links as overflow menu options,
 * instead of actions.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#overflow|Official documentation}
 */
export interface OverflowMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always overflow.
   */
  type: BlockTypes.overflow;

  /**
   * An array of option objects to display in the menu. Maximum number of
   * options is 5, minimum is 2.
   */
  options: BlocksOrGenerators<OptionObject>;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after a menu item is selected.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * A plain-text input, similar to the HTML <input> tag, creates a field where a
 * user can enter freeform data. It can appear as a single-line field or a
 * larger textarea using the multiline flag.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#input|Official documentation}
 */
export interface PlainTextInputElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always plain_text_input.
   */
  type: BlockTypes.plainTextInput;

  /**
   * A plain_text only text object that defines the placeholder text shown in
   * the plain-text input. Maximum length for the text in this field is 150
   * characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * The initial value in the plain-text input when it is loaded.
   */
  initialValue?: string;

  /**
   * Indicates whether the input will be a single line (false) or a larger
   * textarea (true). Defaults to false.
   */
  multiline?: boolean;

  /**
   * The minimum length of input that the user must provide. If the user
   * provides less, they will receive an error. Maximum value is 3000.
   */
  minLength?: number;

  /**
   * The maximum length of input that the user can provide. If the user provides
   * more, they will receive an error.
   */
  maxLength?: number;

  /**
   * A dispatch configuration object that determines when during text input the
   * element returns a block_actions payload.
   */
  dispatchActionConfig?: DispatchActionConfigObject;
}

/**
 * A radio button group that allows a user to choose one item from a list of
 * possible options.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#radio|Official documentation}
 */
export interface RadioButtonGroupElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always radio_buttons.
   */
  type: BlockTypes.radioButtons;

  /**
   * An array of option objects. A maximum of 10 options are allowed.
   */
  options: BlocksOrGenerators<OptionObject>;

  /**
   * An option object that exactly matches one of the options within options.
   * This option will be selected when the radio button group initially loads.
   */
  initialOption: BlockOrGenerator<OptionObject>;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after clicking one of the radio buttons in this element.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * A select menu, just as with a standard HTML <select> tag, creates a drop down
 * menu with a list of options for a user to choose. The select menu also
 * includes type-ahead functionality, where a user can type a part or all of an
 * option string to filter the list.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#select|Official documentation}
 */
export interface StaticSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always static_select.
   */
  type: BlockTypes.staticSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * An array of option objects. Maximum number of options is 100. If
   * option_groups is specified, this field should not be.
   */
  options?: BlocksOrGenerators<OptionObject>;

  /**
   * An array of option group objects. Maximum number of option groups is 100.
   * If options is specified, this field should not be.
   */
  optionGroups?: BlocksOrGenerators<OptionGroupObject>;

  /**
   * A single option that exactly matches one of the options within options or
   * option_groups. This option will be selected when the menu initially loads.
   */
  initialOption?: BlockOrGenerator<OptionObject>;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after a menu item is selected.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;

  /**
   * Internal property used to divide the given options in the creator function
   * into the 2 options properties.
   * @internal
   */
  givenOptions?: BlocksOrGenerators<OptionObject | OptionGroupObject>;
}

/**
 * This select menu will load its options from an external data source, allowing
 * for a dynamic list of options.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#external_select|Official documentation}
 */
export interface ExternalSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always external_select.
   */
  type: BlockTypes.externalSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * When the typeahead field is used, a request will be sent on every character
   * change. If you prefer fewer requests or more fully ideated queries, use the
   * min_query_length attribute to tell Slack the fewest number of typed
   * characters required before dispatch. The default value is 3.
   */
  minQueryLength?: number;

  /**
   * A single option that exactly matches one of the options within the options
   * or option_groups loaded from the external data source. This option will
   * be selected when the menu initially loads.
   */
  initialOption?: BlockOrGenerator<OptionObject>;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after a menu item is selected.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * This select menu will populate its options with a list of Slack users visible
 * to the current user in the active workspace.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#users_select|Official documentation}
 */
export interface UserSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always users_select.
   */
  type: BlockTypes.usersSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * The user ID of any valid user to be pre-selected when the menu loads.
   */
  initialUser?: string;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after a menu item is selected.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * This select menu will populate its options with a list of public and private
 * channels, DMs, and MPIMs visible to the current user in the active workspace.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|Official documentation}
 */
export interface ConversationSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always conversations_select.
   */
  type: BlockTypes.conversationsSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * The ID of any valid conversation to be pre-selected when the menu loads.
   * If default_to_current_conversation is also supplied, initial_conversation
   * will take precedence.
   */
  initialConversation?: string;

  /**
   * Pre-populates the select menu with the conversation that the user was
   * viewing when they opened the modal, if available. Default is false.
   */
  defaultToCurrentConversation?: boolean;

  /**
   * A confirm object that defines an optional confirmation dialog that
   * appears after a menu item is selected.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;

  /**
   * A filter object that reduces the list of available conversations using the
   * specified criteria.
   */
  filter?: BlockOrGenerator<FilterObject>;
}

/**
 * This select menu will populate its options with a list of public channels
 * visible to the current user in the active workspace.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#channel_select|Official documentation}
 */
export interface PublicChannelsSelectMenuElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always channels_select.
   */
  type: BlockTypes.channelsSelect;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the menu. Maximum length for the text in this field is 150 characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * The ID of any valid public channel to be pre-selected when the menu loads.
   */
  initialChannel: string;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after a menu item is selected.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * An element which allows selection of a time of day.
 *
 * On desktop clients, this time picker will take the form of a dropdown list
 * with free-text entry for precise choices.On mobile clients, the time picker
 * will use native time picker UIs.
 * @extends InteractiveElementBlock
 * @see {@link https://api.slack.com/reference/block-kit/block-elements#timepicker|Official documentation}
 */
export interface TimepickerElement extends InteractiveElementBlock {
  /**
   * The type of element. In this case type is always timepicker.
   */
  type: BlockTypes.timepicker;

  /**
   * A plain_text only text object that defines the placeholder text shown on
   * the timepicker. Maximum length for the text in this field is 150
   * characters.
   */
  placeholder?: BlockOrGenerator<PlainTextObject>;

  /**
   * The initial time that is selected when the element is loaded. This should
   * be in the format `HH:mm`, where `HH` is the 24-hour format of an hour
   * (00 to 23) and `mm` is minutes with leading zeros (00 to 59), for example
   * 22:25 for 10:25pm.
   */
  initialTime?: string;

  /**
   * A confirm object that defines an optional confirmation dialog that appears
   * after a time is selected.
   */
  confirm?: BlockOrGenerator<ConfirmObject>;
}

/**
 * Union of all the select elements.
 * @internal
 */
export type SelectElement =
  | StaticSelectMenuElement
  | ExternalSelectMenuElement
  | UserSelectMenuElement
  | ConversationSelectMenuElement
  | PublicChannelsSelectMenuElement;

/**
 * Union of all the form elements.
 * @internal
 */
export type FormElement =
  | PlainTextInputElement
  | CheckboxGroupElement
  | RadioButtonGroupElement
  | SelectElement
  | MultiSelectElement
  | DatepickerElement;

/**
 * Union of all the action elements.
 * @internal
 */
export type ActionElement =
  | ButtonElement
  | SelectElement
  | MultiSelectElement
  | OverflowMenuElement
  | DatepickerElement;

/**
 * Union of all the elements.
 * @internal
 */
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

/**
 * An object containing some text, formatted as plain_text.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#text|Official documentation}
 */
export interface PlainTextObject extends Block {
  /**
   * The type of element. In this case type is always plain_text.
   */
  type: BlockTypes.plainText;

  /**
   * The text for the block. This field accepts any of the standard text
   * formatting markup when type is mrkdwn.
   */
  text: string;

  /**
   * Indicates whether emojis in a text field should be escaped into the colon
   * emoji format. This field is only usable when type is plain_text.
   */
  emoji?: string;
}

/**
 * An object containing some text, formatted as mrkdwn, our proprietary
 * contribution to the much beloved Markdown standard.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#text|Official documentation}
 */
export interface MarkdownTextObject extends Block {
  /**
   * The type of element. In this case type is always mrkdwn.
   */
  type: BlockTypes.mrkdwn;

  /**
   * The text for the block. This field accepts any of the standard text
   * formatting markup when type is mrkdwn.
   */
  text: string;

  /**
   * When set to false (as is default) URLs will be auto-converted into links,
   * conversation names will be link-ified, and certain mentions will be
   * automatically parsed.
   *
   * Using a value of true will skip any preprocessing of this nature, although
   * you can still include manual parsing strings. This field is only usable
   * when type is mrkdwn.
   */
  verbatim?: string;
}

/**
 * An object containing some text, formatted either as plain_text or using
 * mrkdwn, our proprietary contribution to the much beloved Markdown standard.
 * @internal
 */
export type TextObject = PlainTextObject | MarkdownTextObject;

/**
 * An object that defines a dialog that provides a confirmation step to any
 * interactive element. This dialog will ask the user to confirm their action
 * by offering a confirm and deny buttons.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|Official documentation}
 */
export interface ConfirmObject extends Block {
  /**
   * Internal type property
   * @internal
   */
  type: BlockTypes.confirm;

  /**
   * A plain_text-only text object that defines the dialog's title. Maximum
   * length for this field is 100 characters.
   */
  title: BlockOrGenerator<PlainTextObject>;

  /**
   * A text object that defines the explanatory text that appears in the
   * confirm dialog. Maximum length for the text in this field is 300
   * characters.
   */
  text: BlockOrGenerator<TextObject>;

  /**
   * A plain_text-only text object to define the text of the button that
   * confirms the action. Maximum length for the text in this field is 30
   * characters.
   */
  confirm: BlockOrGenerator<PlainTextObject>;

  /**
   * A plain_text-only text object to define the text of the button that cancels
   * the action. Maximum length for the text in this field is 30 characters.
   */
  deny: BlockOrGenerator<PlainTextObject>;

  /**
   * Defines the color scheme applied to the confirm button. A value of danger
   * will display the button with a red background on desktop, or red text on
   * mobile. A value of primary will display the button with a green background
   * on desktop, or blue text on mobile. If this field is not provided, the
   * default value will be primary.
   */
  style?: 'primary' | 'danger';
}

/**
 * An object that represents a single selectable item in a select menu,
 * multi-select menu, checkbox group, radio button group, or overflow menu.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#option|Official documentation}
 */
export interface OptionObject extends Block {
  /**
   * Internal type property
   * @internal
   */
  type: BlockTypes.option;

  /**
   * A text object that defines the text shown in the option on the menu.
   * Overflow, select, and multi-select menus can only use plain_text objects,
   * while radio buttons and checkboxes can use mrkdwn text objects. Maximum
   * length for the text in this field is 75 characters.
   */
  text: BlockOrGenerator<TextObject>;

  /**
   * A unique string value that will be passed to your app when this option is
   * chosen. Maximum length for this field is 75 characters.
   */
  value: string;

  /**
   * A plain_text only text object that defines a line of descriptive text
   * shown below the text field beside the radio button. Maximum length for
   * the text object within this field is 75 characters.
   */
  description?: BlockOrGenerator<PlainTextObject>;

  /**
   * A URL to load in the user's browser when the option is clicked. The url
   * attribute is only available in overflow menus. Maximum length for this
   * field is 3000 characters. If you're using url, you'll still receive an
   * interaction payload and will need to send an acknowledgement response.
   */
  url?: string;
}

/**
 * Provides a way to group options in a select menu or multi-select menu.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#option_group|Official documentation}
 */
export interface OptionGroupObject extends Block {
  /**
   * Internal type property
   * @internal
   */
  type: BlockTypes.optionGroup;

  /**
   * A plain_text only text object that defines the label shown above this group
   * of options. Maximum length for the text in this field is 75 characters.
   */
  label: BlockOrGenerator<PlainTextObject>;

  /**
   * An array of option objects that belong to this specific group. Maximum of
   * 100 items.
   */
  options: BlocksOrGenerators<OptionObject>;
}

/**
 * Determines when a plain-text input element will return a block_actions
 * interaction payload.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#dispatch_action_config|Official documentation}
 */
export interface DispatchActionConfigObject extends Block {
  /**
   * Internal type property
   * @internal
   */
  type: BlockTypes.dispatchAction;

  /**
   * An array of interaction types that you would like to receive a
   * block_actions payload for. Should be one or both of:
   *
   * `on_enter_pressed` — payload is dispatched when user presses the enter key
   * while the input is in focus. Hint text will appear underneath the input
   * explaining to the user to press enter to submit.
   *
   * `on_character_entered` — payload is dispatched when a character is entered
   * (or removed) in the input.
   */
  triggerActionsOn?: ('on_enter_pressed' | 'on_character_entered')[];
}

/**
 * Provides a way to filter the list of options in a conversations select menu
 * or conversations multi-select menu.
 * @extends Block
 * @see {@link https://api.slack.com/reference/block-kit/composition-objects#filter_conversations|Official documentation}
 */
export interface FilterObject extends Block {
  /**
   * Internal type property
   * @internal
   */
  type: BlockTypes.filter;

  /**
   * Indicates which type of conversations should be included in the list. When
   * this field is provided, any conversations that do not match will be
   * excluded
   *
   * You should provide an array of strings from the following options: `im`,
   * `mpim`, `private`, and `public`. The array cannot be empty.
   */
  include?: ('im' | 'mpim' | 'private' | 'public')[];

  /**
   * Indicates whether to exclude external shared channels from conversation
   * lists. Defaults to false.
   */
  excludeExternalSharedChannels?: boolean;

  /**
   * Indicates whether to exclude bot users from conversation lists.
   * Defaults to false.
   */
  excludeBotUsers?: boolean;
}

/**
 * Union of all the composition objects.
 * @internal
 */
export type CompositionObjects =
  | TextObject
  | ConfirmObject
  | OptionObject
  | OptionGroupObject
  | DispatchActionConfigObject
  | FilterObject;

/**
 * Modals provide focused spaces ideal for requesting and collecting data from
 * users, or temporarily displaying dynamic and interactive information.
 * @extends Block
 * @see {@link https://api.slack.com/reference/surfaces/views|Official documentation}
 */
export interface ModalView extends Block {
  /**
   * The type of view. In this case type is always modal.
   */
  type: BlockTypes.modal;

  /**
   * The title that appears in the top-left of the modal. Must be a plain_text
   * text element with a max length of 24 characters.
   */
  title: BlockOrGenerator<PlainTextObject>;

  /**
   * An array of blocks that defines the content of the view. Max of 100 blocks.
   */
  blocks: BlocksOrGenerators<ViewBlocks>;

  /**
   * An optional plain_text element that defines the text displayed in the close
   * button at the bottom-right of the view. Max length of 24 characters.
   */
  close?: BlockOrGenerator<PlainTextObject>;

  /**
   * An optional plain_text element that defines the text displayed in the
   * submit button at the bottom-right of the view. submit is required when an
   * input block is within the blocks array. Max length of 24 characters.
   */
  submit?: BlockOrGenerator<PlainTextObject>;

  /**
   * An optional string that will be sent to your app in view_submission and
   * block_actions events. Max length of 3000 characters.
   */
  privateMetadata?: string;

  /**
   * An identifier to recognize interactions and submissions of this particular
   * view. Don't use this to store sensitive information (use private_metadata
   * instead). Max length of 255 characters.
   */
  callbackId?: string;

  /**
   * When set to true, clicking on the close button will clear all views in a
   * modal and close it. Defaults to false.
   */
  clearOnClose?: boolean;

  /**
   * Indicates whether Slack will send your request URL a view_closed event
   * when a user clicks the close button. Defaults to false.
   */
  notifyOnClose?: boolean;

  /**
   * A custom identifier that must be unique for all views on a per-team basis.
   */
  externalId?: string;

  /**
   * When set to true, disables the submit button until the user has completed
   * one or more inputs. This property is primarily for configuration modals.
   */
  submitDisabled?: boolean;
}

/**
 * The Home tab is a persistent, yet dynamic interface for apps.
 * @extends Block
 * @see {@link https://api.slack.com/reference/surfaces/views|Official documentation}
 */
export interface HomeTabView extends Block {
  /**
   * The type of view. In this case type is always home.
   */
  type: BlockTypes.home;

  /**
   * An array of blocks that defines the content of the view. Max of 100 blocks.
   */
  blocks: BlocksOrGenerators<ViewBlocks>;

  /**
   * An optional string that will be sent to your app in view_submission and
   * block_actions events. Max length of 3000 characters.
   */
  privateMetadata?: string;

  /**
   * An identifier to recognize interactions and submissions of this particular
   * view. Don't use this to store sensitive information (use private_metadata
   * instead). Max length of 255 characters.
   */
  callbackId?: string;

  /**
   * A custom identifier that must be unique for all views on a per-team basis.
   */
  externalId?: string;
}

/**
 * Messages are one of the basic ingredients of Slack apps.
 * @extends Block
 * @see {@link https://api.slack.com/reference/surfaces/views|Official documentation}
 */
export interface MessageView extends Block {
  /**
   * The type of view. In this case type is always message.
   */
  type: BlockTypes.message;

  /**
   * The usage of this field changes depending on whether you're using blocks or
   * not. If you are, this is used as a fallback string to display in
   * notifications. If you aren't, this is the main body text of the message.
   * It can be formatted as plain text, or with mrkdwn. This field is not
   * enforced as required when using blocks, however it is highly recommended
   * that you include it as the aforementioned fallback.
   */
  text: string;

  /**
   * An array of blocks that defines the content of the view. Max of 50 blocks.
   */
  blocks?: BlocksOrGenerators<MessageBlock>;

  /**
   * The ID of another un-threaded message to reply to.
   */
  threadTS?: string;

  /**
   * Determines whether the text field is rendered according to mrkdwn
   * formatting or not. Defaults to true.
   */
  mrkdwn?: boolean;
}

export type View = ModalView | HomeTabView | MessageView;
