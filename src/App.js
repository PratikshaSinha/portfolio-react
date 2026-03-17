import React, { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);

  const theme = {
    background: dark ? "#0f172a" : "#f1f5f9",
    text: dark ? "white" : "#0f172a",
    card: dark ? "#1e293b" : "white",
  };

  return (
    <div style={{ fontFamily: "Arial", background: theme.background, minHeight: "100vh", color: theme.text }}>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "40px", background: "linear-gradient(90deg,#6366f1,#a855f7,#ec4899)" }}>
        <h1 style={{ fontSize: "40px", margin: 0 }}>Pratiksha Sinha</h1>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Aspiring Full Stack Developer | Open to Work
        </p>
        <button onClick={() => setDark(!dark)} style={buttonStyle}>
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>

        {/* About */}
        <div style={{ ...cardStyle, background: theme.card, color: theme.text }}>
          <h2>About Me</h2>
          <p>
            I am a BCA final year student with strong skills in web development.
            I enjoy building responsive and user-friendly applications.
          </p>
        </div>

        {/* Skills */}
        <div style={{ ...cardStyle, background: theme.card, color: theme.text }}>
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Node.js</li>
            <li>C, C++</li>
            <li>MS Word, Excel, PowerPoint</li>
          </ul>
        </div>

        {/* Projects */}
        <div style={{ ...cardStyle, background: theme.card, color: theme.text }}>
          <h2>Projects</h2>
          <ul>
            <li><a href="https://github.com/PratikshaSinha/chai-culture-coming-soon" target="_blank">Chai Culture</a></li>
            <li><a href="https://github.com/PratikshaSinha/HR-workforce-dashboard" target="_blank">HR Workforce Dashboard</a></li>
            <li><a href="https://github.com/PratikshaSinha/FruitBustGame" target="_blank">Fruit Game</a></li>
            <li><a href="https://github.com/PratikshaSinha/simple-Calculator" target="_blank">Calculator</a></li>
            <li><a href="https://github.com/PratikshaSinha/Resume-Screener" target="_blank">Resume Screener</a></li>
            <li><a href="https://github.com/PratikshaSinha/employee-management-app" target="_blank">Employee Management</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div style={{ ...cardStyle, background: theme.card, color: theme.text }}>
          <h2>Contact</h2>
          <p>Email: Pratikshasinha102@gmail.com</p>
          <a href="/resume.pdf" download>
            <button style={buttonStyle}>Download Resume</button>
          </a>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  border: "none",
  borderRadius: "10px",
  background: "#6366f1",
  color: "white",
  cursor: "pointer",
};

export default App;
