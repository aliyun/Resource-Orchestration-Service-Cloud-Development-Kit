package datasource


// Properties for defining a `Image`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
type ImageProps struct {
	// Property imageId: Image ID.
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

