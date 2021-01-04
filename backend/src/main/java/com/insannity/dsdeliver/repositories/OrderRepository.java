package com.insannity.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.insannity.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
