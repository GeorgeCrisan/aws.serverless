import { Context, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export async function start(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "AminDB is alive! Mila is very excited",
      context,
      event,
    }),
  };
}
