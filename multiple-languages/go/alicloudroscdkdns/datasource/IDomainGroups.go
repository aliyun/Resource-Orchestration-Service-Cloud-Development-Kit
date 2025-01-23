package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/datasource/internal"
)

// Represents a `DomainGroups`.
type IDomainGroups interface {
	alicloudroscdkcore.IResource
	// Attribute DomainGroupIds: The list of The DNS domain group ids.
	AttrDomainGroupIds() interface{}
	// Attribute DomainGroups: The information about DNS domain groups.
	AttrDomainGroups() interface{}
	Props() *DomainGroupsProps
}

// The jsii proxy for IDomainGroups
type jsiiProxy_IDomainGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainGroups) AttrDomainGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainGroups) AttrDomainGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainGroups) Props() *DomainGroupsProps {
	var returns *DomainGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

