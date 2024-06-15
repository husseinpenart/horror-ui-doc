---
sidebar_position: 9
---

## RadioButton

```jsx or tsx or js
const RadioButton = () => {
  const [pricing, setPricing] = useState(0);

  const price = [
    {
      name: 100,
      id: 1
    },
    {
      name: 200,
      id: 2
    },
    {
      name: 300,
      id: 3
    }
  ];
  return (
    <>
      {price.map((e, i) => (
        <RadioButton
          label={e.name}
          key={i}
          selected={pricing === e.id}
          onSelect={() => setPricing(e.id)}
        />
      ))}
    </>
  );
};

export default RadioButton;
```

# Api References for RadioButton

| Parameter  | Type          | Description          |
| :--------- | :------------ | :------------------- |
| `Pressing` | ` void`       | on press             |
| `icons`    | `object item` | checkbox icon        |
| `title`    | `string`      | check box title text |
| `style`    | `any`         | your custom styles   |
