function Home() {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif", lineHeight: "1.6" }}>
      {/* Cabeçalho */}
      <header
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          padding: "20px 0",
        }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "center",
          }}>
          <h1 style={{ fontSize: "2.5rem", margin: "0" }}>
            Seu Escritório de Advocacia
          </h1>
          <p style={{ fontSize: "1.2rem", margin: "10px 0 0" }}>
            Soluções jurídicas personalizadas para você
          </p>
        </div>
      </header>

      {/* Seção Principal */}
      <main style={{ padding: "40px 20px", backgroundColor: "#ecf0f1" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "2rem",
                color: "#34495e",
                textAlign: "center",
              }}>
              Nossos Serviços
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#7f8c8d",
                textAlign: "center",
              }}>
              Especializados em direito civil, trabalhista e empresarial.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginTop: "30px",
                justifyContent: "center",
              }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  width: "300px",
                  textAlign: "center",
                }}>
                <h3 style={{ color: "#2c3e50" }}>Consultoria Jurídica</h3>
                <p style={{ color: "#7f8c8d" }}>
                  Atendimento personalizado para seus casos mais delicados.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  width: "300px",
                  textAlign: "center",
                }}>
                <h3 style={{ color: "#2c3e50" }}>Defesa Trabalhista</h3>
                <p style={{ color: "#7f8c8d" }}>
                  Especialistas na proteção dos seus direitos no ambiente de
                  trabalho.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  width: "300px",
                  textAlign: "center",
                }}>
                <h3 style={{ color: "#2c3e50" }}>Planejamento Empresarial</h3>
                <p style={{ color: "#7f8c8d" }}>
                  Consultoria estratégica para o crescimento do seu negócio.
                </p>
              </div>
            </div>
          </section>

          {/* Chamada para Ação */}
          <section style={{ textAlign: "center", marginTop: "40px" }}>
            <h2 style={{ fontSize: "2rem", color: "#34495e" }}>
              Entre em Contato
            </h2>
            <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
              Agende uma consulta gratuita e descubra como podemos ajudá-lo.
            </p>
            <a
              href="mailto:contato@seuescritorio.com"
              style={{
                display: "inline-block",
                marginTop: "20px",
                backgroundColor: "#3498db",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "1rem",
              }}>
              Agendar Consulta
            </a>
          </section>
        </div>
      </main>

      {/* Rodapé */}
      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          padding: "20px 0",
          textAlign: "center",
        }}>
        <p style={{ margin: "0" }}>
          &copy; 2024 Seu Escritório de Advocacia. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;
