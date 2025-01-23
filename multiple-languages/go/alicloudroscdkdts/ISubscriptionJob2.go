package alicloudroscdkdts

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/internal"
)

// Represents a `SubscriptionJob2`.
type ISubscriptionJob2 interface {
	alicloudroscdkcore.IResource
	// Attribute DtsInstanceId: The ID of the DTS instance.
	AttrDtsInstanceId() interface{}
	// Attribute DtsJobId: The ID of the task.
	AttrDtsJobId() interface{}
	// Attribute DtsJobName: The name of the DTS job.
	AttrDtsJobName() interface{}
	Props() *SubscriptionJob2Props
}

// The jsii proxy for ISubscriptionJob2
type jsiiProxy_ISubscriptionJob2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISubscriptionJob2) AttrDtsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscriptionJob2) AttrDtsJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscriptionJob2) AttrDtsJobName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsJobName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscriptionJob2) Props() *SubscriptionJob2Props {
	var returns *SubscriptionJob2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

