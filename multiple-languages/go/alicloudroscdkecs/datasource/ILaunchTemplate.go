package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `LaunchTemplate`.
type ILaunchTemplate interface {
	alicloudroscdkcore.IResource
	// Attribute AutoReleaseTime: Automatic release time (UTC).
	//
	// The format is: yyyy-MM-ddTHH:mm:ssZ.
	AttrAutoReleaseTime() interface{}
	// Attribute CreatedBy: The creator of the launch template.
	AttrCreatedBy() interface{}
	// Attribute CreateTime: The time when the instance launch template was created.
	AttrCreateTime() interface{}
	// Attribute DataDisk: Data disk information list.
	AttrDataDisk() interface{}
	// Attribute DefaultVersionNumber: The default version number of the template.
	AttrDefaultVersionNumber() interface{}
	// Attribute DeletionProtection: Instance deletion protection attribute.
	AttrDeletionProtection() interface{}
	// Attribute DeploymentSetId: The ID of the deployment set.
	AttrDeploymentSetId() interface{}
	// Attribute Description: Instance description.
	//
	// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
	AttrDescription() interface{}
	// Attribute HostName: The hostname of the instance.
	AttrHostName() interface{}
	// Attribute ImageId: The ID of the image.
	AttrImageId() interface{}
	// Attribute ImageOwnerAlias: The source of the image.
	AttrImageOwnerAlias() interface{}
	// Attribute InstanceChargeType: The billing method of the instance.
	AttrInstanceChargeType() interface{}
	// Attribute InstanceName: The name of the instance.
	//
	// The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
	AttrInstanceName() interface{}
	// Attribute InstanceType: The instance type.
	AttrInstanceType() interface{}
	// Attribute InternetChargeType: Network billing method.
	AttrInternetChargeType() interface{}
	// Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
	AttrInternetMaxBandwidthIn() interface{}
	// Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network.
	//
	// The unit is Mbit/s. The value range is 0~100.
	AttrInternetMaxBandwidthOut() interface{}
	// Attribute IoOptimized: Whether to optimize the instance for I/O.
	AttrIoOptimized() interface{}
	// Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card.
	//
	// The value range is 1 to 10.
	AttrIpv6AddressCount() interface{}
	// Attribute KeyPairName: The name of the key pair.
	AttrKeyPairName() interface{}
	// Attribute LatestVersionNumber: The latest version number of the template.
	AttrLatestVersionNumber() interface{}
	// Attribute LaunchTemplateId: The ID of the launch template.
	AttrLaunchTemplateId() interface{}
	// Attribute LaunchTemplateName: The name of the launch template.
	AttrLaunchTemplateName() interface{}
	// Attribute ModifiedTime: The time when the launch template was modified.
	AttrModifiedTime() interface{}
	// Attribute NetworkInterface: The elastic network interfaces (ENIs).
	AttrNetworkInterface() interface{}
	// Attribute NetworkType: The network type of the instance.
	AttrNetworkType() interface{}
	// Attribute PasswordInherit: Whether to use the password preset by the image.
	AttrPasswordInherit() interface{}
	// Attribute Period: The duration of the purchase of resources, in months.
	//
	// When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
	AttrPeriod() interface{}
	// Attribute PrivateIpAddress: The private IP address of the instance.
	AttrPrivateIpAddress() interface{}
	// Attribute RamRoleName: The instance RAM role name.
	AttrRamRoleName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
	AttrResourceGroupId() interface{}
	// Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
	AttrSecurityEnhancementStrategy() interface{}
	// Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
	AttrSecurityGroupIds() interface{}
	// Attribute SpotPriceLimit: Set the maximum price per hour for the instance.
	//
	// The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
	AttrSpotPriceLimit() interface{}
	// Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance.
	//
	// This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
	AttrSpotStrategy() interface{}
	// Attribute SystemDisk: System disk configuration.
	AttrSystemDisk() interface{}
	// Attribute Tags: The tags of the launch template.
	AttrTags() interface{}
	// Attribute TemplateResourceGroupId: Q.
	AttrTemplateResourceGroupId() interface{}
	// Attribute TemplateTag: The tags of the launch template.
	AttrTemplateTag() interface{}
	// Attribute UserData: The user-defined data of the instance must be encoded in Base64.
	//
	// The maximum original data is 16KB.
	AttrUserData() interface{}
	// Attribute VersionDescription: Instance launch template version description.
	//
	// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
	AttrVersionDescription() interface{}
	// Attribute VpcId: VPC Id.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The ID of the vSwitch.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: The ID of the zone to which the instance belongs.
	AttrZoneId() interface{}
	Props() *LaunchTemplateProps
}

// The jsii proxy for ILaunchTemplate
type jsiiProxy_ILaunchTemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILaunchTemplate) AttrAutoReleaseTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrCreatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrDataDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrDefaultVersionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrDeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrHostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrImageOwnerAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageOwnerAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrInstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrInternetMaxBandwidthIn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrInternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrIoOptimized() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIoOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrIpv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrKeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrLatestVersionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrLaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrLaunchTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrNetworkInterface() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterface",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrPasswordInherit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPasswordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrPrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrRamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrSecurityEnhancementStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityEnhancementStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrSecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrSpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrSpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrSystemDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSystemDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrTemplateResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrTemplateTag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrUserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrVersionDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) Props() *LaunchTemplateProps {
	var returns *LaunchTemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

