import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ClaySculpture from "../subCategories/claysculpture/Claysculpture";
import AllCraft from "../subCategories/allCraft/AllCraft";
import StoneSculpture from "../subCategories/Stone-Sculpture/StoneSculpture";
import MetalSculpture from "../subCategories/metalSculpture/MetalSculpture";
import FoodCarving from "../subCategories/food-carving/FoodCarving";
import NaturalMaterialSculpture from "../subCategories/natural-Material-Sculpture/NaturalMaterialSculpture";
import BeadedSculpture from "../subCategories/beaded-Sculpture/BeadedSculpture";




const AllArtCraft = () => {
    // subcategory
 const loadedCraft = useLoaderData();
 const [allCraft,setAllCraft] = useState(loadedCraft);
 const [claySculpture, setClaySculpture] = useState([]);
 const [stoneSculpture, setStoneSculpture] = useState([]);
 const [metalSculpture,setMetalSculpture]=useState([]);
 const [foodCarving,setFoodCarving]=useState([]);
 const [naturalMaterialSculpture,setNaturalMaterialSculpture]=useState([]);
 const [beadedSculpture,setBeadedSculpture]=useState([]);




    const handleAllCraftByCateGory = value => {
        
        if(value === 'Clay Sculpture'){
            // alert('This tabs  is Clay Sculpture')
            const craftItems = loadedCraft.filter(claySculpture=> claySculpture.subcategory === value);
            setClaySculpture(craftItems);
        }
        else if(value === 'Stone Sculpture'){
            const craftItems = loadedCraft.filter(claySculpture=> claySculpture.subcategory === value);
            setStoneSculpture(craftItems)
        }
        else if(value === 'Metal Sculpture'){
          const craftItems = loadedCraft.filter(claySculpture=> claySculpture.subcategory === value);
          setMetalSculpture(craftItems);
        }
        else if(value === 'Food Carving'){
          const craftItems = loadedCraft.filter(claySculpture=> claySculpture.subcategory === value);
          setFoodCarving(craftItems)
        }
        else if(value === 'Natural Material Sculpture'){
          const craftItems = loadedCraft.filter(claySculpture=> claySculpture.subcategory === value);
          setNaturalMaterialSculpture(craftItems)
        }

        else if(value === 'Beaded Sculpture'){
          const craftItems = loadedCraft.filter(claySculpture=> claySculpture.subcategory === value);
          setBeadedSculpture(craftItems);
        }
    }
    
    
    return (
        <div>
          
          <Tabs>
    <TabList>
      <Tab
       onClick={() => handleAllCraftByCateGory('allCraft')}
       
      >All Craft</Tab>

     <Tab 
      onClick={() => handleAllCraftByCateGory('Clay Sculpture')}
> Clay Sculpture</Tab>

     <Tab 
      onClick={() => handleAllCraftByCateGory('Stone Sculpture')}
      >Stone Sculpture</Tab>

      <Tab
       onClick={() => handleAllCraftByCateGory('Metal Sculpture')}
      >Metal Sculpture</Tab>
   
      <Tab 
       onClick={() => handleAllCraftByCateGory('Food Carving')}
      >
      Food carving</Tab>

      <Tab 
       onClick={() => handleAllCraftByCateGory('Natural Material Sculpture')}
      >
      Natural Material Sculpture</Tab>

      <Tab
       onClick={() => handleAllCraftByCateGory('Beaded Sculpture')}
      >
      Beaded Sculpture</Tab>


    </TabList> 

    <TabPanel>
      <AllCraft craftData={allCraft}/>
    </TabPanel>

    <TabPanel>
         <ClaySculpture  craftData={claySculpture}/>
    </TabPanel>

    <TabPanel>
      <StoneSculpture craftData={stoneSculpture}/>
    </TabPanel>

    <TabPanel>
      <MetalSculpture craftData={metalSculpture}/>
    </TabPanel>
        
    <TabPanel>
      <FoodCarving craftData={foodCarving}/>
    </TabPanel>

    <TabPanel>
      <NaturalMaterialSculpture craftData={naturalMaterialSculpture}/>
    </TabPanel>

    <TabPanel>
      <BeadedSculpture craftData={beadedSculpture}/>
    </TabPanel>


  </Tabs>
        </div>
    );
};

export default AllArtCraft;