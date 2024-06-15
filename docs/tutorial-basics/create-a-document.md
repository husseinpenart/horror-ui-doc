---
sidebar_position: 2
---

# Theme recognition

# in this page you well see Theme options and colors

## Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| primary Color   | ![#726EFF](https://via.placeholder.com/10/726EFF?text=+) #726EFF |
| secondary Color | ![#E6E6E6](https://via.placeholder.com/10/00E676?text=+) #00E676 |
| success Color   | ![#00E676](https://via.placeholder.com/10/00E676?text=+)#00E676  |
| danger Color    | ![#FF5252](https://via.placeholder.com/10/FF5252?text=+) #FF5252 |
| warning Color   | ![#FFC107](https://via.placeholder.com/10/FFC107?text=+) #FFC107 |
| info Color      | ![#2196F3](https://via.placeholder.com/10/2196F3?text=+) #2196F3 |
| light Color     | ![#F5F5F5](https://via.placeholder.com/10/F5F5F5?text=+) #F5F5F5 |
| lightBlue Color | ![#8CCEFF](https://via.placeholder.com/10/8CCEFF?text=+) #8CCEFF |
| orange Color    | ![#FF812B](https://via.placeholder.com/10/FF812B?text=+) #FF812B |
| pink Color      | ![#FF2BC5](https://via.placeholder.com/10/FF2BC5?text=+) #FF2BC5 |
| darkGreen Color | ![#003901](https://via.placeholder.com/10/003901?text=+) #003901 |
| yellow Color    | ![#FFE033](https://via.placeholder.com/10/FFE033?text=+) #FFE033 |

#### Get sizes dp sp

| Parameter | Type     | size |
| :-------- | :------- | :--- |
| `sm`      | `number` | 10   |
| `md`      | `number` | 50   |
| `lg`      | `number` | 100  |
| `xl`      | `number` | 200  |
| `xxl`     | `number` | 300  |
| `full`    | `number` | 400  |

#### Get size percentage

| Parameter | Type     | size   |
| :-------- | :------- | :----- |
| `sm`      | `string` | '10%'  |
| `md`      | `string` | '20%'  |
| `lg`      | `string` | '30%'  |
| `xl`      | `string` | '50%'  |
| `xxl`     | `string` | '80%'  |
| `full`    | `string` | '100%' |

## usage example

```jsx
<CardView
  bg={Theme.activeColors.light}
  ws={Theme.percentSizes.lg}
  hs={Theme.sizes.lg}
></CardView>
```
