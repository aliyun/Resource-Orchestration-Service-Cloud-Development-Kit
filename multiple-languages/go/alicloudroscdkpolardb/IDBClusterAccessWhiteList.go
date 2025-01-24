package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `DBClusterAccessWhiteList`.
type IDBClusterAccessWhiteList interface {
	alicloudroscdkcore.IResource
	// Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
	AttrDbClusterId() interface{}
	Props() *DBClusterAccessWhiteListProps
}

// The jsii proxy for IDBClusterAccessWhiteList
type jsiiProxy_IDBClusterAccessWhiteList struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBClusterAccessWhiteList) AttrDbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBClusterAccessWhiteList) Props() *DBClusterAccessWhiteListProps {
	var returns *DBClusterAccessWhiteListProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

