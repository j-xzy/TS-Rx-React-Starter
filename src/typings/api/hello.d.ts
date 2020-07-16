interface IApi {
  /**
   * @description example
   */
  '/hello/{name}': {
    params: {
      name: string;
    };
    queries: never;
    headers: never;
    POST: never;
    PUT: never;
    GET: {
      body: never;
      response: {
        text: string;
      };
      form: never;
    };
    DELETE: never;
    PATCH: never;
  };
}