// All Requires
const { createTVShow } = require("../../helpers/tvShowHelper");
const { checkPermission } = require("../../utils/permissionChecker");
const { singleResponse } = require("../../utils/response");

// Create NEW TV SHOW Controller
module.exports = async (req, db, user, isAuth) => {

    // Check Permission
    const checkPermissions = await checkPermission(user, isAuth);
    if (!checkPermissions.success) {
        return { message: "You dont have access to this action!!!", status: false };
    }

    // Return If No Auth
    if (!user || !isAuth) return { message: "Not Authorized", status: false };

    // Helper
    const data = await createTVShow(req, db, user);

    // Return Data
    return singleResponse(data);

}