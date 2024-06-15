import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    image: require("../../assets/image/easy.png").default,
    description: (
      <>
        react-native-horror ui is easy to use cli/expo ,default style
        componential easy to maintain
      </>
    )
  },
  {
    title: "auto testing ci/cd",
    image: require("../../assets/image/cicd.png").default,
    description: (
      <>
        fast and easy updating early update adding component each week as it
        possible
      </>
    )
  },
  {
    title: "Powered by React-Native",
    image: require("../../assets/image/reactnative.png").default,
    description: (
      <>
        Extend or customize your app layout by reusing React-native-horror-ui.
        typescript easy to customize the library
      </>
    )
  }
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center my-10">
        <img className=" h-64 mx-auto block" src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className="capitalize">
          {title}
        </Heading>
        <p className="capitalize">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
