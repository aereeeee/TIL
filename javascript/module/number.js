
function multiply(x) {
    return x * 2;
}
function defaultmulti(x) {
        return x * 2;
}
// export function multiply(x) {
//     return x * 2;
// }
// export default function defaultmulti(x) {
//     return x * 2;
// }
// export {multiply};
// export default defaultmulti;
export { defaultmulti as default, multiply};