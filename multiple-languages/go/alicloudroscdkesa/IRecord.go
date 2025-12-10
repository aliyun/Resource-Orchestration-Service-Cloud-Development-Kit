package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `Record`.
type IRecord interface {
	alicloudroscdkcore.IResource
	// Attribute AuthConf: The origin authentication information of the CNAME record.
	AttrAuthConf() interface{}
	// Attribute BizName: The business scenario of the record for acceleration.
	//
	// Leave the parameter empty if your record is not proxied.
	AttrBizName() interface{}
	// Attribute Comment: The comment of the record.
	//
	// The maximum length is 100 characters.
	AttrComment() interface{}
	// Attribute CreateTime: The time when the record was created.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrCreateTime() interface{}
	// Attribute Data: The DNS record information.
	//
	// The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
	AttrData() interface{}
	// Attribute HostPolicy: The origin host policy.
	//
	// This policy takes effect when the record type is CNAME.
	AttrHostPolicy() interface{}
	// Attribute ModifyTime: The time when the record was updated.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrModifyTime() interface{}
	// Attribute Proxied: Specifies whether to proxy the record.
	//
	// Only CNAME and A/AAAA records can be proxied.
	AttrProxied() interface{}
	// Attribute RecordCname: The CNAME.
	//
	// If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
	AttrRecordCname() interface{}
	// Attribute RecordId: Record Id.
	AttrRecordId() interface{}
	// Attribute RecordName: The record name.
	//
	// This parameter specifies a filter condition for the query.
	AttrRecordName() interface{}
	// Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
	AttrRecordType() interface{}
	// Attribute SiteId: The website ID.
	AttrSiteId() interface{}
	// Attribute SiteName: The website name.
	AttrSiteName() interface{}
	// Attribute SourceType: The origin type for the CNAME record.
	//
	// This parameter is required when you add a CNAME record.
	AttrSourceType() interface{}
	// Attribute Ttl: The TTL of the record.
	//
	// Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
	AttrTtl() interface{}
	Props() *RecordProps
}

// The jsii proxy for IRecord
type jsiiProxy_IRecord struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRecord) AttrAuthConf() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthConf",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrBizName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBizName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrComment() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrComment",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrHostPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrProxied() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProxied",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrRecordCname() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordCname",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrRecordId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrRecordName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrRecordType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrSiteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) AttrTtl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTtl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecord) Props() *RecordProps {
	var returns *RecordProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

