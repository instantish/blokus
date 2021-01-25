import {
  actionBlockLimits,
  blockLimits,
  BlockTypes,
  buttonElementLimits,
  checkboxGroupElementLimits,
  confirmObjectLimits,
  contextBlockLimits,
  datepickerElementLimits,
  dispatchActionConfigObjectLimits,
  fileBlockLimits,
  filterObjectLimits,
  headerBlockLimits,
  homeLimits,
  imageBlockLimits,
  imageElementLimits,
  inputBlockLimits,
  interactiveElementsLimits,
  modalLimits,
  multiSelectMenuElementLimits,
  optionGroupObjectLimits,
  optionObjectLimits,
  overflowMenuElementLimits,
  plainTextInputElementLimits,
  radioButtonElementLimits,
  sectionBlockLimits,
  selectMenuElementLimits,
  staticMultiSelectMenuElementLimits,
  staticSelectMenuElementLimits,
  textObjectLimits,
  timerpickerElementLimits,
} from '../contants';
import {
  ActionBlockPayload,
  BlockPayload,
  ButtonElementPayload,
  CheckboxGroupElementPayload,
  ConfirmObjectPayload,
  ContextBlockPayload,
  ConversationMultiSelectMenuElementPayload,
  ConversationSelectMenuElementPayload,
  DatepickerElementPayload,
  DispatchActionConfigObjectPayload,
  DividerBlockPayload,
  ExternalMultiSelectMenuElementPayload,
  ExternalSelectMenuElementPayload,
  FileBlockPayload,
  FilterObjectPayload,
  HeaderBlockPayload,
  HomeTabPayload,
  ImageBlockPayload,
  ImageElementPayload,
  InputBlockPayload,
  InteractiveElementPayload,
  ModalPayload,
  MultiSelectElementPayload,
  OptionGroupObjectPayload,
  OptionObjectPayload,
  OverflowMenuElementPayload,
  PlainTextInputElementPayload,
  PresentationalBlockPayload,
  PublicChannelsMultiSelectMenuElementPayload,
  PublicChannelsSelectMenuElementPayload,
  RadioButtonGroupElementPayload,
  SectionBlockPayload,
  SelectElementPayload,
  StaticMultiSelectMenuElementPayload,
  StaticSelectMenuElementPayload,
  TextObjectPayload,
  TimepickerElementPayload,
  UserMultiSelectMenuElementPayload,
  UserSelectMenuElementPayload,
} from '../outputTypes';
import {
  validateMaxLength,
  validateMaxValue,
  validateMinLength,
  validateMinValue,
  validateOneOfType,
  validateOption,
  validateOptions,
  validateRequired,
  validateType,
} from './helpers';

const validateText = (block: TextObjectPayload, path: string): void => {
  validateRequired(Object.keys(block), textObjectLimits.required, path);
  if (block.type === BlockTypes.plainText && Object.keys(block).includes('verbatim')) {
    throw new Error(`Expected ${path} of type ${BlockTypes.plainText} to not have the property verbatim.`);
  }
  if (block.type === BlockTypes.mrkdwn && Object.keys(block).includes('emoji')) {
    throw new Error(`Expected ${path} of type ${BlockTypes.mrkdwn} to not have the property emoji.`);
  }
};

const validateConfirm = (block: ConfirmObjectPayload, path: string): void => {
  // Required
  validateRequired(Object.keys(block), confirmObjectLimits.required, path);

  // title
  validateType(block.title.type, confirmObjectLimits.titleType, `${path}.title`);
  validateMaxLength(block.title.text, confirmObjectLimits.titleLength, `${path}.title`);
  validateText(block.title, `${path}.title`);

  // text
  validateMaxLength(block.text.text, confirmObjectLimits.textLength, `${path}.text`);
  validateText(block.text, `${path}.text`);

  // confirm
  validateType(block.confirm.type, confirmObjectLimits.confirmType, `${path}.confirm`);
  validateMaxLength(block.confirm.text, confirmObjectLimits.confirmLength, `${path}.confirm`);
  validateText(block.confirm, `${path}.confirm`);

  // deny
  validateType(block.deny.type, confirmObjectLimits.denyType, `${path}.deny`);
  validateMaxLength(block.deny.text, confirmObjectLimits.denyLength, `${path}.deny`);
  validateText(block.deny, `${path}.deny`);

  // style
  if (block.style) {
    validateOption(block.style, confirmObjectLimits.styleOptions, `${path}.style`);
  }
};

