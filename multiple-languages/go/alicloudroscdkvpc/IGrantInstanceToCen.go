package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `GrantInstanceToCen`.
type IGrantInstanceToCen interface {
	alicloudroscdkcore.IResource
	// Attribute CenId: The ID of the CEN instance to be authorized.
	AttrCenId() interface{}
	// Attribute InstanceId: The ID of the network instance.
	AttrInstanceId() interface{}
	Props() *GrantInstanceToCenProps
}

// The jsii proxy for IGrantInstanceToCen
type jsiiProxy_IGrantInstanceToCen struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGrantInstanceToCen) AttrCenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrantInstanceToCen) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrantInstanceToCen) Props() *GrantInstanceToCenProps {
	var returns *GrantInstanceToCenProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

