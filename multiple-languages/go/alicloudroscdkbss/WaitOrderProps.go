package alicloudroscdkbss


// Properties for defining a `WaitOrder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
type WaitOrderProps struct {
	// Property orderIds: A list of order ids.
	OrderIds interface{} `field:"required" json:"orderIds" yaml:"orderIds"`
	// Property cancelOnDelete: Cancel order where delete the resource.
	//
	// Ignore the paid order. Default true
	CancelOnDelete interface{} `field:"optional" json:"cancelOnDelete" yaml:"cancelOnDelete"`
	// Property waitForOrderProduced: Wait util all orders related ROS resources are produced.
	//
	// Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
	WaitForOrderProduced interface{} `field:"optional" json:"waitForOrderProduced" yaml:"waitForOrderProduced"`
}

