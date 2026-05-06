package com.example.booking_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.booking_backend.model.Booking;

//ประกาศเรียกใช้คำสั่ง SQL โดยที่ไม่ต้องเขียนขี้นมาเอง
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

}
