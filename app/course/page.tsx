import { CourseHero, KeyPoint, Lecture, Modal } from "@/components/index";

export default function Course() {
  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <CourseHero />
      <KeyPoint />
      <Lecture />
      <Modal />
    </div>
  );
}
