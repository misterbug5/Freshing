import { createRoot } from "react-dom/client";
import Toggle from "./components/button.tsx";
import HelloWorld from "./components/hello_world.tsx";

const SELECTOR = "#root"

const root = document.querySelector(SELECTOR)
if (root === null) {
    throw new Error("Selector " + SELECTOR + " not found")
}
const reactRoot = createRoot(root)

reactRoot.render(
    <>
    <HelloWorld/>
    <Toggle/>
    </>
)
