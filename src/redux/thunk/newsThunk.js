import { setNewsList} from "../actions/newsActions";
import { setLoading, clearLoading } from "../actions/appActions";
import axios from "axios";


const url =
  "https://newsapi.org/v2/everything?" +
  "q=android&" +
  "sortBy=popularity&" +
  "apiKey=d00d9a4dc6a7453bb673086906f424c2";
  
const getNews = async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios(url);
    console.log(data.articles);
    dispatch(setNewsList(data.articles));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearLoading());
  }
};
export default getNews;