const validateOptionObject = (block: OptionObjectPayload, path: string): void => {
  // Required
  validateRequired(Object.keys(block), optionObjectLimits.required, path);

  // text
  validateMaxLength(block.text.text, optionObjectLimits.textLength, `${path}.text`);
  validateText(block.text, `${path}.text`);

  // value
  validateMaxLength(block.value, optionObjectLimits.valueLength, `${path}.value`);

  // description
  if (block.description) {
    validateType(block.description.type, optionObjectLimits.descriptionType, `${path}.description`);
    validateMaxLength(block.description.text, optionObjectLimits.descriptionLength, `${path}.description`);
    validateText(block.description, `${path}.description`);
  }

  // url
  if (block.url) {
    validateMaxLength(block.url, optionObjectLimits.urlLength, `${path}.url`);
  }
};

const validateOptionGroupObject = (block: OptionGroupObjectPayload, path: string): void => {
  // Required
  validateRequired(Object.keys(block), optionGroupObjectLimits.required, path);

  // label
  validateType(block.label.type, optionGroupObjectLimits.labelType, `${path}.label`);
  validateMaxLength(block.label.text, optionGroupObjectLimits.labelLength, `${path}.label`);
  validateText(block.label, `${path}.label`);

  // options
  validateMaxLength(block.options, optionGroupObjectLimits.optionsLength, `${path}.options`);
  block.options.forEach((option, index) => {
    validateOptionObject(option, `${path}.options[${index}]`);
  });
};

const validateFilter = (block: FilterObjectPayload, path: string): void => {
  if (block.include) {
    validateMinLength(block.include, filterObjectLimits.includeMin, `${path}.include`);
    validateMaxLength(block.include, filterObjectLimits.includeLength, `${path}.include`);
    validateOptions(block.include, filterObjectLimits.includeOptions, `${path}.include`);
  }
};

const validateDispatchConfig = (block: DispatchActionConfigObjectPayload, path: string): void => {
  if (block.trigger_actions_on) {
    validateMaxLength(
      block.trigger_actions_on,
      dispatchActionConfigObjectLimits.triggerActionsOnLength,
      `${path}.trigger_actions_on`
    );
    validateOptions(
      block.trigger_actions_on,
      dispatchActionConfigObjectLimits.triggerActionsOnOptions,
      `${path}.trigger_actions_on`
    );
  }
};

const validateInteractiveElement = (block: InteractiveElementPayload, path: string): void => {
  validateRequired(Object.keys(block), interactiveElementsLimits.required, path);

  // action_id
  validateMaxLength(block.action_id, interactiveElementsLimits.actionIdLength, `${path}.action_id`);
};

