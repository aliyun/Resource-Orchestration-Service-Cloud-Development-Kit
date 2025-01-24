package alicloudroscdkcore


// Construction properties for {@link Resource}.
type ResourceProps struct {
	// The Alibaba Cloud account ID this resource belongs to.
	Account *string `field:"optional" json:"account" yaml:"account"`
	// ARN to deduce region and account from.
	//
	// The ARN is parsed and the account and region are taken from the ARN.
	// This should be used for imported resources.
	//
	// Cannot be supplied together with either `account` or `region`.
	EnvironmentFromArn interface{} `field:"optional" json:"environmentFromArn" yaml:"environmentFromArn"`
	// The value passed in by users to the physical name prop of the resource.
	//
	// - `undefined` implies that a physical name will be allocated during deployment.
	// - a concrete value implies a specific physical name
	// - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
	//    by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.
	PhysicalName *string `field:"optional" json:"physicalName" yaml:"physicalName"`
	// The Alibaba Cloud region this resource belongs to.
	Region *string `field:"optional" json:"region" yaml:"region"`
}

