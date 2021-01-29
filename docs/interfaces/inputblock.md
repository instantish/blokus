[@instantish/blokus](../README.md) / [Exports](../modules.md) / InputBlock

# Interface: InputBlock

A block that collects information from users - it can hold a plain-text input
element, a checkbox element, a radio button element, a select menu element,
a multi-select menu element, or a datepicker.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/blocks#input)

## Hierarchy

* [*Block*](block.md)

  ↳ **InputBlock**

## Table of contents

### Properties

- [blockId](inputblock.md#blockid)
- [dispatchAction](inputblock.md#dispatchaction)
- [element](inputblock.md#element)
- [hint](inputblock.md#hint)
- [label](inputblock.md#label)
- [optional](inputblock.md#optional)
- [type](inputblock.md#type)

## Properties

### blockId

• `Optional` **blockId**: *undefined* \| *string*

A string acting as a unique identifier for a block. If not specified, a
block_id will be generated. You can use this block_id when you receive an
interaction payload to identify the source of the action. Maximum length
for this field is 255 characters. block_id should be unique for each
message and each iteration of a message. If a message is updated, use a
new block_id.

Defined in: [types.ts:270](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L270)

___

### dispatchAction

• `Optional` **dispatchAction**: *undefined* \| *boolean*

A boolean that indicates whether or not the use of elements in this block
should dispatch a block_actions payload. Defaults to false.

Defined in: [types.ts:289](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L289)

___

### element

• **element**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*FormElement*](../modules.md#formelement)\>

A plain-text input element, a checkbox element, a radio button element,
a select menu element, a multi-select menu element, or a datepicker.

Defined in: [types.ts:283](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L283)

___

### hint

• `Optional` **hint**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

An optional hint that appears below an input element in a lighter grey.
It must be a a text object with a type of plain_text. Maximum length for
the text in this field is 2000 characters.

Defined in: [types.ts:296](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L296)

___

### label

• **label**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A label that appears above an input element in the form of a text object
that must have type of plain_text. Maximum length for the text in this
field is 2000 characters.

Defined in: [types.ts:277](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L277)

___

### optional

• `Optional` **optional**: *undefined* \| *boolean*

A boolean that indicates whether the input element may be empty when a
user submits the modal. Defaults to false.

Defined in: [types.ts:302](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L302)

___

### type

• **type**: input

The type of block. For an input block, type is always input.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:260](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L260)
