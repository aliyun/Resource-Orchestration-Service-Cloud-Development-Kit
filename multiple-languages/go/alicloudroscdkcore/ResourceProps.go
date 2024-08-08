package alicloudroscdkcore


// Construction properties for {@link Resource}.
type ResourceProps struct {
	// The value passed in by users to the physical name prop of the resource.
	//
	// - `undefined` implies that a physical name will be allocated during deployment.
	// - a concrete value implies a specific physical name
	// - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
	//    by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.
	PhysicalName *string `field:"optional" json:"physicalName" yaml:"physicalName"`
}

