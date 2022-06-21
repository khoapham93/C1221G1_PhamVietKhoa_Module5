package com.khoapham.repository;

import com.khoapham.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBusRepository extends JpaRepository<Bus, Integer> {
}
