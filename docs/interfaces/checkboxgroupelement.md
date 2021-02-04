[@instantish/blokus](../README.md) / [Exports](../modules.md) / CheckboxGroupElement

# Interface: CheckboxGroupElement

A checkbox group that allows a user to choose multiple items from a list of
possible options.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#checkboxes)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **CheckboxGroupElement**

## Table of contents

### Properties

- [actionId](checkboxgroupelement.md#actionid)
- [confirm](checkboxgroupelement.md#confirm)
- [initialOptions](checkboxgroupelement.md#initialoptions)
- [options](checkboxgroupelement.md#options)
- [type](checkboxgroupelement.md#type)

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
after clicking one of the checkboxes in this element.

Defined in: [types.ts:477](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L477)

___

### initialOptions

• `Optional` **initialOptions**: *undefined* \| [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects that exactly matches one or more of the options
within options. These options will be selected when the checkbox group
initially loads.

Defined in: [types.ts:471](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L471)

___

### options

• **options**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects. A maximum of 10 options are allowed.

Defined in: [types.ts:464](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L464)

___

### type

• **type**: checkboxes

The type of element. In this case type is always checkboxes.

Defined in: [types.ts:459](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L459)
