package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `SiteDeliveryTask`.
type ISiteDeliveryTask interface {
	alicloudroscdkcore.IResource
	// Attribute BusinessType: Real-time log type.
	AttrBusinessType() interface{}
	// Attribute DataCenter: Data Center.
	AttrDataCenter() interface{}
	// Attribute DeliveryType: Delivery Type:.
	AttrDeliveryType() interface{}
	// Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
	AttrDiscardRate() interface{}
	// Attribute FieldName: The list of delivery fields to be modified, separated by commas.
	AttrFieldName() interface{}
	// Attribute FilterRules: The filtering rules.
	AttrFilterRules() interface{}
	// Attribute SinkConfig: The delivery configuration.
	AttrSinkConfig() interface{}
	// Attribute SiteId: The site ID.
	AttrSiteId() interface{}
	// Attribute SiteName: The website name.
	AttrSiteName() interface{}
	// Attribute TaskName: The task name.
	AttrTaskName() interface{}
	Props() *SiteDeliveryTaskProps
}

// The jsii proxy for ISiteDeliveryTask
type jsiiProxy_ISiteDeliveryTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrBusinessType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBusinessType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrDataCenter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataCenter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrDeliveryType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrDiscardRate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiscardRate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrFieldName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFieldName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrFilterRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFilterRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrSinkConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSinkConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrSiteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) AttrTaskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteDeliveryTask) Props() *SiteDeliveryTaskProps {
	var returns *SiteDeliveryTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

