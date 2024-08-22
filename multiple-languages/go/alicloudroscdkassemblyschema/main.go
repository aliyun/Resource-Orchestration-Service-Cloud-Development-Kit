// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkassemblyschema

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.AliCloudDestination",
		reflect.TypeOf((*AliCloudDestination)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties",
		reflect.TypeOf((*AliyunRosStackProperties)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.AmiContextQuery",
		reflect.TypeOf((*AmiContextQuery)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.ArtifactManifest",
		reflect.TypeOf((*ArtifactManifest)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-assembly-schema.ArtifactMetadataEntryType",
		reflect.TypeOf((*ArtifactMetadataEntryType)(nil)).Elem(),
		map[string]interface{}{
			"ASSET": ArtifactMetadataEntryType_ASSET,
			"INFO": ArtifactMetadataEntryType_INFO,
			"WARN": ArtifactMetadataEntryType_WARN,
			"ERROR": ArtifactMetadataEntryType_ERROR,
			"LOGICAL_ID": ArtifactMetadataEntryType_LOGICAL_ID,
			"STACK_TAGS": ArtifactMetadataEntryType_STACK_TAGS,
		},
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-assembly-schema.ArtifactType",
		reflect.TypeOf((*ArtifactType)(nil)).Elem(),
		map[string]interface{}{
			"NONE": ArtifactType_NONE,
			"ALIYUN_ROS_STACK": ArtifactType_ALIYUN_ROS_STACK,
			"CDK_TREE": ArtifactType_CDK_TREE,
			"ASSET_MANIFEST": ArtifactType_ASSET_MANIFEST,
			"NESTED_CLOUD_ASSEMBLY": ArtifactType_NESTED_CLOUD_ASSEMBLY,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.AssemblyManifest",
		reflect.TypeOf((*AssemblyManifest)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.AssetManifest",
		reflect.TypeOf((*AssetManifest)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.AssetManifestOptions",
		reflect.TypeOf((*AssetManifestOptions)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.AssetManifestProperties",
		reflect.TypeOf((*AssetManifestProperties)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery",
		reflect.TypeOf((*AvailabilityZonesContextQuery)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-assembly-schema.ContextProvider",
		reflect.TypeOf((*ContextProvider)(nil)).Elem(),
		map[string]interface{}{
			"AMI_PROVIDER": ContextProvider_AMI_PROVIDER,
			"AVAILABILITY_ZONE_PROVIDER": ContextProvider_AVAILABILITY_ZONE_PROVIDER,
			"HOSTED_ZONE_PROVIDER": ContextProvider_HOSTED_ZONE_PROVIDER,
			"SSM_PARAMETER_PROVIDER": ContextProvider_SSM_PARAMETER_PROVIDER,
			"VPC_PROVIDER": ContextProvider_VPC_PROVIDER,
			"ENDPOINT_SERVICE_AVAILABILITY_ZONE_PROVIDER": ContextProvider_ENDPOINT_SERVICE_AVAILABILITY_ZONE_PROVIDER,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.DockerCacheOption",
		reflect.TypeOf((*DockerCacheOption)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.DockerImageAsset",
		reflect.TypeOf((*DockerImageAsset)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.DockerImageDestination",
		reflect.TypeOf((*DockerImageDestination)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.DockerImageSource",
		reflect.TypeOf((*DockerImageSource)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery",
		reflect.TypeOf((*EndpointServiceAvailabilityZonesContextQuery)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.FileAsset",
		reflect.TypeOf((*FileAsset)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.FileAssetMetadataEntry",
		reflect.TypeOf((*FileAssetMetadataEntry)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-assembly-schema.FileAssetPackaging",
		reflect.TypeOf((*FileAssetPackaging)(nil)).Elem(),
		map[string]interface{}{
			"FILE": FileAssetPackaging_FILE,
			"ZIP_DIRECTORY": FileAssetPackaging_ZIP_DIRECTORY,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.FileDestination",
		reflect.TypeOf((*FileDestination)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.FileSource",
		reflect.TypeOf((*FileSource)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery",
		reflect.TypeOf((*HostedZoneContextQuery)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-assembly-schema.Manifest",
		reflect.TypeOf((*Manifest)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_Manifest{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.MetadataEntry",
		reflect.TypeOf((*MetadataEntry)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.MissingContext",
		reflect.TypeOf((*MissingContext)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties",
		reflect.TypeOf((*NestedCloudAssemblyProperties)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.RuntimeInfo",
		reflect.TypeOf((*RuntimeInfo)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery",
		reflect.TypeOf((*SSMParameterContextQuery)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.Tag",
		reflect.TypeOf((*Tag)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties",
		reflect.TypeOf((*TreeArtifactProperties)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-assembly-schema.VpcContextQuery",
		reflect.TypeOf((*VpcContextQuery)(nil)).Elem(),
	)
}
