"use client";

import {
  Breadcrumbs,
  Hero,
  Address,
  WalletBar,
  List,
  Card,
  Navbar,
  Footer,
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
      <Navbar />
      <Hero />
      {/* <Breadcrumbs /> */}
      <Address />
      {/* <WalletBar /> */}
      <Card />
      <List courses={courses} />
      <Footer />
    </>
  );
};

const getData = () => {
  const { data } = getAllCourse();
  return data;
};

export default Home;
