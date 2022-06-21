package com.khoapham.service;

import com.khoapham.model.Location;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ILocationService {

    List<Location> findALl();
}
