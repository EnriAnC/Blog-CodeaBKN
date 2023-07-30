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
import { AuthProvider } from "./context/auth/AuthContext";

export function App() {
	const users = useUsers();

	return (
		<div className="bg3-circles">
			<Navbar />
			<AuthProvider>
				<BlogsProvider>
					<ScrollProvider>
						{/* <div className="bg-custom-blur fixed-top navbar" style={{viewTransitionName:"bg-color", zIndex:"-1"}} ></div> */}
						<main className="min-vh-100 d-grid" 
						id="main" style={{paddingTop: "56px", viewTransitionName:"main-container"}}>
							<Routes>
								<Route path="/" element={ <Inicio /> } />
								<Route path="/crear-articulo" element={ <NuevoBlog /> } />
								<Route path="/blogs/:id" element={ <Blog /> } />
								<Route path="/login" element={ <Login /> } />
							</Routes>
						</main> 
					</ScrollProvider>
				</BlogsProvider>
			</AuthProvider>	
				
			<Footer />
		</div>
	);
}
