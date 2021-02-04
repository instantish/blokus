[@instantish/blokus](../README.md) / [Exports](../modules.md) / FileBlock

# Interface: FileBlock

Displays a remote file. You can't add this block to app surfaces directly,
but it will show up when retrieving messages that contain remote files.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#file)

## Hierarchy

* [*Block*](block.md)

  ↳ **FileBlock**

## Table of contents

### Properties

- [blockId](fileblock.md#blockid)
- [externalId](fileblock.md#externalid)
- [source](fileblock.md#source)
- [type](fileblock.md#type)

## Properties

### blockId

• `Optional` **blockId**: *undefined* \| *string*

A string acting as a unique identifier for a block. If not specified, a
block_id will be generated. You can use this block_id when you receive an
interaction payload to identify the source of the action. Maximum length
for this field is 255 characters. block_id should be unique for each
message and each iteration of a message. If a message is updated, use a
new block_id.

Defined in: [types.ts:170](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L170)

___

### externalId

• **externalId**: *string*

The external unique ID for this file.

Defined in: [types.ts:175](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L175)

___

### source

• **source**: *remote*

At the moment, source will always be remote for a remote file.

Defined in: [types.ts:180](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L180)

___

### type

• **type**: file

The type of block. For a file block, type is always file.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:160](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L160)
