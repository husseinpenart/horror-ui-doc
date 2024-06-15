---
sidebar_position: 3
---

# Buttons

```jsx or tsx or js
//BUTTONS
const Buttons = () => {
  return (
    <Layout ws={'100%'} style={{flexDirection: 'row' , flexWrap:'wrap'}}>
      <Heading txp='center'>Buttons </Heading>
      <Button>
        <TextView cl={Theme.activeColors.light}>simple Button</TextView>
      </Button>
      <RoundedButton>
        <TextView>Rounded button</TextView>
      </RoundedButton>
      <LoadingButton>
        <TextView cl={Theme.activeColors.light}> loading </TextView>
      </LoadingButton>
      <IconButton><TextView cl={Theme.activeColors.light}>user (your icon)</TextView></IconButton>
    </Layout>
  );
};

export default Buttons;

```

## Api References for all kind of Button

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------ |
| `bc`      | `number` | borderColor    |
| `bw`      | `number` | borderWidth               |
| `bg`      | `string` | backgroundColor              |
| `align`      | `string` | align the button        |
| `br`      | `number` | borderRadius           |
| `underlay`      | `string` | underlayColor         |
| `Pressing`     | `void` | onPress function  |
| `pd`     | `number` | padding |
| `mr`     | `number` | margin       |
| `style`   | `any`    | your custom styles  |


