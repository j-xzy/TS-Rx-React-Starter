import { commit, dispatch, useSelector, IState as IStoreState } from '@/store/createStore';
import { Post, Delete, Put, Get, RxDelete, RxGet, RxPost, RxPut } from '@/lib/ajax';
import { config } from '@/config';

declare global {
  type IState = IStoreState;

  interface Window {
    config: typeof config;
    Post: typeof Post;
    Delete: typeof Delete;
    Put: typeof Put;
    Get: typeof Get;
    RxDelete: typeof RxDelete;
    RxGet: typeof RxGet;
    RxPost: typeof RxPost;
    RxPut: typeof RxPut;
    commit: typeof commit;
    dispatch: typeof dispatch;
    useSelector: typeof useSelector;
  }
}
