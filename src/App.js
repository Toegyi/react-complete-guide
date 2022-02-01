import Expenses from "./components/Expenses";
import Card from "./components/Card";
import TitleHeader from "./components/TitleHeader";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Home Insurance",
      amount: 1500,
      date: new Date(2022, 1, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 1000,
      date: new Date(2022, 2, 21),
    },
    {
      id: "e1",
      title: "Health Insurance",
      amount: 2000,
      date: new Date(2022, 6, 24),
    },
    {
      id: "e1",
      title: "Bike Insurance",
      amount: 300,
      date: new Date(2022, 10, 20),
    },
  ];
  return (
    <Card>
      <TitleHeader className='titleheader_main'>
        <h2>Let's Get Started!</h2>
        <p>This is also visible!</p>
      </TitleHeader>
      <Expenses items={expenses} />
    </Card>
  );
}

export default App;
