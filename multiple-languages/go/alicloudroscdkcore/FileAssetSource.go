package alicloudroscdkcore


// Represents the source for a file asset.
type FileAssetSource struct {
	// A hash on the content source.
	//
	// This hash is used to uniquely identify this
	// asset throughout the system. If this value doesn't change, the asset will
	// not be rebuilt or republished.
	SourceHash *string `field:"required" json:"sourceHash" yaml:"sourceHash"`
	// Whether or not the asset needs to exist beyond deployment time;
	//
	// i.e.
	// are copied over to a different location and not needed afterwards.
	// Setting this property to true has an impact on the lifecycle of the asset,
	// because we will assume that it is safe to delete after the ROS
	// deployment succeeds.
	//
	// For example, FC Function assets are copied over to FC during
	// deployment. Therefore, it is not necessary to store the asset in OSS bucket, so
	// we consider those deployTime assets.
	DeployTime *bool `field:"optional" json:"deployTime" yaml:"deployTime"`
	// An external command that will produce the packaged asset.
	//
	// The command should produce the location of a ZIP file on `stdout`.
	Executable *[]*string `field:"optional" json:"executable" yaml:"executable"`
	// The path, relative to the root of the cloud assembly, in which this asset source resides.
	//
	// This can be a path to a file or a directory, depending on the
	// packaging type.
	FileName *string `field:"optional" json:"fileName" yaml:"fileName"`
	// Which type of packaging to perform.
	Packaging FileAssetPackaging `field:"optional" json:"packaging" yaml:"packaging"`
}

