package com.example.booking_backend.connfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Corsconfig {

    //ตั้งค่าอนุญาติให้ browser สามารถส่งคำขอได้
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") //ขึ้นต้นด้วย api เพื่อความปลอดภัย ไม่เปิดกว้าง
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET", "POST", "PUT", "DELETE") //อนุญาติให้ใช้
                        .allowedHeaders("*"); //ประเภทข้อมูลที่ใส่ -> อนุญาติประเภททั้งหมด
            }
        };
    }
}