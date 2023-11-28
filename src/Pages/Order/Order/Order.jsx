import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import BookCard from "../../../components/BookCard/BookCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import useMenu from "../../../Hooks/useMenu";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories=['offered','Fiction','History','Mystery and Thriller','Children Books','Romance','Nature and Science']
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex,settabIndex]=useState(initialIndex)
    const [menu]=useMenu()
    const mystery=menu.filter(item=>item.category === 'Mystery and Thriller')
    const fiction=menu.filter(item=>item.category === 'Fiction')
    const history=menu.filter(item=>item.category === 'History')
    const children=menu.filter(item=>item.category === 'Children Books')
    const romance=menu.filter(item=>item.category === 'Romance')
    const nature=menu.filter(item=>item.category === 'Nature and Science')
    const offer=menu.filter(item=>item.category === 'offered')
    return (
        <div>
            <Helmet>
        <title>ReadMatrix | Order</title>
        
      </Helmet>
            <Cover  img={'https://i.ibb.co/JF9DNTF/depositphotos-155379838-stock-photo-blank-hard-cover-book-template.webp'} title='ORDER BOOK'></Cover>

<Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
<div className="text-center mt-10 mb-10 font-medium">
  <TabList>
    <Tab>OFFERED</Tab>
    <Tab>FICTION</Tab>
    <Tab>MYSTERY & THRILLER</Tab>
    <Tab>HISTORY</Tab>
    <Tab>CHILDREN'S BOOK</Tab>
    <Tab>ROMANCE</Tab>
    <Tab>NATURE & SCIENCE</Tab>
  </TabList>
  </div>
  <TabPanel>
    <OrderTab items={offer}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={fiction}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={history}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={mystery}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={children}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={romance}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={nature}></OrderTab>
  </TabPanel>
  
</Tabs>
</div>
            
        
    );
};

export default Order;