package com.khoapham.repository;

import com.khoapham.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILocationRepository extends JpaRepository<Location, Integer> {

}
