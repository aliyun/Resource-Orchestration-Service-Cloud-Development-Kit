package alicloudroscdkassemblyschema


// Metadata Entry spec for files.
//
// Example:
//   const entry = {
//     packaging: 'file',
//     ossBucketParameter: 'bucket-parameter',
//     ossKeyParameter: 'key-parameter',
//     artifactHashParameter: 'hash-parameter',
//   }
//
type FileAssetMetadataEntry struct {
	// The name of the parameter where the hash of the bundled asset should be passed in.
	ArtifactHashParameter *string `field:"required" json:"artifactHashParameter" yaml:"artifactHashParameter"`
	// Logical identifier for the asset.
	Id *string `field:"required" json:"id" yaml:"id"`
	// Name of parameter where OSS bucket should be passed in.
	OssBucketParameter *string `field:"required" json:"ossBucketParameter" yaml:"ossBucketParameter"`
	// Name of parameter where OSS object key should be passed in.
	OssKeyParameter *string `field:"required" json:"ossKeyParameter" yaml:"ossKeyParameter"`
	// Requested packaging style.
	Packaging *string `field:"required" json:"packaging" yaml:"packaging"`
	// Path on disk to the asset.
	Path *string `field:"required" json:"path" yaml:"path"`
	// The hash of the asset source.
	SourceHash *string `field:"required" json:"sourceHash" yaml:"sourceHash"`
}

