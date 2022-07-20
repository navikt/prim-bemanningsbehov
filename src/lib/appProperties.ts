const { HOME_URL, NODE_ENV, FSS_CONTEXT, BEMANNINGSBEHOV_REST_URL } =
  process.env

const appProperties = {
  hjemUrl: HOME_URL || "http://localhost:3000",
  nodeEnv: NODE_ENV || "development",
  fssContext: FSS_CONTEXT,
  bemanningsbehovUrl: BEMANNINGSBEHOV_REST_URL,
  erDev: NODE_ENV === "development"
}

export default appProperties
