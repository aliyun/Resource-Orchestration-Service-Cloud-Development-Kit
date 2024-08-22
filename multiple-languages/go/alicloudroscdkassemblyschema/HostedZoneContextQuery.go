package alicloudroscdkassemblyschema


// Query to hosted zone context provider.
type HostedZoneContextQuery struct {
	// Query account.
	Account *string `field:"required" json:"account" yaml:"account"`
	// The domain name e.g. example.com to lookup.
	DomainName *string `field:"required" json:"domainName" yaml:"domainName"`
	// Query region.
	Region *string `field:"required" json:"region" yaml:"region"`
	// True if the zone you want to find is a private hosted zone.
	PrivateZone *bool `field:"optional" json:"privateZone" yaml:"privateZone"`
	// The VPC ID to that the private zone must be associated with.
	//
	// If you provide VPC ID and privateZone is false, this will return no results
	// and raise an error.
	VpcId *string `field:"optional" json:"vpcId" yaml:"vpcId"`
}

