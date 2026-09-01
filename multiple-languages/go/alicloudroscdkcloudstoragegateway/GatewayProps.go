package alicloudroscdkcloudstoragegateway


// Properties for defining a `Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
type GatewayProps struct {
	// Property category: The category of the gateway.
	//
	// The default value is `Cloud`.
	Category interface{} `field:"required" json:"category" yaml:"category"`
	// Property location: The location of the gateway.
	Location interface{} `field:"required" json:"location" yaml:"location"`
	// Property name: The name of the gateway.
	//
	// The name must be 60 characters in length. The name must
	// start with a letter or a Chinese character. The name can contain letters, Chinese
	// characters, digits, underscores (_), hyphens (-), and periods (.).
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property type: The type of the gateway.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property description: The description of the gateway.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property gatewayClass: If your gateway is deployed in a data center, which is an on-premises gateway, you can ignore this parameter.
	//
	// If your gateway is deployed on the cloud, which is a cloud gateway, valid
	// values are:
	// - Basic: Basic
	// - Standard: Medium
	// - Enhanced: Enhanced
	// - Advanced: Performance.
	GatewayClass interface{} `field:"optional" json:"gatewayClass" yaml:"gatewayClass"`
	// Property postPaid: Valid values: - true: pay-as-you-go.
	//
	// - false: subscription.
	// Default value: false (subscription).
	PostPaid interface{} `field:"optional" json:"postPaid" yaml:"postPaid"`
	// Property publicNetworkBandwidth: > - This parameter is supported only for cloud gateways.
	//
	// You can ignore this
	// parameter for on-premises gateways.
	// > - Configure this parameter only when you need to mount an OSS bucket across
	// regions.
	// > - If you specify 0 or do not specify this parameter, the default value is 5.
	PublicNetworkBandwidth interface{} `field:"optional" json:"publicNetworkBandwidth" yaml:"publicNetworkBandwidth"`
	// Property releaseAfterExpiration: Specifies whether to release the gateway when the subscription expires.
	//
	// Valid
	// values:
	// true: The gateway is automatically released.
	// false: The billing method of the gateway is automatically changed to
	// pay-as-you-go after the subscription expires.
	ReleaseAfterExpiration interface{} `field:"optional" json:"releaseAfterExpiration" yaml:"releaseAfterExpiration"`
	// Property resourceRegionId: The region ID of the resource.
	ResourceRegionId interface{} `field:"optional" json:"resourceRegionId" yaml:"resourceRegionId"`
	// Property secondaryVSwitchId: The ID of the secondary VSwitch.
	SecondaryVSwitchId interface{} `field:"optional" json:"secondaryVSwitchId" yaml:"secondaryVSwitchId"`
	// Property storageBundleId: The ID of the gateway cluster.
	//
	// You must specify this parameter if you do not
	// specify ResourceRegionId.
	StorageBundleId interface{} `field:"optional" json:"storageBundleId" yaml:"storageBundleId"`
	// Property untrustedEnvId: The ID of the untrusted environment.
	UntrustedEnvId interface{} `field:"optional" json:"untrustedEnvId" yaml:"untrustedEnvId"`
	// Property untrustedEnvInstanceType: The instance type of the untrusted environment.
	UntrustedEnvInstanceType interface{} `field:"optional" json:"untrustedEnvInstanceType" yaml:"untrustedEnvInstanceType"`
	// Property vSwitchId: The ID of the virtual switch.
	//
	// If your gateway is deployed in a data center, you
	// can ignore this parameter.
	// - The vSwitch must be in the same VPC as the ECS instance that you want to
	// attach.
	// - If no gateway resources can be allocated in the zone where the vSwitch resides,
	// create a vSwitch in another zone.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

