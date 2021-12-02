import useServerContext from "../../../../useServerContext.mjs";
import withServerContext from "../../../../withServerContext.mjs";

function IndexPage() {
  const serverContext = useServerContext();

  let requestCustomHeader = null;

  if (serverContext) {
    requestCustomHeader = serverContext.request.headers["custom-header"];
    serverContext.response.statusCode = 418;
  }

  return requestCustomHeader;
}

export default withServerContext(IndexPage);
