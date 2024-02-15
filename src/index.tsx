import { render } from "react-dom";
import Counter from "./components/Counter";

render(
    <div>
        Hello! React!
        <Counter/>
    </div>,
    document.getElementById('root')
);