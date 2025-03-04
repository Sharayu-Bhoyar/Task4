import axios from "axios";

export default function Checkout({ amount }) {
  const handlePayment = async () => {
    const { data } = await axios.post("http://localhost:5000/checkout", { amount });
    alert(`Payment successful! Transaction ID: ${data.clientSecret}`);
  };

  return <button onClick={handlePayment} className="bg-green-500 text-white px-4 py-2 rounded">Pay Now</button>;
}