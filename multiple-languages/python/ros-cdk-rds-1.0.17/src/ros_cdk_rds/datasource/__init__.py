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
    jsii_type="@alicloud/ros-cdk-rds.datasource.Accounts",
):
    '''A ROS resource type:  ``DATASOURCE::RDS::Accounts``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::RDS::Accounts``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95dd19288d1fb07c44dfcdad60894614316ceb698204df838f1ca1215160d3c2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountNames: The list of The RDS account names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Accounts: The list of The RDS accounts.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.AccountsProps",
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
        '''Properties for defining a ``DATASOURCE::RDS::Accounts``.

        :param db_instance_id: Property dbInstanceId: The ID of the RDS instance.
        :param account_name: Property accountName: The name of the RDS account.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f962f50ad4f9cf1d7d6fd6cd87a930fc0f522df76f98c027c9df725124e1353)
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
        '''Property dbInstanceId: The ID of the RDS instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountName: The name of the RDS account.'''
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


class DBInstances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.DBInstances",
):
    '''A ROS resource type:  ``DATASOURCE::RDS::DBInstances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DBInstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::RDS::DBInstances``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f09ed459dce499ec4d06cf0fec5e00cfb28949ffc462caa87c87f5495e4d3e57)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceIds: The list of The RDS Database instance Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstances: The list of The RDS Database instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.DBInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "connection_mode": "connectionMode",
        "connection_string": "connectionString",
        "db_instance_class": "dbInstanceClass",
        "db_instance_id": "dbInstanceId",
        "db_instance_status": "dbInstanceStatus",
        "db_instance_type": "dbInstanceType",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "dedicated_host_id": "dedicatedHostId",
        "engine": "engine",
        "engine_version": "engineVersion",
        "expired": "expired",
        "instance_level": "instanceLevel",
        "instance_network_type": "instanceNetworkType",
        "pay_type": "payType",
        "proxy_id": "proxyId",
        "resource_group_id": "resourceGroupId",
        "search_key": "searchKey",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class DBInstancesProps:
    def __init__(
        self,
        *,
        connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::RDS::DBInstances``.

        :param connection_mode: Property connectionMode: The connection mode of the instance.
        :param connection_string: Property connectionString: The endpoint of the instance.
        :param db_instance_class: Property dbInstanceClass: The instance type of the instances.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param db_instance_status: Property dbInstanceStatus: The status of the instances.
        :param db_instance_type: Property dbInstanceType: The role of the instances.
        :param dedicated_host_group_id: Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
        :param dedicated_host_id: Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
        :param engine: Property engine: The database engine that is run by the instances.
        :param engine_version: Property engineVersion: The version of the database engine that is run by the instances.
        :param expired: Property expired: Specifies whether the instances have expired.
        :param instance_level: Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
        :param instance_network_type: Property instanceNetworkType: The network type of the instances.
        :param pay_type: Property payType: The billing method of the instances.
        :param proxy_id: Property proxyId: The ID of the proxy mode.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the instances belong.
        :param search_key: Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
        :param zone_id: Property zoneId: The ID of the zone to which the instances belong.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1d3e543666aca4b1c633978aec2f1fb5d2fc096ac0c13b6aa201864cb7e6490)
            check_type(argname="argument connection_mode", value=connection_mode, expected_type=type_hints["connection_mode"])
            check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_status", value=db_instance_status, expected_type=type_hints["db_instance_status"])
            check_type(argname="argument db_instance_type", value=db_instance_type, expected_type=type_hints["db_instance_type"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument dedicated_host_id", value=dedicated_host_id, expected_type=type_hints["dedicated_host_id"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument instance_level", value=instance_level, expected_type=type_hints["instance_level"])
            check_type(argname="argument instance_network_type", value=instance_network_type, expected_type=type_hints["instance_network_type"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument proxy_id", value=proxy_id, expected_type=type_hints["proxy_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument search_key", value=search_key, expected_type=type_hints["search_key"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if connection_mode is not None:
            self._values["connection_mode"] = connection_mode
        if connection_string is not None:
            self._values["connection_string"] = connection_string
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if db_instance_status is not None:
            self._values["db_instance_status"] = db_instance_status
        if db_instance_type is not None:
            self._values["db_instance_type"] = db_instance_type
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if dedicated_host_id is not None:
            self._values["dedicated_host_id"] = dedicated_host_id
        if engine is not None:
            self._values["engine"] = engine
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if instance_level is not None:
            self._values["instance_level"] = instance_level
        if instance_network_type is not None:
            self._values["instance_network_type"] = instance_network_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if proxy_id is not None:
            self._values["proxy_id"] = proxy_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if search_key is not None:
            self._values["search_key"] = search_key
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionMode: The connection mode of the instance.'''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionString: The endpoint of the instance.'''
        result = self._values.get("connection_string")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceClass: The instance type of the instances.'''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceStatus: The status of the instances.'''
        result = self._values.get("db_instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceType: The role of the instances.'''
        result = self._values.get("db_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.'''
        result = self._values.get("dedicated_host_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engine: The database engine that is run by the instances.'''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: The version of the database engine that is run by the instances.'''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property expired: Specifies whether the instances have expired.'''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.'''
        result = self._values.get("instance_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceNetworkType: The network type of the instances.'''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The billing method of the instances.'''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyId: The ID of the proxy mode.'''
        result = self._values.get("proxy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the instances belong.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.'''
        result = self._values.get("search_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone to which the instances belong.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Databases(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.Databases",
):
    '''A ROS resource type:  ``DATASOURCE::RDS::Databases``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DatabasesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::RDS::Databases``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__095546846bb6c1d643ffe24a42650823ccb30dade7d00fc1121edcef2cd54b60)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDatabases")
    def attr_databases(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Databases: The list of The RDS databases.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabases"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNames")
    def attr_db_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNames: The list of The RDS database names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNames"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.DatabasesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
        "db_status": "dbStatus",
    },
)
class DatabasesProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::RDS::Databases``.

        :param db_instance_id: Property dbInstanceId: The ID of the RDS instance.
        :param db_name: Property dbName: The names of the databases whose information you want to query.
        :param db_status: Property dbStatus: The status of the databases whose information you want to query.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c0ed223ef2a3b3a2ee99a78bf47098de3a785588cb6b0a6c713df0af35163bc)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument db_status", value=db_status, expected_type=type_hints["db_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if db_name is not None:
            self._values["db_name"] = db_name
        if db_status is not None:
            self._values["db_status"] = db_status

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the RDS instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbName: The names of the databases whose information you want to query.'''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbStatus: The status of the databases whose information you want to query.'''
        result = self._values.get("db_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatabasesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccounts(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosAccounts",
):
    '''A ROS template type:  ``DATASOURCE::RDS::Accounts``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::RDS::Accounts``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6403a60a492995dae9e4c1213db98dc4125f9a185d74fc62e5de394874aee3f3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6d68198122df3f2d8393cd194889e9059c0829c6cd929f193c88bc500bb42028)
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
        :Attribute: AccountNames: The list of The RDS account names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Accounts: The list of The RDS accounts.
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
        :Property: dbInstanceId: The ID of the RDS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0592db2389438f88a69781fa2cbeb169837bd6e10e406281e17546e932ff0619)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4097358e6b8e592193f73aa14bbd663b9c1cb1f7f94216b4085277170f171f0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: The name of the RDS account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c56e06ae040832706ea6022b4961dce08de2255016096619cd6f06738921ce52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosAccountsProps",
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
        '''Properties for defining a ``DATASOURCE::RDS::Accounts``.

        :param db_instance_id: 
        :param account_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__011008303007edb6dfde9f809cd3a812c87c605e379629843ab22fea0a4cef44)
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
        :Property: dbInstanceId: The ID of the RDS instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: The name of the RDS account.
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


class RosDBInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDBInstances",
):
    '''A ROS template type:  ``DATASOURCE::RDS::DBInstances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::RDS::DBInstances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e022a870a09e1ed87c61bec5400b1612ae4d7fae0de68f51a2a463c4ce3a5d91)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3097560f91b88ec03a69e187429a221dbb89af49bd866b4a362b01eb9184e1f0)
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
        :Attribute: DBInstanceIds: The list of The RDS Database instance Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstances: The list of The RDS Database instances.
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
            type_hints = typing.get_type_hints(_typecheckingstub__5367f25e2aedbb0336fac2182ed4156421619539c3035bc1fafad880d43949a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="connectionMode")
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionMode: The connection mode of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionMode"))

    @connection_mode.setter
    def connection_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d079027b78a89496f9f89fc0b4b27c33c6f89208a6c3140492631c682aa951e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionMode", value)

    @builtins.property
    @jsii.member(jsii_name="connectionString")
    def connection_string(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionString: The endpoint of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionString"))

    @connection_string.setter
    def connection_string(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a844f993d2df02648e26aa83acc3537f0f05ab7aaeafdad8b81095b2175c9c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionString", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: The instance type of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdab30874814eb1eb740b3c336218a3e01d9c5d0333837dd74e6db833f4e2390)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f44e46dd912588b9b2994241da8f8ccd385c508167cee51c70542752e366fdeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStatus")
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStatus: The status of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStatus"))

    @db_instance_status.setter
    def db_instance_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d501744eefd3cfa3b59e5f4dd9dacd91962d79b532139effdfd3fa4ba17ce9be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStatus", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceType")
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceType: The role of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceType"))

    @db_instance_type.setter
    def db_instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b4b52d9cae4ab68ea90ab5670f188f9829cb8eab344cdb123c24753f8b10541)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05a74a6411efe579b26c20a4ab9589ebc0d792d78e289d9a2f9a7194d8e699cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostId")
    def dedicated_host_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostId"))

    @dedicated_host_id.setter
    def dedicated_host_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b911b3dd52dc6033892ab71cec030d2893259be3b0b4060260fd66f7e0022c8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostId", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engine: The database engine that is run by the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ae2577191f1791fea08f86432febe88ea8bba879c405e260ac5f6d9da8d598e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The version of the database engine that is run by the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcf468fcc929e462dde7cd30faafbab52d0e7ce648a44f4aab390603b8cb0405)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="expired")
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: expired: Specifies whether the instances have expired.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "expired"))

    @expired.setter
    def expired(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23753d99e221e47a1ae8d2b39dc27f09359d99c7ac0ef25c340299d1deeb5d4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expired", value)

    @builtins.property
    @jsii.member(jsii_name="instanceLevel")
    def instance_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceLevel"))

    @instance_level.setter
    def instance_level(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f60c462b246f9672e3416089378248998fdb2fa7740f1a7f513ff3f93b48ad6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceLevel", value)

    @builtins.property
    @jsii.member(jsii_name="instanceNetworkType")
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceNetworkType: The network type of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceNetworkType"))

    @instance_network_type.setter
    def instance_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a635dbb58762f4c0470968cb1d7a5481a4ff69c091f1405a92b1a20ff84c52c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d063a2a0198eb06eafaa0464b7f5429c15cac84369c18f77a009702844f25585)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="proxyId")
    def proxy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyId: The ID of the proxy mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyId"))

    @proxy_id.setter
    def proxy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6426bc878ad32cb5f153252be3da7c9e9c95cae8a2ecdaf02cc01a9fb3bfd00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the instances belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c71900502692688cb2547a2de956ca6c75c4a55ec0522152ac10d74405c4a228)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="searchKey")
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchKey: The keywords that are contained in the IDs or descriptions of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "searchKey"))

    @search_key.setter
    def search_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ceed69a17dbc386dac268fb1bb940b5437c5489dd6837c90d787044bc245150)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searchKey", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1465ed6f4cb30b1c985df03b04dd841d46dcab09f98987f0a04d861cff692b1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49ce89cb9bc52dd45b6db182350492de7a5b5e032c887618280cc5f01a2d362e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone to which the instances belong
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64ace5e86c8ed91232add743877e39979809fc6b1e3e5e7ee14302a8c63f12e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDBInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "connection_mode": "connectionMode",
        "connection_string": "connectionString",
        "db_instance_class": "dbInstanceClass",
        "db_instance_id": "dbInstanceId",
        "db_instance_status": "dbInstanceStatus",
        "db_instance_type": "dbInstanceType",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "dedicated_host_id": "dedicatedHostId",
        "engine": "engine",
        "engine_version": "engineVersion",
        "expired": "expired",
        "instance_level": "instanceLevel",
        "instance_network_type": "instanceNetworkType",
        "pay_type": "payType",
        "proxy_id": "proxyId",
        "resource_group_id": "resourceGroupId",
        "search_key": "searchKey",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosDBInstancesProps:
    def __init__(
        self,
        *,
        connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::RDS::DBInstances``.

        :param connection_mode: 
        :param connection_string: 
        :param db_instance_class: 
        :param db_instance_id: 
        :param db_instance_status: 
        :param db_instance_type: 
        :param dedicated_host_group_id: 
        :param dedicated_host_id: 
        :param engine: 
        :param engine_version: 
        :param expired: 
        :param instance_level: 
        :param instance_network_type: 
        :param pay_type: 
        :param proxy_id: 
        :param resource_group_id: 
        :param search_key: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3d6887a5625d0c58c5f817ea828aa5960a39d7d4249dc962ec387e8358d6928)
            check_type(argname="argument connection_mode", value=connection_mode, expected_type=type_hints["connection_mode"])
            check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_status", value=db_instance_status, expected_type=type_hints["db_instance_status"])
            check_type(argname="argument db_instance_type", value=db_instance_type, expected_type=type_hints["db_instance_type"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument dedicated_host_id", value=dedicated_host_id, expected_type=type_hints["dedicated_host_id"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument instance_level", value=instance_level, expected_type=type_hints["instance_level"])
            check_type(argname="argument instance_network_type", value=instance_network_type, expected_type=type_hints["instance_network_type"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument proxy_id", value=proxy_id, expected_type=type_hints["proxy_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument search_key", value=search_key, expected_type=type_hints["search_key"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if connection_mode is not None:
            self._values["connection_mode"] = connection_mode
        if connection_string is not None:
            self._values["connection_string"] = connection_string
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if db_instance_status is not None:
            self._values["db_instance_status"] = db_instance_status
        if db_instance_type is not None:
            self._values["db_instance_type"] = db_instance_type
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if dedicated_host_id is not None:
            self._values["dedicated_host_id"] = dedicated_host_id
        if engine is not None:
            self._values["engine"] = engine
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if instance_level is not None:
            self._values["instance_level"] = instance_level
        if instance_network_type is not None:
            self._values["instance_network_type"] = instance_network_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if proxy_id is not None:
            self._values["proxy_id"] = proxy_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if search_key is not None:
            self._values["search_key"] = search_key
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionMode: The connection mode of the instance.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionString: The endpoint of the instance.
        '''
        result = self._values.get("connection_string")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: The instance type of the instances.
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStatus: The status of the instances.
        '''
        result = self._values.get("db_instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceType: The role of the instances.
        '''
        result = self._values.get("db_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
        '''
        result = self._values.get("dedicated_host_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engine: The database engine that is run by the instances.
        '''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The version of the database engine that is run by the instances.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: expired: Specifies whether the instances have expired.
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
        '''
        result = self._values.get("instance_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceNetworkType: The network type of the instances.
        '''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method of the instances.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyId: The ID of the proxy mode.
        '''
        result = self._values.get("proxy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the instances belong.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchKey: The keywords that are contained in the IDs or descriptions of the instances.
        '''
        result = self._values.get("search_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone to which the instances belong
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDatabases(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDatabases",
):
    '''A ROS template type:  ``DATASOURCE::RDS::Databases``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatabasesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::RDS::Databases``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab3a11e1eb36bb6b73465acd4d7bcf4a9cb487b3f783b5753ae92b08867386b5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__191dd8c75186d709b2929d8bef4132040683c7c03edffed40f66a05c3cfdb944)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabases")
    def attr_databases(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Databases: The list of The RDS databases.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabases"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNames")
    def attr_db_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNames: The list of The RDS database names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNames"))

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
        :Property: dbInstanceId: The ID of the RDS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5965645b934aa2aadd4bd51b27c68859642268b80e444e8b0d3d83400302ae6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b557aaf4a7d0cabb2134aea0ea7e350805bbcd64fa190b176d8b599aefeb82db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbName: The names of the databases whose information you want to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3453762179e68dabce6bac907149c280996a25f0aedf281e1da065b5ebf2d1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)

    @builtins.property
    @jsii.member(jsii_name="dbStatus")
    def db_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbStatus: The status of the databases whose information you want to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbStatus"))

    @db_status.setter
    def db_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f80bbcec45a7b636c227e35a70d39845543c64fd1cc209026206619447e0d9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbStatus", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDatabasesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
        "db_status": "dbStatus",
    },
)
class RosDatabasesProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::RDS::Databases``.

        :param db_instance_id: 
        :param db_name: 
        :param db_status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e711614d7229c1a4d4a6bfdeb6a241fe84fda06a4c3e078b94e141814d36d926)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument db_status", value=db_status, expected_type=type_hints["db_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if db_name is not None:
            self._values["db_name"] = db_name
        if db_status is not None:
            self._values["db_status"] = db_status

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the RDS instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbName: The names of the databases whose information you want to query.
        '''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbStatus: The status of the databases whose information you want to query.
        '''
        result = self._values.get("db_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatabasesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZones(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosZones",
):
    '''A ROS template type:  ``DATASOURCE::RDS::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::RDS::Zones``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3342df28272fd8a764ed9d9b544a7be62e45230fd21efa8c3fc85d2aeee1a356)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8566c11e86edf3ca6989528188a36af823b298c297b6f5cf21507efade23419e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneIds: The list of zone IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Zones: The list of The Zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b42492fe13f9cbeca2e19f2f610ea458634180b2470c839c6628f4ec59203b19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: The database engine that is run by the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a3e87ff17ea4165492955b3bfd0f35197633a0785d39ea1b0aed8f116ca80a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The RDS edition of the instance. Valid values:
        Basic: RDS Basic Edition
        HighAvailability: RDS High-availability Edition
        AlwaysOn: RDS Cluster Edition
        Finance: RDS Enterprise Edition
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b9859c0a33d79e15201ec304796cc41fc96f7f9248d4d2ff57b0735ba5b2dd4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="commodityCode")
    def commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commodityCode: The commodity code of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "commodityCode"))

    @commodity_code.setter
    def commodity_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1276b1353642d142ce307a1399b8bf55389f6a505347acf8eebddc1b8583619)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commodityCode", value)

    @builtins.property
    @jsii.member(jsii_name="dispenseMode")
    def dispense_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
        1: returns the zones.
        0: does not return the zones.
        Default value: 0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dispenseMode"))

    @dispense_mode.setter
    def dispense_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10d754e75dc37827f4f3ba67cec91e626497c81c3ce79307d85e2e4cf4ce61f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dispenseMode", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The version of the database engine that is run by the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea47ef18721d13018258816edac0a907acad1a992644231ca041eeb05cc83f07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone in which the instance is located.
        If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e932e6e81de5b4949983d22014f7c72eefca39a7d3d41af502f426f8b7d96f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine": "engine",
        "category": "category",
        "commodity_code": "commodityCode",
        "dispense_mode": "dispenseMode",
        "engine_version": "engineVersion",
        "zone_id": "zoneId",
    },
)
class RosZonesProps:
    def __init__(
        self,
        *,
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dispense_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::RDS::Zones``.

        :param engine: 
        :param category: 
        :param commodity_code: 
        :param dispense_mode: 
        :param engine_version: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b9202487b6c0873ba88a5e22c5b60aea7172c1c5561c87fe03d9bd8ab645d51)
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument commodity_code", value=commodity_code, expected_type=type_hints["commodity_code"])
            check_type(argname="argument dispense_mode", value=dispense_mode, expected_type=type_hints["dispense_mode"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine": engine,
        }
        if category is not None:
            self._values["category"] = category
        if commodity_code is not None:
            self._values["commodity_code"] = commodity_code
        if dispense_mode is not None:
            self._values["dispense_mode"] = dispense_mode
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: The database engine that is run by the instance.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The RDS edition of the instance. Valid values:
        Basic: RDS Basic Edition
        HighAvailability: RDS High-availability Edition
        AlwaysOn: RDS Cluster Edition
        Finance: RDS Enterprise Edition
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commodityCode: The commodity code of the instance.
        '''
        result = self._values.get("commodity_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dispense_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
        1: returns the zones.
        0: does not return the zones.
        Default value: 0.
        '''
        result = self._values.get("dispense_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The version of the database engine that is run by the instance.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone in which the instance is located.
        If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Zones(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.Zones",
):
    '''A ROS resource type:  ``DATASOURCE::RDS::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::RDS::Zones``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69c3f2d88b2e6826e4c2a107f458c4c4f7e638f8c623d2a96da017fe0c4cca09)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneIds: The list of zone IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Zones: The list of The Zones.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.ZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine": "engine",
        "category": "category",
        "commodity_code": "commodityCode",
        "dispense_mode": "dispenseMode",
        "engine_version": "engineVersion",
        "zone_id": "zoneId",
    },
)
class ZonesProps:
    def __init__(
        self,
        *,
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dispense_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::RDS::Zones``.

        :param engine: Property engine: The database engine that is run by the instance.
        :param category: Property category: The RDS edition of the instance. Valid values: Basic: RDS Basic Edition HighAvailability: RDS High-availability Edition AlwaysOn: RDS Cluster Edition Finance: RDS Enterprise Edition
        :param commodity_code: Property commodityCode: The commodity code of the instance.
        :param dispense_mode: Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values: 1: returns the zones. 0: does not return the zones. Default value: 0.
        :param engine_version: Property engineVersion: The version of the database engine that is run by the instance.
        :param zone_id: Property zoneId: The ID of the zone in which the instance is located. If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b865630716bb670d189dc901ce5b87039c74ddd66ebcf848734a34a0b31ecec5)
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument commodity_code", value=commodity_code, expected_type=type_hints["commodity_code"])
            check_type(argname="argument dispense_mode", value=dispense_mode, expected_type=type_hints["dispense_mode"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine": engine,
        }
        if category is not None:
            self._values["category"] = category
        if commodity_code is not None:
            self._values["commodity_code"] = commodity_code
        if dispense_mode is not None:
            self._values["dispense_mode"] = dispense_mode
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: The database engine that is run by the instance.'''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The RDS edition of the instance.

        Valid values:
        Basic: RDS Basic Edition
        HighAvailability: RDS High-availability Edition
        AlwaysOn: RDS Cluster Edition
        Finance: RDS Enterprise Edition
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property commodityCode: The commodity code of the instance.'''
        result = self._values.get("commodity_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dispense_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.

        Valid values:
        1: returns the zones.
        0: does not return the zones.
        Default value: 0.
        '''
        result = self._values.get("dispense_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: The version of the database engine that is run by the instance.'''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone in which the instance is located.

        If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Accounts",
    "AccountsProps",
    "DBInstances",
    "DBInstancesProps",
    "Databases",
    "DatabasesProps",
    "RosAccounts",
    "RosAccountsProps",
    "RosDBInstances",
    "RosDBInstancesProps",
    "RosDatabases",
    "RosDatabasesProps",
    "RosZones",
    "RosZonesProps",
    "Zones",
    "ZonesProps",
]

publication.publish()

def _typecheckingstub__95dd19288d1fb07c44dfcdad60894614316ceb698204df838f1ca1215160d3c2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f962f50ad4f9cf1d7d6fd6cd87a930fc0f522df76f98c027c9df725124e1353(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f09ed459dce499ec4d06cf0fec5e00cfb28949ffc462caa87c87f5495e4d3e57(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DBInstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1d3e543666aca4b1c633978aec2f1fb5d2fc096ac0c13b6aa201864cb7e6490(
    *,
    connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__095546846bb6c1d643ffe24a42650823ccb30dade7d00fc1121edcef2cd54b60(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatabasesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c0ed223ef2a3b3a2ee99a78bf47098de3a785588cb6b0a6c713df0af35163bc(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6403a60a492995dae9e4c1213db98dc4125f9a185d74fc62e5de394874aee3f3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d68198122df3f2d8393cd194889e9059c0829c6cd929f193c88bc500bb42028(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0592db2389438f88a69781fa2cbeb169837bd6e10e406281e17546e932ff0619(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4097358e6b8e592193f73aa14bbd663b9c1cb1f7f94216b4085277170f171f0c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c56e06ae040832706ea6022b4961dce08de2255016096619cd6f06738921ce52(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__011008303007edb6dfde9f809cd3a812c87c605e379629843ab22fea0a4cef44(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e022a870a09e1ed87c61bec5400b1612ae4d7fae0de68f51a2a463c4ce3a5d91(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3097560f91b88ec03a69e187429a221dbb89af49bd866b4a362b01eb9184e1f0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5367f25e2aedbb0336fac2182ed4156421619539c3035bc1fafad880d43949a3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d079027b78a89496f9f89fc0b4b27c33c6f89208a6c3140492631c682aa951e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a844f993d2df02648e26aa83acc3537f0f05ab7aaeafdad8b81095b2175c9c6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdab30874814eb1eb740b3c336218a3e01d9c5d0333837dd74e6db833f4e2390(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f44e46dd912588b9b2994241da8f8ccd385c508167cee51c70542752e366fdeb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d501744eefd3cfa3b59e5f4dd9dacd91962d79b532139effdfd3fa4ba17ce9be(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b4b52d9cae4ab68ea90ab5670f188f9829cb8eab344cdb123c24753f8b10541(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05a74a6411efe579b26c20a4ab9589ebc0d792d78e289d9a2f9a7194d8e699cd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b911b3dd52dc6033892ab71cec030d2893259be3b0b4060260fd66f7e0022c8d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ae2577191f1791fea08f86432febe88ea8bba879c405e260ac5f6d9da8d598e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcf468fcc929e462dde7cd30faafbab52d0e7ce648a44f4aab390603b8cb0405(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23753d99e221e47a1ae8d2b39dc27f09359d99c7ac0ef25c340299d1deeb5d4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f60c462b246f9672e3416089378248998fdb2fa7740f1a7f513ff3f93b48ad6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a635dbb58762f4c0470968cb1d7a5481a4ff69c091f1405a92b1a20ff84c52c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d063a2a0198eb06eafaa0464b7f5429c15cac84369c18f77a009702844f25585(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6426bc878ad32cb5f153252be3da7c9e9c95cae8a2ecdaf02cc01a9fb3bfd00(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c71900502692688cb2547a2de956ca6c75c4a55ec0522152ac10d74405c4a228(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ceed69a17dbc386dac268fb1bb940b5437c5489dd6837c90d787044bc245150(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1465ed6f4cb30b1c985df03b04dd841d46dcab09f98987f0a04d861cff692b1e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49ce89cb9bc52dd45b6db182350492de7a5b5e032c887618280cc5f01a2d362e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64ace5e86c8ed91232add743877e39979809fc6b1e3e5e7ee14302a8c63f12e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3d6887a5625d0c58c5f817ea828aa5960a39d7d4249dc962ec387e8358d6928(
    *,
    connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab3a11e1eb36bb6b73465acd4d7bcf4a9cb487b3f783b5753ae92b08867386b5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatabasesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__191dd8c75186d709b2929d8bef4132040683c7c03edffed40f66a05c3cfdb944(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5965645b934aa2aadd4bd51b27c68859642268b80e444e8b0d3d83400302ae6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b557aaf4a7d0cabb2134aea0ea7e350805bbcd64fa190b176d8b599aefeb82db(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3453762179e68dabce6bac907149c280996a25f0aedf281e1da065b5ebf2d1e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f80bbcec45a7b636c227e35a70d39845543c64fd1cc209026206619447e0d9f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e711614d7229c1a4d4a6bfdeb6a241fe84fda06a4c3e078b94e141814d36d926(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3342df28272fd8a764ed9d9b544a7be62e45230fd21efa8c3fc85d2aeee1a356(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8566c11e86edf3ca6989528188a36af823b298c297b6f5cf21507efade23419e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b42492fe13f9cbeca2e19f2f610ea458634180b2470c839c6628f4ec59203b19(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a3e87ff17ea4165492955b3bfd0f35197633a0785d39ea1b0aed8f116ca80a2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b9859c0a33d79e15201ec304796cc41fc96f7f9248d4d2ff57b0735ba5b2dd4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1276b1353642d142ce307a1399b8bf55389f6a505347acf8eebddc1b8583619(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10d754e75dc37827f4f3ba67cec91e626497c81c3ce79307d85e2e4cf4ce61f0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea47ef18721d13018258816edac0a907acad1a992644231ca041eeb05cc83f07(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e932e6e81de5b4949983d22014f7c72eefca39a7d3d41af502f426f8b7d96f6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b9202487b6c0873ba88a5e22c5b60aea7172c1c5561c87fe03d9bd8ab645d51(
    *,
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dispense_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69c3f2d88b2e6826e4c2a107f458c4c4f7e638f8c623d2a96da017fe0c4cca09(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b865630716bb670d189dc901ce5b87039c74ddd66ebcf848734a34a0b31ecec5(
    *,
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dispense_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
