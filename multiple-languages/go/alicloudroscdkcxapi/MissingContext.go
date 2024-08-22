package alicloudroscdkcxapi


// Backwards compatibility for when 'MissingContext' was defined here.
//
// This is necessary because its used as an input in the stable.
// See: core.Stack.reportMissingContext
//
// Deprecated: moved to package 'ros-assembly-schema'.
type MissingContext struct {
	// The missing context key.
	// Deprecated: moved to package 'ros-assembly-schema'.
	Key *string `field:"required" json:"key" yaml:"key"`
	// A set of provider-specific options.
	//
	// (This is the old untyped definition, which is necessary for backwards compatibility.
	// See cxschema for a type definition.)
	// Deprecated: moved to package 'ros-assembly-schema'.
	Props *map[string]interface{} `field:"required" json:"props" yaml:"props"`
	// The provider from which we expect this context key to be obtained.
	//
	// (This is the old untyped definition, which is necessary for backwards compatibility.
	// See cxschema for a type definition.)
	// Deprecated: moved to package 'ros-assembly-schema'.
	Provider *string `field:"required" json:"provider" yaml:"provider"`
}

