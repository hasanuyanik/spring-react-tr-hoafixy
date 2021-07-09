package com.hoaxify.ws.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.shared.Views;

import lombok.Data;

@Data
@Entity
public class User {
	@Id
	@GeneratedValue
	private long id;
	
	@NotNull(message = "{hoaxify.constraints.username.NotNull.message}")
	@Size(min = 4, max = 255)
	@UniqueUsername(message = "{hoaxify.constraints.username.UniqueUsername.message}")
	@JsonView(Views.Base.class)
	private String username;
	
	@NotNull
	@Size(min = 4, max = 255)
	@JsonView(Views.Base.class)
	private String displayName;
	
	@Size(min = 8, max = 255)
	@NotNull
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{hoaxify.constraints.password.Pattern.message}")
	private String password;
	
	@JsonView(Views.Base.class)
	private String image;
	
}
