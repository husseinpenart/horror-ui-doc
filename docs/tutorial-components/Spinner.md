---
sidebar_position: 7
---

## SPinners

```jsx or tsx or js
const Loadings = () => {
  return (
    <>
      <Heading txp="center">Loading spinners</Heading>
      <Layout style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Spinner size={Theme.sizes.full} color={Theme.activeColors.danger} />
        <Spinner size={Theme.sizes.xxl} color={Theme.activeColors.dark} />
        <Spinner size={Theme.sizes.xl} color={Theme.activeColors.info} />
        <Spinner size={Theme.sizes.lg} color={Theme.activeColors.primary} />
        <Spinner size={Theme.sizes.md} color={Theme.activeColors.secondary} />
        <Spinner size={Theme.sizes.sm} color={Theme.activeColors.danger} />
      </Layout>
    </>
  );
};

export default Loadings;
```

# Api References for SPinners

| Parameter          | Type      | Description                                              |
| :----------------- | :-------- | :------------------------------------------------------- |
| `size`             | ` number` | spinner size                                             |
| `color`            | `string`  | spinner color                                            |
| `Animating`        | `boolean` | Whether to show the indicator (true) or hide it (false). |
| `hidesWhenStopped` | `boolean` | Whether the indicator should hide when not animating.    |
| `style`            | `any`     | your custom styles                                       |
