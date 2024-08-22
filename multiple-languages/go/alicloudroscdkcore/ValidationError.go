package alicloudroscdkcore


// An error returned during the validation phase.
type ValidationError struct {
	// The error message.
	Message *string `field:"required" json:"message" yaml:"message"`
	// The construct which emitted the error.
	Source Construct `field:"required" json:"source" yaml:"source"`
}

