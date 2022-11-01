
import React from "react";


function Favourite() {
 var favori = new Array();
 favori = localStorage.getItem("favori");
console.log(favori);

  return (
    <div>
      <ul>
        {favori?.map((item) =><li>item.title</li>)}
      </ul>
    </div>
  )
};
export default Favourite;
