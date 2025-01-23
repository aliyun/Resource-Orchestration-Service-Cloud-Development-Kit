package alicloudroscdkehpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/internal"
)

// Represents a `Cluster`.
type ICluster interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: Cluster Id.
	AttrClusterId() interface{}
	// Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
	//
	// You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
	AttrEcsInfo() interface{}
	// Attribute Name: Cluster name.
	AttrName() interface{}
	// Attribute SecurityGroupId: Security group ID.
	AttrSecurityGroupId() interface{}
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

func (j *jsiiProxy_ICluster) AttrEcsInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEcsInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
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

func (j *jsiiProxy_ICluster) Props() *ClusterProps {
	var returns *ClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

