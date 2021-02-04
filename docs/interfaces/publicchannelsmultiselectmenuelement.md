[@instantish/blokus](../README.md) / [Exports](../modules.md) / PublicChannelsMultiSelectMenuElement

# Interface: PublicChannelsMultiSelectMenuElement

This multi-select menu will populate its options with a list of public
channels visible to the current user in the active workspace.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#channel_multi_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **PublicChannelsMultiSelectMenuElement**

## Table of contents

### Properties

- [actionId](publicchannelsmultiselectmenuelement.md#actionid)
- [confirm](publicchannelsmultiselectmenuelement.md#confirm)
- [initialChannels](publicchannelsmultiselectmenuelement.md#initialchannels)
- [maxSelectedItems](publicchannelsmultiselectmenuelement.md#maxselecteditems)
- [placeholder](publicchannelsmultiselectmenuelement.md#placeholder)
- [type](publicchannelsmultiselectmenuelement.md#type)

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

Defined in: [types.ts:754](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L754)

___

### initialChannels

• `Optional` **initialChannels**: *undefined* \| *string*[]

An array of one or more IDs of any valid public channel to be pre-selected
when the menu loads.

Defined in: [types.ts:748](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L748)

___

### maxSelectedItems

• `Optional` **maxSelectedItems**: *undefined* \| *number*

Specifies the maximum number of items that can be selected in the menu.
Minimum number is 1.

Defined in: [types.ts:760](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L760)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:742](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L742)

___

### type

• **type**: multiChannelsSelect

The type of element. In this case type is always multi_channels_select.

Defined in: [types.ts:736](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L736)
