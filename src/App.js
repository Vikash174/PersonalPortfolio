import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

function App() {
  const fetchedUrl =
    "https://images.unsplash.com/photo-1647725126395-b5c5eb37d717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&w=1000&q=80";

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/technologies",
          element: <Technologies />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div
      style={{ "--image-url": `url(${fetchedUrl})` }}
      className="bg-[image:var(--image-url)] w-screen h-screen "
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
