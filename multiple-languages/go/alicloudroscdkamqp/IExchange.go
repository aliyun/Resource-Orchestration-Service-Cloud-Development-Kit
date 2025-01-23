package alicloudroscdkamqp

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkamqp/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Exchange`.
type IExchange interface {
	alicloudroscdkcore.IResource
	// Attribute ExchangeName: The name of the exchange.
	AttrExchangeName() interface{}
	Props() *ExchangeProps
}

// The jsii proxy for IExchange
type jsiiProxy_IExchange struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IExchange) AttrExchangeName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExchangeName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExchange) Props() *ExchangeProps {
	var returns *ExchangeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

