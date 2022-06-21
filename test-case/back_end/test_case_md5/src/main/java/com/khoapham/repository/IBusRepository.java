package com.khoapham.repository;

import com.khoapham.model.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBusRepository extends JpaRepository<Bus, Integer> {
    Page<Bus> findAllByOwnerContainingAndStatus(String owner, Boolean status, Pageable pageable);

    Bus findFirstByIdAndStatus(Integer id, Boolean status);
}
