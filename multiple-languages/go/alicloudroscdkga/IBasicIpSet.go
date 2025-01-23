package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `BasicIpSet`.
type IBasicIpSet interface {
	alicloudroscdkcore.IResource
	// Attribute IpSetId: The ID of the acceleration region.
	AttrIpSetId() interface{}
	Props() *BasicIpSetProps
}

// The jsii proxy for IBasicIpSet
type jsiiProxy_IBasicIpSet struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBasicIpSet) AttrIpSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBasicIpSet) Props() *BasicIpSetProps {
	var returns *BasicIpSetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

