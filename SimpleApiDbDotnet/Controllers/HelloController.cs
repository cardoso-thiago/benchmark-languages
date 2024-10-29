using Microsoft.AspNetCore.Mvc;
using SimpleApiDbDotnet.Services;

namespace SimpleApiDbDotnet.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
    private readonly IHelloService _helloService;

    public HelloController(IHelloService helloService)
    {
        _helloService = helloService;
    }

    [HttpGet]
    public async Task<IActionResult> GetHello()
    {
        var result = await _helloService.Save();
        return Ok(result);
    }
}