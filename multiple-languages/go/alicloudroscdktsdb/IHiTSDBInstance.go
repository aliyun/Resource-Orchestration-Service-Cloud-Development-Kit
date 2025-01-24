package alicloudroscdktsdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdktsdb/internal"
)

// Represents a `HiTSDBInstance`.
type IHiTSDBInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionString: Connection string of the instance.
	AttrConnectionString() interface{}
	// Attribute EngineType: Engine type of the instance.
	AttrEngineType() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	// Attribute OrderId: Order id of created instance.
	AttrOrderId() interface{}
	// Attribute PublicConnectionString: Public connection string of the instance.
	AttrPublicConnectionString() interface{}
	// Attribute ReverseVpcIp: Reverse vpc ip of the instance.
	AttrReverseVpcIp() interface{}
	// Attribute ReverseVpcPort: Reverse vpc port of the instance.
	AttrReverseVpcPort() interface{}
	Props() *HiTSDBInstanceProps
}

// The jsii proxy for IHiTSDBInstance
type jsiiProxy_IHiTSDBInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHiTSDBInstance) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHiTSDBInstance) AttrEngineType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHiTSDBInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHiTSDBInstance) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHiTSDBInstance) AttrPublicConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHiTSDBInstance) AttrReverseVpcIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReverseVpcIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHiTSDBInstance) AttrReverseVpcPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReverseVpcPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHiTSDBInstance) Props() *HiTSDBInstanceProps {
	var returns *HiTSDBInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

