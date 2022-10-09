import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import Img1 from '../assets/images/product-image-1.png'
import Img2 from '../assets/images/product-image-2.png'
import Img3 from '../assets/images/product-image-3.png'
import Img4 from '../assets/images/product-image-4.png'

const Homepage = () => {
    const [open, setOpen] = useState(3);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    const [counter, setCounter] = useState(0)
  
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
      if(counter < 10){
      // Counter state is incremented
      setCounter(prevCount => prevCount + 1)
    }
  }
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
      if(counter > 1){
      // Counter state is decremented
      setCounter(prevCount => prevCount - 1)
    }
    }



  return (
    <div>
    <div class='md:h-[30vh] md:w-[250px] h-[25vh] w-[150px] grid gap-2 grid-cols-3'>

        <img src={Img1} class='ml-10 mb-4 mt-4 contain-fit w-64 h-80' alt="" />
        <img src={Img2}alt="" class=' mb-4 mt-4 contain-fit w-64 h-80' />
        
        <div class='md:h-[30vh] md:w-[250px]  h-[25vh] w-[150px]mr-8 mt-4'>
            <p class='text-gray-600 text-xs'>CLOTHING COMPANY</p>
    <h1 class='text-3xl block flex-top font-bold width-full '>Ruffled Sleeveless Top</h1>
    <span class='m-2 line-through'>Rs. 15,99</span>
    <span class='m-2'>Rs. 999</span>
    <button class='bg-black text-white rounded p-1 m-1'>Sale</button>
    <p class='text-gray-600'>Size</p>
    <div class='justify-between items-center '>
    <button class='m-2 px-6 border border-gray-400 rounded-xl font-bold hover:bg-black hover:text-white'>S</button>
    <button class='m-2 px-6 border border-gray-400 rounded-xl font-bold hover:bg-black hover:text-white'>M</button>
    <button class='m-2 px-6 border border-gray-400 rounded-xl font-bold hover:bg-black hover:text-white'>L</button>
    <button class='m-2 px-6 border border-gray-400 rounded-xl font-bold hover:bg-black hover:text-white'>XL</button>
    </div>
    <p class='text-gray-600'>Quantity</p>
<div className='flex px-2 w-1/3 border border-gray-400 rounded-xl mt-2'>
<button className='m-4 ' onClick={handleClick2} >-</button>
<span className='m-4 text-center'>{counter}</span>
<button  className='m-4 ' onClick={handleClick1}>+</button>
</div>

    <div class='mr-16'>
    <button class='block p-2 w-full mr-4 m-8 border border-grey-600 bg-white-200'>Add to cart</button>
    <button class='block p-2 w-full m-8 mr-4 border-gray-200 bg-green-800 text-white'>Buy it now</button>
    <div class='text-center sm:text-left'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat in sunt doloremque deleniti! Odio nostrum quos quod ratione fuga facilis! Eum, doloribus sequi nam corporis maxime non molestias illum!</p>
        </div>
    </div>
    </div>
        
   
        </div>
        
        <div class='md:h-[30vh] md:w-[250px]  h-[25vh] w-[150px] grid gap-2 grid-cols-3 '>
        <img src={Img3} alt="" class='ml-10 mb-4 contain-fit w-64 h-80' />
        <img src={Img4} alt="" class=' mb-4 contain-fit w-64 h-80' />

<div className="mr-12">
 <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
Materials
        </AccordionHeader>
        <AccordionBody>
        More Details            </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
Shipping & Returns       </AccordionHeader>
        <AccordionBody>
        More Details            </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
Dimensions        </AccordionHeader>
        <AccordionBody>
        More Details            </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
Care Instructions        </AccordionHeader>
        <AccordionBody>
More Details        </AccordionBody>
      </Accordion>
    </Fragment>
    </div>


    </div>


    
    
    
    
    
    </div>

    
  )
}

export default Homepage

