package alicloudroscdkassemblyschema


// Query to AMI context provider.
type AmiContextQuery struct {
	// Account to query.
	Account *string `field:"required" json:"account" yaml:"account"`
	// Filters to DescribeImages call.
	Filters *map[string]*[]*string `field:"required" json:"filters" yaml:"filters"`
	// Region to query.
	Region *string `field:"required" json:"region" yaml:"region"`
	// Owners to DescribeImages call.
	Owners *[]*string `field:"optional" json:"owners" yaml:"owners"`
}

