package alicloudroscdkcdt


// Properties for defining a `ResourcePackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
type ResourcePackageProps struct {
	// Property capacity: The capacity of the specified CDT resource package.
	Capacity interface{} `field:"required" json:"capacity" yaml:"capacity"`
	// Property pack: The pack of the specified CDT resource package.
	//
	// It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
	Pack interface{} `field:"required" json:"pack" yaml:"pack"`
	// Property region: The region of the specified CDT resource package.
	Region interface{} `field:"required" json:"region" yaml:"region"`
	// Property isp: The ISP of the specified CDT resource package.
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
}

