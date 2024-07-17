import Card from "bootstrap/dist/scss/_card.scss";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-500">
        <div className="bg-light p-5 rounded">
          <h1>
            <center>You Don't Know Jack Schitt's Creek</center>
          </h1>
          <h2>
            Instructions: There are 20 questions. Select your answer, then click
            "next".
          </h2>
          <center>
            <button type="button" className="btn btn-primary">
              Start!
            </button>
          </center>
          <div className="card">
            <h3>Question:</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
