import React from "react";
import { Navbar } from "../src/components/Navbar/Navbar";
// import { Carousel } from "../src/components/Carrousel/Carousel";
// import { Images } from "../src/components/Imagenes/Images";
// import Footer from "../src/components/Footer/Footer";
import "./App.css"
export const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          {
            user ? (
              <Route path="/" element={<PrivateRoutes />} />
            ) : (
              <Route path="/" element={<PublicRoutes />} />
            )
          }
        </Routes>
        </UserContext.Provider>
    </>
  )
        }
export default App;


