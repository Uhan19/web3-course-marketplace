import { CourseHero, KeyPoint, Lecture, Modal } from "@/components/index";
import { getAllCourse } from "@/content";

const Course = ({ params }: { params: any }) => {
  const courses = getStaticProps(params);
  return (
    <>
      <div className="py-4">
        <CourseHero
          title={courses.title}
          description={courses.description}
          coverImage={courses.coverImage}
        />
        <KeyPoint points={courses.wsl} />
        <Lecture locked={true} />
        <Modal />
      </div>
    </>
  );
};

const getStaticProps = (params: any) => {
  const { data } = getAllCourse();
  const courses = data.filter((course) => course.slug === params.slug)[0];
  return courses;
};

export default Course;
