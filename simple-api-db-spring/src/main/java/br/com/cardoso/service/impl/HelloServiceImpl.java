package br.com.cardoso.service.impl;

import br.com.cardoso.model.UUIDEntity;
import br.com.cardoso.repository.UUIDRepository;
import br.com.cardoso.service.HelloService;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class HelloServiceImpl implements HelloService {

    private final UUIDRepository uuidRepository;

    public HelloServiceImpl(UUIDRepository uuidRepository) {
        this.uuidRepository = uuidRepository;
    }

    @Override
    public String save() {
        UUID uuid = UUID.randomUUID();
        UUIDEntity uuidEntity = new UUIDEntity();
        uuidEntity.setUuid(uuid);
        uuidEntity = uuidRepository.save(uuidEntity);
        return uuidRepository.findById(uuidEntity.getId())
                .map(UUIDEntity::getUuid)
                .map(UUID::toString)
                .orElseThrow(() -> new RuntimeException("UUID not found"));
    }
}
