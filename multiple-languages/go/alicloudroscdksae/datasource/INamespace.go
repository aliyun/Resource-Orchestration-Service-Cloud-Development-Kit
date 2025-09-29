package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/datasource/internal"
)

// Represents a `Namespace`.
type INamespace interface {
	alicloudroscdkcore.IResource
	// Attribute AppCount: The number of applications.
	AttrAppCount() interface{}
	// Attribute BelongRegion: The region to which the namespace belongs.
	AttrBelongRegion() interface{}
	// Attribute Description: The description of the namespace.
	AttrDescription() interface{}
	// Attribute JumpServerAppId: The ID of the jump server application.
	AttrJumpServerAppId() interface{}
	// Attribute JumpServerIp: The IP address of the jump server.
	AttrJumpServerIp() interface{}
	// Attribute LastChangeOrderId: The ID of the change order.
	AttrLastChangeOrderId() interface{}
	// Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.
	AttrLastChangeOrderRunning() interface{}
	// Attribute LastChangeOrderStatus: The status of the latest change order.
	AttrLastChangeOrderStatus() interface{}
	// Attribute NamespaceId: The ID of the namespace.
	AttrNamespaceId() interface{}
	// Attribute NamespaceName: The name of the namespace.
	AttrNamespaceName() interface{}
	// Attribute NameSpaceShortId: The ID of the short namespace.
	AttrNameSpaceShortId() interface{}
	// Attribute NotificationExpired: Indicates whether the notification of a change order is expired.
	AttrNotificationExpired() interface{}
	// Attribute SecurityGroupId: The ID of the security group.
	AttrSecurityGroupId() interface{}
	// Attribute TenantId: The ID of the tenant in the SAE namespace.
	AttrTenantId() interface{}
	// Attribute UserId: The ID of the user.
	AttrUserId() interface{}
	// Attribute VpcId: The ID of the virtual private cloud (VPC).
	AttrVpcId() interface{}
	// Attribute VpcName: The name of the VPC.
	AttrVpcName() interface{}
	// Attribute VSwitchId: The ID of the vSwitch.
	AttrVSwitchId() interface{}
	// Attribute VSwitchName: The name of the vSwitch.
	AttrVSwitchName() interface{}
	Props() *NamespaceProps
}

// The jsii proxy for INamespace
type jsiiProxy_INamespace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INamespace) AttrAppCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrBelongRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBelongRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrJumpServerAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJumpServerAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrJumpServerIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJumpServerIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrLastChangeOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastChangeOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrLastChangeOrderRunning() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastChangeOrderRunning",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrLastChangeOrderStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastChangeOrderStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrNamespaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrNamespaceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrNameSpaceShortId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNameSpaceShortId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrNotificationExpired() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotificationExpired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrTenantId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTenantId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrVpcName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrVSwitchName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) Props() *NamespaceProps {
	var returns *NamespaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

