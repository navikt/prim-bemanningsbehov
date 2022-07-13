import Error from "next/error"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if ((req.headers?.["user-agent"] ?? "").startsWith("kube-probe")) {
    res.status(200).json({ name: "Application is ready." })
  }

  return <Error statusCode={404} />
}
