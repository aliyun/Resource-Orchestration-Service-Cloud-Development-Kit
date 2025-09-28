package alicloudroscdkesa


// Properties for defining a `RosSiteDeliveryTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
type RosSiteDeliveryTaskProps struct {
	BusinessType interface{} `field:"required" json:"businessType" yaml:"businessType"`
	DataCenter interface{} `field:"required" json:"dataCenter" yaml:"dataCenter"`
	DeliveryType interface{} `field:"required" json:"deliveryType" yaml:"deliveryType"`
	FieldName interface{} `field:"required" json:"fieldName" yaml:"fieldName"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	DiscardRate interface{} `field:"optional" json:"discardRate" yaml:"discardRate"`
	HttpDelivery interface{} `field:"optional" json:"httpDelivery" yaml:"httpDelivery"`
	KafkaDelivery interface{} `field:"optional" json:"kafkaDelivery" yaml:"kafkaDelivery"`
	OssDelivery interface{} `field:"optional" json:"ossDelivery" yaml:"ossDelivery"`
	S3Delivery interface{} `field:"optional" json:"s3Delivery" yaml:"s3Delivery"`
	SlsDelivery interface{} `field:"optional" json:"slsDelivery" yaml:"slsDelivery"`
}

