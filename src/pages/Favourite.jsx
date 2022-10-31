import React from 'react'
import { useSelector } from 'react-redux';


function Favourite() {

const { favList } = useSelector((state) => state.news);
console.log(favList)


  return (
    <div>
        {/* {favList.map((item => console.log(item)))}       */}
    </div>
  )
}

export default Favourite;
