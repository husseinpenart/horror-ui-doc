---
sidebar_position: 9
---

## Radio

```jsx or tsx or js
const Radio = () => {
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
      <Layout style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {price.map((e, i) => (
          <Radio
            key={i}
            title={e.name}
            onPress={() => setPricing(e.id)}
            selected={e.id === pricing}
          />
        ))}
      </Layout>
    </>
  );
};

export default Radio;
```

# Api References for Radio

| Parameter  | Type          | Description          |
| :--------- | :------------ | :------------------- |
| `Pressing` | ` void`       | on press             |
| `icons`    | `object item` | checkbox icon        |
| `title`    | `string`      | check box title text |
| `style`    | `any`         | your custom styles   |
