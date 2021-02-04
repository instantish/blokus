[@instantish/blokus](../README.md) / [Exports](../modules.md) / StaticMultiSelectMenuElement

# Interface: StaticMultiSelectMenuElement

A multi-select menu allows a user to select multiple items from a list of
options. Just like regular select menus, multi-select menus also include
type-ahead functionality, where a user can type a part or all of an option
string to filter the list.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#multi_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **StaticMultiSelectMenuElement**

## Table of contents

### Properties

- [actionId](staticmultiselectmenuelement.md#actionid)
- [confirm](staticmultiselectmenuelement.md#confirm)
- [givenOptions](staticmultiselectmenuelement.md#givenoptions)
- [initialOptions](staticmultiselectmenuelement.md#initialoptions)
- [maxSelectedItems](staticmultiselectmenuelement.md#maxselecteditems)
- [optionGroups](staticmultiselectmenuelement.md#optiongroups)
- [options](staticmultiselectmenuelement.md#options)
- [placeholder](staticmultiselectmenuelement.md#placeholder)
- [type](staticmultiselectmenuelement.md#type)

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

Defined in: [types.ts:576](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L576)

___

### givenOptions

• `Optional` **givenOptions**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md) \| [*OptionGroupObject*](optiongroupobject.md)\>

Internal property used to divide the given options in the creator function
into the 2 options properties.

**`internal`** 

Defined in: [types.ts:589](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L589)

___

### initialOptions

• `Optional` **initialOptions**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects that exactly match one or more of the options
within options or option_groups. These options will be selected when the
menu initially loads.

Defined in: [types.ts:570](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L570)

___

### maxSelectedItems

• `Optional` **maxSelectedItems**: *undefined* \| *number*

Specifies the maximum number of items that can be selected in the menu.
Minimum number is 1.

Defined in: [types.ts:582](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L582)

___

### optionGroups

• `Optional` **optionGroups**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionGroupObject*](optiongroupobject.md)\>

An array of option group objects. Maximum number of option groups is 100.
If options is specified, this field should not be.

Defined in: [types.ts:563](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L563)

___

### options

• `Optional` **options**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects. Maximum number of options is 100. If
option_groups is specified, this field should not be.

Defined in: [types.ts:557](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L557)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:551](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L551)

___

### type

• **type**: multiStaticSelect

The type of element. In this case type is always multi_static_select.

Defined in: [types.ts:545](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L545)
