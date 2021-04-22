import { useRef } from 'react';

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef?.current.value;
    const feedback = feedbackRef?.current.value;
    const reqBody = {
      email,
      feedback,
    };
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res.json()))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input ref={emailRef} type='email' id='email' />
        </div>
        <div>
          <label htmlFor='feedback'>Feedback</label>
          <textarea ref={feedbackRef} rows='5' id='feedback' />
        </div>
        <button>Send Feedback</button>
      </form>
    </>
  );
}
