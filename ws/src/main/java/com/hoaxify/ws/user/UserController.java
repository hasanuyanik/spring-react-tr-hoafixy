package com.hoaxify.ws.user;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.shared.GenericResponse;
import com.hoaxify.ws.shared.Views;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/api/1.0/users")
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@Valid @RequestBody User user) {
		userService.save(user);
		return new GenericResponse("User Created");
	}
	
	@GetMapping("/api/1.0/users")
	@JsonView(Views.Base.class)
	List<User> getUsers(){
		return userService.getUsers();
	}
	
	
}