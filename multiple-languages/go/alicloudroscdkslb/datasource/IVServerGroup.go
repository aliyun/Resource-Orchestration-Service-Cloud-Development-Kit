package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `VServerGroup`.
type IVServerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute BackendServers: The list of backend servers.
	AttrBackendServers() interface{}
	// Attribute CreateTime: The time when the CLB instance was created.
	//
	// The time follows the YYYY-MM-DDThh:mm:ssZ format.
	AttrCreateTime() interface{}
	// Attribute LoadBalancerId: The ID of the CLB instance.
	AttrLoadBalancerId() interface{}
	// Attribute VServerGroupId: The ID of the vServer group.
	AttrVServerGroupId() interface{}
	// Attribute VServerGroupName: The name of the vServer group.
	AttrVServerGroupName() interface{}
	Props() *VServerGroupProps
}

// The jsii proxy for IVServerGroup
type jsiiProxy_IVServerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVServerGroup) AttrBackendServers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackendServers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVServerGroup) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVServerGroup) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVServerGroup) AttrVServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVServerGroup) AttrVServerGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVServerGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVServerGroup) Props() *VServerGroupProps {
	var returns *VServerGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

