export default function About(props) {
  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#181818" : "white",
  };
  const bodyStyle = {
    backgroundColor: "#303f57",
    color: "white",
  };

  return (
    <div className="text-center my-3 px-5" style={myStyle}>
      <h1 style={{ color: "#68166b" }}>About TextUtils</h1>
      <p className="mb-4">
        TextUtils is a simple and useful text utility app where you can perform
        various operations on your text. Below is a list of all available
        features:
      </p>

      <div className="accordion accordion-flush border border-4" id="accordionFlushExample">
        
        {/* Uppercase Function */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              Convert Text to Uppercase
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              This function converts all the text you entered into
              <strong> UPPERCASE</strong>.
            </div>
          </div>
        </div>

        {/* Lowercase Function */}
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
            >
              Convert Text to Lowercase
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              This function converts all the text you entered into
              <strong> lowercase</strong>.
            </div>
          </div>
        </div>

        {/* Clear Text Function */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
            >
              Clear Text
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              This function clears the entire text area and removes all content.
            </div>
          </div>
        </div>

        {/* Copy Text Function */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
            >
              Copy Text
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              This function copies the text to your clipboard so you can paste
              it anywhere.
            </div>
          </div>
        </div>

        {/* Word and Character Count */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed "
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
            >
              Words and Characters Count
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              This function shows how many <strong>words</strong> and{" "}
              <strong>characters</strong> are present in your text.
            </div>
          </div>
        </div>

      
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
            >
              Estimated Reading Time
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              This feature calculates the average time required to read the
              entered text based on word count.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
