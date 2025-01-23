package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SyntheticTask`.
type ISyntheticTask interface {
	alicloudroscdkcore.IResource
	// Attribute AvailableAssertions: The list of assertions.
	AttrAvailableAssertions() interface{}
	// Attribute CommonSetting: The general settings.
	AttrCommonSetting() interface{}
	// Attribute CustomPeriod: The custom cycle.
	AttrCustomPeriod() interface{}
	// Attribute Frequency: The detection frequency.
	AttrFrequency() interface{}
	// Attribute MonitorCategory: The detection point type.
	//
	// 1: PC. 2: mobile device.
	AttrMonitorCategory() interface{}
	// Attribute MonitorConf: The monitoring configurations.
	AttrMonitorConf() interface{}
	// Attribute Monitors: The list of monitoring points.
	AttrMonitors() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SyntheticTaskName: The name of synthetic task.
	AttrSyntheticTaskName() interface{}
	// Attribute Tags: The tags of the instance.
	AttrTags() interface{}
	// Attribute TaskId: The ID of the synthetic monitoring task.
	AttrTaskId() interface{}
	// Attribute TaskType: The type of the task.
	AttrTaskType() interface{}
	Props() *SyntheticTaskProps
}

// The jsii proxy for ISyntheticTask
type jsiiProxy_ISyntheticTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISyntheticTask) AttrAvailableAssertions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAvailableAssertions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrCommonSetting() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonSetting",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrCustomPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrFrequency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFrequency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrMonitorCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMonitorCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrMonitorConf() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMonitorConf",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrMonitors() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMonitors",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrSyntheticTaskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSyntheticTaskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) AttrTaskType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTask) Props() *SyntheticTaskProps {
	var returns *SyntheticTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

