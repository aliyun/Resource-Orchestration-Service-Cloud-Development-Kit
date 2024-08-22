package alicloudroscdkecs


// Properties for defining a `RosJoinSecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-joinsecuritygroup
type RosJoinSecurityGroupProps struct {
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InstanceIdList interface{} `field:"optional" json:"instanceIdList" yaml:"instanceIdList"`
	NetworkInterfaceList interface{} `field:"optional" json:"networkInterfaceList" yaml:"networkInterfaceList"`
}

