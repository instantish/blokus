[@instantish/blokus](../README.md) / [Exports](../modules.md) / TimepickerElement

# Interface: TimepickerElement

An element which allows selection of a time of day.

On desktop clients, this time picker will take the form of a dropdown list
with free-text entry for precise choices.On mobile clients, the time picker
will use native time picker UIs.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#timepicker)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **TimepickerElement**

## Table of contents

### Properties

- [actionId](timepickerelement.md#actionid)
- [confirm](timepickerelement.md#confirm)
- [initialTime](timepickerelement.md#initialtime)
- [placeholder](timepickerelement.md#placeholder)
- [type](timepickerelement.md#type)

## Properties

### actionId

• **actionId**: *string*

An identifier for this action. You can use this when you receive an
interaction payload to identify the source of the action. Should be unique
among all other action_ids in the containing block. Maximum length for
this field is 255 characters.

Defined in: [types.ts:392](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L392)

___

### confirm

• `Optional` **confirm**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*ConfirmObject*](confirmobject.md)\>

A confirm object that defines an optional confirmation dialog that appears
after a time is selected.

Defined in: [types.ts:1116](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1116)

___

### initialTime

• `Optional` **initialTime**: *undefined* \| *string*

The initial time that is selected when the element is loaded. This should
be in the format `HH:mm`, where `HH` is the 24-hour format of an hour
(00 to 23) and `mm` is minutes with leading zeros (00 to 59), for example
22:25 for 10:25pm.

Defined in: [types.ts:1110](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1110)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the timepicker. Maximum length for the text in this field is 150
characters.

Defined in: [types.ts:1102](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1102)

___

### type

• **type**: timepicker

The type of element. In this case type is always timepicker.

Defined in: [types.ts:1095](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1095)
