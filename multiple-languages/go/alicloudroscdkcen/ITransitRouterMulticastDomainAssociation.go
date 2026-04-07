package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterMulticastDomainAssociation`.
type ITransitRouterMulticastDomainAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute TransitRouterAttachmentId: The ID of the VPC connection.
	AttrTransitRouterAttachmentId() interface{}
	// Attribute TransitRouterMulticastDomainId: The ID of the multicast domain.
	AttrTransitRouterMulticastDomainId() interface{}
	// Attribute VSwitchId: The ID of the VSwitch.
	AttrVSwitchId() interface{}
	Props() *TransitRouterMulticastDomainAssociationProps
}

// The jsii proxy for ITransitRouterMulticastDomainAssociation
type jsiiProxy_ITransitRouterMulticastDomainAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterMulticastDomainAssociation) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterMulticastDomainAssociation) AttrTransitRouterMulticastDomainId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterMulticastDomainId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterMulticastDomainAssociation) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterMulticastDomainAssociation) Props() *TransitRouterMulticastDomainAssociationProps {
	var returns *TransitRouterMulticastDomainAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

