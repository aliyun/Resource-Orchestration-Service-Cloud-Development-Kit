package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `FlowLog`.
type IFlowLog interface {
	alicloudroscdkcore.IResource
	// Attribute AggregationInterval: Data aggregation interval.
	AttrAggregationInterval() interface{}
	// Attribute BusinessStatus: Business status.
	AttrBusinessStatus() interface{}
	// Attribute CreateTime: the time of creation.
	AttrCreateTime() interface{}
	// Attribute Description: The Description of flow log.
	AttrDescription() interface{}
	// Attribute FlowLogId: The flow log ID.
	AttrFlowLogId() interface{}
	// Attribute FlowLogName: The flow log name.
	AttrFlowLogName() interface{}
	// Attribute LogStoreName: The log store name.
	AttrLogStoreName() interface{}
	// Attribute ProjectName: The project name.
	AttrProjectName() interface{}
	// Attribute ResourceId: The resource id.
	AttrResourceId() interface{}
	// Attribute ResourceType: The resource type.
	AttrResourceType() interface{}
	// Attribute TrafficType: The traffic type.
	AttrTrafficType() interface{}
	Props() *FlowLogProps
}

// The jsii proxy for IFlowLog
type jsiiProxy_IFlowLog struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlowLog) AttrAggregationInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAggregationInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrBusinessStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBusinessStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrFlowLogId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowLogId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrFlowLogName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowLogName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrLogStoreName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogStoreName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) AttrTrafficType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLog) Props() *FlowLogProps {
	var returns *FlowLogProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

