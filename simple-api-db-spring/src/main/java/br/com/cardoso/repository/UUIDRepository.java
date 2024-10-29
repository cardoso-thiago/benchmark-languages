package br.com.cardoso.repository;

import br.com.cardoso.model.UUIDEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UUIDRepository extends JpaRepository<UUIDEntity, Long> {
}