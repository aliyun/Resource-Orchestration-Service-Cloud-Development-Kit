package alicloudroscdkecs


// Properties for defining a `RosAssignPrivateIpAddresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignprivateipaddresses
type RosAssignPrivateIpAddressesProps struct {
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	SecondaryPrivateIpAddressCount interface{} `field:"optional" json:"secondaryPrivateIpAddressCount" yaml:"secondaryPrivateIpAddressCount"`
}

