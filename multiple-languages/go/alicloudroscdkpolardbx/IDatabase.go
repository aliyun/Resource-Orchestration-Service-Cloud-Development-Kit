package alicloudroscdkpolardbx

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardbx/internal"
)

// Represents a `Database`.
type IDatabase interface {
	alicloudroscdkcore.IResource
	// Attribute Accounts: List of accounts.
	AttrAccounts() interface{}
	// Attribute CharacterSetName: Character set, which supports the following character sets:.
	AttrCharacterSetName() interface{}
	// Attribute DatabaseDescription: Database description information.
	AttrDatabaseDescription() interface{}
	// Attribute DatabaseName: The name of the database.
	AttrDatabaseName() interface{}
	// Attribute DBInstanceId: The ID of the instance.
	AttrDbInstanceId() interface{}
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

func (j *jsiiProxy_IDatabase) AttrDatabaseName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatabaseName",
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

func (j *jsiiProxy_IDatabase) Props() *DatabaseProps {
	var returns *DatabaseProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

