[@instantish/blokus](../README.md) / [Exports](../modules.md) / OverflowMenuElement

# Interface: OverflowMenuElement

This is like a cross between a button and a select menu - when a user clicks
on this overflow button, they will be presented with a list of options to
choose from. Unlike the select menu, there is no typeahead field, and the
button always appears with an ellipsis ("…") rather than customisable text.

As such, it is usually used if you want a more compact layout than a select
menu, or to supply a list of less visually important actions after a row of
buttons. You can also specify simple URL links as overflow menu options,
instead of actions.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#overflow)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **OverflowMenuElement**

## Table of contents

### Properties

- [actionId](overflowmenuelement.md#actionid)
- [confirm](overflowmenuelement.md#confirm)
- [options](overflowmenuelement.md#options)
- [type](overflowmenuelement.md#type)

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
after a menu item is selected.

Defined in: [types.ts:803](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L803)

___

### options

• **options**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*OptionObject*](optionobject.md)\>

An array of option objects to display in the menu. Maximum number of
options is 5, minimum is 2.

Defined in: [types.ts:797](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L797)

___

### type

• **type**: overflow

The type of element. In this case type is always overflow.

Defined in: [types.ts:791](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L791)
