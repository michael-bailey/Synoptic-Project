import { Environment, Network, RecordSource, Store } from 'relay-runtime';

async function fetchGraphQL(text: string, variables: unknown) {
  try {
    const response = await fetch(`/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
    const res = await response.json();
    console.log('res: ', res);
    return res;
  } catch (err) {
    console.error(err);
    return { error: err, data: null };
  }
}

async function fetchRelay(params: any, variables: any) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
