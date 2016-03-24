/**
 * Extending rootscope to add custom properties. 
 */
export interface RootScopeExt extends ng.IRootScopeService {
    //Data objects
    auth: Auth;

    showToast(message: string);
}

/**
 * Class holding authentication information
 */
class Auth {
    isAuthenticated: boolean;
    isAuthenticationChecked: boolean;
}