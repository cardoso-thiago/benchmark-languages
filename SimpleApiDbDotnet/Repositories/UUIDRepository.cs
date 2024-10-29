using SimpleApiDbDotnet.Data;
using SimpleApiDbDotnet.Models;

namespace SimpleApiDbDotnet.Repositories;

public class UUIDRepository(AppDbContext context) : IUUIDRepository
{
    public async Task<UUIDEntity> SaveAsync(UUIDEntity uuidEntity)
    {
        await context.UUIDEntities.AddAsync(uuidEntity);
        await context.SaveChangesAsync();
        return uuidEntity;
    }

    public async Task<UUIDEntity> GetByIdAsync(long id)
    {
        return await context.UUIDEntities.FindAsync(id) ?? throw new InvalidOperationException();
    }
}