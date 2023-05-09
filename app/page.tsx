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
  const courses = getData();
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
  const { data } = getAllCourse();
  return data;
};

export default Home;
