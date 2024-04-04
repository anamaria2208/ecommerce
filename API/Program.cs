using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container. (dependency injection container)
if (builder.Environment.IsDevelopment())
{
    string connectionString = builder.Configuration.GetConnectionString("DatabaseDEV");
    builder.Services.AddDbContext<StoreContext>(options => options.UseSqlite(connectionString));
} 
else if (builder.Environment.IsStaging())
{
    string connectionString = builder.Configuration.GetConnectionString("DatabaseTEST");
    builder.Services.AddDbContext<StoreContext>(options => options.UseSqlite(connectionString));
}

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => {
    options.AddPolicy("AllowLocalhost3000",
    builder => {
        builder.WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || app.Environment.IsStaging())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<StoreContext>();
    context.Database.EnsureCreated();
    DbInitializer.Initialize(context);
}

app.UseCors("AllowLocalhost3000");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
