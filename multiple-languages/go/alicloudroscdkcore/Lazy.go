package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Lazily produce a value.
//
// Can be used to return a string, list or numeric value whose actual value
// will only be calculated later, during synthesis.
type Lazy interface {
}

// The jsii proxy struct for Lazy
type jsiiProxy_Lazy struct {
	_ byte // padding
}

func Lazy_AnyValue(producer IAnyProducer, options *LazyAnyValueOptions) IResolvable {
	_init_.Initialize()

	if err := validateLazy_AnyValueParameters(producer, options); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Lazy",
		"anyValue",
		[]interface{}{producer, options},
		&returns,
	)

	return returns
}

func Lazy_ListValue(producer IListProducer, options *LazyListValueOptions) *[]*string {
	_init_.Initialize()

	if err := validateLazy_ListValueParameters(producer, options); err != nil {
		panic(err)
	}
	var returns *[]*string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Lazy",
		"listValue",
		[]interface{}{producer, options},
		&returns,
	)

	return returns
}

func Lazy_NumberValue(producer INumberProducer) *float64 {
	_init_.Initialize()

	if err := validateLazy_NumberValueParameters(producer); err != nil {
		panic(err)
	}
	var returns *float64

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Lazy",
		"numberValue",
		[]interface{}{producer},
		&returns,
	)

	return returns
}

func Lazy_StringValue(producer IStringProducer, options *LazyStringValueOptions) *string {
	_init_.Initialize()

	if err := validateLazy_StringValueParameters(producer, options); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Lazy",
		"stringValue",
		[]interface{}{producer, options},
		&returns,
	)

	return returns
}

