package alicloudroscdkcdt


// Properties for defining a `RosResourcePackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
type RosResourcePackageProps struct {
	Capacity interface{} `field:"required" json:"capacity" yaml:"capacity"`
	Pack interface{} `field:"required" json:"pack" yaml:"pack"`
	Region interface{} `field:"required" json:"region" yaml:"region"`
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
}

