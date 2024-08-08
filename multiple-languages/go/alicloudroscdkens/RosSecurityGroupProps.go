package alicloudroscdkens


// Properties for defining a `RosSecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
type RosSecurityGroupProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	SecurityGroupEgress interface{} `field:"optional" json:"securityGroupEgress" yaml:"securityGroupEgress"`
	SecurityGroupIngress interface{} `field:"optional" json:"securityGroupIngress" yaml:"securityGroupIngress"`
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
}

