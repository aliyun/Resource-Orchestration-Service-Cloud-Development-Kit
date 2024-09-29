package alicloudroscdkens


// Properties for defining a `RosImage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
type RosImageProps struct {
	ImageName interface{} `field:"required" json:"imageName" yaml:"imageName"`
	DeleteAfterImageUpload interface{} `field:"optional" json:"deleteAfterImageUpload" yaml:"deleteAfterImageUpload"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

