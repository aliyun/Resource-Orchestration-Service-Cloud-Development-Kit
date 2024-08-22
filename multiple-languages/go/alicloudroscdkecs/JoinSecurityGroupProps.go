package alicloudroscdkecs


// Properties for defining a `JoinSecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-joinsecuritygroup
type JoinSecurityGroupProps struct {
	// Property securityGroupId: Security group id to join.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property instanceId: Instance Id to the join the security group.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
	InstanceIdList interface{} `field:"optional" json:"instanceIdList" yaml:"instanceIdList"`
	// Property networkInterfaceList: Network interface list.
	NetworkInterfaceList interface{} `field:"optional" json:"networkInterfaceList" yaml:"networkInterfaceList"`
}

