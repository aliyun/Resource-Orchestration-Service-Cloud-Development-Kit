package alicloudroscdkcore


type ArnComponents struct {
	// Resource type (e.g. "instance", "functions", "role"). For some resource types, e.g. OSS buckets, this field defines the bucket name.
	Resource *string `field:"required" json:"resource" yaml:"resource"`
	// The service namespace that identifies the ACS product (for example, 'ecs', 'fc', 'ram').
	Service *string `field:"required" json:"service" yaml:"service"`
	// The ID of the ACS account that owns the resource, without the hyphens.
	//
	// For example, 123456789012. Note that the ARNs for some resources don't
	// require an account number, so this component might be omitted.
	Account *string `field:"optional" json:"account" yaml:"account"`
	// The specific ARN format to use for this ARN value.
	ArnFormat ArnFormat `field:"optional" json:"arnFormat" yaml:"arnFormat"`
	// The partition that the resource is in.
	Partition *string `field:"optional" json:"partition" yaml:"partition"`
	// The region the resource resides in.
	//
	// Note that the ARNs for some resources
	// do not require a region, so this component might be omitted.
	Region *string `field:"optional" json:"region" yaml:"region"`
	// Resource name or path within the resource (i.e. OSS bucket object key) or a wildcard such as ``"*"``. This is service-dependent.
	ResourceName *string `field:"optional" json:"resourceName" yaml:"resourceName"`
}

