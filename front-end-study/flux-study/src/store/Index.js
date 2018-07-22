import { appDispatcher } from '../dispatcher';
import { ActionType } from '../action';

export const messageStore = {message: [], onChange: null};
export const nameStore = {name: [], onChange: null};
export const mentStore = {ment: [], onChange: null};

appDispatcher.register(payload => {
    if(payload.actionType === ActionType.SUBMIT_MESSAGE) {
        messageStore.message.push({
            readYN : 'N',
            delYn : 'N',
            registedDate : new Date(),
            text : payload.message
        });
        messageStore.onChange();
    }
});

appDispatcher.register(payload => {
    if(payload.actionType === ActionType.CHANGE_NAME) {
        nameStore.name = payload.value;
        nameStore.onChange();
    }
});

appDispatcher.register(payload => {
    if(payload.actionType === ActionType.SUBMIT_NAME) {
        mentStore.ment = nameStore.name + '님 안녕하세요.';
        mentStore.onChange();
    }
});
