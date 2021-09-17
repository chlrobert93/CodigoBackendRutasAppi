import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  //Controlador para el encio del formulario
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    /* const enmail = `'${enteredEmail}'`;
    const fedback = `'${enteredFeedback}'`;
    console.log(fedback)
 */
    const reqBody = { email: enteredEmail, text: enteredFeedback };
    console.log(reqBody)

    //Eviar solicitud que lleva un curpo de un objecto JS
    fetch('../../api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    }) //{ email: 'test@test.com', text: 'Some feedback text' }
      .then((response) => response.json())

      .then((data) => console.log(data))
      

/*       .then(response => response.text())
      .then(text => console.log(text))
       */
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea  id='feedback' rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
