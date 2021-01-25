/* eslint-disable no-unused-vars */
export enum BlockTypes {
  action = 'action',
  context = 'context',
  divider = 'divider',
  file = 'file',
  header = 'header',
  image = 'image',
  input = 'input',
  section = 'section',
  button = 'button',
  checkboxes = 'checkboxes',
  datepicker = 'datepicker',
  multiStaticSelect = 'multi_static_select',
  multiExternalSelect = 'multi_external_select',
  multiUsersSelect = 'multi_users_select',
  multiConversationsSelect = 'multi_conversations_select',
  multiChannelsSelect = 'multi_channels_select',
  overflow = 'overflow',
  plainTextInput = 'plain_text_input',
  radioButtons = 'radio_buttons',
  staticSelect = 'static_select',
  externalSelect = 'external_select',
  usersSelect = 'users_select',
  conversationsSelect = 'conversations_select',
  channelsSelect = 'channels_select',
  timepicker = 'timepicker',
  plainText = 'plain_text',
  mrkdwn = 'mrkdwn',
  confirm = 'confirm',
  option = 'option',
  optionGroup = 'option_group',
  dispatchAction = 'dispatch_action',
  filter = 'filter',
  modal = 'modal',
  home = 'home',
  message = 'message',
}

export const blockLimits = {
  blockIdLength: 255,
};

export const actionBlockLimits = {
  ...blockLimits,
  elementsLength: 5,
  elementTypes: [
    BlockTypes.button,
    BlockTypes.staticSelect,
    BlockTypes.externalSelect,
    BlockTypes.usersSelect,
    BlockTypes.conversationsSelect,
    BlockTypes.channelsSelect,
    BlockTypes.multiStaticSelect,
    BlockTypes.multiExternalSelect,
    BlockTypes.multiUsersSelect,
    BlockTypes.multiConversationsSelect,
    BlockTypes.multiChannelsSelect,
    BlockTypes.overflow,
    BlockTypes.datepicker,
  ],
  required: ['elements'],
};

export const contextBlockLimits = {
  ...blockLimits,
  elementsLength: 10,
  elementTypes: [BlockTypes.image, BlockTypes.plainText, BlockTypes.mrkdwn],
  required: ['elements'],
};

export const fileBlockLimits = {
  ...blockLimits,
  sourceType: ['remote'],
  required: ['source', 'external_id'],
};

export const headerBlockLimits = {
  ...blockLimits,
  textLength: 150,
  textType: 'plain_text',
  required: ['text'],
};

export const textBlockLimits = {
  ...blockLimits,
  textLength: 150,
};

export const imageBlockLimits = {
  ...blockLimits,
  imageUrlLength: 3000,
  altTextLength: 2000,
  titleType: 'plain_text',
  titleLength: 2000,
  required: ['alt_text', 'image_url'],
};

export const inputBlockLimits = {
  ...blockLimits,
  labelType: 'plain_text',
  labelLength: 2000,
  hintType: 'plain_text',
  hintLength: 2000,
  elementTypes: [
    BlockTypes.plainTextInput,
    BlockTypes.checkboxes,
    BlockTypes.radioButtons,
    BlockTypes.staticSelect,
    BlockTypes.externalSelect,
    BlockTypes.usersSelect,
    BlockTypes.conversationsSelect,
    BlockTypes.channelsSelect,
    BlockTypes.multiStaticSelect,
    BlockTypes.multiExternalSelect,
    BlockTypes.multiUsersSelect,
    BlockTypes.multiConversationsSelect,
    BlockTypes.multiChannelsSelect,
    BlockTypes.datepicker,
  ],
  required: ['label', 'element'],
};

export const sectionBlockLimits = {
  ...blockLimits,
  textType: 'plain_text',
  textLength: 3000,
  fieldsLength: 10,
  fieldsTextTypes: ['plain_text', 'mrkdwn'],
  fieldsTextLength: 2000,
  accessoryTypes: [
    BlockTypes.button,
    BlockTypes.datepicker,
    BlockTypes.image,
    BlockTypes.plainTextInput,
    BlockTypes.checkboxes,
    BlockTypes.radioButtons,
    BlockTypes.staticSelect,
    BlockTypes.externalSelect,
    BlockTypes.usersSelect,
    BlockTypes.conversationsSelect,
    BlockTypes.channelsSelect,
    BlockTypes.multiStaticSelect,
    BlockTypes.multiExternalSelect,
    BlockTypes.multiUsersSelect,
    BlockTypes.multiConversationsSelect,
    BlockTypes.multiChannelsSelect,
    BlockTypes.timepicker,
    BlockTypes.overflow,
  ],
};

