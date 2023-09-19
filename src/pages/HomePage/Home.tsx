import Navbar from "../../components/Navbar";
import "./Home.css";
import Table from "./ProductTable/Table";
import Modals from "../../components/Modal/Modals";

function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-3 custom-margin-left">
        <h1 className="fs-5 text-start">Manage Inventory Items</h1>

        <div className="row g-3 align-items-center">
          {/* Search For Input Field */}
          <div className="col-auto">
            <label htmlFor="inputSearchFor" className="col-form-label">
              Search For
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputSearchFor"
              className="form-control form-control-sm"
              aria-describedby="SearchForInline"
            />
          </div>

          {/* Status Select Field */}
          <div className="col-auto">
            <label htmlFor="selectStatus" className="col-form-label">
              Status
            </label>
          </div>
          <select
            className="form-select form-select-sm"
            aria-label="StatusSelect"
            style={{ width: "auto" }}
          >
            <option selected>Status...</option>
            <option value="1">In Stock</option>
            <option value="2">Out of Stack</option>
            <option value="3">Discontinued</option>
          </select>

          {/* Sort By Select Field */}
          <div className="col-auto">
            <label htmlFor="selectSortBy" className="col-form-label">
              Sort By
            </label>
          </div>
          <select
            className="form-select form-select-sm"
            aria-label="SortBySelect"
            style={{ width: "200px" }}
          >
            <option selected>Name...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          {/* Choose Category Select Field */}
          <div className="col-auto">
            <select
              className="form-select form-select-sm"
              aria-label="ChooseCategorySelect"
              style={{ width: "200px" }}
            >
              <option selected>Choose Category:...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="col-auto">
            <button type="button" className="btn btn-outline-info btn-sm">
              Search
            </button>
          </div>
        </div>

        <Modals />

        <Table />
      </div>
    </>
  );
}

export default Home;
