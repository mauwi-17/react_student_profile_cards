// Reusable component: receives one student's data through props.
function StudentCard({ name, course, section }) {
  // Build initials (e.g. "Erica Mae Camintoy" -> "EC") for the avatar circle.
  const parts = name.split(" ");
  const initials = parts[0][0] + parts[parts.length - 1][0];

  return (
    <article className="card">
      <div className="avatar" aria-hidden="true">
        {initials}
      </div>
      <h2 className="card-name">{name}</h2>
      <p className="card-line">
        <span className="label">Course</span> {course}
      </p>
      <p className="card-line">
        <span className="label">Section</span> {section}
      </p>
    </article>
  );
}

export default StudentCard;
