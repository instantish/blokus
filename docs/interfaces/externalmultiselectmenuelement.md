[@instantish/blokus](../README.md) / [Exports](../modules.md) / ExternalMultiSelectMenuElement

# Interface: ExternalMultiSelectMenuElement

This menu will load its options from an external data source, allowing for
a dynamic list of options.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#external_multi_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **ExternalMultiSelectMenuElement**

## Table of contents

### Properties

- [actionId](externalmultiselectmenuelement.md#actionid)
- [confirm](externalmultiselectmenuelement.md#confirm)
- [initialOptions](externalmultiselectmenuelement.md#initialoptions)
- [maxSelectedItems](externalmultiselectmenuelement.md#maxselecteditems)
- [minQueryLength](externalmultiselectmenuelement.md#minquerylength)
- [placeholder](externalmultiselectmenuelement.md#placeholder)
- [type](externalmultiselectmenuelement.md#type)

## Properties

### actionId

• **actionId**: *string*

An identifier for this action. You can use this when you receive an
interaction payload to identify the source of the action. Should be unique
among all other action_ids in the containing block. Maximum length for
this field is 255 characters.

Defined in: [types.ts:392](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L392)

___

### confirm

• `Optional` **confirm**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*ConfirmObject*](confirmobject.md)\>

A confirm object that defines an optional confirmation dialog that appears
before the multi-select choices are submitted.

Defined in: [types.ts:629](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L629)

___

### initialOptions

• `Optional` **initialOptions**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects that exactly match one or more of the options
within options or option_groups. These options will be selected when the
menu initially loads.

Defined in: [types.ts:623](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L623)

___

### maxSelectedItems

• `Optional` **maxSelectedItems**: *undefined* \| *number*

Specifies the maximum number of items that can be selected in the menu.
Minimum number is 1.

Defined in: [types.ts:635](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L635)

___

### minQueryLength

• `Optional` **minQueryLength**: *undefined* \| *number*

When the typeahead field is used, a request will be sent on every character
change. If you prefer fewer requests or more fully ideated queries, use the
min_query_length attribute to tell Slack the fewest number of typed
characters required before dispatch. The default value is 3.

Defined in: [types.ts:616](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L616)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:608](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L608)

___

### type

• **type**: multiExternalSelect

The type of element. In this case type is always multi_external_select.

Defined in: [types.ts:602](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L602)
