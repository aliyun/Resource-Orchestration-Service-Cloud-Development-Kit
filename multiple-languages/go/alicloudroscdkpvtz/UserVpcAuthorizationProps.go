package alicloudroscdkpvtz


// Properties for defining a `UserVpcAuthorization`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
type UserVpcAuthorizationProps struct {
	// Property authorizedUserId: The account ID of the user who authorizes the resource.
	AuthorizedUserId interface{} `field:"required" json:"authorizedUserId" yaml:"authorizedUserId"`
	// Property authChannel: Authorization channel.
	//
	// Valid values:
	// AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
	// RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
	AuthChannel interface{} `field:"optional" json:"authChannel" yaml:"authChannel"`
	// Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
	AuthCode interface{} `field:"optional" json:"authCode" yaml:"authCode"`
	// Property authType: Authorization type.
	AuthType interface{} `field:"optional" json:"authType" yaml:"authType"`
	// Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists.
	IgnoreDeletionForbidden interface{} `field:"optional" json:"ignoreDeletionForbidden" yaml:"ignoreDeletionForbidden"`
}

