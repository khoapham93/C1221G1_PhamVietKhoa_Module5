package com.khoapham.service.impl;

import com.khoapham.model.Location;
import com.khoapham.repository.ILocationRepository;
import com.khoapham.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService implements ILocationService {
    @Autowired
    private ILocationRepository iLocationRepository;

    @Override
    public List<Location> findALl() {
        return this.iLocationRepository.findAll();
    }
}
