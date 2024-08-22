package alicloudroscdkcore


// Options for creating lazy untyped tokens.
type LazyAnyValueOptions struct {
	// Use the given name as a display hint.
	DisplayHint *string `field:"optional" json:"displayHint" yaml:"displayHint"`
	// If the produced value is an array and it is empty, return 'undefined' instead.
	OmitEmptyArray *bool `field:"optional" json:"omitEmptyArray" yaml:"omitEmptyArray"`
}

