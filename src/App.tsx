import { ThemeToggle } from "./components/theme-toggle"
import WeatherDashboard  from "./components/weather-dashboard/weather-dashboard";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 flex justify-end">
        <ThemeToggle />
      </header>
      <WeatherDashboard/>
    </div>
  );
}

export default App;
