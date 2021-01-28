package com.project.dvdrental.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.dvdrental.entity.FilmEntity;

@Repository
public interface FilmRepository extends JpaRepository<FilmEntity, Integer> {
	
	List<FilmEntity> findByOrderByFilmIdAsc();
	List<FilmEntity> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String title, String description);
	FilmEntity findByFilmId(Integer filmId);

}
