package com.project.dvdrental.converter;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

import javax.persistence.AttributeConverter;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.type.EnumType;

import com.project.dvdrental.entity.Mpaa_rating;

public class EnumTypePostgreSql extends EnumType implements AttributeConverter<Mpaa_rating,String>{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Override
	public String convertToDatabaseColumn(Mpaa_rating attribute) {
		// TODO Auto-generated method stub
		if (attribute == null)
            return null;
 
        switch (attribute) {
        case G:
            return "G";
        case PG:
            return "PG";
        case PG13:
            return "PG-13";
        case R:
            return "R";
        case NC17:
            return "NC-17";
        default:
            throw new IllegalArgumentException(attribute + " not supported.");
        }
	}

	@Override
	public Mpaa_rating convertToEntityAttribute(String dbData) {
		// TODO Auto-generated method stub
		if (dbData == null)
            return null;
        switch (dbData) {
        case "G":
            return Mpaa_rating.G;
        case "PG":
            return Mpaa_rating.PG;
        case "PG-13":
            return Mpaa_rating.PG13;
        case "R":
            return Mpaa_rating.R;
        case "NC-17":
            return Mpaa_rating.NC17;
        default:
            throw new IllegalArgumentException(dbData + " not supported.");
        }
	}
	
	@Override
    public void nullSafeSet(PreparedStatement st, Object value, int index,
            SharedSessionContractImplementor session)
            throws HibernateException, SQLException {
        if(value == null) {
            st.setNull( index, Types.OTHER );
        }
        else {
            st.setObject( index, value.toString(), Types.OTHER );
        }
    }
}
