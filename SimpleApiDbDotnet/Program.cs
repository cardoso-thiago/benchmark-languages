using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using SimpleApiDbDotnet.Data;
using SimpleApiDbDotnet.Repositories;
using SimpleApiDbDotnet.Services;

var stopwatch = Stopwatch.StartNew();
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("PostgresConnection"))
);

builder.Services.AddScoped<IUUIDRepository, UUIDRepository>();
builder.Services.AddScoped<IHelloService, HelloService>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.EnsureCreated();
}

app.MapGet("/hello", async (IHelloService helloService) =>
{
    var result = await helloService.Save();
    return Results.Ok(result);
});

var processId = Environment.ProcessId;
app.Logger.LogInformation($"PID da aplicação em execução: {processId}");
stopwatch.Stop();
app.Logger.LogInformation($"Application started in {stopwatch.ElapsedMilliseconds} ms");
app.Run();