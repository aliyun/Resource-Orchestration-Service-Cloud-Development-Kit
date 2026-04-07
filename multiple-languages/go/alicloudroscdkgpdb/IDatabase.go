package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `Database`.
type IDatabase interface {
	alicloudroscdkcore.IResource
	// Attribute AccessPrivilege: Permission Control Information.
	AttrAccessPrivilege() interface{}
	// Attribute CharacterSetName: Character set, default value is UTF8.
	AttrCharacterSetName() interface{}
	// Attribute Collate: Database locale parameters, specifying string comparison/collation.
	AttrCollate() interface{}
	// Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.
	AttrConnLimit() interface{}
	// Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.
	AttrCtype() interface{}
	// Attribute DatabaseName: Database Name.
	AttrDatabaseName() interface{}
	// Attribute DBInstanceId: Instance ID.
	AttrDbInstanceId() interface{}
	// Attribute Description: Database Description.
	AttrDescription() interface{}
	// Attribute Owner: Data Sheet owner.
	AttrOwner() interface{}
	// Attribute Size: Database size.
	AttrSize() interface{}
	// Attribute TableSpace: Database table space.
	AttrTableSpace() interface{}
	Props() *DatabaseProps
}

// The jsii proxy for IDatabase
type jsiiProxy_IDatabase struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatabase) AttrAccessPrivilege() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessPrivilege",
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

func (j *jsiiProxy_IDatabase) AttrCollate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCollate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrConnLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrCtype() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCtype",
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

func (j *jsiiProxy_IDatabase) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrOwner() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwner",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabase) AttrTableSpace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTableSpace",
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

