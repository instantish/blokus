# Blokus
Blokus is a JavaScript library for creating UIs in slack using the [BlockKit API](https://api.slack.com/block-kit) and
the component pattern from modern UI libraries like React or Vue. Blokus was built in TypeScript and provides complete
types for all it's exported members.

## Why use Blockus?
Creating UIs with the BlockKit API means creating a lot of JavaScript Objects and duplicating components all over. It
is possible and relatively easy to create functions that generate blocks, but it leads to complex, duplicated, and hard
to read code. Blokus solves that by making you write UI blocks like you would write a React app.

Take this code for example
```js
function generateOption(text, value, description) {
  return {
    value,
    description: {
      type: 'plain_text',
      text: description,
    },
    text: {
      type: 'mrkdwn',
      text: description,
    },
  };
}

function generateSelect(options, initialOption, placeholder) {
  return {
    type: 'static_select',
    options: options.map((option) => generateOption(option.text, option.value, option.description)),
    initial_option: generateOption(initialOption.text, initialOption.value, initialOption.description),
    placeholder: {
      type: 'plain_text',
      text: placeholder,
    }
  };
}

function generateSelectModal() {
  const selects = [
    {
      placeholder: 'Select something',
      options: [
        {
          value: 'option1',
          text: 'Some option',
          description: 'Some option',
        },
        {
          value: 'option2',
          text: 'Some other option',
          description: 'Some other option',
        }
      ],
      intialOption:{
        value: 'option2',
        text: 'Some other option',
        description: 'Some other option',
      },
    }
  ];
  
  return {
    type: 'modal',
    title: {
      type: 'plain_text',
      text: 'Some modal',
    },
    blocks: [
      {
        type: 'action',
        elements: selects.map(select => generateSelect(select.options, select.intialOption, select.placeholder)),
      },
    ]
  }
}
```

Now with blokus
```js
import { render, Modal, Action, StaticSelect, Option, Text } from '@instantish/blokus';

const generateOption = ({ text, value, description }) => Option({
  value,
  description: Text({}, description),
}, text);

const generateSelect = ({ options, initialOption, placeholder }) => StaticSelect({
  initialOption: generateOption(initialOption),
  placeholder: Text({}, placeholder),
}, options.map(generateOption));

const GenerateSelectModal = () => {
  const selects = [
    {
      placeholder: 'Select something',
      options: [
        {
          value: 'option1',
          text: 'Some option',
          description: 'Some option',
        },
        {
          value: 'option2',
          text: 'Some other option',
          description: 'Some other option',
        }
      ],
      intialOption:{
        value: 'option2',
        text: 'Some other option',
        description: 'Some other option',
      },
    }
  ];
  
  // Render returns a promise to allow you to fetch data in component functions!
  return render(
    Modal({
      title: Text('Some Modal'),
    }, Action({}, selects.map(generateSelect)))
  );
}
```

## How to use
Install the library using NPM.

```bash
npm install @instantish/blokus
```

Import the render method, and the blocks you want to create, from blokus.

```js
import { render, Modal } from '@instantish/blokus';

const renderView = async () => {
  const blocks = await render(Modal(/* ... */));
}
```

`render` is an async method and will return a promise that will either thrown if there is a format error, or resolve to
the created blocks. Blokus validates the blocks you provide to the render method to ensure the rendered blocks are valid
with the [slack BlockKit API](https://api.slack.com/reference/block-kit).

### Using components
Any property of a blokus block that would require a sub-block can instead use a component. For example, the `blocks`
property of the `Modal` and `HomeTab` view or the `confirm` property of any action element.

Components are functions that take one props parameter and are expected to return one or multiple blocks depending on where
they are used. `render` will throw an error when a component returns the wrong number of blocks. A component may return
`null` or `undefined`, blokus will get rid of them for you.

```js
import { Header } from '@instantish/blokus';

const Component = ({ /* Props are loaded in this object */ }) => {
  // Return a block created with a block function.
  return Header();
}
```

Components can be used anywhere, simply call them with the `Component` function and provide them with props and
children.

```js
import { Modal, Component } from '@instantish/blokus';

Modal(
  {},
  Component({ foo: 'bar' }, SomeComponent), // Property foo will be in the props parameter
  something.map(thing => Component(thing, SomeComponent)) // blokus will flatten arrays, so feel free to return arrays of blocks!
);
```

Components can access their children through their props if provided.

```js
import { Modal, Action, Component } from '@instantish/blokus';

const SomeModal = ({ children }) => {
  return Modal({}, children);
}

Component({}, SomeModal, Action()); // The action block will be in the children's array
```

## API
[Complete API](docs/modules.md)

### Action

▸ `Const`**Action**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ActionBlock*](docs/interfaces/actionblock.md), *blockId* \| *elements*\>, *elements*\>, ...`elements`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ActionElement*](docs/modules.md#actionelement)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ActionElement*](docs/modules.md#actionelement)\>[]): [*ActionBlock*](docs/interfaces/actionblock.md)

Generates an action block from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#actions)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ActionBlock*](docs/interfaces/actionblock.md), *blockId* \| *elements*\>, *elements*\> | The various properties available to this block or element.   |
`...elements` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ActionElement*](docs/modules.md#actionelement)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ActionElement*](docs/modules.md#actionelement)\>[] | The action elements to use for the element, sub-arrays will automatically be flattened. Replaces the `elements` property.   |

**Returns:** [*ActionBlock*](docs/interfaces/actionblock.md)

Defined in: [factories/presentationalFactories.ts:29](https://github.com/instantish/blokus/blob/f10405c/src/factories/presentationalFactories.ts#L29)

___

### Button

▸ `Const`**Button**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ButtonElement*](docs/interfaces/buttonelement.md), *text* \| *url* \| *value* \| *style* \| *confirm* \| *actionId*\>, *text*\>, `text`: [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md)\>): [*ButtonElement*](docs/interfaces/buttonelement.md)

