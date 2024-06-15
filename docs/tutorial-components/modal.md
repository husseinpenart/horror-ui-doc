---
sidebar_position: 7
---

## Modal

```jsx or tsx or js
//Window
const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button Pressing={() => setOpenModal(true)}>
        <TextView cl="white">open modal</TextView>
      </Button>
      <Window
        modalVisible={openModal}
        onRequestClose={() => setOpenModal(false)}
        backStyle={"red"}
        animationType={"slide"}
        backgroundColor="green"
        modalBack={Theme.activeColors.secondary}
      >
        <Heading txp="center">Hi! I'm Here </Heading>
        <Images
          uri={"https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg"}
          imgS={200}
          imgH={200}
        />
      </Window>
    </>
  );
};

export default Modal;
```

# Api References for window

| Parameter         | Type       | Description                                                                                                                                             |
| :---------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `modalVisible`    | ` boolean` | open window                                                                                                                                             |
| `onRequestClose`  | `boolean`  | close window                                                                                                                                            |
| `alignItems`      | `string`   | align the window.                                                                                                                                       |
| `marginTop`       | `number`   | margin top                                                                                                                                              |
| `height`          | `number`   | height                                                                                                                                                  |
| `margin`          | `number`   | margin                                                                                                                                                  |
| `shadowColor`     | `string`   | shadowColor                                                                                                                                             |
| `shWidth`         | `number`   | shadowOffset width                                                                                                                                      |
| `shHeight`        | `number`   | shadowOffset height                                                                                                                                     |
| `shadowOpacity`   | `number`   | shadowOpacity                                                                                                                                           |
| `shadowRadius`    | `number`   | shadowRadius                                                                                                                                            |
| `elevation`       | `number`   | shadow of window                                                                                                                                        |
| `width`           | `number`   | width                                                                                                                                                   |
| `modalBack`       | `boolean`  | Window background color.                                                                                                                                |
| `modalStyle`      | `object`   | Window style.                                                                                                                                           |
| `backStyle`       | `object`   | Window back style.                                                                                                                                      |
| `icons`           | `boolean`  | close icon                                                                                                                                              |
| `animationType`   | `boolean`  | prop controls how the modal animates                                                                                                                    |
| `transparent`     | `boolean`  | The transparent prop determines whether your modal will fill the entire view. Setting this to true will render the modal over a transparent background. |
| `position`        | `string`   | position for closing icon                                                                                                                               |
| `top`             | `number`   | top closing icon .                                                                                                                                      |
| `right`           | `number`   | right closing icon .                                                                                                                                    |
| `zIndex`          | `number`   | zIndex closing icon .                                                                                                                                   |
| `backgroundColor` | `string`   | backgroundColor closing icon                                                                                                                            |
| `borderRadius`    | `number`   | borderRadius closing icon .                                                                                                                             |
| `style`           | `any`      | your custom styles                                                                                                                                      |

## Api References for animationType window

| Parameter | Type      | Description                    |
| :-------- | :-------- | :----------------------------- |
| `slide `  | ` string` | slides in from the bottom,     |
| `fade `   | ` string` | fades into view,               |
| `none `   | ` string` | appears without an animation., |
