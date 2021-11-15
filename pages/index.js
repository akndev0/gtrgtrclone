import Head from 'next/head'
import Banner from '../components/HomePage//Banner'
import Campaigns from '../components/HomePage/Campaigns'
import Categories from '../components/HomePage/Categories'
import Download from '../components/HomePage/Download'
import Favorities from '../components/HomePage/Favorities'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HomeCards from '../components/HomePage/HomeCards'
import SubHeaderSarch from '../components/HomePage/SubHeaderSarch'
import Login from '../components/Auth/Login'
const baseUrl = process.env.BASE_URL
export default function Home({GetirCategories,GetirCampaigns,GetirFavorities,GetirHomeCards,GetirFooter}) {

 
  return (
    <div>
      <Head>
        <title>Getir Clone</title>
        
      </Head>
       

       <Header  active={"getir"} />
      
       <SubHeaderSarch  />
      
     
       

     
       <main >
        

         <Banner   />
      
         <div  className="mt-48 sm:hidden">
             <Login />
         </div>
         
         <Categories GetirCategories={GetirCategories} />

        

         <Campaigns GetirCampaigns={GetirCampaigns}   />

         <Favorities GetirFavorities={GetirFavorities}  />

         <Download/>


         <HomeCards GetirHomeCards={GetirHomeCards} />

         <Footer GetirFooter={GetirFooter}  />

         
       </main>
      
    </div>
  )
}

export async function getServerSideProps(){
  
   

  const GetirCategories=await fetch("https://gtrgtrclone.herokuapp.com/api/categories").then(
    (res)=>res.json()
  );
  const GetirCampaigns=await fetch("https://gtrgtrclone.herokuapp.com/api/campaigns").then(
    (res)=>res.json()
  );
  const GetirFavorities=await fetch("https://gtrgtrclone.herokuapp.com/api/favorities").then(
    (res)=>res.json()
  );
  const GetirHomeCards=await fetch("https://gtrgtrclone.herokuapp.com/api/homeCards").then(
    (res)=>res.json()
  );
  const GetirFooter=await fetch("https://gtrgtrclone.herokuapp.com/api/footer").then(
    (res)=>res.json()
  );


 


 
  
    return {
     props:{
       GetirCategories:GetirCategories,
       GetirCampaigns:GetirCampaigns,
       GetirFavorities:GetirFavorities,
       GetirHomeCards:GetirHomeCards,
       GetirFooter:GetirFooter,
     },
    };
 
 
 
 }
 
