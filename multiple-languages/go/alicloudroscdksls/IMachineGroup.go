package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `MachineGroup`.
type IMachineGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupName: GroupName of SLS.
	AttrGroupName() interface{}
	// Attribute ProjectName: ProjectName of SLS.
	AttrProjectName() interface{}
	Props() *MachineGroupProps
}

// The jsii proxy for IMachineGroup
type jsiiProxy_IMachineGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMachineGroup) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMachineGroup) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMachineGroup) Props() *MachineGroupProps {
	var returns *MachineGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

