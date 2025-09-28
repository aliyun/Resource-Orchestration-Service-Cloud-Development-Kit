package alicloudroscdkemr


// Properties for defining a `StarRocksInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
type StarRocksInstanceProps struct {
	// Property adminPassword: Password of admin user.
	AdminPassword interface{} `field:"required" json:"adminPassword" yaml:"adminPassword"`
	// Property clusterZoneId: Primary ZoneId of StarRocks instance.
	ClusterZoneId interface{} `field:"required" json:"clusterZoneId" yaml:"clusterZoneId"`
	// Property instanceName: The name of the StarRocks instance.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard.
	PackageType interface{} `field:"required" json:"packageType" yaml:"packageType"`
	// Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation.
	//
	// - **shared_data: Storage and calculation separation.
	// - **lakehouse: Data lake analysis.
	RunMode interface{} `field:"required" json:"runMode" yaml:"runMode"`
	// Property version: The version of the StarRocks instance.
	Version interface{} `field:"required" json:"version" yaml:"version"`
	// Property vpcId: The VPC ID of the StarRocks instance.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property autoRenew: Whether to enable automatic renewal.
	//
	// This is only meaningful when payType is set to PrePaid. Disabled by default.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property backendNodeGroups: List of BE or CN compute group information.
	BackendNodeGroups interface{} `field:"optional" json:"backendNodeGroups" yaml:"backendNodeGroups"`
	// Property duration: Duration of purchase.
	//
	// It is only meaningful when PayType is set to PrePaid.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property encrypted: Whether encrypted.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property frontendNodeGroups: List of FE Node Group Information.
	FrontendNodeGroups interface{} `field:"optional" json:"frontendNodeGroups" yaml:"frontendNodeGroups"`
	// Property kmsKeyId: The ID of the Key Management Service (KMS) key.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property observerNodeGroups: list of Observer calculates group information.
	ObserverNodeGroups interface{} `field:"optional" json:"observerNodeGroups" yaml:"observerNodeGroups"`
	// Property orderId: Order ID.
	OrderId interface{} `field:"optional" json:"orderId" yaml:"orderId"`
	// Property ossAccessingRoleName: Role name used for password-free access to OSS.
	OssAccessingRoleName interface{} `field:"optional" json:"ossAccessingRoleName" yaml:"ossAccessingRoleName"`
	// Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property promotionOptionNo: Promotion ID.
	PromotionOptionNo interface{} `field:"optional" json:"promotionOptionNo" yaml:"promotionOptionNo"`
	// Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property resourceType: Resource type.
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	// Property tags: Tags of StarRocks.
	Tags *[]*RosStarRocksInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vswitches: The VSwitches info of the StarRocks instance.
	Vswitches interface{} `field:"optional" json:"vswitches" yaml:"vswitches"`
}

