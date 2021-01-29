[@instantish/blokus](../README.md) / [Exports](../modules.md) / ImageBlock

# Interface: ImageBlock

A simple image block, designed to make those cat photos really pop.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#image)

## Hierarchy

* [*Block*](block.md)

  ↳ **ImageBlock**

## Table of contents

### Properties

- [altText](imageblock.md#alttext)
- [blockId](imageblock.md#blockid)
- [imageUrl](imageblock.md#imageurl)
- [title](imageblock.md#title)
- [type](imageblock.md#type)

## Properties

### altText

• **altText**: *string*

A plain-text summary of the image. This should not contain any markup.
Maximum length for this field is 2000 characters.

Defined in: [types.ts:239](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L239)

___

### blockId

• `Optional` **blockId**: *undefined* \| *string*

A string acting as a unique identifier for a block. If not specified, a
block_id will be generated. You can use this block_id when you receive an
interaction payload to identify the source of the action. Maximum length
for this field is 255 characters. block_id should be unique for each
message and each iteration of a message. If a message is updated, use a
new block_id.

Defined in: [types.ts:227](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L227)

___

### imageUrl

• **imageUrl**: *string*

The URL of the image to be displayed. Maximum length for this field is
3000 characters.

Defined in: [types.ts:233](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L233)

___

### title

• `Optional` **title**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

An optional title for the image in the form of a text object that can only
be of type: plain_text. Maximum length for the text in this field is
2000 characters.

Defined in: [types.ts:246](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L246)

___

### type

• **type**: image

The type of block. For an image block, type is always image.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:217](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L217)
