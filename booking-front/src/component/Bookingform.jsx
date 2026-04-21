import { useState } from "react";

export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [date, setDate] = useState("");
  const [booking, setBooking] = useState([]);
  const [error, setError] = useState("");

  const [fnError, setFnError] = useState("");
  const [lnError, setLnError] = useState("");
  const [dateError, setdateError] = useState("");

  function isFormEmpty() {
    let valid = true
    if (firstname.length === 0) {
      setFnError("FirstName's Empty!!");
      valid = false
    }
    if (lastname.length === 0) {
      setLnError("Lastname's Empty!!");
      valid = false
    }
    if (date.length === 0) {
      setdateError("Enter Date!!");
      valid = false
    }
    return valid
  }

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
            if(!isFormEmpty()) return 
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
              onChange={(e) => {
                setFirstname(e.target.value);
                setFnError("");
              }}
            />
            <input
              className="border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-400"
              placeholder="นามสกุล"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
                setLnError("");
              }}
            />
          </div>

          {(fnError || lnError) && (
            <div className="flex gap-3 w-full ">
              <div className=" flex-1 text-left">
                {fnError && <p className="text-red-500 text-xs ">{fnError}</p>}
              </div>
              <div className=" flex-1 text-right">
                {lnError && <p className="text-red-500 text-xs ">{lnError}</p>}
              </div>
            </div>
          )}

          {/* วันที่ */}
          <input
            className="border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-400"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setdateError("");
            }}
          />
          {dateError && (
            <div>
              <p className="text-red-500">{dateError}</p>
            </div>
          )}

          {/* ปุ่ม Save */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            จองเลย
          </button>
          <h1>รายการจอง</h1>
          <div className="border-2 p-2 rounded-lg border-gray-300">
            {booking.length === 0 ? (
              <div className="flex item-center justify-center">
                <p className="text-gray-400">List's Empty</p>
              </div>
            ) : (
              booking.map((b, i) => (
                <p key={i}>
                  {i + 1}. {b.firstname} {b.lastname} <p></p> Date: {b.date}
                </p>
              ))
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
