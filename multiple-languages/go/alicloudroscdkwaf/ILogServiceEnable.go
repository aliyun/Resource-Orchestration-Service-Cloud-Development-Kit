package alicloudroscdkwaf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf/internal"
)

// Represents a `LogServiceEnable`.
type ILogServiceEnable interface {
	alicloudroscdkcore.IResource
	// Attribute Domain: The domain name that is added to WAF.
	AttrDomain() interface{}
	// Attribute InstanceId: The ID of the WAF instance.
	//
	// You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
	AttrInstanceId() interface{}
	Props() *LogServiceEnableProps
}

// The jsii proxy for ILogServiceEnable
type jsiiProxy_ILogServiceEnable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILogServiceEnable) AttrDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogServiceEnable) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogServiceEnable) Props() *LogServiceEnableProps {
	var returns *LogServiceEnableProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

