import {APIGatewayEvent, Context} from "aws-lambda";
import * as handler from "../handler";

test("Execute lambda succesfully", async () => {
  const event = { body: "Test Body" } as APIGatewayEvent;
  const context = {} as Context;

  const response = await handler.start(event, context);

  expect(response.statusCode).toEqual(200);
  expect(typeof response.body).toBe("string");
});
