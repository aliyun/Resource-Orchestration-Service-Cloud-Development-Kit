package alicloudroscdkpvtz


// Properties for defining a `RosUserVpcAuthorization`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
type RosUserVpcAuthorizationProps struct {
	AuthorizedUserId interface{} `field:"required" json:"authorizedUserId" yaml:"authorizedUserId"`
	AuthChannel interface{} `field:"optional" json:"authChannel" yaml:"authChannel"`
	AuthCode interface{} `field:"optional" json:"authCode" yaml:"authCode"`
	AuthType interface{} `field:"optional" json:"authType" yaml:"authType"`
	IgnoreDeletionForbidden interface{} `field:"optional" json:"ignoreDeletionForbidden" yaml:"ignoreDeletionForbidden"`
}

