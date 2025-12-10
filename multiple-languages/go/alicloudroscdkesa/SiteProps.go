package alicloudroscdkesa


// Properties for defining a `Site`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-site
type SiteProps struct {
	// Property instanceId: The ID of the associated package instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property siteName: The name of the Site.
	SiteName interface{} `field:"required" json:"siteName" yaml:"siteName"`
	// Property accessType: The Access Type of the Site.
	AccessType interface{} `field:"optional" json:"accessType" yaml:"accessType"`
	// Property coverage: Acceleration area.
	Coverage interface{} `field:"optional" json:"coverage" yaml:"coverage"`
	// Property paymentType: Payment type.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of the site.
	Tags *[]*RosSite_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

