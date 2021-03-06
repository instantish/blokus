[@instantish/blokus](../README.md) / [Exports](../modules.md) / ModalView

# Interface: ModalView

Modals provide focused spaces ideal for requesting and collecting data from
users, or temporarily displaying dynamic and interactive information.

**`see`** [Official documentation](https://api.slack.com/reference/surfaces/views)

## Hierarchy

* [*Block*](block.md)

  ↳ **ModalView**

## Table of contents

### Properties

- [blocks](modalview.md#blocks)
- [callbackId](modalview.md#callbackid)
- [clearOnClose](modalview.md#clearonclose)
- [close](modalview.md#close)
- [externalId](modalview.md#externalid)
- [notifyOnClose](modalview.md#notifyonclose)
- [privateMetadata](modalview.md#privatemetadata)
- [submit](modalview.md#submit)
- [submitDisabled](modalview.md#submitdisabled)
- [title](modalview.md#title)
- [type](modalview.md#type)

## Properties

### blocks

• **blocks**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*ViewBlocks*](../modules.md#viewblocks)\>

An array of blocks that defines the content of the view. Max of 100 blocks.

Defined in: [types.ts:1444](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1444)

___

### callbackId

• `Optional` **callbackId**: *undefined* \| *string*

An identifier to recognize interactions and submissions of this particular
view. Don't use this to store sensitive information (use private_metadata
instead). Max length of 255 characters.

Defined in: [types.ts:1470](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1470)

___

### clearOnClose

• `Optional` **clearOnClose**: *undefined* \| *boolean*

When set to true, clicking on the close button will clear all views in a
modal and close it. Defaults to false.

Defined in: [types.ts:1476](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1476)

___

### close

• `Optional` **close**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

An optional plain_text element that defines the text displayed in the close
button at the bottom-right of the view. Max length of 24 characters.

Defined in: [types.ts:1450](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1450)

___

### externalId

• `Optional` **externalId**: *undefined* \| *string*

A custom identifier that must be unique for all views on a per-team basis.

Defined in: [types.ts:1487](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1487)

___

### notifyOnClose

• `Optional` **notifyOnClose**: *undefined* \| *boolean*

Indicates whether Slack will send your request URL a view_closed event
when a user clicks the close button. Defaults to false.

Defined in: [types.ts:1482](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1482)

___

### privateMetadata

• `Optional` **privateMetadata**: *undefined* \| *string*

An optional string that will be sent to your app in view_submission and
block_actions events. Max length of 3000 characters.

Defined in: [types.ts:1463](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1463)

___

### submit

• `Optional` **submit**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

An optional plain_text element that defines the text displayed in the
submit button at the bottom-right of the view. submit is required when an
input block is within the blocks array. Max length of 24 characters.

Defined in: [types.ts:1457](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1457)

___

### submitDisabled

• `Optional` **submitDisabled**: *undefined* \| *boolean*

When set to true, disables the submit button until the user has completed
one or more inputs. This property is primarily for configuration modals.

Defined in: [types.ts:1493](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1493)

___

### title

• **title**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

The title that appears in the top-left of the modal. Must be a plain_text
text element with a max length of 24 characters.

Defined in: [types.ts:1439](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1439)

___

### type

• **type**: modal

The type of view. In this case type is always modal.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1433](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1433)
