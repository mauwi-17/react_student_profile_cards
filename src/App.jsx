import StudentCard from "./StudentCard.jsx";

function App() {
  return (
    <main className="page">
      <h1 className="title">Student Profile Cards</h1>
      <p className="subtitle">CSE316 – Web Application Development</p>

      <section className="grid">
        {/* Same component, three times, different props each time */}
        <StudentCard
          name="Erica Mae Camintoy"
          course="BS Computer Science"
          section="3-A"
        />
        <StudentCard
          name="Juan Dela Cruz"
          course="BS Computer Science"
          section="3-A"
        />
        <StudentCard
          name="Maria Santos"
          course="BS Computer Science"
          section="3-A"
        />
      </section>
    </main>
  );
}

export default App;
