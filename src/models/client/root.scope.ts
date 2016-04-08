/**
 * Extending rootscope to add custom properties. 
 */
export interface RootScopeExt extends ng.IRootScopeService {
    //Data objects
    auth: Auth;
    common: Common;
    
    showToast(message: string);
}

/**
 * Class holding authentication information
 */
class Auth {
    //Status of authentication
    isAuthenticated: boolean;
    isAuthenticationChecked: boolean;

    //User Details
    user: any;
}

/**
 * Class for holding common information
 */
class Common {
    title: string;
}