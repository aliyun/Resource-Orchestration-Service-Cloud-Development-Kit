package alicloudroscdkots


// Properties for defining a `VpcBinder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
type VpcBinderProps struct {
	// Property instanceName: Instance name.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property vpcs: Vpc binding configuration.
	Vpcs interface{} `field:"required" json:"vpcs" yaml:"vpcs"`
}

