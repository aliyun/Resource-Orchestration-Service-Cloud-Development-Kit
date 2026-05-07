package alicloudroscdkdataworks

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdataworks/internal"
)

// Represents a `DataSourceSharedRule`.
type IDataSourceSharedRule interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the data source sharing rule.
	AttrCreateTime() interface{}
	// Attribute CreateUser: Creator of the data source permission policy.
	AttrCreateUser() interface{}
	// Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.
	AttrDataSourceId() interface{}
	// Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.
	AttrDataSourceSharedRuleId() interface{}
	// Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
	AttrEnvType() interface{}
	// Attribute SharedDataSourceName: The name of the data source shared to the target space.
	//
	// Consists of the name of the source space and the name of the data source, separated by dots.
	AttrSharedDataSourceName() interface{}
	// Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.
	AttrSharedUser() interface{}
	// Attribute SourceProjectId: The ID of the project to which the data source is originally created.
	AttrSourceProjectId() interface{}
	// Attribute TargetProjectId: The ID of the project to which the data source is shared.
	AttrTargetProjectId() interface{}
	Props() *DataSourceSharedRuleProps
}

// The jsii proxy for IDataSourceSharedRule
type jsiiProxy_IDataSourceSharedRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrCreateUser() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateUser",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrDataSourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataSourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrDataSourceSharedRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataSourceSharedRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrEnvType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrSharedDataSourceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSharedDataSourceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrSharedUser() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSharedUser",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrSourceProjectId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceProjectId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) AttrTargetProjectId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetProjectId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataSourceSharedRule) Props() *DataSourceSharedRuleProps {
	var returns *DataSourceSharedRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

