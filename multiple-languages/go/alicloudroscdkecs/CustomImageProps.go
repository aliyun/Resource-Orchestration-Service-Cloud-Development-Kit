package alicloudroscdkecs


// Properties for defining a `CustomImage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-customimage
type CustomImageProps struct {
	// Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture.
	//
	// Ranges:
	// I386
	// X86_64 (default).
	Architecture interface{} `field:"optional" json:"architecture" yaml:"architecture"`
	// Property bootMode: Modify the startup mode of the image.
	//
	// Ranges:
	// BIOS: BIOS boot mode.
	// UEFI: UEFI boot mode.
	// You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
	BootMode interface{} `field:"optional" json:"bootMode" yaml:"bootMode"`
	// Property description: The description of the image.
	//
	// It can be [0, 256] letters in length.
	// It cannot begin with http:\/\/ or https:\/\/.
	// Default value: null.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property detectionStrategy: Image detection policy.
	//
	// If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux\/Windows versions are supported.
	DetectionStrategy interface{} `field:"optional" json:"detectionStrategy" yaml:"detectionStrategy"`
	// Property diskDeviceMapping:.
	DiskDeviceMapping interface{} `field:"optional" json:"diskDeviceMapping" yaml:"diskDeviceMapping"`
	// Property imageFamily: The name of the image family of the image.
	//
	// The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:\/\/ or https:\/\/. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	// Property imageName: Image name.
	//
	// Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
	// Cannot begin with http:\/\/ or https:\/\/.
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	// Property imageVersion: Image version.
	//
	// When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
	ImageVersion interface{} `field:"optional" json:"imageVersion" yaml:"imageVersion"`
	// Property instanceId: Instance ID.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
	Platform interface{} `field:"optional" json:"platform" yaml:"platform"`
	// Property resourceGroupId: The ID of the resource group to which to assign the custom image.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property snapshotId: The snapshot ID.
	//
	// A custom image is created from the specified snapshot.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	// Property sourceRegionId: ID of the region to where the instance\/snapshot belongs.
	//
	// Default is current region ID.
	SourceRegionId interface{} `field:"optional" json:"sourceRegionId" yaml:"sourceRegionId"`
	// Property tag:.
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
}

