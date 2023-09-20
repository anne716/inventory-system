import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

import "./Table.css";

// Define the type for your item object (adjust as needed)
type ItemType = {
  id: number;
  number: number;
  name: string;
  category: string;
  serialNumber: string;
  quantity: string;
  units: string;
  description: string;
};

interface TableProps {
  items: ItemType[];
}

function Table({ items }: TableProps) {
  // Define a state variable to keep track of the selected row or item
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEditClick = (itemId: number) => {
    console.log(`Edit item with ID ${itemId}`);
  };

  const handleDeleteClick = (itemId: number) => {
    console.log(`Delete item with ID ${itemId}`);
  };

  const handleInfoClick = (itemId: number) => {
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
          {items.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.number}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.serialNumber}</td>
              <td>
                <div className="icon-wrapper">
                  <Icon.PencilSquare
                    onClick={() => handleEditClick(item.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="icon-wrapper">
                  <Icon.TrashFill
                    onClick={() => handleDeleteClick(item.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="icon-wrapper">
                  <Icon.InfoCircle
                    onClick={() => handleInfoClick(item.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
