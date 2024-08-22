package alicloudroscdkcxapi


// Models an ALIYUN execution environment, for use within the CDK toolkit.
type Environment struct {
	// The ALIYUN account this environment deploys into.
	Account *string `field:"required" json:"account" yaml:"account"`
	// The arbitrary name of this environment (user-set, or at least user-meaningful).
	Name *string `field:"required" json:"name" yaml:"name"`
	// The ALIYUN region name where this environment deploys into.
	Region *string `field:"required" json:"region" yaml:"region"`
}

