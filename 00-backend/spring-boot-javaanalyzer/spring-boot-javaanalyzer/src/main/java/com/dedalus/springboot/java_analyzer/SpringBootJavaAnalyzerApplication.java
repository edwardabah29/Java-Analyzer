package com.dedalus.springboot.java_analyzer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class SpringBootJavaAnalyzerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJavaAnalyzerApplication.class, args);
	}
	
}
