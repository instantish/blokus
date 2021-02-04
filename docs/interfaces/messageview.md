[@instantish/blokus](../README.md) / [Exports](../modules.md) / MessageView

# Interface: MessageView

Messages are one of the basic ingredients of Slack apps.

**`see`** [Official documentation](https://api.slack.com/reference/surfaces/views)

## Hierarchy

* [*Block*](block.md)

  ↳ **MessageView**

## Table of contents

### Properties

- [blocks](messageview.md#blocks)
- [mrkdwn](messageview.md#mrkdwn)
- [text](messageview.md#text)
- [threadTS](messageview.md#threadts)
- [type](messageview.md#type)

## Properties

### blocks

• `Optional` **blocks**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*MessageBlock*](../modules.md#messageblock)\>

An array of blocks that defines the content of the view. Max of 50 blocks.

Defined in: [types.ts:1555](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1555)

___

### mrkdwn

• `Optional` **mrkdwn**: *undefined* \| *boolean*

Determines whether the text field is rendered according to mrkdwn
formatting or not. Defaults to true.

Defined in: [types.ts:1566](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1566)

___

### text

• **text**: *string*

The usage of this field changes depending on whether you're using blocks or
not. If you are, this is used as a fallback string to display in
notifications. If you aren't, this is the main body text of the message.
It can be formatted as plain text, or with mrkdwn. This field is not
enforced as required when using blocks, however it is highly recommended
that you include it as the aforementioned fallback.

Defined in: [types.ts:1550](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1550)

___

### threadTS

• `Optional` **threadTS**: *undefined* \| *string*

The ID of another un-threaded message to reply to.

Defined in: [types.ts:1560](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1560)

___

### type

• **type**: message

The type of view. In this case type is always message.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1540](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1540)
