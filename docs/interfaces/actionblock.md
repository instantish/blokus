[@instantish/blokus](../README.md) / [Exports](../modules.md) / ActionBlock

# Interface: ActionBlock

A block that is used to hold interactive elements.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#actions)

## Hierarchy

* [*Block*](block.md)

  ↳ **ActionBlock**

## Table of contents

### Properties

- [blockId](actionblock.md#blockid)
- [elements](actionblock.md#elements)
- [type](actionblock.md#type)

## Properties

### blockId

• `Optional` **blockId**: *undefined* \| *string*

A string acting as a unique identifier for a block. If not specified, a
block_id will be generated. You can use this block_id when you receive an
interaction payload to identify the source of the action. Maximum length
for this field is 255 characters. block_id should be unique for each
message and each iteration of a message. If a message is updated, use a
new block_id.

Defined in: [types.ts:87](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L87)

___

### elements

• **elements**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*ActionElement*](../modules.md#actionelement)\>

An array of interactive element objects - buttons, select menus, overflow
menus, or date pickers. There is a maximum of 5 elements in each action block.

Defined in: [types.ts:93](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L93)

___

### type

• **type**: action

The type of block. For an actions block, type is always actions.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:77](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L77)
