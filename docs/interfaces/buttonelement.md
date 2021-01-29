[@instantish/blokus](../README.md) / [Exports](../modules.md) / ButtonElement

# Interface: ButtonElement

An interactive component that inserts a button. The button can be a trigger
for anything from opening a simple link to starting a complex workflow.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#button)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **ButtonElement**

## Table of contents

### Properties

- [actionId](buttonelement.md#actionid)
- [confirm](buttonelement.md#confirm)
- [style](buttonelement.md#style)
- [text](buttonelement.md#text)
- [type](buttonelement.md#type)
- [url](buttonelement.md#url)
- [value](buttonelement.md#value)

## Properties

### actionId

• **actionId**: *string*

An identifier for this action. You can use this when you receive an
interaction payload to identify the source of the action. Should be unique
among all other action_ids in the containing block. Maximum length for
this field is 255 characters.

Defined in: [types.ts:388](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L388)

___

### confirm

• `Optional` **confirm**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*ConfirmObject*](confirmobject.md)\>

A confirm object that defines an optional confirmation dialog after the
button is clicked.

Defined in: [types.ts:442](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L442)

___

### style

• `Optional` **style**: *undefined* \| *primary* \| *danger*

Decorates buttons with alternative visual color schemes.
Use this option with restraint.

`primary` gives buttons a green outline and text, ideal for affirmation or
confirmation actions. primary should only be used for one button within a
set.

`danger` gives buttons a red outline and text, and should be used when the
action is destructive. Use danger even more sparingly than primary.

If you don't include this field, the default button style will be used.

Defined in: [types.ts:436](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L436)

___

### text

• **text**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A text object that defines the button's text. Can only be of type:
plain_text. Maximum length for the text in this field is 75 characters.

Defined in: [types.ts:407](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L407)

___

### type

• **type**: button

The type of element. In this case type is always button.

Defined in: [types.ts:401](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L401)

___

### url

• `Optional` **url**: *undefined* \| *string*

A URL to load in the user's browser when the button is clicked. Maximum
length for this field is 3000 characters. If you're using url, you'll
still receive an interaction payload and will need to send an
acknowledgement response.

Defined in: [types.ts:415](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L415)

___

### value

• `Optional` **value**: *undefined* \| *string*

The value to send along with the interaction payload. Maximum length
for this field is 2000 characters.

Defined in: [types.ts:421](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L421)
