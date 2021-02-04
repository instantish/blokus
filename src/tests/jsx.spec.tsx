/** @jsx b */
import { b } from '../jsx';
import { render, Modal, FunctionalComponent, PropsWithChildren } from '../index';

describe('Rendering blocks with tsx', () => {
  const sample = 'test';

  const sampleText = <text>{sample}</text>;
  const sampleConfirm = (
    <confirm title={sampleText} confirm={sampleText} style="primary" deny={sampleText}>
      {sample}
    </confirm>
  );
  const sampleOption = (
    <option value={sample} url={sample} description={sampleText}>
      {sample}
    </option>
  );
  const sampleOptionGroup = <option-group label={sampleText}>{sampleOption}</option-group>;
  const sampleFilter = <filter include={['mpim']} excludeBotUsers={true} excludeExternalSharedChannels={true} />;

  const blocks = [
    <header blockId={sample}>{sample}</header>,
    <image title={sampleText} imageUrl={sample} altText={sample} blockId={sample} />,
    <context blockId={sample}>
      <text emoji={sample}>{sample}</text>
      <mrkdwn verbatim={sample}>{sample}</mrkdwn>
      <image-element imageUrl={sample} altText={sample} />
    </context>,
    <divider blockId={sample} />,
    <action blockId={sample}>
      <button actionId={sample} value={sample} url={sample} style="primary" confirm={sampleConfirm}>
        {sample}
      </button>
      <select actionId={sample} confirm={sampleConfirm} placeholder={sampleText} initialOption={sampleOption}>
        {sampleOptionGroup}
      </select>
      <external-select
        actionId={sample}
        minQueryLength={0}
        initialOption={sampleOption}
        confirm={sampleConfirm}
        placeholder={sampleText}
      />
      <users-select actionId={sample} initialUser={sample} confirm={sampleConfirm} placeholder={sampleText} />
      <conversation-select
        actionId={sample}
        filter={sampleFilter}
        initialConversation={sample}
        defaultToCurrentConversation={true}
        confirm={sampleConfirm}
        placeholder={sampleText}
      />
    </action>,
    <action blockId={sample}>
      <channels-select actionId={sample} initialChannel={sample} confirm={sampleConfirm} placeholder={sampleText}>
        {sample}
      </channels-select>
      <multiselect actionId={sample} confirm={sampleConfirm} placeholder={sampleText} initialOptions={[sampleOption]}>
        {sampleOptionGroup}
      </multiselect>
      <external-multiselect
        actionId={sample}
        minQueryLength={0}
        initialOptions={[sampleOption]}
        confirm={sampleConfirm}
        placeholder={sampleText}
      />
      <users-multiselect actionId={sample} initialUsers={[sample]} confirm={sampleConfirm} placeholder={sampleText} />
      <conversation-multiselect
        actionId={sample}
        filter={sampleFilter}
        initialConversations={[sample]}
        defaultToCurrentConversation={true}
        confirm={sampleConfirm}
        placeholder={sampleText}
      />
    </action>,
    <action blockId={sample}>
      <channels-multiselect
        actionId={sample}
        initialChannels={[sample]}
        confirm={sampleConfirm}
        placeholder={sampleText}
      >
        {sample}
      </channels-multiselect>
      <overflow actionId={sample} confirm={sampleConfirm}>
        {sampleOption}
      </overflow>
      <datepicker actionId={sample} initialDate="00-00-0000" confirm={sampleConfirm} placeholder={sampleText} />
    </action>,
    <section
      accessory={<timepicker actionId={sample} initialTime="00:00" confirm={sampleConfirm} placeholder={sampleText} />}
      text={sampleText}
      blockId={sample}
    >
      <mrkdwn>{sample}</mrkdwn>
    </section>,
    <input optional={false} label={sampleText} hint={sampleText} dispatchAction={true} blockId={sample}>
      <text-input
        dispatchActionConfig={<dispatch-config triggerActionsOn={['on_enter_pressed']} />}
        multiline={true}
        minLength={0}
        maxLength={0}
        initialValue={sample}
        actionId={sample}
        placeholder={sampleText}
      />
    </input>,
    <input optional={false} label={sampleText} hint={sampleText} dispatchAction={true} blockId={sample}>
      <checkboxes actionId={sample} initialOptions={[sampleOption]} confirm={sampleConfirm}>
        {sampleOption}
      </checkboxes>
    </input>,
    <input optional={false} label={sampleText} hint={sampleText} dispatchAction={true} blockId={sample}>
      <radio actionId={sample} initialOption={sampleOption} confirm={sampleConfirm}>
        {sampleOption}
      </radio>
    </input>,
  ];

  const expectedBlocks = [
    { type: 'header', block_id: sample, text: { type: 'plain_text', text: sample } },
    {
      type: 'image',
      block_id: sample,
      alt_text: sample,
      image_url: sample,
      title: { type: 'plain_text', text: sample },
    },
    {
      type: 'context',
      block_id: sample,
      elements: [
        { type: 'plain_text', text: sample, emoji: sample },
        { type: 'mrkdwn', text: sample, verbatim: sample },
        { type: 'image', image_url: sample, alt_text: sample },
      ],
    },
    { type: 'divider', block_id: sample },
    {
      type: 'action',
      block_id: sample,
      elements: [
        {
          type: 'button',
          action_id: sample,
          style: 'primary',
          url: sample,
          value: sample,
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
          text: { type: 'plain_text', text: sample },
        },
        {
          type: 'static_select',
          action_id: sample,
          option_groups: [
            {
              label: { type: 'plain_text', text: sample },
              options: [
                {
                  description: { type: 'plain_text', text: sample },
                  text: { type: 'plain_text', text: sample },
                  url: sample,
                  value: sample,
                },
              ],
            },
          ],
          initial_option: {
            description: { type: 'plain_text', text: sample },
            text: { type: 'plain_text', text: sample },
            url: sample,
            value: sample,
          },
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'external_select',
          action_id: sample,
          min_query_length: 0,
          initial_option: {
            description: { type: 'plain_text', text: sample },
            text: { type: 'plain_text', text: sample },
            url: sample,
            value: sample,
          },
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'users_select',
          action_id: sample,
          initial_user: sample,
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'conversations_select',
          action_id: sample,
          default_to_current_conversation: true,
          initial_conversation: sample,
          filter: { exclude_bot_users: true, exclude_external_shared_channels: true, include: ['mpim'] },
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
      ],
    },
    {
      type: 'action',
      block_id: sample,
      elements: [
        {
          type: 'channels_select',
          action_id: sample,
          initial_channel: sample,
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'multi_static_select',
          action_id: sample,
          option_groups: [
            {
              label: { type: 'plain_text', text: sample },
              options: [
                {
                  description: { type: 'plain_text', text: sample },
                  text: { type: 'plain_text', text: sample },
                  url: sample,
                  value: sample,
                },
              ],
            },
          ],
          initial_options: [
            {
              description: { type: 'plain_text', text: sample },
              text: { type: 'plain_text', text: sample },
              url: sample,
              value: sample,
            },
          ],
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'multi_external_select',
          action_id: sample,
          min_query_length: 0,
          initial_options: [
            {
              description: { type: 'plain_text', text: sample },
              text: { type: 'plain_text', text: sample },
              url: sample,
              value: sample,
            },
          ],
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'multi_users_select',
          action_id: sample,
          initial_users: [sample],
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'multi_conversations_select',
          action_id: sample,
          initial_conversations: [sample],
          default_to_current_conversation: true,
          filter: { exclude_bot_users: true, exclude_external_shared_channels: true, include: ['mpim'] },
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
      ],
    },
    {
      type: 'action',
      block_id: sample,
      elements: [
        {
          type: 'multi_channels_select',
          action_id: sample,
          initial_channels: [sample],
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'overflow',
          action_id: sample,
          options: [
            {
              description: { type: 'plain_text', text: sample },
              text: { type: 'plain_text', text: sample },
              url: sample,
              value: sample,
            },
          ],
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
        {
          type: 'datepicker',
          action_id: sample,
          initial_date: '00-00-0000',
          placeholder: { type: 'plain_text', text: sample },
          confirm: {
            text: { type: 'plain_text', text: sample },
            style: 'primary',
            title: { type: 'plain_text', text: sample },
            confirm: { type: 'plain_text', text: sample },
            deny: { type: 'plain_text', text: sample },
          },
        },
      ],
    },
    {
      type: 'section',
      block_id: sample,
      text: { type: 'plain_text', text: sample },
      accessory: {
        type: 'timepicker',
        action_id: sample,
        initial_time: '00:00',
        placeholder: { type: 'plain_text', text: sample },
        confirm: {
          text: { type: 'plain_text', text: sample },
          style: 'primary',
          title: { type: 'plain_text', text: sample },
          confirm: { type: 'plain_text', text: sample },
          deny: { type: 'plain_text', text: sample },
        },
      },
      fields: [{ type: 'mrkdwn', text: sample }],
    },
    {
      type: 'input',
      block_id: sample,
      dispatch_action: true,
      element: {
        type: 'plain_text_input',
        action_id: sample,
        initial_value: sample,
        max_length: 0,
        min_length: 0,
        multiline: true,
        dispatch_action_config: { trigger_actions_on: ['on_enter_pressed'] },
        placeholder: { type: 'plain_text', text: sample },
      },
      hint: { type: 'plain_text', text: sample },
      label: { type: 'plain_text', text: sample },
      optional: false,
    },
    {
      type: 'input',
      block_id: sample,
      dispatch_action: true,
      element: {
        type: 'checkboxes',
        action_id: sample,
        options: [
          {
            description: { type: 'plain_text', text: sample },
            text: { type: 'plain_text', text: sample },
            url: sample,
            value: sample,
          },
        ],
        initial_options: [
          {
            description: { type: 'plain_text', text: sample },
            text: { type: 'plain_text', text: sample },
            url: sample,
            value: sample,
          },
        ],
        confirm: {
          text: { type: 'plain_text', text: sample },
          style: 'primary',
          title: { type: 'plain_text', text: sample },
          confirm: { type: 'plain_text', text: sample },
          deny: { type: 'plain_text', text: sample },
        },
      },
      hint: { type: 'plain_text', text: sample },
      label: { type: 'plain_text', text: sample },
      optional: false,
    },
    {
      type: 'input',
      block_id: sample,
      dispatch_action: true,
      element: {
        type: 'radio_buttons',
        action_id: sample,
        options: [
          {
            description: { type: 'plain_text', text: sample },
            text: { type: 'plain_text', text: sample },
            url: sample,
            value: sample,
          },
        ],
        initial_option: {
          description: { type: 'plain_text', text: sample },
          text: { type: 'plain_text', text: sample },
          url: sample,
          value: sample,
        },
        confirm: {
          text: { type: 'plain_text', text: sample },
          style: 'primary',
          title: { type: 'plain_text', text: sample },
          confirm: { type: 'plain_text', text: sample },
          deny: { type: 'plain_text', text: sample },
        },
      },
      hint: { type: 'plain_text', text: sample },
      label: { type: 'plain_text', text: sample },
      optional: false,
    },
  ];

  it('will render a modal with jsx', async () => {
    const modalView = (
      <modal
        callbackId={sample}
        clearOnClose={true}
        notifyOnClose={true}
        privateMetadata={sample}
        externalId={sample}
        submitDisabled={false}
        close={sampleText}
        title={sampleText}
        submit={sampleText}
      >
        {blocks}
      </modal>
    );

    const result = await render(modalView);

    expect(result).toEqual({
      type: 'modal',
      title: { type: 'plain_text', text: sample },
      blocks: expectedBlocks,
      close: { type: 'plain_text', text: sample },
      submit: { type: 'plain_text', text: sample },
      private_metadata: sample,
      callback_id: sample,
      clear_on_close: true,
      notify_on_close: true,
      external_id: sample,
      submit_disabled: false,
    });
  });

  it('Will also work with passing the tag as a function', async () => {
    const modalView = (
      <Modal
        callbackId={sample}
        clearOnClose={true}
        notifyOnClose={true}
        privateMetadata={sample}
        externalId={sample}
        submitDisabled={false}
        close={sampleText}
        title={sampleText}
        submit={sampleText}
      />
    );

    const result = await render(modalView);

    expect(result).toEqual({
      type: 'modal',
      title: { type: 'plain_text', text: sample },
      blocks: [],
      close: { type: 'plain_text', text: sample },
      submit: { type: 'plain_text', text: sample },
      private_metadata: sample,
      callback_id: sample,
      clear_on_close: true,
      notify_on_close: true,
      external_id: sample,
      submit_disabled: false,
    });
  });

  it('Will generate the components for the user', async () => {
    const Component: FunctionalComponent<PropsWithChildren<{ message: string }>> = ({ message }) => (
      <header>{message}</header>
    );

    const modalView = (
      <modal
        callbackId={sample}
        clearOnClose={true}
        notifyOnClose={true}
        privateMetadata={sample}
        externalId={sample}
        submitDisabled={false}
        close={sampleText}
        title={sampleText}
        submit={sampleText}
      >
        <Component message={sample} />
      </modal>
    );

    const result = await render(modalView);

    expect(result).toEqual({
      type: 'modal',
      title: { type: 'plain_text', text: sample },
      blocks: [{ type: 'header', text: { type: 'plain_text', text: sample } }],
      close: { type: 'plain_text', text: sample },
      submit: { type: 'plain_text', text: sample },
      private_metadata: sample,
      callback_id: sample,
      clear_on_close: true,
      notify_on_close: true,
      external_id: sample,
      submit_disabled: false,
    });
  });

  it('Will trigger an error when processing an unknown tag', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => <test />).toThrowError(new Error('Invalid tag provided, test received.'));
  });

  it('Will trigger an error when processing an unknown type of tag', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => b(0, null)).toThrowError(
      new Error('Unknown tag type, be sure to pass only functions or string to the JSX factory. number received')
    );
  });
});
