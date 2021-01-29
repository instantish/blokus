[@instantish/blokus](../README.md) / [Exports](../modules.md) / ConversationMultiSelectMenuElement

# Interface: ConversationMultiSelectMenuElement

This multi-select menu will populate its options with a list of public and
private channels, DMs, and MPIMs visible to the current user in the active
workspace.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **ConversationMultiSelectMenuElement**

## Table of contents

### Properties

- [actionId](conversationmultiselectmenuelement.md#actionid)
- [confirm](conversationmultiselectmenuelement.md#confirm)
- [defaultToCurrentConversation](conversationmultiselectmenuelement.md#defaulttocurrentconversation)
- [filter](conversationmultiselectmenuelement.md#filter)
- [initialConversations](conversationmultiselectmenuelement.md#initialconversations)
- [maxSelectedItems](conversationmultiselectmenuelement.md#maxselecteditems)
- [placeholder](conversationmultiselectmenuelement.md#placeholder)
- [type](conversationmultiselectmenuelement.md#type)

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
before the multi-select choices are submitted.

Defined in: [types.ts:707](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L707)

___

### defaultToCurrentConversation

• `Optional` **defaultToCurrentConversation**: *undefined* \| *boolean*

Pre-populates the select menu with the conversation that the user was
viewing when they opened the modal, if available. Default is false.

Defined in: [types.ts:701](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L701)

___

### filter

• `Optional` **filter**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*FilterObject*](filterobject.md)\>

A filter object that reduces the list of available conversations using the
specified criteria.

Defined in: [types.ts:719](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L719)

___

### initialConversations

• `Optional` **initialConversations**: *undefined* \| *string*[]

An array of one or more IDs of any valid conversations to be pre-selected
when the menu loads. If default_to_current_conversation is also supplied,
initial_conversations will be ignored.

Defined in: [types.ts:695](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L695)

___

### maxSelectedItems

• `Optional` **maxSelectedItems**: *undefined* \| *number*

Specifies the maximum number of items that can be selected in the menu.
Minimum number is 1.

Defined in: [types.ts:713](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L713)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:688](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L688)

___

### type

• **type**: multiConversationsSelect

The type of element. In this case type is always multi_conversations_select.

Defined in: [types.ts:682](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L682)
