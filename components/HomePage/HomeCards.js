import Card from "./Card";

function HomeCards({GetirHomeCards}) {


  return (
    <div className="hidden  md:block  bg-gray-100 p-16    ">
      <div className="flex flex-wrap   max-w-screen-2xl mx-auto gap-x-4 rounded-lg text-center">
         { GetirHomeCards.map(({_id,img,title,info}) => (
           <Card key={_id}
            img={img}
            title={title}
            info={info}
           
           
           />
           
         ))

         }
      </div>
      
    </div>
  )
}

export default HomeCards
