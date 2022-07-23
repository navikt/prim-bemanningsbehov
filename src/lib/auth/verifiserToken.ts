import * as jose from "jose"
import * as oidc from "openid-client"
import * as qs from "qs"
import type {
  FlattenedJWSInput,
  JWSHeaderParameters,
  JWTVerifyResult
} from "jose"
import type { GetKeyFunction } from "jose/dist/types/types"
import { createRemoteJWKSet, jwtVerify } from "jose"

let remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>
// TODO tidsplan for å oppdatere JWKS, også i admin-gui
// let JWKSTimestamp;

const hentJWKS = () => {
  if (!remoteJWKSet) {
    remoteJWKSet = createRemoteJWKSet(
      new URL(process.env.AZURE_OPENID_CONFIG_JWKS_URI as string)
    )
  }

  return remoteJWKSet
}

export const verifiserToken = (
  token: string | Uint8Array
): Promise<JWTVerifyResult> => {
  return jwtVerify(token, hentJWKS(), {
    issuer: process.env.AZURE_OPENID_CONFIG_ISSUER,
    audience: process.env.AZURE_APP_CLIENT_ID
  })
}
// TODO: verifisere claims audience, client_id, signatur, encryption method
