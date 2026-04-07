package alicloudroscdkcen


// Properties for defining a `RosInterRegionTrafficQosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
type RosInterRegionTrafficQosPolicyProps struct {
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	BandwidthGuaranteeMode interface{} `field:"optional" json:"bandwidthGuaranteeMode" yaml:"bandwidthGuaranteeMode"`
	InterRegionTrafficQosPolicyDescription interface{} `field:"optional" json:"interRegionTrafficQosPolicyDescription" yaml:"interRegionTrafficQosPolicyDescription"`
	InterRegionTrafficQosPolicyName interface{} `field:"optional" json:"interRegionTrafficQosPolicyName" yaml:"interRegionTrafficQosPolicyName"`
}

