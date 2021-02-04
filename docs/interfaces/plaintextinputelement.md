[@instantish/blokus](../README.md) / [Exports](../modules.md) / PlainTextInputElement

# Interface: PlainTextInputElement

A plain-text input, similar to the HTML <input> tag, creates a field where a
user can enter freeform data. It can appear as a single-line field or a
larger textarea using the multiline flag.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#input)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **PlainTextInputElement**

## Table of contents

### Properties

- [actionId](plaintextinputelement.md#actionid)
- [dispatchActionConfig](plaintextinputelement.md#dispatchactionconfig)
- [initialValue](plaintextinputelement.md#initialvalue)
- [maxLength](plaintextinputelement.md#maxlength)
- [minLength](plaintextinputelement.md#minlength)
- [multiline](plaintextinputelement.md#multiline)
- [placeholder](plaintextinputelement.md#placeholder)
- [type](plaintextinputelement.md#type)

## Properties

### actionId

• **actionId**: *string*

An identifier for this action. You can use this when you receive an
interaction payload to identify the source of the action. Should be unique
among all other action_ids in the containing block. Maximum length for
this field is 255 characters.

Defined in: [types.ts:392](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L392)

___

### dispatchActionConfig

• `Optional` **dispatchActionConfig**: *undefined* \| [*DispatchActionConfigObject*](dispatchactionconfigobject.md)

A dispatch configuration object that determines when during text input the
element returns a block_actions payload.

Defined in: [types.ts:853](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L853)

___

### initialValue

• `Optional` **initialValue**: *undefined* \| *string*

The initial value in the plain-text input when it is loaded.

Defined in: [types.ts:829](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L829)

___

### maxLength

• `Optional` **maxLength**: *undefined* \| *number*

The maximum length of input that the user can provide. If the user provides
more, they will receive an error.

Defined in: [types.ts:847](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L847)

___

### minLength

• `Optional` **minLength**: *undefined* \| *number*

The minimum length of input that the user must provide. If the user
provides less, they will receive an error. Maximum value is 3000.

Defined in: [types.ts:841](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L841)

___

### multiline

• `Optional` **multiline**: *undefined* \| *boolean*

Indicates whether the input will be a single line (false) or a larger
textarea (true). Defaults to false.

Defined in: [types.ts:835](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L835)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown in
the plain-text input. Maximum length for the text in this field is 150
characters.

Defined in: [types.ts:824](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L824)

___

### type

• **type**: plainTextInput

The type of element. In this case type is always plain_text_input.

Defined in: [types.ts:817](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L817)
