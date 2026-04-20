import { useState } from "react";

export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [date, setDate] = useState("");
  const [booking, setBooking] = useState([]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          ระบบจองวัน
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setBooking([...booking, { firstname, lastname, date }]);
            setFirstname("");
            setLastname("");
            setDate("");
          }}
          className="flex flex-col gap-4"
        >
          {/* ชื่อ - นามสกุล */}
          <div className="flex gap-3">
            <input
              className="border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-400"
              placeholder="ชื่อ"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-400"
              placeholder="นามสกุล"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          {/* วันที่ */}
          <input
            className="border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-400"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* ปุ่ม Save */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            จองเลย
          </button>
          <h1>รายการจอง</h1>
          {booking.map((b,i) => (
            <p key={i}>{b.firstname} {b.lastname} {b.date}</p>
          ))}
        </form>
      </div>
    </div>
  );
}
