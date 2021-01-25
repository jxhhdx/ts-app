import { provide, inject, Ref, ref } from '@vue/composition-api';
const Storesymbol = Symbol()

export function providestore(store:Ref<string>) {
    provide(Storesymbol, store)
}
export function useStore(){
    const store = inject(Storesymbol , ref(""));
    if (!store) {
        //抛出错误，不提供 store
    }
    return store
}
