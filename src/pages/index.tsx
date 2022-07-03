import { GetStaticPropsContext, GetStaticPropsResult } from "next/types";
import React from "react";
import dbConnect from "../modules/database/connection/connect";
import Article from "../modules/database/models/Article";

interface IArt {
  _id: string;
  title: string;
  link: string;
  category: string;
  image_link: string;
  content: Array<string>;
  date: Date;
}

interface IData {
  data: Array<IArt>;
}

/**
 * @param {Array<IArt>} data articles coming from database
 * @return {JSX.Element}: JSX Element iterating through articles
 */
function handleData(data: IData) {
  return (
    <div>
      <h1>Articles</h1>
      {data?.data?.map((article, index) => (
        <h1 key={article._id}>{article.title}</h1>
      ))}
    </div>
  );
}

/**
 * This is the home page
 * @param {Array<IArt>} data articles coming from database
 * @return {JSX.Element}: JSX element for rendering home page
 */
export default function Home(data: IData): JSX.Element {
  return <>{handleData(data)}</>;
}

export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IData>> => {
  await dbConnect();

  let data: Array<IArt>;
  data = await Article.find({}).sort({ date: -1 }).limit(20);
  data = JSON.parse(JSON.stringify(data));
  return {
    props: { data },
  };
};
