package alicloudroscdkecs


// Properties for defining a `RosImagePipeline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
type RosImagePipelineProps struct {
	BaseImage interface{} `field:"required" json:"baseImage" yaml:"baseImage"`
	BaseImageType interface{} `field:"required" json:"baseImageType" yaml:"baseImageType"`
	AddAccount interface{} `field:"optional" json:"addAccount" yaml:"addAccount"`
	BuildContent interface{} `field:"optional" json:"buildContent" yaml:"buildContent"`
	DeleteInstanceOnFailure interface{} `field:"optional" json:"deleteInstanceOnFailure" yaml:"deleteInstanceOnFailure"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ExecutePipeline interface{} `field:"optional" json:"executePipeline" yaml:"executePipeline"`
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	Tags *[]*RosImagePipeline_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ToRegionId interface{} `field:"optional" json:"toRegionId" yaml:"toRegionId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

