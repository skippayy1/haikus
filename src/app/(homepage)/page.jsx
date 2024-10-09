import HomePageComponent from "../_components/HomePageComponent";
import { getAllHaikus } from '../_data/haikus';

const Homepage = async() => {
const allHaikus = await getAllHaikus();
  return (
    <>
    <HomePageComponent haikus={allHaikus}/>
    </>
  );
};

export default Homepage;