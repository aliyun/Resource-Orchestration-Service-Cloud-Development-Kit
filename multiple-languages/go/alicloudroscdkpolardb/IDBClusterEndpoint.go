package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `DBClusterEndpoint`.
type IDBClusterEndpoint interface {
	alicloudroscdkcore.IResource
	// Attribute Addresses: The address items of the db cluster endpoint.
	AttrAddresses() interface{}
	// Attribute ConnectionString: The first connection string of the db cluster endpoint.
	AttrConnectionString() interface{}
	// Attribute DBEndpointId: DB cluster endpoint ID.
	//
	// E.g. pe-xxxxxxxx.
	AttrDbEndpointId() interface{}
	Props() *DBClusterEndpointProps
}

// The jsii proxy for IDBClusterEndpoint
type jsiiProxy_IDBClusterEndpoint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBClusterEndpoint) AttrAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBClusterEndpoint) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBClusterEndpoint) AttrDbEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBClusterEndpoint) Props() *DBClusterEndpointProps {
	var returns *DBClusterEndpointProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

