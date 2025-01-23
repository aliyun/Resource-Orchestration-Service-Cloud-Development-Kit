package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/datasource/internal"
)

// Represents a `GlobalDatabaseNetwork`.
type IGlobalDatabaseNetwork interface {
	alicloudroscdkcore.IResource
	// Attribute Connections: The information about the connection to the cluster.
	AttrConnections() interface{}
	// Attribute CreateTime: The time at which the GDN was created.
	AttrCreateTime() interface{}
	// Attribute DbClusters: The clusters that are included in the GDN.
	AttrDbClusters() interface{}
	// Attribute DbType: The type of the database engine.
	//
	// Only MySQL is supported.
	AttrDbType() interface{}
	// Attribute DbVersion: The version of the database engine.
	//
	// Only version 8.0 is supported.
	AttrDbVersion() interface{}
	// Attribute GdnDescription: The description of the GDN.
	//
	// The description must meet the following requirements:
	// It cannot start with http:// or https://.
	// It must start with a letter.
	// It can contain letters, digits, underscores (_), and hyphens (-).
	// It must be 2 to 126 characters in length.
	AttrGdnDescription() interface{}
	// Attribute GdnId: The ID of the GDN.
	AttrGdnId() interface{}
	Props() *GlobalDatabaseNetworkProps
}

// The jsii proxy for IGlobalDatabaseNetwork
type jsiiProxy_IGlobalDatabaseNetwork struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGlobalDatabaseNetwork) AttrConnections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetwork) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetwork) AttrDbClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetwork) AttrDbType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetwork) AttrDbVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetwork) AttrGdnDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGdnDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetwork) AttrGdnId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGdnId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetwork) Props() *GlobalDatabaseNetworkProps {
	var returns *GlobalDatabaseNetworkProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

