[@instantish/blokus](../README.md) / [Exports](../modules.md) / MarkdownTextObject

# Interface: MarkdownTextObject

An object containing some text, formatted as mrkdwn, our proprietary
contribution to the much beloved Markdown standard.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#text)

## Hierarchy

* [*Block*](block.md)

  ↳ **MarkdownTextObject**

## Table of contents

### Properties

- [text](markdowntextobject.md#text)
- [type](markdowntextobject.md#type)
- [verbatim](markdowntextobject.md#verbatim)

## Properties

### text

• **text**: *string*

The text for the block. This field accepts any of the standard text
formatting markup when type is mrkdwn.

Defined in: [types.ts:1205](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1205)

___

### type

• **type**: mrkdwn

The type of element. In this case type is always mrkdwn.

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1199](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1199)

___

### verbatim

• `Optional` **verbatim**: *undefined* \| *string*

When set to false (as is default) URLs will be auto-converted into links,
conversation names will be link-ified, and certain mentions will be
automatically parsed.

Using a value of true will skip any preprocessing of this nature, although
you can still include manual parsing strings. This field is only usable
when type is mrkdwn.

Defined in: [types.ts:1216](https://github.com/instantish/blokus/blob/f10405c/src/types.ts#L1216)
