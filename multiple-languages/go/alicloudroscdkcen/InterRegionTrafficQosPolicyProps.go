package alicloudroscdkcen


// Properties for defining a `InterRegionTrafficQosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
type InterRegionTrafficQosPolicyProps struct {
	// Property transitRouterAttachmentId: The ID of the inter-region connection.
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	// Property transitRouterId: The ID of the transit router.
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	// Property bandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.
	//
	// You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:
	//   * byBandwidth: allocates an absolute bandwidth value for the QoS queue.
	//   * byBandwidthPercent (default): allocates a bandwidth percentage for the OoS queue.
	BandwidthGuaranteeMode interface{} `field:"optional" json:"bandwidthGuaranteeMode" yaml:"bandwidthGuaranteeMode"`
	// Property interRegionTrafficQosPolicyDescription: The description of the QoS policy.
	//
	// This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
	InterRegionTrafficQosPolicyDescription interface{} `field:"optional" json:"interRegionTrafficQosPolicyDescription" yaml:"interRegionTrafficQosPolicyDescription"`
	// Property interRegionTrafficQosPolicyName: The name of the QoS policy.
	//
	// The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
	InterRegionTrafficQosPolicyName interface{} `field:"optional" json:"interRegionTrafficQosPolicyName" yaml:"interRegionTrafficQosPolicyName"`
}

