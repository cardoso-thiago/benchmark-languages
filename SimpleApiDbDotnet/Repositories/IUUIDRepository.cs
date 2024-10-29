using SimpleApiDbDotnet.Models;

namespace SimpleApiDbDotnet.Repositories;

public interface IUUIDRepository
{
    Task<UUIDEntity> SaveAsync(UUIDEntity uuidEntity);
    Task<UUIDEntity> GetByIdAsync(long id);
}