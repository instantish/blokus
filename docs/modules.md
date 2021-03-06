[@instantish/blokus](README.md) / Exports

# @instantish/blokus

## Table of contents

### Interfaces

- [ActionBlock](interfaces/actionblock.md)
- [Block](interfaces/block.md)
- [ButtonElement](interfaces/buttonelement.md)
- [CheckboxGroupElement](interfaces/checkboxgroupelement.md)
- [ComponentBlock](interfaces/componentblock.md)
- [ConfirmObject](interfaces/confirmobject.md)
- [ContextBlock](interfaces/contextblock.md)
- [ConversationMultiSelectMenuElement](interfaces/conversationmultiselectmenuelement.md)
- [ConversationSelectMenuElement](interfaces/conversationselectmenuelement.md)
- [DatepickerElement](interfaces/datepickerelement.md)
- [DispatchActionConfigObject](interfaces/dispatchactionconfigobject.md)
- [DividerBlock](interfaces/dividerblock.md)
- [ExternalMultiSelectMenuElement](interfaces/externalmultiselectmenuelement.md)
- [ExternalSelectMenuElement](interfaces/externalselectmenuelement.md)
- [FileBlock](interfaces/fileblock.md)
- [FilterObject](interfaces/filterobject.md)
- [HeaderBlock](interfaces/headerblock.md)
- [HomeTabView](interfaces/hometabview.md)
- [ImageBlock](interfaces/imageblock.md)
- [ImageElementBlock](interfaces/imageelementblock.md)
- [InputBlock](interfaces/inputblock.md)
- [MessageView](interfaces/messageview.md)
- [ModalView](interfaces/modalview.md)
- [MrkdwnTextObject](interfaces/mrkdwntextobject.md)
- [OptionGroupObject](interfaces/optiongroupobject.md)
- [OptionObject](interfaces/optionobject.md)
- [OverflowMenuElement](interfaces/overflowmenuelement.md)
- [PlainTextInputElement](interfaces/plaintextinputelement.md)
- [PlainTextObject](interfaces/plaintextobject.md)
- [PublicChannelsMultiSelectMenuElement](interfaces/publicchannelsmultiselectmenuelement.md)
- [PublicChannelsSelectMenuElement](interfaces/publicchannelsselectmenuelement.md)
- [RadioButtonGroupElement](interfaces/radiobuttongroupelement.md)
- [SectionBlock](interfaces/sectionblock.md)
- [StaticMultiSelectMenuElement](interfaces/staticmultiselectmenuelement.md)
- [StaticSelectMenuElement](interfaces/staticselectmenuelement.md)
- [TimepickerElement](interfaces/timepickerelement.md)
- [UserMultiSelectMenuElement](interfaces/usermultiselectmenuelement.md)
- [UserSelectMenuElement](interfaces/userselectmenuelement.md)

### Type aliases

