import "./App.css";
import EmojiCard from "./EmojiCard";
import emojis from "./Emojis";

function App() {
	return (
		<div className="App">
			{emojis.map((element) => (
				<EmojiCard {...element} />
			))}
		</div>
	);
}

export default App;
