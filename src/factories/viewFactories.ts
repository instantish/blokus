import {
  BlocksOrGenerators,
  HomeTabView as HomeTabPayload,
  ModalView as ModalPayload,
  MessageView as MessagePayload,
  ViewBlocks,
  PartialBy,
  MessageBlock,
} from '../types';
import { BlockTypes } from '../contants';

export const Modal = (
  params: PartialBy<Omit<ModalPayload, 'type'>, 'blocks'>,
  ...blocks: BlocksOrGenerators<ViewBlocks> | BlocksOrGenerators<ViewBlocks>[]
): ModalPayload => ({
  type: BlockTypes.modal,
  blocks: blocks.flat(),
  ...params,
});

export const HomeTab = (
  params: PartialBy<Omit<HomeTabPayload, 'type'>, 'blocks'>,
  ...blocks: BlocksOrGenerators<ViewBlocks> | BlocksOrGenerators<ViewBlocks>[]
): HomeTabPayload => ({
  type: BlockTypes.home,
  blocks: blocks.flat(),
  ...params,
});

export const Message = (
  params: PartialBy<Omit<MessagePayload, 'type'>, 'blocks'>,
  ...blocks: BlocksOrGenerators<MessageBlock> | BlocksOrGenerators<MessageBlock>[]
): MessagePayload => ({
  type: BlockTypes.message,
  blocks: blocks.flat(),
  ...params,
});
