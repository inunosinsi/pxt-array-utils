//% color="#000000" icon="\uf1e6" block="配列ユーティリティ"
namespace pxtArrayUtils {

    //% block="%array=lists_create_empty の中からいちばん大きい数"
    export function max (array: number[]): number {
        if (array.length == 0) {
            return 0
        }
        let tmp = array[0]
        for (let v of array) {
            if (v > tmp) {
                tmp = v
            }
        }
        return tmp
    }

    //% block="%array=lists_create_empty の中からいちばん小さい数"
    export function min(array: number[]): number {
        if (array.length == 0) {
            return 0
        }
        let tmp = array[0]
        for (let v of array) {
            if (v < tmp) {
                tmp = v
            }
        }
        return tmp
    }
}
