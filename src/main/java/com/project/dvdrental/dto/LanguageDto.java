package com.project.dvdrental.dto;

import java.util.Date;

public class LanguageDto {
	private String name;
	private Date lastUpdate;
	public LanguageDto() {
		super();
	}
	public LanguageDto(String name, Date lastUpdate) {
		super();
		this.name = name;
		this.lastUpdate = lastUpdate;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getLastUpdate() {
		return lastUpdate;
	}
	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}
	
	
}
