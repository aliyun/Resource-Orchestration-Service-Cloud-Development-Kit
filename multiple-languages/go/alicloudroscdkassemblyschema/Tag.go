package alicloudroscdkassemblyschema


// Metadata Entry spec for stack tag.
type Tag struct {
	// Tag key.
	Key *string `field:"required" json:"key" yaml:"key"`
	// Tag value.
	Value *string `field:"required" json:"value" yaml:"value"`
}

