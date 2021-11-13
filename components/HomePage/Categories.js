import Category from './Category';

function Categories({GetirCategories}) {
    


   
  return (
    <div className="max-w-screen-2xl mx-auto pt-6 md:pt-24  ">
     <h1 className="text-gray-600 font-semibold m-5 ">Kategoriler</h1>

 


    <div className="md:flex md:flex-wrap md:gap-4 md:my-5 md:mx-auto grid grid-cols-3 ">
  


      { GetirCategories.map(({_id,img,title}) => (
       
        <Category key={_id}
         img={img}
         title={title}
          
         />
        
         
     ))}
    
</div>







      
    </div>
  )
}




export default Categories