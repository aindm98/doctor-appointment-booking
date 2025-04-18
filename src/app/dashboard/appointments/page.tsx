"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "./../../components/nav/navbar";
import Header from "./../../components/nav/header";
// import { PlusIcon } from "lucide-react";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button,
    User,
  } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";

const Appointments = () => {

//   const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "speciality",
      label: "SPECIALITY",
    },
    {
      key: "doctor",
      label: "DOCTOR NAME",
    },
    {
      key: "date",
      label: "DATE",
    },
    {
      key: "time",
      label: "TIME",
    },
    {
      key: "status",
      label: "STATUS",
    },
    {
        key: "actions",
        label: "ACTIONS",
    }
  ];

  const appointment = [
    {
      id: 1,
      name: "John Doe",
      speciality: "Cardiology",
      doctor: "Dr. Smith",
      date: "2023-10-01",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      speciality: "Dermatology",
      doctor: "Dr. Johnson",
      date: "2023-10-02",
      status: "Confirmed",
    },
    {
      id: 3,
      name: "Alice Brown",
      speciality: "Neurology",
      doctor: "Dr. Lee",
      date: "2023-10-03",
      status: "Cancelled",
    },
  ]


  return (
    <>
      <Navbar>
        <Header />
      <div className="my-5 rounded-2xl bg-white px-4 pt-4 shadow-md dark:bg-dark">
      <Table
        aria-label="Admin Details Table"
        classNames={{
          wrapper: "px-0 shadow-none",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align={column.key === "actions" ? "center" : "start"}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
              {appointment.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.speciality}</TableCell>
                  <TableCell>{item.doctor}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">

                    </div></TableCell>
                </TableRow>
              ))}
            </TableBody>
      </Table>
        </div>
    
       
      </Navbar>
     
    </>
  );
};
export default Appointments;
