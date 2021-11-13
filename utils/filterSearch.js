const filterSearch = ({router, cuisine,deliveryType ,payment,minOrder,sort}) => {
  const path = router.pathname;
  const query = router.query;
  

  if(cuisine) query.cuisine = cuisine;
  if(deliveryType) query.deliveryType = deliveryType;
  if(payment) query.payment = payment;
  if(minOrder) query.minOrder = minOrder;
  if(sort)  query.sort = sort;
   

  router.push({
      pathname: path,
      query: query
  })


}

export default filterSearch