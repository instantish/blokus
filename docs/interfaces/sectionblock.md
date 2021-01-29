[@instantish/blokus](../README.md) / [Exports](../modules.md) / SectionBlock

# Interface: SectionBlock

A section is one of the most flexible blocks available - it can be used as a
simple text block, in combination with text fields, or side-by-side with any
of the available block elements.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#section)

## Hierarchy

* [*Block*](block.md)

  ↳ **SectionBlock**

## Table of contents

### Properties

- [accessory](sectionblock.md#accessory)
- [blockId](sectionblock.md#blockid)
- [fields](sectionblock.md#fields)
- [text](sectionblock.md#text)
- [type](sectionblock.md#type)

## Properties

### accessory

• `Optional` **accessory**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*ElementBlock*](../modules.md#elementblock)\>

One of the available element objects.

Defined in: [types.ts:346](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L346)

___

### blockId

• `Optional` **blockId**: *undefined* \| *string*

A string acting as a unique identifier for a block. If not specified, a
block_id will be generated. You can use this block_id when you receive an
interaction payload to identify the source of the action. Maximum length
for this field is 255 characters. block_id should be unique for each
message and each iteration of a message. If a message is updated, use a
new block_id.

Defined in: [types.ts:326](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L326)

___

### fields

• `Optional` **fields**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*TextObject*](../modules.md#textobject)\>

Required if no text is provided. An array of text objects. Any text objects
included with fields will be rendered in a compact format that allows for 2
columns of side-by-side text. Maximum number of items is 10. Maximum length
for the text in each item is 2000 characters.

Defined in: [types.ts:341](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L341)

___

### text

• `Optional` **text**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*TextObject*](../modules.md#textobject)\>

The text for the block, in the form of a text object. Maximum length for
the text in this field is 3000 characters. This field is not required if a
valid array of fields objects is provided instead.

Defined in: [types.ts:333](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L333)

___

### type

• **type**: section

The type of block. For a section block, type will always be section.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:316](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L316)
