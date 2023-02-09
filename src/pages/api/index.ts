import type { NextApiRequest, NextApiResponse } from "next";
import { TwitterApi } from "twitter-api-v2";

const Twitter = async (req: NextApiRequest, res: NextApiResponse) => {
  const twitterClient = new TwitterApi(process.env.TWITTER_TOKEN);

  const readOnlyClient = twitterClient.readOnly;

  const findUser = (params: string) => readOnlyClient.v2.userByUsername(params);

  if (req.method === "POST") {
    const user = await findUser(req.body.query);
    res.send(user.data);
  }

  if (req.method === "GET") {
    const { data } = await findUser("samyog_dhital");
    res.send(data);
  }
};

export default Twitter;