- [ActionElement](modules.md#actionelement)
- [BlockOrGenerator](modules.md#blockorgenerator)
- [BlocksOrGenerators](modules.md#blocksorgenerators)
- [CompositionObjects](modules.md#compositionobjects)
- [ElementBlock](modules.md#elementblock)
- [FormElement](modules.md#formelement)
- [FunctionalComponent](modules.md#functionalcomponent)
- [MessageBlock](modules.md#messageblock)
- [MultiSelectElement](modules.md#multiselectelement)
- [PartialBy](modules.md#partialby)
- [Props](modules.md#props)
- [PropsWithChildren](modules.md#propswithchildren)
- [SelectElement](modules.md#selectelement)
- [TextObject](modules.md#textobject)
- [View](modules.md#view)
- [ViewBlocks](modules.md#viewblocks)

### Functions

- [Action](modules.md#action)
- [Button](modules.md#button)
- [CheckboxGroup](modules.md#checkboxgroup)
- [Component](modules.md#component)
- [Confirm](modules.md#confirm)
- [Context](modules.md#context)
- [ConversationMultiSelect](modules.md#conversationmultiselect)
- [ConversationSelect](modules.md#conversationselect)
- [Datepicker](modules.md#datepicker)
- [DispatchActionConfig](modules.md#dispatchactionconfig)
- [Divider](modules.md#divider)
- [ExternalMultiSelect](modules.md#externalmultiselect)
- [ExternalSelect](modules.md#externalselect)
- [File](modules.md#file)
- [Filter](modules.md#filter)
- [Header](modules.md#header)
- [HomeTab](modules.md#hometab)
- [Image](modules.md#image)
- [ImageElement](modules.md#imageelement)
- [Input](modules.md#input)
- [Message](modules.md#message)
- [Modal](modules.md#modal)
- [Mrkdwn](modules.md#mrkdwn)
- [Option](modules.md#option)
- [OptionGroup](modules.md#optiongroup)
- [OverflowMenu](modules.md#overflowmenu)
- [PlainTextInput](modules.md#plaintextinput)
- [PublicChannelsMultiSelect](modules.md#publicchannelsmultiselect)
- [PublicChannelsSelect](modules.md#publicchannelsselect)
- [RadioButtonGroup](modules.md#radiobuttongroup)
- [Section](modules.md#section)
- [StaticMultiSelect](modules.md#staticmultiselect)
- [StaticSelect](modules.md#staticselect)
- [Text](modules.md#text)
- [Timepicker](modules.md#timepicker)
- [UserMultiSelect](modules.md#usermultiselect)
- [UserSelect](modules.md#userselect)
- [render](modules.md#render)

## Type aliases

### ActionElement

Ƭ **ActionElement**: [*ButtonElement*](interfaces/buttonelement.md) \| [*SelectElement*](modules.md#selectelement) \| [*MultiSelectElement*](modules.md#multiselectelement) \| [*OverflowMenuElement*](interfaces/overflowmenuelement.md) \| [*DatepickerElement*](interfaces/datepickerelement.md)

Union of all the action elements.

**`internal`** 

Defined in: [types.ts:1146](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1146)

___

### BlockOrGenerator

Ƭ **BlockOrGenerator**<T\>: T \| [*ComponentBlock*](interfaces/componentblock.md)<[*Props*](modules.md#props), T\> \| *null* \| *undefined*

Helper type to define a block, pure type, or component generator for the
previous two. When used ot type a property of a block, this means a component
can be used to generate the property, or it can be given as-is.

**`internal`** 

#### Type parameters:

Name | Description |
------ | ------ |
`T` | Props object.   |

Defined in: [types.ts:52](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L52)

___

### BlocksOrGenerators

Ƭ **BlocksOrGenerators**<T\>: (T \| [*ComponentBlock*](interfaces/componentblock.md)<[*Props*](modules.md#props), T\> \| [*ComponentBlock*](interfaces/componentblock.md)<[*Props*](modules.md#props), T[]\> \| *null* \| *undefined*)[]

Helper type to define an array of blocks, pure types, or component generators for the
previous two. When used ot type a property of a block, this means a component
can be used to generate the property, or it can be given as-is. Component can return both
single elements or arrays.

**`internal`** 

#### Type parameters:

Name | Description |
------ | ------ |
`T` | Props object.   |

Defined in: [types.ts:62](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L62)

___

### CompositionObjects

Ƭ **CompositionObjects**: [*TextObject*](modules.md#textobject) \| [*ConfirmObject*](interfaces/confirmobject.md) \| [*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md) \| [*DispatchActionConfigObject*](interfaces/dispatchactionconfigobject.md) \| [*FilterObject*](interfaces/filterobject.md)

Union of all the composition objects.

**`internal`** 

Defined in: [types.ts:1415](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1415)

___

### ElementBlock

Ƭ **ElementBlock**: [*ButtonElement*](interfaces/buttonelement.md) \| [*CheckboxGroupElement*](interfaces/checkboxgroupelement.md) \| [*DatepickerElement*](interfaces/datepickerelement.md) \| [*ImageElementBlock*](interfaces/imageelementblock.md) \| [*MultiSelectElement*](modules.md#multiselectelement) \| [*OverflowMenuElement*](interfaces/overflowmenuelement.md) \| [*PlainTextInputElement*](interfaces/plaintextinputelement.md) \| [*RadioButtonGroupElement*](interfaces/radiobuttongroupelement.md) \| [*SelectElement*](modules.md#selectelement) \| [*TimepickerElement*](interfaces/timepickerelement.md)

Union of all the elements.

**`internal`** 

Defined in: [types.ts:1157](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1157)

___

### FormElement

Ƭ **FormElement**: [*PlainTextInputElement*](interfaces/plaintextinputelement.md) \| [*CheckboxGroupElement*](interfaces/checkboxgroupelement.md) \| [*RadioButtonGroupElement*](interfaces/radiobuttongroupelement.md) \| [*SelectElement*](modules.md#selectelement) \| [*MultiSelectElement*](modules.md#multiselectelement) \| [*DatepickerElement*](interfaces/datepickerelement.md)

Union of all the form elements.

**`internal`** 

Defined in: [types.ts:1134](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1134)

___

### FunctionalComponent

Ƭ **FunctionalComponent**<T, O\>: (`params`: [*PropsWithChildren*](modules.md#propswithchildren)<T\>) => *Promise*<O\> \| O

The type definition for the function components given as generators to blocks.

**`typeparam`** Output type, should be a valid block.

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`T` | [*PropsWithChildren*](modules.md#propswithchildren) | {} | Props object.   |
`O` | - | {} | - |

Defined in: [types.ts:28](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L28)

___

### MessageBlock

Ƭ **MessageBlock**: [*ActionBlock*](interfaces/actionblock.md) \| [*ContextBlock*](interfaces/contextblock.md) \| [*DividerBlock*](interfaces/dividerblock.md) \| [*HeaderBlock*](interfaces/headerblock.md) \| [*ImageBlock*](interfaces/imageblock.md) \| [*FileBlock*](interfaces/fileblock.md) \| [*SectionBlock*](interfaces/sectionblock.md)

Blocks available for message views.

**`internal`** 

Defined in: [types.ts:370](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L370)

___

### MultiSelectElement

Ƭ **MultiSelectElement**: [*StaticMultiSelectMenuElement*](interfaces/staticmultiselectmenuelement.md) \| [*ExternalMultiSelectMenuElement*](interfaces/externalmultiselectmenuelement.md) \| [*UserMultiSelectMenuElement*](interfaces/usermultiselectmenuelement.md) \| [*ConversationMultiSelectMenuElement*](interfaces/conversationmultiselectmenuelement.md) \| [*PublicChannelsMultiSelectMenuElement*](interfaces/publicchannelsmultiselectmenuelement.md)

Union of all the multi select elements.

**`internal`** 

Defined in: [types.ts:767](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L767)

___

### PartialBy

Ƭ **PartialBy**<T, K\>: *Omit*<T, K\> & *Partial*<*Pick*<T, K\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K` | keyof T |

Defined in: [types.ts:4](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L4)

___

### Props

Ƭ **Props**<T\>: T & {}

Properties helper type to pass to components.

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`T` | {} | Props object, should be a nullable object.    |

Defined in: [types.ts:11](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L11)

___

### PropsWithChildren

Ƭ **PropsWithChildren**<T\>: T & { `children?`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*Block*](interfaces/block.md)\>  }

Properties helper type to pass to components, include the children property
passed when executing components.

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`T` | [*Props*](modules.md#props) | Props object, should be a nullable object.    |

Defined in: [types.ts:18](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L18)

___

### SelectElement

Ƭ **SelectElement**: [*StaticSelectMenuElement*](interfaces/staticselectmenuelement.md) \| [*ExternalSelectMenuElement*](interfaces/externalselectmenuelement.md) \| [*UserSelectMenuElement*](interfaces/userselectmenuelement.md) \| [*ConversationSelectMenuElement*](interfaces/conversationselectmenuelement.md) \| [*PublicChannelsSelectMenuElement*](interfaces/publicchannelsselectmenuelement.md)

Union of all the select elements.

**`internal`** 

Defined in: [types.ts:1123](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1123)

___

### TextObject

Ƭ **TextObject**: [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)

An object containing some text, formatted either as plain_text or using
mrkdwn, our proprietary contribution to the much beloved Markdown standard.

**`internal`** 

Defined in: [types.ts:1228](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1228)

___

### View

Ƭ **View**: [*ModalView*](interfaces/modalview.md) \| [*HomeTabView*](interfaces/hometabview.md) \| [*MessageView*](interfaces/messageview.md)

Defined in: [types.ts:1569](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1569)

___

### ViewBlocks

Ƭ **ViewBlocks**: [*ActionBlock*](interfaces/actionblock.md) \| [*ContextBlock*](interfaces/contextblock.md) \| [*DividerBlock*](interfaces/dividerblock.md) \| [*HeaderBlock*](interfaces/headerblock.md) \| [*ImageBlock*](interfaces/imageblock.md) \| [*InputBlock*](interfaces/inputblock.md) \| [*SectionBlock*](interfaces/sectionblock.md)

Blocks available in the two common views, modals and messages.

**`internal`** 

Defined in: [types.ts:357](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L357)

## Functions

### Action

▸ `Const`**Action**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*ActionBlock*](interfaces/actionblock.md), *blockId* \| *elements*\>, *elements*\>, ...`elements`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ActionElement*](modules.md#actionelement)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ActionElement*](modules.md#actionelement)\>[]): [*ActionBlock*](interfaces/actionblock.md)

Generates an action block from slack.

**JSX tag**: <action>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#actions)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*ActionBlock*](interfaces/actionblock.md), *blockId* \| *elements*\>, *elements*\> | The various properties available to this block or element.   |
`...elements` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ActionElement*](modules.md#actionelement)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ActionElement*](modules.md#actionelement)\>[] | The action elements to use for the element, sub-arrays will automatically be flattened. Replaces the `elements` property.   |

**Returns:** [*ActionBlock*](interfaces/actionblock.md)

Defined in: [factories/presentationalFactories.ts:31](https://github.com/instantish/blokus/blob/8b8e846/src/factories/presentationalFactories.ts#L31)

___

### Button

▸ `Const`**Button**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*ButtonElement*](interfaces/buttonelement.md), *text* \| *url* \| *value* \| *style* \| *confirm* \| *actionId*\>, *text*\>, `text`: [*BlockOrGenerator*](modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md)\>): [*ButtonElement*](interfaces/buttonelement.md)

Generates a button element from slack.

**JSX tag**: <button>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#button)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*ButtonElement*](interfaces/buttonelement.md), *text* \| *url* \| *value* \| *style* \| *confirm* \| *actionId*\>, *text*\> | The various properties available to this block or element.   |
`text` | [*BlockOrGenerator*](modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md)\> | The text to add inside the element, strings will automatically converted to plain_text blocks. Replaces the `text` property.   |

**Returns:** [*ButtonElement*](interfaces/buttonelement.md)

Defined in: [factories/elementFactories.ts:39](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L39)

___

### CheckboxGroup

▸ `Const`**CheckboxGroup**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*CheckboxGroupElement*](interfaces/checkboxgroupelement.md), *confirm* \| *actionId* \| *options* \| *initialOptions*\>, *options*\>, ...`options`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\>[]): [*CheckboxGroupElement*](interfaces/checkboxgroupelement.md)

Generates a checkboxes element from slack.

**JSX tag**: <checkboxes>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#checkboxes)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*CheckboxGroupElement*](interfaces/checkboxgroupelement.md), *confirm* \| *actionId* \| *options* \| *initialOptions*\>, *options*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. Replaces the `options` property.   |

**Returns:** [*CheckboxGroupElement*](interfaces/checkboxgroupelement.md)

Defined in: [factories/elementFactories.ts:57](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L57)

___

### Component

▸ `Const`**Component**<T, O\>(`func`: [*FunctionalComponent*](modules.md#functionalcomponent)<T, O\>, `params`: [*Props*](modules.md#props)<T\>, ...`children`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*Block*](interfaces/block.md)\>): [*ComponentBlock*](interfaces/componentblock.md)<T, O\>

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
`func` | [*FunctionalComponent*](modules.md#functionalcomponent)<T, O\> | The component factory, will be executed with the props as its only parameter. Should return a valid Output block of type O.   |
`params` | [*Props*](modules.md#props)<T\> | The params to pass to the component factory when it is executed.   |
`...children` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*Block*](interfaces/block.md)\> | The children to pass to the component factory when executed, will be passed as the `children` value in the props. Can be an array or multiple parameters.   |

**Returns:** [*ComponentBlock*](interfaces/componentblock.md)<T, O\>

Returns the generated component block, for internal use only.

Defined in: [factories/componentFactories.ts:16](https://github.com/instantish/blokus/blob/8b8e846/src/factories/componentFactories.ts#L16)

___

### Confirm

▸ `Const`**Confirm**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*ConfirmObject*](interfaces/confirmobject.md), *text* \| *style* \| *confirm* \| *title* \| *deny*\>, *text*\>, `text`: [*BlockOrGenerator*](modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\>): [*ConfirmObject*](interfaces/confirmobject.md)

Generates a confirm composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#confirm)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*ConfirmObject*](interfaces/confirmobject.md), *text* \| *style* \| *confirm* \| *title* \| *deny*\>, *text*\> | The various properties available to this object.   |
`text` | [*BlockOrGenerator*](modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\> | The markdown text to add inside of this confirm object. Replaces the `text` property.   |

**Returns:** [*ConfirmObject*](interfaces/confirmobject.md)

Defined in: [factories/objectsFactories.ts:49](https://github.com/instantish/blokus/blob/8b8e846/src/factories/objectsFactories.ts#L49)

___

### Context

▸ `Const`**Context**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*ContextBlock*](interfaces/contextblock.md), *blockId* \| *elements*\>, *elements*\>, ...`elements`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<*string* \| [*ImageElementBlock*](interfaces/imageelementblock.md) \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<*string* \| [*ImageElementBlock*](interfaces/imageelementblock.md) \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\>[]): [*ContextBlock*](interfaces/contextblock.md)

Generates a context block from slack.

**JSX tag**: <context>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#context)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*ContextBlock*](interfaces/contextblock.md), *blockId* \| *elements*\>, *elements*\> | The various properties available to this block or element.   |
`...elements` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<*string* \| [*ImageElementBlock*](interfaces/imageelementblock.md) \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<*string* \| [*ImageElementBlock*](interfaces/imageelementblock.md) \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\>[] | The elements to use for the block, sub-arrays will automatically be flattened. Will automatically convert strings to plain_text elements. Replaces the `elements` property.   |

**Returns:** [*ContextBlock*](interfaces/contextblock.md)

Defined in: [factories/presentationalFactories.ts:50](https://github.com/instantish/blokus/blob/8b8e846/src/factories/presentationalFactories.ts#L50)

___

### ConversationMultiSelect

▸ `Const`**ConversationMultiSelect**(`params`: *Pick*<[*ConversationMultiSelectMenuElement*](interfaces/conversationmultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialConversations* \| *defaultToCurrentConversation* \| *filter*\>): [*ConversationMultiSelectMenuElement*](interfaces/conversationmultiselectmenuelement.md)

Generates a conversation multi select element from slack.

**JSX tag**: <conversation-multiselect>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ConversationMultiSelectMenuElement*](interfaces/conversationmultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialConversations* \| *defaultToCurrentConversation* \| *filter*\> | The various properties available to this block or element.   |

**Returns:** [*ConversationMultiSelectMenuElement*](interfaces/conversationmultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:144](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L144)

___

### ConversationSelect

▸ `Const`**ConversationSelect**(`params`: *Pick*<[*ConversationSelectMenuElement*](interfaces/conversationselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *defaultToCurrentConversation* \| *filter* \| *initialConversation*\>): [*ConversationSelectMenuElement*](interfaces/conversationselectmenuelement.md)

Generates a conversation select element from slack.

**JSX tag**: <conversation-select>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#conversation_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ConversationSelectMenuElement*](interfaces/conversationselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *defaultToCurrentConversation* \| *filter* \| *initialConversation*\> | The various properties available to this block or element.   |

**Returns:** [*ConversationSelectMenuElement*](interfaces/conversationselectmenuelement.md)

Defined in: [factories/elementFactories.ts:265](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L265)

___

### Datepicker

▸ `Const`**Datepicker**(`params`: *Pick*<[*DatepickerElement*](interfaces/datepickerelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialDate*\>): [*DatepickerElement*](interfaces/datepickerelement.md)

Generates a datepicker element from slack.

**JSX tag**: <datepicker>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#datepicker)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*DatepickerElement*](interfaces/datepickerelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialDate*\> | The various properties available to this block or element.   |

**Returns:** [*DatepickerElement*](interfaces/datepickerelement.md)

Defined in: [factories/elementFactories.ts:73](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L73)

___

### DispatchActionConfig

▸ `Const`**DispatchActionConfig**(`params`: *Pick*<[*DispatchActionConfigObject*](interfaces/dispatchactionconfigobject.md), *triggerActionsOn*\>): [*DispatchActionConfigObject*](interfaces/dispatchactionconfigobject.md)

Generates a dispatch action config composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#dispatch_action_config)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*DispatchActionConfigObject*](interfaces/dispatchactionconfigobject.md), *triggerActionsOn*\> | The various properties available to this object.   |

**Returns:** [*DispatchActionConfigObject*](interfaces/dispatchactionconfigobject.md)

Defined in: [factories/objectsFactories.ts:95](https://github.com/instantish/blokus/blob/8b8e846/src/factories/objectsFactories.ts#L95)

___

### Divider

▸ `Const`**Divider**(`params`: *Pick*<[*DividerBlock*](interfaces/dividerblock.md), *blockId*\>): [*DividerBlock*](interfaces/dividerblock.md)

Generates a divider block from slack.

**JSX tag**: <divider>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#divider)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*DividerBlock*](interfaces/dividerblock.md), *blockId*\> | The various properties available to this block or element.   |

**Returns:** [*DividerBlock*](interfaces/dividerblock.md)

Defined in: [factories/presentationalFactories.ts:74](https://github.com/instantish/blokus/blob/8b8e846/src/factories/presentationalFactories.ts#L74)

___

### ExternalMultiSelect

▸ `Const`**ExternalMultiSelect**(`params`: *Pick*<[*ExternalMultiSelectMenuElement*](interfaces/externalmultiselectmenuelement.md), *confirm* \| *actionId* \| *initialOptions* \| *placeholder* \| *maxSelectedItems* \| *minQueryLength*\>): [*ExternalMultiSelectMenuElement*](interfaces/externalmultiselectmenuelement.md)

Generates an external multi select element from slack.

**JSX tag**: <external-multiselect>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#external_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ExternalMultiSelectMenuElement*](interfaces/externalmultiselectmenuelement.md), *confirm* \| *actionId* \| *initialOptions* \| *placeholder* \| *maxSelectedItems* \| *minQueryLength*\> | The various properties available to this block or element.   |

**Returns:** [*ExternalMultiSelectMenuElement*](interfaces/externalmultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:118](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L118)

___

### ExternalSelect

▸ `Const`**ExternalSelect**(`params`: *Pick*<[*ExternalSelectMenuElement*](interfaces/externalselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *minQueryLength* \| *initialOption*\>): [*ExternalSelectMenuElement*](interfaces/externalselectmenuelement.md)

Generates an external select element from slack.

**JSX tag**: <external-select>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#external_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ExternalSelectMenuElement*](interfaces/externalselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *minQueryLength* \| *initialOption*\> | The various properties available to this block or element.   |

**Returns:** [*ExternalSelectMenuElement*](interfaces/externalselectmenuelement.md)

Defined in: [factories/elementFactories.ts:241](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L241)

___

### File

▸ `Const`**File**(`params`: *Pick*<[*FileBlock*](interfaces/fileblock.md), *blockId* \| *externalId* \| *source*\>): [*FileBlock*](interfaces/fileblock.md)

Generates a file block from slack.

**JSX tag**: <file>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#file)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*FileBlock*](interfaces/fileblock.md), *blockId* \| *externalId* \| *source*\> | The various properties available to this block or element.   |

**Returns:** [*FileBlock*](interfaces/fileblock.md)

Defined in: [factories/presentationalFactories.ts:86](https://github.com/instantish/blokus/blob/8b8e846/src/factories/presentationalFactories.ts#L86)

___

### Filter

▸ `Const`**Filter**(`params`: *Pick*<[*FilterObject*](interfaces/filterobject.md), *include* \| *excludeExternalSharedChannels* \| *excludeBotUsers*\>): [*FilterObject*](interfaces/filterobject.md)

Generates a filter composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#filter_conversations)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*FilterObject*](interfaces/filterobject.md), *include* \| *excludeExternalSharedChannels* \| *excludeBotUsers*\> | The various properties available to this object.   |

**Returns:** [*FilterObject*](interfaces/filterobject.md)

Defined in: [factories/objectsFactories.ts:105](https://github.com/instantish/blokus/blob/8b8e846/src/factories/objectsFactories.ts#L105)

___

### Header

▸ `Const`**Header**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*HeaderBlock*](interfaces/headerblock.md), *text* \| *blockId*\>, *text*\>, `text`: [*BlockOrGenerator*](modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md)\>): [*HeaderBlock*](interfaces/headerblock.md)

Generates a header block from slack.

**JSX tag**: <header>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#header)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*HeaderBlock*](interfaces/headerblock.md), *text* \| *blockId*\>, *text*\> | The various properties available to this block or element.   |
`text` | [*BlockOrGenerator*](modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md)\> | The text to add inside the block, strings will automatically converted to plain_text blocks. Replaces the `text` property.   |

**Returns:** [*HeaderBlock*](interfaces/headerblock.md)

Defined in: [factories/presentationalFactories.ts:100](https://github.com/instantish/blokus/blob/8b8e846/src/factories/presentationalFactories.ts#L100)

___

### HomeTab

▸ `Const`**HomeTab**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*HomeTabView*](interfaces/hometabview.md), *externalId* \| *blocks* \| *privateMetadata* \| *callbackId*\>, *blocks*\>, ...`blocks`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ViewBlocks*](modules.md#viewblocks)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ViewBlocks*](modules.md#viewblocks)\>[]): [*HomeTabView*](interfaces/hometabview.md)

Generates a home view from slack.

**JSX tag**: <home>

**`see`** [Official documentation](https://api.slack.com/surfaces/tabs)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*HomeTabView*](interfaces/hometabview.md), *externalId* \| *blocks* \| *privateMetadata* \| *callbackId*\>, *blocks*\> | The various properties available to this view.   |
`...blocks` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ViewBlocks*](modules.md#viewblocks)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ViewBlocks*](modules.md#viewblocks)\>[] | The blocks to use for the view, sub-arrays will automatically be flattened. Replaces the `blocks` property.   |

**Returns:** [*HomeTabView*](interfaces/hometabview.md)

Defined in: [factories/viewFactories.ts:39](https://github.com/instantish/blokus/blob/8b8e846/src/factories/viewFactories.ts#L39)

___

### Image

▸ `Const`**Image**(`params`: *Pick*<[*ImageBlock*](interfaces/imageblock.md), *imageUrl* \| *altText* \| *title* \| *blockId*\>): [*ImageBlock*](interfaces/imageblock.md)

Generates an image block from slack.

**JSX tag**: <image>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#image)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ImageBlock*](interfaces/imageblock.md), *imageUrl* \| *altText* \| *title* \| *blockId*\> | The various properties available to this block or element.   |

**Returns:** [*ImageBlock*](interfaces/imageblock.md)

Defined in: [factories/presentationalFactories.ts:116](https://github.com/instantish/blokus/blob/8b8e846/src/factories/presentationalFactories.ts#L116)

___

### ImageElement

▸ `Const`**ImageElement**(`params`: *Pick*<[*ImageElementBlock*](interfaces/imageelementblock.md), *imageUrl* \| *altText*\>): [*ImageElementBlock*](interfaces/imageelementblock.md)

Generates an image element from slack.

**JSX tag**: <image-element>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#image)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*ImageElementBlock*](interfaces/imageelementblock.md), *imageUrl* \| *altText*\> | The various properties available to this block or element.   |

**Returns:** [*ImageElementBlock*](interfaces/imageelementblock.md)

Defined in: [factories/elementFactories.ts:85](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L85)

___

### Input

▸ `Const`**Input**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*InputBlock*](interfaces/inputblock.md), *label* \| *blockId* \| *element* \| *dispatchAction* \| *hint* \| *optional*\>, *element*\>, `element`: [*BlockOrGenerator*](modules.md#blockorgenerator)<[*FormElement*](modules.md#formelement)\>): [*InputBlock*](interfaces/inputblock.md)

Generates an input block from slack.

**JSX tag**: <input>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#input)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*InputBlock*](interfaces/inputblock.md), *label* \| *blockId* \| *element* \| *dispatchAction* \| *hint* \| *optional*\>, *element*\> | The various properties available to this block or element.   |
`element` | [*BlockOrGenerator*](modules.md#blockorgenerator)<[*FormElement*](modules.md#formelement)\> | The form element to use for the block. Replaces the `element` property.   |

**Returns:** [*InputBlock*](interfaces/inputblock.md)

Defined in: [factories/presentationalFactories.ts:129](https://github.com/instantish/blokus/blob/8b8e846/src/factories/presentationalFactories.ts#L129)

___

### Message

▸ `Const`**Message**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*MessageView*](interfaces/messageview.md), *text* \| *blocks* \| *threadTS* \| *mrkdwn*\>, *blocks*\>, ...`blocks`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*MessageBlock*](modules.md#messageblock)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*MessageBlock*](modules.md#messageblock)\>[]): [*MessageView*](interfaces/messageview.md)

Generates a message view from slack.

**JSX tag**: <message>

**`see`** [Official documentation](https://api.slack.com/surfaces/messages)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*MessageView*](interfaces/messageview.md), *text* \| *blocks* \| *threadTS* \| *mrkdwn*\>, *blocks*\> | The various properties available to this view.   |
`...blocks` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*MessageBlock*](modules.md#messageblock)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*MessageBlock*](modules.md#messageblock)\>[] | The blocks to use for the view, sub-arrays will automatically be flattened. Replaces the `blocks` property.   |

**Returns:** [*MessageView*](interfaces/messageview.md)

Defined in: [factories/viewFactories.ts:57](https://github.com/instantish/blokus/blob/8b8e846/src/factories/viewFactories.ts#L57)

___

### Modal

▸ `Const`**Modal**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*ModalView*](interfaces/modalview.md), *title* \| *externalId* \| *blocks* \| *close* \| *submit* \| *privateMetadata* \| *callbackId* \| *clearOnClose* \| *notifyOnClose* \| *submitDisabled*\>, *blocks*\>, ...`blocks`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ViewBlocks*](modules.md#viewblocks)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ViewBlocks*](modules.md#viewblocks)\>[]): [*ModalView*](interfaces/modalview.md)

Generates a modal view from slack.

**JSX tag**: <modal>

**`see`** [Official documentation](https://api.slack.com/surfaces/modals)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*ModalView*](interfaces/modalview.md), *title* \| *externalId* \| *blocks* \| *close* \| *submit* \| *privateMetadata* \| *callbackId* \| *clearOnClose* \| *notifyOnClose* \| *submitDisabled*\>, *blocks*\> | The various properties available to this view.   |
`...blocks` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ViewBlocks*](modules.md#viewblocks)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*ViewBlocks*](modules.md#viewblocks)\>[] | The blocks to use for the view, sub-arrays will automatically be flattened. Replaces the `blocks` property.   |

**Returns:** [*ModalView*](interfaces/modalview.md)

Defined in: [factories/viewFactories.ts:21](https://github.com/instantish/blokus/blob/8b8e846/src/factories/viewFactories.ts#L21)

___

### Mrkdwn

▸ `Const`**Mrkdwn**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*MrkdwnTextObject*](interfaces/mrkdwntextobject.md), *text* \| *verbatim*\>, *text*\>, `text?`: *string*): [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)

Generates a text composition object from slack with the markdown type.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#text)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*MrkdwnTextObject*](interfaces/mrkdwntextobject.md), *text* \| *verbatim*\>, *text*\> | - | The various properties available to this object.   |
`text` | *string* | '' | The markdown text to add inside of this text object. Replaces the `text` property.   |

**Returns:** [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)

Defined in: [factories/objectsFactories.ts:36](https://github.com/instantish/blokus/blob/8b8e846/src/factories/objectsFactories.ts#L36)

___

### Option

▸ `Const`**Option**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*OptionObject*](interfaces/optionobject.md), *text* \| *url* \| *value* \| *description*\>, *text*\>, `text`: [*BlockOrGenerator*](modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\>): [*OptionObject*](interfaces/optionobject.md)

Generates an option composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#option)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*OptionObject*](interfaces/optionobject.md), *text* \| *url* \| *value* \| *description*\>, *text*\> | The various properties available to this object.   |
`text` | [*BlockOrGenerator*](modules.md#blockorgenerator)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\> | The markdown text to add inside of this option object. Replaces the `text` property.   |

**Returns:** [*OptionObject*](interfaces/optionobject.md)

Defined in: [factories/objectsFactories.ts:65](https://github.com/instantish/blokus/blob/8b8e846/src/factories/objectsFactories.ts#L65)

___

### OptionGroup

▸ `Const`**OptionGroup**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*OptionGroupObject*](interfaces/optiongroupobject.md), *options* \| *label*\>, *options*\>, ...`options`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\>[]): [*OptionGroupObject*](interfaces/optiongroupobject.md)

Generates an option group composition object from slack.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#option_group)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*OptionGroupObject*](interfaces/optiongroupobject.md), *options* \| *label*\>, *options*\> | The various properties available to this object.   |
`...options` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\>[] | The options to use for the object, sub-arrays will automatically be flattened. Replaces the `options` property.   |

**Returns:** [*OptionGroupObject*](interfaces/optiongroupobject.md)

Defined in: [factories/objectsFactories.ts:81](https://github.com/instantish/blokus/blob/8b8e846/src/factories/objectsFactories.ts#L81)

___

### OverflowMenu

▸ `Const`**OverflowMenu**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*OverflowMenuElement*](interfaces/overflowmenuelement.md), *confirm* \| *actionId* \| *options*\>, *options*\>, ...`options`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\>[]): [*OverflowMenuElement*](interfaces/overflowmenuelement.md)

Generates an overflow menu element from slack.

**JSX tag**: <overflow>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#overflow)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*OverflowMenuElement*](interfaces/overflowmenuelement.md), *confirm* \| *actionId* \| *options*\>, *options*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. Replaces the `options` property.   |

**Returns:** [*OverflowMenuElement*](interfaces/overflowmenuelement.md)

Defined in: [factories/elementFactories.ts:174](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L174)

___

### PlainTextInput

▸ `Const`**PlainTextInput**(`params`: *Pick*<[*PlainTextInputElement*](interfaces/plaintextinputelement.md), *actionId* \| *placeholder* \| *initialValue* \| *multiline* \| *minLength* \| *maxLength* \| *dispatchActionConfig*\>): [*PlainTextInputElement*](interfaces/plaintextinputelement.md)

Generates a plain text input element from slack.

**JSX tag**: <plain-text>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#input)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*PlainTextInputElement*](interfaces/plaintextinputelement.md), *actionId* \| *placeholder* \| *initialValue* \| *multiline* \| *minLength* \| *maxLength* \| *dispatchActionConfig*\> | The various properties available to this block or element.   |

**Returns:** [*PlainTextInputElement*](interfaces/plaintextinputelement.md)

Defined in: [factories/elementFactories.ts:190](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L190)

___

### PublicChannelsMultiSelect

▸ `Const`**PublicChannelsMultiSelect**(`params`: *Pick*<[*PublicChannelsMultiSelectMenuElement*](interfaces/publicchannelsmultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialChannels*\>): [*PublicChannelsMultiSelectMenuElement*](interfaces/publicchannelsmultiselectmenuelement.md)

Generates a public channels multi select element from slack.

**JSX tag**: <channels-multiselect>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#channel_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*PublicChannelsMultiSelectMenuElement*](interfaces/publicchannelsmultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialChannels*\> | The various properties available to this block or element.   |

**Returns:** [*PublicChannelsMultiSelectMenuElement*](interfaces/publicchannelsmultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:158](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L158)

___

### PublicChannelsSelect

▸ `Const`**PublicChannelsSelect**(`params`: *Pick*<[*PublicChannelsSelectMenuElement*](interfaces/publicchannelsselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialChannel*\>): [*PublicChannelsSelectMenuElement*](interfaces/publicchannelsselectmenuelement.md)

Generates a public channels select element from slack.

**JSX tag**: <channels-select>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#channel_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*PublicChannelsSelectMenuElement*](interfaces/publicchannelsselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialChannel*\> | The various properties available to this block or element.   |

**Returns:** [*PublicChannelsSelectMenuElement*](interfaces/publicchannelsselectmenuelement.md)

Defined in: [factories/elementFactories.ts:280](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L280)

___

### RadioButtonGroup

▸ `Const`**RadioButtonGroup**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*RadioButtonGroupElement*](interfaces/radiobuttongroupelement.md), *confirm* \| *actionId* \| *options* \| *initialOption*\>, *options*\>, ...`options`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\>[]): [*RadioButtonGroupElement*](interfaces/radiobuttongroupelement.md)

Generates an radio button group element from slack.

**JSX tag**: <radio>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#radio)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*RadioButtonGroupElement*](interfaces/radiobuttongroupelement.md), *confirm* \| *actionId* \| *options* \| *initialOption*\>, *options*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. Replaces the `options` property.   |

**Returns:** [*RadioButtonGroupElement*](interfaces/radiobuttongroupelement.md)

Defined in: [factories/elementFactories.ts:204](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L204)

___

### Section

▸ `Const`**Section**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*SectionBlock*](interfaces/sectionblock.md), *text* \| *blockId* \| *fields* \| *accessory*\>, *fields*\>, ...`fields`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\>[]): [*SectionBlock*](interfaces/sectionblock.md)

Generates a section block from slack.

**JSX tag**: <section>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#section)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*SectionBlock*](interfaces/sectionblock.md), *text* \| *blockId* \| *fields* \| *accessory*\>, *fields*\> | The various properties available to this block or element.   |
`...fields` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<*string* \| [*PlainTextObject*](interfaces/plaintextobject.md) \| [*MrkdwnTextObject*](interfaces/mrkdwntextobject.md)\>[] | The fields to use for the block, sub-arrays will automatically be flattened. Will automatically convert strings to plain_text elements. Replaces the `fields` property.   |

**Returns:** [*SectionBlock*](interfaces/sectionblock.md)

Defined in: [factories/presentationalFactories.ts:148](https://github.com/instantish/blokus/blob/8b8e846/src/factories/presentationalFactories.ts#L148)

___

### StaticMultiSelect

▸ `Const`**StaticMultiSelect**(`params`: *Pick*<[*StaticMultiSelectMenuElement*](interfaces/staticmultiselectmenuelement.md), *confirm* \| *actionId* \| *options* \| *initialOptions* \| *placeholder* \| *optionGroups* \| *maxSelectedItems*\>, ...`options`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md)\>[]): [*StaticMultiSelectMenuElement*](interfaces/staticmultiselectmenuelement.md)

Generates a static multi select element from slack.

**JSX tag**: <multiselect>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#static_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*StaticMultiSelectMenuElement*](interfaces/staticmultiselectmenuelement.md), *confirm* \| *actionId* \| *options* \| *initialOptions* \| *placeholder* \| *optionGroups* \| *maxSelectedItems*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. May pass either options and option groups types, blokus will automatically process them. Replaces the `options` and `optionGroups` properties.   |

**Returns:** [*StaticMultiSelectMenuElement*](interfaces/staticmultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:100](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L100)

___

### StaticSelect

▸ `Const`**StaticSelect**(`params`: *Pick*<[*StaticSelectMenuElement*](interfaces/staticselectmenuelement.md), *confirm* \| *actionId* \| *options* \| *placeholder* \| *optionGroups* \| *initialOption*\>, ...`options`: [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md)\>[]): [*StaticSelectMenuElement*](interfaces/staticselectmenuelement.md)

Generates a static select element from slack.

**JSX tag**: <select>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#static_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*StaticSelectMenuElement*](interfaces/staticselectmenuelement.md), *confirm* \| *actionId* \| *options* \| *placeholder* \| *optionGroups* \| *initialOption*\> | The various properties available to this block or element.   |
`...options` | [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md)\> \| [*BlocksOrGenerators*](modules.md#blocksorgenerators)<[*OptionObject*](interfaces/optionobject.md) \| [*OptionGroupObject*](interfaces/optiongroupobject.md)\>[] | The options to use for the element, sub-arrays will automatically be flattened. May pass either options and option groups types, blokus will automatically process them. Replaces the `options` and `optionGroups` properties.   |

**Returns:** [*StaticSelectMenuElement*](interfaces/staticselectmenuelement.md)

Defined in: [factories/elementFactories.ts:223](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L223)

___

### Text

▸ `Const`**Text**(`params`: [*PartialBy*](modules.md#partialby)<*Pick*<[*PlainTextObject*](interfaces/plaintextobject.md), *text* \| *emoji*\>, *text*\>, `text?`: *string*): [*PlainTextObject*](interfaces/plaintextobject.md)

Generates a text composition object from slack with the plain_text type.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#text)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`params` | [*PartialBy*](modules.md#partialby)<*Pick*<[*PlainTextObject*](interfaces/plaintextobject.md), *text* \| *emoji*\>, *text*\> | - | The various properties available to this object.   |
`text` | *string* | '' | The text to add inside of this text object. Replaces the `text` property.   |

**Returns:** [*PlainTextObject*](interfaces/plaintextobject.md)

Defined in: [factories/objectsFactories.ts:23](https://github.com/instantish/blokus/blob/8b8e846/src/factories/objectsFactories.ts#L23)

___

### Timepicker

▸ `Const`**Timepicker**(`params`: *Pick*<[*TimepickerElement*](interfaces/timepickerelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialTime*\>): [*TimepickerElement*](interfaces/timepickerelement.md)

Generates a timepicker element from slack.

**JSX tag**: <timepicker>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#timepicker)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*TimepickerElement*](interfaces/timepickerelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialTime*\> | The various properties available to this block or element.   |

**Returns:** [*TimepickerElement*](interfaces/timepickerelement.md)

Defined in: [factories/elementFactories.ts:294](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L294)

___

### UserMultiSelect

▸ `Const`**UserMultiSelect**(`params`: *Pick*<[*UserMultiSelectMenuElement*](interfaces/usermultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialUsers*\>): [*UserMultiSelectMenuElement*](interfaces/usermultiselectmenuelement.md)

Generates a user multi select element from slack.

**JSX tag**: <user-multiselect>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#users_multi_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*UserMultiSelectMenuElement*](interfaces/usermultiselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *maxSelectedItems* \| *initialUsers*\> | The various properties available to this block or element.   |

**Returns:** [*UserMultiSelectMenuElement*](interfaces/usermultiselectmenuelement.md)

Defined in: [factories/elementFactories.ts:132](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L132)

___

### UserSelect

▸ `Const`**UserSelect**(`params`: *Pick*<[*UserSelectMenuElement*](interfaces/userselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialUser*\>): [*UserSelectMenuElement*](interfaces/userselectmenuelement.md)

Generates a user select element from slack.

**JSX tag**: <user-select>

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#users_select)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`params` | *Pick*<[*UserSelectMenuElement*](interfaces/userselectmenuelement.md), *confirm* \| *actionId* \| *placeholder* \| *initialUser*\> | The various properties available to this block or element.   |

**Returns:** [*UserSelectMenuElement*](interfaces/userselectmenuelement.md)

Defined in: [factories/elementFactories.ts:253](https://github.com/instantish/blokus/blob/8b8e846/src/factories/elementFactories.ts#L253)

___

### render

▸ `Const`**render**(`view`: [*View*](modules.md#view)): *Promise*<ViewPayload\>

Renders the given view and generates the valid payload for Slack. It will
execute the components and validate the inputs based on slack's
documentation.

**`throws`** Will throw errors if the payload is invalid or if generation is
impossible.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`view` | [*View*](modules.md#view) | The view to generate.   |

**Returns:** *Promise*<ViewPayload\>

Returns the generated payload, validated.

Defined in: [processor.ts:589](https://github.com/instantish/blokus/blob/8b8e846/src/processor.ts#L589)
