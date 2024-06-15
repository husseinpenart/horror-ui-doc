---
sidebar_position: 8
---

## check box

```jsx or tsx or js
//SELECTIONS

const Selection = () => {
  const [music, setMusic] = useState(false);
  const [dancing, setDancing] = useState(false);
  const [reading, setReading] = useState(false);
  return (
    <>
      <Layout style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <CheckBox
          onPress={() => setMusic(!music)}
          title="Music"
          isChecked={music}
          icons={<Text>icon</Text>}
        />
        <CheckBox
          onPress={() => setDancing(!dancing)}
          title="Dancing"
          isChecked={dancing}
          size={25}
          color="red"
        />
        <CheckBox
          onPress={() => setReading(!reading)}
          title="Reading"
          isChecked={reading}
          size={25}
          color="red"
        />
      </Layout>
    </>
  );
};

export default Selection;
```

# Api References for Selection

| Parameter  | Type          | Description          |
| :--------- | :------------ | :------------------- |
| `Pressing` | ` void`       | on press             |
| `icons`    | `object item` | checkbox icon        |
| `title`    | `string`      | check box title text |
| `style`    | `any`         | your custom styles   |
