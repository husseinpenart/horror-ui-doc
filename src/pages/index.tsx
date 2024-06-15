import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
// @ts-ignore
import first from "../assets/image/first.webp";
// @ts-ignore
import second from "../assets/image/second.webp";
function HomepageHeader() {
  return (
    <header className="bg-slate-100 w-full ">
      <div className="text-center grid sm:grid-rows-1 md:grid-cold-3 lg:grid-cols-3">
        <div>
          <img src={first} alt="" className="w-128 h-128" />
        </div>
        <div className="w-128 h-96 bg-slate-400 border-4  rounded-2xl mx-auto  shadow-lime-100 shadow-inner my-20">
          <h1 className="text-5xl text-red-100 capitalize mt-5 ">
            React Native Horror UI
          </h1>
          <p className="text-lg text-red-50 leading-[10] capitalize">
            react native library for ui components and styling
          </p>
          <div className="gap-20 flex flex-wrap justify-center ">
            <Link
              to={"/docs/intro"}
              className="border-2 p-3 rounded-lg text-white "
            >
              Read doc
            </Link>
            <Link
              to={"https://www.npmjs.com/package/react-native-horror"}
              className="border-2 p-3 rounded-lg text-white "
            >
              Try it
            </Link>
          </div>
        </div>
        <div>
          <img src={second} alt="" className="w-128 h-128" />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
