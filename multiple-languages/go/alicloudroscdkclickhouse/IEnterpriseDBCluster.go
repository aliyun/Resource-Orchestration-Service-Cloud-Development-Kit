package alicloudroscdkclickhouse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnterpriseDBCluster`.
type IEnterpriseDBCluster interface {
	alicloudroscdkcore.IResource
	// Attribute DBInstanceId: The ID of the database instance.
	AttrDbInstanceId() interface{}
	// Attribute PrivateConnectionString: The private connection string.
	AttrPrivateConnectionString() interface{}
	// Attribute PublicConnectionString: The public connection string.
	AttrPublicConnectionString() interface{}
	Props() *EnterpriseDBClusterProps
}

// The jsii proxy for IEnterpriseDBCluster
type jsiiProxy_IEnterpriseDBCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrPrivateConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrPublicConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) Props() *EnterpriseDBClusterProps {
	var returns *EnterpriseDBClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

