package alicloudroscdkcxapi

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

type EnvironmentUtils interface {
}

// The jsii proxy struct for EnvironmentUtils
type jsiiProxy_EnvironmentUtils struct {
	_ byte // padding
}

func NewEnvironmentUtils() EnvironmentUtils {
	_init_.Initialize()

	j := jsiiProxy_EnvironmentUtils{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.EnvironmentUtils",
		nil, // no parameters
		&j,
	)

	return &j
}

func NewEnvironmentUtils_Override(e EnvironmentUtils) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.EnvironmentUtils",
		nil, // no parameters
		e,
	)
}

// Format an environment string from an account and region.
func EnvironmentUtils_Format(account *string, region *string) *string {
	_init_.Initialize()

	if err := validateEnvironmentUtils_FormatParameters(account, region); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.EnvironmentUtils",
		"format",
		[]interface{}{account, region},
		&returns,
	)

	return returns
}

// Build an environment object from an account and region.
func EnvironmentUtils_Make(account *string, region *string) *Environment {
	_init_.Initialize()

	if err := validateEnvironmentUtils_MakeParameters(account, region); err != nil {
		panic(err)
	}
	var returns *Environment

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.EnvironmentUtils",
		"make",
		[]interface{}{account, region},
		&returns,
	)

	return returns
}

func EnvironmentUtils_Parse(environment *string) *Environment {
	_init_.Initialize()

	if err := validateEnvironmentUtils_ParseParameters(environment); err != nil {
		panic(err)
	}
	var returns *Environment

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.EnvironmentUtils",
		"parse",
		[]interface{}{environment},
		&returns,
	)

	return returns
}

