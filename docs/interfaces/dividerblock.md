[@instantish/blokus](../README.md) / [Exports](../modules.md) / DividerBlock

# Interface: DividerBlock

A content divider, like an <hr>, to split up different blocks inside of a
message. The divider block is nice and neat, requiring only a type.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#divider)

## Hierarchy

* [*Block*](block.md)

  ↳ **DividerBlock**

## Table of contents

### Properties

- [blockId](dividerblock.md#blockid)
- [type](dividerblock.md#type)

## Properties

### blockId

• `Optional` **blockId**: *undefined* \| *string*

A string acting as a unique identifier for a block. If not specified, a
block_id will be generated. You can use this block_id when you receive an
interaction payload to identify the source of the action. Maximum length
for this field is 255 characters. block_id should be unique for each
message and each iteration of a message. If a message is updated, use a
new block_id.

Defined in: [types.ts:147](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L147)

___

### type

• **type**: divider

The type of block. For a divider block, type is always divider.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:137](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L137)
