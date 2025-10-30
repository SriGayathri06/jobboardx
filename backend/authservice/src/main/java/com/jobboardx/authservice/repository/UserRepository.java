package com.jobboardx.authservice.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.jobboardx.authservice.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}
