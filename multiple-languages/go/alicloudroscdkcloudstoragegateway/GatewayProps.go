package alicloudroscdkcloudstoragegateway


// Properties for defining a `Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
type GatewayProps struct {
	// Property category: The category of the gateway.
	Category interface{} `field:"required" json:"category" yaml:"category"`
	// Property location: The location of the gateway.
	Location interface{} `field:"required" json:"location" yaml:"location"`
	// Property name: The name of the gateway.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property type: The type of the gateway.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property description: The description of the gateway.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property gatewayClass: The class of the gateway.
	GatewayClass interface{} `field:"optional" json:"gatewayClass" yaml:"gatewayClass"`
	// Property postPaid: Whether the gateway is pay-as-you-go.
	PostPaid interface{} `field:"optional" json:"postPaid" yaml:"postPaid"`
	// Property publicNetworkBandwidth: The public network bandwidth of the gateway.
	PublicNetworkBandwidth interface{} `field:"optional" json:"publicNetworkBandwidth" yaml:"publicNetworkBandwidth"`
	// Property releaseAfterExpiration: Whether to release the gateway after expiration.
	ReleaseAfterExpiration interface{} `field:"optional" json:"releaseAfterExpiration" yaml:"releaseAfterExpiration"`
	// Property resourceRegionId: The region ID of the resource.
	ResourceRegionId interface{} `field:"optional" json:"resourceRegionId" yaml:"resourceRegionId"`
	// Property secondaryVSwitchId: The ID of the secondary VSwitch.
	SecondaryVSwitchId interface{} `field:"optional" json:"secondaryVSwitchId" yaml:"secondaryVSwitchId"`
	// Property storageBundleId: The ID of the storage bundle.
	StorageBundleId interface{} `field:"optional" json:"storageBundleId" yaml:"storageBundleId"`
	// Property untrustedEnvId: The ID of the untrusted environment.
	UntrustedEnvId interface{} `field:"optional" json:"untrustedEnvId" yaml:"untrustedEnvId"`
	// Property untrustedEnvInstanceType: The instance type of the untrusted environment.
	UntrustedEnvInstanceType interface{} `field:"optional" json:"untrustedEnvInstanceType" yaml:"untrustedEnvInstanceType"`
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

