package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `SmartAccessGatewayBinding`.
type ISmartAccessGatewayBinding interface {
	alicloudroscdkcore.IResource
	// Attribute SmartAGId: The ID of the Smart Access Gateway instance.
	AttrSmartAgId() interface{}
	Props() *SmartAccessGatewayBindingProps
}

// The jsii proxy for ISmartAccessGatewayBinding
type jsiiProxy_ISmartAccessGatewayBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISmartAccessGatewayBinding) AttrSmartAgId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSmartAgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISmartAccessGatewayBinding) Props() *SmartAccessGatewayBindingProps {
	var returns *SmartAccessGatewayBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

