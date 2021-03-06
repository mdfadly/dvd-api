package com.project.dvdrental.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.dvdrental.dto.ActorDto;
import com.project.dvdrental.entity.ActorEntity;
import com.project.dvdrental.exception.ResourceNotFoundException;
import com.project.dvdrental.repository.ActorRepository;

@Service
@Transactional
public class ActorServiceImpl implements ActorService {

	@Autowired
	private ActorRepository repo;

	@Override
	public List<ActorEntity> getAll() {
		// TODO Auto-generated method stub
		List<ActorEntity> actorEntities = repo.findByOrderByActorIdAsc();
		return actorEntities;
	}
	
	@Override
	public List<ActorEntity> getSearch(String b, String c) {
		// TODO Auto-generated method stub
		List<ActorEntity> actorEntities = repo.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(b,c);
		return actorEntities;
	}
	
	@Override
	public ActorEntity getByActorId(Integer actor_id) throws ResourceNotFoundException {
		// TODO Auto-generated method stub
		try {
			ActorEntity actorEntity = repo.findByActorId(actor_id);
			return actorEntity;
		} catch (Exception e) {
			// TODO: handle exception
			throw new ResourceNotFoundException("Resource With Actor Id : " + actor_id + " Not Found!");
		}
	}

	@Override
	public List<ActorEntity> getByFirstName(String first_name) {
		// TODO Auto-generated method stub
		List<ActorEntity> actorEntities = repo.findByFirstNameIgnoreCase(first_name);
		return actorEntities;
	}

	@Override
	public List<ActorEntity> getByLastName(String last_name) {
		// TODO Auto-generated method stub
		List<ActorEntity> actorEntities = repo.findByLastNameIgnoreCase(last_name);
		return actorEntities;
	}

	@Override
	public List<ActorEntity> getByLastUpdate(Date date) {
		// TODO Auto-generated method stub
		List<ActorEntity> actorEntities = repo.findByLastUpdate(date);
		return actorEntities;
	}

	@Override
	public ActorEntity postActor(ActorDto dto) {
		// TODO Auto-generated method stub
		ActorEntity actorEntity = new ActorEntity();
		actorEntity.setFirstName(dto.getFirstName());
		actorEntity.setLastName(dto.getLastName());
//		LocalDate myObj = LocalDate.now();
		Date date = new Date();
		actorEntity.setLastUpdate(date);
		repo.save(actorEntity);
		return actorEntity;
	}

	@Override
	public ActorEntity putActor(Integer actor_id, ActorDto dto) {
		// TODO Auto-generated method stub
		ActorEntity actorEntity = repo.findByActorId(actor_id);
		actorEntity.setFirstName(dto.getFirstName());
		actorEntity.setLastName(dto.getLastName());
		repo.save(actorEntity);
		return actorEntity;
	}

	@Override
	public ActorEntity deleteActor(Integer actor_id) {
		// TODO Auto-generated method stub
		ActorEntity actorEntity = repo.findByActorId(actor_id);
		repo.delete(actorEntity);
		return actorEntity;
	}

	


}
