import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";

import "./styles.scss";
import { Card } from "reactstrap";

export const Table = () => {
  const columns = [
    {
      name: "ID",
      minWidth: "60px",
      sortable: true,
      sortField: "id",
      cell: (row) => (
        <span className="text-capitalize column_title">{row.id}</span>
      ),
    },
    {
      name: "CUSTOMER",
      minWidth: "160px",
      sortable: true,
      sortField: "customer",
      cell: (row) => (
        <span className="text-capitalize column_title">{row.customer}</span>
      ),
    },
    {
      name: "DATE",
      minWidth: "60px",
      sortable: true,
      sortField: "date",
      cell: (row) => (
        <span className="text-capitalize column_title">{row.date}</span>
      ),
    },
    {
      name: "total",
      minWidth: "60px",
      sortable: true,
      sortField: "total",
      cell: (row) => (
        <span className="text-capitalize column_title">{row.total}</span>
      ),
    },
    {
      name: "METHOD",
      minWidth: "60px",
      sortable: true,
      sortField: "method",
      cell: (row) => (
        <span className="text-capitalize column_title">{row.method}</span>
      ),
    },
    {
      name: "STATUS",
      minWidth: "60px",
      sortable: true,
      sortField: "status",
      cell: (row) => (
        <span className="text-capitalize column_status">{row.status}</span>
      ),
    },
    {
      name: "ACTION",
      minWidth: "60px",

      cell: (row) => (
        <span className="text-capitalize column_action"> View Details </span>
      ),
    },
  ];

  const data = [
    {
      id: "5089",
      customer: "joseph wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "cc",
      status: "pending",
    },
    {
      id: "5089",
      customer: "joseph wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "cc",
      status: "pending",
    },
    {
      id: "5089",
      customer: "joseph wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "cc",
      status: "pending",
    },
    {
      id: "5089",
      customer: "joseph wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "cc",
      status: "pending",
    },
    {
      id: "5089",
      customer: "joseph wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "cc",
      status: "pending",
    },
  ];

  const CustomPagination = ({}) => {
    return (
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageCount={10}
        activeClassName="table-active"
        forcePage={0}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={"pagination justify-content-end p-1 mt-3"}
      />
    );
  };

  return (
    <div className="customTable">
      <Card>
        <DataTable columns={columns} data={data} />
        <CustomPagination />
      </Card>
    </div>
  );
};
