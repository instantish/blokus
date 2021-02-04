[@instantish/blokus](../README.md) / [Exports](../modules.md) / HomeTabView

# Interface: HomeTabView

The Home tab is a persistent, yet dynamic interface for apps.

**`see`** [Official documentation](https://api.slack.com/reference/surfaces/views)

## Hierarchy

* [*Block*](block.md)

  ↳ **HomeTabView**

## Table of contents

### Properties

- [blocks](hometabview.md#blocks)
- [callbackId](hometabview.md#callbackid)
- [externalId](hometabview.md#externalid)
- [privateMetadata](hometabview.md#privatemetadata)
- [type](hometabview.md#type)

## Properties

### blocks

• **blocks**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*ViewBlocks*](../modules.md#viewblocks)\>

An array of blocks that defines the content of the view. Max of 100 blocks.

Defined in: [types.ts:1510](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1510)

___

### callbackId

• `Optional` **callbackId**: *undefined* \| *string*

An identifier to recognize interactions and submissions of this particular
view. Don't use this to store sensitive information (use private_metadata
instead). Max length of 255 characters.

Defined in: [types.ts:1523](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1523)

___

### externalId

• `Optional` **externalId**: *undefined* \| *string*

A custom identifier that must be unique for all views on a per-team basis.

Defined in: [types.ts:1528](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1528)

___

### privateMetadata

• `Optional` **privateMetadata**: *undefined* \| *string*

An optional string that will be sent to your app in view_submission and
block_actions events. Max length of 3000 characters.

Defined in: [types.ts:1516](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1516)

___

### type

• **type**: home

The type of view. In this case type is always home.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1505](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1505)
