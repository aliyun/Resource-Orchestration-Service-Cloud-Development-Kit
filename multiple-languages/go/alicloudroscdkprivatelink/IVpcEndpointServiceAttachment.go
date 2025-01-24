package alicloudroscdkprivatelink

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkprivatelink/internal"
)

// Represents a `VpcEndpointServiceAttachment`.
type IVpcEndpointServiceAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute ResourceId: The resource id.
	AttrResourceId() interface{}
	// Attribute ResourceType: The resource type.
	AttrResourceType() interface{}
	// Attribute ServiceId: The endpoint service that is associated with the endpoint.
	AttrServiceId() interface{}
	Props() *VpcEndpointServiceAttachmentProps
}

// The jsii proxy for IVpcEndpointServiceAttachment
type jsiiProxy_IVpcEndpointServiceAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcEndpointServiceAttachment) AttrResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointServiceAttachment) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointServiceAttachment) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointServiceAttachment) Props() *VpcEndpointServiceAttachmentProps {
	var returns *VpcEndpointServiceAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

