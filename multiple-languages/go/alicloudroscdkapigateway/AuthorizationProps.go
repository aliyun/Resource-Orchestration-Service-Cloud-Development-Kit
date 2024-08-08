package alicloudroscdkapigateway


// Properties for defining a `Authorization`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
type AuthorizationProps struct {
	// Property apiIds: APIs to authorize.
	ApiIds interface{} `field:"required" json:"apiIds" yaml:"apiIds"`
	// Property appIds: APPs are authorized to APIs.
	AppIds interface{} `field:"required" json:"appIds" yaml:"appIds"`
	// Property groupId: The id of the group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property stageName: Authorize in this stage.
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
	// Property authValidTime: The time (UTC) when the authorization expires.
	//
	// If this parameter is empty, the authorization does not expire.
	// Pattern: YYYY-MM-DDThh:mm:ssZ.
	AuthValidTime interface{} `field:"optional" json:"authValidTime" yaml:"authValidTime"`
	// Property description: Description of the authorization, less than 180 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

