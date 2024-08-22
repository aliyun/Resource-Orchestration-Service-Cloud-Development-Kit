package alicloudroscdkassemblyschema


// Describe the source of a file asset.
type FileSource struct {
	// External command which will produce the file asset to upload.
	Executable *[]*string `field:"optional" json:"executable" yaml:"executable"`
	// Packaging method.
	//
	// Only allowed when `path` is specified.
	Packaging FileAssetPackaging `field:"optional" json:"packaging" yaml:"packaging"`
	// The filesystem object to upload.
	//
	// This path is relative to the asset manifest location.
	Path *string `field:"optional" json:"path" yaml:"path"`
}

