// アクションのタイプを定義してエクスポート
// アクションの定数名は大文字のアルファベットで宣言し、同名の文字列の値を入れる
export const SIGN_IN = 'SIGN_IN';
export const signInAction = (userState) => {
    // Actionsはプレーンなオブジェクトを返すので{}の中にデータを記述しreturnする
    return {
        type: 'SIGN_IN', /*上で宣言したActionのタイプを指定 */
        payload: {  /*Storeの状態の変更に必要なデータ */
            isSignedIn: {
                uid: userState.uid,
                username: userState.username
            }
        }
    }
};  /*Actionsが呼び出された時にreducersにreturnの中身が渡される(純粋なデータ(プレーンなオブジェクトが渡される)) */

export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = () => {
    return {
        type: 'SIGN_OUT',
        payload: {
            isSignedIn: false,
            uid: '',
            username: ''
        }
    }
}