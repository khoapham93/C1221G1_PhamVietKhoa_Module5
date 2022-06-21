package com.khoapham.service;

import com.khoapham.model.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBusService {
    Page<Bus> findAll(String ownerVal,  Pageable pageable);

    void save(Bus bus);

    Bus findById(int id);

    void remove(Bus bus);
}
