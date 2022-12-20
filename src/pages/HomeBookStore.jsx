import React from "react";
import ApiListBook from "../FakeApi/ApiListBook";
import BookCard from "../Components/BookStore/BookCard";
import BannerBook from "../Components/BannerHeader/BannerBook";

export default function HomeBookStore() {
  return (
    <>
      <div className="contentbody">
        <BannerBook />
        <br></br>
        <div className="homebook">
          <p
            style={{
              width: "80%",
              marginLeft: "9%",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            SÁCH HOT NHẤT
          </p>

          <div className="listitembook">
            {ApiListBook.books.slice(0, 15).map((item, index) => {
              return <BookCard item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
