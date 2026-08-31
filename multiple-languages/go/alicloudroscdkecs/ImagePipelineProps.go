package alicloudroscdkecs


// Properties for defining a `ImagePipeline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
type ImagePipelineProps struct {
	// Property baseImage: The base image.
	//
	// The value of this parameter varies based on the value of
	// `BaseImageType`:
	// - If `BaseImageType` is `IMAGE`, specify the ID of the base image.
	// - If `BaseImageType` is `IMAGE_FAMILY`, specify the name of the base image
	// family.
	// - If `BaseImageType` is `OSS`, this parameter is not required.
	BaseImage interface{} `field:"required" json:"baseImage" yaml:"baseImage"`
	// Property baseImageType: The type of the base image.
	//
	// Valid values:
	// - IMAGE: An ECS image.
	// - IMAGE_FAMILY: An image family.
	// - OSS: An OSS object.
	BaseImageType interface{} `field:"required" json:"baseImageType" yaml:"baseImageType"`
	// Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.
	//
	// You can specify up to 20 account IDs.
	AddAccount interface{} `field:"optional" json:"addAccount" yaml:"addAccount"`
	// Property buildContent: The content of the image template.
	//
	// The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
	BuildContent interface{} `field:"optional" json:"buildContent" yaml:"buildContent"`
	// Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created.
	//
	// Valid values:
	// true
	// false
	// Default value: true.
	// Note If the intermediate instance cannot be started, the instance is released by default.
	DeleteInstanceOnFailure interface{} `field:"optional" json:"deleteInstanceOnFailure" yaml:"deleteInstanceOnFailure"`
	// Property description: The description of the image template.
	//
	// The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property executePipeline: Whether execute pipeline.
	//
	// Default value is true.
	ExecutePipeline interface{} `field:"optional" json:"executePipeline" yaml:"executePipeline"`
	// Property imageName: The prefix of the destination image name.
	//
	// ><notice>This parameter is deprecated. Use `ImageOptions.ImageName`
	// instead.><\/notice>
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	// Property instanceType: The instance type.
	//
	// You can call the  DescribeInstanceTypes  to query instance types.
	// If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance.
	//
	// Unit: Mbit\/s. Valid values: 0 to 100.
	// Default value: 0.
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	// Property name: The name of the image pipeline.
	//
	// It must be 2 to 128 characters long, start with a
	// letter or a Chinese character, and cannot start with `http:\/\/` or `https:\/\/`.
	// Allowed characters include letters, digits, Chinese characters, colons (:),
	// underscores (_), periods (.), and hyphens (-).
	// > If you do not specify this parameter, the value of `ImagePipelineId` is used as
	// the name.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property systemDiskSize: The system disk size of the intermediate instance.
	//
	// Unit: GiB. Valid values: 20 to 500.
	// Default value: 40.
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	// Property tags:.
	Tags *[]*RosImagePipeline_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template.
	//
	// You can specify up to 20 region IDs.
	// If you do not specify this parameter, the image is created only in the current region.
	ToRegionId interface{} `field:"optional" json:"toRegionId" yaml:"toRegionId"`
	// Property vSwitchId: The ID of the vSwitch.
	//
	// If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

