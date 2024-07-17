import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Product from './product';
import Contact from "./contact";
import About from "./About";
import Login from "./login";
import './home.css';
import './layout.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// import './App.css';

// function Data1(){
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(resp => {
//             setData(resp)
//         })
//         .catch(error => {
//             console.log('error fetching data;',error);
//     });
// },[]);
// return (
//     <div className="app">
//         <h1><b>THIS IS A DATA TABLE</b></h1>
//         <table border='1'>
//             <tbody >

//                 <tr >
//                     <td><b>USER NAME</b></td>
//                     <td><b>FULL NAME</b></td>
//                     <td><b>USER EMAIL</b></td>
//                     <td><b>USER ADDRESS</b></td>
//             </tr>
//             {data.map(item => (
//                 <tr key={item.id}>
//                 <td>{item.username}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.address.street}</td>
    
//                 </tr>
//             ))}       
//                  </tbody>
//         </table>
//     </div>
// );
// }
// export default Data1;