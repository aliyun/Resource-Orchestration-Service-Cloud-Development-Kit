package alicloudroscdkcore

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Encodes information how a certain Stack should be deployed.
type IStackSynthesizer interface {
	// Register a File Asset.
	//
	// Returns the parameters that can be used to refer to the asset inside the template.
	AddFileAsset(asset *FileAssetSource) *FileAssetLocation
	// Bind to the stack this environment is going to be used on.
	//
	// Must be called before any of the other methods are called.
	Bind(stack Stack)
	// Synthesize the associated stack to the session.
	Synthesize(session ISynthesisSession)
}

// The jsii proxy for IStackSynthesizer
type jsiiProxy_IStackSynthesizer struct {
	_ byte // padding
}

func (i *jsiiProxy_IStackSynthesizer) AddFileAsset(asset *FileAssetSource) *FileAssetLocation {
	if err := i.validateAddFileAssetParameters(asset); err != nil {
		panic(err)
	}
	var returns *FileAssetLocation

	_jsii_.Invoke(
		i,
		"addFileAsset",
		[]interface{}{asset},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_IStackSynthesizer) Bind(stack Stack) {
	if err := i.validateBindParameters(stack); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"bind",
		[]interface{}{stack},
	)
}

func (i *jsiiProxy_IStackSynthesizer) Synthesize(session ISynthesisSession) {
	if err := i.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"synthesize",
		[]interface{}{session},
	)
}

