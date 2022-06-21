package com.khoapham.service.impl;

import com.khoapham.model.Bus;
import com.khoapham.repository.IBusRepository;
import com.khoapham.service.IBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BusService implements IBusService {
    @Autowired
    private IBusRepository iBusRepository;

    @Override
    public Page<Bus> findAll(String ownerVal, Pageable pageable) {
        return this.iBusRepository.findAllByOwnerContainingAndStatus(ownerVal, true, pageable);
    }

    @Override
    public void save(Bus bus) {
        bus.setStatus(true);
        this.iBusRepository.save(bus);
    }

    @Override
    public Bus findById(int id) {
        return this.iBusRepository.findFirstByIdAndStatus(id, true);
    }

    @Override
    public void remove(Bus bus) {
        bus.setStatus(false);
        this.iBusRepository.save(bus);
    }
}
