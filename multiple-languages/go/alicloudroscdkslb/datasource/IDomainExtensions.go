package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `DomainExtensions`.
type IDomainExtensions interface {
	alicloudroscdkcore.IResource
	// Attribute DomainExtensionIds: The list of domain extension IDs.
	AttrDomainExtensionIds() interface{}
	// Attribute DomainExtensions: The list of domain extensions.
	AttrDomainExtensions() interface{}
	Props() *DomainExtensionsProps
}

// The jsii proxy for IDomainExtensions
type jsiiProxy_IDomainExtensions struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainExtensions) AttrDomainExtensionIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainExtensionIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainExtensions) AttrDomainExtensions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainExtensions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainExtensions) Props() *DomainExtensionsProps {
	var returns *DomainExtensionsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

