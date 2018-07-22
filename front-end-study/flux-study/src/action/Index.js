import { appDispatcher } from '../dispatcher';

export const ActionType = {
    SUBMIT_MESSAGE : 'SUBMIT_MESSAGE',
    CHANGE_NAME : 'CHANGE_NAME',
    SUBMIT_NAME : 'SUBMIT_NAME',
};

export const Actions = {
    submitMessage : (message) => {
        appDispatcher.dispatch({
            actionType : ActionType.SUBMIT_MESSAGE,
            message : message
        });
    },

    changeName: (name) => {
        if (name === null) return;
        appDispatcher.dispatch({
            actionType : ActionType.CHANGE_NAME,
            value: name
        });
    },
    submitName: () => {
        appDispatcher.dispatch({
            actionType : ActionType.SUBMIT_NAME
        });
    }
};
