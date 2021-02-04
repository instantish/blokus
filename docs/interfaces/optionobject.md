[@instantish/blokus](../README.md) / [Exports](../modules.md) / OptionObject

# Interface: OptionObject

An object that represents a single selectable item in a select menu,
multi-select menu, checkbox group, radio button group, or overflow menu.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#option)

## Hierarchy

* [*Block*](block.md)

  ↳ **OptionObject**

## Table of contents

### Properties

- [description](optionobject.md#description)
- [text](optionobject.md#text)
- [type](optionobject.md#type)
- [url](optionobject.md#url)
- [value](optionobject.md#value)

## Properties

### description

• `Optional` **description**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines a line of descriptive text
shown below the text field beside the radio button. Maximum length for
the text object within this field is 75 characters.

Defined in: [types.ts:1312](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1312)

___

### text

• **text**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*TextObject*](../modules.md#textobject)\>

A text object that defines the text shown in the option on the menu.
Overflow, select, and multi-select menus can only use plain_text objects,
while radio buttons and checkboxes can use mrkdwn text objects. Maximum
length for the text in this field is 75 characters.

Defined in: [types.ts:1299](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1299)

___

### type

• **type**: option

Internal type property

**`internal`** 

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1291](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1291)

___

### url

• `Optional` **url**: *undefined* \| *string*

A URL to load in the user's browser when the option is clicked. The url
attribute is only available in overflow menus. Maximum length for this
field is 3000 characters. If you're using url, you'll still receive an
interaction payload and will need to send an acknowledgement response.

Defined in: [types.ts:1320](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1320)

___

### value

• **value**: *string*

A unique string value that will be passed to your app when this option is
chosen. Maximum length for this field is 75 characters.

Defined in: [types.ts:1305](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1305)
