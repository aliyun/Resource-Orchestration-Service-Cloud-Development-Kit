package alicloudroscdkcxapi

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Placeholders which can be used manifests.
//
// These can occur both in the Asset Manifest as well as the general
// Cloud Assembly manifest.
type EnvironmentPlaceholders interface {
}

// The jsii proxy struct for EnvironmentPlaceholders
type jsiiProxy_EnvironmentPlaceholders struct {
	_ byte // padding
}

func NewEnvironmentPlaceholders() EnvironmentPlaceholders {
	_init_.Initialize()

	j := jsiiProxy_EnvironmentPlaceholders{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders",
		nil, // no parameters
		&j,
	)

	return &j
}

func NewEnvironmentPlaceholders_Override(e EnvironmentPlaceholders) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders",
		nil, // no parameters
		e,
	)
}

// Replace the environment placeholders in all strings found in a complex object.
func EnvironmentPlaceholders_Replace(object interface{}, values *EnvironmentPlaceholderValues) interface{} {
	_init_.Initialize()

	if err := validateEnvironmentPlaceholders_ReplaceParameters(object, values); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders",
		"replace",
		[]interface{}{object, values},
		&returns,
	)

	return returns
}

// Like 'replace', but asynchronous.
func EnvironmentPlaceholders_ReplaceAsync(object interface{}, provider IEnvironmentPlaceholderProvider) interface{} {
	_init_.Initialize()

	if err := validateEnvironmentPlaceholders_ReplaceAsyncParameters(object, provider); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders",
		"replaceAsync",
		[]interface{}{object, provider},
		&returns,
	)

	return returns
}

func EnvironmentPlaceholders_CURRENT_ACCOUNT() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders",
		"CURRENT_ACCOUNT",
		&returns,
	)
	return returns
}

func EnvironmentPlaceholders_CURRENT_REGION() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders",
		"CURRENT_REGION",
		&returns,
	)
	return returns
}

