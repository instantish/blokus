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

/**
 * Generates a modal view from slack.
 * @param params  The various properties available to this view.
 * @param blocks  The blocks to use for the view, sub-arrays will automatically
 * be flattened. Replaces the `blocks` property.
 * @see {@link https://api.slack.com/surfaces/modals|Official documentation}
 */
export const Modal = (
  params: PartialBy<Omit<ModalPayload, 'type'>, 'blocks'>,
  ...blocks: BlocksOrGenerators<ViewBlocks> | BlocksOrGenerators<ViewBlocks>[]
): ModalPayload => ({
  type: BlockTypes.modal,
  blocks: blocks.flat(),
  ...params,
});

/**
 * Generates a home view from slack.
 * @param params  The various properties available to this view.
 * @param blocks  The blocks to use for the view, sub-arrays will automatically
 * be flattened. Replaces the `blocks` property.
 * @see {@link https://api.slack.com/surfaces/tabs|Official documentation}
 */
export const HomeTab = (
  params: PartialBy<Omit<HomeTabPayload, 'type'>, 'blocks'>,
  ...blocks: BlocksOrGenerators<ViewBlocks> | BlocksOrGenerators<ViewBlocks>[]
): HomeTabPayload => ({
  type: BlockTypes.home,
  blocks: blocks.flat(),
  ...params,
});

/**
 * Generates a message view from slack.
 * @param params  The various properties available to this view.
 * @param blocks  The blocks to use for the view, sub-arrays will automatically
 * be flattened. Replaces the `blocks` property.
 * @see {@link https://api.slack.com/surfaces/messages|Official documentation}
 */
export const Message = (
  params: PartialBy<Omit<MessagePayload, 'type'>, 'blocks'>,
  ...blocks: BlocksOrGenerators<MessageBlock> | BlocksOrGenerators<MessageBlock>[]
): MessagePayload => ({
  type: BlockTypes.message,
  blocks: blocks.flat(),
  ...params,
});
