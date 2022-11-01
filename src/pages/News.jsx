import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../assets/loading.gif";
import getNews from "../redux/thunk/newsThunk";
import Cards from "../components/Cards";
import { Button, Pagination } from "@mui/material";
import usePagination from "../components/Pagination";
import Search from "../components/Search";
import { setNewsList } from "../redux/actions/newsActions";

const News = () => {
  const [favList, setFavList] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);
  const { loading } = useSelector((state) => state.app);

  let [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const { currentUser } = useSelector((state) => state.auth);
  const count = Math.ceil(newsList.length / PER_PAGE);
  const _DATA = usePagination(newsList, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    dispatch(getNews); // we are giving async function to dispatch as a parameter.
  }, [dispatch]);

  const handleFav = (item) => {
    setIsFavourite(!isFavourite);
    setFavList([...favList, item]);
    localStorage.setItem("favori", JSON.stringify(favList));
  };
  console.log(favList);

  const onChange = value => {
    setSearchText(value);
  };
  // console.log(text);
  const handleSearch = () => {
    const filteredProducts = newsList.filter(news=> {
      const searchedText = searchText.toLowerCase();
      const currentTitle =news.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    console.log(filteredProducts);
   setNewsList(filteredProducts);
  };
  return (
    <div  style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
      {/* <Box style={{marginTop: "5rem"}}><Search searchText={searchText} onChange={onChange} handleSearch={handleSearch} /></Box>       */}
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={image} alt="loadingGif" style={{ width: "500px" }} />
        </Box>
      ) : (
        <div>
            
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
          style={{marginTop: "2rem"}}
        >        
          {_DATA.currentData().map((item, index) => (
            <Card
              sx={{ maxWidth: 345, m: 5, maxHeight: 700 }}
              key={index}              
            >
              <Cards
                urlToImage={item.urlToImage}
                title={item.title}
                content={item.content}
                url={item.url}
                publishedAt={item.publishedAt}
                source={item.source.name}
                item={item}
                value={isFavourite}
                handleFav={handleFav}
              />
            </Card>
          ))}
        </Box>
        </div>      
      )}
     
      <Box display="flex" justifyContent="center" marginBottom="3rem">
        <Pagination
          count={count}
          size="large"
          page={page}
          shape="rounded"
          color="secondary"
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};

export default News;
