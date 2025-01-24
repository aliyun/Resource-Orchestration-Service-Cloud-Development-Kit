package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `RouteEntries`.
type IRouteEntries interface {
	alicloudroscdkcore.IResource
	// Attribute RouteEntries: The list of The route entries.
	AttrRouteEntries() interface{}
	// Attribute RouteEntryIds: the list of the route entry ids.
	AttrRouteEntryIds() interface{}
	Props() *RouteEntriesProps
}

// The jsii proxy for IRouteEntries
type jsiiProxy_IRouteEntries struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouteEntries) AttrRouteEntries() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteEntries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteEntries) AttrRouteEntryIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteEntryIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteEntries) Props() *RouteEntriesProps {
	var returns *RouteEntriesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

