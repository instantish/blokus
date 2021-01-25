export const validateMinLength = (el: string | Array<unknown>, expected: number, element: string): void => {
  if (el.length < expected) {
    throw new Error(`Expected ${element} to have a minimum length of ${expected}, ${el.length} received.`);
  }
};

export const validateMaxLength = (el: string | Array<unknown>, expected: number, element: string): void => {
  if (el.length > expected) {
    throw new Error(`Expected ${element} to have a maximum length of ${expected}, ${el.length} received.`);
  }
};

export const validateMinValue = (el: number, expected: number, element: string): void => {
  if (el < expected) {
    throw new Error(`Expected ${element} to be a minimum value of ${expected}, ${el} received.`);
  }
};

export const validateMaxValue = (el: number, expected: number, element: string): void => {
  if (el > expected) {
    throw new Error(`Expected ${element} to be a maximum value of ${expected}, ${el} received.`);
  }
};

export const validateType = (el: string, expected: string, element: string): void => {
  if (el !== expected) {
    throw new Error(`Expected ${element} to have a type of ${expected}, ${el} received.`);
  }
};

export const validateOneOfType = (el: string, expected: string[], element: string): void => {
  if (!expected.includes(el)) {
    throw new Error(`Expected ${element} to be one of the type of ${expected.join(', ')}; ${el} received.`);
  }
};

export const validateOption = (el: string, expected: string[], element: string): void => {
  if (!expected.includes(el)) {
    throw new Error(`Expected ${element} to be one of ${expected.join(', ')}; ${el} received.`);
  }
};

export const validateOptions = (el: string[], expected: string[], element: string): void => {
  if (el.some(value => !expected.includes(value))) {
    throw new Error(`Expected ${element} to be one of ${expected.join(', ')}; ${el.join(', ')} received.`);
  }
};

export const validateRequired = (el: string[], expected: string[], element: string): void => {
  if (expected.some(value => !el.includes(value))) {
    throw new Error(`Expected ${element} to have all ${expected.join(', ')} properties; ${el.join(', ')} received.`);
  }
};
