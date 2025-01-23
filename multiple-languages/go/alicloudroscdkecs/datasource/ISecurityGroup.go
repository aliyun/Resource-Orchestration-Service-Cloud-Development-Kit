package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `SecurityGroup`.
type ISecurityGroup interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The create time.
	AttrCreateTime() interface{}
	// Attribute Description: The description.
	AttrDescription() interface{}
	// Attribute InnerAccessPolicy: Network connectivity policy within the security group.
	AttrInnerAccessPolicy() interface{}
	// Attribute Permissions: A collection of Security Group permission rules.
	AttrPermissions() interface{}
	// Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
	AttrResourceGroupId() interface{}
	// Attribute SecurityGroupId: Security group ID.
	AttrSecurityGroupId() interface{}
	// Attribute SecurityGroupName: The security group name.
	AttrSecurityGroupName() interface{}
	// Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
	AttrSecurityGroupReferences() interface{}
	// Attribute SecurityGroupType: Security group type.
	AttrSecurityGroupType() interface{}
	// Attribute ServiceId: The virtual quotient ID corresponding to the security group.
	AttrServiceId() interface{}
	// Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
	AttrServiceManaged() interface{}
	// Attribute Tags: The tags.
	AttrTags() interface{}
	// Attribute VpcId: Secure the group's proprietary network.
	AttrVpcId() interface{}
	Props() *SecurityGroupProps
}

// The jsii proxy for ISecurityGroup
type jsiiProxy_ISecurityGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroup) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrInnerAccessPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerAccessPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrPermissions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPermissions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrSecurityGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrSecurityGroupReferences() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupReferences",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrSecurityGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrServiceManaged() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceManaged",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) Props() *SecurityGroupProps {
	var returns *SecurityGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

