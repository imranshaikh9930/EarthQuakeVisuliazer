import {lazy,Suspense} from "react";
import Loader from "./Components/Loader";
const EarthQuakeComp = lazy(()=>import("./Components/EarthQuakeComp"));


export default function App() {


  return (
    <Suspense fallback={<Loader/>}>
      <EarthQuakeComp/>
    </Suspense>
  );
}
