import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  //Verificar y extraer los datos

  if (req.method === 'POST') {
    console.log(req.method);
    const email = req.body.email;
    const feedbackText = req.body.text;
    console.log(email);
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    //Almacenar eso en database o en archivo
    //Creara un camino
    /* const filePath = path.join(process.cwd(), "data", "feedback.json");
    //Leer el archivo
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {s
    const filePath = buildFeedbackPath();
    res.status(200).json({ message: "This worksss!" });
  } */

    //store in a database or in a file
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFile(filePath, JSON.stringify(data));
    res.status(2021).json({ message: 'Succes!', feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    //res.status(200).json({ message: 'This works!' });
    //Imprime JSON en pantalla
    //nombre de archivo
    res.status(200).json({ feedback: data });
  }
}

export default handler;
