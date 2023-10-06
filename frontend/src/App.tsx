import ResponsiveAppBar from './components/ResponsiveAppBar';
import ClassCard from './components/ClassCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
        <ClassCard
            title="Class A"
            description="CLASS A description, lorem ipsum, hello world."
            link="Enter"
            image="Hi"
        />
      </header>
    </div>
  );
}

export default App;
