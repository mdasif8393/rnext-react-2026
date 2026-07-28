import { useState } from "react";

const Form = () => {
  // mandatory data state
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  //handlers
  const handleTextChange = (e) => {
    setAnswer(e.target.value);
  };

  if (status === "success")
    return (
      <div>
        <h1>That's right!</h1>
      </div>
    );

  return (
    <div>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form>
        <textarea value={answer} onChange={handleTextChange}></textarea>
        <br />
        <button>Submit</button>
        <p>Loading...</p>
        <p className="Error">There was an error</p>
      </form>
    </div>
  );
};

export default Form;
