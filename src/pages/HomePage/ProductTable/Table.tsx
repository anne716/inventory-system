import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

import "./Table.css";

function Table() {
  // Define a state variable to keep track of the selected row or item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle edit icon click
  const handleEditClick = (itemId: number) => {
    // Perform action related to editing the item with itemId
    console.log(`Edit item with ID ${itemId}`);
  };

  // Function to handle delete icon click
  const handleDeleteClick = (itemId: number) => {
    // Perform action related to deleting the item with itemId
    console.log(`Delete item with ID ${itemId}`);
  };

  // Function to handle info icon click
  const handleInfoClick = (itemId: number) => {
    // Perform action related to showing info about the item with itemId
    console.log(`Show info for item with ID ${itemId}`);
  };

  return (
    <div className="table-responsive">
      <table className="table table-sm table-bordered table-hover">
        <thead>
          <tr className="table-secondary">
            <th scope="col">ID #:</th>
            <th scope="col">Number:</th>
            <th scope="col">Name:</th>
            <th scope="col">Category:</th>
            <th scope="col">Serial #:</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>Apple Macbook Pro 13"</td>
            <td>Laptop</td>
            <td>123456789</td>
            <td>
              <div className="icon-wrapper">
                <Icon.PencilSquare
                  onClick={() => handleEditClick(1)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="icon-wrapper">
                <Icon.TrashFill
                  onClick={() => handleDeleteClick(1)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="icon-wrapper">
                <Icon.InfoCircle
                  onClick={() => handleInfoClick(1)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2</td>
            <td>Hewlett Packard 15.6"</td>
            <td>Laptop</td>
            <td>646874827487</td>
            <td>
              <div className="icon-wrapper">
                <Icon.PencilSquare
                  onClick={() => handleEditClick(2)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="icon-wrapper">
                <Icon.TrashFill
                  onClick={() => handleDeleteClick(2)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="icon-wrapper">
                <Icon.InfoCircle
                  onClick={() => handleInfoClick(2)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>3</td>
            <td>iPad 32GB w/Retina</td>
            <td>Tablet</td>
            <td>382557836</td>
            <td>
              <div className="icon-wrapper">
                <Icon.PencilSquare
                  onClick={() => handleEditClick(3)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="icon-wrapper">
                <Icon.TrashFill
                  onClick={() => handleDeleteClick(3)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="icon-wrapper">
                <Icon.InfoCircle
                  onClick={() => handleInfoClick(3)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>4</td>
            <td>Samsung Galaxy Tab E Lite</td>
            <td>Tablet</td>
            <td>3761846472</td>
            <td>
              <div className="icon-wrapper">
                <Icon.PencilSquare
                  onClick={() => handleEditClick(4)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="icon-wrapper">
                <Icon.TrashFill
                  onClick={() => handleDeleteClick(4)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="icon-wrapper">
                <Icon.InfoCircle
                  onClick={() => handleInfoClick(4)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
