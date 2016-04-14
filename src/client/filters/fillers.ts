function fillNullFilter() {
    return function(data) {
        return (data == null || data == '') ? '-' : data;
    }
}

angular.module('TheHub').filter('fillNull', fillNullFilter);