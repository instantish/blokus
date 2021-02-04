[@instantish/blokus](../README.md) / [Exports](../modules.md) / ContextBlock

# Interface: ContextBlock

Displays message context, which can include both images and text.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#context)

## Hierarchy

* [*Block*](block.md)

  ↳ **ContextBlock**

## Table of contents

### Properties

- [blockId](contextblock.md#blockid)
- [elements](contextblock.md#elements)
- [type](contextblock.md#type)

## Properties

### blockId

• `Optional` **blockId**: *undefined* \| *string*

A string acting as a unique identifier for a block. If not specified, a
block_id will be generated. You can use this block_id when you receive an
interaction payload to identify the source of the action. Maximum length
for this field is 255 characters. block_id should be unique for each
message and each iteration of a message. If a message is updated, use a
new block_id.

Defined in: [types.ts:119](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L119)

___

### elements

• **elements**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*ImageElementBlock*](imageelementblock.md) \| [*PlainTextObject*](plaintextobject.md) \| [*MrkdwnTextObject*](mrkdwntextobject.md)\>

An array of image elements and text objects. Maximum number of items is 10.

Defined in: [types.ts:124](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L124)

___

### type

• **type**: context

The type of block. For a context block, type is always context.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:109](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L109)
