// to get our very basic react app setup, we need to do 2 things.
import { createRoot } from "react-dom/client"
// 1. Create a root
const root = createRoot(document.querySelector("#root"))
// 2. Render some markup to the root
root.render(<h1>Hello World</h1>)