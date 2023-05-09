import {
  Breadcrumbs,
  Hero,
  Address,
  WalletBar,
  List,
  Card,
} from "@/components/index";
import { CourseData } from "@/types";
import { getAllCourse } from "@/content";

interface HomeProps {
  courses: CourseData;
}

const Home: React.FC<HomeProps> = () => {
  const courses = getData().data;
  return (
    <>
      <Hero />
      {/* <Breadcrumbs /> */}
      <Address />
      {/* <WalletBar /> */}
      <Card />
      <List courses={courses} />
    </>
  );
};

const getData = () => {
  const courses = getAllCourse();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return courses;
};

export default Home;
