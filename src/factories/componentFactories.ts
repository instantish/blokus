import { Block, BlocksOrGenerators, FunctionalComponent, ComponentBlock, Props } from '../types';

export const Component = <T, O>(
  func: FunctionalComponent<T, O>,
  params: Props<T>,
  ...children: BlocksOrGenerators<Block>
): ComponentBlock<T, O> => ({
  type: func,
  params,
  children,
});
