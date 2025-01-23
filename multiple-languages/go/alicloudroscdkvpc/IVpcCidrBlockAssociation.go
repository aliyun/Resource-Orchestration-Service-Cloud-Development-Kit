package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpcCidrBlockAssociation`.
type IVpcCidrBlockAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute VpcId: The ID of the VPC to which you want to add a secondary CIDR block.
	AttrVpcId() interface{}
	Props() *VpcCidrBlockAssociationProps
}

// The jsii proxy for IVpcCidrBlockAssociation
type jsiiProxy_IVpcCidrBlockAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcCidrBlockAssociation) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcCidrBlockAssociation) Props() *VpcCidrBlockAssociationProps {
	var returns *VpcCidrBlockAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

