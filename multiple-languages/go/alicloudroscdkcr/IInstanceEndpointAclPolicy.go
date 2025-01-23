package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `InstanceEndpointAclPolicy`.
type IInstanceEndpointAclPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute Entry: The IP address range that is allowed to access the instance.
	AttrEntry() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	Props() *InstanceEndpointAclPolicyProps
}

// The jsii proxy for IInstanceEndpointAclPolicy
type jsiiProxy_IInstanceEndpointAclPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceEndpointAclPolicy) AttrEntry() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEntry",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceEndpointAclPolicy) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceEndpointAclPolicy) Props() *InstanceEndpointAclPolicyProps {
	var returns *InstanceEndpointAclPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

