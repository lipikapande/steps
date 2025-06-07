import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Jonas" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// CHALLENGE - 1

// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   return <Main />;
// }

// function Main() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);
//   const date = new Date();
//   date.setDate(date.getDate() + count);

//   function handleStepPrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }
//   function handleStepNext() {
//     setStep((s) => s + 1);
//   }
//   function handleCountPrevious() {
//     setCount((s) => s - step);
//   }
//   function handleCountNext() {
//     setCount((s) => s + step);
//   }
//   return (
//     <div className="App">
//       <div>
//         <button onClick={handleStepPrevious}>-</button>
//         <span>Step: {step}</span>
//         <button onClick={handleStepNext}>+</button>
//       </div>
//       <div>
//         <button onClick={handleCountPrevious}>-</button>
//         <span>Count: {count}</span>
//         <button onClick={handleCountNext}>+</button>
//       </div>
//       <div>
//         <p>
//           <span>
//             {count === 0
//               ? "Today is "
//               : count > 0
//               ? `${count} days from today is `
//               : `${Math.abs(count)} days ago was `}
//           </span>
//           <span>{date.toDateString()}</span>
//         </p>
//       </div>
//     </div>
//   );
// }
