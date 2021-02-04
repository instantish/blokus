[@instantish/blokus](../README.md) / [Exports](../modules.md) / ComponentBlock

# Interface: ComponentBlock<T, O\>

Virtual component block that's used for rendering the final blocks tree.

**`typeparam`** Output type, should be a valid block.

**`internal`** 

## Type parameters

Name | Default | Description |
------ | ------ | ------ |
`T` | {} | Props object.   |
`O` | {} | - |

## Hierarchy

* **ComponentBlock**

## Table of contents

### Properties

- [children](componentblock.md#children)
- [params](componentblock.md#params)
- [type](componentblock.md#type)

## Properties

### children

• **children**: [*BlocksOrGenerators*](../modules.md#blocksorgenerators)<[*Block*](block.md)\>

Defined in: [types.ts:42](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L42)

___

### params

• **params**: {}

Defined in: [types.ts:41](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L41)

___

### type

• **type**: [*FunctionalComponent*](../modules.md#functionalcomponent)<T, O\>

Defined in: [types.ts:40](https://github.com/instantish/blokus/blob/8b8e846/src/types.ts#L40)
