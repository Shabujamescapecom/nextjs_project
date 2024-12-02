import dbConnect from "@/dataBase/connection/dbConnect";
import RegisterData from "@/dataBase/schema/dataSchema";

export default async function handler(req, res) {
  await dbConnect();
    if (req.method === 'POST') {
      const { 
        name,
        email,
        phone,
        startInput,
        endInput,
        occasionType,
        minimumBudget,
        maxBudget,
        city,
        additional} = req.body;
  
      // Basic validation
      if (!name || !email || !phone || !startInput || !endInput || !occasionType || !minimumBudget || !maxBudget || !city || ! additional) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }

      const registerData = new RegisterData({
        name,
        email,
        phone,
        startInput,
        endInput,
        occasionType,
        minimumBudget,
        maxBudget,
        city,
        additional,
      })
      await registerData.save();
  
      return res.status(200).json({ success: true, message: 'User registered successfully' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  