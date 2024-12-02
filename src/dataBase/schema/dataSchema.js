const { default: mongoose } = require("mongoose");

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    startInput: { type: String },
    endInput: { type: String },
    occasionType: { type: String },
    minimumBudget: { type: String },
    maxBudget: { type: String },
    city: { type: String },
    additional: { type: String }
  },{collection:"register_data"});
  
  const RegisterData = mongoose.models.RegisterData || mongoose.model ('RegisterData', registerSchema);

  export default RegisterData;