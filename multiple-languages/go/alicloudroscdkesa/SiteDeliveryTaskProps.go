package alicloudroscdkesa


// Properties for defining a `SiteDeliveryTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
type SiteDeliveryTaskProps struct {
	// Property businessType: Real-time log type.
	//
	// Valid values:
	// - `dcdn_log_access_l1 (default)`: access log.
	// - `dcdn_log_er`: Edge Routine logs.
	// - `dcdn_log_waf`: firewall logs.
	// - `dcdn_log_ipa`: TCP\/UDP proxy logs.
	BusinessType interface{} `field:"required" json:"businessType" yaml:"businessType"`
	// Property dataCenter: Data Center.
	//
	// Values:
	// - `cn`: Mainland China.
	// - `sg`: Global (excluding Mainland China).
	DataCenter interface{} `field:"required" json:"dataCenter" yaml:"dataCenter"`
	// Property deliveryType: Delivery Type: - `sls`: Alibaba Cloud Simple Log Service (SLS).
	//
	// - `http`: Http service.
	// - `aws3`: Amazon s3 service.
	// - `oss`: Alibaba Cloud Object Storage Service.
	// - `kafka`: Kafka service.
	// - `aws3cmpt`: Amazon s3 Compatible Service.
	DeliveryType interface{} `field:"required" json:"deliveryType" yaml:"deliveryType"`
	// Property fieldName: The list of delivery fields to be modified, separated by commas.
	FieldName interface{} `field:"required" json:"fieldName" yaml:"fieldName"`
	// Property siteId: The site ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property taskName: The name of the delivery task.
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	// Property discardRate: If the discard rate is not filled, the default value is 0.
	DiscardRate interface{} `field:"optional" json:"discardRate" yaml:"discardRate"`
	// Property httpDelivery: HTTP delivery configuration parameters.
	HttpDelivery interface{} `field:"optional" json:"httpDelivery" yaml:"httpDelivery"`
	// Property kafkaDelivery: Kafka delivery configuration parameters.
	KafkaDelivery interface{} `field:"optional" json:"kafkaDelivery" yaml:"kafkaDelivery"`
	// Property ossDelivery: OSS delivery configuration.
	OssDelivery interface{} `field:"optional" json:"ossDelivery" yaml:"ossDelivery"`
	// Property s3Delivery: S3\/S3 compatible delivery configuration parameters.
	S3Delivery interface{} `field:"optional" json:"s3Delivery" yaml:"s3Delivery"`
	// Property slsDelivery: SLS delivery configuration.
	SlsDelivery interface{} `field:"optional" json:"slsDelivery" yaml:"slsDelivery"`
}

