package com.neosoft.main.service;

import java.util.List;

import com.neosoft.main.entity.User;
import com.neosoft.main.response.CustomResponse;

public interface UserService {
	
	public CustomResponse saveUser(User user);
	public User editUser(User userDetails, Long id);
	public List<User> findUserByName(String name);
	public List<User> findUserBySurname(String surname);
	public List<User> findUserByPin(long pin);
	public List<User> findAllUser();
	public void softDeleteUserById(Long id);
	public void hardDeleteUserById(Long id);
	public User findOne(long id);

}
