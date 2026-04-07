package alicloudroscdksae

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/internal"
)

// Represents a `NlbBinding`.
type INlbBinding interface {
	alicloudroscdkcore.IResource
	// Attribute NlbId: The ID of the Network Load Balancer (NLB).
	AttrNlbId() interface{}
	Props() *NlbBindingProps
}

// The jsii proxy for INlbBinding
type jsiiProxy_INlbBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INlbBinding) AttrNlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INlbBinding) Props() *NlbBindingProps {
	var returns *NlbBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

