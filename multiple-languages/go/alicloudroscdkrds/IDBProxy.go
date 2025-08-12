package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `DBProxy`.
type IDBProxy interface {
	alicloudroscdkcore.IResource
	Props() *DBProxyProps
}

// The jsii proxy for IDBProxy
type jsiiProxy_IDBProxy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBProxy) Props() *DBProxyProps {
	var returns *DBProxyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

