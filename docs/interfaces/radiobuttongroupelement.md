[@instantish/blokus](../README.md) / [Exports](../modules.md) / RadioButtonGroupElement

# Interface: RadioButtonGroupElement

A radio button group that allows a user to choose one item from a list of
possible options.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#radio)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **RadioButtonGroupElement**

## Table of contents

### Properties

- [actionId](radiobuttongroupelement.md#actionid)
- [confirm](radiobuttongroupelement.md#confirm)
- [initialOption](radiobuttongroupelement.md#initialoption)
- [options](radiobuttongroupelement.md#options)
- [type](radiobuttongroupelement.md#type)

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
after clicking one of the radio buttons in this element.

Defined in: [types.ts:883](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L883)

___

### initialOption

• **initialOption**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*OptionObject*](optionobject.md)\>

An option object that exactly matches one of the options within options.
This option will be selected when the radio button group initially loads.

Defined in: [types.ts:877](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L877)

___

### options

• **options**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects. A maximum of 10 options are allowed.

Defined in: [types.ts:871](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L871)

___

### type

• **type**: radioButtons

The type of element. In this case type is always radio_buttons.

Defined in: [types.ts:866](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L866)
