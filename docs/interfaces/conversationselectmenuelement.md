[@instantish/blokus](../README.md) / [Exports](../modules.md) / ConversationSelectMenuElement

# Interface: ConversationSelectMenuElement

This select menu will populate its options with a list of public and private
channels, DMs, and MPIMs visible to the current user in the active workspace.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#conversation_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **ConversationSelectMenuElement**

## Table of contents

### Properties

- [actionId](conversationselectmenuelement.md#actionid)
- [confirm](conversationselectmenuelement.md#confirm)
- [defaultToCurrentConversation](conversationselectmenuelement.md#defaulttocurrentconversation)
- [filter](conversationselectmenuelement.md#filter)
- [initialConversation](conversationselectmenuelement.md#initialconversation)
- [placeholder](conversationselectmenuelement.md#placeholder)
- [type](conversationselectmenuelement.md#type)

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

A confirm object that defines an optional confirmation dialog that
appears after a menu item is selected.

Defined in: [types.ts:1043](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1043)

___

### defaultToCurrentConversation

• `Optional` **defaultToCurrentConversation**: *undefined* \| *boolean*

Pre-populates the select menu with the conversation that the user was
viewing when they opened the modal, if available. Default is false.

Defined in: [types.ts:1037](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1037)

___

### filter

• `Optional` **filter**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*FilterObject*](filterobject.md)\>

A filter object that reduces the list of available conversations using the
specified criteria.

Defined in: [types.ts:1049](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1049)

___

### initialConversation

• `Optional` **initialConversation**: *undefined* \| *string*

The ID of any valid conversation to be pre-selected when the menu loads.
If default_to_current_conversation is also supplied, initial_conversation
will take precedence.

Defined in: [types.ts:1031](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1031)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:1024](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1024)

___

### type

• **type**: conversationsSelect

The type of element. In this case type is always conversations_select.

Defined in: [types.ts:1018](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1018)
