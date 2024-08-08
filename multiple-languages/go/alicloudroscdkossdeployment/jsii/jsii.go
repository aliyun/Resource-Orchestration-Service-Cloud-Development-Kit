// Package jsii contains the functionaility needed for jsii packages to
// initialize their dependencies and themselves. Users should never need to use this package
// directly. If you find you need to - please report a bug at
// https://github.com/aws/jsii/issues/new/choose
package jsii

import (
	alicloudroscdkcore      "alicloudroscdkcore/jsii"
	alicloudroscdkfc        "alicloudroscdkfc/jsii"
	alicloudroscdkoss       "alicloudroscdkoss/jsii"
	alicloudroscdkossassets "alicloudroscdkossassets/jsii"
	alicloudroscdkram       "alicloudroscdkram/jsii"
	alicloudroscdkros       "alicloudroscdkros/jsii"
	alicloudroscdksls       "alicloudroscdksls/jsii"
	_                       "embed"

	_jsii_                  "github.com/aws/jsii-runtime-go/runtime"

	constructs              "github.com/aws/constructs-go/constructs/v3/jsii"
)

//go:embed alicloud-ros-cdk-ossdeployment-1.1.0.tgz
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
	_jsii_.Load("@alicloud/ros-cdk-ossdeployment", "1.1.0", tarball)
}
