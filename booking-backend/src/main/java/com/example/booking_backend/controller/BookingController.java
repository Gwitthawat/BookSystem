package com.example.booking_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.booking_backend.model.Booking;
import com.example.booking_backend.service.BookingService;

//สร้าง API ให้ทางฝั่งของ front สามารถเชื่อมกับฝั่งของ back ได้
@RestController
@RequestMapping("api/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @GetMapping
    public List<Booking> getAll(){
        return bookingService.getAll();
    }

    @PostMapping
    public Booking create(@RequestBody Booking booking){
        return bookingService.create(booking);
    }

    @PutMapping("/{id}")
    public Booking update(@PathVariable Long id,@RequestBody Booking booking){
        return bookingService.update(id, booking);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        bookingService.deleteid(id);
    }
}
