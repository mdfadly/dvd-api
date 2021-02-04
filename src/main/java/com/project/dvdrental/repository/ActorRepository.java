package com.project.dvdrental.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.dvdrental.entity.ActorEntity;

@Repository
public interface ActorRepository extends JpaRepository<ActorEntity, Integer> {

	ActorEntity findByActorId(Integer actor_id);
	List<ActorEntity> findByFirstNameIgnoreCase(String first_name);
	List<ActorEntity> findByLastNameIgnoreCase(String last_name);
	List<ActorEntity> findByLastUpdate(Date last_update);
	List<ActorEntity> findByOrderByActorIdAsc();
	
//	List<ActorEntity> findByFirstNameIgnoreCaseLikeOrLastNameIgnoreCaseLike(String b, String c);
	List<ActorEntity> findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String b, String c);
//	public List<ActorEntity> findByFirst_name(String first_name);
//	public List<ActorEntity> findByLast_name(String last_name);
//	public List<ActorEntity> findByLast_update(Date last_update);
}
