import { switchMapTo, tap } from 'rxjs/operators';
import { IRxCtx } from '../createStore';

export function getHelloFromRemote(ctx: IRxCtx<string>, _: string) {
  return ctx.curAction$.pipe(
    switchMapTo(
      window.RxGet('/hello/{name}', {
        params: {
          name: 'foo'
        }
      }).pipe(
        tap(({ text }) => {
          ctx.commit('updateHello', text);
        })
      )
    )
  );
}
