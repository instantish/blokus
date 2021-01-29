import { Block, BlocksOrGenerators, FunctionalComponent, ComponentBlock, Props } from '../types';

/**
 * Generates a component block in blokus. This component will be executed to
 * generate the final structure to be sent to slack when rendering.
 * @typeparam T  The Props type for the component.
 * @typeparam O  The output type for the component, should be a block.
 * @param func  The component factory, will be executed with the props as its
 * only parameter. Should return a valid Output block of type O.
 * @param params  The params to pass to the component factory when it is executed.
 * @param children  The children to pass to the component factory when executed,
 * will be passed as the `children` value in the props. Can be an array or
 * multiple parameters.
 * @returns Returns the generated component block, for internal use only.
 */
export const Component = <T, O>(
  func: FunctionalComponent<T, O>,
  params: Props<T>,
  ...children: BlocksOrGenerators<Block>
): ComponentBlock<T, O> => ({
  type: func,
  params,
  children,
});
