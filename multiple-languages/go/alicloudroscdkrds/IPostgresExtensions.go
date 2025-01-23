package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `PostgresExtensions`.
type IPostgresExtensions interface {
	alicloudroscdkcore.IResource
	// Attribute InstalledExtensionNames: Extension names installed via ROS.
	AttrInstalledExtensionNames() interface{}
	Props() *PostgresExtensionsProps
}

// The jsii proxy for IPostgresExtensions
type jsiiProxy_IPostgresExtensions struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPostgresExtensions) AttrInstalledExtensionNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstalledExtensionNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPostgresExtensions) Props() *PostgresExtensionsProps {
	var returns *PostgresExtensionsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

