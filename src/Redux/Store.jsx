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
import Digiclub from "./DigiclubSlice"
import Bestsell from "./BestsellingSlice"
import ColorSlice from './ColorSlice'
import ProductThree from './ProductThreeSlice'
import DiscountP from "./DiscountProductSlice"
import SingleProductPartTwo from './SingleProductPartTwoSlice'
import News from "./NewsSlice"
import Cart from "./CartSlice"
import Article from './ArticleSlice'
import Footer from './FooterSlice'
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
    singleproduct:singleproduct,
    Digiclub:Digiclub,
    Bestsell:Bestsell,
    ColorSlice:ColorSlice,
    ProductThree:ProductThree,
    DiscountP:DiscountP,
    SingleProductPartTwo:SingleProductPartTwo,
    News:News,
    Cart:Cart,
    Article:Article,
    Footer:Footer
    
  },
})
