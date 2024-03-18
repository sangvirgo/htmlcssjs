import React, { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: "Hoc React cung Tan Sang nek",
  },
  {
    id: 2,
    name: "SPA la gi vay ta?",
  },
  {
    id: 3,
    name: "Arrow Function...",
  },
];

const UseEffect7 = () => {
  const [lessonId, setLessonId] = useState(0);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div className="m-5 text-3xl font-sans">
      <ol>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className={lessonId === lesson.id ? "text-red-500" : "text-black"}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffect7;
