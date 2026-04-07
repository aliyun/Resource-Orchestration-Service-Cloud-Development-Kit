package alicloudroscdkcen


// Properties for defining a `RosTransitRouterGrantAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
type RosTransitRouterGrantAttachmentProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	CenOwnerId interface{} `field:"required" json:"cenOwnerId" yaml:"cenOwnerId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	OrderType interface{} `field:"optional" json:"orderType" yaml:"orderType"`
}

