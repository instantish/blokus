/* eslint-disable @typescript-eslint/ban-types */

import { validateHome, validateMessage, validateModal } from '../validation';
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
  messageLimits,
  modalLimits,
  optionGroupObjectLimits,
  optionObjectLimits,
  overflowMenuElementLimits,
  plainTextInputElementLimits,
  radioButtonElementLimits,
  sectionBlockLimits,
  staticMultiSelectMenuElementLimits,
  staticSelectMenuElementLimits,
  timerpickerElementLimits,
} from '../contants';

describe('validating individual blocks', () => {
  type Expectation = [string, {}, Error];

  const generateCopies = (count: number): {}[] => {
    const copies = [];
    for (let i = 0; i < count; i++) {
      copies.push({});
    }

    return copies;
  };

  const generateStringLength = (count: number): string => {
    let val = '';
    for (let i = 0; i < count; i++) {
      val += '0';
    }

    return val;
  };

  const requiredError = (path: string, props: string[]) =>
    new Error(`Expected ${path} to have all ${props.join(', ')} properties; type received.`);
  const maxLengthError = (path: string, length: number) =>
    new Error(`Expected ${path} to have a maximum length of ${length}, ${length + 1} received.`);
  const oneOfTypeError = (path: string, types: string[], received: string) =>
    new Error(`Expected ${path} to be one of the type of ${types.join(', ')}; ${received} received.`);
  const typeError = (path: string, type: string, received: string) =>
    new Error(`Expected ${path} to have a type of ${type}, ${received} received.`);
  const optionError = (path: string, options: string[], received: string) =>
    new Error(`Expected ${path} to be one of ${options.join(', ')}; ${received} received.`);

  const generateLengthTests = (
    name: string,
    path: string,
    prop: string,
    blockConfig: (text: string) => {},
    lengthLimit: number
  ): Expectation[] => [
    [
      `too long ${prop} in ${name}`,
      blockConfig(generateStringLength(lengthLimit + 1)),
      maxLengthError(`${path}.${prop}`, lengthLimit),
    ],
  ];

  const generateTextTests = (
    name: string,
    path: string,
    prop: string,
    blockConfig: (text: {}) => {},
    lengthLimit: number,
    allowedType: 'plain_text' | 'mrkdwn' | undefined = undefined
  ): Expectation[] => {
    const tests: Expectation[] = [
      [
        `too long ${prop} in ${name}`,
        blockConfig({
          type: BlockTypes.plainText,
          text: generateStringLength(lengthLimit + 1),
        }),
        maxLengthError(`${path}.${prop}`, lengthLimit),
      ],
    ];

    if (!allowedType || allowedType === 'plain_text') {
      tests.push([
        `plain_text in ${prop} in ${name} should not have verbatim`,
        blockConfig({
          type: BlockTypes.plainText,
          text: generateStringLength(lengthLimit),
          verbatim: 'test',
        }),
        new Error(`Expected ${path}.${prop} of type ${BlockTypes.plainText} to not have the property verbatim.`),
      ]);
    }

    if (!allowedType || allowedType === 'mrkdwn') {
      tests.push([
        `mrkdwn in ${prop} in ${name} should not have emoji`,
        blockConfig({
          type: BlockTypes.mrkdwn,
          text: generateStringLength(lengthLimit),
          emoji: 'test',
        }),
        new Error(`Expected ${path}.${prop} of type ${BlockTypes.mrkdwn} to not have the property emoji.`),
      ]);
    }

    return tests;
  };

  const generateTypedTextTests = (
    name: string,
    path: string,
    prop: string,
    blockConfig: (text: {}) => {},
    typeLimit: string,
    lengthLimit: number
  ): Expectation[] => [
    [
      `invalid type for ${prop} in ${name}`,
      blockConfig({
        type: 'invalid',
      }),
      typeError(`${path}.${prop}`, typeLimit, 'invalid'),
    ],
    ...generateTextTests(name, path, prop, blockConfig, lengthLimit, typeLimit as 'plain_text' | 'mrkdwn'),
  ];

  const generateConfirmTests = (name: string, path: string, blockConfig: (confirm: {}) => {}): Expectation[] => [
    [
      `missing required in ${name}'s confirm`,
      blockConfig({
        type: BlockTypes.confirm,
      }),
      requiredError(path, confirmObjectLimits.required),
    ],
    ...generateTypedTextTests(
      `${name}'s confirm`,
      path,
      'title',
      (text: {}): {} =>
        blockConfig({
          type: BlockTypes.confirm,
          title: text,
          text: {},
          confirm: {},
          deny: {},
        }),
      confirmObjectLimits.titleType,
      confirmObjectLimits.titleLength
    ),
    ...generateTextTests(
      `${name}'s confirm`,
      path,
      'text',
      (text: {}): {} =>
        blockConfig({
          type: BlockTypes.confirm,
          title: {
            type: BlockTypes.plainText,
            text: '',
          },
          text,
          confirm: {},
          deny: {},
        }),
      confirmObjectLimits.textLength
    ),
    ...generateTypedTextTests(
      `${name}'s confirm`,
      path,
      'confirm',
      (text: {}): {} =>
        blockConfig({
          type: BlockTypes.confirm,
          title: {
            type: BlockTypes.plainText,
            text: '',
          },
          text: {
            type: BlockTypes.plainText,
            text: '',
          },
          confirm: text,
          deny: {},
        }),
      confirmObjectLimits.confirmType,
      confirmObjectLimits.confirmLength
    ),
    ...generateTypedTextTests(
      `${name}'s confirm`,
      path,
      'deny',
      (text: {}): {} =>
        blockConfig({
          type: BlockTypes.confirm,
          title: {
            type: BlockTypes.plainText,
            text: '',
          },
          text: {
            type: BlockTypes.plainText,
            text: '',
          },
          confirm: {
            type: BlockTypes.plainText,
            text: '',
          },
          deny: text,
        }),
      confirmObjectLimits.denyType,
      confirmObjectLimits.denyLength
    ),
    [
      `wrong option for style in ${name}'s style`,
      blockConfig({
        type: BlockTypes.confirm,
        title: {
          type: BlockTypes.plainText,
          text: '',
        },
        text: {
          type: BlockTypes.plainText,
          text: '',
        },
        confirm: {
          type: BlockTypes.plainText,
          text: '',
        },
        deny: {
          type: BlockTypes.plainText,
          text: '',
        },
        style: 'invalid',
      }),
      optionError(`${path}.style`, confirmObjectLimits.styleOptions, 'invalid'),
    ],
  ];

  const generateOptionTests = (name: string, path: string, blockConfig: (option: {}) => {}): Expectation[] => [
    [
      `missing required in ${name}'s option`,
      blockConfig({
        type: BlockTypes.option,
      }),
      requiredError(path, optionObjectLimits.required),
    ],
    ...generateTextTests(
      `${name}'s text`,
      path,
      'text',
      text =>
        blockConfig({
          type: BlockTypes.option,
          text,
          value: '',
        }),
      optionObjectLimits.textLength
    ),
    ...generateLengthTests(
      `${name}'s value`,
      path,
      'value',
      text =>
        blockConfig({
          type: BlockTypes.option,
          text: {
            type: BlockTypes.plainText,
            text: '',
          },
          value: text,
        }),
      optionObjectLimits.valueLength
    ),
    ...generateTypedTextTests(
      `${name}'s description`,
      path,
      'description',
      (text: {}): {} =>
        blockConfig({
          type: BlockTypes.option,
          text: {
            type: BlockTypes.plainText,
            text: '',
          },
          value: '',
          description: text,
        }),
      optionObjectLimits.descriptionType,
      optionObjectLimits.descriptionLength
    ),
    ...generateLengthTests(
      `${name}'s url`,
      path,
      'url',
      text =>
        blockConfig({
          type: BlockTypes.option,
          text: {
            type: BlockTypes.plainText,
            text: '',
          },
          value: '',
          url: text,
        }),
      optionObjectLimits.urlLength
    ),
  ];

  const generateOptionsTests = (
    name: string,
    path: string,
    maxLength: number,
    blockConfig: (options: {}[]) => {}
  ): Expectation[] => [
    [`too many options in ${name}`, blockConfig(generateCopies(maxLength + 1)), maxLengthError(path, maxLength)],
    ...generateOptionTests(`${name}'s options`, `${path}[0]`, option => blockConfig([option])),
  ];

  const generateOptionGroupsTests = (
    name: string,
    path: string,
    maxLength: number,
    blockConfig: (optionGroups: {}[]) => {}
  ): Expectation[] => [
    [`too many option groups in ${name}`, blockConfig(generateCopies(maxLength + 1)), maxLengthError(path, maxLength)],
    ...generateTypedTextTests(
      name,
      `${path}[0]`,
      'label',
      text =>
        blockConfig([
          {
            label: text,
            options: [],
          },
        ]),
      optionGroupObjectLimits.labelType,
      optionGroupObjectLimits.labelLength
    ),
    ...generateOptionsTests(
      `${name}'s option groups`,
      `${path}[0].options`,
      optionGroupObjectLimits.optionsLength,
      options =>
        blockConfig([
          {
            label: {
              type: BlockTypes.plainText,
              text: '',
            },
            options,
          },
        ])
    ),
  ];

  const generateFilterTest = (name: string, path: string, blockConfig: (filter: {}) => {}): Expectation[] => [
    [
      `too short include in ${name}`,
      blockConfig({
        include: generateCopies(filterObjectLimits.includeMin - 1),
      }),
      new Error(
        `Expected ${path}.include to have a minimum length of ${filterObjectLimits.includeMin}, ${
          filterObjectLimits.includeMin - 1
        } received.`
      ),
    ],
    [
      `too long include in ${name}`,
      blockConfig({
        include: generateCopies(filterObjectLimits.includeLength + 1),
      }),
      maxLengthError(`${path}.include`, filterObjectLimits.includeLength),
    ],
    [
      `incorrect options for include in ${name}`,
      blockConfig({
        include: ['invalid'],
      }),
      new Error(
        `Expected ${path}.include to be one of ${filterObjectLimits.includeOptions.join(', ')}; invalid received.`
      ),
    ],
  ];

  const cases: Expectation[] = [
    [
      'missing required properties in modal',
      {
        type: BlockTypes.modal,
      },
      requiredError('modal', modalLimits.required),
    ],
    [
      'too many blocks in modal',
      {
        type: BlockTypes.modal,
        blocks: generateCopies(modalLimits.blocksLength + 1),
        title: {
          type: BlockTypes.plainText,
          text: 'test',
        },
      },
      maxLengthError('modal.blocks', modalLimits.blocksLength),
    ],
    [
      'block of wrong type in modal',
      {
        type: BlockTypes.modal,
        blocks: [
          {
            type: 'invalid',
          },
        ],
        title: {
          type: BlockTypes.plainText,
          text: 'test',
        },
      },
      oneOfTypeError('modal.blocks[0]', modalLimits.blockTypes, 'invalid'),
    ],
    ...generateTypedTextTests(
      'modal',
      'modal',
      'title',
      text => ({
        type: BlockTypes.modal,
        blocks: [],
        title: text,
      }),
      modalLimits.titleType,
      modalLimits.titleLength
    ),
    ...generateLengthTests(
      'modal',
      'modal',
      'private_metadata',
      text => ({
        type: BlockTypes.modal,
        blocks: [],
        title: {
          type: BlockTypes.plainText,
          text: 'test',
        },
        private_metadata: text,
      }),
      modalLimits.privateMetadataLength
    ),
    ...generateTypedTextTests(
      'modal',
      'modal',
      'submit',
      text => ({
        type: BlockTypes.modal,
        blocks: [],
        title: {
          type: BlockTypes.plainText,
          text: 'test',
        },
        submit: text,
      }),
      modalLimits.submitType,
      modalLimits.submitLength
    ),
    ...generateTypedTextTests(
      'modal',
      'modal',
      'close',
      text => ({
        type: BlockTypes.modal,
        blocks: [],
        title: {
          type: BlockTypes.plainText,
          text: 'test',
        },
        close: text,
      }),
      modalLimits.closeType,
      modalLimits.closeLength
    ),
    ...generateLengthTests(
      'modal',
      'modal',
      'callback_id',
      text => ({
        type: BlockTypes.modal,
        blocks: [],
        title: {
          type: BlockTypes.plainText,
          text: 'test',
        },
        callback_id: text,
      }),
      modalLimits.callbackIdLength
    ),
    [
      'missing required properties in home',
      {
        type: BlockTypes.home,
      },
      requiredError('home', homeLimits.required),
    ],
    [
      'too many blocks in home',
      {
        type: BlockTypes.home,
        blocks: generateCopies(homeLimits.blocksLength + 1),
      },
      maxLengthError('home.blocks', homeLimits.blocksLength),
    ],
    [
      'block of wrong type in home',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: 'invalid',
          },
        ],
      },
      oneOfTypeError('home.blocks[0]', homeLimits.blockTypes, 'invalid'),
    ],
    ...generateLengthTests(
      'home',
      'home',
      'private_metadata',
      text => ({
        type: BlockTypes.home,
        blocks: [],
        private_metadata: text,
      }),
      homeLimits.privateMetadataLength
    ),
    ...generateLengthTests(
      'home',
      'home',
      'callback_id',
      text => ({
        type: BlockTypes.home,
        blocks: [],
        callback_id: text,
      }),
      modalLimits.callbackIdLength
    ),
    ...generateLengthTests(
      'divider',
      'home.blocks[0]',
      'block_id',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.divider,
            block_id: text,
          },
        ],
      }),
      blockLimits.blockIdLength
    ),
    [
      'missing required properties in message',
      {
        type: BlockTypes.message,
      },
      requiredError('message', messageLimits.required),
    ],
    [
      'too many blocks in message',
      {
        type: BlockTypes.message,
        blocks: generateCopies(messageLimits.blocksLength + 1),
        text: '',
      },
      maxLengthError('message.blocks', messageLimits.blocksLength),
    ],
    [
      'block of wrong type in message',
      {
        type: BlockTypes.message,
        blocks: [
          {
            type: 'invalid',
          },
        ],
        text: '',
      },
      oneOfTypeError('message.blocks[0]', messageLimits.blockTypes, 'invalid'),
    ],
    ...generateTypedTextTests(
      'section',
      'home.blocks[0]',
      'text',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            text,
          },
        ],
      }),
      sectionBlockLimits.textType,
      sectionBlockLimits.textLength
    ),
    [
      'too many fields in section',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            fields: generateCopies(sectionBlockLimits.fieldsLength + 1),
          },
        ],
      },
      maxLengthError('home.blocks[0].fields', sectionBlockLimits.fieldsLength),
    ],
    [
      'field of wrong type in section',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            fields: [
              {
                type: 'invalid',
              },
            ],
          },
        ],
      },
      oneOfTypeError('home.blocks[0].fields[0]', sectionBlockLimits.fieldsTextTypes, 'invalid'),
    ],
    [
      'too long fields in section',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            fields: [
              {
                type: BlockTypes.plainText,
                text: generateStringLength(sectionBlockLimits.fieldsTextLength + 1),
              },
            ],
          },
        ],
      },
      maxLengthError('home.blocks[0].fields[0]', sectionBlockLimits.fieldsTextLength),
    ],
    [
      'Plain text should not have verbatim in fields',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            fields: [
              {
                type: BlockTypes.plainText,
                text: '',
                verbatim: '',
              },
            ],
          },
        ],
      },
      new Error(`Expected home.blocks[0].fields[0] of type ${BlockTypes.plainText} to not have the property verbatim.`),
    ],
    [
      'invalid type for accessory in section',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: 'invalid',
            },
          },
        ],
      },
      oneOfTypeError('home.blocks[0].accessory', sectionBlockLimits.accessoryTypes, 'invalid'),
    ],
    [
      'missing required in datePicker',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.datepicker,
            },
          },
        ],
      },
      requiredError('home.blocks[0].accessory', datepickerElementLimits.required),
    ],
    ...generateTypedTextTests(
      'datePicker',
      'home.blocks[0].accessory',
      'placeholder',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.datepicker,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: text,
            },
          },
        ],
      }),
      datepickerElementLimits.placeholderType,
      datepickerElementLimits.placeholderLength
    ),
    [
      'invalid date format in datePicker',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.datepicker,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              initial_date: 'invalid',
            },
          },
        ],
      },
      new Error('Expected home.blocks[0].accessory.initial_date to have the format YYYY-MM-DD'),
    ],
    ...generateConfirmTests('datePicker', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.datepicker,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            confirm,
          },
        },
      ],
    })),
    [
      'missing required in image',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.image,
            },
          },
        ],
      },
      requiredError('home.blocks[0].accessory', imageBlockLimits.required),
    ],
    ...generateLengthTests(
      'image',
      'home.blocks[0].accessory',
      'image_url',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.image,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              image_url: text,
              alt_text: '',
            },
          },
        ],
      }),
      imageBlockLimits.imageUrlLength
    ),
    ...generateLengthTests(
      'image',
      'home.blocks[0].accessory',
      'alt_text',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.image,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              image_url: '',
              alt_text: text,
            },
          },
        ],
      }),
      imageBlockLimits.altTextLength
    ),
    ...generateTypedTextTests(
      'image',
      'home.blocks[0].accessory',
      'title',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.image,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              alt_text: '',
              image_url: '',
              title: text,
            },
          },
        ],
      }),
      imageBlockLimits.titleType,
      imageBlockLimits.titleLength
    ),
    ...generateTypedTextTests(
      'plainTextInput',
      'home.blocks[0].accessory',
      'placeholder',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.plainTextInput,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: text,
            },
          },
        ],
      }),
      plainTextInputElementLimits.placeholderType,
      plainTextInputElementLimits.placeholderLength
    ),
    [
      'too long min_length in plainTextInput',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.plainTextInput,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              min_length: plainTextInputElementLimits.minLengthMax + 1,
            },
          },
        ],
      },
      new Error(
        `Expected home.blocks[0].accessory.min_length to be a maximum value of ${
          plainTextInputElementLimits.minLengthMax
        }, ${plainTextInputElementLimits.minLengthMax + 1} received.`
      ),
    ],
    [
      'too long dispatch config in plainTextInput',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.plainTextInput,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              dispatch_action_config: {
                trigger_actions_on: generateCopies(dispatchActionConfigObjectLimits.triggerActionsOnLength + 1),
              },
            },
          },
        ],
      },
      maxLengthError(
        'home.blocks[0].accessory.dispatch_action_config.trigger_actions_on',
        dispatchActionConfigObjectLimits.triggerActionsOnLength
      ),
    ],
    [
      'incorrect options in dispatch config in plainTextInput',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.plainTextInput,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              dispatch_action_config: {
                trigger_actions_on: ['invalid'],
              },
            },
          },
        ],
      },
      new Error(
        `Expected home.blocks[0].accessory.dispatch_action_config.trigger_actions_on to be one of ${dispatchActionConfigObjectLimits.triggerActionsOnOptions.join(
          ', '
        )}; invalid received.`
      ),
    ],
    [
      'missing required in checkboxes',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.checkboxes,
            },
          },
        ],
      },
      requiredError('home.blocks[0].accessory', checkboxGroupElementLimits.required),
    ],
    ...generateOptionsTests(
      'checkboxes',
      'home.blocks[0].accessory.options',
      checkboxGroupElementLimits.optionsLength,
      options => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.checkboxes,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              options,
            },
          },
        ],
      })
    ),
    ...generateOptionTests('checkboxes', 'home.blocks[0].accessory.initial_options[0]', option => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.checkboxes,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            options: [],
            initial_options: [option],
          },
        },
      ],
    })),
    ...generateConfirmTests('checkboxes', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.checkboxes,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            options: [],
            confirm,
          },
        },
      ],
    })),
    [
      'missing required in radioButtons',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.radioButtons,
            },
          },
        ],
      },
      requiredError('home.blocks[0].accessory', radioButtonElementLimits.required),
    ],
    ...generateOptionsTests(
      'radioButtons',
      'home.blocks[0].accessory.options',
      radioButtonElementLimits.optionsLength,
      options => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.radioButtons,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              options,
            },
          },
        ],
      })
    ),
    ...generateOptionTests('radioButtons', 'home.blocks[0].accessory.initial_option', option => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.radioButtons,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            initial_option: option,
          },
        },
      ],
    })),
    ...generateConfirmTests('radioButtons', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.radioButtons,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            confirm,
          },
        },
      ],
    })),
    [
      'missing required in static select',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.staticSelect,
            },
          },
        ],
      },
      requiredError('home.blocks[0].accessory', staticSelectMenuElementLimits.required),
    ],
    ...generateTypedTextTests(
      'static select',
      'home.blocks[0].accessory',
      'placeholder',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.staticSelect,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: text,
            },
          },
        ],
      }),
      staticSelectMenuElementLimits.placeholderType,
      staticSelectMenuElementLimits.placeholderLength
    ),
    ...generateOptionsTests(
      'static select',
      'home.blocks[0].accessory.options',
      staticSelectMenuElementLimits.optionsLength,
      options => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.staticSelect,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: {
                type: BlockTypes.plainText,
                text: '',
              },
              options,
            },
          },
        ],
      })
    ),
    ...generateOptionGroupsTests(
      'static select',
      'home.blocks[0].accessory.option_groups',
      staticSelectMenuElementLimits.optionGroupsLength,
      optionGroups => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.staticSelect,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: {
                type: BlockTypes.plainText,
                text: '',
              },
              option_groups: optionGroups,
            },
          },
        ],
      })
    ),
    ...generateOptionTests('static select', 'home.blocks[0].accessory.initial_option', option => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.staticSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            initial_option: option,
          },
        },
      ],
    })),
    ...generateConfirmTests('static select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.staticSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    ...generateOptionTests('external select', 'home.blocks[0].accessory.initial_option', option => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.externalSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            initial_option: option,
          },
        },
      ],
    })),
    ...generateConfirmTests('external select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.externalSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    ...generateConfirmTests('users select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.usersSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    ...generateFilterTest('conversations select', 'home.blocks[0].accessory.filter', filter => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.conversationsSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            filter,
          },
        },
      ],
    })),
    ...generateConfirmTests('conversations select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.conversationsSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    ...generateConfirmTests('channels select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.channelsSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    [
      'missing required in multi static select',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.multiStaticSelect,
            },
          },
        ],
      },
      requiredError('home.blocks[0].accessory', staticMultiSelectMenuElementLimits.required),
    ],
    ...generateTypedTextTests(
      'multi static select',
      'home.blocks[0].accessory',
      'placeholder',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.multiStaticSelect,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: text,
            },
          },
        ],
      }),
      staticMultiSelectMenuElementLimits.placeholderType,
      staticMultiSelectMenuElementLimits.placeholderLength
    ),
    [
      'too small max_selected_items in multi static select',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.multiStaticSelect,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: {
                type: BlockTypes.plainText,
                text: '',
              },
              options: [],
              max_selected_items: staticMultiSelectMenuElementLimits.maxSelectedItemsMin - 1,
            },
          },
        ],
      },
      new Error(
        `Expected home.blocks[0].accessory.max_selected_items to be a minimum value of ${
          staticMultiSelectMenuElementLimits.maxSelectedItemsMin
        }, ${staticMultiSelectMenuElementLimits.maxSelectedItemsMin - 1} received.`
      ),
    ],
    ...generateOptionsTests(
      'multi static select',
      'home.blocks[0].accessory.options',
      staticMultiSelectMenuElementLimits.optionsLength,
      options => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.multiStaticSelect,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: {
                type: BlockTypes.plainText,
                text: '',
              },
              options,
            },
          },
        ],
      })
    ),
    ...generateOptionGroupsTests(
      'multi static select',
      'home.blocks[0].accessory.option_groups',
      staticMultiSelectMenuElementLimits.optionGroupsLength,
      optionGroups => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.multiStaticSelect,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: {
                type: BlockTypes.plainText,
                text: '',
              },
              option_groups: optionGroups,
            },
          },
        ],
      })
    ),
    ...generateOptionTests('multi static select', 'home.blocks[0].accessory.initial_options[0]', option => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.multiStaticSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            initial_options: [option],
          },
        },
      ],
    })),
    ...generateConfirmTests('multi static select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.multiStaticSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    ...generateOptionTests('multi external select', 'home.blocks[0].accessory.initial_options[0]', option => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.multiExternalSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            initial_options: [option],
          },
        },
      ],
    })),
    ...generateConfirmTests('multi external select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.multiExternalSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    ...generateConfirmTests('multi users select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.multiUsersSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    ...generateFilterTest('multi conversations select', 'home.blocks[0].accessory.filter', filter => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.multiConversationsSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            filter,
          },
        },
      ],
    })),
    ...generateConfirmTests('multi conversations select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.multiConversationsSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    ...generateConfirmTests('multi channels select', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.multiChannelsSelect,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            placeholder: {
              type: BlockTypes.plainText,
              text: '',
            },
            confirm,
          },
        },
      ],
    })),
    [
      'missing required in timePicker',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.timepicker,
            },
          },
        ],
      },
      requiredError('home.blocks[0].accessory', timerpickerElementLimits.required),
    ],
    ...generateTypedTextTests(
      'timePicker',
      'home.blocks[0].accessory',
      'placeholder',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.timepicker,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              placeholder: text,
            },
          },
        ],
      }),
      timerpickerElementLimits.placeholderType,
      timerpickerElementLimits.placeholderLength
    ),
    [
      'invalid date format in timePicker',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.timepicker,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              initial_time: 'invalid',
            },
          },
        ],
      },
      new Error('Expected home.blocks[0].accessory.initial_time to have the format HH:mm'),
    ],
    ...generateConfirmTests('timePicker', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.timepicker,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            confirm,
          },
        },
      ],
    })),
    [
      'missing required in overflow',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.overflow,
            },
          },
        ],
      },
      requiredError('home.blocks[0].accessory', overflowMenuElementLimits.required),
    ],
    ...generateOptionsTests(
      'overflow',
      'home.blocks[0].accessory.options',
      overflowMenuElementLimits.optionsLength,
      options => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.section,
            accessory: {
              type: BlockTypes.overflow,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              options,
            },
          },
        ],
      })
    ),
    ...generateConfirmTests('overflow', 'home.blocks[0].accessory.confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.section,
          accessory: {
            type: BlockTypes.overflow,
            action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
            options: [],
            confirm,
          },
        },
      ],
    })),
    [
      'missing required properties in action',
      {
        type: BlockTypes.modal,
        title: {
          type: BlockTypes.plainText,
          text: '',
        },
        blocks: [
          {
            type: BlockTypes.action,
          },
        ],
      },
      requiredError('modal.blocks[0]', actionBlockLimits.required),
    ],
    [
      'too many elements in section',
      {
        type: BlockTypes.modal,
        title: {
          type: BlockTypes.plainText,
          text: '',
        },
        blocks: [
          {
            type: BlockTypes.action,
            elements: generateCopies(actionBlockLimits.elementsLength + 1),
          },
        ],
      },
      maxLengthError('modal.blocks[0].elements', actionBlockLimits.elementsLength),
    ],
    [
      'element of wrong type in action',
      {
        type: BlockTypes.modal,
        title: {
          type: BlockTypes.plainText,
          text: '',
        },
        blocks: [
          {
            type: BlockTypes.action,
            elements: [
              {
                type: 'invalid',
              },
            ],
          },
        ],
      },
      oneOfTypeError('modal.blocks[0].elements[0]', actionBlockLimits.elementTypes, 'invalid'),
    ],
    [
      'missing required in button',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.action,
            elements: [
              {
                type: BlockTypes.button,
              },
            ],
          },
        ],
      },
      requiredError('home.blocks[0].elements[0]', buttonElementLimits.required),
    ],
    ...generateLengthTests(
      'button',
      'home.blocks[0].elements[0]',
      'action_id',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.action,
            elements: [
              {
                type: BlockTypes.button,
                action_id: text,
                text: {},
              },
            ],
          },
        ],
      }),
      interactiveElementsLimits.actionIdLength
    ),
    ...generateTypedTextTests(
      'button',
      'home.blocks[0].elements[0]',
      'text',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.action,
            elements: [
              {
                type: BlockTypes.button,
                action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
                text,
              },
            ],
          },
        ],
      }),
      buttonElementLimits.textType,
      buttonElementLimits.textLength
    ),
    ...generateLengthTests(
      'button',
      'home.blocks[0].elements[0]',
      'value',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.action,
            elements: [
              {
                type: BlockTypes.button,
                action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
                text: {
                  type: BlockTypes.plainText,
                  text: '',
                },
                value: text,
              },
            ],
          },
        ],
      }),
      buttonElementLimits.valueLength
    ),
    ...generateLengthTests(
      'button',
      'home.blocks[0].elements[0]',
      'url',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.action,
            elements: [
              {
                type: BlockTypes.button,
                action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
                text: {
                  type: BlockTypes.plainText,
                  text: '',
                },
                url: text,
              },
            ],
          },
        ],
      }),
      buttonElementLimits.urlLength
    ),
    [
      'wrong option for style in button',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.action,
            elements: [
              {
                type: BlockTypes.button,
                action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
                text: {
                  type: BlockTypes.plainText,
                  text: '',
                },
                style: 'invalid',
              },
            ],
          },
        ],
      },
      optionError('home.blocks[0].elements[0].style', buttonElementLimits.styleOptions, 'invalid'),
    ],
    ...generateConfirmTests('button', 'home.blocks[0].elements[0].confirm', confirm => ({
      type: BlockTypes.home,
      blocks: [
        {
          type: BlockTypes.action,
          elements: [
            {
              type: BlockTypes.button,
              action_id: generateStringLength(interactiveElementsLimits.actionIdLength),
              text: {
                type: BlockTypes.plainText,
                text: '',
              },
              confirm,
            },
          ],
        },
      ],
    })),
    [
      'missing required properties in context',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.context,
          },
        ],
      },
      requiredError('home.blocks[0]', contextBlockLimits.required),
    ],
    [
      'too many elements in context',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.context,
            elements: generateCopies(contextBlockLimits.elementsLength + 1),
          },
        ],
      },
      maxLengthError('home.blocks[0].elements', contextBlockLimits.elementsLength),
    ],
    [
      'element of wrong type in context',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.context,
            elements: [
              {
                type: 'invalid',
              },
            ],
          },
        ],
      },
      oneOfTypeError('home.blocks[0].elements[0]', contextBlockLimits.elementTypes, 'invalid'),
    ],
    [
      'missing required properties in context image element',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.context,
            elements: [
              {
                type: BlockTypes.image,
              },
            ],
          },
        ],
      },
      requiredError('home.blocks[0].elements[0]', imageElementLimits.required),
    ],
    [
      'Plain text should not have verbatim in context element',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.context,
            elements: [
              {
                type: BlockTypes.plainText,
                text: '',
                verbatim: '',
              },
            ],
          },
        ],
      },
      new Error(
        `Expected home.blocks[0].elements[0] of type ${BlockTypes.plainText} to not have the property verbatim.`
      ),
    ],
    [
      'Markdown should not have emoji in context element',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.context,
            elements: [
              {
                type: BlockTypes.mrkdwn,
                text: '',
                emoji: '',
              },
            ],
          },
        ],
      },
      new Error(`Expected home.blocks[0].elements[0] of type ${BlockTypes.mrkdwn} to not have the property emoji.`),
    ],
    [
      'missing required properties in file',
      {
        type: BlockTypes.message,
        text: '',
        blocks: [
          {
            type: BlockTypes.file,
          },
        ],
      },
      requiredError('message.blocks[0]', fileBlockLimits.required),
    ],
    [
      "wrong option for style in file's source",
      {
        type: BlockTypes.message,
        text: '',
        blocks: [
          {
            type: BlockTypes.file,
            external_id: '',
            source: 'invalid',
          },
        ],
      },
      optionError('message.blocks[0].source', fileBlockLimits.sourceType, 'invalid'),
    ],
    [
      'missing required properties in header',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.header,
          },
        ],
      },
      requiredError('home.blocks[0]', headerBlockLimits.required),
    ],
    ...generateTypedTextTests(
      'header',
      'home.blocks[0]',
      'text',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.header,
            text,
          },
        ],
      }),
      headerBlockLimits.textType,
      headerBlockLimits.textLength
    ),
    [
      'missing required properties in input',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.input,
          },
        ],
      },
      requiredError('home.blocks[0]', inputBlockLimits.required),
    ],
    ...generateTypedTextTests(
      'input',
      'home.blocks[0]',
      'label',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.input,
            label: text,
            element: {
              type: 'plain_text_input',
              action_id: '',
            },
          },
        ],
      }),
      inputBlockLimits.labelType,
      inputBlockLimits.labelLength
    ),
    [
      'invalid type for element in input',
      {
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.input,
            label: {
              type: BlockTypes.plainText,
              text: '',
            },
            element: {
              type: 'invalid',
            },
          },
        ],
      },
      oneOfTypeError('home.blocks[0].element', inputBlockLimits.elementTypes, 'invalid'),
    ],
    ...generateTypedTextTests(
      'input',
      'home.blocks[0]',
      'hint',
      text => ({
        type: BlockTypes.home,
        blocks: [
          {
            type: BlockTypes.input,
            label: {
              type: BlockTypes.plainText,
              text: '',
            },
            element: {
              type: 'plain_text_input',
              action_id: '',
            },
            hint: text,
          },
        ],
      }),
      inputBlockLimits.hintType,
      inputBlockLimits.hintLength
    ),
  ];

  test.each(cases)('%s', (_, block, expected) => {
    const converted = block as { type: string };

    // We are using ts-ignore since we are purposefully having invalid objects
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    expect(() => {
      if (converted.type === BlockTypes.modal) {
        // @ts-ignore
        validateModal(block);
      } else if (converted.type === BlockTypes.home) {
        // @ts-ignore
        validateHome(block);
      } else {
        // @ts-ignore
        validateMessage(block);
      }
    }).toThrowError(expected);
    /* eslint-enable @typescript-eslint/ban-ts-comment */
  });
});
