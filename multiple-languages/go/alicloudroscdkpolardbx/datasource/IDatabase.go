package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardbx/datasource/internal"
)

// Represents a `Database`.
type IDatabase interface {
	alicloudroscdkcore.IResource
	// Attribute Accounts: The list of accounts that can be used to access the database.
	AttrAccounts() interface{}
	// Attribute CharacterSetName: The character set that is supported by the database.
	AttrCharacterSetName() interface{}
	// Attribute DatabaseDescription: The description of the database.
	AttrDatabaseDescription() interface{}
	// Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
	AttrDbInstanceId() interface{}
	// Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.
	AttrPolarDbxDatabaseName() interface{}
	Props() *DatabaseProps
}

// The jsii proxy for IDatabase
type jsiiProxy_IDatabase struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatabase) AttrAccounts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccounts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrCharacterSetName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCharacterSetName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrDatabaseDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatabaseDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrPolarDbxDatabaseName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolarDbxDatabaseName",
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

