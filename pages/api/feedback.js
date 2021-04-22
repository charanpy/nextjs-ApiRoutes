import fs from 'fs';
import path from 'path';

export const buildFeedBackPath = () => {
  const filePath = path.join(process.cwd(), 'data', 'feedback.json');
  const fileData = fs.readFileSync(filePath);
  return fileData;
};

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { email, feedback } = req.body;
    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = buildFeedBackPath();
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return res.status(201).json({
      message: 'success',
      feedback: newFeedback,
    });
  }
  const data = JSON.parse(buildFeedBackPath());
  res.status(200).json({
    message: 'Success',
    data,
  });
};

export default handler;
