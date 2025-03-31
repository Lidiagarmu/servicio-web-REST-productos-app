package com.example.demo;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;


import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "API de Productos",
                description = "API para gestionar productos en una tienda",
                version = "v1.0"
        )
)
public class SwaggerConfig {
    // Esta clase configura el título, descripción y versión de tu API
}
