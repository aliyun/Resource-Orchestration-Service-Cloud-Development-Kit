package alicloudroscdkots


// Properties for defining a `RosVpcBinder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
type RosVpcBinderProps struct {
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	Vpcs interface{} `field:"required" json:"vpcs" yaml:"vpcs"`
}

