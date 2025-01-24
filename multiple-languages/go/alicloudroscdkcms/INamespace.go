package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Namespace`.
type INamespace interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The timestamp that was generated when the namespace was created.
	//
	// Unit: milliseconds.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the namespace.
	AttrDescription() interface{}
	// Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
	AttrModifyTime() interface{}
	// Attribute Namespace: The namespace for the Alibaba Cloud service.
	AttrNamespace() interface{}
	// Attribute Specification: The data retention period of the namespace.
	//
	// Valid values:
	// - cms.s1.large: Data storage duration is 15 days.
	// - cms.s1.xlarge: Data storage duration is 32 days.
	// - cms.s1.2xlarge: Data storage duration 63 days.
	// - cms.s1.3xlarge: Data storage duration 93 days.
	// - cms.s1.6xlarge: Data storage duration 185 days.
	// - cms.s1.12xlarge: Data storage duration 376 days.
	AttrSpecification() interface{}
	Props() *NamespaceProps
}

// The jsii proxy for INamespace
type jsiiProxy_INamespace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INamespace) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) Props() *NamespaceProps {
	var returns *NamespaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

