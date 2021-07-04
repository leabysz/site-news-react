import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const cors = require ('cors');

export const NewsContext = createContext();

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
 

  useEffect(() => {
    axios
      .get(
        `https://apinewsv2-heroku.herokuapp.com/newsapi`, cors()
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};