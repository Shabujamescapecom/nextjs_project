import { useState } from "react";
import styles from "./Register.module.css";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startInput: "",
    endInput: "",
    occasionType: "",
    minimumBudget: "",
    maxBudget: "",
    city: "",
    additional: "",
  });
  const [message, setMessage] = useState("");
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.success) {
        setMessage("Registration successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          startInput: "",
          endInput: "",
          occasionType: "",
          minimumBudget: "",
          maxBudget: "",
          city: "",
          additional: "",
        });
      } else {
        setMessage("Registration failed: " + data.message);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingDiv}>
        <p className={styles.heading}>Just give us the details and</p>
        <p className={styles.heading}>
          <span>relax ,</span> Let us do the <span>heavy work</span>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.gridContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Jonny Doey"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="email@iktaraa.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="+91 9090909090"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Date Range</label>
            <div className={styles.dateRangeContainer}>
              <div className={styles.startDateDive}>
                <input
                  type="text"
                  name="startInput"
                  value={formData.startInput}
                  onChange={handleChange}
                  className={styles.startInput}
                  placeholder="18 Oct 2023"
                />
              </div>
              <span className={styles.separator}>:</span>
              <div className={styles.endDateDive}>
                <input
                  type="text"
                  name="endInput"
                  value={formData.endInput}
                  onChange={handleChange}
                  className={styles.endInput}
                  placeholder="19 Oct 2023"
                />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Occasion Type</label>
            <select
              name="occasionType"
              value={formData.occasionType}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="">Select Occasion Type</option>
              <option value="birthday">Birthday</option>
              <option value="wedding">Wedding</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Minimum Budget</label>
            <select
              name="minimumBudget"
              value={formData.minimumBudget}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="">Select Minimum Budget</option>
              <option value="1000">₹1000</option>
              <option value="5000">₹5000</option>
              <option value="10000">₹10000</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Maximum Budget</label>
            <select
              name="maxBudget"
              value={formData.maxBudget}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="">Select Maximum Budget</option>
              <option value="5000">₹5000</option>
              <option value="10000">₹10000</option>
              <option value="20000">₹20000</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Additional Information</label>
          <textarea
            name="additional"
            value={formData.additional}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="please mention your requrierments"
          />
        </div>
        <div className={styles.butDiv}>
          <button type="submit" className={styles.button}>
            <div className={styles.iconDiv}>
              <MdOutlineSubdirectoryArrowLeft />
            </div>
            Submit
          </button>
        </div>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
}
