package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `DBClusterEndpointAddress`.
type IDBClusterEndpointAddress interface {
	alicloudroscdkcore.IResource
	// Attribute Address: The details of the endpoint address.
	AttrAddress() interface{}
	// Attribute ConnectionString: The connection string of the endpoint address.
	AttrConnectionString() interface{}
	Props() *DBClusterEndpointAddressProps
}

// The jsii proxy for IDBClusterEndpointAddress
type jsiiProxy_IDBClusterEndpointAddress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBClusterEndpointAddress) AttrAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBClusterEndpointAddress) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBClusterEndpointAddress) Props() *DBClusterEndpointAddressProps {
	var returns *DBClusterEndpointAddressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

