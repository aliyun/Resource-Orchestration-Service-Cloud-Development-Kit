import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dms.datasource.DatabaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "host": "host",
        "port": "port",
        "schema_name": "schemaName",
        "refresh_options": "refreshOptions",
        "sid": "sid",
        "tid": "tid",
    },
)
class DatabaseProps:
    def __init__(
        self,
        *,
        host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schema_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tid: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Database``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database

        :param host: Property host: Database connection address.
        :param port: Property port: Database connection port.
        :param schema_name: Property schemaName: Database schema name.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param sid: Property sid: Database SID.
        :param tid: Property tid: The tenant ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aed64ffd4017f05b3341f1ab57f5343852fe0d989dfc62be6b61df0b975946c6)
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument schema_name", value=schema_name, expected_type=type_hints["schema_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument sid", value=sid, expected_type=type_hints["sid"])
            check_type(argname="argument tid", value=tid, expected_type=type_hints["tid"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "host": host,
            "port": port,
            "schema_name": schema_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if sid is not None:
            self._values["sid"] = sid
        if tid is not None:
            self._values["tid"] = tid

    @builtins.property
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property host: Database connection address.'''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property port: Database connection port.'''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schema_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property schemaName: Database schema name.'''
        result = self._values.get("schema_name")
        assert result is not None, "Required property 'schema_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sid: Database SID.'''
        result = self._values.get("sid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tid(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tid: The tenant ID.'''
        result = self._values.get("tid")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-dms.datasource.IDatabase")
class IDatabase(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Database``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCatalogName")
    def attr_catalog_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CatalogName: Database catalog name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseId")
    def attr_database_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatabaseId: Database ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbaId")
    def attr_dba_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbaId: Database administrator ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbaName")
    def attr_dba_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbaName: Database administrator name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: Database type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEncoding")
    def attr_encoding(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Encoding: Database encoding.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvType")
    def attr_env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvType: Database environment type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHost")
    def attr_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Host: Database connection address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceAlias")
    def attr_instance_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceAlias: Database instance alias.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Database instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOwnerIdList")
    def attr_owner_id_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerIdList: Database owner ID list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOwnerNameList")
    def attr_owner_name_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerNameList: Database owner name list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Database connection port.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSchemaName")
    def attr_schema_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchemaName: Database schema name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSearchName")
    def attr_search_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchName: Database search name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSid")
    def attr_sid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sid: Database SID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: Database state.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatabaseProps:
        ...


class _IDatabaseProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Database``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dms.datasource.IDatabase"

    @builtins.property
    @jsii.member(jsii_name="attrCatalogName")
    def attr_catalog_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CatalogName: Database catalog name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCatalogName"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseId")
    def attr_database_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatabaseId: Database ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatabaseId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbaId")
    def attr_dba_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbaId: Database administrator ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbaId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbaName")
    def attr_dba_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbaName: Database administrator name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbaName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: Database type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrEncoding")
    def attr_encoding(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Encoding: Database encoding.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncoding"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvType")
    def attr_env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvType: Database environment type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvType"))

    @builtins.property
    @jsii.member(jsii_name="attrHost")
    def attr_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Host: Database connection address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHost"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceAlias")
    def attr_instance_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceAlias: Database instance alias.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Database instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerIdList")
    def attr_owner_id_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerIdList: Database owner ID list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerIdList"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerNameList")
    def attr_owner_name_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerNameList: Database owner name list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerNameList"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Database connection port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSchemaName")
    def attr_schema_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchemaName: Database schema name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSchemaName"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchName")
    def attr_search_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchName: Database search name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSearchName"))

    @builtins.property
    @jsii.member(jsii_name="attrSid")
    def attr_sid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sid: Database SID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSid"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: Database state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatabaseProps:
        return typing.cast(DatabaseProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDatabase).__jsii_proxy_class__ = lambda : _IDatabaseProxy


