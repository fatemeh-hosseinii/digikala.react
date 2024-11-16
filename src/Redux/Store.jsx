import { configureStore } from '@reduxjs/toolkit'
import NabarSlice from "./NavbarSlice"
import StorySlice from './StorySlice'
import SliderSlice from "./SliderSlice"
import InformationSlice from "./InformationSlice"
import MoreinformationSlice from './MoreinformationSlice'
import AmazingProductSlice from "./AmazingProductSlice"
import productSlicepartone from "./Showproduct1Slice"
import AmazingShop from "./AmazingShopSlice"
import BaneroneSlice from "./BaneroneSlice"
import ProductpackagSlice from "./ProductpackagSlice"
import BanerTwoSlice from "./BanertwoSlice"
import Bestbrand from "./BestbrandSlice"
import BrandTwoPartTwoSlice from "./BanerTwo_PartTwoSlice"
import ProductTwo from "./ProductTwoSlice"
import singleproduct from "./SingleProductSlice"
export const store = configureStore({
  reducer: {
    Navbar:NabarSlice,
    story:StorySlice,
    slider:SliderSlice,
    information:InformationSlice,
    moreinformation:MoreinformationSlice,
    AmazingProduct:AmazingProductSlice,
    product:productSlicepartone,
    AmazingShop:AmazingShop,
    BaneroneSlice:BaneroneSlice,
    Productpackag:ProductpackagSlice,
    BanerTwo:BanerTwoSlice,
    Bestbrand:Bestbrand,
    BrandTwoPartTwoSlice:BrandTwoPartTwoSlice,
    ProductTwo:ProductTwo,
    singleproduct:singleproduct
 

    
  },
})
