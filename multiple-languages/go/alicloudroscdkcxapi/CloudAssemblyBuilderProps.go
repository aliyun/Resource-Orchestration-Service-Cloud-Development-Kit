package alicloudroscdkcxapi


// Construction properties for CloudAssemblyBuilder.
type CloudAssemblyBuilderProps struct {
	// Use the given asset output directory.
	AssetOutdir *string `field:"optional" json:"assetOutdir" yaml:"assetOutdir"`
	// If this builder is for a nested assembly, the parent assembly builder.
	ParentBuilder CloudAssemblyBuilder `field:"optional" json:"parentBuilder" yaml:"parentBuilder"`
}

