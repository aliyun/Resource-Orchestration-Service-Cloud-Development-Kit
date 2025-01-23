package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `KeyPairs`.
type IKeyPairs interface {
	alicloudroscdkcore.IResource
	// Attribute KeyPairNames: The list of key pair names.
	AttrKeyPairNames() interface{}
	// Attribute KeyPairs: The list of key pairs.
	AttrKeyPairs() interface{}
	Props() *KeyPairsProps
}

// The jsii proxy for IKeyPairs
type jsiiProxy_IKeyPairs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IKeyPairs) AttrKeyPairNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeyPairs) AttrKeyPairs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeyPairs) Props() *KeyPairsProps {
	var returns *KeyPairsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

