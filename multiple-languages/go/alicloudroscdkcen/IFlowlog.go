package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Flowlog`.
type IFlowlog interface {
	alicloudroscdkcore.IResource
	// Attribute CenId: The ID of the CEN instance.
	AttrCenId() interface{}
	// Attribute CreateTime: The time when the flow log was created.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the flow log.
	AttrDescription() interface{}
	// Attribute FlowLogId: The ID of the flow log.
	AttrFlowLogId() interface{}
	// Attribute FlowLogName: The flow log name.
	AttrFlowLogName() interface{}
	// Attribute FlowLogVersion: The flow log version.
	AttrFlowLogVersion() interface{}
	// Attribute Interval: The time window for collecting log data.
	AttrInterval() interface{}
	// Attribute LogFormatString: The strings that define the fields in the flow log.
	AttrLogFormatString() interface{}
	// Attribute LogStoreName: The Logstore that stores the captured traffic data.
	AttrLogStoreName() interface{}
	// Attribute ProjectName: The project that stores the captured traffic data.
	AttrProjectName() interface{}
	// Attribute Tags: The tag of the flow log.
	AttrTags() interface{}
	// Attribute TransitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
	AttrTransitRouterAttachmentId() interface{}
	// Attribute TransitRouterId: The ID of the transit router.
	AttrTransitRouterId() interface{}
	Props() *FlowlogProps
}

// The jsii proxy for IFlowlog
type jsiiProxy_IFlowlog struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlowlog) AttrCenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrFlowLogId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowLogId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrFlowLogName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowLogName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrFlowLogVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowLogVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrLogFormatString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogFormatString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrLogStoreName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogStoreName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) AttrTransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowlog) Props() *FlowlogProps {
	var returns *FlowlogProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

