import useServerContext from '../../../../public/useServerContext.mjs';
import withServerContext from '../../../../public/withServerContext.mjs';

function IndexPage() {
  const serverContext = useServerContext();

  let requestCustomHeader = null;

  if (serverContext) {
    requestCustomHeader = serverContext.request.headers['custom-header'];
    serverContext.response.statusCode = 418;
  }

  return requestCustomHeader;
}

export default withServerContext(IndexPage);
