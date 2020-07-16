// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AjaxRequest } from 'rxjs/ajax';

declare global {
  namespace IAjaxUtil {
    type IHttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    type IUrl<T extends IHttpMethod> = {
      [p in keyof IApi]: IApi[p][T] extends never ? never : p
    }[keyof IApi];

    type IGetUrl = IUrl<'GET'>;
    type IPutUrl = IUrl<'PUT'>;
    type IPostUrl = IUrl<'POST'>;
    type IDeleteUrl = IUrl<'DELETE'>;
    type IPatchUrl = IUrl<'PATCH'>;

    type IParams<T extends keyof IApi> = IApi[T]['params'];
    type IQueries<T extends keyof IApi> = IApi[T]['queries'];
    type IHeaders<T extends keyof IApi> = IApi[T]['headers'];
    type IBody<T extends keyof IApi, M extends IHttpMethod> = IApi[T][M]['body'];
    type IForm<T extends keyof IApi, M extends IHttpMethod> = IApi[T][M]['form'];
    type IResponse<T extends keyof IApi, M extends IHttpMethod> = IApi[T][M]['response'];

    type IGetReponse<T extends keyof IApi> = IResponse<T, 'GET'>;
    type IPutReponse<T extends keyof IApi> = IResponse<T, 'PUT'>;
    type IPostReponse<T extends keyof IApi> = IResponse<T, 'POST'>;
    type IDeleteReponse<T extends keyof IApi> = IResponse<T, 'DELETE'>;

    // Params、Queries、Body
    type IPQB<T extends keyof IApi, M extends IHttpMethod> = {
      params?: IParams<T>;
      queries?: IQueries<T>;
      body?: IBody<T, M>;
    };

    type IOmitRxRequestInit = Omit<AjaxRequest, 'body' | 'method'>;

    type IRxGetParams<T extends keyof IApi> = { params: IParams<T>; } & IOmitRxRequestInit;
    type IRxPostParams<T extends keyof IApi> = { params: IParams<T>; } & IOmitRxRequestInit;
    type IRxPutParams<T extends keyof IApi> = { params: IParams<T>; } & IOmitRxRequestInit;
    type IRxDeleteParams<T extends keyof IApi> = { params: IParams<T>; } & IOmitRxRequestInit;
  }
}