const validateTimePicker = (block: TimepickerElementPayload, path: string): void => {
  validateRequired(Object.keys(block), timerpickerElementLimits.required, path);

  validateInteractiveElement(block, path);

  // placeholder
  if (block.placeholder) {
    validateType(block.placeholder.type, timerpickerElementLimits.placeholderType, `${path}.placeholder`);
    validateMaxLength(block.placeholder.text, timerpickerElementLimits.placeholderLength, `${path}.placeholder`);
    validateText(block.placeholder, `${path}.placeholder`);
  }

  // initial_time
  if (block.initial_time) {
    if (!/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(block.initial_time)) {
      throw new Error(`Expected ${path}.initial_time to have the format HH:mm`);
    }
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateDatePicker = (block: DatepickerElementPayload, path: string): void => {
  validateRequired(Object.keys(block), datepickerElementLimits.required, path);

  validateInteractiveElement(block, path);

  // placeholder
  if (block.placeholder) {
    validateType(block.placeholder.type, datepickerElementLimits.placeholderType, `${path}.placeholder`);
    validateMaxLength(block.placeholder.text, datepickerElementLimits.placeholderLength, `${path}.placeholder`);
    validateText(block.placeholder, `${path}.placeholder`);
  }

  // initial_date
  if (block.initial_date) {
    if (!/^\d{2}[./-]\d{2}[./-]\d{4}$/.test(block.initial_date)) {
      throw new Error(`Expected ${path}.initial_date to have the format YYYY-MM-DD`);
    }
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateSelectMenu = (block: SelectElementPayload, path: string): void => {
  validateRequired(Object.keys(block), selectMenuElementLimits.required, path);

  validateInteractiveElement(block, path);

  // placeholder
  if (block.placeholder) {
    validateType(block.placeholder.type, selectMenuElementLimits.placeholderType, `${path}.placeholder`);
    validateMaxLength(block.placeholder.text, selectMenuElementLimits.placeholderLength, `${path}.placeholder`);
    validateText(block.placeholder, `${path}.placeholder`);
  }
};

const validateChannelsSelect = (block: PublicChannelsSelectMenuElementPayload, path: string): void => {
  validateSelectMenu(block, path);

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateConversationSelect = (block: ConversationSelectMenuElementPayload, path: string): void => {
  validateSelectMenu(block, path);

  // filter
  if (block.filter) {
    validateFilter(block.filter, `${path}.filter`);
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateUserSelect = (block: UserSelectMenuElementPayload, path: string): void => {
  validateSelectMenu(block, path);

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateExternalSelect = (block: ExternalSelectMenuElementPayload, path: string): void => {
  validateSelectMenu(block, path);

  // initial_option
  if (block.initial_option) {
    validateOptionObject(block.initial_option, `${path}.initial_option`);
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateStaticSelect = (block: StaticSelectMenuElementPayload, path: string): void => {
  validateSelectMenu(block, path);

  // options
  if (block.options) {
    validateMaxLength(block.options, staticSelectMenuElementLimits.optionsLength, `${path}.options`);
    block.options.forEach((option, index) => {
      validateOptionObject(option, `${path}.options[${index}]`);
    });
  }

  // option_groups
  if (block.option_groups) {
    validateMaxLength(block.option_groups, staticSelectMenuElementLimits.optionGroupsLength, `${path}.option_groups`);
    block.option_groups.forEach((optionGroup, index) => {
      validateOptionGroupObject(optionGroup, `${path}.option_groups[${index}]`);
    });
  }

  // initial_option
  if (block.initial_option) {
    validateOptionObject(block.initial_option, `${path}.initial_option`);
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateRadioButton = (block: RadioButtonGroupElementPayload, path: string): void => {
  validateInteractiveElement(block, path);

  // options
  if (block.options) {
    validateMaxLength(block.options, radioButtonElementLimits.optionsLength, `${path}.options`);
    block.options.forEach((option, index) => {
      validateOptionObject(option, `${path}.options[${index}]`);
    });
  }

  // initial_option
  if (block.initial_option) {
    validateOptionObject(block.initial_option, `${path}.initial_option`);
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validatePlainTextInput = (block: PlainTextInputElementPayload, path: string): void => {
  validateInteractiveElement(block, path);

  // placeholder
  if (block.placeholder) {
    validateType(block.placeholder.type, plainTextInputElementLimits.placeholderType, `${path}.placeholder`);
    validateMaxLength(block.placeholder.text, plainTextInputElementLimits.placeholderLength, `${path}.placeholder`);
    validateText(block.placeholder, `${path}.placeholder`);
  }

  // min_length
  if (block.min_length) {
    validateMaxValue(block.min_length, plainTextInputElementLimits.minLengthMax, `${path}.min_length`);
  }

  // dispatch_action_config
  if (block.dispatch_action_config) {
    validateDispatchConfig(block.dispatch_action_config, `${path}.dispatch_action_config`);
  }
};

const validateMultiSelectMenu = (block: MultiSelectElementPayload, path: string): void => {
  validateRequired(Object.keys(block), multiSelectMenuElementLimits.required, path);

  validateInteractiveElement(block, path);

  // placeholder
  if (block.placeholder) {
    validateType(block.placeholder.type, multiSelectMenuElementLimits.placeholderType, `${path}.placeholder`);
    validateMaxLength(block.placeholder.text, multiSelectMenuElementLimits.placeholderLength, `${path}.placeholder`);
    validateText(block.placeholder, `${path}.placeholder`);
  }

  // max_selected_items
  if (block.max_selected_items || block.max_selected_items === 0) {
    validateMinValue(
      block.max_selected_items,
      multiSelectMenuElementLimits.maxSelectedItemsMin,
      `${path}.max_selected_items`
    );
  }
};

const validateChannelsMultiSelect = (block: PublicChannelsMultiSelectMenuElementPayload, path: string): void => {
  validateMultiSelectMenu(block, path);

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateConversationMultiSelect = (block: ConversationMultiSelectMenuElementPayload, path: string): void => {
  validateMultiSelectMenu(block, path);

  // filter
  if (block.filter) {
    validateFilter(block.filter, `${path}.filter`);
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateUserMultiSelect = (block: UserMultiSelectMenuElementPayload, path: string): void => {
  validateMultiSelectMenu(block, path);

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateExternalMultiSelect = (block: ExternalMultiSelectMenuElementPayload, path: string): void => {
  validateMultiSelectMenu(block, path);

  // initial_options
  if (block.initial_options) {
    block.initial_options.forEach((option, index) => {
      validateOptionObject(option, `${path}.initial_options[${index}]`);
    });
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateStaticMultiSelect = (block: StaticMultiSelectMenuElementPayload, path: string): void => {
  validateMultiSelectMenu(block, path);

  // options
  if (block.options) {
    validateMaxLength(block.options, staticMultiSelectMenuElementLimits.optionsLength, `${path}.options`);
    block.options.forEach((option, index) => {
      validateOptionObject(option, `${path}.options[${index}]`);
    });
  }

  // option_groups
  if (block.option_groups) {
    validateMaxLength(
      block.option_groups,
      staticMultiSelectMenuElementLimits.optionGroupsLength,
      `${path}.option_groups`
    );
    block.option_groups.forEach((optionGroup, index) => {
      validateOptionGroupObject(optionGroup, `${path}.option_groups[${index}]`);
    });
  }

  // initial_options
  if (block.initial_options) {
    block.initial_options.forEach((option, index) => {
      validateOptionObject(option, `${path}.initial_options[${index}]`);
    });
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validatePresentationalBlock = (block: PresentationalBlockPayload, path: string): void => {
  if (block.block_id) {
    validateMaxLength(block.block_id, blockLimits.blockIdLength, `${path}.block_id`);
  }
};

const validateAction = (block: ActionBlockPayload, path: string): void => {
  validateRequired(Object.keys(block), actionBlockLimits.required, path);

  validatePresentationalBlock(block, path);

  validateMaxLength(block.elements, actionBlockLimits.elementsLength, `${path}.elements`);
  block.elements.forEach((element, number) => {
    validateOneOfType(element.type, actionBlockLimits.elementTypes, `${path}.elements[${number}]`);
    validateBlockRecursive(element, `${path}.elements[${number}]`);
  });
};

const validateButton = (block: ButtonElementPayload, path: string): void => {
  validateRequired(Object.keys(block), buttonElementLimits.required, path);

  validateInteractiveElement(block, path);

  // text
  validateType(block.text.type, buttonElementLimits.textType, `${path}.text`);
  validateMaxLength(block.text.text, buttonElementLimits.textLength, `${path}.text`);
  validateText(block.text, `${path}.text`);

  // value
  if (block.value) {
    validateMaxLength(block.value, buttonElementLimits.valueLength, `${path}.value`);
  }

  // url
  if (block.url) {
    validateMaxLength(block.url, buttonElementLimits.urlLength, `${path}.url`);
  }

  // style
  if (block.style) {
    validateOption(block.style, confirmObjectLimits.styleOptions, `${path}.style`);
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateCheckboxes = (block: CheckboxGroupElementPayload, path: string): void => {
  validateRequired(Object.keys(block), checkboxGroupElementLimits.required, path);

  validateInteractiveElement(block, path);

  // options
  if (block.options) {
    validateMaxLength(block.options, checkboxGroupElementLimits.optionsLength, `${path}.options`);
    block.options.forEach((option, index) => {
      validateOptionObject(option, `${path}.options[${index}]`);
    });
  }

  // initial_options
  if (block.initial_options) {
    block.initial_options.forEach((option, index) => {
      validateOptionObject(option, `${path}.initial_options[${index}]`);
    });
  }

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateImageElement = (block: ImageElementPayload, path: string): void => {
  validateRequired(Object.keys(block), imageElementLimits.required, path);
};

const validateContext = (block: ContextBlockPayload, path: string): void => {
  validateRequired(Object.keys(block), contextBlockLimits.required, path);

  validatePresentationalBlock(block, path);

  validateMaxLength(block.elements, contextBlockLimits.elementsLength, `${path}.elements`);
  block.elements.forEach((element, number) => {
    validateOneOfType(element.type, contextBlockLimits.elementTypes, `${path}.elements[${number}]`);
    if (element.type === BlockTypes.image) {
      validateImageElement(element, `${path}.elements[${number}]`);
    } else {
      validateText(element, `${path}.elements[${number}]`);
    }
  });
};

const validateDivider = (block: DividerBlockPayload, path: string): void => {
  validatePresentationalBlock(block, path);
};

const validateFile = (block: FileBlockPayload, path: string): void => {
  validatePresentationalBlock(block, path);
  validateRequired(Object.keys(block), fileBlockLimits.required, path);
  validateOption(block.source, fileBlockLimits.sourceType, `${path}.source`);
};

const validateHeader = (block: HeaderBlockPayload, path: string): void => {
  validatePresentationalBlock(block, path);
  validateRequired(Object.keys(block), headerBlockLimits.required, path);

  // text
  validateType(block.text.type, headerBlockLimits.textType, `${path}.text`);
  validateMaxLength(block.text.text, headerBlockLimits.textLength, `${path}.text`);
  validateText(block.text, `${path}.text`);
};

const validateImage = (block: ImageBlockPayload, path: string): void => {
  validatePresentationalBlock(block, path);
  validateRequired(Object.keys(block), imageBlockLimits.required, path);

  // image_url
  validateMaxLength(block.image_url, imageBlockLimits.imageUrlLength, `${path}.image_url`);

  // alt_text
  validateMaxLength(block.alt_text, imageBlockLimits.altTextLength, `${path}.alt_text`);

  // title
  if (block.title) {
    validateType(block.title.type, imageBlockLimits.titleType, `${path}.title`);
    validateMaxLength(block.title.text, imageBlockLimits.titleLength, `${path}.title`);
    validateText(block.title, `${path}.title`);
  }
};

const validateInput = (block: InputBlockPayload, path: string): void => {
  validatePresentationalBlock(block, path);
  validateRequired(Object.keys(block), inputBlockLimits.required, path);

  // label
  validateType(block.label.type, inputBlockLimits.labelType, `${path}.label`);
  validateMaxLength(block.label.text, inputBlockLimits.labelLength, `${path}.label`);
  validateText(block.label, `${path}.label`);

  // element
  validateOneOfType(block.element.type, inputBlockLimits.elementTypes, `${path}.element`);
  validateBlockRecursive(block.element, `${path}.element`);

  // hint
  if (block.hint) {
    validateType(block.hint.type, inputBlockLimits.hintType, `${path}.hint`);
    validateMaxLength(block.hint.text, inputBlockLimits.hintLength, `${path}.hint`);
    validateText(block.hint, `${path}.hint`);
  }
};

const validateOverflow = (block: OverflowMenuElementPayload, path: string): void => {
  validateRequired(Object.keys(block), overflowMenuElementLimits.required, path);

  validateInteractiveElement(block, path);

  // options
  validateMaxLength(block.options, overflowMenuElementLimits.optionsLength, `${path}.options`);
  block.options.forEach((option, index) => {
    validateOptionObject(option, `${path}.options[${index}]`);
  });

  // confirm
  if (block.confirm) {
    validateConfirm(block.confirm, `${path}.confirm`);
  }
};

const validateSection = (block: SectionBlockPayload, path: string): void => {
  validatePresentationalBlock(block, path);

  // text
  if (block.text) {
    validateType(block.text.type, sectionBlockLimits.textType, `${path}.text`);
    validateMaxLength(block.text.text, sectionBlockLimits.textLength, `${path}.text`);
    validateText(block.text, `${path}.text`);
  }

  // fields
  if (block.fields) {
    validateMaxLength(block.fields, sectionBlockLimits.fieldsLength, `${path}.fields`);
    block.fields.forEach((field, index) => {
      validateOneOfType(field.type, sectionBlockLimits.fieldsTextTypes, `${path}.fields[${index}]`);
      validateMaxLength(field.text, sectionBlockLimits.fieldsTextLength, `${path}.fields[${index}]`);
      validateText(field, `${path}.fields[${index}]`);
    });
  }

  // element
  if (block.accessory) {
    validateOneOfType(block.accessory.type, sectionBlockLimits.accessoryTypes, `${path}.accessory`);
    validateBlockRecursive(block.accessory, `${path}.accessory`);
  }
};

const validateBlockRecursive = (block: BlockPayload, path: string): void => {
  if (block.type === BlockTypes.timepicker) {
    validateTimePicker(block as TimepickerElementPayload, path);
  } else if (block.type === BlockTypes.datepicker) {
    validateDatePicker(block as DatepickerElementPayload, path);
  } else if (block.type === BlockTypes.channelsSelect) {
    validateChannelsSelect(block as PublicChannelsSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.conversationsSelect) {
    validateConversationSelect(block as ConversationSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.usersSelect) {
    validateUserSelect(block as UserSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.externalSelect) {
    validateExternalSelect(block as ExternalSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.staticSelect) {
    validateStaticSelect(block as StaticSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.radioButtons) {
    validateRadioButton(block as RadioButtonGroupElementPayload, path);
  } else if (block.type === BlockTypes.plainTextInput) {
    validatePlainTextInput(block as PlainTextInputElementPayload, path);
  } else if (block.type === BlockTypes.multiChannelsSelect) {
    validateChannelsMultiSelect(block as PublicChannelsMultiSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.multiConversationsSelect) {
    validateConversationMultiSelect(block as ConversationMultiSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.multiUsersSelect) {
    validateUserMultiSelect(block as UserMultiSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.multiExternalSelect) {
    validateExternalMultiSelect(block as ExternalMultiSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.multiStaticSelect) {
    validateStaticMultiSelect(block as StaticMultiSelectMenuElementPayload, path);
  } else if (block.type === BlockTypes.action) {
    validateAction(block as ActionBlockPayload, path);
  } else if (block.type === BlockTypes.button) {
    validateButton(block as ButtonElementPayload, path);
  } else if (block.type === BlockTypes.checkboxes) {
    validateCheckboxes(block as CheckboxGroupElementPayload, path);
  } else if (block.type === BlockTypes.context) {
    validateContext(block as ContextBlockPayload, path);
  } else if (block.type === BlockTypes.divider) {
    validateDivider(block as DividerBlockPayload, path);
  } else if (block.type === BlockTypes.file) {
    validateFile(block as FileBlockPayload, path);
  } else if (block.type === BlockTypes.header) {
    validateHeader(block as HeaderBlockPayload, path);
  } else if (block.type === BlockTypes.image) {
    validateImage(block as ImageBlockPayload, path);
  } else if (block.type === BlockTypes.input) {
    validateInput(block as InputBlockPayload, path);
  } else if (block.type === BlockTypes.overflow) {
    validateOverflow(block as OverflowMenuElementPayload, path);
  } else if (block.type === BlockTypes.section) {
    validateSection(block as SectionBlockPayload, path);
  }
};

export const validateHome = (block: HomeTabPayload): void => {
  const path = 'home';
  validateRequired(Object.keys(block), homeLimits.required, path);

  // blocks
  validateMaxLength(block.blocks, homeLimits.blocksLength, `${path}.blocks`);
  block.blocks.forEach((element, number) => {
    validateOneOfType(element.type, homeLimits.blockTypes, `${path}.blocks[${number}]`);
    validateBlockRecursive(element, `${path}.blocks[${number}]`);
  });

  // private_metadata
  if (block.private_metadata) {
    validateMaxLength(block.private_metadata, homeLimits.privateMetadataLength, `${path}.private_metadata`);
  }

  // callback_id
  if (block.callback_id) {
    validateMaxLength(block.callback_id, homeLimits.callbackIdLength, `${path}.callback_id`);
  }
};

export const validateModal = (block: ModalPayload): void => {
  const path = 'modal';
  validateRequired(Object.keys(block), modalLimits.required, path);

  validateMaxLength(block.blocks, modalLimits.blocksLength, `${path}.blocks`);
  block.blocks.forEach((element, number) => {
    validateOneOfType(element.type, modalLimits.blockTypes, `${path}.blocks[${number}]`);
    validateBlockRecursive(element, `${path}.blocks[${number}]`);
  });

  // title
  validateType(block.title.type, modalLimits.titleType, `${path}.title`);
  validateMaxLength(block.title.text, modalLimits.titleLength, `${path}.title`);
  validateText(block.title, `${path}.title`);

  // private_metadata
  if (block.private_metadata) {
    validateMaxLength(block.private_metadata, homeLimits.privateMetadataLength, `${path}.private_metadata`);
  }

  // submit
  if (block.submit) {
    validateType(block.submit.type, modalLimits.submitType, `${path}.submit`);
    validateMaxLength(block.submit.text, modalLimits.submitLength, `${path}.submit`);
    validateText(block.submit, `${path}.submit`);
  }

  // close
  if (block.close) {
    validateType(block.close.type, modalLimits.closeType, `${path}.close`);
    validateMaxLength(block.close.text, modalLimits.closeLength, `${path}.close`);
    validateText(block.close, `${path}.close`);
  }

  // callback_id
  if (block.callback_id) {
    validateMaxLength(block.callback_id, homeLimits.callbackIdLength, `${path}.callback_id`);
  }
};
