import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components"; // Title

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  link: {
    color: "#178549",
  },
};

const Title = styled.h1`
   {
    color: #178549;
  }
`;


const Logo = styled.img`
   {
    height: 200px;
  }
`;

function App() {
  return (
    <div style={styles.container}>
      <div>
        <Logo src={logo}  alt="logo" />
      </div>

      <Title>Hello Styled Components</Title>
      <a
        style={styles.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
