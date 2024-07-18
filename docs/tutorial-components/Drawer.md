---
sidebar_position: 18
---

# Drawer 🆕

```jsx or tsx or js
const Drawer = () => {
  // drawer functions /
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <View style={styles.container}>
      {!isDrawerOpen ? (
        <Button title="Toggle Drawer" onPress={toggleDrawer} />
      ) : (
        <Button title="Close Drawer" onPress={closeDrawer} />
      )}

      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        backgroundColor="black"
      >
        <Text>Drawer Content</Text>
        <Text>Drawer Content</Text>
        <Text>Drawer Content</Text>
        <Text>Drawer Content</Text>
        <Text>Drawer Content</Text>
        <Text>Drawer Content</Text>
      </Drawer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Drawer;
```

# Api References for Drawer

##

| Parameter         | Type              | Description                 |
| :---------------- | :---------------- | :-------------------------- |
| `isOpen`          | ` boolean`        | require for opening state   |
| `onClose`         | `void`            | close drawer                |
| `children`        | `React.ReactNode` | drawer content              |
| `backgroundColor` | `string`          | background color for drawer |
| `style`           | `styleView`       | your custom styles          |

```

```
