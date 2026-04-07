package alicloudroscdkcloudstoragegateway


// Properties for defining a `RosGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
type RosGatewayProps struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	Location interface{} `field:"required" json:"location" yaml:"location"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	GatewayClass interface{} `field:"optional" json:"gatewayClass" yaml:"gatewayClass"`
	PostPaid interface{} `field:"optional" json:"postPaid" yaml:"postPaid"`
	PublicNetworkBandwidth interface{} `field:"optional" json:"publicNetworkBandwidth" yaml:"publicNetworkBandwidth"`
	ReleaseAfterExpiration interface{} `field:"optional" json:"releaseAfterExpiration" yaml:"releaseAfterExpiration"`
	ResourceRegionId interface{} `field:"optional" json:"resourceRegionId" yaml:"resourceRegionId"`
	SecondaryVSwitchId interface{} `field:"optional" json:"secondaryVSwitchId" yaml:"secondaryVSwitchId"`
	StorageBundleId interface{} `field:"optional" json:"storageBundleId" yaml:"storageBundleId"`
	UntrustedEnvId interface{} `field:"optional" json:"untrustedEnvId" yaml:"untrustedEnvId"`
	UntrustedEnvInstanceType interface{} `field:"optional" json:"untrustedEnvInstanceType" yaml:"untrustedEnvInstanceType"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

