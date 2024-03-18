import React, { useState } from "react";

const courses = [
  { id: 1, name: "HTML, CSS" },
  { id: 2, name: "SQL" },
  { id: 3, name: "Java Spring" },
  { id: 4, name: "JavaScript Basics" },
  { id: 5, name: "React Fundamentals" },
  { id: 6, name: "Node.js Essentials" },
];

const Checkbox = () => {
  const [checked, setChecked] = useState([]);

  const handleChecked = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((check) => check !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  console.log(checked);

  const handleSubmit = () => {
    // call api
    console.log({ id: checked });
  };

  return (
    <div>
      <div className="mt-8 text-red-500 ml-8 text-[40px]">
        {courses.map((course) => (
          <div className="m-3" key={course.id}>
            <input type="checkbox" onChange={() => handleChecked(course.id)} />
            {course.name}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Checkbox;
