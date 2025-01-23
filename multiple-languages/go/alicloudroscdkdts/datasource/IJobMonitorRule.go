package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/datasource/internal"
)

// Represents a `JobMonitorRule`.
type IJobMonitorRule interface {
	alicloudroscdkcore.IResource
	// Attribute DelayRuleTime: The threshold that triggers the alert.
	AttrDelayRuleTime() interface{}
	// Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
	AttrDtsJobId() interface{}
	// Attribute Period: The statistical period for incremental validation tasks, in minutes.
	AttrPeriod() interface{}
	// Attribute Phone: The mobile phone numbers that receive alert notifications.
	//
	// Multiple mobile numbers are separated by commas (,).
	AttrPhone() interface{}
	// Attribute State: Indicates whether the monitoring rule is enabled.
	AttrState() interface{}
	// Attribute Times: The number of cycles for the incremental validation task.
	AttrTimes() interface{}
	// Attribute Type: The type of the monitoring rule.
	AttrType() interface{}
	Props() *JobMonitorRuleProps
}

// The jsii proxy for IJobMonitorRule
type jsiiProxy_IJobMonitorRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IJobMonitorRule) AttrDelayRuleTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDelayRuleTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRule) AttrDtsJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRule) AttrPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRule) AttrPhone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPhone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRule) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRule) AttrTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRule) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRule) Props() *JobMonitorRuleProps {
	var returns *JobMonitorRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

