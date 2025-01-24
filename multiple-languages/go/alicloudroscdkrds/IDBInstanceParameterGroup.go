package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `DBInstanceParameterGroup`.
type IDBInstanceParameterGroup interface {
	alicloudroscdkcore.IResource
	Props() *DBInstanceParameterGroupProps
}

// The jsii proxy for IDBInstanceParameterGroup
type jsiiProxy_IDBInstanceParameterGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBInstanceParameterGroup) Props() *DBInstanceParameterGroupProps {
	var returns *DBInstanceParameterGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

