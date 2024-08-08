package alicloudroscdkcloudphone


// Properties for defining a `RosImage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
type RosImageProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
}

