package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AccessControl`.
type IAccessControl interface {
	alicloudroscdkcore.IResource
	// Attribute AccessControlListName: The name of the ACL.
	AttrAccessControlListName() interface{}
	// Attribute AclEntrys: Information list of access control policies.
	AttrAclEntrys() interface{}
	// Attribute AclId: The ID of the access control list (ACL).
	AttrAclId() interface{}
	// Attribute AddressIpVersion: The IP version.
	//
	// Valid values: ipv4 and ipv6.
	AttrAddressIpVersion() interface{}
	Props() *AccessControlProps
}

// The jsii proxy for IAccessControl
type jsiiProxy_IAccessControl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessControl) AttrAccessControlListName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessControlListName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) AttrAclEntrys() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclEntrys",
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

func (j *jsiiProxy_IAccessControl) AttrAddressIpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressIpVersion",
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

