package alicloudroscdkemr


// Properties for defining a `RosStarRocksInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
type RosStarRocksInstanceProps struct {
	AdminPassword interface{} `field:"required" json:"adminPassword" yaml:"adminPassword"`
	ClusterZoneId interface{} `field:"required" json:"clusterZoneId" yaml:"clusterZoneId"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	PackageType interface{} `field:"required" json:"packageType" yaml:"packageType"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	RunMode interface{} `field:"required" json:"runMode" yaml:"runMode"`
	Version interface{} `field:"required" json:"version" yaml:"version"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	BackendNodeGroups interface{} `field:"optional" json:"backendNodeGroups" yaml:"backendNodeGroups"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	FrontendNodeGroups interface{} `field:"optional" json:"frontendNodeGroups" yaml:"frontendNodeGroups"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	ObserverNodeGroups interface{} `field:"optional" json:"observerNodeGroups" yaml:"observerNodeGroups"`
	OrderId interface{} `field:"optional" json:"orderId" yaml:"orderId"`
	OssAccessingRoleName interface{} `field:"optional" json:"ossAccessingRoleName" yaml:"ossAccessingRoleName"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	PromotionOptionNo interface{} `field:"optional" json:"promotionOptionNo" yaml:"promotionOptionNo"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	Tags *[]*RosStarRocksInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Vswitches interface{} `field:"optional" json:"vswitches" yaml:"vswitches"`
}

