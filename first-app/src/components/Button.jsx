function Button() {

  function click (event) {
    console.log(event)
    event.target.innerText='Clicked'
    alert("Button clicked!");
  }

  return (
  <div>
      <button onClick={click}>Click Me</button>
    
    </div>
  );
}

export default Button;