[@instantish/blokus](../README.md) / [Exports](../modules.md) / PlainTextObject

# Interface: PlainTextObject

An object containing some text, formatted as plain_text.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#text)

## Hierarchy

* [*Block*](block.md)

  ↳ **PlainTextObject**

## Table of contents

### Properties

- [emoji](plaintextobject.md#emoji)
- [text](plaintextobject.md#text)
- [type](plaintextobject.md#type)

## Properties

### emoji

• `Optional` **emoji**: *undefined* \| *string*

Indicates whether emojis in a text field should be escaped into the colon
emoji format. This field is only usable when type is plain_text.

Defined in: [types.ts:1186](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1186)

___

### text

• **text**: *string*

The text for the block. This field accepts any of the standard text
formatting markup when type is mrkdwn.

Defined in: [types.ts:1180](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1180)

___

### type

• **type**: plainText

The type of element. In this case type is always plain_text.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1174](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1174)
