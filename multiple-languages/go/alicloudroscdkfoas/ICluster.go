package alicloudroscdkfoas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfoas/internal"
)

// Represents a `Cluster`.
type ICluster interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: Cluster ID.
	AttrClusterId() interface{}
	// Attribute EngineVersions: Engine Versions.
	AttrEngineVersions() interface{}
	// Attribute MasterInstanceInfos: Master instance infos.
	AttrMasterInstanceInfos() interface{}
	// Attribute OrderId: Order ID.
	AttrOrderId() interface{}
	// Attribute SecurityGroupId: Security group Id.
	AttrSecurityGroupId() interface{}
	// Attribute SlaveInstanceInfos: Slave instance infos.
	AttrSlaveInstanceInfos() interface{}
	// Attribute State: Cluster status.
	AttrState() interface{}
	// Attribute VSwitchIds: VSwitch Ids.
	AttrVSwitchIds() interface{}
	Props() *ClusterProps
}

// The jsii proxy for ICluster
type jsiiProxy_ICluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICluster) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrEngineVersions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrMasterInstanceInfos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterInstanceInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrSlaveInstanceInfos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlaveInstanceInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrVSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) Props() *ClusterProps {
	var returns *ClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

