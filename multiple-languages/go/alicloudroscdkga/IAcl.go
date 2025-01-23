package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `Acl`.
type IAcl interface {
	alicloudroscdkcore.IResource
	// Attribute AclEntries: The entries of the ACL.
	AttrAclEntries() interface{}
	// Attribute AclId: The  ID of the ACL.
	AttrAclId() interface{}
	// Attribute AclName: The name of the ACL.
	AttrAclName() interface{}
	// Attribute AddressIPVersion: The IP version of the ACL.
	AttrAddressIpVersion() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tags of the resource.
	AttrTags() interface{}
	Props() *AclProps
}

// The jsii proxy for IAcl
type jsiiProxy_IAcl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAcl) AttrAclEntries() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclEntries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrAclName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrAddressIpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressIpVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) Props() *AclProps {
	var returns *AclProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

