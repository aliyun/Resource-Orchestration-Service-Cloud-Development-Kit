package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `JdbcDataSource`.
type IJdbcDataSource interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned.
	//
	// Otherwise, "" is returned "".
	AttrConnectionMessage() interface{}
	// Attribute ConnectionStatus: Service Status:.
	AttrConnectionStatus() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute DataSourceDescription: Data Source Description.
	AttrDataSourceDescription() interface{}
	// Attribute DataSourceId: The data source ID.
	AttrDataSourceId() interface{}
	// Attribute DataSourceName: Data Source Name.
	AttrDataSourceName() interface{}
	// Attribute DataSourceType: Data Source Type.
	AttrDataSourceType() interface{}
	// Attribute ExternalDataServiceId: External Data Service id.
	AttrExternalDataServiceId() interface{}
	// Attribute JdbcConnectionString: The JDBC connection string.
	AttrJdbcConnectionString() interface{}
	// Attribute JdbcPassword: The password of the database account.
	AttrJdbcPassword() interface{}
	// Attribute JdbcUserName: The name of the database account.
	AttrJdbcUserName() interface{}
	// Attribute ModifyTime: Last modification time.
	AttrModifyTime() interface{}
	// Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception.
	//
	// A null value in the normal Running state.
	AttrStatusMessage() interface{}
	Props() *JdbcDataSourceProps
}

// The jsii proxy for IJdbcDataSource
type jsiiProxy_IJdbcDataSource struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IJdbcDataSource) AttrConnectionMessage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionMessage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrConnectionStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrDataSourceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataSourceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrDataSourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataSourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrDataSourceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataSourceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrDataSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrExternalDataServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExternalDataServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrJdbcConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJdbcConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrJdbcPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJdbcPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrJdbcUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJdbcUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) AttrStatusMessage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatusMessage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJdbcDataSource) Props() *JdbcDataSourceProps {
	var returns *JdbcDataSourceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

