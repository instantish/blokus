[@instantish/blokus](../README.md) / [Exports](../modules.md) / OptionGroupObject

# Interface: OptionGroupObject

Provides a way to group options in a select menu or multi-select menu.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#option_group)

## Hierarchy

* [*Block*](block.md)

  ↳ **OptionGroupObject**

## Table of contents

### Properties

- [label](optiongroupobject.md#label)
- [options](optiongroupobject.md#options)
- [type](optiongroupobject.md#type)

## Properties

### label

• **label**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the label shown above this group
of options. Maximum length for the text in this field is 75 characters.

Defined in: [types.ts:1339](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1339)

___

### options

• **options**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects that belong to this specific group. Maximum of
100 items.

Defined in: [types.ts:1345](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1345)

___

### type

• **type**: optionGroup

Internal type property

**`internal`** 

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1333](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1333)
