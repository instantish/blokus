[@instantish/blokus](../README.md) / [Exports](../modules.md) / ConfirmObject

# Interface: ConfirmObject

An object that defines a dialog that provides a confirmation step to any
interactive element. This dialog will ask the user to confirm their action
by offering a confirm and deny buttons.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#confirm)

## Hierarchy

* [*Block*](block.md)

  ↳ **ConfirmObject**

## Table of contents

### Properties

- [confirm](confirmobject.md#confirm)
- [deny](confirmobject.md#deny)
- [style](confirmobject.md#style)
- [text](confirmobject.md#text)
- [title](confirmobject.md#title)
- [type](confirmobject.md#type)

## Properties

### confirm

• **confirm**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text-only text object to define the text of the button that
confirms the action. Maximum length for the text in this field is 30
characters.

Defined in: [types.ts:1258](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1258)

___

### deny

• **deny**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text-only text object to define the text of the button that cancels
the action. Maximum length for the text in this field is 30 characters.

Defined in: [types.ts:1264](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1264)

___

### style

• `Optional` **style**: *undefined* \| *primary* \| *danger*

Defines the color scheme applied to the confirm button. A value of danger
will display the button with a red background on desktop, or red text on
mobile. A value of primary will display the button with a green background
on desktop, or blue text on mobile. If this field is not provided, the
default value will be primary.

Defined in: [types.ts:1273](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1273)

___

### text

• **text**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*TextObject*](../modules.md#textobject)\>

A text object that defines the explanatory text that appears in the
confirm dialog. Maximum length for the text in this field is 300
characters.

Defined in: [types.ts:1251](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1251)

___

### title

• **title**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text-only text object that defines the dialog's title. Maximum
length for this field is 100 characters.

Defined in: [types.ts:1244](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1244)

___

### type

• **type**: confirm

Internal type property

**`internal`** 

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1238](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1238)
