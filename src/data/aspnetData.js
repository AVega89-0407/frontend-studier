export const razorSyntax = [
  {
    label: 'Visa en modell-property',
    code: `@Model.Title
@Model.CreatedAt.ToString("yyyy-MM-dd")`,
  },
  {
    label: '@if / @else',
    code: `@if (Model.IsPublished)
{
    <p>Publicerad</p>
}
else
{
    <p class="text-muted">Ej publicerad</p>
}`,
  },
  {
    label: '@foreach',
    code: `@foreach (var item in Model.Items)
{
    <div class="card mb-2">
        <div class="card-body">@item.Name</div>
    </div>
}`,
  },
  {
    label: 'Formulär med tag helpers',
    code: `<form method="post">
    <label asp-for="Movie.Title"></label>
    <input asp-for="Movie.Title" class="form-control" />
    <span asp-validation-for="Movie.Title" class="text-danger"></span>
    <button type="submit" class="btn btn-primary">Spara</button>
</form>`,
  },
  {
    label: 'Länk med asp-page',
    code: `<a asp-page="/Movies/Edit" asp-route-id="@item.Id">Redigera</a>
<a asp-page="/Movies/Details" asp-route-id="@item.Id">Detaljer</a>`,
  },
  {
    label: '@Html.DisplayNameFor',
    code: `<th>@Html.DisplayNameFor(model => model.Movie.Title)</th>
<td>@Html.DisplayFor(modelItem => item.Title)</td>`,
  },
  {
    label: 'Partial view',
    code: `<partial name="_MovieCard" model="Model.Movie" />`,
  },
  {
    label: 'ViewData / ViewBag',
    code: `@* I .cshtml *@
@{
    ViewData["Title"] = "Mina filmer";
}

@* I _Layout.cshtml *@
<title>@ViewData["Title"]</title>`,
  },
]

export const csharpPatterns = [
  {
    label: 'Klass med properties',
    code: `public class Movie
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Genre { get; set; }  // nullable
    public decimal Price { get; set; }
    public DateTime ReleaseDate { get; set; }
}`,
  },
  {
    label: 'PageModel (Razor Pages)',
    code: `public class IndexModel : PageModel
{
    private readonly AppDbContext _context;

    public IndexModel(AppDbContext context)
    {
        _context = context;
    }

    public IList<Movie> Movies { get; set; } = new List<Movie>();

    public async Task OnGetAsync()
    {
        Movies = await _context.Movies.ToListAsync();
    }
}`,
  },
  {
    label: '[BindProperty]',
    code: `[BindProperty]
public Movie Movie { get; set; } = default!;

public async Task<IActionResult> OnPostAsync()
{
    if (!ModelState.IsValid)
        return Page();

    _context.Movies.Add(Movie);
    await _context.SaveChangesAsync();
    return RedirectToPage("./Index");
}`,
  },
  {
    label: 'LINQ — filtrera och sortera',
    code: `// Filtrera
var action = movies.Where(m => m.Genre == "Action").ToList();

// Sortera
var sorted = movies.OrderBy(m => m.Title).ToList();

// Första matchning
var movie = movies.FirstOrDefault(m => m.Id == id);

// Välj specifika fält
var titles = movies.Select(m => m.Title).ToList();

// Kombinera
var result = movies
    .Where(m => m.Price < 100)
    .OrderByDescending(m => m.ReleaseDate)
    .Take(5)
    .ToList();`,
  },
  {
    label: 'Null-hantering',
    code: `// Null-conditional operator
string? namn = user?.Name;

// Null-coalescing
string visningsnamn = user?.Name ?? "Anonym";

// Null-coalescing assignment
user.Bio ??= "Ingen beskrivning ännu.";`,
  },
  {
    label: 'String interpolation',
    code: `string namn = "Anna";
int ålder = 30;

string meddelande = $"Hej {namn}, du är {ålder} år!";
string datum = $"Idag är det {DateTime.Now:yyyy-MM-dd}";`,
  },
]

export const efCommands = [
  {
    category: 'Migrations',
    commands: [
      { cmd: 'dotnet ef migrations add InitialCreate', desc: 'Skapa första migrationen' },
      { cmd: 'dotnet ef migrations add <Namn>', desc: 'Skapa ny migration' },
      { cmd: 'dotnet ef database update', desc: 'Applicera migrationerna på databasen' },
      { cmd: 'dotnet ef migrations remove', desc: 'Ta bort senaste migrationen' },
      { cmd: 'dotnet ef migrations list', desc: 'Lista alla migrationerna' },
      { cmd: 'dotnet ef database drop', desc: 'Ta bort hela databasen' },
    ],
  },
  {
    category: 'DbContext-mönster',
    commands: [
      { cmd: '_context.Movies.ToListAsync()', desc: 'Hämta alla rader' },
      { cmd: '_context.Movies.FindAsync(id)', desc: 'Hämta via primärnyckel' },
      { cmd: '_context.Movies.FirstOrDefaultAsync(m => m.Title == title)', desc: 'Hämta med villkor' },
      { cmd: '_context.Movies.Add(movie)', desc: 'Lägg till ny rad (ej sparat än)' },
      { cmd: '_context.Movies.Remove(movie)', desc: 'Markera för borttagning' },
      { cmd: 'await _context.SaveChangesAsync()', desc: 'Spara alla ändringar till databasen' },
    ],
  },
]

export const dotnetCli = [
  {
    category: 'Projekt',
    commands: [
      { cmd: 'dotnet new webapp -o MittProjekt', desc: 'Skapa nytt Razor Pages-projekt' },
      { cmd: 'dotnet new webapi -o MittApi', desc: 'Skapa nytt Web API-projekt' },
      { cmd: 'dotnet run', desc: 'Starta applikationen' },
      { cmd: 'dotnet watch run', desc: 'Starta med hot reload' },
      { cmd: 'dotnet build', desc: 'Bygg projektet' },
      { cmd: 'dotnet publish', desc: 'Publicera för produktion' },
    ],
  },
  {
    category: 'Paket (NuGet)',
    commands: [
      { cmd: 'dotnet add package Microsoft.EntityFrameworkCore.Sqlite', desc: 'Lägg till SQLite-stöd' },
      { cmd: 'dotnet add package Microsoft.EntityFrameworkCore.Tools', desc: 'Lägg till EF-verktyg' },
      { cmd: 'dotnet list package', desc: 'Lista installerade paket' },
      { cmd: 'dotnet remove package <Namn>', desc: 'Ta bort ett paket' },
    ],
  },
]