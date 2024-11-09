import { configureStore } from '@reduxjs/toolkit'
import NabarSlice from "./NavbarSlice"
import StorySlice from './StorySlice'
import SliderSlice from "./SliderSlice"
import InformationSlice from "./InformationSlice"
import MoreinformationSlice from './MoreinformationSlice'
import AmazingProductSlice from "./AmazingProductSlice"
export const store = configureStore({
  reducer: {
    Navbar:NabarSlice,
    story:StorySlice,
    slider:SliderSlice,
    information:InformationSlice,
    moreinformation:MoreinformationSlice,
    AmazingProduct:AmazingProductSlice
    
  },
})
