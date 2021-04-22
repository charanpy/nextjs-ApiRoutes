import React, { useState } from 'react';
import { buildFeedBackPath } from './api/feedback';

const Feedback = ({ feedback }) => {
  const [feedbackData, setFeedback] = useState();
  const loadFeedback = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data.feedback);
      });
  };
  console.log(feedbackData);
  return (
    <>
      {feedbackData && <p>{feedbackData?.email}</p>}
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>
            {item.feedback}

            <button onClick={() => loadFeedback(item.id)}>Show Details</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const feedback = JSON.parse(buildFeedBackPath());
  return {
    props: {
      feedback,
    },
  };
};

export default Feedback;
