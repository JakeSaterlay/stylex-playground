import * as stylex from "@stylexjs/stylex";
const colorStyles = stylex.create({
  red: {
    color: "red",
    backgroundColor: "blue",
  },
  green: {
    backgroundColor: "lightgreen",
    borderColor: "darkgreen",
  },
});
function App() {
  return (
    <>
      <div {...stylex.props(colorStyles.red)}>Boop</div>
    </>
  );
}

export default App;
