// Package jsii contains the functionaility needed for jsii packages to
// initialize their dependencies and themselves. Users should never need to use this package
// directly. If you find you need to - please report a bug at
// https://github.com/aws/jsii/issues/new/choose
package jsii

import (
	_                  "embed"

	_jsii_             "github.com/aws/jsii-runtime-go/runtime"

	alicloudroscdkcore "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	constructs         "github.com/aws/constructs-go/constructs/v3/jsii"
)

//go:embed alicloud-ros-cdk-aligreen-1.5.0.tgz
var tarball []byte

// Initialize loads the necessary packages in the @jsii/kernel to support the enclosing module.
// The implementation is idempotent (and hence safe to be called over and over).
func Initialize() {
	// Ensure all dependencies are initialized
	alicloudroscdkcore.Initialize()
	constructs.Initialize()

	// Load this library into the kernel
	_jsii_.Load("@alicloud/ros-cdk-aligreen", "1.5.0", tarball)
}