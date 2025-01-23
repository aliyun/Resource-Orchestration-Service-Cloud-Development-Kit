package alicloudroscdkclickhouse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SynDb`.
type ISynDb interface {
	alicloudroscdkcore.IResource
	// Attribute DbClusterId: The id of clickhouse.
	AttrDbClusterId() interface{}
	// Attribute RdsId: The id of RDS.
	AttrRdsId() interface{}
	// Attribute SynDbs: Sync Dbs.
	AttrSynDbs() interface{}
	Props() *SynDbProps
}

// The jsii proxy for ISynDb
type jsiiProxy_ISynDb struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISynDb) AttrDbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynDb) AttrRdsId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRdsId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynDb) AttrSynDbs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSynDbs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynDb) Props() *SynDbProps {
	var returns *SynDbProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

