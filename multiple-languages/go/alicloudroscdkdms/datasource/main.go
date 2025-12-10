package datasource

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-dms.datasource.Database",
		reflect.TypeOf((*Database)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrCatalogName", GoGetter: "AttrCatalogName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDatabaseId", GoGetter: "AttrDatabaseId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbaId", GoGetter: "AttrDbaId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbaName", GoGetter: "AttrDbaName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbType", GoGetter: "AttrDbType"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncoding", GoGetter: "AttrEncoding"},
			_jsii_.MemberProperty{JsiiProperty: "attrEnvType", GoGetter: "AttrEnvType"},
			_jsii_.MemberProperty{JsiiProperty: "attrHost", GoGetter: "AttrHost"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceAlias", GoGetter: "AttrInstanceAlias"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrOwnerIdList", GoGetter: "AttrOwnerIdList"},
			_jsii_.MemberProperty{JsiiProperty: "attrOwnerNameList", GoGetter: "AttrOwnerNameList"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSchemaName", GoGetter: "AttrSchemaName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSearchName", GoGetter: "AttrSearchName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSid", GoGetter: "AttrSid"},
			_jsii_.MemberProperty{JsiiProperty: "attrState", GoGetter: "AttrState"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDependency", GoMethod: "FetchDependency"},
			_jsii_.MemberMethod{JsiiMethod: "fetchResourceDesc", GoMethod: "FetchResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "id", GoGetter: "Id"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "resource", GoGetter: "Resource"},
			_jsii_.MemberProperty{JsiiProperty: "scope", GoGetter: "Scope"},
			_jsii_.MemberMethod{JsiiMethod: "setMetadata", GoMethod: "SetMetadata"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_Database{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDatabase)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-dms.datasource.DatabaseProps",
		reflect.TypeOf((*DatabaseProps)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-dms.datasource.IDatabase",
		reflect.TypeOf((*IDatabase)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrCatalogName", GoGetter: "AttrCatalogName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDatabaseId", GoGetter: "AttrDatabaseId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbaId", GoGetter: "AttrDbaId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbaName", GoGetter: "AttrDbaName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbType", GoGetter: "AttrDbType"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncoding", GoGetter: "AttrEncoding"},
			_jsii_.MemberProperty{JsiiProperty: "attrEnvType", GoGetter: "AttrEnvType"},
			_jsii_.MemberProperty{JsiiProperty: "attrHost", GoGetter: "AttrHost"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceAlias", GoGetter: "AttrInstanceAlias"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrOwnerIdList", GoGetter: "AttrOwnerIdList"},
			_jsii_.MemberProperty{JsiiProperty: "attrOwnerNameList", GoGetter: "AttrOwnerNameList"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSchemaName", GoGetter: "AttrSchemaName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSearchName", GoGetter: "AttrSearchName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSid", GoGetter: "AttrSid"},
			_jsii_.MemberProperty{JsiiProperty: "attrState", GoGetter: "AttrState"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDatabase{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-dms.datasource.RosDatabase",
		reflect.TypeOf((*RosDatabase)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDeletionOverride", GoMethod: "AddDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addDependsOn", GoMethod: "AddDependsOn"},
			_jsii_.MemberMethod{JsiiMethod: "addDesc", GoMethod: "AddDesc"},
			_jsii_.MemberMethod{JsiiMethod: "addMetaData", GoMethod: "AddMetaData"},
			_jsii_.MemberMethod{JsiiMethod: "addOverride", GoMethod: "AddOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyDeletionOverride", GoMethod: "AddPropertyDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyOverride", GoMethod: "AddPropertyOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addRosDependency", GoMethod: "AddRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrCatalogName", GoGetter: "AttrCatalogName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDatabaseId", GoGetter: "AttrDatabaseId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbaId", GoGetter: "AttrDbaId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbaName", GoGetter: "AttrDbaName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbType", GoGetter: "AttrDbType"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncoding", GoGetter: "AttrEncoding"},
			_jsii_.MemberProperty{JsiiProperty: "attrEnvType", GoGetter: "AttrEnvType"},
			_jsii_.MemberProperty{JsiiProperty: "attrHost", GoGetter: "AttrHost"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceAlias", GoGetter: "AttrInstanceAlias"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrOwnerIdList", GoGetter: "AttrOwnerIdList"},
			_jsii_.MemberProperty{JsiiProperty: "attrOwnerNameList", GoGetter: "AttrOwnerNameList"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSchemaName", GoGetter: "AttrSchemaName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSearchName", GoGetter: "AttrSearchName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSid", GoGetter: "AttrSid"},
			_jsii_.MemberProperty{JsiiProperty: "attrState", GoGetter: "AttrState"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "host", GoGetter: "Host"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "port", GoGetter: "Port"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "refreshOptions", GoGetter: "RefreshOptions"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "schemaName", GoGetter: "SchemaName"},
			_jsii_.MemberProperty{JsiiProperty: "sid", GoGetter: "Sid"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tid", GoGetter: "Tid"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosDatabase{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-dms.datasource.RosDatabaseProps",
		reflect.TypeOf((*RosDatabaseProps)(nil)).Elem(),
	)
}
