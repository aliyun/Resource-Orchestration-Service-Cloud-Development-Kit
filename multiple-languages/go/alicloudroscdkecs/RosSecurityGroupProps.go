package alicloudroscdkecs


// Properties for defining a `RosSecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroup
type RosSecurityGroupProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupEgress interface{} `field:"optional" json:"securityGroupEgress" yaml:"securityGroupEgress"`
	SecurityGroupIngress interface{} `field:"optional" json:"securityGroupIngress" yaml:"securityGroupIngress"`
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	Tags *[]*RosSecurityGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

