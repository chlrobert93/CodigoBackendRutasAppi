import fs from "fs";
import path from "path";

function handler(req, res) {
  //Verificar y extraer los datos
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;

    const newFeedback = {
      id: new Date.toString(),
      email: email,
      text: feedback,
    };

    //Almacenar eso en database o en archivo

    //Creara un camino
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    //Leer el archivo
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "This works!" });
  }

  res.status(200).json({ message: "This works" });
}

export default handler;