export const interactiveElementsLimits = {
  actionIdLength: 255,
  required: ['action_id'],
};

export const buttonElementLimits = {
  ...interactiveElementsLimits,
  textType: 'plain_text',
  textLength: 75,
  urlLength: 3000,
  valueLength: 2000,
  styleOptions: ['primary', 'danger'],
  required: ['action_id', 'text'],
};

export const checkboxGroupElementLimits = {
  ...interactiveElementsLimits,
  optionsLength: 10,
  required: ['action_id', 'options'],
};

export const datepickerElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  placeholderLength: 150,
};

export const imageElementLimits = {
  required: ['image_url', 'alt_text'],
};

export const multiSelectMenuElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  placeholderLength: 150,
  maxSelectedItemsMin: 1,
  required: ['action_id', 'placeholder'],
};

export const staticMultiSelectMenuElementLimits = {
  ...multiSelectMenuElementLimits,
  optionsLength: 100,
  optionGroupsLength: 100,
};

export const overflowMenuElementLimits = {
  ...interactiveElementsLimits,
  optionsLength: 5,
  optionsMin: 2,
  required: ['action_id', 'options'],
};

export const plainTextInputElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  placeholderLength: 150,
  minLengthMax: 3000,
};

export const radioButtonElementLimits = {
  ...interactiveElementsLimits,
  optionsLength: 10,
};

export const selectMenuElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  placeholderLength: 150,
  required: ['action_id', 'placeholder'],
};

export const staticSelectMenuElementLimits = {
  ...selectMenuElementLimits,
  optionsLength: 100,
  optionGroupsLength: 100,
};

export const timerpickerElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  placeholderLength: 150,
  required: ['action_id'],
};

export const textObjectLimits = {
  required: ['type', 'text'],
};

export const confirmObjectLimits = {
  titleType: 'plain_text',
  titleLength: 100,
  textLength: 300,
  confirmType: 'plain_text',
  confirmLength: 30,
  denyType: 'plain_text',
  denyLength: 30,
  styleOptions: ['primary', 'danger'],
  required: ['title', 'text', 'confirm', 'deny'],
};

export const optionObjectLimits = {
  urlLength: 3000,
  valueLength: 75,
  textLength: 75,
  descriptionLength: 75,
  descriptionType: 'plain_text',
  required: ['text', 'value'],
};

export const optionGroupObjectLimits = {
  labelType: 'plain_text',
  labelLength: 75,
  optionsLength: 100,
  required: ['label', 'options'],
};

export const dispatchActionConfigObjectLimits = {
  triggerActionsOnOptions: ['on_enter_pressed', 'on_character_entered'],
  triggerActionsOnLength: 2,
};

export const filterObjectLimits = {
  includeOptions: ['im', 'mpim', 'private', 'public'],
  includeLength: 4,
  includeMin: 1,
};

export const modalLimits = {
  titleType: 'plain_text',
  titleLength: 24,
  blocksLength: 100,
  submitType: 'plain_text',
  submitLength: 24,
  closeType: 'plain_text',
  closeLength: 24,
  privateMetadataLength: 3000,
  callbackIdLength: 255,
  blockTypes: [
    BlockTypes.action,
    BlockTypes.context,
    BlockTypes.divider,
    BlockTypes.header,
    BlockTypes.image,
    BlockTypes.input,
    BlockTypes.section,
  ],
  required: ['title', 'blocks'],
};

export const homeLimits = {
  blocksLength: 100,
  privateMetadataLength: 3000,
  callbackIdLength: 255,
  blockTypes: [
    BlockTypes.action,
    BlockTypes.context,
    BlockTypes.divider,
    BlockTypes.header,
    BlockTypes.image,
    BlockTypes.input,
    BlockTypes.section,
  ],
  required: ['blocks'],
};

export const messageLimits = {
  blocksLength: 50,
  blockTypes: [
    BlockTypes.action,
    BlockTypes.context,
    BlockTypes.divider,
    BlockTypes.header,
    BlockTypes.image,
    BlockTypes.file,
    BlockTypes.section,
  ],
  required: ['text'],
};
