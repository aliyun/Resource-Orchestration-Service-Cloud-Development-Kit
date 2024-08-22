package datasource


// Properties for defining a `RosImages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
type RosImagesProps struct {
	ImageCategory interface{} `field:"optional" json:"imageCategory" yaml:"imageCategory"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

