import React, { useState } from "react";
import {
  FaBars,
  FaChalkboardTeacher,
  FaBook,
  FaForumbee,
  FaArrowCircleRight,
  FaTrophy,
  FaChartLine,
  FaPlayCircle,
  FaFileAlt,
  FaQuestionCircle,
  FaCode,
  FaFolderOpen,
} from "react-icons/fa";

function App() {
  const [activeTab, setActiveTab] = useState("Learning Material");
  const [activeChapter, setActiveChapter] = useState("Chapter 1");

  const styles = {
    container: { display: "flex", height: "100vh", fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fb", flexDirection: "row" },
    sidebar: { width: "220px", backgroundColor: "#f8f9fb", padding: "20px", borderRight: "1px solid #e0e0e0" },
    sidebarTitle: { fontSize: "18px", fontWeight: "bold", color: "#323232", marginBottom: "20px", display: "flex", alignItems: "center" },
    sidebarNav: { listStyleType: "none", padding: 0 },
    sidebarNavItem: { padding: "10px 0", fontSize: "16px", color: "#666", cursor: "pointer", display: "flex", alignItems: "center" },
    sidebarIcon: { marginRight: "10px" },
    mainContent: { flex: 1, padding: "20px", backgroundColor: "#ffffff" },
    header: { display: "flex", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" },
    tabButton: { padding: "10px 20px", marginRight: "10px", border: "1px solid #cfcfcf", borderRadius: "5px", backgroundColor: "#f8f9fb", cursor: "pointer" },
    activeTabButton: { backgroundColor: "#673ab7", color: "#fff" },
    howItWorks: { marginLeft: "auto", color: "#673ab7", cursor: "pointer", fontSize: "14px", textDecoration: "underline" },
    courseContent: { display: "flex", border: "1px solid #e0e0e0", borderRadius: "8px", padding: "20px", flexDirection: "row" },
    chapterList: { width: "150px", borderRight: "1px solid #e0e0e0", paddingRight: "20px", color: "#666" },
    chapterItem: { marginBottom: "10px", cursor: "pointer", fontWeight: "bold", color: activeChapter === "Chapter 1" ? "#673ab7" : "#666" },
    chapterDetails: { flex: 1, paddingLeft: "20px" },
    courseTitle: { fontSize: "18px", fontWeight: "bold", color: "#323232", marginBottom: "10px" },
    partContainer: { border: "1px solid #e0e0e0", borderRadius: "8px", marginBottom: "10px", padding: "15px", backgroundColor: "#ffffff" },
    partHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
    partTitle: { fontSize: "16px", fontWeight: "bold", color: "#323232" },
    partInfo: { display: "flex", alignItems: "center", fontSize: "14px", color: "#666" },
    icon: { marginRight: "5px", color: "#666" },
    progressBarContainer: { width: "100%", height: "6px", backgroundColor: "#e0e0e0", borderRadius: "4px", marginTop: "5px" },
    progressBar: progress => ({ height: "100%", backgroundColor: "#673ab7", borderRadius: "4px", width: `${progress}%` }),
    completionStatus: { fontSize: "12px", color: "#666" },
    lessonList: { listStyleType: "none", padding: 0, marginTop: "10px" },
    lessonItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderTop: "1px solid #e0e0e0" },
    lessonTitle: { display: "flex", alignItems: "center", fontSize: "14px", color: "#323232" },
  };

  const Part = ({ title, progress, time, difficulty, resources }) => (
    <div style={styles.partContainer}>
      <div style={styles.partHeader}>
        <span style={styles.partTitle}>{title}</span>
        <span style={styles.partInfo}>
          <FaPlayCircle style={styles.icon} /> {time} <FaChartLine style={styles.icon} /> {difficulty} <FaFolderOpen style={styles.icon} /> {resources.length}
        </span>
      </div>
      <div style={styles.progressBarContainer}>
        <div style={styles.progressBar(progress)}></div>
      </div>
      <span style={styles.completionStatus}>{progress}% Completed</span>
      <ul style={styles.lessonList}>
        {resources.map((resource, index) => (
          <li key={index} style={styles.lessonItem}>
            <span style={styles.lessonTitle}>
              {resource.icon} {resource.title}
            </span>
            <span>{resource.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>
          <FaBars style={styles.sidebarIcon} /> AlgoZenith
        </h2>
        <nav>
          <ul style={styles.sidebarNav}>
            <li style={styles.sidebarNavItem}>
              <FaChalkboardTeacher style={styles.sidebarIcon} /> Dashboard
            </li>
            <li style={styles.sidebarNavItem}>
              <FaBook style={styles.sidebarIcon} /> Learn
            </li>
            <li style={styles.sidebarNavItem}>
              <FaForumbee style={styles.sidebarIcon} /> Forums
            </li>
            <li style={styles.sidebarNavItem}>
              <FaArrowCircleRight style={styles.sidebarIcon} /> Upskill
            </li>
            <li style={styles.sidebarNavItem}>
              <FaTrophy style={styles.sidebarIcon} /> Contest
            </li>
            <li style={styles.sidebarNavItem}>
              <FaChartLine style={styles.sidebarIcon} /> Leaderboard
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === "Mentor Sessions" ? styles.activeTabButton : {}),
            }}
            onClick={() => setActiveTab("Mentor Sessions")}
          >
            Mentor Sessions
          </button>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === "Learning Material" ? styles.activeTabButton : {}),
            }}
            onClick={() => setActiveTab("Learning Material")}
          >
            Learning Material
          </button>
          <button style={styles.howItWorks}>How it works</button>
        </header>

        <section style={styles.courseContent}>
          <div style={styles.chapterList}>
            {["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"].map((chapter, index) => (
              <p
                key={index}
                style={{
                  ...styles.chapterItem,
                  fontWeight: activeChapter === chapter ? "bold" : "normal",
                  color: activeChapter === chapter ? "#673ab7" : "#666",
                }}
                onClick={() => setActiveChapter(chapter)}
              >
                {chapter} <span style={{ float: "right", color: "#666" }}>05:00:00</span>
              </p>
            ))}
          </div>

          <div style={styles.chapterDetails}>
            <h3 style={styles.courseTitle}>CHAPTER 1</h3>
            <Part
              title="Part 1"
              progress={45}
              time="02:00:00"
              difficulty="Medium"
              resources={[
                { icon: <FaPlayCircle style={styles.icon} />, title: "Video 1", time: "10:00" },
                { icon: <FaFileAlt style={styles.icon} />, title: "Article 1", time: "10:00" },
                { icon: <FaQuestionCircle style={styles.icon} />, title: "Quiz 1", time: "10:00" },
                { icon: <FaCode style={styles.icon} />, title: "Coding Exercise 1", time: "10:00" },
                { icon: <FaFolderOpen style={styles.icon} />, title: "Combined Resource 1", time: "10:00" },
              ]}
            />
            <Part
              title="Part 2"
              progress={20}
              time="02:00:00"
              difficulty="Medium"
              resources={[]}
            />
            <Part
              title="Part 3"
              progress={0}
              time="02:00:00"
              difficulty="Medium"
              resources={[]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
