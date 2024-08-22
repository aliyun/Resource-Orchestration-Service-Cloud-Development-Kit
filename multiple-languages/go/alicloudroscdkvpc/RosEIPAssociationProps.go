package alicloudroscdkvpc


// Properties for defining a `RosEIPAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
type RosEIPAssociationProps struct {
	AllocationId interface{} `field:"required" json:"allocationId" yaml:"allocationId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
}

