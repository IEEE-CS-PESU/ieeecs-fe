import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import InstaPost from "./InstaPost";

export default function Feed({ token, ...props }) {
  // const REACT_VERSION = React.version;
  // console.log(REACT_VERSION)
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token);
  tokenProp.current = token;
  // const onInit = () => {
  //   console.log("lightGallery has been initialized");
  // };

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();
    // console.log(token)
    let url = `https://graph.instagram.com/me/media?fields=id,username,media_type,media_url,timestamp,permalink,caption&limit=${props.limit}&access_token=${token}`;
    async function fetchInstagramPost() {
      try {
        axios
          .get(url)
          .then((resp) => {
            setFeedsData(resp.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    // manually call the fetch function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit, token]);

  return (
    <div id="container" className="bg-slate-200 grid lg:grid-cols-3 md:grid-cols-2">
      {feeds.map((feed, i) =>
        i < 3 ? (
          // <div className="border border-red-400 my-20 pr-12 mr-8 py-5" key={i}>
          <div className="my-20 pr-12 mr-8 py-5" key={i}>
            <InstaPost key={feed.id} feed={feed} />
          </div>
        ) : (
          // <div className="border border-emerald-400 my-2 pr-12 mr-8 py-5" key={i}>
          <div className="my-2 pr-12 mr-8 py-5" key={i}>
            <InstaPost key={feed.id} feed={feed} />
          </div>
        )
      )}
    </div>
  );
}
