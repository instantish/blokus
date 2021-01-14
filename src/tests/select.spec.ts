import { Action, HomeTab, Option, OptionGroup, StaticMultiSelect, StaticSelect, Text } from '../factories';
import { render } from '../index';

describe('Rendering selects and their unique behaviors', () => {
  describe('When rendering statics selects', () => {
    it('Will render a select with only child options', async () => {
      const option1Text = 'test1';
      const option2Text = 'test2';

      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticSelect(
                {
                  actionId: 'test',
                },
                [
                  Option(
                    {
                      value: option1Text,
                    },
                    option1Text
                  ),
                  Option(
                    {
                      value: option2Text,
                    },
                    option2Text
                  ),
                ]
              ),
            ],
          }),
        ],
      });

      const result = await render(view);

      expect(result).toEqual({
        type: 'home',
        blocks: [
          {
            type: 'action',
            elements: [
              {
                type: 'static_select',
                action_id: 'test',
                options: [
                  { text: { type: 'plain_text', text: option1Text }, value: option1Text },
                  { text: { type: 'plain_text', text: option2Text }, value: option2Text },
                ],
              },
            ],
          },
        ],
      });
    });

    it('Will render a select with only a child option group', async () => {
      const option1Text = 'test1';
      const option2Text = 'test2';

      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticSelect(
                {
                  actionId: 'test',
                },
                OptionGroup(
                  {
                    label: Text({}, 'test'),
                  },
                  [
                    Option(
                      {
                        value: option1Text,
                      },
                      option1Text
                    ),
                    Option(
                      {
                        value: option2Text,
                      },
                      option2Text
                    ),
                  ]
                )
              ),
            ],
          }),
        ],
      });

      const result = await render(view);

      expect(result).toEqual({
        blocks: [
          {
            elements: [
              {
                action_id: 'test',
                option_groups: [
                  {
                    label: {
                      text: 'test',
                      type: 'plain_text',
                    },
                    options: [
                      {
                        text: {
                          text: option1Text,
                          type: 'plain_text',
                        },
                        value: option1Text,
                      },
                      {
                        text: {
                          text: option2Text,
                          type: 'plain_text',
                        },
                        value: option2Text,
                      },
                    ],
                  },
                ],
                type: 'static_select',
              },
            ],
            type: 'action',
          },
        ],
        type: 'home',
      });
    });

    it('Will render a select with both child and param options', async () => {
      const option1Text = 'test1';
      const option2Text = 'test2';

      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticSelect(
                {
                  actionId: 'test',
                  options: [
                    Option(
                      {
                        value: option2Text,
                      },
                      option2Text
                    ),
                  ],
                },
                [
                  Option(
                    {
                      value: option1Text,
                    },
                    option1Text
                  ),
                ]
              ),
            ],
          }),
        ],
      });

      const result = await render(view);

      expect(result).toEqual({
        type: 'home',
        blocks: [
          {
            type: 'action',
            elements: [
              {
                type: 'static_select',
                action_id: 'test',
                options: [
                  { text: { type: 'plain_text', text: option1Text }, value: option1Text },
                  { text: { type: 'plain_text', text: option2Text }, value: option2Text },
                ],
              },
            ],
          },
        ],
      });
    });

    it('Will render a select with both a child and param option group', async () => {
      const option1Text = 'test1';
      const option2Text = 'test2';

      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticSelect(
                {
                  actionId: 'test',
                  optionGroups: [
                    OptionGroup(
                      {
                        label: Text({}, 'test'),
                      },
                      [
                        Option(
                          {
                            value: option2Text,
                          },
                          option2Text
                        ),
                      ]
                    ),
                  ],
                },
                OptionGroup(
                  {
                    label: Text({}, 'test'),
                  },
                  [
                    Option(
                      {
                        value: option1Text,
                      },
                      option1Text
                    ),
                  ]
                )
              ),
            ],
          }),
        ],
      });

      const result = await render(view);

      expect(result).toEqual({
        blocks: [
          {
            elements: [
              {
                action_id: 'test',
                option_groups: [
                  {
                    label: {
                      text: 'test',
                      type: 'plain_text',
                    },
                    options: [
                      {
                        text: {
                          text: option1Text,
                          type: 'plain_text',
                        },
                        value: option1Text,
                      },
                    ],
                  },
                  {
                    label: {
                      text: 'test',
                      type: 'plain_text',
                    },
                    options: [
                      {
                        text: {
                          text: option2Text,
                          type: 'plain_text',
                        },
                        value: option2Text,
                      },
                    ],
                  },
                ],
                type: 'static_select',
              },
            ],
            type: 'action',
          },
        ],
        type: 'home',
      });
    });

    it('Will throw if providing no options nor option groups', async () => {
      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticSelect({
                actionId: 'test',
              }),
            ],
          }),
        ],
      });

      await expect(render(view)).rejects.toThrow();
    });

    it('Will throw if providing both options and option groups', async () => {
      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticSelect({
                actionId: 'test',
                options: [
                  Option(
                    {
                      value: 'fail',
                    },
                    'fail'
                  ),
                ],
                optionGroups: [
                  OptionGroup({
                    label: Text({}, 'fail'),
                    options: [
                      Option(
                        {
                          value: 'fail',
                        },
                        'fail'
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });

      await expect(render(view)).rejects.toThrow();
    });
  });

  describe('When rendering static multi selects', () => {
    it('Will render a select with only child options', async () => {
      const option1Text = 'test1';
      const option2Text = 'test2';

      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticMultiSelect(
                {
                  actionId: 'test',
                },
                [
                  Option(
                    {
                      value: option1Text,
                    },
                    option1Text
                  ),
                  Option(
                    {
                      value: option2Text,
                    },
                    option2Text
                  ),
                ]
              ),
            ],
          }),
        ],
      });

      const result = await render(view);

      expect(result).toEqual({
        type: 'home',
        blocks: [
          {
            type: 'action',
            elements: [
              {
                type: 'multi_static_select',
                action_id: 'test',
                options: [
                  { text: { type: 'plain_text', text: option1Text }, value: option1Text },
                  { text: { type: 'plain_text', text: option2Text }, value: option2Text },
                ],
              },
            ],
          },
        ],
      });
    });

    it('Will render a select with only a child option group', async () => {
      const option1Text = 'test1';
      const option2Text = 'test2';

      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticMultiSelect(
                {
                  actionId: 'test',
                },
                OptionGroup(
                  {
                    label: Text({}, 'test'),
                  },
                  [
                    Option(
                      {
                        value: option1Text,
                      },
                      option1Text
                    ),
                    Option(
                      {
                        value: option2Text,
                      },
                      option2Text
                    ),
                  ]
                )
              ),
            ],
          }),
        ],
      });

      const result = await render(view);

      expect(result).toEqual({
        blocks: [
          {
            elements: [
              {
                action_id: 'test',
                option_groups: [
                  {
                    label: {
                      text: 'test',
                      type: 'plain_text',
                    },
                    options: [
                      {
                        text: {
                          text: option1Text,
                          type: 'plain_text',
                        },
                        value: option1Text,
                      },
                      {
                        text: {
                          text: option2Text,
                          type: 'plain_text',
                        },
                        value: option2Text,
                      },
                    ],
                  },
                ],
                type: 'multi_static_select',
              },
            ],
            type: 'action',
          },
        ],
        type: 'home',
      });
    });

    it('Will render a select with both child and param options', async () => {
      const option1Text = 'test1';
      const option2Text = 'test2';

      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticMultiSelect(
                {
                  actionId: 'test',
                  options: [
                    Option(
                      {
                        value: option2Text,
                      },
                      option2Text
                    ),
                  ],
                },
                [
                  Option(
                    {
                      value: option1Text,
                    },
                    option1Text
                  ),
                ]
              ),
            ],
          }),
        ],
      });

      const result = await render(view);

      expect(result).toEqual({
        type: 'home',
        blocks: [
          {
            type: 'action',
            elements: [
              {
                type: 'multi_static_select',
                action_id: 'test',
                options: [
                  { text: { type: 'plain_text', text: option1Text }, value: option1Text },
                  { text: { type: 'plain_text', text: option2Text }, value: option2Text },
                ],
              },
            ],
          },
        ],
      });
    });

    it('Will render a select with both a child and param option group', async () => {
      const option1Text = 'test1';
      const option2Text = 'test2';

      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticMultiSelect(
                {
                  actionId: 'test',
                  optionGroups: [
                    OptionGroup(
                      {
                        label: Text({}, 'test'),
                      },
                      [
                        Option(
                          {
                            value: option2Text,
                          },
                          option2Text
                        ),
                      ]
                    ),
                  ],
                },
                OptionGroup(
                  {
                    label: Text({}, 'test'),
                  },
                  [
                    Option(
                      {
                        value: option1Text,
                      },
                      option1Text
                    ),
                  ]
                )
              ),
            ],
          }),
        ],
      });

      const result = await render(view);

      expect(result).toEqual({
        blocks: [
          {
            elements: [
              {
                action_id: 'test',
                option_groups: [
                  {
                    label: {
                      text: 'test',
                      type: 'plain_text',
                    },
                    options: [
                      {
                        text: {
                          text: option1Text,
                          type: 'plain_text',
                        },
                        value: option1Text,
                      },
                    ],
                  },
                  {
                    label: {
                      text: 'test',
                      type: 'plain_text',
                    },
                    options: [
                      {
                        text: {
                          text: option2Text,
                          type: 'plain_text',
                        },
                        value: option2Text,
                      },
                    ],
                  },
                ],
                type: 'multi_static_select',
              },
            ],
            type: 'action',
          },
        ],
        type: 'home',
      });
    });

    it('Will throw if providing no options nor option groups', async () => {
      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticMultiSelect({
                actionId: 'test',
              }),
            ],
          }),
        ],
      });

      await expect(render(view)).rejects.toThrow();
    });

    it('Will throw if providing both options and option groups', async () => {
      const view = HomeTab({
        blocks: [
          Action({
            elements: [
              StaticMultiSelect({
                actionId: 'test',
                options: [
                  Option(
                    {
                      value: 'fail',
                    },
                    'fail'
                  ),
                ],
                optionGroups: [
                  OptionGroup({
                    label: Text({}, 'fail'),
                    options: [
                      Option(
                        {
                          value: 'fail',
                        },
                        'fail'
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });

      await expect(render(view)).rejects.toThrow();
    });
  });
});
