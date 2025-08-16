
export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>What are you looking for?</h1>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a style={{ fontSize: "0.9em", color: "#555" }} href="https://github.com/devlagret">My GitHub ↗</a>
          <a style={{ fontSize: "0.9em", color: "#555" }} href="https://devlagret.github.io/sdk">Profil SDK Kedawung ↗</a>
        </div>
      </div>
    </main>
  );
}
