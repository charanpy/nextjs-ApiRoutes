import { buildFeedBackPath } from './feedback';
const handler = (req, res) => {
  const feedbackId = req.query.feedbackId;
  console.log(req?.params, 33);
  const feedbacks = JSON.parse(buildFeedBackPath());
  const selectedFeedback = feedbacks.find(
    (feedback) => feedback.id === feedbackId
  );
  return res.status(200).json({
    feedback: selectedFeedback,
  });
};

export default handler;
