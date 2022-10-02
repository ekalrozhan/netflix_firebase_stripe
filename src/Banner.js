import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5810fd3520099ebb7c304192/1525148043894-332VS8NKW95SBRMO000L/black-banner-noise.png?format=2500w")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          consequatur dicta libero illo eius suscipit repellat consectetur
          perspiciatis praesentium autem cum eaque vel, veniam illum quam
          inventore excepturi quia beatae omnis culpa quis numquam tempora
          optio. Sint, sit sunt. Illo natus ipsa, sint dolore laboriosam neque,
          libero, facilis reiciendis nobis corrupti incidunt earum optio omnis
          dignissimos ratione reprehenderit hic rem eos. Laboriosam quas, veniam
          velit ab pariatur odit, illum alias suscipit consequuntur in et
          dolorum similique blanditiis consequatur aperiam ut commodi incidunt
          optio? Delectus labore, nihil aliquid rem corrupti optio illum
          obcaecati minus porro aliquam officia id voluptatum eum repellat!`,
            150
          )}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
