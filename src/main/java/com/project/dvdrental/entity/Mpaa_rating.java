package com.project.dvdrental.entity;

public enum Mpaa_rating {
	
	G("G"),
    PG("PG"),
    PG13("PG-13"),
    R("R"),
    NC17("NC-17");
	private String displayName;

	Mpaa_rating(String displayName) {
        this.displayName = displayName;
    }

    public String displayName() { return displayName; }

    // Optionally and/or additionally, toString.
    @Override public String toString() { return displayName; }
}
