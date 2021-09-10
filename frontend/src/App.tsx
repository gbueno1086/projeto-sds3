
import NavBar from "components/navbar";
import DataTable from "components/datatable";
import Footer from "components/footer";

function App() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <h1 className="text-primary">Content do sistema!</h1>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;

 