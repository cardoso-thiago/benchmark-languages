using SimpleApiDbDotnet.Models;
using SimpleApiDbDotnet.Repositories;

namespace SimpleApiDbDotnet.Services;

public class HelloService(IUUIDRepository uuidRepository) : IHelloService
{
    public async Task<string> Save()
    {
        var uuidEntity = new UUIDEntity
        {
            Uuid = Guid.NewGuid()
        };

        var savedEntity = await uuidRepository.SaveAsync(uuidEntity);
        var retrievedEntity = await uuidRepository.GetByIdAsync(savedEntity.Id);
        return retrievedEntity.Uuid.ToString();
    }
}