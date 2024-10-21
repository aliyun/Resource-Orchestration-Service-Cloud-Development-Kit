package alicloudroscdkcore


type RosRuleAssertionProps struct {
	// Define assertions.
	Assert IResolvable `field:"required" json:"assert" yaml:"assert"`
	// Define the assertion description.
	AssertDescription *string `field:"optional" json:"assertDescription" yaml:"assertDescription"`
}

