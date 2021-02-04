[@instantish/blokus](../README.md) / [Exports](../modules.md) / HeaderBlock

# Interface: HeaderBlock

A header is a plain-text block that displays in a larger, bold font. Use it
to delineate between different groups of content in your app's surfaces.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#header)

## Hierarchy

* [*Block*](block.md)

  ↳ **HeaderBlock**

## Table of contents

### Properties

- [blockId](headerblock.md#blockid)
- [text](headerblock.md#text)
- [type](headerblock.md#type)

## Properties

### blockId

• `Optional` **blockId**: *undefined* \| *string*

A string acting as a unique identifier for a block. If not specified, a
block_id will be generated. You can use this block_id when you receive an
interaction payload to identify the source of the action. Maximum length
for this field is 255 characters. block_id should be unique for each
message and each iteration of a message. If a message is updated, use a
new block_id.

Defined in: [types.ts:203](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L203)

___

### text

• **text**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

The text for the block, in the form of a plain_text text object.
Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:209](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L209)

___

### type

• **type**: header

The type of block. For this block, type will always be header.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:193](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L193)
