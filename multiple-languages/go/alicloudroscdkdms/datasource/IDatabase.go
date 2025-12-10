package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdms/datasource/internal"
)

// Represents a `Database`.
type IDatabase interface {
	alicloudroscdkcore.IResource
	// Attribute CatalogName: Database catalog name.
	AttrCatalogName() interface{}
	// Attribute DatabaseId: Database ID.
	AttrDatabaseId() interface{}
	// Attribute DbaId: Database administrator ID.
	AttrDbaId() interface{}
	// Attribute DbaName: Database administrator name.
	AttrDbaName() interface{}
	// Attribute DbType: Database type.
	AttrDbType() interface{}
	// Attribute Encoding: Database encoding.
	AttrEncoding() interface{}
	// Attribute EnvType: Database environment type.
	AttrEnvType() interface{}
	// Attribute Host: Database connection address.
	AttrHost() interface{}
	// Attribute InstanceAlias: Database instance alias.
	AttrInstanceAlias() interface{}
	// Attribute InstanceId: Database instance ID.
	AttrInstanceId() interface{}
	// Attribute OwnerIdList: Database owner ID list.
	AttrOwnerIdList() interface{}
	// Attribute OwnerNameList: Database owner name list.
	AttrOwnerNameList() interface{}
	// Attribute Port: Database connection port.
	AttrPort() interface{}
	// Attribute SchemaName: Database schema name.
	AttrSchemaName() interface{}
	// Attribute SearchName: Database search name.
	AttrSearchName() interface{}
	// Attribute Sid: Database SID.
	AttrSid() interface{}
	// Attribute State: Database state.
	AttrState() interface{}
	Props() *DatabaseProps
}

// The jsii proxy for IDatabase
type jsiiProxy_IDatabase struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatabase) AttrCatalogName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCatalogName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrDatabaseId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatabaseId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrDbaId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbaId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrDbaName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbaName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrDbType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrEncoding() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncoding",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrEnvType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrInstanceAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrOwnerIdList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwnerIdList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrOwnerNameList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwnerNameList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrSchemaName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSchemaName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrSearchName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSearchName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrSid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) Props() *DatabaseProps {
	var returns *DatabaseProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

