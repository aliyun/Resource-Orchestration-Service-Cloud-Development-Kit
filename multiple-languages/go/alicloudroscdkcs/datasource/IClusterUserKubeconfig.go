package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/datasource/internal"
)

// Represents a `ClusterUserKubeconfig`.
type IClusterUserKubeconfig interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the ACK cluster.
	AttrClusterId() interface{}
	// Attribute Config: The content of the kubeconfig file.
	AttrConfig() interface{}
	// Attribute Expiration: The expiration time of the kubeconfig file.
	//
	// The value is the UTC time displayed in RFC3339 format.
	AttrExpiration() interface{}
	Props() *ClusterUserKubeconfigProps
}

// The jsii proxy for IClusterUserKubeconfig
type jsiiProxy_IClusterUserKubeconfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterUserKubeconfig) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterUserKubeconfig) AttrConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterUserKubeconfig) AttrExpiration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterUserKubeconfig) Props() *ClusterUserKubeconfigProps {
	var returns *ClusterUserKubeconfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

