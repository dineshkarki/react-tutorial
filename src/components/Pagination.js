import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState(0);
  
    let limit = 5;
  
    useEffect(() => {
      const getComments = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`
        );
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        setpageCount(Math.ceil(total / limit));
        console.log(Math.ceil(total/12));
        setItems(data);
      };
  
      getComments();
    }, [limit]);
  
    const fetchComments = async (currentPage) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
      );
      const data = await res.json();
      return data;
    };
  
    const handlePageClick = async (data) => {
      console.log(data.selected);
  
      let currentPage = data.selected + 1;
  
      const commentsFormServer = await fetchComments(currentPage);
  
      setItems(commentsFormServer);
      // scroll to the top
      //window.scrollTo(0, 0)
    };
    return(
        <div className="row">
          {items.map((item) => {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 v my-2">
                <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                  <div className="card-body">
                    <h5 className="card-title text-center h2">Id :{item.id} </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                      {item.title}
                    </h6>
                    <p className="card-text text-center">{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
  
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    )
}
export default Pagination;