package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdirectmail/datasource/internal"
)

// Represents a `Domains`.
type IDomains interface {
	alicloudroscdkcore.IResource
	// Attribute DomainIds: The list of domain IDs.
	AttrDomainIds() interface{}
	// Attribute Domains: The list of domains.
	AttrDomains() interface{}
	Props() *DomainsProps
}

// The jsii proxy for IDomains
type jsiiProxy_IDomains struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomains) AttrDomainIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomains) AttrDomains() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomains) Props() *DomainsProps {
	var returns *DomainsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

