package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `GrantCcnToCen`.
type IGrantCcnToCen interface {
	alicloudroscdkcore.IResource
	// Attribute CcnInstanceId: The ID of the CCN instance.
	AttrCcnInstanceId() interface{}
	// Attribute CenInstanceId: The ID of the CEN instance.
	AttrCenInstanceId() interface{}
	Props() *GrantCcnToCenProps
}

// The jsii proxy for IGrantCcnToCen
type jsiiProxy_IGrantCcnToCen struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGrantCcnToCen) AttrCcnInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCcnInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrantCcnToCen) AttrCenInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrantCcnToCen) Props() *GrantCcnToCenProps {
	var returns *GrantCcnToCenProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

