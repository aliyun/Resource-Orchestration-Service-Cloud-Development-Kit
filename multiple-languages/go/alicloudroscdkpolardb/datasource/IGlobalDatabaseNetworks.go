package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/datasource/internal"
)

// Represents a `GlobalDatabaseNetworks`.
type IGlobalDatabaseNetworks interface {
	alicloudroscdkcore.IResource
	// Attribute GdnIds: The list of gdn IDs.
	AttrGdnIds() interface{}
	// Attribute GlobalDatabaseNetworks: The list of global database networks.
	AttrGlobalDatabaseNetworks() interface{}
	Props() *GlobalDatabaseNetworksProps
}

// The jsii proxy for IGlobalDatabaseNetworks
type jsiiProxy_IGlobalDatabaseNetworks struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGlobalDatabaseNetworks) AttrGdnIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGdnIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetworks) AttrGlobalDatabaseNetworks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGlobalDatabaseNetworks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalDatabaseNetworks) Props() *GlobalDatabaseNetworksProps {
	var returns *GlobalDatabaseNetworksProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

