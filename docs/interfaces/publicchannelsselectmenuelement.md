[@instantish/blokus](../README.md) / [Exports](../modules.md) / PublicChannelsSelectMenuElement

# Interface: PublicChannelsSelectMenuElement

This select menu will populate its options with a list of public channels
visible to the current user in the active workspace.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#channel_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **PublicChannelsSelectMenuElement**

## Table of contents

### Properties

- [actionId](publicchannelsselectmenuelement.md#actionid)
- [confirm](publicchannelsselectmenuelement.md#confirm)
- [initialChannel](publicchannelsselectmenuelement.md#initialchannel)
- [placeholder](publicchannelsselectmenuelement.md#placeholder)
- [type](publicchannelsselectmenuelement.md#type)

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

Defined in: [types.ts:1079](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1079)

___

### initialChannel

• **initialChannel**: *string*

The ID of any valid public channel to be pre-selected when the menu loads.

Defined in: [types.ts:1073](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1073)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:1068](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1068)

___

### type

• **type**: channelsSelect

The type of element. In this case type is always channels_select.

Defined in: [types.ts:1062](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1062)
