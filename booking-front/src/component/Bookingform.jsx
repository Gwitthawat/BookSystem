import { useState, useEffect } from "react";

export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [date, setDate] = useState("");
  const [booking, setBooking] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [fnError, setFnError] = useState("");
  const [lnError, setLnError] = useState("");
  const [dateError, setdateError] = useState("");

  const url = 'http://localhost:8080/api/bookings'

  //ใช้ตรวจสอบ โหลดข้อมูลเมื่อโหลดหน้า url ขึ้นมา
useEffect(() => {
    fetch(url)
    .then(res => {
        if (!res.ok) throw new Error('เชื่อมต่อ server ไม่ได้');
        return res.json();
    })
    .then(data => {
        setBooking(data);
        setLoading(false);
    })
    .catch(err => {
        setError(err.message);
        setLoading(false);
    })
}, [])

// ส่งข้อมูลที่กรอกจากหน้าเว็บไปยังหลังบ้าน
function handleSubmit(e) {
    e.preventDefault()
    if (!isFormEmpty()) return

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, //ให้ส่งข้อมูลไปรูปแบบ json
        body: JSON.stringify({ firstname, lastname, date })
    })
    .then(res => res.json())
    .then(json => {
        setBooking([...booking, json])
        setFirstname('')
        setLastname('')
        setDate('')
    })
}
//ตรวจสอบช่องฟอร์ม ข้อมูลถูกต้องหรือไม่
  function isFormEmpty() {
    let valid = true;
    if (firstname.length === 0) {
      setFnError("FirstName's Empty!!");
      valid = false;
    }
    if (lastname.length === 0) {
      setLnError("Lastname's Empty!!");
      valid = false;
    }
    if (date.length === 0) {
      setdateError("Enter Date!!");
      valid = false;
    }
    return valid;
  }
//------------ คำสั่ง js รวมอยู่ใน front เพราะใช้แค่รอบเดียวในหน้าเดียวไม่มีการใช้ซ้ำ


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          ระบบจองวัน
        </h1>

        <form
          onSubmit={handleSubmit}
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
            {loading ? (
              <div className="flex item-center justify-center">
                <p className="text-gray-400">กำลังโหลด...</p>
              </div>
            ) : error ? (
              <div className="flex item-center justify-center">
                <p className="text-red-500">{error}</p>
              </div>
            ) : booking.length === 0 ? (
              <div className="flex item-center justify-center">
                <p className="text-gray-400">List's Empty</p>
              </div>
            ) : (
              booking.map((b, i) => (
                <div key={i}>
                  <p>{i + 1}. {b.firstname} {b.lastname}</p>
                  <p>Date: {b.date}</p>
                </div>
              ))
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
