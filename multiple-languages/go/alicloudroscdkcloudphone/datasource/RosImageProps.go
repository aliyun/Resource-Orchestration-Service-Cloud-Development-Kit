package datasource


// Properties for defining a `RosImage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
type RosImageProps struct {
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

