import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BlogsProvider from "./context/blogs/BlogsProvider";
import { ScrollProvider } from "./context/scroll/ScrollContext";
import Blog from "./pages/Blog";
import Inicio from "./pages/Inicio";
import NuevoBlog from "./pages/NuevoBlog";
import { useUsers } from "./sections/users/useUsers";
import Login from "./pages/Login";

export function App() {
	const users = useUsers();

	return (
		<>
			<Navbar />
			<BlogsProvider>
				<ScrollProvider>
				<main className="container" id="main" style={{paddingTop: "56px"}}>
					<Routes>
					<Route path="/" element={ <Inicio /> } />
					<Route path="/crear-articulo" element={ <NuevoBlog /> } />
					<Route path="/blogs/:id" element={ <Blog /> } />
					<Route path="/login" element={ <Login /> } />
					</Routes>
				</main> 
				</ScrollProvider>
			</BlogsProvider>
				
			<Footer />
		</>
	);
}
