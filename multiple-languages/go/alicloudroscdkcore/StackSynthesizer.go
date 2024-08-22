package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

// Base class for implementing an IStackSynthesizer.
//
// This class needs to exist to provide public surface area for external
// implementations of stack synthesizers. The protected methods give
// access to functions that are otherwise @_internal to the framework
// and could not be accessed by external implementors.
type StackSynthesizer interface {
	IStackSynthesizer
	// Retrieve the bound stack.
	//
	// Fails if the stack hasn't been bound yet.
	BoundStack() Stack
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
	// Turn a file asset location into a ROS representation of that location.
	//
	// If any of the fields contain placeholders, the result will be wrapped in a `Fn.sub`.
	RosLocationFromFileAsset(location *alicloudroscdkassemblyschema.FileDestination) *FileAssetLocation
	// Synthesize the associated stack to the session.
	Synthesize(session ISynthesisSession)
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

// The jsii proxy struct for StackSynthesizer
type jsiiProxy_StackSynthesizer struct {
	jsiiProxy_IStackSynthesizer
}

func (j *jsiiProxy_StackSynthesizer) BoundStack() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"boundStack",
		&returns,
	)
	return returns
}


func NewStackSynthesizer_Override(s StackSynthesizer) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.StackSynthesizer",
		nil, // no parameters
		s,
	)
}

func (s *jsiiProxy_StackSynthesizer) AddFileAsset(asset *FileAssetSource) *FileAssetLocation {
	if err := s.validateAddFileAssetParameters(asset); err != nil {
		panic(err)
	}
	var returns *FileAssetLocation

	_jsii_.Invoke(
		s,
		"addFileAsset",
		[]interface{}{asset},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StackSynthesizer) Bind(stack Stack) {
	if err := s.validateBindParameters(stack); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"bind",
		[]interface{}{stack},
	)
}

func (s *jsiiProxy_StackSynthesizer) EmitArtifact(session ISynthesisSession, options *SynthesizeStackArtifactOptions) {
	if err := s.validateEmitArtifactParameters(session, options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"emitArtifact",
		[]interface{}{session, options},
	)
}

func (s *jsiiProxy_StackSynthesizer) RosLocationFromFileAsset(location *alicloudroscdkassemblyschema.FileDestination) *FileAssetLocation {
	if err := s.validateRosLocationFromFileAssetParameters(location); err != nil {
		panic(err)
	}
	var returns *FileAssetLocation

	_jsii_.Invoke(
		s,
		"rosLocationFromFileAsset",
		[]interface{}{location},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StackSynthesizer) Synthesize(session ISynthesisSession) {
	if err := s.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"synthesize",
		[]interface{}{session},
	)
}

func (s *jsiiProxy_StackSynthesizer) SynthesizeTemplate(session ISynthesisSession) *FileAssetSource {
	if err := s.validateSynthesizeTemplateParameters(session); err != nil {
		panic(err)
	}
	var returns *FileAssetSource

	_jsii_.Invoke(
		s,
		"synthesizeTemplate",
		[]interface{}{session},
		&returns,
	)

	return returns
}

