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

Defined in: [types.ts:1190](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1190)

___

### text

• **text**: *string*

The text for the block. This field accepts any of the standard text
formatting markup when type is mrkdwn.

Defined in: [types.ts:1184](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1184)

___

### type

• **type**: plainText

The type of element. In this case type is always plain_text.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1178](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1178)
