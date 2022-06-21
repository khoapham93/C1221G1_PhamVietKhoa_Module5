package com.khoapham.controller;

import com.khoapham.model.Bus;
import com.khoapham.service.IBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("**")
@RestController
@RequestMapping("buses")
public class BusController {
    @Autowired
    private IBusService iBusService;

    @GetMapping("")
    public ResponseEntity<Page<Bus>> getALl(@RequestParam Optional<String> owner,
                                            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "3") int size) {
        String ownerVal = owner.orElse("");
        Pageable pageable = PageRequest.of(page, size);
        Page<Bus> buses = this.iBusService.findAll(ownerVal, pageable);
        return new ResponseEntity<>(buses, HttpStatus.OK);

    }

    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody Bus bus) {
        this.iBusService.save(bus);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> finById(@PathVariable int id) {

        Bus bus = this.iBusService.findById(id);
        return new ResponseEntity<>(bus, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        Bus bus = this.iBusService.findById(id);
        this.iBusService.remove(bus);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Bus bus) {
        iBusService.save(bus);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
