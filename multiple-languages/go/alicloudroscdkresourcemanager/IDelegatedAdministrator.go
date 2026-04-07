package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `DelegatedAdministrator`.
type IDelegatedAdministrator interface {
	alicloudroscdkcore.IResource
	// Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.
	AttrAccountId() interface{}
	// Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.
	AttrDelegationEnabledTime() interface{}
	// Attribute ServicePrincipal: The identifier of the trusted service.
	AttrServicePrincipal() interface{}
	Props() *DelegatedAdministratorProps
}

// The jsii proxy for IDelegatedAdministrator
type jsiiProxy_IDelegatedAdministrator struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDelegatedAdministrator) AttrAccountId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDelegatedAdministrator) AttrDelegationEnabledTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDelegationEnabledTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDelegatedAdministrator) AttrServicePrincipal() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServicePrincipal",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDelegatedAdministrator) Props() *DelegatedAdministratorProps {
	var returns *DelegatedAdministratorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

