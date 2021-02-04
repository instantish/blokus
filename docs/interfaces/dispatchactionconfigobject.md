[@instantish/blokus](../README.md) / [Exports](../modules.md) / DispatchActionConfigObject

# Interface: DispatchActionConfigObject

Determines when a plain-text input element will return a block_actions
interaction payload.

**`see`** [Official documentation](https://api.slack.com/reference/block-kit/composition-objects#dispatch_action_config)

## Hierarchy

* [*Block*](block.md)

  ↳ **DispatchActionConfigObject**

## Table of contents

### Properties

- [triggerActionsOn](dispatchactionconfigobject.md#triggeractionson)
- [type](dispatchactionconfigobject.md#type)

## Properties

### triggerActionsOn

• `Optional` **triggerActionsOn**: *undefined* \| (*on_enter_pressed* \| *on_character_entered*)[]

An array of interaction types that you would like to receive a
block_actions payload for. Should be one or both of:

`on_enter_pressed` — payload is dispatched when user presses the enter key
while the input is in focus. Hint text will appear underneath the input
explaining to the user to press enter to submit.

`on_character_entered` — payload is dispatched when a character is entered
(or removed) in the input.

Defined in: [types.ts:1372](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1372)

___

### type

• **type**: dispatchAction

Internal type property

**`internal`** 

Overrides: [Block](block.md).[type](block.md#type)

Defined in: [types.ts:1359](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L1359)
