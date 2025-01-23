package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `Gateway`.
type IGateway interface {
	alicloudroscdkcore.IResource
	// Attribute BackupVSwitchId: VSwitchId For Backup.
	AttrBackupVSwitchId() interface{}
	// Attribute GatewayUniqueId: Gateway unique identification.
	AttrGatewayUniqueId() interface{}
	// Attribute PaymentType: The payment type of the resource.
	AttrPaymentType() interface{}
	// Attribute Replica: Gateway Node Number.
	AttrReplica() interface{}
	// Attribute Spec: Gateway Node Specifications.
	AttrSpec() interface{}
	// Attribute VpcId: VpcId.
	AttrVpcId() interface{}
	// Attribute VSwitchId: VSwitchId.
	AttrVSwitchId() interface{}
	Props() *GatewayProps
}

// The jsii proxy for IGateway
type jsiiProxy_IGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGateway) AttrBackupVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrGatewayUniqueId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayUniqueId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrReplica() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplica",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateway) Props() *GatewayProps {
	var returns *GatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

