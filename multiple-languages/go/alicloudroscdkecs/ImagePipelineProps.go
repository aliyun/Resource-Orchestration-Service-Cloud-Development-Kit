package alicloudroscdkecs


// Properties for defining a `ImagePipeline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
type ImagePipelineProps struct {
	// Property baseImage: The source image.
	//
	// If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
	// If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
	BaseImage interface{} `field:"required" json:"baseImage" yaml:"baseImage"`
	// Property baseImageType: The type of the source image.
	//
	// Valid values:
	// IMAGE: image
	// IMAGE_FAMILY: image family.
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
	// Property imageName: The prefix of the image name.
	//
	// The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
	// The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}_{ExecutionId}.
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
	// Property name: The name of the image template.
	//
	// The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
	// Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
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

