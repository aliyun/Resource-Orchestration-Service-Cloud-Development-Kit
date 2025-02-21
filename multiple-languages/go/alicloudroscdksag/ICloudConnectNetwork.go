package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `CloudConnectNetwork`.
type ICloudConnectNetwork interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute CcnId: The ID of the CCN instance.
	AttrCcnId() interface{}
	Props() *CloudConnectNetworkProps
}

// The jsii proxy for ICloudConnectNetwork
type jsiiProxy_ICloudConnectNetwork struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICloudConnectNetwork) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICloudConnectNetwork) AttrCcnId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCcnId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICloudConnectNetwork) Props() *CloudConnectNetworkProps {
	var returns *CloudConnectNetworkProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

