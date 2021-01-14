import {
  BlocksOrGenerators,
  HomeTabBlock as HomeTabPayload,
  ModalBlock as ModalPayload,
  PresentationalBlock,
  PartialBy,
} from '../types';
import { BlockTypes } from '../contants';

export const Modal = (
  params: PartialBy<Omit<ModalPayload, 'type'>, 'blocks'>,
  ...blocks: BlocksOrGenerators<PresentationalBlock> | BlocksOrGenerators<PresentationalBlock>[]
): ModalPayload => ({
  type: BlockTypes.modal,
  blocks: blocks.flat(),
  ...params,
});

export const HomeTab = (
  params: PartialBy<Omit<HomeTabPayload, 'type'>, 'blocks'>,
  ...blocks: BlocksOrGenerators<PresentationalBlock> | BlocksOrGenerators<PresentationalBlock>[]
): HomeTabPayload => ({
  type: BlockTypes.home,
  blocks: blocks.flat(),
  ...params,
});
