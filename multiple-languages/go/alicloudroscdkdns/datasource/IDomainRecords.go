package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/datasource/internal"
)

// Represents a `DomainRecords`.
type IDomainRecords interface {
	alicloudroscdkcore.IResource
	// Attribute DomainRecordIds: The list of The DNS domain record ids.
	AttrDomainRecordIds() interface{}
	// Attribute DomainRecords: The information about DNS records.
	AttrDomainRecords() interface{}
	Props() *DomainRecordsProps
}

// The jsii proxy for IDomainRecords
type jsiiProxy_IDomainRecords struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainRecords) AttrDomainRecordIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainRecordIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainRecords) AttrDomainRecords() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainRecords",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainRecords) Props() *DomainRecordsProps {
	var returns *DomainRecordsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

