import asyncHandler from  "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

const healthCheck = asyncHandler( async (req, res) => {

    console.log(req.oidc.isAuthenticated());
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                [],
                "API Is Running Good!"
            )
        );
});

export { healthCheck };