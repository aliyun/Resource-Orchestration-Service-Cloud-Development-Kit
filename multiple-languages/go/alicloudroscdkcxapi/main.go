// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkcxapi

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.AliyunRosStackProperties",
		reflect.TypeOf((*AliyunRosStackProperties)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.AssemblyBuildOptions",
		reflect.TypeOf((*AssemblyBuildOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cxapi.CloudArtifact",
		reflect.TypeOf((*CloudArtifact)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "assembly", GoGetter: "Assembly"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberMethod{JsiiMethod: "findMetadataByType", GoMethod: "FindMetadataByType"},
			_jsii_.MemberProperty{JsiiProperty: "id", GoGetter: "Id"},
			_jsii_.MemberProperty{JsiiProperty: "manifest", GoGetter: "Manifest"},
			_jsii_.MemberProperty{JsiiProperty: "messages", GoGetter: "Messages"},
		},
		func() interface{} {
			return &jsiiProxy_CloudArtifact{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cxapi.CloudAssembly",
		reflect.TypeOf((*CloudAssembly)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "artifacts", GoGetter: "Artifacts"},
			_jsii_.MemberProperty{JsiiProperty: "directory", GoGetter: "Directory"},
			_jsii_.MemberMethod{JsiiMethod: "getNestedAssembly", GoMethod: "GetNestedAssembly"},
			_jsii_.MemberMethod{JsiiMethod: "getNestedAssemblyArtifact", GoMethod: "GetNestedAssemblyArtifact"},
			_jsii_.MemberMethod{JsiiMethod: "getStack", GoMethod: "GetStack"},
			_jsii_.MemberMethod{JsiiMethod: "getStackArtifact", GoMethod: "GetStackArtifact"},
			_jsii_.MemberMethod{JsiiMethod: "getStackByName", GoMethod: "GetStackByName"},
			_jsii_.MemberProperty{JsiiProperty: "manifest", GoGetter: "Manifest"},
			_jsii_.MemberProperty{JsiiProperty: "runtime", GoGetter: "Runtime"},
			_jsii_.MemberProperty{JsiiProperty: "stacks", GoGetter: "Stacks"},
			_jsii_.MemberMethod{JsiiMethod: "tree", GoMethod: "Tree"},
			_jsii_.MemberMethod{JsiiMethod: "tryGetArtifact", GoMethod: "TryGetArtifact"},
			_jsii_.MemberProperty{JsiiProperty: "version", GoGetter: "Version"},
		},
		func() interface{} {
			return &jsiiProxy_CloudAssembly{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder",
		reflect.TypeOf((*CloudAssemblyBuilder)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addArtifact", GoMethod: "AddArtifact"},
			_jsii_.MemberMethod{JsiiMethod: "addMissing", GoMethod: "AddMissing"},
			_jsii_.MemberProperty{JsiiProperty: "assetOutdir", GoGetter: "AssetOutdir"},
			_jsii_.MemberMethod{JsiiMethod: "buildAssembly", GoMethod: "BuildAssembly"},
			_jsii_.MemberMethod{JsiiMethod: "createNestedAssembly", GoMethod: "CreateNestedAssembly"},
			_jsii_.MemberProperty{JsiiProperty: "outdir", GoGetter: "Outdir"},
		},
		func() interface{} {
			return &jsiiProxy_CloudAssemblyBuilder{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilderProps",
		reflect.TypeOf((*CloudAssemblyBuilderProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.Environment",
		reflect.TypeOf((*Environment)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholderValues",
		reflect.TypeOf((*EnvironmentPlaceholderValues)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders",
		reflect.TypeOf((*EnvironmentPlaceholders)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_EnvironmentPlaceholders{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cxapi.EnvironmentUtils",
		reflect.TypeOf((*EnvironmentUtils)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_EnvironmentUtils{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-cxapi.IEnvironmentPlaceholderProvider",
		reflect.TypeOf((*IEnvironmentPlaceholderProvider)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "accountId", GoMethod: "AccountId"},
			_jsii_.MemberMethod{JsiiMethod: "region", GoMethod: "Region"},
		},
		func() interface{} {
			return &jsiiProxy_IEnvironmentPlaceholderProvider{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.MetadataEntry",
		reflect.TypeOf((*MetadataEntry)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.MetadataEntryResult",
		reflect.TypeOf((*MetadataEntryResult)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.MissingContext",
		reflect.TypeOf((*MissingContext)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cxapi.NestedCloudAssemblyArtifact",
		reflect.TypeOf((*NestedCloudAssemblyArtifact)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "assembly", GoGetter: "Assembly"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "directoryName", GoGetter: "DirectoryName"},
			_jsii_.MemberProperty{JsiiProperty: "displayName", GoGetter: "DisplayName"},
			_jsii_.MemberMethod{JsiiMethod: "findMetadataByType", GoMethod: "FindMetadataByType"},
			_jsii_.MemberProperty{JsiiProperty: "fullPath", GoGetter: "FullPath"},
			_jsii_.MemberProperty{JsiiProperty: "id", GoGetter: "Id"},
			_jsii_.MemberProperty{JsiiProperty: "manifest", GoGetter: "Manifest"},
			_jsii_.MemberProperty{JsiiProperty: "messages", GoGetter: "Messages"},
			_jsii_.MemberProperty{JsiiProperty: "nestedAssembly", GoGetter: "NestedAssembly"},
		},
		func() interface{} {
			j := jsiiProxy_NestedCloudAssemblyArtifact{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_CloudArtifact)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cxapi.RosStackArtifact",
		reflect.TypeOf((*RosStackArtifact)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "assembly", GoGetter: "Assembly"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "displayName", GoGetter: "DisplayName"},
			_jsii_.MemberMethod{JsiiMethod: "findMetadataByType", GoMethod: "FindMetadataByType"},
			_jsii_.MemberProperty{JsiiProperty: "id", GoGetter: "Id"},
			_jsii_.MemberProperty{JsiiProperty: "manifest", GoGetter: "Manifest"},
			_jsii_.MemberProperty{JsiiProperty: "messages", GoGetter: "Messages"},
			_jsii_.MemberProperty{JsiiProperty: "name", GoGetter: "Name"},
			_jsii_.MemberProperty{JsiiProperty: "originalName", GoGetter: "OriginalName"},
			_jsii_.MemberProperty{JsiiProperty: "parameters", GoGetter: "Parameters"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "template", GoGetter: "Template"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
		},
		func() interface{} {
			j := jsiiProxy_RosStackArtifact{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_CloudArtifact)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.RuntimeInfo",
		reflect.TypeOf((*RuntimeInfo)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cxapi.SynthesisMessage",
		reflect.TypeOf((*SynthesisMessage)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-cxapi.SynthesisMessageLevel",
		reflect.TypeOf((*SynthesisMessageLevel)(nil)).Elem(),
		map[string]interface{}{
			"INFO": SynthesisMessageLevel_INFO,
			"WARNING": SynthesisMessageLevel_WARNING,
			"ERROR": SynthesisMessageLevel_ERROR,
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cxapi.TreeCloudArtifact",
		reflect.TypeOf((*TreeCloudArtifact)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "assembly", GoGetter: "Assembly"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "file", GoGetter: "File"},
			_jsii_.MemberMethod{JsiiMethod: "findMetadataByType", GoMethod: "FindMetadataByType"},
			_jsii_.MemberProperty{JsiiProperty: "id", GoGetter: "Id"},
			_jsii_.MemberProperty{JsiiProperty: "manifest", GoGetter: "Manifest"},
			_jsii_.MemberProperty{JsiiProperty: "messages", GoGetter: "Messages"},
		},
		func() interface{} {
			j := jsiiProxy_TreeCloudArtifact{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_CloudArtifact)
			return &j
		},
	)
}
