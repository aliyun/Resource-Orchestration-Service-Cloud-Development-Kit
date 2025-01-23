package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `AutoProvisioningGroup`.
type IAutoProvisioningGroup interface {
	alicloudroscdkcore.IResource
	// Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.
	AttrAutoProvisioningGroupId() interface{}
	// Attribute AutoProvisioningGroupName: The name of the auto provisioning group.
	AttrAutoProvisioningGroupName() interface{}
	Props() *AutoProvisioningGroupProps
}

// The jsii proxy for IAutoProvisioningGroup
type jsiiProxy_IAutoProvisioningGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAutoProvisioningGroup) AttrAutoProvisioningGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoProvisioningGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoProvisioningGroup) AttrAutoProvisioningGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoProvisioningGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoProvisioningGroup) Props() *AutoProvisioningGroupProps {
	var returns *AutoProvisioningGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

