import Data from "./meusComponentes/Data";

function App() {
  return (
    <div className="App">
        <Data texto="Data e hora atuais: " timeZone="-3.00"/>
        <Data texto="Data e hora em Londres: " timeZone="1.00"/>
        <Data texto="Data e hora em Nova York:" timeZone="-4.00"/>
    </div>
  );
}

export default App;