Generates a button element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#button)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ButtonElement*](docs/interfaces/buttonelement.md), *text* \| *url* \| *value* \| *style* \| *confirm* \| *actionId*\>, *text*\> | The various properties available to this block or element.   |
`text` | [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md)\> | The text to add inside the element, strings will automatically converted to plain_text blocks. Replaces the `text` property.   |

**Returns:** [*ButtonElement*](docs/interfaces/buttonelement.md)

Defined in: [factories/elementFactories.ts:37](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L37)

___

### CheckboxGroup

▸ `Const`**CheckboxGroup**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*CheckboxGroupElement*](docs/interfaces/checkboxgroupelement.md), *confirm* \| *actionId* \| *options* \| *initialOptions*\>, *options*\>, ...`options`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\>[]): [*CheckboxGroupElement*](docs/interfaces/checkboxgroupelement.md)

Generates a checkboxes element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#checkboxes)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*CheckboxGroupElement*](docs/interfaces/checkboxgroupelement.md), *confirm* \| *actionId* \| *options* \| *initialOptions*\>, *options*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. Replaces the `options` property.   |

**Returns:** [*CheckboxGroupElement*](docs/interfaces/checkboxgroupelement.md)

Defined in: [factories/elementFactories.ts:53](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L53)

___

### Component

