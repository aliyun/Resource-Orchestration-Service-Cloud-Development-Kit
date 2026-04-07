package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `RoutineRoute`.
type IRoutineRoute interface {
	alicloudroscdkcore.IResource
	// Attribute Bypass: Bypass mode.
	AttrBypass() interface{}
	// Attribute ConfigId: The configuration ID.
	AttrConfigId() interface{}
	// Attribute ConfigType: The configuration type.
	//
	// You can use this parameter to check the global configuration or rule configuration.
	AttrConfigType() interface{}
	// Attribute Fallback: An exception to the origin server switch will be enabled.
	//
	// If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
	AttrFallback() interface{}
	// Attribute Mode: Configuration mode.
	AttrMode() interface{}
	// Attribute RouteEnable: Routing switch.
	AttrRouteEnable() interface{}
	// Attribute RouteName: The route name.
	AttrRouteName() interface{}
	// Attribute RoutineName: The edge function Routine name.
	AttrRoutineName() interface{}
	// Attribute Rule: The content of the rule.
	AttrRule() interface{}
	// Attribute Sequence: Rule execution order.
	AttrSequence() interface{}
	// Attribute SiteVersion: Version number of the site.
	AttrSiteVersion() interface{}
	Props() *RoutineRouteProps
}

// The jsii proxy for IRoutineRoute
type jsiiProxy_IRoutineRoute struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRoutineRoute) AttrBypass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBypass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrFallback() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFallback",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrRouteEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrRouteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrRoutineName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoutineName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutineRoute) Props() *RoutineRouteProps {
	var returns *RoutineRouteProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

