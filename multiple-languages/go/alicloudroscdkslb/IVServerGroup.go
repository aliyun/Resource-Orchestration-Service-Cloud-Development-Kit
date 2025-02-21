package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `VServerGroup`.
type IVServerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute BackendServers: Backend server list in this VServerGroup.
	AttrBackendServers() interface{}
	// Attribute LoadBalancerId: The id of load balancer.
	AttrLoadBalancerId() interface{}
	// Attribute VServerGroupId: The id of VServerGroup created.
	AttrVServerGroupId() interface{}
	Props() *VServerGroupProps
}

// The jsii proxy for IVServerGroup
type jsiiProxy_IVServerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVServerGroup) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IVServerGroup) Props() *VServerGroupProps {
	var returns *VServerGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

