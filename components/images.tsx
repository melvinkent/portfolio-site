import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Images(props) {
    const {data} = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
        <div className = "images grid grid-cols-2 gap-2 mb-4">
            {currentItems.map(image => {
                return (
                    <div className="image ">
                        <img src={image.url} alt = {image.title} />
                    </div>   
                )
            })}
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<previous"
            renderOnZeroPageCount={null}
            containerClassName ="pagination list-none flex justify-center gap-1 mb-3"
            pageLinkClassName="page-num py-2 px-3.5 cursor-pointer rounded font-normal hover:bg-indigo-500 hover:text-white"
            previousLinkClassName="page-num py-2 px-3.5 cursor-pointer rounded font-normal hover:bg-indigo-500 hover:text-white"
            nextLinkClassName="page-num py-2 px-3.5 cursor-pointer rounded font-normal hover:bg-indigo-500 hover:text-white	"
            activeLinkClassName="active bg-indigo-500 "
        />
    </>
  );
}
    