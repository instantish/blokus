[@instantish/blokus](../README.md) / [Exports](../modules.md) / ExternalSelectMenuElement

# Interface: ExternalSelectMenuElement

This select menu will load its options from an external data source, allowing
for a dynamic list of options.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/block-elements#external_select)

## Hierarchy

* *InteractiveElementBlock*

  ↳ **ExternalSelectMenuElement**

## Table of contents

### Properties

- [actionId](externalselectmenuelement.md#actionid)
- [confirm](externalselectmenuelement.md#confirm)
- [initialOption](externalselectmenuelement.md#initialoption)
- [minQueryLength](externalselectmenuelement.md#minquerylength)
- [placeholder](externalselectmenuelement.md#placeholder)
- [type](externalselectmenuelement.md#type)

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

Defined in: [types.ts:975](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L975)

___

### initialOption

• `Optional` **initialOption**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*OptionObject*](optionobject.md)\>

A single option that exactly matches one of the options within the options
or option_groups loaded from the external data source. This option will
be selected when the menu initially loads.

Defined in: [types.ts:969](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L969)

___

### minQueryLength

• `Optional` **minQueryLength**: *undefined* \| *number*

When the typeahead field is used, a request will be sent on every character
change. If you prefer fewer requests or more fully ideated queries, use the
min_query_length attribute to tell Slack the fewest number of typed
characters required before dispatch. The default value is 3.

Defined in: [types.ts:962](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L962)

___

### placeholder

• `Optional` **placeholder**: [*BlockOrGenerator*](../modules.md#blockorgenerator)<[*PlainTextObject*](plaintextobject.md)\>

A plain_text only text object that defines the placeholder text shown on
the menu. Maximum length for the text in this field is 150 characters.

Defined in: [types.ts:954](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L954)

___

### type

• **type**: externalSelect

The type of element. In this case type is always external_select.

Defined in: [types.ts:948](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L948)
