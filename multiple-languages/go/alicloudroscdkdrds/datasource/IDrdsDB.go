package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/datasource/internal"
)

// Represents a `DrdsDB`.
type IDrdsDB interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Database creation timestamp.
	AttrCreateTime() interface{}
	// Attribute DrdsDatabaseName: The name of the Drds database.
	AttrDrdsDatabaseName() interface{}
	// Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.
	AttrInstRole() interface{}
	// Attribute Schema: The schema ID that is assigned to the partitioned database by the system.
	AttrSchema() interface{}
	// Attribute SplitMode: The partition mode of the database.Valid values:  HORIZONTAL: The database is horizontally partitioned. VERTICAL: The database is vertically partitioned.
	AttrSplitMode() interface{}
	// Attribute StorageType: The storage type of the Drds database.
	//
	// Valid values:
	// RDS
	// PolarDB.
	AttrStorageType() interface{}
	Props() *DrdsDBProps
}

// The jsii proxy for IDrdsDB
type jsiiProxy_IDrdsDB struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDrdsDB) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsDB) AttrDrdsDatabaseName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDrdsDatabaseName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsDB) AttrInstRole() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstRole",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsDB) AttrSchema() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSchema",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsDB) AttrSplitMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSplitMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsDB) AttrStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsDB) Props() *DrdsDBProps {
	var returns *DrdsDBProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

