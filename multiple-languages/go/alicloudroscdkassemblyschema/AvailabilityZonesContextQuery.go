package alicloudroscdkassemblyschema


// Query to availability zone context provider.
type AvailabilityZonesContextQuery struct {
	// Query account.
	Account *string `field:"required" json:"account" yaml:"account"`
	// Query region.
	Region *string `field:"required" json:"region" yaml:"region"`
}

