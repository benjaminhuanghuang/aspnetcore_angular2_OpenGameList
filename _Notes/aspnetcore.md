## Support MVC
    PackageReference Include="Microsoft.AspNetCore" Version="1.1.1"
    PackageReference Include="Microsoft.AspNetCore.Mvc" Version="1.1.2"
 
    Startup.cs->ConfigureServices(IServiceCollection services)
        services.AddMvc();   

    Startup.cs->Configure
        app.UseMvcWithDefaultRoute();

## Support static file
    PackageReference Include="Microsoft.AspNetCore.StaticFiles" Version="1.1.1"

    Startup.cs->Configure
        app.UseStaticFiles();

## Connect database
    Startup.cs->ConfigureServices(IServiceCollection services)
        var conn = @"server=127.0.0.1;Database=StartDate;User Id=sa;Password=Ben#1234";
        services.AddDbContext<ApplicationDBContext>(options => options.UseSqlServer(conn));

## Identity
    Startup.cs->ConfigureServices(IServiceCollection services)
        services.AddIdentity<ApplicationUser, IdentityRole>().AddEntityFrameworkStores<ApplicationDBContext>();
      
    Startup.cs->Configure
        app.UseIdentity();
