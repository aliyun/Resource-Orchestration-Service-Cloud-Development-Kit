package alicloudroscdkcore


// Options for creating a lazy list token.
type LazyListValueOptions struct {
	// Use the given name as a display hint.
	DisplayHint *string `field:"optional" json:"displayHint" yaml:"displayHint"`
	// If the produced list is empty, return 'undefined' instead.
	OmitEmpty *bool `field:"optional" json:"omitEmpty" yaml:"omitEmpty"`
}

