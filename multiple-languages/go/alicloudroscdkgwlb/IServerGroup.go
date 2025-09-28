package alicloudroscdkgwlb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgwlb/internal"
)

// Represents a `ServerGroup`.
type IServerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
	AttrConnectionDrainConfig() interface{}
	// Attribute CreateTime: The creation time of the server group.
	AttrCreateTime() interface{}
	// Attribute HealthCheckConfig: Health check configurations.
	AttrHealthCheckConfig() interface{}
	// Attribute Protocol: Backend Protocol.
	AttrProtocol() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Scheduler: Scheduling algorithm.
	AttrScheduler() interface{}
	// Attribute ServerGroupId: The server group ID.
	AttrServerGroupId() interface{}
	// Attribute ServerGroupName: The server group name.
	AttrServerGroupName() interface{}
	// Attribute ServerGroupType: The server group type.
	AttrServerGroupType() interface{}
	// Attribute Servers: List of servers.
	AttrServers() interface{}
	// Attribute Tags: List of resource tags.
	AttrTags() interface{}
	// Attribute VpcId: The VPC instance ID.
	AttrVpcId() interface{}
	Props() *ServerGroupProps
}

// The jsii proxy for IServerGroup
type jsiiProxy_IServerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServerGroup) AttrConnectionDrainConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionDrainConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrHealthCheckConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrScheduler() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduler",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrServerGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrServerGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrServers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) Props() *ServerGroupProps {
	var returns *ServerGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

