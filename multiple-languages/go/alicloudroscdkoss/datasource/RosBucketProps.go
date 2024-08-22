package datasource


// Properties for defining a `RosBucket`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
type RosBucketProps struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

