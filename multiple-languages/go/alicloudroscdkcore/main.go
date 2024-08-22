// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkcore

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.App",
		reflect.TypeOf((*App)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "assetOutdir", GoGetter: "AssetOutdir"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "outdir", GoGetter: "Outdir"},
			_jsii_.MemberProperty{JsiiProperty: "parentStage", GoGetter: "ParentStage"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberProperty{JsiiProperty: "stageName", GoGetter: "StageName"},
			_jsii_.MemberMethod{JsiiMethod: "synth", GoMethod: "Synth"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_App{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Stage)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.AppProps",
		reflect.TypeOf((*AppProps)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.AssetHashType",
		reflect.TypeOf((*AssetHashType)(nil)).Elem(),
		map[string]interface{}{
			"SOURCE": AssetHashType_SOURCE,
			"OUTPUT": AssetHashType_OUTPUT,
			"CUSTOM": AssetHashType_CUSTOM,
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.AssetManifestBuilder",
		reflect.TypeOf((*AssetManifestBuilder)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addDockerImageAsset", GoMethod: "AddDockerImageAsset"},
			_jsii_.MemberMethod{JsiiMethod: "addFileAsset", GoMethod: "AddFileAsset"},
			_jsii_.MemberMethod{JsiiMethod: "defaultAddDockerImageAsset", GoMethod: "DefaultAddDockerImageAsset"},
			_jsii_.MemberMethod{JsiiMethod: "defaultAddFileAsset", GoMethod: "DefaultAddFileAsset"},
			_jsii_.MemberMethod{JsiiMethod: "emitManifest", GoMethod: "EmitManifest"},
			_jsii_.MemberProperty{JsiiProperty: "hasAssets", GoGetter: "HasAssets"},
		},
		func() interface{} {
			return &jsiiProxy_AssetManifestBuilder{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.AssetManifestDockerImageDestination",
		reflect.TypeOf((*AssetManifestDockerImageDestination)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.AssetManifestFileDestination",
		reflect.TypeOf((*AssetManifestFileDestination)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.AssetOptions",
		reflect.TypeOf((*AssetOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.AssetStaging",
		reflect.TypeOf((*AssetStaging)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "absoluteStagedPath", GoGetter: "AbsoluteStagedPath"},
			_jsii_.MemberProperty{JsiiProperty: "assetHash", GoGetter: "AssetHash"},
			_jsii_.MemberProperty{JsiiProperty: "isArchive", GoGetter: "IsArchive"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "packaging", GoGetter: "Packaging"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberMethod{JsiiMethod: "relativeStagedPath", GoMethod: "RelativeStagedPath"},
			_jsii_.MemberProperty{JsiiProperty: "sourcePath", GoGetter: "SourcePath"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_AssetStaging{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Construct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.AssetStagingProps",
		reflect.TypeOf((*AssetStagingProps)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.BundlingFileAccess",
		reflect.TypeOf((*BundlingFileAccess)(nil)).Elem(),
		map[string]interface{}{
			"VOLUME_COPY": BundlingFileAccess_VOLUME_COPY,
			"BIND_MOUNT": BundlingFileAccess_BIND_MOUNT,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.BundlingOptions",
		reflect.TypeOf((*BundlingOptions)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.BundlingOutput",
		reflect.TypeOf((*BundlingOutput)(nil)).Elem(),
		map[string]interface{}{
			"ARCHIVED": BundlingOutput_ARCHIVED,
			"NOT_ARCHIVED": BundlingOutput_NOT_ARCHIVED,
			"AUTO_DISCOVER": BundlingOutput_AUTO_DISCOVER,
			"SINGLE_FILE": BundlingOutput_SINGLE_FILE,
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.ConcreteDependable",
		reflect.TypeOf((*ConcreteDependable)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "add", GoMethod: "Add"},
		},
		func() interface{} {
			j := jsiiProxy_ConcreteDependable{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDependable)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Construct",
		reflect.TypeOf((*Construct)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_Construct{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IConstruct)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.ConstructNode",
		reflect.TypeOf((*ConstructNode)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addError", GoMethod: "AddError"},
			_jsii_.MemberMethod{JsiiMethod: "addInfo", GoMethod: "AddInfo"},
			_jsii_.MemberMethod{JsiiMethod: "addMetadata", GoMethod: "AddMetadata"},
			_jsii_.MemberMethod{JsiiMethod: "addWarning", GoMethod: "AddWarning"},
			_jsii_.MemberProperty{JsiiProperty: "children", GoGetter: "Children"},
			_jsii_.MemberProperty{JsiiProperty: "defaultChild", GoGetter: "DefaultChild"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberMethod{JsiiMethod: "findAll", GoMethod: "FindAll"},
			_jsii_.MemberMethod{JsiiMethod: "findChild", GoMethod: "FindChild"},
			_jsii_.MemberProperty{JsiiProperty: "id", GoGetter: "Id"},
			_jsii_.MemberProperty{JsiiProperty: "locked", GoGetter: "Locked"},
			_jsii_.MemberProperty{JsiiProperty: "metadata", GoGetter: "Metadata"},
			_jsii_.MemberProperty{JsiiProperty: "path", GoGetter: "Path"},
			_jsii_.MemberProperty{JsiiProperty: "root", GoGetter: "Root"},
			_jsii_.MemberProperty{JsiiProperty: "scope", GoGetter: "Scope"},
			_jsii_.MemberProperty{JsiiProperty: "scopes", GoGetter: "Scopes"},
			_jsii_.MemberMethod{JsiiMethod: "setContext", GoMethod: "SetContext"},
			_jsii_.MemberMethod{JsiiMethod: "tryFindChild", GoMethod: "TryFindChild"},
			_jsii_.MemberMethod{JsiiMethod: "tryGetContext", GoMethod: "TryGetContext"},
			_jsii_.MemberMethod{JsiiMethod: "tryRemoveChild", GoMethod: "TryRemoveChild"},
			_jsii_.MemberProperty{JsiiProperty: "uniqueId", GoGetter: "UniqueId"},
		},
		func() interface{} {
			return &jsiiProxy_ConstructNode{}
		},
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.ConstructOrder",
		reflect.TypeOf((*ConstructOrder)(nil)).Elem(),
		map[string]interface{}{
			"PREORDER": ConstructOrder_PREORDER,
			"POSTORDER": ConstructOrder_POSTORDER,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.CopyOptions",
		reflect.TypeOf((*CopyOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.DefaultStackSynthesizer",
		reflect.TypeOf((*DefaultStackSynthesizer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addFileAsset", GoMethod: "AddFileAsset"},
			_jsii_.MemberMethod{JsiiMethod: "bind", GoMethod: "Bind"},
			_jsii_.MemberProperty{JsiiProperty: "boundStack", GoGetter: "BoundStack"},
			_jsii_.MemberMethod{JsiiMethod: "emitArtifact", GoMethod: "EmitArtifact"},
			_jsii_.MemberMethod{JsiiMethod: "reusableBind", GoMethod: "ReusableBind"},
			_jsii_.MemberMethod{JsiiMethod: "rosLocationFromFileAsset", GoMethod: "RosLocationFromFileAsset"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "synthesizeStackArtifacts", GoMethod: "SynthesizeStackArtifacts"},
			_jsii_.MemberMethod{JsiiMethod: "synthesizeTemplate", GoMethod: "SynthesizeTemplate"},
		},
		func() interface{} {
			j := jsiiProxy_DefaultStackSynthesizer{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_StackSynthesizer)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IBoundStackSynthesizer)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IReusableStackSynthesizer)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.DefaultStackSynthesizerProps",
		reflect.TypeOf((*DefaultStackSynthesizerProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.DefaultTokenResolver",
		reflect.TypeOf((*DefaultTokenResolver)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "resolveList", GoMethod: "ResolveList"},
			_jsii_.MemberMethod{JsiiMethod: "resolveString", GoMethod: "ResolveString"},
			_jsii_.MemberMethod{JsiiMethod: "resolveToken", GoMethod: "ResolveToken"},
		},
		func() interface{} {
			j := jsiiProxy_DefaultTokenResolver{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ITokenResolver)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.DependableTrait",
		reflect.TypeOf((*DependableTrait)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "dependencyRoots", GoGetter: "DependencyRoots"},
		},
		func() interface{} {
			return &jsiiProxy_DependableTrait{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.Dependency",
		reflect.TypeOf((*Dependency)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.DockerBuildOptions",
		reflect.TypeOf((*DockerBuildOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.DockerBuildSecret",
		reflect.TypeOf((*DockerBuildSecret)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_DockerBuildSecret{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.DockerCacheOption",
		reflect.TypeOf((*DockerCacheOption)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.DockerIgnoreStrategy",
		reflect.TypeOf((*DockerIgnoreStrategy)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "add", GoMethod: "Add"},
			_jsii_.MemberMethod{JsiiMethod: "ignores", GoMethod: "Ignores"},
		},
		func() interface{} {
			j := jsiiProxy_DockerIgnoreStrategy{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IgnoreStrategy)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.DockerImage",
		reflect.TypeOf((*DockerImage)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "cp", GoMethod: "Cp"},
			_jsii_.MemberProperty{JsiiProperty: "image", GoGetter: "Image"},
			_jsii_.MemberMethod{JsiiMethod: "run", GoMethod: "Run"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
		},
		func() interface{} {
			return &jsiiProxy_DockerImage{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.DockerImageAssetLocation",
		reflect.TypeOf((*DockerImageAssetLocation)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.DockerImageAssetSource",
		reflect.TypeOf((*DockerImageAssetSource)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.DockerRunOptions",
		reflect.TypeOf((*DockerRunOptions)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.DockerVolume",
		reflect.TypeOf((*DockerVolume)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.DockerVolumeConsistency",
		reflect.TypeOf((*DockerVolumeConsistency)(nil)).Elem(),
		map[string]interface{}{
			"CONSISTENT": DockerVolumeConsistency_CONSISTENT,
			"DELEGATED": DockerVolumeConsistency_DELEGATED,
			"CACHED": DockerVolumeConsistency_CACHED,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.EncodingOptions",
		reflect.TypeOf((*EncodingOptions)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.Environment",
		reflect.TypeOf((*Environment)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.FileAssetLocation",
		reflect.TypeOf((*FileAssetLocation)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.FileAssetPackaging",
		reflect.TypeOf((*FileAssetPackaging)(nil)).Elem(),
		map[string]interface{}{
			"ZIP_DIRECTORY": FileAssetPackaging_ZIP_DIRECTORY,
			"FILE": FileAssetPackaging_FILE,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.FileAssetSource",
		reflect.TypeOf((*FileAssetSource)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.FileCopyOptions",
		reflect.TypeOf((*FileCopyOptions)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.FileFingerprintOptions",
		reflect.TypeOf((*FileFingerprintOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FileSystem",
		reflect.TypeOf((*FileSystem)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_FileSystem{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.FingerprintOptions",
		reflect.TypeOf((*FingerprintOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Fn",
		reflect.TypeOf((*Fn)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_Fn{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnAdd",
		reflect.TypeOf((*FnAdd)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnAdd{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnAnd",
		reflect.TypeOf((*FnAnd)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnAnd{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IRosConditionExpression)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnAny",
		reflect.TypeOf((*FnAny)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnAny{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnAvg",
		reflect.TypeOf((*FnAvg)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnAvg{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnBase64Decode",
		reflect.TypeOf((*FnBase64Decode)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnBase64Decode{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnBase64Encode",
		reflect.TypeOf((*FnBase64Encode)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnBase64Encode{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnCalculate",
		reflect.TypeOf((*FnCalculate)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnCalculate{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnCidr",
		reflect.TypeOf((*FnCidr)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnCidr{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnContains",
		reflect.TypeOf((*FnContains)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnContains{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnEachMemberIn",
		reflect.TypeOf((*FnEachMemberIn)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnEachMemberIn{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnEquals",
		reflect.TypeOf((*FnEquals)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnEquals{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IRosConditionExpression)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnFindInMap",
		reflect.TypeOf((*FnFindInMap)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnFindInMap{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnFormatTime",
		reflect.TypeOf((*FnFormatTime)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnFormatTime{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnGetAZs",
		reflect.TypeOf((*FnGetAZs)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnGetAZs{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnGetAtt",
		reflect.TypeOf((*FnGetAtt)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnGetAtt{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnGetJsonValue",
		reflect.TypeOf((*FnGetJsonValue)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnGetJsonValue{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnGetStackOutput",
		reflect.TypeOf((*FnGetStackOutput)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnGetStackOutput{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnIf",
		reflect.TypeOf((*FnIf)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnIf{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IRosConditionExpression)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnIndent",
		reflect.TypeOf((*FnIndent)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnIndent{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnIndex",
		reflect.TypeOf((*FnIndex)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnIndex{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnJoin",
		reflect.TypeOf((*FnJoin)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnJoin{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IResolvable)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnJq",
		reflect.TypeOf((*FnJq)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnJq{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnLength",
		reflect.TypeOf((*FnLength)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnLength{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnListMerge",
		reflect.TypeOf((*FnListMerge)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnListMerge{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IResolvable)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnMarketplaceImage",
		reflect.TypeOf((*FnMarketplaceImage)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnMarketplaceImage{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnMatchPattern",
		reflect.TypeOf((*FnMatchPattern)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnMatchPattern{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnMax",
		reflect.TypeOf((*FnMax)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnMax{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnMergeMapToList",
		reflect.TypeOf((*FnMergeMapToList)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnMergeMapToList{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnMin",
		reflect.TypeOf((*FnMin)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnMin{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnNot",
		reflect.TypeOf((*FnNot)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnNot{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IRosConditionExpression)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnOr",
		reflect.TypeOf((*FnOr)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnOr{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IRosConditionExpression)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnRef",
		reflect.TypeOf((*FnRef)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnRef{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnReplace",
		reflect.TypeOf((*FnReplace)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnReplace{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnSelect",
		reflect.TypeOf((*FnSelect)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnSelect{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnSelectMapList",
		reflect.TypeOf((*FnSelectMapList)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnSelectMapList{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnSplit",
		reflect.TypeOf((*FnSplit)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnSplit{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnStr",
		reflect.TypeOf((*FnStr)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnStr{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.FnSub",
		reflect.TypeOf((*FnSub)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_FnSub{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.GitIgnoreStrategy",
		reflect.TypeOf((*GitIgnoreStrategy)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "add", GoMethod: "Add"},
			_jsii_.MemberMethod{JsiiMethod: "ignores", GoMethod: "Ignores"},
		},
		func() interface{} {
			j := jsiiProxy_GitIgnoreStrategy{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IgnoreStrategy)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.GlobIgnoreStrategy",
		reflect.TypeOf((*GlobIgnoreStrategy)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "add", GoMethod: "Add"},
			_jsii_.MemberMethod{JsiiMethod: "ignores", GoMethod: "Ignores"},
		},
		func() interface{} {
			j := jsiiProxy_GlobIgnoreStrategy{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IgnoreStrategy)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IAnyProducer",
		reflect.TypeOf((*IAnyProducer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "produce", GoMethod: "Produce"},
		},
		func() interface{} {
			return &jsiiProxy_IAnyProducer{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IAsset",
		reflect.TypeOf((*IAsset)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "assetHash", GoGetter: "AssetHash"},
		},
		func() interface{} {
			return &jsiiProxy_IAsset{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IBoundStackSynthesizer",
		reflect.TypeOf((*IBoundStackSynthesizer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addFileAsset", GoMethod: "AddFileAsset"},
			_jsii_.MemberMethod{JsiiMethod: "bind", GoMethod: "Bind"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
		},
		func() interface{} {
			j := jsiiProxy_IBoundStackSynthesizer{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IStackSynthesizer)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IConstruct",
		reflect.TypeOf((*IConstruct)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
		},
		func() interface{} {
			j := jsiiProxy_IConstruct{}
			_jsii_.InitJsiiProxy(&j.Type__constructsIConstruct)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDependable)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IDependable",
		reflect.TypeOf((*IDependable)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_IDependable{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IFragmentConcatenator",
		reflect.TypeOf((*IFragmentConcatenator)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "join", GoMethod: "Join"},
		},
		func() interface{} {
			return &jsiiProxy_IFragmentConcatenator{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IInspectable",
		reflect.TypeOf((*IInspectable)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "inspect", GoMethod: "Inspect"},
		},
		func() interface{} {
			return &jsiiProxy_IInspectable{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IListProducer",
		reflect.TypeOf((*IListProducer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "produce", GoMethod: "Produce"},
		},
		func() interface{} {
			return &jsiiProxy_IListProducer{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.ILocalBundling",
		reflect.TypeOf((*ILocalBundling)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "tryBundle", GoMethod: "TryBundle"},
		},
		func() interface{} {
			return &jsiiProxy_ILocalBundling{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.INumberProducer",
		reflect.TypeOf((*INumberProducer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "produce", GoMethod: "Produce"},
		},
		func() interface{} {
			return &jsiiProxy_INumberProducer{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IPostProcessor",
		reflect.TypeOf((*IPostProcessor)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "postProcess", GoMethod: "PostProcess"},
		},
		func() interface{} {
			return &jsiiProxy_IPostProcessor{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IResolvable",
		reflect.TypeOf((*IResolvable)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			return &jsiiProxy_IResolvable{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IResolveContext",
		reflect.TypeOf((*IResolveContext)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "preparing", GoGetter: "Preparing"},
			_jsii_.MemberMethod{JsiiMethod: "registerPostProcessor", GoMethod: "RegisterPostProcessor"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberProperty{JsiiProperty: "scope", GoGetter: "Scope"},
		},
		func() interface{} {
			return &jsiiProxy_IResolveContext{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IResource",
		reflect.TypeOf((*IResource)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IResource{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IConstruct)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IReusableStackSynthesizer",
		reflect.TypeOf((*IReusableStackSynthesizer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addFileAsset", GoMethod: "AddFileAsset"},
			_jsii_.MemberMethod{JsiiMethod: "bind", GoMethod: "Bind"},
			_jsii_.MemberMethod{JsiiMethod: "reusableBind", GoMethod: "ReusableBind"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
		},
		func() interface{} {
			j := jsiiProxy_IReusableStackSynthesizer{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IStackSynthesizer)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IRosConditionExpression",
		reflect.TypeOf((*IRosConditionExpression)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_IRosConditionExpression{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IResolvable)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IRosResourceOptions",
		reflect.TypeOf((*IRosResourceOptions)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "condition", GoGetter: "Condition"},
			_jsii_.MemberProperty{JsiiProperty: "count", GoGetter: "Count"},
			_jsii_.MemberProperty{JsiiProperty: "deletionPolicy", GoGetter: "DeletionPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "description", GoGetter: "Description"},
			_jsii_.MemberProperty{JsiiProperty: "metadata", GoGetter: "Metadata"},
		},
		func() interface{} {
			return &jsiiProxy_IRosResourceOptions{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IStackSynthesizer",
		reflect.TypeOf((*IStackSynthesizer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addFileAsset", GoMethod: "AddFileAsset"},
			_jsii_.MemberMethod{JsiiMethod: "bind", GoMethod: "Bind"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
		},
		func() interface{} {
			return &jsiiProxy_IStackSynthesizer{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.IStringProducer",
		reflect.TypeOf((*IStringProducer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "produce", GoMethod: "Produce"},
		},
		func() interface{} {
			return &jsiiProxy_IStringProducer{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.ISynthesisSession",
		reflect.TypeOf((*ISynthesisSession)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "assembly", GoGetter: "Assembly"},
			_jsii_.MemberProperty{JsiiProperty: "outdir", GoGetter: "Outdir"},
			_jsii_.MemberProperty{JsiiProperty: "validateOnSynth", GoGetter: "ValidateOnSynth"},
		},
		func() interface{} {
			return &jsiiProxy_ISynthesisSession{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.ITaggable",
		reflect.TypeOf((*ITaggable)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
		},
		func() interface{} {
			return &jsiiProxy_ITaggable{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.ITemplateOptions",
		reflect.TypeOf((*ITemplateOptions)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "description", GoGetter: "Description"},
			_jsii_.MemberProperty{JsiiProperty: "metadata", GoGetter: "Metadata"},
		},
		func() interface{} {
			return &jsiiProxy_ITemplateOptions{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.ITokenMapper",
		reflect.TypeOf((*ITokenMapper)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "mapToken", GoMethod: "MapToken"},
		},
		func() interface{} {
			return &jsiiProxy_ITokenMapper{}
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-core.ITokenResolver",
		reflect.TypeOf((*ITokenResolver)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "resolveList", GoMethod: "ResolveList"},
			_jsii_.MemberMethod{JsiiMethod: "resolveString", GoMethod: "ResolveString"},
			_jsii_.MemberMethod{JsiiMethod: "resolveToken", GoMethod: "ResolveToken"},
		},
		func() interface{} {
			return &jsiiProxy_ITokenResolver{}
		},
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.IgnoreMode",
		reflect.TypeOf((*IgnoreMode)(nil)).Elem(),
		map[string]interface{}{
			"GLOB": IgnoreMode_GLOB,
			"GIT": IgnoreMode_GIT,
			"DOCKER": IgnoreMode_DOCKER,
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.IgnoreStrategy",
		reflect.TypeOf((*IgnoreStrategy)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "add", GoMethod: "Add"},
			_jsii_.MemberMethod{JsiiMethod: "ignores", GoMethod: "Ignores"},
		},
		func() interface{} {
			return &jsiiProxy_IgnoreStrategy{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Intrinsic",
		reflect.TypeOf((*Intrinsic)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_Intrinsic{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IResolvable)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Lazy",
		reflect.TypeOf((*Lazy)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_Lazy{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.LazyAnyValueOptions",
		reflect.TypeOf((*LazyAnyValueOptions)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.LazyListValueOptions",
		reflect.TypeOf((*LazyListValueOptions)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.LazyStringValueOptions",
		reflect.TypeOf((*LazyStringValueOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.NestedStack",
		reflect.TypeOf((*NestedStack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "allocateLogicalId", GoMethod: "AllocateLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "bundlingRequired", GoGetter: "BundlingRequired"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberMethod{JsiiMethod: "getLogicalId", GoMethod: "GetLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "nested", GoGetter: "Nested"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackParent", GoGetter: "NestedStackParent"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackResource", GoGetter: "NestedStackResource"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "parentStack", GoGetter: "ParentStack"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberMethod{JsiiMethod: "prepareCrossReference", GoMethod: "PrepareCrossReference"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "renameLogicalId", GoMethod: "RenameLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberProperty{JsiiProperty: "roles", GoGetter: "Roles"},
			_jsii_.MemberMethod{JsiiMethod: "setParameter", GoMethod: "SetParameter"},
			_jsii_.MemberProperty{JsiiProperty: "stackId", GoGetter: "StackId"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "synthesizer", GoGetter: "Synthesizer"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
			_jsii_.MemberProperty{JsiiProperty: "templateOptions", GoGetter: "TemplateOptions"},
			_jsii_.MemberMethod{JsiiMethod: "toJsonString", GoMethod: "ToJsonString"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_NestedStack{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Stack)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.NestedStackProps",
		reflect.TypeOf((*NestedStackProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.RamRoles",
		reflect.TypeOf((*RamRoles)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Reference",
		reflect.TypeOf((*Reference)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "displayName", GoGetter: "DisplayName"},
			_jsii_.MemberMethod{JsiiMethod: "newError", GoMethod: "NewError"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberProperty{JsiiProperty: "target", GoGetter: "Target"},
			_jsii_.MemberMethod{JsiiMethod: "toJSON", GoMethod: "ToJSON"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_Reference{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Intrinsic)
			return &j
		},
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.RemovalPolicy",
		reflect.TypeOf((*RemovalPolicy)(nil)).Elem(),
		map[string]interface{}{
			"DESTROY": RemovalPolicy_DESTROY,
			"RETAIN": RemovalPolicy_RETAIN,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.RemovalPolicyOptions",
		reflect.TypeOf((*RemovalPolicyOptions)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.ResolveOptions",
		reflect.TypeOf((*ResolveOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Resource",
		reflect.TypeOf((*Resource)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "resource", GoGetter: "Resource"},
			_jsii_.MemberMethod{JsiiMethod: "setMetadata", GoMethod: "SetMetadata"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_Resource{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Construct)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.ResourceProps",
		reflect.TypeOf((*ResourceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosCondition",
		reflect.TypeOf((*RosCondition)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "expression", GoGetter: "Expression"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_RosCondition{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_RosElement)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IResolvable)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IRosConditionExpression)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.RosConditionProps",
		reflect.TypeOf((*RosConditionProps)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.RosDeletionPolicy",
		reflect.TypeOf((*RosDeletionPolicy)(nil)).Elem(),
		map[string]interface{}{
			"DELETE": RosDeletionPolicy_DELETE,
			"RETAIN": RosDeletionPolicy_RETAIN,
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosElement",
		reflect.TypeOf((*RosElement)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_RosElement{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Construct)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosInfo",
		reflect.TypeOf((*RosInfo)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_RosInfo{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_RosElement)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosMapping",
		reflect.TypeOf((*RosMapping)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "findInMap", GoMethod: "FindInMap"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "setValue", GoMethod: "SetValue"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_RosMapping{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_RosRefElement)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.RosMappingProps",
		reflect.TypeOf((*RosMappingProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosOutput",
		reflect.TypeOf((*RosOutput)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_RosOutput{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_RosElement)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.RosOutputProps",
		reflect.TypeOf((*RosOutputProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosParameter",
		reflect.TypeOf((*RosParameter)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "noEcho", GoGetter: "NoEcho"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "value", GoGetter: "Value"},
			_jsii_.MemberProperty{JsiiProperty: "valueAsAny", GoGetter: "ValueAsAny"},
			_jsii_.MemberProperty{JsiiProperty: "valueAsBoolean", GoGetter: "ValueAsBoolean"},
			_jsii_.MemberProperty{JsiiProperty: "valueAsList", GoGetter: "ValueAsList"},
			_jsii_.MemberProperty{JsiiProperty: "valueAsNumber", GoGetter: "ValueAsNumber"},
			_jsii_.MemberProperty{JsiiProperty: "valueAsString", GoGetter: "ValueAsString"},
		},
		func() interface{} {
			j := jsiiProxy_RosParameter{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_RosElement)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosParameter.AssociationProperty",
		reflect.TypeOf((*RosParameter_AssociationProperty)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_RosParameter_AssociationProperty{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.RosParameterProps",
		reflect.TypeOf((*RosParameterProps)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.RosParameterType",
		reflect.TypeOf((*RosParameterType)(nil)).Elem(),
		map[string]interface{}{
			"STRING": RosParameterType_STRING,
			"NUMBER": RosParameterType_NUMBER,
			"JSON": RosParameterType_JSON,
			"BOOLEAN": RosParameterType_BOOLEAN,
			"COMMA_DELIMITED_LIST": RosParameterType_COMMA_DELIMITED_LIST,
			"OOS_PARAMETER": RosParameterType_OOS_PARAMETER,
			"OOS_SECRET_PARAMETER": RosParameterType_OOS_SECRET_PARAMETER,
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosPseudo",
		reflect.TypeOf((*RosPseudo)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_RosPseudo{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosRefElement",
		reflect.TypeOf((*RosRefElement)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_RosRefElement{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_RosElement)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.RosResource",
		reflect.TypeOf((*RosResource)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDeletionOverride", GoMethod: "AddDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addDependsOn", GoMethod: "AddDependsOn"},
			_jsii_.MemberMethod{JsiiMethod: "addDesc", GoMethod: "AddDesc"},
			_jsii_.MemberMethod{JsiiMethod: "addMetaData", GoMethod: "AddMetaData"},
			_jsii_.MemberMethod{JsiiMethod: "addOverride", GoMethod: "AddOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyDeletionOverride", GoMethod: "AddPropertyDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyOverride", GoMethod: "AddPropertyOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addRosDependency", GoMethod: "AddRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosResource{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_RosRefElement)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.RosResourceProps",
		reflect.TypeOf((*RosResourceProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.RosTag",
		reflect.TypeOf((*RosTag)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Stack",
		reflect.TypeOf((*Stack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "allocateLogicalId", GoMethod: "AllocateLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "bundlingRequired", GoGetter: "BundlingRequired"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "getLogicalId", GoMethod: "GetLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "nested", GoGetter: "Nested"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackParent", GoGetter: "NestedStackParent"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackResource", GoGetter: "NestedStackResource"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "parentStack", GoGetter: "ParentStack"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberMethod{JsiiMethod: "prepareCrossReference", GoMethod: "PrepareCrossReference"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "renameLogicalId", GoMethod: "RenameLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberProperty{JsiiProperty: "roles", GoGetter: "Roles"},
			_jsii_.MemberProperty{JsiiProperty: "stackId", GoGetter: "StackId"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "synthesizer", GoGetter: "Synthesizer"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
			_jsii_.MemberProperty{JsiiProperty: "templateOptions", GoGetter: "TemplateOptions"},
			_jsii_.MemberMethod{JsiiMethod: "toJsonString", GoMethod: "ToJsonString"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_Stack{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Construct)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ITaggable)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.StackProps",
		reflect.TypeOf((*StackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.StackSynthesizer",
		reflect.TypeOf((*StackSynthesizer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addFileAsset", GoMethod: "AddFileAsset"},
			_jsii_.MemberMethod{JsiiMethod: "bind", GoMethod: "Bind"},
			_jsii_.MemberProperty{JsiiProperty: "boundStack", GoGetter: "BoundStack"},
			_jsii_.MemberMethod{JsiiMethod: "emitArtifact", GoMethod: "EmitArtifact"},
			_jsii_.MemberMethod{JsiiMethod: "rosLocationFromFileAsset", GoMethod: "RosLocationFromFileAsset"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "synthesizeTemplate", GoMethod: "SynthesizeTemplate"},
		},
		func() interface{} {
			j := jsiiProxy_StackSynthesizer{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IStackSynthesizer)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Stage",
		reflect.TypeOf((*Stage)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "assetOutdir", GoGetter: "AssetOutdir"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "outdir", GoGetter: "Outdir"},
			_jsii_.MemberProperty{JsiiProperty: "parentStage", GoGetter: "ParentStage"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberProperty{JsiiProperty: "stageName", GoGetter: "StageName"},
			_jsii_.MemberMethod{JsiiMethod: "synth", GoMethod: "Synth"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_Stage{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_Construct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.StageProps",
		reflect.TypeOf((*StageProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.StageSynthesisOptions",
		reflect.TypeOf((*StageSynthesisOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.StringConcat",
		reflect.TypeOf((*StringConcat)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "join", GoMethod: "Join"},
		},
		func() interface{} {
			j := jsiiProxy_StringConcat{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IFragmentConcatenator)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.StringSpecializer",
		reflect.TypeOf((*StringSpecializer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "qualifierOnly", GoMethod: "QualifierOnly"},
			_jsii_.MemberMethod{JsiiMethod: "specialize", GoMethod: "Specialize"},
			_jsii_.MemberMethod{JsiiMethod: "specializeNoTokens", GoMethod: "SpecializeNoTokens"},
		},
		func() interface{} {
			return &jsiiProxy_StringSpecializer{}
		},
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.SymlinkFollowMode",
		reflect.TypeOf((*SymlinkFollowMode)(nil)).Elem(),
		map[string]interface{}{
			"NEVER": SymlinkFollowMode_NEVER,
			"ALWAYS": SymlinkFollowMode_ALWAYS,
			"EXTERNAL": SymlinkFollowMode_EXTERNAL,
			"BLOCK_EXTERNAL": SymlinkFollowMode_BLOCK_EXTERNAL,
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.SynthesisOptions",
		reflect.TypeOf((*SynthesisOptions)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.SynthesizeStackArtifactOptions",
		reflect.TypeOf((*SynthesizeStackArtifactOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.TagManager",
		reflect.TypeOf((*TagManager)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "applyTagAspectHere", GoMethod: "ApplyTagAspectHere"},
			_jsii_.MemberMethod{JsiiMethod: "hasTags", GoMethod: "HasTags"},
			_jsii_.MemberMethod{JsiiMethod: "removeTag", GoMethod: "RemoveTag"},
			_jsii_.MemberMethod{JsiiMethod: "renderTags", GoMethod: "RenderTags"},
			_jsii_.MemberMethod{JsiiMethod: "setTag", GoMethod: "SetTag"},
			_jsii_.MemberProperty{JsiiProperty: "tagPropertyName", GoGetter: "TagPropertyName"},
			_jsii_.MemberMethod{JsiiMethod: "tagValues", GoMethod: "TagValues"},
		},
		func() interface{} {
			return &jsiiProxy_TagManager{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.TagManagerOptions",
		reflect.TypeOf((*TagManagerOptions)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@alicloud/ros-cdk-core.TagType",
		reflect.TypeOf((*TagType)(nil)).Elem(),
		map[string]interface{}{
			"STANDARD": TagType_STANDARD,
			"AUTOSCALING_GROUP": TagType_AUTOSCALING_GROUP,
			"MAP": TagType_MAP,
			"KEY_VALUE": TagType_KEY_VALUE,
			"NOT_TAGGABLE": TagType_NOT_TAGGABLE,
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Token",
		reflect.TypeOf((*Token)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_Token{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.Tokenization",
		reflect.TypeOf((*Tokenization)(nil)).Elem(),
		nil, // no members
		func() interface{} {
			return &jsiiProxy_Tokenization{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.TokenizedStringFragments",
		reflect.TypeOf((*TokenizedStringFragments)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addIntrinsic", GoMethod: "AddIntrinsic"},
			_jsii_.MemberMethod{JsiiMethod: "addLiteral", GoMethod: "AddLiteral"},
			_jsii_.MemberMethod{JsiiMethod: "addToken", GoMethod: "AddToken"},
			_jsii_.MemberProperty{JsiiProperty: "firstToken", GoGetter: "FirstToken"},
			_jsii_.MemberProperty{JsiiProperty: "firstValue", GoGetter: "FirstValue"},
			_jsii_.MemberMethod{JsiiMethod: "join", GoMethod: "Join"},
			_jsii_.MemberProperty{JsiiProperty: "length", GoGetter: "Length"},
			_jsii_.MemberMethod{JsiiMethod: "mapTokens", GoMethod: "MapTokens"},
			_jsii_.MemberProperty{JsiiProperty: "tokens", GoGetter: "Tokens"},
		},
		func() interface{} {
			return &jsiiProxy_TokenizedStringFragments{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.TreeInspector",
		reflect.TypeOf((*TreeInspector)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addAttribute", GoMethod: "AddAttribute"},
			_jsii_.MemberProperty{JsiiProperty: "attributes", GoGetter: "Attributes"},
		},
		func() interface{} {
			return &jsiiProxy_TreeInspector{}
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-core.ValidationError",
		reflect.TypeOf((*ValidationError)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.ValidationResult",
		reflect.TypeOf((*ValidationResult)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "assertSuccess", GoMethod: "AssertSuccess"},
			_jsii_.MemberProperty{JsiiProperty: "errorMessage", GoGetter: "ErrorMessage"},
			_jsii_.MemberMethod{JsiiMethod: "errorTree", GoMethod: "ErrorTree"},
			_jsii_.MemberProperty{JsiiProperty: "isSuccess", GoGetter: "IsSuccess"},
			_jsii_.MemberMethod{JsiiMethod: "prefix", GoMethod: "Prefix"},
			_jsii_.MemberProperty{JsiiProperty: "results", GoGetter: "Results"},
		},
		func() interface{} {
			return &jsiiProxy_ValidationResult{}
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-core.ValidationResults",
		reflect.TypeOf((*ValidationResults)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "collect", GoMethod: "Collect"},
			_jsii_.MemberMethod{JsiiMethod: "errorTreeList", GoMethod: "ErrorTreeList"},
			_jsii_.MemberProperty{JsiiProperty: "isSuccess", GoGetter: "IsSuccess"},
			_jsii_.MemberProperty{JsiiProperty: "results", GoGetter: "Results"},
			_jsii_.MemberMethod{JsiiMethod: "wrap", GoMethod: "Wrap"},
		},
		func() interface{} {
			return &jsiiProxy_ValidationResults{}
		},
	)
}
