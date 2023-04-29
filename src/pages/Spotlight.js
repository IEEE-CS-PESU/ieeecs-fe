import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import InstaPost from "../Components/InstaPost"
import Loading from "../utils/Loading";


export default function Spotlight({ token, ...props }) {
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
  let li=[1,2,3];

  return (
    <div className="spotlight">
    {feeds.length ===0 ? 
    <div className="flex items-center h-14 justify-center w-full min-h-screen bg-slate-200">
    <Loading className="h-14 w-14" />
    </div> : 
    
    <>

    <div id="container" className="bg-slate-200 pt-24 justify-items-center grid lg:grid-cols-4 md:grid-cols-3">      
      {
      
      feeds.map((feed, i) =>
        i >=0 && feed.media_type!=='VIDEO' && 
          
          <div className="py-5 md:mx-6 mx-8" key={i}>
            <InstaPost key={feed.id} feed={feed} />
          </div>
        
      )}
      </div>


    </>}
    
    </div>
  );
}
