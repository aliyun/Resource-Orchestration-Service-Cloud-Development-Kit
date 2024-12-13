package alicloudroscdkoos


// Properties for defining a `ServiceSettings`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
type ServiceSettingsProps struct {
	// Property deliveryOssBucketName: OSS bucket name.
	DeliveryOssBucketName interface{} `field:"optional" json:"deliveryOssBucketName" yaml:"deliveryOssBucketName"`
	// Property deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature.
	//
	// Defaults to false.
	DeliveryOssEnabled interface{} `field:"optional" json:"deliveryOssEnabled" yaml:"deliveryOssEnabled"`
	// Property deliveryOssKeyPrefix: OSS storage space directory, such as "oos\/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "".
	DeliveryOssKeyPrefix interface{} `field:"optional" json:"deliveryOssKeyPrefix" yaml:"deliveryOssKeyPrefix"`
	// Property deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature.
	//
	// Defaults to false.
	DeliverySlsEnabled interface{} `field:"optional" json:"deliverySlsEnabled" yaml:"deliverySlsEnabled"`
	// Property deliverySlsProjectName: SLS project name.
	DeliverySlsProjectName interface{} `field:"optional" json:"deliverySlsProjectName" yaml:"deliverySlsProjectName"`
	// Property rdcEnterpriseId: Enterprise ID.
	RdcEnterpriseId interface{} `field:"optional" json:"rdcEnterpriseId" yaml:"rdcEnterpriseId"`
}

