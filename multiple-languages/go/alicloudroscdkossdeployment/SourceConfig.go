package alicloudroscdkossdeployment


// Source information.
type SourceConfig struct {
	// The name of source bucket to deploy from.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// An object key in the source bucket to deploy from.
	ObjectKey interface{} `field:"required" json:"objectKey" yaml:"objectKey"`
	// The name of source local file to deploy from.
	FileName *string `field:"optional" json:"fileName" yaml:"fileName"`
}

