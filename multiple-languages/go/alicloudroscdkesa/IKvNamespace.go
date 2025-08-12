package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `KvNamespace`.
type IKvNamespace interface {
	alicloudroscdkcore.IResource
	// Attribute Description: The description of the namespace.
	AttrDescription() interface{}
	// Attribute KvCapacity: The available capacity of the namespace.
	//
	// Unit: bytes.
	AttrKvCapacity() interface{}
	// Attribute KvCapacityString: The available capacity of the namespace.
	AttrKvCapacityString() interface{}
	// Attribute KvCapacityUsed: The used capacity of the namespace.
	//
	// Unit: bytes.
	AttrKvCapacityUsed() interface{}
	// Attribute KvCapacityUsedString: The used capacity of the namespace.
	AttrKvCapacityUsedString() interface{}
	// Attribute KvNamespace: The name of the namespace.
	AttrKvNamespace() interface{}
	// Attribute NamespaceId: The ID of the namespace.
	AttrNamespaceId() interface{}
	Props() *KvNamespaceProps
}

// The jsii proxy for IKvNamespace
type jsiiProxy_IKvNamespace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IKvNamespace) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKvNamespace) AttrKvCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKvCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKvNamespace) AttrKvCapacityString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKvCapacityString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKvNamespace) AttrKvCapacityUsed() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKvCapacityUsed",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKvNamespace) AttrKvCapacityUsedString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKvCapacityUsedString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKvNamespace) AttrKvNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKvNamespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKvNamespace) AttrNamespaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKvNamespace) Props() *KvNamespaceProps {
	var returns *KvNamespaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

