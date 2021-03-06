[@instantish/blokus](../README.md) / [Exports](../modules.md) / UserSelectMenuElement

# Interface: UserSelectMenuElement

This select menu will populate its options with a list of Slack users visible
to the current user in the active workspace.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#users_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **UserSelectMenuElement**

## Table of contents

### Properties

- [actionId](userselectmenuelement.md#actionid)
- [confirm](userselectmenuelement.md#confirm)
- [initialUser](userselectmenuelement.md#initialuser)
- [placeholder](userselectmenuelement.md#placeholder)
- [type](userselectmenuelement.md#type)

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
after a menu item is selected.

Defined in: [types.ts:1005](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1005)

___

### initialUser

• `Optional` **initialUser**: *undefined* \| *string*

The user ID of any valid user to be pre-selected when the menu loads.

Defined in: [types.ts:999](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L999)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:994](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L994)

___

### type

• **type**: usersSelect

The type of element. In this case type is always users_select.

Defined in: [types.ts:988](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L988)
