[@instantish/blokus](../README.md) / [Exports](../modules.md) / UserMultiSelectMenuElement

# Interface: UserMultiSelectMenuElement

This multi-select menu will populate its options with a list of Slack users
visible to the current user in the active workspace.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#users_multi_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **UserMultiSelectMenuElement**

## Table of contents

### Properties

- [actionId](usermultiselectmenuelement.md#actionid)
- [confirm](usermultiselectmenuelement.md#confirm)
- [initialUsers](usermultiselectmenuelement.md#initialusers)
- [maxSelectedItems](usermultiselectmenuelement.md#maxselecteditems)
- [placeholder](usermultiselectmenuelement.md#placeholder)
- [type](usermultiselectmenuelement.md#type)

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

Defined in: [types.ts:666](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L666)

___

### initialUsers

• `Optional` **initialUsers**: *undefined* \| *string*[]

An array of user IDs of any valid users to be pre-selected when the menu
loads.

Defined in: [types.ts:660](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L660)

___

### maxSelectedItems

• `Optional` **maxSelectedItems**: *undefined* \| *number*

Specifies the maximum number of items that can be selected in the menu.
Minimum number is 1.

Defined in: [types.ts:672](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L672)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:654](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L654)

___

### type

• **type**: multiUsersSelect

The type of element. In this case type is always multi_users_select.

Defined in: [types.ts:648](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L648)
