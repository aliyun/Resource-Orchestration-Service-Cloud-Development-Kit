package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `IpamScope`.
type IIpamScope interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the IPAM scope.
	AttrCreateTime() interface{}
	// Attribute IpamId: The id of the Ipam instance.
	AttrIpamId() interface{}
	// Attribute IpamScopeDescription: The description of the IPAM's scope of action.
	AttrIpamScopeDescription() interface{}
	// Attribute IpamScopeId: The ID of the IPAM scope.
	AttrIpamScopeId() interface{}
	// Attribute IpamScopeName: The name of the IPAM scope.
	AttrIpamScopeName() interface{}
	// Attribute IpamScopeType: IPAM scope of action type.
	AttrIpamScopeType() interface{}
	// Attribute Tags: The tag of the IPAM scope.
	AttrTags() interface{}
	Props() *IpamScopeProps
}

// The jsii proxy for IIpamScope
type jsiiProxy_IIpamScope struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpamScope) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamScope) AttrIpamId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamScope) AttrIpamScopeDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamScopeDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamScope) AttrIpamScopeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamScopeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamScope) AttrIpamScopeName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamScopeName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamScope) AttrIpamScopeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamScopeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamScope) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamScope) Props() *IpamScopeProps {
	var returns *IpamScopeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

