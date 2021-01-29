[@instantish/blokus](../README.md) / [Exports](../modules.md) / DatepickerElement

# Interface: DatepickerElement

An element which lets users easily select a date from a calendar style UI.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#datepicker)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **DatepickerElement**

## Table of contents

### Properties

- [actionId](datepickerelement.md#actionid)
- [confirm](datepickerelement.md#confirm)
- [initialDate](datepickerelement.md#initialdate)
- [placeholder](datepickerelement.md#placeholder)
- [type](datepickerelement.md#type)

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

A confirm object that defines an optional confirmation dialog that appears
after a date is selected.

Defined in: [types.ts:503](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L503)

___

### initialDate

• `Optional` **initialDate**: *undefined* \| *string*

The initial date that is selected when the element is loaded. This should
be in the format `YYYY-MM-DD`.

Defined in: [types.ts:497](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L497)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*TextObject*](../modules.md#textobject)\>

A plain_text only text object that defines the placeholder text shown on
the datepicker. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:491](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L491)

___

### type

• **type**: datepicker

The type of element. In this case type is always datepicker.

Defined in: [types.ts:485](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L485)
