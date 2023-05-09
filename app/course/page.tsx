import { CourseHero, KeyPoint, Lecture, Modal } from "@/components/index";

const Course = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-4">
      <CourseHero />
      <KeyPoint />
      <Lecture />
      <Modal />
    </div>
  );
};

export default Course;
