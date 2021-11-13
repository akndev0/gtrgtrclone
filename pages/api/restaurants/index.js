import dbConnect from "../../../utils/dbConnect";

import Restaurants from '../../../models/Restaurants';

dbConnect();



class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString }
    
    const excludeFields = ['sort']
    excludeFields.forEach(el => delete (queryObj[el]))
    if (queryObj) {

      if (queryObj.cuisine !== 'all') {
        
        this.query.find({ Cuisines: { $in: queryObj.cuisine.split(',')  } })
         
      }
      if (queryObj.deliveryType !== 'all') {
        
        this.query.find({ DeliveryType: queryObj.deliveryType })
      
      }
      if (queryObj.payment !== 'all') {
        this.query.find({ PaymentMethod: queryObj.payment })
      }
      if (queryObj.minOrder !== 'all') {
        this.query.find({ MinimumBasketAmount: { $lte: queryObj.minOrder+".00"} })
      
      }
    }

    


    this.query.find()
    return this;
  }

  sorting() {

    const queryObj = { ...this.queryString }
    if (queryObj.sort == 'restpuan') {

      this.query = this.query.find().sort({ 'Rate': -1 })
    }
    if (queryObj.sort == 'teslimarsur') {

      this.query = this.query.find().sort({ 'DeliveryTime': 1 })
    }


    return this;
  }


}

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const features = new APIfeatures(Restaurants.find(), req.query)
          .filtering().sorting()
        const restaurants = await features.query

        return res.status(200).json({
          status: 'success',
          result: restaurants
        })


      } catch (err) {
        return res.status(400).json({ success: false })
      }
    case 'POST':
      try {
        const restaurants = await Restaurants.create(req.body);

        res.status(200).json({ success: true, data: restaurants })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }



}