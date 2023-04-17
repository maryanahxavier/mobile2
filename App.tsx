import 'react-native-gesture-handler';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  ScreenSlider1, ScreenSlider2,
} from "./src/screens"
import { Navigation } from './src/Navigations';
export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page, setPage] = useState(1)
  switch (page) {
    case 1:
      return <ScreenSlider1 setPageI={setPage} />
      break;
    case 2:
      return <ScreenSlider2 setPageI={setPage} />
      break;
  
    default:
      return <Navigation />
      break;
  }
}