package alicloudroscdkecd

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
)

// Represents a `NetworkPackageAssociation`.
type INetworkPackageAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkPackageId: The ID of the Internet access package.
	AttrNetworkPackageId() interface{}
	// Attribute OfficeSiteId: The ID of the workspace.
	AttrOfficeSiteId() interface{}
	Props() *NetworkPackageAssociationProps
}

// The jsii proxy for INetworkPackageAssociation
type jsiiProxy_INetworkPackageAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkPackageAssociation) AttrNetworkPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkPackageAssociation) AttrOfficeSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOfficeSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkPackageAssociation) Props() *NetworkPackageAssociationProps {
	var returns *NetworkPackageAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

