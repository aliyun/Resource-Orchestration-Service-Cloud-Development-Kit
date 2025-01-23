package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/datasource/internal"
)

// Represents a `CustomDomains`.
type ICustomDomains interface {
	alicloudroscdkcore.IResource
	// Attribute CustomDomains: The list of custom_domain.
	AttrCustomDomains() interface{}
	// Attribute DomainNames: The list of custom_domain names.
	AttrDomainNames() interface{}
	Props() *CustomDomainsProps
}

// The jsii proxy for ICustomDomains
type jsiiProxy_ICustomDomains struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomDomains) AttrCustomDomains() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomDomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomDomains) AttrDomainNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomDomains) Props() *CustomDomainsProps {
	var returns *CustomDomainsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

