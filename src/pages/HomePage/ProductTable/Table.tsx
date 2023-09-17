import * as Icon from "react-bootstrap-icons";

import "./Table.css";

function Table() {
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
                <Icon.PencilSquare />
              </div>
              <div className="icon-wrapper">
                <Icon.TrashFill />
              </div>
              <div className="icon-wrapper">
                <Icon.ClipboardFill />
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
                <Icon.PencilSquare />
              </div>
              <div className="icon-wrapper">
                <Icon.TrashFill />
              </div>
              <div className="icon-wrapper">
                <Icon.ClipboardFill />
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
                <Icon.PencilSquare />
              </div>
              <div className="icon-wrapper">
                <Icon.TrashFill />
              </div>
              <div className="icon-wrapper">
                <Icon.ClipboardFill />
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
                <Icon.PencilSquare />
              </div>
              <div className="icon-wrapper">
                <Icon.TrashFill />
              </div>
              <div className="icon-wrapper">
                <Icon.ClipboardFill />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
