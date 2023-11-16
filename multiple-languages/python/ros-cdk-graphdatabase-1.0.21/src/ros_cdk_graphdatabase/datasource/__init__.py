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


class Accounts(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.Accounts",
):
    '''A ROS resource type:  ``DATASOURCE::GraphDatabase::Accounts``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::GraphDatabase::Accounts``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bad1137d2eae97d95e6d21b6160a25ec80bfcb7bcd4f05e7c7c6fd67d5dff5d2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountNames: The list of account names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Accounts: The list of accounts.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.AccountsProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId", "account_name": "accountName"},
)
class AccountsProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::GraphDatabase::Accounts``.

        :param db_instance_id: Property dbInstanceId: Instance Id.
        :param account_name: Property accountName: Account name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2200f46a10d49083a3e76e05476bcdcf8a4a03c7af3428d89df3f9178df782d4)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: Instance Id.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountName: Account name.'''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DbInstances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.DbInstances",
):
    '''A ROS resource type:  ``DATASOURCE::GraphDatabase::DbInstances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DbInstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::GraphDatabase::DbInstances``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e418cd818c28ddc00d01be1173388c99aa5e82efedd4a6769113f8c37190261c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceIds: The list of db instance IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstances: The list of db instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.DbInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_description": "dbInstanceDescription",
        "db_instance_id": "dbInstanceId",
        "resource_group_id": "resourceGroupId",
    },
)
class DbInstancesProps:
    def __init__(
        self,
        *,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::GraphDatabase::DbInstances``.

        :param db_instance_description: Property dbInstanceDescription: According to the practical example or notes.
        :param db_instance_id: Property dbInstanceId: The first ID of the resource.
        :param resource_group_id: Property resourceGroupId: Resource Group ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5e44697695983a4e460402d429f62148e39ec1677c1b469b5f1bab95f08dd60)
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: According to the practical example or notes.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceId: The first ID of the resource.'''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource Group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccounts(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosAccounts",
):
    '''A ROS template type:  ``DATASOURCE::GraphDatabase::Accounts``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::GraphDatabase::Accounts``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a71dd27d07906afb62fc00b4ed42bc37a46ae6762f9037ad14587041f19a040)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cafa9d0dbaa804299c15841958808ff513c50dfa02587f8586bd6a8f5aca4463)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountNames: The list of account names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Accounts: The list of accounts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: Instance Id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7b71a4d98b151213055229883bf2b64d1e8276c80da0bceacead135d8245d8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95f8ced0eb2d4f743dd620d54ace6d6bbc4d2c9109b21cac2b3ec865a6211ad8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: Account name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbc3e3fe456fc3c064429e2a7abc5b9b2d85799c3a31746f41d85306e058179a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosAccountsProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId", "account_name": "accountName"},
)
class RosAccountsProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::GraphDatabase::Accounts``.

        :param db_instance_id: 
        :param account_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__223ed212bd4b35d3c7e58e6b61bbb486df0f1b33e4cd47a0e558d0362b5ed611)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: Instance Id.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: Account name.
        '''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosDbInstances",
):
    '''A ROS template type:  ``DATASOURCE::GraphDatabase::DbInstances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::GraphDatabase::DbInstances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__611a02be194aa50e33e12577bc5c01c6979f6105f1148f815acae8e981b2108d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a4dcd2e4b87d141591f076054b2bb371d46f8790cefaef6d860200e0a0f6edcf)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceIds: The list of db instance IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstances: The list of db instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstances"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3a2525668a6d38b0ce829ad7cff8e66edad25a6d87c5dd5e79a90e0e6880e415)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: According to the practical example or notes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a7a2d88588c1763258813d087db075cdd56b5bfd8e66fe2424c1bd90891f227)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The first ID of the resource.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e63ea3460dcdac8bfd7ee9b780e8ed14a3fe3ddecad18bc7940d29b8e50dc2ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource Group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06d3598d74fbbafaaa0206d1cd650e089b89eb8a7a257c79a54b921c2c1cfb87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosDbInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_description": "dbInstanceDescription",
        "db_instance_id": "dbInstanceId",
        "resource_group_id": "resourceGroupId",
    },
)
class RosDbInstancesProps:
    def __init__(
        self,
        *,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::GraphDatabase::DbInstances``.

        :param db_instance_description: 
        :param db_instance_id: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c89ef366fa9faa206e2a81166eb4c248a785dd03c11cdd887234fa08f5c81b5)
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: According to the practical example or notes.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The first ID of the resource.
        '''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource Group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Accounts",
    "AccountsProps",
    "DbInstances",
    "DbInstancesProps",
    "RosAccounts",
    "RosAccountsProps",
    "RosDbInstances",
    "RosDbInstancesProps",
]

publication.publish()

def _typecheckingstub__bad1137d2eae97d95e6d21b6160a25ec80bfcb7bcd4f05e7c7c6fd67d5dff5d2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2200f46a10d49083a3e76e05476bcdcf8a4a03c7af3428d89df3f9178df782d4(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e418cd818c28ddc00d01be1173388c99aa5e82efedd4a6769113f8c37190261c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DbInstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5e44697695983a4e460402d429f62148e39ec1677c1b469b5f1bab95f08dd60(
    *,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a71dd27d07906afb62fc00b4ed42bc37a46ae6762f9037ad14587041f19a040(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cafa9d0dbaa804299c15841958808ff513c50dfa02587f8586bd6a8f5aca4463(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7b71a4d98b151213055229883bf2b64d1e8276c80da0bceacead135d8245d8e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95f8ced0eb2d4f743dd620d54ace6d6bbc4d2c9109b21cac2b3ec865a6211ad8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbc3e3fe456fc3c064429e2a7abc5b9b2d85799c3a31746f41d85306e058179a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__223ed212bd4b35d3c7e58e6b61bbb486df0f1b33e4cd47a0e558d0362b5ed611(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__611a02be194aa50e33e12577bc5c01c6979f6105f1148f815acae8e981b2108d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDbInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4dcd2e4b87d141591f076054b2bb371d46f8790cefaef6d860200e0a0f6edcf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a2525668a6d38b0ce829ad7cff8e66edad25a6d87c5dd5e79a90e0e6880e415(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a7a2d88588c1763258813d087db075cdd56b5bfd8e66fe2424c1bd90891f227(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e63ea3460dcdac8bfd7ee9b780e8ed14a3fe3ddecad18bc7940d29b8e50dc2ec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06d3598d74fbbafaaa0206d1cd650e089b89eb8a7a257c79a54b921c2c1cfb87(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c89ef366fa9faa206e2a81166eb4c248a785dd03c11cdd887234fa08f5c81b5(
    *,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
