package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `SecurityPreference`.
type ISecurityPreference interface {
	alicloudroscdkcore.IResource
	// Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
	AttrAllowUserToChangePassword() interface{}
	// Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
	AttrAllowUserToManageAccessKeys() interface{}
	// Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
	AttrAllowUserToManageMfaDevices() interface{}
	// Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
	AttrAllowUserToManagePublicKeys() interface{}
	// Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
	AttrEnableSaveMfaTicket() interface{}
	// Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
	AttrLoginNetworkMasks() interface{}
	// Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
	AttrLoginSessionDuration() interface{}
	Props() *SecurityPreferenceProps
}

// The jsii proxy for ISecurityPreference
type jsiiProxy_ISecurityPreference struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityPreference) AttrAllowUserToChangePassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllowUserToChangePassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityPreference) AttrAllowUserToManageAccessKeys() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllowUserToManageAccessKeys",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityPreference) AttrAllowUserToManageMfaDevices() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllowUserToManageMfaDevices",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityPreference) AttrAllowUserToManagePublicKeys() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllowUserToManagePublicKeys",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityPreference) AttrEnableSaveMfaTicket() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableSaveMfaTicket",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityPreference) AttrLoginNetworkMasks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoginNetworkMasks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityPreference) AttrLoginSessionDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoginSessionDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityPreference) Props() *SecurityPreferenceProps {
	var returns *SecurityPreferenceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

