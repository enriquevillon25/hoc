import "./App.css";

interface PersonInterface {
  name: string;
  muscle: boolean;
  weight: string;
}

const Enrique = ({ name = "Enrique", muscle, weight }: PersonInterface) => {
  return (
    <span style={{ fontWeight: weight }}>{`Hola soy ${name} y ${
      muscle ? "si" : "no"
    } soy musculoso`}</span>
  );
};

const Gym = (WrappedComponent: any) => {
  return (props: any) => {
    return <WrappedComponent {...props} muscle={true} weight={"700"} />;
  };
};

const MuscleEnrique = Gym(Enrique);

function App() {
  return (
    <>
      <h1>Test component</h1>
      <MuscleEnrique />
    </>
  );
}

export default App;
