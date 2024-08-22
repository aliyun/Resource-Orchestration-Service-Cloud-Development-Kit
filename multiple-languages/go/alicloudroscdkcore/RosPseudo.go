package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Accessor for pseudo parameters.
type RosPseudo interface {
}

// The jsii proxy struct for RosPseudo
type jsiiProxy_RosPseudo struct {
	_ byte // padding
}

func RosPseudo_AccountId() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosPseudo",
		"accountId",
		&returns,
	)
	return returns
}

func RosPseudo_Index() *float64 {
	_init_.Initialize()
	var returns *float64
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosPseudo",
		"index",
		&returns,
	)
	return returns
}

func RosPseudo_NoValue() IResolvable {
	_init_.Initialize()
	var returns IResolvable
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosPseudo",
		"noValue",
		&returns,
	)
	return returns
}

func RosPseudo_Region() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosPseudo",
		"region",
		&returns,
	)
	return returns
}

func RosPseudo_StackId() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosPseudo",
		"stackId",
		&returns,
	)
	return returns
}

func RosPseudo_StackName() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosPseudo",
		"stackName",
		&returns,
	)
	return returns
}

func RosPseudo_TenantId() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosPseudo",
		"tenantId",
		&returns,
	)
	return returns
}

