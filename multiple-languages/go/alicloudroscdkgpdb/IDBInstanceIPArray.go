package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `DBInstanceIPArray`.
type IDBInstanceIPArray interface {
	alicloudroscdkcore.IResource
	// Attribute DBInstanceIPArrayAttribute: The default is empty.
	//
	// To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
	AttrDbInstanceIpArrayAttribute() interface{}
	// Attribute DBInstanceIPArrayName: The name of the IP address whitelist.
	//
	// If you do not specify this parameter, the default whitelist is queried.
	AttrDbInstanceIpArrayName() interface{}
	// Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.
	AttrSecurityIpList() interface{}
	Props() *DBInstanceIPArrayProps
}

// The jsii proxy for IDBInstanceIPArray
type jsiiProxy_IDBInstanceIPArray struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBInstanceIPArray) AttrDbInstanceIpArrayAttribute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceIpArrayAttribute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceIPArray) AttrDbInstanceIpArrayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceIpArrayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceIPArray) AttrSecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceIPArray) Props() *DBInstanceIPArrayProps {
	var returns *DBInstanceIPArrayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

