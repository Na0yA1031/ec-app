import * as Actions from './actions';
import initialState from '../store/initialState';

// stateには現在のstoreの状態、actionにはActionsがreturnした値(プレーンなオブジェクト)が入る
export const UsersReducer = (state = initialState.users, action) => {
    // Actionのtypeに応じてどの状態をどのように変更していくかを書いていく
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload /*,で区切った後さらに...変数名とすることでstateにaction.payloadの中身をマージ */
                // 展開した結果
                // users: {
                //     isSignedIn: false,
                //     uid: '',
                //     username: ''
                //     isSignedIn: {
                //         uid: userState.uid,
                //         username: userState.username
                //     } 必ずinitialStateを展開後にマージをする。プロティが重複しているものは後に追加した方のプロパティが上書きされる
                // }

            }
        default:
            return state;
    }
}