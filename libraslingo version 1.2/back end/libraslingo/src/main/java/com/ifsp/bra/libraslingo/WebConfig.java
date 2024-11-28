package com.ifsp.bra.libraslingo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permite requisições de qualquer origem (completo para desenvolvimento)
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173") // Permite apenas o localhost:5173
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos permitidos
                .allowedHeaders("*"); // Permite todos os headers
    }
}