▸ `Const`**Component**<T, O\>(`func`: [*FunctionalComponent*](docs/modules.md#functionalcomponent)<T, O\>, `params`: [*Props*](docs/modules.md#props)<T\>, ...`children`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*Block*](docs/interfaces/block.md)\>): [*ComponentBlock*](docs/interfaces/componentblock.md)<T, O\>

Generates a component block in blokus. This component will be executed to
generate the final structure to be sent to slack when rendering.

#### Type parameters:

Name | Description |
------ | ------ |
`T` | The Props type for the component.   |
`O` | The output type for the component, should be a block.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`func` | [*FunctionalComponent*](docs/modules.md#functionalcomponent)<T, O\> | The component factory, will be executed with the props as its only parameter. Should return a valid Output block of type O.   |
`params` | [*Props*](docs/modules.md#props)<T\> | The params to pass to the component factory when it is executed.   |
`...children` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*Block*](docs/interfaces/block.md)\> | The children to pass to the component factory when executed, will be passed as the `children` value in the props. Can be an array or multiple parameters.   |

**Returns:** [*ComponentBlock*](docs/interfaces/componentblock.md)<T, O\>

Returns the generated component block, for internal use only.

Defined in: [factories/componentFactories.ts:16](https://github.com/instantish/blokus/blob/f10405c/src/factories/componentFactories.ts#L16)

___

### Confirm

▸ `Const`**Confirm**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ConfirmObject*](docs/interfaces/confirmobject.md), *text* \| *style* \| *confirm* \| *title* \| *deny*\>, *text*\>, `text`: [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\>): [*ConfirmObject*](docs/interfaces/confirmobject.md)

Generates a confirm composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#confirm)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ConfirmObject*](docs/interfaces/confirmobject.md), *text* \| *style* \| *confirm* \| *title* \| *deny*\>, *text*\> | The various properties available to this object.   |
`text` | [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\> | The markdown text to add inside of this confirm object. Replaces the `text` property.   |

**Returns:** [*ConfirmObject*](docs/interfaces/confirmobject.md)

Defined in: [factories/objectsFactories.ts:52](https://github.com/instantish/blokus/blob/f10405c/src/factories/objectsFactories.ts#L52)

___

### Context

▸ `Const`**Context**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ContextBlock*](docs/interfaces/contextblock.md), *blockId* \| *elements*\>, *elements*\>, ...`elements`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<*string* \| [*ImageElementBlock*](docs/interfaces/imageelementblock.md) \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<*string* \| [*ImageElementBlock*](docs/interfaces/imageelementblock.md) \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\>[]): [*ContextBlock*](docs/interfaces/contextblock.md)

Generates a context block from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#context)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ContextBlock*](docs/interfaces/contextblock.md), *blockId* \| *elements*\>, *elements*\> | The various properties available to this block or element.   |
`...elements` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<*string* \| [*ImageElementBlock*](docs/interfaces/imageelementblock.md) \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<*string* \| [*ImageElementBlock*](docs/interfaces/imageelementblock.md) \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\>[] | The elements to use for the block, sub-arrays will automatically be flattened. Will automatically convert strings to plain_text elements. Replaces the `elements` property.   |

**Returns:** [*ContextBlock*](docs/interfaces/contextblock.md)

Defined in: [factories/presentationalFactories.ts:46](https://github.com/instantish/blokus/blob/f10405c/src/factories/presentationalFactories.ts#L46)

___

### ConversationMultiSelect

▸ `Const`**ConversationMultiSelect**(`params`: *Pick*<[*ConversationMultiSelectMenuElement*](docs/interfaces/conversationmultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialConversations* \| *defaultToCurrentConversation* \| *filter*\>): [*ConversationMultiSelectMenuElement*](docs/interfaces/conversationmultiselectmenuelement.md)

Generates a conversation multi select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ConversationMultiSelectMenuElement*](docs/interfaces/conversationmultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialConversations* \| *defaultToCurrentConversation* \| *filter*\> | The various properties available to this block or element.   |

**Returns:** [*ConversationMultiSelectMenuElement*](docs/interfaces/conversationmultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:128](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L128)

___

### ConversationSelect

▸ `Const`**ConversationSelect**(`params`: *Pick*<[*ConversationSelectMenuElement*](docs/interfaces/conversationselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *defaultToCurrentConversation* \| *filter* \| *initialConversation*\>): [*ConversationSelectMenuElement*](docs/interfaces/conversationselectmenuelement.md)

Generates a conversation select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#conversation_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ConversationSelectMenuElement*](docs/interfaces/conversationselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *defaultToCurrentConversation* \| *filter* \| *initialConversation*\> | The various properties available to this block or element.   |

**Returns:** [*ConversationSelectMenuElement*](docs/interfaces/conversationselectmenuelement.md)

Defined in: [factories/elementFactories.ts:233](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L233)

___

### Datepicker

▸ `Const`**Datepicker**(`params`: *Pick*<[*DatepickerElement*](docs/interfaces/datepickerelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialDate*\>): [*DatepickerElement*](docs/interfaces/datepickerelement.md)

Generates a datepicker element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#datepicker)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*DatepickerElement*](docs/interfaces/datepickerelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialDate*\> | The various properties available to this block or element.   |

**Returns:** [*DatepickerElement*](docs/interfaces/datepickerelement.md)

Defined in: [factories/elementFactories.ts:67](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L67)

___

### DispatchActionConfig

▸ `Const`**DispatchActionConfig**(`params`: *Pick*<[*DispatchActionConfigObject*](docs/interfaces/dispatchactionconfigobject.md), *triggerActionsOn*\>): [*DispatchActionConfigObject*](docs/interfaces/dispatchactionconfigobject.md)

Generates a dispatch action config composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#dispatch_action_config)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*DispatchActionConfigObject*](docs/interfaces/dispatchactionconfigobject.md), *triggerActionsOn*\> | The various properties available to this object.   |

**Returns:** [*DispatchActionConfigObject*](docs/interfaces/dispatchactionconfigobject.md)

Defined in: [factories/objectsFactories.ts:98](https://github.com/instantish/blokus/blob/f10405c/src/factories/objectsFactories.ts#L98)

___

### Divider

▸ `Const`**Divider**(`params`: *Pick*<[*DividerBlock*](docs/interfaces/dividerblock.md), *blockId*\>): [*DividerBlock*](docs/interfaces/dividerblock.md)

Generates a divider block from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#divider)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*DividerBlock*](docs/interfaces/dividerblock.md), *blockId*\> | The various properties available to this block or element.   |

**Returns:** [*DividerBlock*](docs/interfaces/dividerblock.md)

Defined in: [factories/presentationalFactories.ts:68](https://github.com/instantish/blokus/blob/f10405c/src/factories/presentationalFactories.ts#L68)

___

### ExternalMultiSelect

▸ `Const`**ExternalMultiSelect**(`params`: *Pick*<[*ExternalMultiSelectMenuElement*](docs/interfaces/externalmultiselectmenuelement.md), *confirm* \| *actionId* \| *initialOptions* \| *placeholder* \| *maxSelectedItems* \| *minQueryLength*\>): [*ExternalMultiSelectMenuElement*](docs/interfaces/externalmultiselectmenuelement.md)

Generates an external multi select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#external_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ExternalMultiSelectMenuElement*](docs/interfaces/externalmultiselectmenuelement.md), *confirm* \| *actionId* \| *initialOptions* \| *placeholder* \| *maxSelectedItems* \| *minQueryLength*\> | The various properties available to this block or element.   |

**Returns:** [*ExternalMultiSelectMenuElement*](docs/interfaces/externalmultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:106](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L106)

___

### ExternalSelect

▸ `Const`**ExternalSelect**(`params`: *Pick*<[*ExternalSelectMenuElement*](docs/interfaces/externalselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *minQueryLength* \| *initialOption*\>): [*ExternalSelectMenuElement*](docs/interfaces/externalselectmenuelement.md)

Generates an external select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#external_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ExternalSelectMenuElement*](docs/interfaces/externalselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *minQueryLength* \| *initialOption*\> | The various properties available to this block or element.   |

**Returns:** [*ExternalSelectMenuElement*](docs/interfaces/externalselectmenuelement.md)

Defined in: [factories/elementFactories.ts:213](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L213)

___

### File

▸ `Const`**File**(`params`: *Pick*<[*FileBlock*](docs/interfaces/fileblock.md), *blockId* \| *externalId* \| *source*\>): [*FileBlock*](docs/interfaces/fileblock.md)

Generates a file block from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#file)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*FileBlock*](docs/interfaces/fileblock.md), *blockId* \| *externalId* \| *source*\> | The various properties available to this block or element.   |

**Returns:** [*FileBlock*](docs/interfaces/fileblock.md)

Defined in: [factories/presentationalFactories.ts:78](https://github.com/instantish/blokus/blob/f10405c/src/factories/presentationalFactories.ts#L78)

___

### Filter

▸ `Const`**Filter**(`params`: *Pick*<[*FilterObject*](docs/interfaces/filterobject.md), *include* \| *excludeExternalSharedChannels* \| *excludeBotUsers*\>): [*FilterObject*](docs/interfaces/filterobject.md)

Generates a filter composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#filter_conversations)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*FilterObject*](docs/interfaces/filterobject.md), *include* \| *excludeExternalSharedChannels* \| *excludeBotUsers*\> | The various properties available to this object.   |

**Returns:** [*FilterObject*](docs/interfaces/filterobject.md)

Defined in: [factories/objectsFactories.ts:108](https://github.com/instantish/blokus/blob/f10405c/src/factories/objectsFactories.ts#L108)

___

### Header

▸ `Const`**Header**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*HeaderBlock*](docs/interfaces/headerblock.md), *text* \| *blockId*\>, *text*\>, `text`: [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md)\>): [*HeaderBlock*](docs/interfaces/headerblock.md)

Generates a header block from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#header)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*HeaderBlock*](docs/interfaces/headerblock.md), *text* \| *blockId*\>, *text*\> | The various properties available to this block or element.   |
`text` | [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md)\> | The text to add inside the block, strings will automatically converted to plain_text blocks. Replaces the `text` property.   |

**Returns:** [*HeaderBlock*](docs/interfaces/headerblock.md)

Defined in: [factories/presentationalFactories.ts:90](https://github.com/instantish/blokus/blob/f10405c/src/factories/presentationalFactories.ts#L90)

___

### HomeTab

▸ `Const`**HomeTab**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*HomeTabView*](docs/interfaces/hometabview.md), *externalId* \| *blocks* \| *privateMetadata* \| *callbackId*\>, *blocks*\>, ...`blocks`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ViewBlocks*](docs/modules.md#viewblocks)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ViewBlocks*](docs/modules.md#viewblocks)\>[]): [*HomeTabView*](docs/interfaces/hometabview.md)

Generates a home view from slack.

**`see`** [Official documentation](https://api.slack.com/surfaces/tabs)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*HomeTabView*](docs/interfaces/hometabview.md), *externalId* \| *blocks* \| *privateMetadata* \| *callbackId*\>, *blocks*\> | The various properties available to this view.   |
`...blocks` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ViewBlocks*](docs/modules.md#viewblocks)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ViewBlocks*](docs/modules.md#viewblocks)\>[] | The blocks to use for the view, sub-arrays will automatically be flattened. Replaces the `blocks` property.   |

**Returns:** [*HomeTabView*](docs/interfaces/hometabview.md)

Defined in: [factories/viewFactories.ts:35](https://github.com/instantish/blokus/blob/f10405c/src/factories/viewFactories.ts#L35)

___

### Image

▸ `Const`**Image**(`params`: *Pick*<[*ImageBlock*](docs/interfaces/imageblock.md), *imageUrl* \| *altText* \| *title* \| *blockId*\>): [*ImageBlock*](docs/interfaces/imageblock.md)

Generates an image block from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#image)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ImageBlock*](docs/interfaces/imageblock.md), *imageUrl* \| *altText* \| *title* \| *blockId*\> | The various properties available to this block or element.   |

**Returns:** [*ImageBlock*](docs/interfaces/imageblock.md)

Defined in: [factories/presentationalFactories.ts:104](https://github.com/instantish/blokus/blob/f10405c/src/factories/presentationalFactories.ts#L104)

___

### ImageElement

▸ `Const`**ImageElement**(`params`: *Pick*<[*ImageElementBlock*](docs/interfaces/imageelementblock.md), *imageUrl* \| *altText*\>): [*ImageElementBlock*](docs/interfaces/imageelementblock.md)

Generates an image element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#image)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ImageElementBlock*](docs/interfaces/imageelementblock.md), *imageUrl* \| *altText*\> | The various properties available to this block or element.   |

**Returns:** [*ImageElementBlock*](docs/interfaces/imageelementblock.md)

Defined in: [factories/elementFactories.ts:77](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L77)

___

### Input

▸ `Const`**Input**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*InputBlock*](docs/interfaces/inputblock.md), *label* \| *blockId* \| *element* \| *dispatchAction* \| *hint* \| *optional*\>, *element*\>, `element`: [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<[*FormElement*](docs/modules.md#formelement)\>): [*InputBlock*](docs/interfaces/inputblock.md)

Generates an input block from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#input)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*InputBlock*](docs/interfaces/inputblock.md), *label* \| *blockId* \| *element* \| *dispatchAction* \| *hint* \| *optional*\>, *element*\> | The various properties available to this block or element.   |
`element` | [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<[*FormElement*](docs/modules.md#formelement)\> | The form element to use for the block. Replaces the `element` property.   |

**Returns:** [*InputBlock*](docs/interfaces/inputblock.md)

Defined in: [factories/presentationalFactories.ts:115](https://github.com/instantish/blokus/blob/f10405c/src/factories/presentationalFactories.ts#L115)

___

### Markdown

▸ `Const`**Markdown**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*MarkdownTextObject*](docs/interfaces/markdowntextobject.md), *text* \| *verbatim*\>, *text*\>, `text?`: *string*): [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)

Generates a text composition object from slack with the markdown type.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#text)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*MarkdownTextObject*](docs/interfaces/markdowntextobject.md), *text* \| *verbatim*\>, *text*\> | - | The various properties available to this object.   |
`text` | *string* | '' | The markdown text to add inside of this text object. Replaces the `text` property.   |

**Returns:** [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)

Defined in: [factories/objectsFactories.ts:36](https://github.com/instantish/blokus/blob/f10405c/src/factories/objectsFactories.ts#L36)

___

### Message

▸ `Const`**Message**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*MessageView*](docs/interfaces/messageview.md), *text* \| *blocks* \| *threadTS* \| *mrkdwn*\>, *blocks*\>, ...`blocks`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*MessageBlock*](docs/modules.md#messageblock)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*MessageBlock*](docs/modules.md#messageblock)\>[]): [*MessageView*](docs/interfaces/messageview.md)

Generates a message view from slack.

**`see`** [Official documentation](https://api.slack.com/surfaces/messages)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*MessageView*](docs/interfaces/messageview.md), *text* \| *blocks* \| *threadTS* \| *mrkdwn*\>, *blocks*\> | The various properties available to this view.   |
`...blocks` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*MessageBlock*](docs/modules.md#messageblock)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*MessageBlock*](docs/modules.md#messageblock)\>[] | The blocks to use for the view, sub-arrays will automatically be flattened. Replaces the `blocks` property.   |

**Returns:** [*MessageView*](docs/interfaces/messageview.md)

Defined in: [factories/viewFactories.ts:51](https://github.com/instantish/blokus/blob/f10405c/src/factories/viewFactories.ts#L51)

___

### Modal

▸ `Const`**Modal**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ModalView*](docs/interfaces/modalview.md), *title* \| *externalId* \| *blocks* \| *close* \| *submit* \| *privateMetadata* \| *callbackId* \| *clearOnClose* \| *notifyOnClose* \| *submitDisabled*\>, *blocks*\>, ...`blocks`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ViewBlocks*](docs/modules.md#viewblocks)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ViewBlocks*](docs/modules.md#viewblocks)\>[]): [*ModalView*](docs/interfaces/modalview.md)

Generates a modal view from slack.

**`see`** [Official documentation](https://api.slack.com/surfaces/modals)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*ModalView*](docs/interfaces/modalview.md), *title* \| *externalId* \| *blocks* \| *close* \| *submit* \| *privateMetadata* \| *callbackId* \| *clearOnClose* \| *notifyOnClose* \| *submitDisabled*\>, *blocks*\> | The various properties available to this view.   |
`...blocks` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ViewBlocks*](docs/modules.md#viewblocks)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*ViewBlocks*](docs/modules.md#viewblocks)\>[] | The blocks to use for the view, sub-arrays will automatically be flattened. Replaces the `blocks` property.   |

**Returns:** [*ModalView*](docs/interfaces/modalview.md)

Defined in: [factories/viewFactories.ts:19](https://github.com/instantish/blokus/blob/f10405c/src/factories/viewFactories.ts#L19)

___

### Option

▸ `Const`**Option**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*OptionObject*](docs/interfaces/optionobject.md), *text* \| *url* \| *value* \| *description*\>, *text*\>, `text`: [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\>): [*OptionObject*](docs/interfaces/optionobject.md)

Generates an option composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#option)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*OptionObject*](docs/interfaces/optionobject.md), *text* \| *url* \| *value* \| *description*\>, *text*\> | The various properties available to this object.   |
`text` | [*BlockOrGenerator*](docs/modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\> | The markdown text to add inside of this option object. Replaces the `text` property.   |

**Returns:** [*OptionObject*](docs/interfaces/optionobject.md)

Defined in: [factories/objectsFactories.ts:68](https://github.com/instantish/blokus/blob/f10405c/src/factories/objectsFactories.ts#L68)

___

### OptionGroup

▸ `Const`**OptionGroup**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*OptionGroupObject*](docs/interfaces/optiongroupobject.md), *options* \| *label*\>, *options*\>, ...`options`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\>[]): [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)

Generates an option group composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#option_group)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*OptionGroupObject*](docs/interfaces/optiongroupobject.md), *options* \| *label*\>, *options*\> | The various properties available to this object.   |
`...options` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\>[] | The options to use for the object, sub-arrays will automatically be flattened. Replaces the `options` property.   |

**Returns:** [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)

Defined in: [factories/objectsFactories.ts:84](https://github.com/instantish/blokus/blob/f10405c/src/factories/objectsFactories.ts#L84)

___

### OverflowMenu

▸ `Const`**OverflowMenu**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*OverflowMenuElement*](docs/interfaces/overflowmenuelement.md), *confirm* \| *actionId* \| *options*\>, *options*\>, ...`options`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\>[]): [*OverflowMenuElement*](docs/interfaces/overflowmenuelement.md)

Generates an overflow menu element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#overflow)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*OverflowMenuElement*](docs/interfaces/overflowmenuelement.md), *confirm* \| *actionId* \| *options*\>, *options*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. Replaces the `options` property.   |

**Returns:** [*OverflowMenuElement*](docs/interfaces/overflowmenuelement.md)

Defined in: [factories/elementFactories.ts:154](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L154)

___

### PlainTextInput

▸ `Const`**PlainTextInput**(`params`: *Pick*<[*PlainTextInputElement*](docs/interfaces/plaintextinputelement.md), *actionId* \| *placeholder* \| *initialValue* \| *multiline* \| *minLength* \| *maxLength* \| *dispatchActionConfig*\>): [*PlainTextInputElement*](docs/interfaces/plaintextinputelement.md)

Generates a plain text input element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#input)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*PlainTextInputElement*](docs/interfaces/plaintextinputelement.md), *actionId* \| *placeholder* \| *initialValue* \| *multiline* \| *minLength* \| *maxLength* \| *dispatchActionConfig*\> | The various properties available to this block or element.   |

**Returns:** [*PlainTextInputElement*](docs/interfaces/plaintextinputelement.md)

Defined in: [factories/elementFactories.ts:168](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L168)

___

### PublicChannelsMultiSelect

▸ `Const`**PublicChannelsMultiSelect**(`params`: *Pick*<[*PublicChannelsMultiSelectMenuElement*](docs/interfaces/publicchannelsmultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialChannels*\>): [*PublicChannelsMultiSelectMenuElement*](docs/interfaces/publicchannelsmultiselectmenuelement.md)

Generates a public channels multi select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#channel_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*PublicChannelsMultiSelectMenuElement*](docs/interfaces/publicchannelsmultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialChannels*\> | The various properties available to this block or element.   |

**Returns:** [*PublicChannelsMultiSelectMenuElement*](docs/interfaces/publicchannelsmultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:140](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L140)

___

### PublicChannelsSelect

▸ `Const`**PublicChannelsSelect**(`params`: *Pick*<[*PublicChannelsSelectMenuElement*](docs/interfaces/publicchannelsselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialChannel*\>): [*PublicChannelsSelectMenuElement*](docs/interfaces/publicchannelsselectmenuelement.md)

Generates a public channels select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#channel_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*PublicChannelsSelectMenuElement*](docs/interfaces/publicchannelsselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialChannel*\> | The various properties available to this block or element.   |

**Returns:** [*PublicChannelsSelectMenuElement*](docs/interfaces/publicchannelsselectmenuelement.md)

Defined in: [factories/elementFactories.ts:245](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L245)

___

### RadioButtonGroup

▸ `Const`**RadioButtonGroup**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*RadioButtonGroupElement*](docs/interfaces/radiobuttongroupelement.md), *confirm* \| *actionId* \| *options* \| *initialOption*\>, *options*\>, ...`options`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\>[]): [*RadioButtonGroupElement*](docs/interfaces/radiobuttongroupelement.md)

Generates an radio button group element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#radio)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*RadioButtonGroupElement*](docs/interfaces/radiobuttongroupelement.md), *confirm* \| *actionId* \| *options* \| *initialOption*\>, *options*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. Replaces the `options` property.   |

**Returns:** [*RadioButtonGroupElement*](docs/interfaces/radiobuttongroupelement.md)

Defined in: [factories/elementFactories.ts:180](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L180)

___

### Section

▸ `Const`**Section**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*SectionBlock*](docs/interfaces/sectionblock.md), *text* \| *blockId* \| *fields* \| *accessory*\>, *fields*\>, ...`fields`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\>[]): [*SectionBlock*](docs/interfaces/sectionblock.md)

Generates a section block from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#section)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*SectionBlock*](docs/interfaces/sectionblock.md), *text* \| *blockId* \| *fields* \| *accessory*\>, *fields*\> | The various properties available to this block or element.   |
`...fields` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<*string* \| [*PlainTextObject*](docs/interfaces/plaintextobject.md) \| [*MarkdownTextObject*](docs/interfaces/markdowntextobject.md)\>[] | The fields to use for the block, sub-arrays will automatically be flattened. Will automatically convert strings to plain_text elements. Replaces the `fields` property.   |

**Returns:** [*SectionBlock*](docs/interfaces/sectionblock.md)

Defined in: [factories/presentationalFactories.ts:132](https://github.com/instantish/blokus/blob/f10405c/src/factories/presentationalFactories.ts#L132)

___

### StaticMultiSelect

▸ `Const`**StaticMultiSelect**(`params`: *Pick*<[*StaticMultiSelectMenuElement*](docs/interfaces/staticmultiselectmenuelement.md), *confirm* \| *actionId* \| *options* \| *initialOptions* \| *placeholder* \| *optionGroups* \| *maxSelectedItems*\>, ...`options`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md) \| [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md) \| [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)\>[]): [*StaticMultiSelectMenuElement*](docs/interfaces/staticmultiselectmenuelement.md)

Generates a static multi select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#static_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*StaticMultiSelectMenuElement*](docs/interfaces/staticmultiselectmenuelement.md), *confirm* \| *actionId* \| *options* \| *initialOptions* \| *placeholder* \| *optionGroups* \| *maxSelectedItems*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md) \| [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md) \| [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. May pass either options and option groups types, blokus will automatically process them. Replaces the `options` and `optionGroups` properties.   |

**Returns:** [*StaticMultiSelectMenuElement*](docs/interfaces/staticmultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:90](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L90)

___

### StaticSelect

▸ `Const`**StaticSelect**(`params`: *Pick*<[*StaticSelectMenuElement*](docs/interfaces/staticselectmenuelement.md), *confirm* \| *actionId* \| *options* \| *placeholder* \| *optionGroups* \| *initialOption*\>, ...`options`: [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md) \| [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md) \| [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)\>[]): [*StaticSelectMenuElement*](docs/interfaces/staticselectmenuelement.md)

Generates a static select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#static_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*StaticSelectMenuElement*](docs/interfaces/staticselectmenuelement.md), *confirm* \| *actionId* \| *options* \| *placeholder* \| *optionGroups* \| *initialOption*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md) \| [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)\> \| [*BlocksOrGenerators*](docs/modules.md#blocksorgenerators)<[*OptionObject*](docs/interfaces/optionobject.md) \| [*OptionGroupObject*](docs/interfaces/optiongroupobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. May pass either options and option groups types, blokus will automatically process them. Replaces the `options` and `optionGroups` properties.   |

**Returns:** [*StaticSelectMenuElement*](docs/interfaces/staticselectmenuelement.md)

Defined in: [factories/elementFactories.ts:197](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L197)

___

### Text

▸ `Const`**Text**(`params`: [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*PlainTextObject*](docs/interfaces/plaintextobject.md), *text* \| *emoji*\>, *text*\>, `text?`: *string*): [*PlainTextObject*](docs/interfaces/plaintextobject.md)

Generates a text composition object from slack with the plain_text type.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#text)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`params` | [*PartialBy*](docs/modules.md#partialby)<*Pick*<[*PlainTextObject*](docs/interfaces/plaintextobject.md), *text* \| *emoji*\>, *text*\> | - | The various properties available to this object.   |
`text` | *string* | '' | The text to add inside of this text object. Replaces the `text` property.   |

**Returns:** [*PlainTextObject*](docs/interfaces/plaintextobject.md)

Defined in: [factories/objectsFactories.ts:23](https://github.com/instantish/blokus/blob/f10405c/src/factories/objectsFactories.ts#L23)

___

### Timepicker

▸ `Const`**Timepicker**(`params`: *Pick*<[*TimepickerElement*](docs/interfaces/timepickerelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialTime*\>): [*TimepickerElement*](docs/interfaces/timepickerelement.md)

Generates a timepicker element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#timepicker)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*TimepickerElement*](docs/interfaces/timepickerelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialTime*\> | The various properties available to this block or element.   |

**Returns:** [*TimepickerElement*](docs/interfaces/timepickerelement.md)

Defined in: [factories/elementFactories.ts:257](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L257)

___

### UserMultiSelect

▸ `Const`**UserMultiSelect**(`params`: *Pick*<[*UserMultiSelectMenuElement*](docs/interfaces/usermultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialUsers*\>): [*UserMultiSelectMenuElement*](docs/interfaces/usermultiselectmenuelement.md)

Generates a user multi select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#users_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*UserMultiSelectMenuElement*](docs/interfaces/usermultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialUsers*\> | The various properties available to this block or element.   |

**Returns:** [*UserMultiSelectMenuElement*](docs/interfaces/usermultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:118](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L118)

___

### UserSelect

▸ `Const`**UserSelect**(`params`: *Pick*<[*UserSelectMenuElement*](docs/interfaces/userselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialUser*\>): [*UserSelectMenuElement*](docs/interfaces/userselectmenuelement.md)

Generates a user select element from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#users_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*UserSelectMenuElement*](docs/interfaces/userselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialUser*\> | The various properties available to this block or element.   |

**Returns:** [*UserSelectMenuElement*](docs/interfaces/userselectmenuelement.md)

Defined in: [factories/elementFactories.ts:223](https://github.com/instantish/blokus/blob/f10405c/src/factories/elementFactories.ts#L223)

___

### render

▸ `Const`**render**(`view`: [*View*](docs/modules.md#view)): *Promise*<ViewPayload\>

Renders the given view and generates the valid payload for Slack. It will
execute the components and validate the inputs based on slack's
documentation.

**`throws`** Will throw errors if the payload is invalid or if generation is
impossible.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`view` | [*View*](docs/modules.md#view) | The view to generate.   |

**Returns:** *Promise*<ViewPayload\>

Returns the generated payload, validated.

Defined in: [processor.ts:589](https://github.com/instantish/blokus/blob/f10405c/src/processor.ts#L589)

## JSX

TODO

## Work remaining
- [X] Write the API section for all blocks
- [X] Add details for the TypeScript types
- [ ] Add JSX support
- [X] Add advanced validations to checks things like text length or minimums and maximums.
- [X] Support messages as a view type.

## Development
Install all dependencies:

```bash
npm install
```

To run the automated linter on the code, use this command. The linter will also check the type.

```bash
npm run lint
```

To run the automated tests, use this command.

```bash
npm run test
```

The library can be built for publication using this command.

```bash
npm run build
```

We use `tsdx` to lint, test, and build the library.
