package alicloudroscdkoos


// Properties for defining a `RosServiceSettings`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
type RosServiceSettingsProps struct {
	DeliveryOssBucketName interface{} `field:"optional" json:"deliveryOssBucketName" yaml:"deliveryOssBucketName"`
	DeliveryOssEnabled interface{} `field:"optional" json:"deliveryOssEnabled" yaml:"deliveryOssEnabled"`
	DeliveryOssKeyPrefix interface{} `field:"optional" json:"deliveryOssKeyPrefix" yaml:"deliveryOssKeyPrefix"`
	DeliverySlsEnabled interface{} `field:"optional" json:"deliverySlsEnabled" yaml:"deliverySlsEnabled"`
	DeliverySlsProjectName interface{} `field:"optional" json:"deliverySlsProjectName" yaml:"deliverySlsProjectName"`
	RdcEnterpriseId interface{} `field:"optional" json:"rdcEnterpriseId" yaml:"rdcEnterpriseId"`
}

