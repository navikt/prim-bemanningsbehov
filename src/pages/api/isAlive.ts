import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   if ((req.headers?.["user-agent"] ?? "").startsWith("kube-probe")) {
    return res.status(200).json({ name: "Hello, world." })
  }

  return res.status(404)
}
