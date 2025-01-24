package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `AccessControl`.
type IAccessControl interface {
	alicloudroscdkcore.IResource
	// Attribute AclEntries: The IP entries that you want to remove from the network ACL.
	AttrAclEntries() interface{}
	// Attribute AclId: The ID of the ACL.
	AttrAclId() interface{}
	// Attribute AclName: The ACL name.
	AttrAclName() interface{}
	// Attribute AddressIpVersion: The IP version.
	//
	// Valid values: ipv4 and ipv6.
	AttrAddressIpVersion() interface{}
	// Attribute RelatedListeners: The listeners that are associated with the network ACL.
	AttrRelatedListeners() interface{}
	// Attribute ResourceGroupId: The resource group ID.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tags of the resource.
	AttrTags() interface{}
	Props() *AccessControlProps
}

// The jsii proxy for IAccessControl
type jsiiProxy_IAccessControl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessControl) AttrAclEntries() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclEntries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) AttrAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) AttrAclName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) AttrAddressIpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressIpVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) AttrRelatedListeners() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRelatedListeners",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) Props() *AccessControlProps {
	var returns *AccessControlProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

