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
}

export const blockLimits = {
  blockIdLength: 255,
};

export const actionBlockLimits = {
  ...blockLimits,
  elementsLength: 5,
};

export const contextBlockLimits = {
  ...blockLimits,
  elementsLength: 10,
};

export const dividerBlockLimits = {
  ...blockLimits,
};

export const fileBlockLimits = {
  ...blockLimits,
};

export const textBlockLimits = {
  ...blockLimits,
  textLength: 150,
};

export const imageBlockLimits = {
  ...blockLimits,
  imageUrlLength: 3000,
  altTextLength: 2000,
  textType: 'plain_text',
};

export const inputBlockLimits = {
  ...blockLimits,
  labelType: 'plain_text',
  hintType: 'plain_text',
};

export const sectionBlockLimits = {
  ...blockLimits,
  fieldsLength: 10,
};

const interactiveElementsLimits = {
  actionIdLength: 255,
};

export const buttonElementLimits = {
  ...interactiveElementsLimits,
  textType: 'plain_text',
  urlLength: 3000,
  valueLength: 2000,
  styleOptions: ['primary', 'danger'],
};

export const checkboxGroupElementLimits = {
  ...interactiveElementsLimits,
  optionsLength: 10,
};

export const datepickerElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  initialDateFormat: 'YYYY-MM-DD',
};

const multiSelectMenuElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  maxSelectedItemsMin: 1,
};

export const staticMultiSelectMenuElementLimits = {
  ...multiSelectMenuElementLimits,
  optionsLength: 100,
  optionGroupsLength: 100,
};

export const externalMultiSelectMenuElementLimits = {
  ...multiSelectMenuElementLimits,
};

export const userMultiSelectMenuElementLimits = {
  ...multiSelectMenuElementLimits,
};

export const conversationsMultiSelectMenuElementLimits = {
  ...multiSelectMenuElementLimits,
};

export const publicChannelsMultiSelectMenuElementLimits = {
  ...multiSelectMenuElementLimits,
};

export const overflowMenuElementLimits = {
  ...interactiveElementsLimits,
  optionsLength: 5,
  optionsMin: 2,
};

export const plainTextInputElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  minLengthMax: 3000,
};

const selectMenuElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  maxSelectedItemsMin: 1,
};

export const staticSelectMenuElementLimits = {
  ...selectMenuElementLimits,
  optionsLength: 100,
  optionGroupsLength: 100,
};

export const externalSelectMenuElementLimits = {
  ...selectMenuElementLimits,
};

export const userSelectMenuElementLimits = {
  ...selectMenuElementLimits,
};

export const conversationsSelectMenuElementLimits = {
  ...selectMenuElementLimits,
};

export const publicChannelsSelectMenuElementLimits = {
  ...selectMenuElementLimits,
};

export const timerpickerElementLimits = {
  ...interactiveElementsLimits,
  placeholderType: 'plain_text',
  initialTimeFormat: 'HH:mm',
};

export const confirmObjectLimits = {
  titleType: 'plain_text',
  confirmType: 'plain_text',
  denyType: 'plain_text',
  styleOptions: ['primary', 'danger'],
};

export const optionObjectLimits = {
  urlLength: 3000,
};

export const optionGroupObjectLimits = {
  labelType: 'plain_text',
  optionsLength: 100,
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

export const modalLimit = {
  titleType: 'plain_text',
  blocksLength: 100,
  submitType: 'plain_text',
  closeType: 'plain_text',
  privateMetadataLength: 3000,
  callbackIdLength: 255,
};
