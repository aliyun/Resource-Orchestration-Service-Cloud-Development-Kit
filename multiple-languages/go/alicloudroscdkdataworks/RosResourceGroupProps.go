package alicloudroscdkdataworks


// Properties for defining a `RosResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
type RosResourceGroupProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	AutoRenewEnabled interface{} `field:"optional" json:"autoRenewEnabled" yaml:"autoRenewEnabled"`
	PaymentDuration interface{} `field:"optional" json:"paymentDuration" yaml:"paymentDuration"`
	PaymentDurationUnit interface{} `field:"optional" json:"paymentDurationUnit" yaml:"paymentDurationUnit"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	Tags *[]*RosResourceGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

