import html2pdf from "html2pdf.js/dist/html2pdf.min";
import "./App.css";

function App() {
  const pdfJSX = () => {
    return (
      <>
        <h1>JSX to PDF Convert Example</h1>
        <h2>Hello React</h2>
      </>
    );
  };

  const printHandler = () => {
    const printElement = pdfJSX();
    console.log(printElement);

    html2pdf().from(printElement).save();
  };

  return (
    <div className="App">
      <button onClick={printHandler}>Print</button>
    </div>
  );
}

export default App;
