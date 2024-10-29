using System.ComponentModel.DataAnnotations;

namespace SimpleApiDbDotnet.Models;

public class UUIDEntity
{
    [Key]
    public long Id { get; set; }

    [Required]
    public Guid Uuid { get; set; }
}