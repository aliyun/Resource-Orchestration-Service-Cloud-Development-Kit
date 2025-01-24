package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `DomainRecord`.
type IDomainRecord interface {
	alicloudroscdkcore.IResource
	// Attribute RecordId: Parse the ID of the record.
	AttrRecordId() interface{}
	Props() *DomainRecordProps
}

// The jsii proxy for IDomainRecord
type jsiiProxy_IDomainRecord struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainRecord) AttrRecordId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainRecord) Props() *DomainRecordProps {
	var returns *DomainRecordProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

