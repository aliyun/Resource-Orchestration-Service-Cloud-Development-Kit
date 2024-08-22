package alicloudroscdkecs


// Properties for defining a `RosSecurityGroupClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
type RosSecurityGroupCloneProps struct {
	SourceSecurityGroupId interface{} `field:"required" json:"sourceSecurityGroupId" yaml:"sourceSecurityGroupId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DestinationRegionId interface{} `field:"optional" json:"destinationRegionId" yaml:"destinationRegionId"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

