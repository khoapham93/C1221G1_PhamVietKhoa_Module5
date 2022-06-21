package com.khoapham.controller;

import com.khoapham.model.Location;
import com.khoapham.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("**")
@RestController
@RequestMapping("locations")
public class LocationController {
    @Autowired
    private ILocationService iLocationService;

    @GetMapping("")
    public ResponseEntity<List<Location>> getAll() {
        List<Location> locations = this.iLocationService.findALl();
        return new ResponseEntity<>(locations, HttpStatus.OK);
    }
}
