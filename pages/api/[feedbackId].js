import { buildFeedbackPath, extractFeedback } from './feedback';
//Para saber que valor concreto se codificó en la URL req, res
function handler(req, res) {
    //Recuperar los datos para un comentario específico
    //body para acceder a los datos enviados
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const feedbackData = extractFeedback(filePath);
    const selectedFeedback = feedbackData.find(feedback =>  feedback.id === feedbackId);
    res.status(200).json({ feedback: selectedFeedback });

   

}

export default handler;