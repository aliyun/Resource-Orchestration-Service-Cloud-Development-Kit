package alicloudroscdkhbr


// Properties for defining a `RosCrossAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
type RosCrossAccountProps struct {
	Alias interface{} `field:"optional" json:"alias" yaml:"alias"`
	CrossAccountRoleName interface{} `field:"optional" json:"crossAccountRoleName" yaml:"crossAccountRoleName"`
	CrossAccountType interface{} `field:"optional" json:"crossAccountType" yaml:"crossAccountType"`
	CrossAccountUserId interface{} `field:"optional" json:"crossAccountUserId" yaml:"crossAccountUserId"`
}

