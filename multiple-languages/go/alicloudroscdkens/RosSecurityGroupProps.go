package alicloudroscdkens


// Properties for defining a `RosSecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
type RosSecurityGroupProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Permissions interface{} `field:"optional" json:"permissions" yaml:"permissions"`
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
}

