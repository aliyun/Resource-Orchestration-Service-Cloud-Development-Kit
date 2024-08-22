package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

// Uses conventionally named roles and reify asset storage locations.
type DefaultStackSynthesizer interface {
	StackSynthesizer
	IBoundStackSynthesizer
	IReusableStackSynthesizer
	// Retrieve the bound stack.
	//
	// Fails if the stack hasn't been bound yet.
	BoundStack() Stack
	Stack() Stack
	// Register a File Asset.
	//
	// Returns the parameters that can be used to refer to the asset inside the template.
	//
	// The synthesizer must rely on some out-of-band mechanism to make sure the given files
	// are actually placed in the returned location before the deployment happens. This can
	// be by writing the instructions to the asset manifest (for use by the `cdk-assets` tool),
	// by relying on the CLI to upload files (legacy behavior), or some other operator controlled
	// mechanism.
	AddFileAsset(asset *FileAssetSource) *FileAssetLocation
	// Bind to the stack this environment is going to be used on.
	//
	// Must be called before any of the other methods are called.
	Bind(stack Stack)
	// Write the ROS stack artifact to the session.
	//
	// Use default settings to add a ROSStackArtifact artifact to
	// the given synthesis session. The Stack artifact will control the settings for the
	// ROS deployment.
	EmitArtifact(session ISynthesisSession, options *SynthesizeStackArtifactOptions)
	// Produce a bound Stack Synthesizer for the given stack.
	//
	// This method may be called more than once on the same object.
	ReusableBind(stack Stack) IBoundStackSynthesizer
	// Turn a file asset location into a ROS representation of that location.
	//
	// If any of the fields contain placeholders, the result will be wrapped in a `Fn.sub`.
	RosLocationFromFileAsset(location *alicloudroscdkassemblyschema.FileDestination) *FileAssetLocation
	// Synthesize the associated stack to the session.
	Synthesize(session ISynthesisSession)
	SynthesizeStackArtifacts(session ISynthesisSession)
	// Write the stack template to the given session.
	//
	// Return a descriptor that represents the stack template as a file asset
	// source, for adding to an asset manifest (if desired). This can be used to
	// have the asset manifest system (`cdk-assets`) upload the template to OSS
	// using the appropriate role, so that afterwards only a ROS
	// deployment is necessary.
	//
	// If the template is uploaded as an asset, the `stackTemplateAssetObjectUrl`
	// property should be set when calling `emitArtifact.`
	//
	// If the template is *NOT* uploaded as an asset first and the template turns
	// out to be >50KB, it will need to be uploaded to OSS anyway. At that point
	// the credentials will be the same identity that is doing the `UpdateStack`
	// call, which may not have the right permissions to write to OSS.
	SynthesizeTemplate(session ISynthesisSession) *FileAssetSource
}

// The jsii proxy struct for DefaultStackSynthesizer
type jsiiProxy_DefaultStackSynthesizer struct {
	jsiiProxy_StackSynthesizer
	jsiiProxy_IBoundStackSynthesizer
	jsiiProxy_IReusableStackSynthesizer
}

func (j *jsiiProxy_DefaultStackSynthesizer) BoundStack() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"boundStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DefaultStackSynthesizer) Stack() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


func NewDefaultStackSynthesizer(props *DefaultStackSynthesizerProps) DefaultStackSynthesizer {
	_init_.Initialize()

	if err := validateNewDefaultStackSynthesizerParameters(props); err != nil {
		panic(err)
	}
	j := jsiiProxy_DefaultStackSynthesizer{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.DefaultStackSynthesizer",
		[]interface{}{props},
		&j,
	)

	return &j
}

func NewDefaultStackSynthesizer_Override(d DefaultStackSynthesizer, props *DefaultStackSynthesizerProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.DefaultStackSynthesizer",
		[]interface{}{props},
		d,
	)
}

func DefaultStackSynthesizer_DEFAULT_FILE_ASSET_PREFIX() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.DefaultStackSynthesizer",
		"DEFAULT_FILE_ASSET_PREFIX",
		&returns,
	)
	return returns
}

func DefaultStackSynthesizer_DEFAULT_FILE_ASSETS_BUCKET_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.DefaultStackSynthesizer",
		"DEFAULT_FILE_ASSETS_BUCKET_NAME",
		&returns,
	)
	return returns
}

func DefaultStackSynthesizer_DEFAULT_QUALIFIER() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.DefaultStackSynthesizer",
		"DEFAULT_QUALIFIER",
		&returns,
	)
	return returns
}

func (d *jsiiProxy_DefaultStackSynthesizer) AddFileAsset(asset *FileAssetSource) *FileAssetLocation {
	if err := d.validateAddFileAssetParameters(asset); err != nil {
		panic(err)
	}
	var returns *FileAssetLocation

	_jsii_.Invoke(
		d,
		"addFileAsset",
		[]interface{}{asset},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DefaultStackSynthesizer) Bind(stack Stack) {
	if err := d.validateBindParameters(stack); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"bind",
		[]interface{}{stack},
	)
}

func (d *jsiiProxy_DefaultStackSynthesizer) EmitArtifact(session ISynthesisSession, options *SynthesizeStackArtifactOptions) {
	if err := d.validateEmitArtifactParameters(session, options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"emitArtifact",
		[]interface{}{session, options},
	)
}

func (d *jsiiProxy_DefaultStackSynthesizer) ReusableBind(stack Stack) IBoundStackSynthesizer {
	if err := d.validateReusableBindParameters(stack); err != nil {
		panic(err)
	}
	var returns IBoundStackSynthesizer

	_jsii_.Invoke(
		d,
		"reusableBind",
		[]interface{}{stack},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DefaultStackSynthesizer) RosLocationFromFileAsset(location *alicloudroscdkassemblyschema.FileDestination) *FileAssetLocation {
	if err := d.validateRosLocationFromFileAssetParameters(location); err != nil {
		panic(err)
	}
	var returns *FileAssetLocation

	_jsii_.Invoke(
		d,
		"rosLocationFromFileAsset",
		[]interface{}{location},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DefaultStackSynthesizer) Synthesize(session ISynthesisSession) {
	if err := d.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"synthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DefaultStackSynthesizer) SynthesizeStackArtifacts(session ISynthesisSession) {
	if err := d.validateSynthesizeStackArtifactsParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"synthesizeStackArtifacts",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DefaultStackSynthesizer) SynthesizeTemplate(session ISynthesisSession) *FileAssetSource {
	if err := d.validateSynthesizeTemplateParameters(session); err != nil {
		panic(err)
	}
	var returns *FileAssetSource

	_jsii_.Invoke(
		d,
		"synthesizeTemplate",
		[]interface{}{session},
		&returns,
	)

	return returns
}

