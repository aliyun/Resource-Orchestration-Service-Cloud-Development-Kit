package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `MasterSlaveServerGroup`.
type IMasterSlaveServerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute MasterSlaveServerGroupId: Active/standby server group ID.
	AttrMasterSlaveServerGroupId() interface{}
	Props() *MasterSlaveServerGroupProps
}

// The jsii proxy for IMasterSlaveServerGroup
type jsiiProxy_IMasterSlaveServerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMasterSlaveServerGroup) AttrMasterSlaveServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterSlaveServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMasterSlaveServerGroup) Props() *MasterSlaveServerGroupProps {
	var returns *MasterSlaveServerGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

