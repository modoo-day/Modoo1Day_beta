import { CommonActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        CommonActions.navigate({
            routeName,
            params,
        })
    )
    
}

function back() { 
    _navigator.dispatch(
        CommonActions.back()
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    back,
};