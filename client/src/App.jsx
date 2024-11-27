import { Route, Router, Routes } from "react-router-dom";
import Main from "./Components/Pages/Main/Main";

import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Iphone from "./Components/Pages/Iphone/Iphone";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Mac from "./Components/Pages/Mac/Mac";
import Watch from "./Components/Pages/Watch/Watch";
import Tv from "./Components/Pages/Tv/Tv";
import Music from "./Components/Pages/Music/Music";
import Cart from "./Components/Pages/Cart/Cart";
import Support from "./Components/Pages/Support/Support";
import SingleAppleProduct from "./Components/Pages/SingleAppleProduct/SingleAppleProduct";
import Four04 from "./Components/Pages/Four04/Four04";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:pid" element={<SingleAppleProduct />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Support" element={<Support />} />
      </Route>
      <Route path="*" element={<Four04 />} />
    </Routes>
  );
}

export default App;
