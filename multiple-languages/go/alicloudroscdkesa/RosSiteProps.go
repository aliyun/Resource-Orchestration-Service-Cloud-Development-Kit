package alicloudroscdkesa


// Properties for defining a `RosSite`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-site
type RosSiteProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	SiteName interface{} `field:"required" json:"siteName" yaml:"siteName"`
	AccessType interface{} `field:"optional" json:"accessType" yaml:"accessType"`
	Coverage interface{} `field:"optional" json:"coverage" yaml:"coverage"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosSite_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

