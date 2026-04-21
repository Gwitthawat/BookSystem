package com.example.booking_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.booking_backend.model.Booking;
import com.example.booking_backend.repository.BookingRepository;

@Service
public class BookingService {
    
    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAll(){
        return bookingRepository.findAll();
    }
    
    public Optional<Booking> findById(Long e){
        return bookingRepository.findById(e);
    }

    public Booking create(Booking e){
        return bookingRepository.save(e);
    }

    public Booking update(Long id, Booking newBooking){
        Booking booking = bookingRepository.findById(id).orElseThrow(() -> new RuntimeException("ไม่พบ ID: "+id));
        booking.setFirstname(newBooking.getFirstname());
        booking.setLastname(newBooking.getLastname());
        booking.setDate(newBooking.getDate());
        return bookingRepository.save(booking);
    }

    public void deleteid(Long id){
        bookingRepository.deleteById(id);
    }
}
