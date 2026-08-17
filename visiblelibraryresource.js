function setTabVisibility(executionContext) {
    var formContext = executionContext.getFormContext();

    // Name of the tab on the form
    var tab = formContext.ui.tabs.get("TAB_NAME");

    if (!tab) {
        console.log("Tab not found.");
        return;
    }

    // Security role name to check
    var requiredRole = "Sales Manager";

    var hasRole = userHasSecurityRole(requiredRole);

    tab.setVisible(hasRole);
}

function userHasSecurityRole(roleName) {
    var roles = Xrm.Utility.getGlobalContext().userSettings.roles;

    var hasRole = false;

    roles.forEach(function (role) {
        if (role.name.toLowerCase() === roleName.toLowerCase()) {
            hasRole = true;
        }
    });

    return hasRole;
}