package alicloudroscdkcore


// Stack artifact options.
type SynthesizeStackArtifactOptions struct {
	// Identifiers of additional dependencies.
	AdditionalDependencies *[]*string `field:"optional" json:"additionalDependencies" yaml:"additionalDependencies"`
	// Values for ROS stack parameters that should be passed when the stack is deployed.
	Parameters *map[string]*string `field:"optional" json:"parameters" yaml:"parameters"`
}

