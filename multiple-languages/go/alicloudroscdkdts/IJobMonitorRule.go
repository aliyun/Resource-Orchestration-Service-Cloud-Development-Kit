package alicloudroscdkdts

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/internal"
)

// Represents a `JobMonitorRule`.
type IJobMonitorRule interface {
	alicloudroscdkcore.IResource
	// Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
	AttrDelayRuleTime() interface{}
	// Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
	AttrDtsJobId() interface{}
	// Attribute Period: The statistical period of the incremental verification task.
	//
	// Unit: minutes.
	AttrPeriod() interface{}
	// Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.
	AttrPhones() interface{}
	// Attribute State: Whether to enable monitoring rules, return value:.
	AttrState() interface{}
	// Attribute Times: The number of cycles of the incremental verification task.
	AttrTimes() interface{}
	// Attribute Type: Monitoring rules of type, the return value:.
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

func (j *jsiiProxy_IJobMonitorRule) AttrPhones() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPhones",
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

