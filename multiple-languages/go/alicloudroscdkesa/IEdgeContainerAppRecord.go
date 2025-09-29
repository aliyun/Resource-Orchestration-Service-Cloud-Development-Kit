package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `EdgeContainerAppRecord`.
type IEdgeContainerAppRecord interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: The application ID.
	AttrAppId() interface{}
	// Attribute Cname: The CNAME of the associated domain name.
	AttrCname() interface{}
	// Attribute ConfigId: The configuration ID of the associated domain name.
	AttrConfigId() interface{}
	// Attribute CreateTime: The time when the domain name was added.
	//
	// The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
	AttrCreateTime() interface{}
	// Attribute RecordId: The record ID of the associated domain name.
	AttrRecordId() interface{}
	// Attribute RecordName: The associated domain name.
	AttrRecordName() interface{}
	// Attribute SchemdId: The scheduling domain ID of the associated domain name.
	AttrSchemdId() interface{}
	// Attribute SiteId: The website ID.
	AttrSiteId() interface{}
	// Attribute UpdateTime: The time when the scheduling domain ID or CNAME was last modified.
	//
	// The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
	AttrUpdateTime() interface{}
	Props() *EdgeContainerAppRecordProps
}

// The jsii proxy for IEdgeContainerAppRecord
type jsiiProxy_IEdgeContainerAppRecord struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrCname() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCname",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrRecordId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrRecordName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrSchemdId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSchemdId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerAppRecord) Props() *EdgeContainerAppRecordProps {
	var returns *EdgeContainerAppRecordProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

