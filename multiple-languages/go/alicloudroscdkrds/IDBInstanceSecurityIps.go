package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `DBInstanceSecurityIps`.
type IDBInstanceSecurityIps interface {
	alicloudroscdkcore.IResource
	// Attribute SecurityIps: The security ips of selected database instance.
	AttrSecurityIps() interface{}
	Props() *DBInstanceSecurityIpsProps
}

// The jsii proxy for IDBInstanceSecurityIps
type jsiiProxy_IDBInstanceSecurityIps struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBInstanceSecurityIps) AttrSecurityIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceSecurityIps) Props() *DBInstanceSecurityIpsProps {
	var returns *DBInstanceSecurityIpsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

