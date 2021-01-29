[@instantish/blokus](../README.md) / [Exports](../modules.md) / ImageElementBlock

# Interface: ImageElementBlock

An element to insert an image as part of a larger block of content. If you
want a block with only an image in it, you're looking for the image block.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#image)

## Hierarchy

* [*Block*](block.md)

  ↳ **ImageElementBlock**

## Table of contents

### Properties

- [altText](imageelementblock.md#alttext)
- [imageUrl](imageelementblock.md#imageurl)
- [type](imageelementblock.md#type)

## Properties

### altText

• `Optional` **altText**: *undefined* \| *string*

A plain-text summary of the image. This should not contain any markup.

Defined in: [types.ts:526](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L526)

___

### imageUrl

• **imageUrl**: *string*

The URL of the image to be displayed.

Defined in: [types.ts:521](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L521)

___

### type

• **type**: image

The type of element. In this case type is always image.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:516](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L516)
