[@instantish/blokus](../README.md) / [Exports](../modules.md) / FilterObject

# Interface: FilterObject

Provides a way to filter the list of options in a conversations select menu
or conversations multi-select menu.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#filter_conversations)

## Hierarchy

* [*Block*](block.md)

  ↳ **FilterObject**

## Table of contents

### Properties

- [excludeBotUsers](filterobject.md#excludebotusers)
- [excludeExternalSharedChannels](filterobject.md#excludeexternalsharedchannels)
- [include](filterobject.md#include)
- [type](filterobject.md#type)

## Properties

### excludeBotUsers

• `Optional` **excludeBotUsers**: *undefined* \| *boolean*

Indicates whether to exclude bot users from conversation lists.
Defaults to false.

Defined in: [types.ts:1408](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1408)

___

### excludeExternalSharedChannels

• `Optional` **excludeExternalSharedChannels**: *undefined* \| *boolean*

Indicates whether to exclude external shared channels from conversation
lists. Defaults to false.

Defined in: [types.ts:1402](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1402)

___

### include

• `Optional` **include**: *undefined* \| (*im* \| *mpim* \| *private* \| *public*)[]

Indicates which type of conversations should be included in the list. When
this field is provided, any conversations that do not match will be
excluded

You should provide an array of strings from the following options: `im`,
`mpim`, `private`, and `public`. The array cannot be empty.

Defined in: [types.ts:1396](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1396)

___

### type

• **type**: filter

Internal type property

**`internal`** 

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1386](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1386)
