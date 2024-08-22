package alicloudroscdkcxapi


type MetadataEntryResult struct {
	// The type of the metadata entry.
	Type *string `field:"required" json:"type" yaml:"type"`
	// The data.
	Data interface{} `field:"optional" json:"data" yaml:"data"`
	// A stack trace for when the entry was created.
	Trace *[]*string `field:"optional" json:"trace" yaml:"trace"`
	// The path in which this entry was defined.
	Path *string `field:"required" json:"path" yaml:"path"`
}

