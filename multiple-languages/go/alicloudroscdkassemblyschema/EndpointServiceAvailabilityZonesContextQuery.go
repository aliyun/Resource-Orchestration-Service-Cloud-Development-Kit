package alicloudroscdkassemblyschema


// Query to endpoint service context provider.
type EndpointServiceAvailabilityZonesContextQuery struct {
	// Query account.
	Account *string `field:"required" json:"account" yaml:"account"`
	// Query region.
	Region *string `field:"required" json:"region" yaml:"region"`
	// Query service name.
	ServiceName *string `field:"required" json:"serviceName" yaml:"serviceName"`
}

