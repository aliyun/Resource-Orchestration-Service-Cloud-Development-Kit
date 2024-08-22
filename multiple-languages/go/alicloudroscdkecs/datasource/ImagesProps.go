package datasource


// Properties for defining a `Images`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
type ImagesProps struct {
	// Property actionType: The scenario in which the image is used.
	//
	// Default value: CreateEcs. Valid values:
	// CreateEcs: instance creation
	// ChangeOS: replacement of the system disk or operating system.
	ActionType interface{} `field:"optional" json:"actionType" yaml:"actionType"`
	// Property architecture: The image architecture.
	//
	// Valid values:
	// i38
	// x86_64
	// arm64.
	Architecture interface{} `field:"optional" json:"architecture" yaml:"architecture"`
	// Property imageFamily: The name of the image family.
	//
	// You can set this parameter to query images of the specified image family.
	// This parameter is empty by default.
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	// Property imageId: The ID of the image.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property imageName: The name of the image.
	//
	// Support for fuzzy queries using *.
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	// Property imageOwnerAlias: The source of the image.
	//
	// Valid values:
	// system: public images provided by Alibaba Cloud.
	// self: your custom images.
	// others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
	// - To query community images, you must set IsPublic to true.
	// To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
	// marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
	// This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
	ImageOwnerAlias interface{} `field:"optional" json:"imageOwnerAlias" yaml:"imageOwnerAlias"`
	// Property instanceType: The instance type for which the image can be used.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property isPublic: Specifies whether to query published community images.
	//
	// Valid values:
	// true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
	// false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
	// Default value: false.
	IsPublic interface{} `field:"optional" json:"isPublic" yaml:"isPublic"`
	// Property isSupportCloudinit: Specifies whether the image supports cloud-init.
	IsSupportCloudinit interface{} `field:"optional" json:"isSupportCloudinit" yaml:"isSupportCloudinit"`
	// Property isSupportIoOptimized: Specifies whether the image can be used on I\/O optimized instances.
	IsSupportIoOptimized interface{} `field:"optional" json:"isSupportIoOptimized" yaml:"isSupportIoOptimized"`
	// Property osType: The operating system type of the image.
	//
	// Valid values:
	// windows
	// linux.
	OsType interface{} `field:"optional" json:"osType" yaml:"osType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the custom image belongs.
	//
	// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property snapshotId: The ID of the snapshot used to create the custom image.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	// Property status: The state of the image.
	//
	// Default value: Available. Valid values:
	// Creating: The image is being created.
	// Waiting: The image is waiting to be processed.
	// Available: The image is available.
	// UnAvailable: The image is unavailable.
	// CreateFailed: The image failed to be created.
	// Deprecated: The image is discontinued.
	// You can specify multiple values. Separate multiple values with commas (,).
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property tags: Tags of image.
	Tags *[]*RosImages_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance.
	//
	// Valid values:
	// instance: The image is already in use and running on an ECS instance.
	// none: The image is not in use.
	Usage interface{} `field:"optional" json:"usage" yaml:"usage"`
}

