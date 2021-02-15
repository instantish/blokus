# Blokus
Blokus is a JavaScript library for creating UIs in slack using the [BlockKit API](https://api.slack.com/block-kit) and
the component pattern from modern UI libraries like React or Vue. Blokus was built in TypeScript and provides complete
types for all it's exported members.

## Why use Blockus?
Creating UIs with the BlockKit API means creating a lot of JavaScript Objects and duplicating components all over. It
is possible and relatively easy to create functions that generate blocks, but it leads to complex, duplicated, and hard
to read code. Blokus solves that by making you write UI blocks like you would write a React app.

Take this code for example
```js
function generateOption(text, value, description) {
  return {
    value,
    description: {
      type: 'plain_text',
      text: description,
    },
    text: {
      type: 'mrkdwn',
      text: description,
    },
  };
}

function generateSelect(options, initialOption, placeholder) {
  return {
    type: 'static_select',
    options: options.map((option) => generateOption(option.text, option.value, option.description)),
    initial_option: generateOption(initialOption.text, initialOption.value, initialOption.description),
    placeholder: {
      type: 'plain_text',
      text: placeholder,
    }
  };
}

function generateSelectModal() {
  const selects = [
    {
      placeholder: 'Select something',
      options: [
        {
          value: 'option1',
          text: 'Some option',
          description: 'Some option',
        },
        {
          value: 'option2',
          text: 'Some other option',
          description: 'Some other option',
        }
      ],
      intialOption:{
        value: 'option2',
        text: 'Some other option',
        description: 'Some other option',
      },
    }
  ];
  
  return {
    type: 'modal',
    title: {
      type: 'plain_text',
      text: 'Some modal',
    },
    blocks: [
      {
        type: 'action',
        elements: selects.map(select => generateSelect(select.options, select.intialOption, select.placeholder)),
      },
    ]
  }
}
```

Now with blokus
```js
import { render, Modal, Action, StaticSelect, Option, Text } from '@instantish/blokus';

const generateOption = ({ text, value, description }) => Option({
  value,
  description: Text({}, description),
}, text);

const generateSelect = ({ options, initialOption, placeholder }) => StaticSelect({
  initialOption: generateOption(initialOption),
  placeholder: Text({}, placeholder),
}, options.map(generateOption));

const GenerateSelectModal = () => {
  const selects = [
    {
      placeholder: 'Select something',
      options: [
        {
          value: 'option1',
          text: 'Some option',
          description: 'Some option',
        },
        {
          value: 'option2',
          text: 'Some other option',
          description: 'Some other option',
        }
      ],
      intialOption:{
        value: 'option2',
        text: 'Some other option',
        description: 'Some other option',
      },
    }
  ];
  
  // Render returns a promise to allow you to fetch data in component functions!
  return render(
    Modal({
      title: Text('Some Modal'),
    }, Action({}, selects.map(generateSelect)))
  );
}
```

## How to use
Install the library using NPM.

```bash
npm install @instantish/blokus
```

Import the render method, and the blocks you want to create, from blokus.

```js
import { render, Modal } from '@instantish/blokus';

const renderView = async () => {
  const blocks = await render(Modal(/* ... */));
}
```

`render` is an async method and will return a promise that will either thrown if there is a format error, or resolve to
the created blocks. Blokus validates the blocks you provide to the render method to ensure the rendered blocks are valid
with the [slack BlockKit API](https://api.slack.com/reference/block-kit).

### Using components
Any property of a blokus block that would require a sub-block can instead use a component. For example, the `blocks`
property of the `Modal` and `HomeTab` view or the `confirm` property of any action element.

Components are functions that take one props parameter and are expected to return one or multiple blocks depending on where
they are used. `render` will throw an error when a component returns the wrong number of blocks. A component may return
`null` or `undefined`, blokus will get rid of them for you.

```js
import { Header } from '@instantish/blokus';

const Component = ({ /* Props are loaded in this object */ }) => {
  // Return a block created with a block function.
  return Header();
}
```

Components can be used anywhere, simply call them with the `Component` function and provide them with props and
children.

```js
import { Modal, Component } from '@instantish/blokus';

Modal(
  {},
  Component({ foo: 'bar' }, SomeComponent), // Property foo will be in the props parameter
  something.map(thing => Component(thing, SomeComponent)) // blokus will flatten arrays, so feel free to return arrays of blocks!
);
```

Components can access their children through their props if provided.

```js
import { Modal, Action, Component } from '@instantish/blokus';

const SomeModal = ({ children }) => {
  return Modal({}, children);
}

Component({}, SomeModal, Action()); // The action block will be in the children's array
```

## API
[Complete API](docs/modules.md)

## JSX

JSX can easily be supported if you are already using a compiler or transpiler that supports it. For example, the
TypeScript compiler can compile JSX code with the `--jsx` option.

Add the following lines at the top of the in any `jsx` or `tsx` file where you want to use JSX.

```jsx
/** @jsx b */
import { b } from '@itsthantish/blokus/jsx';
```

We provide our own set of tags in JSX, you may also use the factory functions directly as usual. Our documentation
includes the tag name for each block, element, and object.

### Rendering some blocks
Rendering blocks is done as like with normal functions, simply convert the function to lowercase tags.

```jsx
/** @jsx b */
import { b } from '@itsthantish/blokus/jsx';
import { render } from '@instantish/blokus';

const renderView = async () => {
  const blocks = await render(
    <modal>
      {/* ... */}
    </modal>
  );
}
```

JSX is also supported for any property that expects a block type, like the modal's title.

```jsx
/** @jsx b */
import { b } from '@itsthantish/blokus/jsx';
import { render } from '@instantish/blokus';

const renderView = async () => {
  const blocks = await render(
    <modal title={<text>Hello, World!</text>}>
      {/* ... */}
    </modal>
  );
}
```

### Rendering some blocks using the functions
Rather than use our tags, you can also pass any of the exported function as "Components". This style will be
familiar to react-native users.

```jsx
/** @jsx b */
import { b } from '@itsthantish/blokus/jsx';
import { render, Modal } from '@instantish/blokus';

const renderView = async () => {
  /* This does the same thing as teh lowercase modal tag. */
  const blocks = await render(
    <Modal>
      {/* ... */}
    </Modal>
  );
}
```

Keep in mind that TypeScript may not be able to provide the same level of type verification when using the
functions directly.

### Rendering some blocks using components
Any function passed in JSX that is not one of our internal function will be converted to a functional component.

```jsx
/** @jsx b */
import { b } from '@itsthantish/blokus/jsx';
import { render } from '@instantish/blokus';

const Component = ({ message }) => (
  <header>{message}</header>
)

const renderView = async () => {
  const blocks = await render(
    <modal>
      <Component message="Hello, World!" /> {/* This will generate a header tag with the hello world message */}
    </modal>
  );
}
```

You may also pass children directly to components using JSX tags.

```jsx
/** @jsx b */
import { b } from '@itsthantish/blokus/jsx';
import { render } from '@instantish/blokus';

const Component = ({ children }) => (
  <modal>{children}</modal>
)

const renderView = async () => {
  /* This will generate the same thing as the above example */
  const blocks = await render(
    <Component>
      <header>
        Hello, World!
      </header>
    </Component>
  );
}
```

## Work remaining
- [X] Write the API section for all blocks
- [X] Add details for the TypeScript types
- [X] Add JSX support
- [X] Add advanced validations to checks things like text length or minimums and maximums.
- [X] Support messages as a view type.

## Development
Install all dependencies:

```bash
npm install
```

To run the automated linter on the code, use this command. The linter will also check the type.

```bash
npm run lint
```

To run the automated tests, use this command.

```bash
npm run test
```

The library can be built for publication using this command.

```bash
npm run build
```

We use `tsdx` to lint, test, and build the library.
