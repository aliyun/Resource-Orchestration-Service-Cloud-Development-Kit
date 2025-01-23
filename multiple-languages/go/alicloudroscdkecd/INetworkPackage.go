package alicloudroscdkecd

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
)

// Represents a `NetworkPackage`.
type INetworkPackage interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkPackageId: The ID of the Internet access package.
	AttrNetworkPackageId() interface{}
	Props() *NetworkPackageProps
}

// The jsii proxy for INetworkPackage
type jsiiProxy_INetworkPackage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkPackage) AttrNetworkPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkPackage) Props() *NetworkPackageProps {
	var returns *NetworkPackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

