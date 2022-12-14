import React, { createContext, useState } from "react";
import itemContext from "./Context";



function State(props) {
  let host = "https://k-fooods-backend1.onrender.com";
  let cartItems = [];
  const [items, setItems] = useState(cartItems);

  async function getItems() {
    const response = await fetch(host + "/api/items/getItems", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("user")
      }
    });
    const json = await response.json();
    //console.log(json);
    setItems(json);
  }

  async function addItem(type, name, number, price) {
    console.log("new Item");
    const response = await fetch(host + "/api/items/addItem", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("user")
      },
      body: JSON.stringify({ "type": type, "name": name, "quantity": number, "price": price })
    });
    const Item = await response.json();
    items.push(Item);
    setItems(items);
    //console.log(items);

  }

  async function deleteItem(id) {
    const response = await fetch(host + "/api/items/deleteItem/" + String(id), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("user")
      },
    });
    const newitems = items.filter((Item) => { return Item._id !== id })
    setItems(newitems);

  }

  let myOrders = [];
  const [orders, setOrders] = useState(myOrders);


  async function addOrder(address) {
    const response = await fetch(host + "/api/orders/addOrder", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("user")
      },
      body: JSON.stringify({ "address": address })
    });
    const json = await response.json();
    //console.log(json);
    console.log("ordered");
    orders.push(json);
    setOrders(orders);
  }

  async function getOrders() {
    const response = await fetch(host + "/api/orders/getOrders", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("user")
      },
    });
    const json = await response.json();
    setOrders(json);
    //console.log(orders);
  }

  const [role, setRole] = useState("user");

  let totalOrders=[];

  const [allorders, setAllorders] = useState(totalOrders);

  async function getAllorders() {
    const response = await fetch(host + "/api/orders/getAllorders", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("admin")
      },
    });
    const json = await response.json();
    setAllorders(json);
    //console.log(allorders);

  }

  async function updateStatus(id,status){
    const response = await fetch(host + "/api/orders/update/"+String(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("admin")
      },
      body: JSON.stringify({ "status":status })
    });

  }




  return (
    <itemContext.Provider value={{ addItem, deleteItem, items, getItems, orders, addOrder, getOrders, role, setRole,getAllorders,allorders,updateStatus }}>
      {props.children}

    </itemContext.Provider>
  )
}

export default State;
