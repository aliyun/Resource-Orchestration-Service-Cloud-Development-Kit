package datasource


// Properties for defining a `RosBuckets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
type RosBucketsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

