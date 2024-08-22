package alicloudroscdkcxapi


// Backwards compatibility for when 'RuntimeInfo' was defined here.
//
// This is necessary because its used as an input in the stable.
// See: core.ConstructNode.synth
//
// Deprecated: moved to package 'ros-assembly-schema'.
type RuntimeInfo struct {
	// The list of libraries loaded in the application, associated with their versions.
	// Deprecated: moved to package 'ros-assembly-schema'.
	Libraries *map[string]*string `field:"required" json:"libraries" yaml:"libraries"`
}

