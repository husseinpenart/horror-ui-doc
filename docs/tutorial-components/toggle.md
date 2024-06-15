---
sidebar_position: 10
---

## ToggleButton

```jsx or tsx or js
const ToggleButton = () => {
  return (
    <>
      <Toggle
        trackColor={{ false: "red", true: "green" }}
        thumbColor="red"
        value={"huuu"}
      />
    </>
  );
};

export default ToggleButton;
```

# Api References for ToggleButton

| Parameter    | Type      | Description            |
| :----------- | :-------- | :--------------------- |
| `trackColor` | ` object` | color for track        |
| `thumbColor` | `string`  | color thumb navigation |
| `style`      | `any`     | your custom styles     |
