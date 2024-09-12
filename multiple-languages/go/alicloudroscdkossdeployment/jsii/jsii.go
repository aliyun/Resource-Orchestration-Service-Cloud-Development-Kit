// Package jsii contains the functionaility needed for jsii packages to
// initialize their dependencies and themselves. Users should never need to use this package
// directly. If you find you need to - please report a bug at
// https://github.com/aws/jsii/issues/new/choose
package jsii

import (
	_                       "embed"

	_jsii_                  "github.com/aws/jsii-runtime-go/runtime"

	alicloudroscdkcore      "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	alicloudroscdkfc        "github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/jsii"
	alicloudroscdkoss       "github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/jsii"
	alicloudroscdkossassets "github.com/alibabacloud-go/ros-cdk/alicloudroscdkossassets/jsii"
	alicloudroscdkram       "github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/jsii"
	alicloudroscdkros       "github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/jsii"
	alicloudroscdksls       "github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/jsii"
	constructs              "github.com/aws/constructs-go/constructs/v3/jsii"
)

//go:embed alicloud-ros-cdk-ossdeployment-1.2.0.tgz
var tarball []byte

// Initialize loads the necessary packages in the @jsii/kernel to support the enclosing module.
// The implementation is idempotent (and hence safe to be called over and over).
func Initialize() {
	// Ensure all dependencies are initialized
	alicloudroscdkcore.Initialize()
	alicloudroscdkfc.Initialize()
	alicloudroscdkoss.Initialize()
	alicloudroscdkossassets.Initialize()
	alicloudroscdkram.Initialize()
	alicloudroscdkros.Initialize()
	alicloudroscdksls.Initialize()
	constructs.Initialize()

	// Load this library into the kernel
	_jsii_.Load("@alicloud/ros-cdk-ossdeployment", "1.2.0", tarball)
}
