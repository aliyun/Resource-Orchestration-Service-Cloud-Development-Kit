package alicloudroscdkapigateway


// Properties for defining a `RosAuthorization`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
type RosAuthorizationProps struct {
	ApiIds interface{} `field:"required" json:"apiIds" yaml:"apiIds"`
	AppIds interface{} `field:"required" json:"appIds" yaml:"appIds"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
	AuthValidTime interface{} `field:"optional" json:"authValidTime" yaml:"authValidTime"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

