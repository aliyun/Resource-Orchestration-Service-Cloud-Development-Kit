package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/constructs-go/constructs/v3"
)

// Stages a file or directory from a location on the file system into a staging directory.
//
// This is controlled by the context key 'aliyun:ros:disable-asset-staging' and enabled
// by the CLI by default in order to ensure that when the CDK app exists, all
// assets are available for deployment. Otherwise, if an app references assets
// in temporary locations, those will not be available when it exists.
//
// The `stagedPath` property is a stringified token that represents the location
// of the file or directory after staging. It will be resolved only during the
// "prepare" stage and may be either the original path or the staged path
// depending on the context setting.
//
// The file/directory are staged based on their content hash (fingerprint). This
// means that only if content was changed, copy will happen.
type AssetStaging interface {
	Construct
	// Absolute path to the asset data.
	//
	// If asset staging is disabled, this will just be the source path or
	// a temporary directory used for bundling.
	//
	// If asset staging is enabled it will be the staged path.
	//
	// IMPORTANT: If you are going to call `addFileAsset()`, use
	// `relativeStagedPath()` instead.
	AbsoluteStagedPath() *string
	// A cryptographic hash of the asset.
	AssetHash() *string
	// Whether this asset is an archive (zip or jar).
	IsArchive() *bool
	// The construct tree node associated with this construct.
	Node() ConstructNode
	// How this asset should be packaged.
	Packaging() FileAssetPackaging
	// The absolute path of the asset as it was referenced by the user.
	SourcePath() *string
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	OnPrepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	OnSynthesize(session constructs.ISynthesisSession)
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	OnValidate() *[]*string
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	// Return the path to the staged asset, relative to the Cloud Assembly (manifest) directory of the given stack.
	//
	// Only returns a relative path if the asset was staged, returns an absolute path if
	// it was not staged.
	//
	// A bundled asset might end up in the outDir and still not count as
	// "staged"; if asset staging is disabled we're technically expected to
	// reference source directories, but we don't have a source directory for the
	// bundled outputs (as the bundle output is written to a temporary
	// directory). Nevertheless, we will still return an absolute path.
	//
	// A non-obvious directory layout may look like this:
	//
	// ```
	//    CLOUD ASSEMBLY ROOT
	//      +-- asset.12345abcdef/
	//      +-- assembly-Stage
	//            +-- MyStack.template.json
	//            +-- MyStack.assets.json <- will contain { "path": "../asset.12345abcdef" }
	// ```.
	RelativeStagedPath(stack Stack) *string
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for AssetStaging
type jsiiProxy_AssetStaging struct {
	jsiiProxy_Construct
}

func (j *jsiiProxy_AssetStaging) AbsoluteStagedPath() *string {
	var returns *string
	_jsii_.Get(
		j,
		"absoluteStagedPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AssetStaging) AssetHash() *string {
	var returns *string
	_jsii_.Get(
		j,
		"assetHash",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AssetStaging) IsArchive() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"isArchive",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AssetStaging) Node() ConstructNode {
	var returns ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AssetStaging) Packaging() FileAssetPackaging {
	var returns FileAssetPackaging
	_jsii_.Get(
		j,
		"packaging",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AssetStaging) SourcePath() *string {
	var returns *string
	_jsii_.Get(
		j,
		"sourcePath",
		&returns,
	)
	return returns
}


func NewAssetStaging(scope Construct, id *string, props *AssetStagingProps) AssetStaging {
	_init_.Initialize()

	if err := validateNewAssetStagingParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_AssetStaging{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.AssetStaging",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewAssetStaging_Override(a AssetStaging, scope Construct, id *string, props *AssetStagingProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.AssetStaging",
		[]interface{}{scope, id, props},
		a,
	)
}

// Clears the asset hash cache.
func AssetStaging_ClearAssetHashCache() {
	_init_.Initialize()

	_jsii_.StaticInvokeVoid(
		"@alicloud/ros-cdk-core.AssetStaging",
		"clearAssetHashCache",
		nil, // no parameters
	)
}

// Return whether the given object is a Construct.
func AssetStaging_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateAssetStaging_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.AssetStaging",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func AssetStaging_BUNDLING_INPUT_DIR() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.AssetStaging",
		"BUNDLING_INPUT_DIR",
		&returns,
	)
	return returns
}

func AssetStaging_BUNDLING_OUTPUT_DIR() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.AssetStaging",
		"BUNDLING_OUTPUT_DIR",
		&returns,
	)
	return returns
}

func (a *jsiiProxy_AssetStaging) OnPrepare() {
	_jsii_.InvokeVoid(
		a,
		"onPrepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_AssetStaging) OnSynthesize(session constructs.ISynthesisSession) {
	if err := a.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_AssetStaging) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AssetStaging) Prepare() {
	_jsii_.InvokeVoid(
		a,
		"prepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_AssetStaging) RelativeStagedPath(stack Stack) *string {
	if err := a.validateRelativeStagedPathParameters(stack); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.Invoke(
		a,
		"relativeStagedPath",
		[]interface{}{stack},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AssetStaging) Synthesize(session ISynthesisSession) {
	if err := a.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"synthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_AssetStaging) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AssetStaging) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

