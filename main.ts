namespace pxtArrayUtils {

    //% block="%array から最大値を調べる"
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
}
