package alicloudroscdkcxapi


// Backwards compatibility for when 'MetadataEntry' was defined here.
//
// This is necessary because its used as an input in the stable.
// See: core.ConstructNode.metadata
//
// Deprecated: moved to package 'ros-assembly-schema'.
type MetadataEntry struct {
	// The type of the metadata entry.
	// Deprecated: moved to package 'ros-assembly-schema'.
	Type *string `field:"required" json:"type" yaml:"type"`
	// The data.
	// Deprecated: moved to package 'ros-assembly-schema'.
	Data interface{} `field:"optional" json:"data" yaml:"data"`
	// A stack trace for when the entry was created.
	// Deprecated: moved to package 'ros-assembly-schema'.
	Trace *[]*string `field:"optional" json:"trace" yaml:"trace"`
}

