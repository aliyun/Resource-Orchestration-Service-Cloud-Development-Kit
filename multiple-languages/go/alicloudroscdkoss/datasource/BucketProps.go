package datasource


// Properties for defining a `Bucket`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
type BucketProps struct {
	// Property bucketName: Bucket name.
	//
	// The naming conventions for buckets are as follows:
	// Only lowercase letters, numbers, and dashes (-) can be included.
	// Must start and end with lowercase letters or numbers.
	// The length must be between 3 and 63 characters.
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

