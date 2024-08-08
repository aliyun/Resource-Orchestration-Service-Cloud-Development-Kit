package alicloudroscdkvpc


// Properties for defining a `HaVipAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
type HaVipAssociationProps struct {
	// Property haVipId: The ID of the HAVIP.
	HaVipId interface{} `field:"required" json:"haVipId" yaml:"haVipId"`
	// Property instanceId: The ID of the ECS instance to be associated with the HAVIP.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property instanceType: The type of the instance to be associated with the HAVIP.
	//
	// Valid values:
	// EcsInstance: an ECS instance
	// NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
}

