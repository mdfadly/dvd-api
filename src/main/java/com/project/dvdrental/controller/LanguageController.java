package com.project.dvdrental.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dvdrental.dto.LanguageDto;
import com.project.dvdrental.entity.LanguageEntity;
import com.project.dvdrental.repository.LanguageRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LanguageController {
	
	@Autowired
	LanguageRepository repo;
	
	@GetMapping("/language")
	public ResponseEntity<?> getAll(){
		List<LanguageEntity> languageEntities = repo.findAll();
//		String a = service.getTest();
		return ResponseEntity.ok(languageEntities);
	}
	
	@PostMapping("/language")
	public ResponseEntity<?> postLanguage(@RequestBody LanguageDto dto){
		LanguageEntity languageEntity = new LanguageEntity();
		languageEntity.setName(dto.getName());
		Date date = new Date();
		languageEntity.setLastUpdate(date);
		repo.save(languageEntity);
		return ResponseEntity.ok(languageEntity);
	}
	
	@DeleteMapping("/language/id/{id}")
	public ResponseEntity<?> deleteLanguage(@PathVariable Integer id){
		LanguageEntity languageEntity = repo.findByLanguageId(id);
		repo.delete(languageEntity);
		return ResponseEntity.ok(languageEntity);
	}

}
