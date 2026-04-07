package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `AccessStrategy`.
type IAccessStrategy interface {
	alicloudroscdkcore.IResource
	// Attribute StrategyId: The ID of the access strategy.
	AttrStrategyId() interface{}
	Props() *AccessStrategyProps
}

// The jsii proxy for IAccessStrategy
type jsiiProxy_IAccessStrategy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessStrategy) AttrStrategyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStrategyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessStrategy) Props() *AccessStrategyProps {
	var returns *AccessStrategyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