class RosDatabase(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.datasource.RosDatabase",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::DMS::Database``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Database`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatabaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__238f0824d3926340c424875284659723a1f23ea44854f42bb41cebdb180ae85a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0da4136598aab84dc35a1e58cadd98499f491fb50bcf74bdc8a65917e0b123b1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCatalogName")
    def attr_catalog_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CatalogName: Database catalog name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCatalogName"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseId")
    def attr_database_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DatabaseId: Database ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabaseId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbaId")
    def attr_dba_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbaId: Database administrator ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbaId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbaName")
    def attr_dba_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbaName: Database administrator name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbaName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbType: Database type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrEncoding")
    def attr_encoding(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Encoding: Database encoding.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncoding"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvType")
    def attr_env_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvType: Database environment type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvType"))

    @builtins.property
    @jsii.member(jsii_name="attrHost")
    def attr_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Host: Database connection address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHost"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceAlias")
    def attr_instance_alias(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceAlias: Database instance alias.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Database instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerIdList")
    def attr_owner_id_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OwnerIdList: Database owner ID list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerIdList"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerNameList")
    def attr_owner_name_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OwnerNameList: Database owner name list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerNameList"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Database connection port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSchemaName")
    def attr_schema_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SchemaName: Database schema name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSchemaName"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchName")
    def attr_search_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SearchName: Database search name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSearchName"))

    @builtins.property
    @jsii.member(jsii_name="attrSid")
    def attr_sid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Sid: Database SID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSid"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: State: Database state.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c224471e3c2c49ed0b742ef3a4573935dd55751659ed181b65c6b60fc0c80bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="host")
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: host: Database connection address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "host"))

    @host.setter
    def host(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1fa47a44f1cbad9e02843b1bba4cefb5a934008302c0a406d8a113a9d2e1011)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "host", value)

    @builtins.property
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: port: Database connection port.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6ceda035483dccec254ec9ada51b6d1eaae93a0757c496821e50b3fcf308611)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "port", value)

    @builtins.property
    @jsii.member(jsii_name="schemaName")
    def schema_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schemaName: Database schema name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "schemaName"))

    @schema_name.setter
    def schema_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e1c9b6c5726b90e347928da6d32e57937c53bb492a33f1f4ad164f40e8a6d83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schemaName", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79836ca1da42fbebcc81de5edd9de9385950b1016435de2c7581b41ceba512b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="sid")
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sid: Database SID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sid"))

    @sid.setter
    def sid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcf23d4c22b7a3191f83379eb46f1435bcc7fb5da92020c54e0194ddd6f81a9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sid", value)

    @builtins.property
    @jsii.member(jsii_name="tid")
    def tid(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tid: The tenant ID.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tid"))

    @tid.setter
    def tid(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f03fd0cd1f09ab1f58513151488fd030771f69cb79d12c3fa394416fd5ca956f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tid", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dms.datasource.RosDatabaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "host": "host",
        "port": "port",
        "schema_name": "schemaName",
        "refresh_options": "refreshOptions",
        "sid": "sid",
        "tid": "tid",
    },
)
class RosDatabaseProps:
    def __init__(
        self,
        *,
        host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schema_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tid: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDatabase``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database

        :param host: 
        :param port: 
        :param schema_name: 
        :param refresh_options: 
        :param sid: 
        :param tid: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__467394af9c4959cc6f4914d9ee02dd69567e91ebc42b37fe5341a93f399f5197)
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument schema_name", value=schema_name, expected_type=type_hints["schema_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument sid", value=sid, expected_type=type_hints["sid"])
            check_type(argname="argument tid", value=tid, expected_type=type_hints["tid"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "host": host,
            "port": port,
            "schema_name": schema_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if sid is not None:
            self._values["sid"] = sid
        if tid is not None:
            self._values["tid"] = tid

    @builtins.property
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: host: Database connection address.
        '''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: port: Database connection port.
        '''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schema_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schemaName: Database schema name.
        '''
        result = self._values.get("schema_name")
        assert result is not None, "Required property 'schema_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sid: Database SID.
        '''
        result = self._values.get("sid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tid(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tid: The tenant ID.
        '''
        result = self._values.get("tid")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IDatabase)
class Database(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.datasource.Database",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::DMS::Database``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDatabase``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DatabaseProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9dfbfef7e72eedca26fbe96d0d64f5f50bfd2dfd311eecec4f919843421bf80)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCatalogName")
    def attr_catalog_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CatalogName: Database catalog name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCatalogName"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseId")
    def attr_database_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatabaseId: Database ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatabaseId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbaId")
    def attr_dba_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbaId: Database administrator ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbaId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbaName")
    def attr_dba_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbaName: Database administrator name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbaName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: Database type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrEncoding")
    def attr_encoding(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Encoding: Database encoding.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncoding"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvType")
    def attr_env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvType: Database environment type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvType"))

    @builtins.property
    @jsii.member(jsii_name="attrHost")
    def attr_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Host: Database connection address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHost"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceAlias")
    def attr_instance_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceAlias: Database instance alias.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Database instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerIdList")
    def attr_owner_id_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerIdList: Database owner ID list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerIdList"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerNameList")
    def attr_owner_name_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerNameList: Database owner name list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerNameList"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Database connection port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSchemaName")
    def attr_schema_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchemaName: Database schema name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSchemaName"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchName")
    def attr_search_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchName: Database search name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSearchName"))

    @builtins.property
    @jsii.member(jsii_name="attrSid")
    def attr_sid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sid: Database SID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSid"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: Database state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatabaseProps:
        return typing.cast(DatabaseProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__949fea8e457b262546c25fcafef9abbc91d1a0d309183a78d9b4cb7f434e4541)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f928ad33d35b15d90c067d02a3793c80c74c57d134adbc723f34668e545cd123)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e273dfc11b36c0be0c2dd0ed8212bd8282a11aef0ee219480de8036e1df28634)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Database",
    "DatabaseProps",
    "IDatabase",
    "RosDatabase",
    "RosDatabaseProps",
]

publication.publish()

def _typecheckingstub__aed64ffd4017f05b3341f1ab57f5343852fe0d989dfc62be6b61df0b975946c6(
    *,
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schema_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tid: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__238f0824d3926340c424875284659723a1f23ea44854f42bb41cebdb180ae85a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0da4136598aab84dc35a1e58cadd98499f491fb50bcf74bdc8a65917e0b123b1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c224471e3c2c49ed0b742ef3a4573935dd55751659ed181b65c6b60fc0c80bc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1fa47a44f1cbad9e02843b1bba4cefb5a934008302c0a406d8a113a9d2e1011(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6ceda035483dccec254ec9ada51b6d1eaae93a0757c496821e50b3fcf308611(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e1c9b6c5726b90e347928da6d32e57937c53bb492a33f1f4ad164f40e8a6d83(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79836ca1da42fbebcc81de5edd9de9385950b1016435de2c7581b41ceba512b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcf23d4c22b7a3191f83379eb46f1435bcc7fb5da92020c54e0194ddd6f81a9b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f03fd0cd1f09ab1f58513151488fd030771f69cb79d12c3fa394416fd5ca956f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__467394af9c4959cc6f4914d9ee02dd69567e91ebc42b37fe5341a93f399f5197(
    *,
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schema_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tid: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9dfbfef7e72eedca26fbe96d0d64f5f50bfd2dfd311eecec4f919843421bf80(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__949fea8e457b262546c25fcafef9abbc91d1a0d309183a78d9b4cb7f434e4541(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f928ad33d35b15d90c067d02a3793c80c74c57d134adbc723f34668e545cd123(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e273dfc11b36c0be0c2dd0ed8212bd8282a11aef0ee219480de8036e1df28634(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
