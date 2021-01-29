[@instantish/blokus](../README.md) / [Exports](../modules.md) / StaticSelectMenuElement

# Interface: StaticSelectMenuElement

A select menu, just as with a standard HTML <select> tag, creates a drop down
menu with a list of options for a user to choose. The select menu also
includes type-ahead functionality, where a user can type a part or all of an
option string to filter the list.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **StaticSelectMenuElement**

## Table of contents

### Properties

- [actionId](staticselectmenuelement.md#actionid)
- [confirm](staticselectmenuelement.md#confirm)
- [givenOptions](staticselectmenuelement.md#givenoptions)
- [initialOption](staticselectmenuelement.md#initialoption)
- [optionGroups](staticselectmenuelement.md#optiongroups)
- [options](staticselectmenuelement.md#options)
- [placeholder](staticselectmenuelement.md#placeholder)
- [type](staticselectmenuelement.md#type)

## Properties

### actionId

• **actionId**: *string*

An identifier for this action. You can use this when you receive an
interaction payload to identify the source of the action. Should be unique
among all other action_ids in the containing block. Maximum length for
this field is 255 characters.

Defined in: [types.ts:388](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L388)

___

### confirm

• `Optional` **confirm**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*ConfirmObject*](confirmobject.md)\>

A confirm object that defines an optional confirmation dialog that appears
after a menu item is selected.

Defined in: [types.ts:924](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L924)

___

### givenOptions

• `Optional` **givenOptions**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md) \| [*OptionGroupObject*](optiongroupobject.md)\>

Internal property used to divide the given options in the creator function
into the 2 options properties.

**`internal`** 

Defined in: [types.ts:931](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L931)

___

### initialOption

• `Optional` **initialOption**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*OptionObject*](optionobject.md)\>

A single option that exactly matches one of the options within options or
option_groups. This option will be selected when the menu initially loads.

Defined in: [types.ts:918](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L918)

___

### optionGroups

• `Optional` **optionGroups**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionGroupObject*](optiongroupobject.md)\>

An array of option group objects. Maximum number of option groups is 100.
If options is specified, this field should not be.

Defined in: [types.ts:912](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L912)

___

### options

• `Optional` **options**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects. Maximum number of options is 100. If
option_groups is specified, this field should not be.

Defined in: [types.ts:906](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L906)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:900](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L900)

___

### type

• **type**: staticSelect

The type of element. In this case type is always static_select.

Defined in: [types.ts:894](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L894)
