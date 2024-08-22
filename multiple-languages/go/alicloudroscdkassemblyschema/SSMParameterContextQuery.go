package alicloudroscdkassemblyschema


// Query to SSM Parameter Context Provider.
type SSMParameterContextQuery struct {
	// Query account.
	Account *string `field:"required" json:"account" yaml:"account"`
	// Parameter name to query.
	ParameterName *string `field:"required" json:"parameterName" yaml:"parameterName"`
	// Query region.
	Region *string `field:"required" json:"region" yaml:"region"`
}

