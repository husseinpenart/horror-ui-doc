---
sidebar_position: 5
---

## text-inputs

```jsx or tsx or js
//floating-input
const Inputs = () => {
  return (
    <LabelInput
      label="this is label"
      wsize={200}
      bg={Theme.activeColors.info}
    />
  );
};

export default Inputs;
```

# Api References floating

| Parameter            | Type               | Description                                  |
| :------------------- | :----------------- | :------------------------------------------- |
| `label`              | `string`           | your input lable                             |
| `titleActiveSize`    | `number`           | title size for label if label is active      |
| `titleInActiveSize`  | `number`           | title size for label if label is not active  |
| `titleActiveColor`   | `string`           | title color for label if label is active     |
| `titleInactiveColor` | `number`           | title color for label if label is not active |
| `fs`                 | `number`           | font size                                    |
| `fF`                 | `string or object` | font family                                  |
| `fW`                 | `number`           | font weight                                  |
| `txp`                | `string`           | text align                                   |
| `cl`                 | `string`           | color                                        |
| `wsize`              | `number or string` | width                                        |
| `hsize`              | `number or string` | height                                       |
| `cap`                | `string`           | autoCapitalize                               |
| `autoComplete`       | `boolean`          | autoComplete                                 |
| `holder`             | `string`           | place holder                                 |
| `defaultVal`         | `string`           | defaultValue                                 |
| `cColor`             | `string`           | placeholderTextColor                         |
| `read`               | `boolean`          | editable                                     |
| `inputType`          | `string`           | keyboardType                                 |
| `numLine`            | `number`           | font weight                                  |
| `hide`               | `boolean`          | secureTextEntry                              |
| `bg`                 | `string`           | backgroundColor                              |
| `style`              | `any`              | your custom styles                           |

## simple-input

```jsx or tsx or js
//simple-input
const Inputs = () => {
  return <Input holder="simple form" />;
};

export default Inputs;
```

# Api References simple-input

| Parameter            | Type               | Description                                  |
| :------------------- | :----------------- | :------------------------------------------- |
| `label`              | `string`           | your input lable                             |
| `titleActiveSize`    | `number`           | title size for label if label is active      |
| `titleInActiveSize`  | `number`           | title size for label if label is not active  |
| `titleActiveColor`   | `string`           | title color for label if label is active     |
| `titleInactiveColor` | `number`           | title color for label if label is not active |
| `fs`                 | `number`           | font size                                    |
| `fF`                 | `string or object` | font family                                  |
| `fW`                 | `number`           | font weight                                  |
| `txp`                | `string`           | text align                                   |
| `cl`                 | `string`           | color                                        |
| `wsize`              | `number or string` | width                                        |
| `hsize`              | `number or string` | height                                       |
| `cap`                | `string`           | autoCapitalize                               |
| `autoComplete`       | `boolean`          | autoComplete                                 |
| `holder`             | `string`           | place holder                                 |
| `defaultVal`         | `string`           | defaultValue                                 |
| `cColor`             | `string`           | placeholderTextColor                         |
| `read`               | `boolean`          | editable                                     |
| `inputType`          | `string`           | keyboardType                                 |
| `numLine`            | `number`           | font weight                                  |
| `hide`               | `boolean`          | secureTextEntry                              |
| `bg`                 | `string`           | backgroundColor                              |
| `br`                 | `number`           | borderRadius                                 |
| `bWidth`             | `number or string` | borderWidth                                  |
| `bColor`             | `string`           | borderColor                                  |
| `style`              | `any`              | your custom styles                           |
