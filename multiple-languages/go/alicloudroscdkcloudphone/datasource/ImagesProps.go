package datasource


// Properties for defining a `Images`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
type ImagesProps struct {
	// Property imageCategory: Mirror type.
	ImageCategory interface{} `field:"optional" json:"imageCategory" yaml:"imageCategory"`
	// Property imageId: Image ID.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property imageName: The name of the mirror image.
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

