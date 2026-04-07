package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `InterRegionTrafficQosPolicy`.
type IInterRegionTrafficQosPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute BandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.
	AttrBandwidthGuaranteeMode() interface{}
	// Attribute InterRegionTrafficQosPolicyDescription: The description of the QoS policy.
	AttrInterRegionTrafficQosPolicyDescription() interface{}
	// Attribute InterRegionTrafficQosPolicyId: The ID of the QoS policy.
	AttrInterRegionTrafficQosPolicyId() interface{}
	// Attribute InterRegionTrafficQosPolicyName: The name of the QoS policy.
	AttrInterRegionTrafficQosPolicyName() interface{}
	// Attribute TransitRouterAttachmentId: The ID of the inter-region connection.
	AttrTransitRouterAttachmentId() interface{}
	// Attribute TransitRouterId: The ID of the transit router.
	AttrTransitRouterId() interface{}
	Props() *InterRegionTrafficQosPolicyProps
}

// The jsii proxy for IInterRegionTrafficQosPolicy
type jsiiProxy_IInterRegionTrafficQosPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInterRegionTrafficQosPolicy) AttrBandwidthGuaranteeMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthGuaranteeMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosPolicy) AttrInterRegionTrafficQosPolicyDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterRegionTrafficQosPolicyDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosPolicy) AttrInterRegionTrafficQosPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterRegionTrafficQosPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosPolicy) AttrInterRegionTrafficQosPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterRegionTrafficQosPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosPolicy) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosPolicy) AttrTransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosPolicy) Props() *InterRegionTrafficQosPolicyProps {
	var returns *InterRegionTrafficQosPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

