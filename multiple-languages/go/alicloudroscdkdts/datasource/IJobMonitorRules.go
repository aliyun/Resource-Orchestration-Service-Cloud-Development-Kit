package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/datasource/internal"
)

// Represents a `JobMonitorRules`.
type IJobMonitorRules interface {
	alicloudroscdkcore.IResource
	// Attribute DtsJobIds: The list of dts job IDs.
	AttrDtsJobIds() interface{}
	// Attribute JobMonitorRules: The list of job monitor rules.
	AttrJobMonitorRules() interface{}
	Props() *JobMonitorRulesProps
}

// The jsii proxy for IJobMonitorRules
type jsiiProxy_IJobMonitorRules struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IJobMonitorRules) AttrDtsJobIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsJobIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRules) AttrJobMonitorRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJobMonitorRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJobMonitorRules) Props() *JobMonitorRulesProps {
	var returns *JobMonitorRulesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

