package alicloudroscdkassemblyschema


// Query input for looking up a VPC.
type VpcContextQuery struct {
	// Query account.
	Account *string `field:"required" json:"account" yaml:"account"`
	// Filters to apply to the VPC.
	//
	// Filter parameters are the same as passed to DescribeVpcs.
	Filter *map[string]*string `field:"required" json:"filter" yaml:"filter"`
	// Query region.
	Region *string `field:"required" json:"region" yaml:"region"`
	// Whether to populate the subnetGroups field of the {@link VpcContextResponse}, which contains potentially asymmetric subnet groups.
	ReturnAsymmetricSubnets *bool `field:"optional" json:"returnAsymmetricSubnets" yaml:"returnAsymmetricSubnets"`
	// Optional tag for subnet group name.
	//
	// If not provided, we'll look at the ros-cdk:subnet-name tag.
	// If the subnet does not have the specified tag,
	// we'll use its type as the name.
	SubnetGroupNameTag *string `field:"optional" json:"subnetGroupNameTag" yaml:"subnetGroupNameTag"`
}

