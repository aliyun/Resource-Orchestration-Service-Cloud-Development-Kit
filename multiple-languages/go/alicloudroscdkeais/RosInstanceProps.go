package alicloudroscdkeais


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-instance
type RosInstanceProps struct {
	CreateWithNotebook interface{} `field:"required" json:"createWithNotebook" yaml:"createWithNotebook"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	EnvironmentVar interface{} `field:"optional" json:"environmentVar" yaml:"environmentVar"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

