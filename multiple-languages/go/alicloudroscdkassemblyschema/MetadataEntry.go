package alicloudroscdkassemblyschema


// A metadata entry in a cloud assembly artifact.
type MetadataEntry struct {
	// The type of the metadata entry.
	Type *string `field:"required" json:"type" yaml:"type"`
	// The data.
	Data interface{} `field:"optional" json:"data" yaml:"data"`
	// A stack trace for when the entry was created.
	Trace *[]*string `field:"optional" json:"trace" yaml:"trace"`
}

