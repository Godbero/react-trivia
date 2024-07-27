import Card from "bootstrap/dist/scss/card.scss";

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
              <h5>Start!</h5>
            </button>
          </center>
          <div className="card">
            <h3>Question: Roland Checked into the hotel under what name?</h3>
          </div>
          <div className="card">
            <h4>A: Damon Steel </h4>
          </div>
          <div className="card">
            <h4>B: Dustin Steel </h4>
          </div>
          <div className="card">
            <h4>C: Darren Steel </h4>
          </div>
          <div className="card">
            <h4>D: Damian Steel </h4>
          </div>
          <center>
            <button type="button" className="btn btn-primary">
              <h5>Next</h5>
            </button>
          </center>
        </div>
      </div>
    </>
  );
}

export default App;
