package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `OriginPool`.
type IOriginPool interface {
	alicloudroscdkcore.IResource
	// Attribute Enabled: Whether the source address pool is enabled:.
	AttrEnabled() interface{}
	// Attribute OriginPoolId: OriginPool Id.
	AttrOriginPoolId() interface{}
	// Attribute OriginPoolName: The source address pool name.
	AttrOriginPoolName() interface{}
	// Attribute Origins: The Source station information added to the source address pool.
	//
	// Multiple Source stations use arrays to transfer values.
	AttrOrigins() interface{}
	// Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
	AttrRecordName() interface{}
	// Attribute ReferenceLBCount: How many load balancers are referenced.
	AttrReferenceLbCount() interface{}
	// Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
	AttrReferences() interface{}
	// Attribute SiteId: The site ID.
	AttrSiteId() interface{}
	Props() *OriginPoolProps
}

// The jsii proxy for IOriginPool
type jsiiProxy_IOriginPool struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOriginPool) AttrEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginPool) AttrOriginPoolId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginPoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginPool) AttrOriginPoolName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginPoolName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginPool) AttrOrigins() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrigins",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginPool) AttrRecordName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginPool) AttrReferenceLbCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReferenceLbCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginPool) AttrReferences() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReferences",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginPool) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginPool) Props() *OriginPoolProps {
	var returns *OriginPoolProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

