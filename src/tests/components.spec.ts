import {
  Action,
  Button,
  CheckboxGroup,
  Component,
  Confirm,
  Context,
  ConversationMultiSelect,
  ConversationSelect,
  Datepicker,
  DispatchActionConfig,
  Divider,
  ExternalMultiSelect,
  ExternalSelect,
  /* File, */
  Filter,
  Header,
  HomeTab,
  Image,
  ImageElement,
  Input,
  Markdown,
  Modal,
  Option,
  OptionGroup,
  OverflowMenu,
  PlainTextInput,
  PublicChannelsMultiSelect,
  PublicChannelsSelect,
  RadioButtonGroup,
  render,
  Section,
  StaticMultiSelect,
  StaticSelect,
  Text,
  Timepicker,
  UserMultiSelect,
  UserSelect,
} from '../index';

describe('Rendering blocks', () => {
  const sample = 'test';

  const sampleText = Component(() => Text({}, sample), {});
  const sampleConfirm = Component(
    () =>
      Confirm(
        {
          title: sampleText,
          confirm: sampleText,
          style: 'primary',
          deny: sampleText,
        },
        sample
      ),
    {}
  );
  const sampleOption = Component(
    () =>
      Option(
        {
          value: sample,
          url: sample,
          description: sampleText,
        },
        sample
      ),
    {}
  );
  const sampleOptionGroup = Component(
    () =>
      OptionGroup(
        {
          label: sampleText,
        },
        sampleOption
      ),
    {}
  );
  const sampleFilter = Component(
    () =>
      Filter({
        include: ['mpim'],
        excludeExternalSharedChannels: true,
        excludeBotUsers: true,
      }),
    {}
  );

  const blocks = [
    Component(
      () =>
        Header(
          {
            blockId: sample,
          },
          sample
        ),
      {}
    ),
    Component(
      () =>
        Image({
          title: sampleText,
          imageUrl: sample,
          altText: sample,
          blockId: sample,
        }),
      {}
    ),
    Component(
      () =>
        Context(
          {
            blockId: sample,
          },
          [
            Component(() => Text({ emoji: sample }, sample), {}),
            Component(() => Markdown({ verbatim: sample }, sample), {}),
            Component(() => ImageElement({ altText: sample, imageUrl: sample }), {}),
          ]
        ),
      {}
    ),
    Component(() => Divider({ blockId: sample }), {}),
    /* Component(
      () =>
        File({
          source: 'remote',
          externalId: sample,
          blockId: sample,
        }),
      {}
    ), */
    Component(
      () =>
        Action(
          {
            blockId: sample,
          },
          [
            Component(
              () =>
                Button(
                  {
                    actionId: sample,
                    value: sample,
                    url: sample,
                    style: 'primary',
                    confirm: sampleConfirm,
                  },
                  sample
                ),
              {}
            ),
            Component(
              () =>
                StaticSelect(
                  {
                    actionId: sample,
                    confirm: sampleConfirm,
                    placeholder: sampleText,
                    initialOption: sampleOption,
                  },
                  [sampleOptionGroup]
                ),
              {}
            ),
            Component(
              () =>
                ExternalSelect({
                  actionId: sample,
                  minQueryLength: 0,
                  initialOption: sampleOption,
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
            Component(
              () =>
                UserSelect({
                  actionId: sample,
                  initialUser: sample,
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
            Component(
              () =>
                ConversationSelect({
                  actionId: sample,
                  filter: sampleFilter,
                  initialConversation: sample,
                  defaultToCurrentConversation: true,
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
          ]
        ),
      {}
    ),
    Component(
      () =>
        Action(
          {
            blockId: sample,
          },
          [
            Component(
              () =>
                PublicChannelsSelect({
                  actionId: sample,
                  initialChannel: sample,
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
            Component(
              () =>
                StaticMultiSelect(
                  {
                    actionId: sample,
                    confirm: sampleConfirm,
                    placeholder: sampleText,
                    initialOptions: [sampleOption],
                  },
                  [sampleOptionGroup]
                ),
              {}
            ),
            Component(
              () =>
                ExternalMultiSelect({
                  actionId: sample,
                  minQueryLength: 0,
                  initialOptions: [sampleOption],
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
            Component(
              () =>
                UserMultiSelect({
                  actionId: sample,
                  initialUsers: [sample],
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
            Component(
              () =>
                ConversationMultiSelect({
                  actionId: sample,
                  filter: sampleFilter,
                  initialConversations: [sample],
                  defaultToCurrentConversation: true,
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
          ]
        ),
      {}
    ),
    Component(
      () =>
        Action(
          {
            blockId: sample,
          },
          [
            Component(
              () =>
                PublicChannelsMultiSelect({
                  actionId: sample,
                  initialChannels: [sample],
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
            Component(
              () =>
                OverflowMenu(
                  {
                    actionId: sample,
                    confirm: sampleConfirm,
                  },
                  sampleOption
                ),
              {}
            ),
            Component(
              () =>
                Datepicker({
                  actionId: sample,
                  initialDate: '00-00-0000',
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
          ]
        ),
      {}
    ),
    Component(
      () =>
        Section(
          {
            accessory: Component(
              () =>
                Timepicker({
                  actionId: sample,
                  initialTime: '00:00',
                  confirm: sampleConfirm,
                  placeholder: sampleText,
                }),
              {}
            ),
            text: sampleText,
            blockId: sample,
          },
          [Component(() => Markdown({}, sample), {})]
        ),
      {}
    ),
    Component(
      () =>
        Input(
          {
            optional: false,
            label: sampleText,
            hint: sampleText,
            dispatchAction: true,
            blockId: sample,
          },
          Component(
            () =>
              PlainTextInput({
                dispatchActionConfig: DispatchActionConfig({ triggerActionsOn: ['on_enter_pressed'] }),
                multiline: true,
                minLength: 0,
                maxLength: 0,
                initialValue: sample,
                actionId: sample,
                placeholder: sampleText,
              }),
            {}
          )
        ),
      {}
    ),
    Component(
      () =>
        Input(
          {
            optional: false,
            label: sampleText,
            hint: sampleText,
            dispatchAction: true,
            blockId: sample,
          },
          Component(
            () =>
              CheckboxGroup(
                {
                  actionId: sample,
                  initialOptions: [sampleOption],
                  confirm: sampleConfirm,
                },
                sampleOption
              ),
            {}
          )
        ),
      {}
    ),
    Component(
      () =>
        Input(
          {
            optional: false,
            label: sampleText,
            hint: sampleText,
            dispatchAction: true,
            blockId: sample,
          },
          Component(
            () =>
              RadioButtonGroup(
                {
                  actionId: sample,
                  initialOption: sampleOption,
                  confirm: sampleConfirm,
                },
                sampleOption
              ),
            {}
          )
        ),
      {}
    ),
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
    /* { type: 'file', block_id: sample, external_id: sample, source: 'remote' }, */
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

  describe('Using the modal view', () => {
    it('will render an empty modal if given no children', async () => {
      const modalView = Modal({
        callbackId: sample,
        clearOnClose: true,
        notifyOnClose: true,
        privateMetadata: sample,
        externalId: sample,
        submitDisabled: false,
        close: sampleText,
        title: sampleText,
        submit: sampleText,
      });

      const result = await render(modalView);

      expect(result).toEqual({
        type: 'modal',
        title: {
          type: 'plain_text',
          text: sample,
        },
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

    it('will render a modal with all the elements as expected', async () => {
      const modalView = Modal(
        {
          callbackId: sample,
          clearOnClose: true,
          notifyOnClose: true,
          privateMetadata: sample,
          externalId: sample,
          submitDisabled: false,
          close: sampleText,
          title: sampleText,
          submit: sampleText,
        },
        blocks
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
  });

  describe('Using the HomeTab view', () => {
    it('will render an empty tab if given no children', async () => {
      const homeView = HomeTab({
        callbackId: sample,
        privateMetadata: sample,
        externalId: sample,
      });

      const result = await render(homeView);

      expect(result).toEqual({
        type: 'home',
        blocks: [],
        private_metadata: sample,
        callback_id: sample,
        external_id: sample,
      });
    });

    it('will render a tab with all the elements as expected', async () => {
      const homeView = HomeTab(
        {
          callbackId: sample,
          privateMetadata: sample,
          externalId: sample,
        },
        blocks
      );

      const result = await render(homeView);

      expect(result).toEqual({
        type: 'home',
        blocks: expectedBlocks,
        private_metadata: sample,
        callback_id: sample,
        external_id: sample,
      });
    });
  });
});
