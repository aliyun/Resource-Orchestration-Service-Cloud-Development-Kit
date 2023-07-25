'''
## Aliyun ROS GRAPHDATABASE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as GRAPHDATABASE from '@alicloud/ros-cdk-graphdatabase';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Account(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.Account",
):
    '''A ROS resource type:  ``ALIYUN::GraphDatabase::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GraphDatabase::Account``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a135a8d3a0f6066401c76b7378f8e67e4c6e3b6c4d99e3f0485587bea536a5e0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountDescription: Account description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountName: Account name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountType: Account Type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "db_instance_id": "dbInstanceId",
        "account_description": "accountDescription",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GraphDatabase::Account``.

        :param account_name: Property accountName: Account name.
        :param account_password: Property accountPassword: Account password.
        :param db_instance_id: Property dbInstanceId: Instance Id.
        :param account_description: Property accountDescription: Account description.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60ed371ca48c9e3691df69180033348018130caf10856478e69f42fb1aa84fe9)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountName: Account name.'''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountPassword: Account password.'''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: Instance Id.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountDescription: Account description.'''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DbInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.DbInstance",
):
    '''A ROS resource type:  ``ALIYUN::GraphDatabase::DbInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DbInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GraphDatabase::DbInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bda358cf6c6b98d797dee2c8b8a8f8d56ceba9906ed06cd33aeef5ffa0befa3d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentMinorVersion")
    def attr_current_minor_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CurrentMinorVersion: The current kernel image version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurrentMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCategory")
    def attr_db_instance_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceCategory: The category of the db instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCpu")
    def attr_db_instance_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceDescription: According to the practical example or notes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIpArray")
    def attr_db_instance_ip_array(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIpArray"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceMemory")
    def attr_db_instance_memory(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceMemory: Instance memory, which is measured in MB.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceNetworkType")
    def attr_db_instance_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceNetworkType: The network type of the db instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorageType")
    def attr_db_instance_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceStorageType: Cloud Disk.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbInstanceType: The type of the db instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbNodeClass: The class of the db node.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbNodeCount: The count of the db node.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbNodeStorage: Instance storage space, which is measured in GB.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsSecurityGroupRelations")
    def attr_ecs_security_group_relations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EcsSecurityGroupRelations: Security group information array.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsSecurityGroupRelations"))

    @builtins.property
    @jsii.member(jsii_name="attrExpired")
    def attr_expired(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Expired: The expire status of the db instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExpireTime: The instance after it expires time for subscription instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestMinorVersion")
    def attr_latest_minor_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LatestMinorVersion: The latest kernel image version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LockMode: Instance lock state.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LockReason: An instance is locked the reason.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: The resource attribute field representing the paid type is desirable:.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: Application Port.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionString: The public connection string ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicPort: The public port ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyDbInstanceIds")
    def attr_read_only_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadOnlyDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: Resource Group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: resource Tag group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The vpc id of the db instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The vpc switch id of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: ZoneId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.DbInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_category": "dbInstanceCategory",
        "db_instance_network_type": "dbInstanceNetworkType",
        "db_instance_storage_type": "dbInstanceStorageType",
        "db_node_class": "dbNodeClass",
        "db_node_storage": "dbNodeStorage",
        "db_version": "dbVersion",
        "backup_set_id": "backupSetId",
        "create_type": "createType",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_ip_array": "dbInstanceIpArray",
        "ecs_security_group_relations": "ecsSecurityGroupRelations",
        "maintain_time": "maintainTime",
        "payment_type": "paymentType",
        "resource_group_id": "resourceGroupId",
        "restore_type": "restoreType",
        "source_db_instance_id": "sourceDbInstanceId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class DbInstanceProps:
    def __init__(
        self,
        *,
        db_instance_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        create_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_ip_array: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDbInstance.DBInstanceIPArrayProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ecs_security_group_relations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDbInstance.EcsSecurityGroupRelationsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDbInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GraphDatabase::DbInstance``.

        :param db_instance_category: Property dbInstanceCategory: The category of the db instance.
        :param db_instance_network_type: Property dbInstanceNetworkType: The network type of the db instance.
        :param db_instance_storage_type: Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd.
        :param db_node_class: Property dbNodeClass: The class of the db node. Valid values: gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
        :param db_node_storage: Property dbNodeStorage: Instance storage space, which is measured in GB. The minimum storage space is 20 GB and the step size is 10GB.
        :param db_version: Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
        :param backup_set_id: Property backupSetId: Backup set id.
        :param create_type: Property createType: The creation method. Valid values: - CreateDBInstance: Create instance - CloneDBInstance: Clone instance - CreateReadDBInstance: Create a read-only instance
        :param db_instance_description: Property dbInstanceDescription: According to the practical example or notes.
        :param db_instance_ip_array: Property dbInstanceIpArray: IP address whitelist for the instance group list.
        :param ecs_security_group_relations: Property ecsSecurityGroupRelations: Security group information array.
        :param maintain_time: Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
        :param payment_type: Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param restore_type: Property restoreType: Restore type.
        :param source_db_instance_id: Property sourceDbInstanceId: Source Instance Id.
        :param tags: Property tags: Tags of db instance.
        :param vpc_id: Property vpcId: The vpc id of the db instance.
        :param v_switch_id: Property vSwitchId: The vpc switch id of the resource.
        :param zone_id: Property zoneId: ZoneId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d309c92c57341817343c2c6c43e8c8bf98157ef7846c26aba78a53f658140ed)
            check_type(argname="argument db_instance_category", value=db_instance_category, expected_type=type_hints["db_instance_category"])
            check_type(argname="argument db_instance_network_type", value=db_instance_network_type, expected_type=type_hints["db_instance_network_type"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument db_node_class", value=db_node_class, expected_type=type_hints["db_node_class"])
            check_type(argname="argument db_node_storage", value=db_node_storage, expected_type=type_hints["db_node_storage"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument backup_set_id", value=backup_set_id, expected_type=type_hints["backup_set_id"])
            check_type(argname="argument create_type", value=create_type, expected_type=type_hints["create_type"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_ip_array", value=db_instance_ip_array, expected_type=type_hints["db_instance_ip_array"])
            check_type(argname="argument ecs_security_group_relations", value=ecs_security_group_relations, expected_type=type_hints["ecs_security_group_relations"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restore_type", value=restore_type, expected_type=type_hints["restore_type"])
            check_type(argname="argument source_db_instance_id", value=source_db_instance_id, expected_type=type_hints["source_db_instance_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_category": db_instance_category,
            "db_instance_network_type": db_instance_network_type,
            "db_instance_storage_type": db_instance_storage_type,
            "db_node_class": db_node_class,
            "db_node_storage": db_node_storage,
            "db_version": db_version,
        }
        if backup_set_id is not None:
            self._values["backup_set_id"] = backup_set_id
        if create_type is not None:
            self._values["create_type"] = create_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_ip_array is not None:
            self._values["db_instance_ip_array"] = db_instance_ip_array
        if ecs_security_group_relations is not None:
            self._values["ecs_security_group_relations"] = ecs_security_group_relations
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_type is not None:
            self._values["restore_type"] = restore_type
        if source_db_instance_id is not None:
            self._values["source_db_instance_id"] = source_db_instance_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceCategory: The category of the db instance.'''
        result = self._values.get("db_instance_category")
        assert result is not None, "Required property 'db_instance_category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceNetworkType: The network type of the db instance.'''
        result = self._values.get("db_instance_network_type")
        assert result is not None, "Required property 'db_instance_network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd.'''
        result = self._values.get("db_instance_storage_type")
        assert result is not None, "Required property 'db_instance_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeClass: The class of the db node.

        Valid values:
        gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
        '''
        result = self._values.get("db_node_class")
        assert result is not None, "Required property 'db_node_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeStorage: Instance storage space, which is measured in GB.

        The minimum storage space is 20 GB and the step size is 10GB.
        '''
        result = self._values.get("db_node_storage")
        assert result is not None, "Required property 'db_node_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.'''
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupSetId: Backup set id.'''
        result = self._values.get("backup_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def create_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property createType: The creation method.

        Valid values:

        - CreateDBInstance: Create instance
        - CloneDBInstance: Clone instance
        - CreateReadDBInstance: Create a read-only instance
        '''
        result = self._values.get("create_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: According to the practical example or notes.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_ip_array(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.DBInstanceIPArrayProperty"]]]]:
        '''Property dbInstanceIpArray: IP address whitelist for the instance group list.'''
        result = self._values.get("db_instance_ip_array")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.DBInstanceIPArrayProperty"]]]], result)

    @builtins.property
    def ecs_security_group_relations(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.EcsSecurityGroupRelationsProperty"]]]]:
        '''Property ecsSecurityGroupRelations: Security group information array.'''
        result = self._values.get("ecs_security_group_relations")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.EcsSecurityGroupRelationsProperty"]]]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.'''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restoreType: Restore type.'''
        result = self._values.get("restore_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceDbInstanceId: Source Instance Id.'''
        result = self._values.get("source_db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDbInstance.TagsProperty"]]:
        '''Property tags: Tags of db instance.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDbInstance.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The vpc id of the db instance.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vpc switch id of the resource.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: ZoneId.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::GraphDatabase::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GraphDatabase::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0132e2ad0b13f6342831a91ee7e9b712307729f4a06c827de9c37e2d6e9d52cf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__22764b228d858babd05414e1118436140c1b0e2f8a514d9becd0299808fe6dda)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountDescription: Account description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountName: Account name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountType: Account Type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountName: Account name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86d34997b886040eab8e93ff36acc6bec9ce163b23e98c9407f08b023c8444f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountPassword: Account password.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c938ce51afd74fec5615d462fad0d52932c6dd9be971d19bd3e0c734ba57b28f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__6d7a8a49de63eba2379a43f3c7db67ec337c30c0a1d514ca561a18e970ae0644)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9bea5271ea28f8edf6fc611037c958097785f09b1cd0f26341b0917a198c939)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountDescription: Account description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee82b03c16c7a4060c1f0b6f406da5ffc28bdecb484420582179013586c44619)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountDescription", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "db_instance_id": "dbInstanceId",
        "account_description": "accountDescription",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GraphDatabase::Account``.

        :param account_name: 
        :param account_password: 
        :param db_instance_id: 
        :param account_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90cdc7f9cb2f5a4ae545fba95fc668c7675ef26da45fbf61d1cab408de24deff)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountName: Account name.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountPassword: Account password.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountDescription: Account description.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.RosDbInstance",
):
    '''A ROS template type:  ``ALIYUN::GraphDatabase::DbInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GraphDatabase::DbInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f042c4e001940d34b78ef3327f24b9c1de1b80249e7f2f841b564037f04ca6c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7bf3553ef6a4645d093533d9c4bc84efc4acd7f9c725a83e991c12d30d0a41a8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentMinorVersion")
    def attr_current_minor_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CurrentMinorVersion: The current kernel image version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurrentMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCategory")
    def attr_db_instance_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceCategory: The category of the db instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCpu")
    def attr_db_instance_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceDescription: According to the practical example or notes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIpArray")
    def attr_db_instance_ip_array(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIpArray"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceMemory")
    def attr_db_instance_memory(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceMemory: Instance memory, which is measured in MB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceNetworkType")
    def attr_db_instance_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceNetworkType: The network type of the db instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorageType")
    def attr_db_instance_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceStorageType: Cloud Disk.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceType: The type of the db instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbNodeClass: The class of the db node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbNodeCount: The count of the db node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbNodeStorage: Instance storage space, which is measured in GB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbVersion: Kernel Version 1.0 is represented as gremlin,1.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsSecurityGroupRelations")
    def attr_ecs_security_group_relations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EcsSecurityGroupRelations: Security group information array.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsSecurityGroupRelations"))

    @builtins.property
    @jsii.member(jsii_name="attrExpired")
    def attr_expired(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Expired: The expire status of the db instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpireTime: The instance after it expires time for subscription instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestMinorVersion")
    def attr_latest_minor_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestMinorVersion: The latest kernel image version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LockMode: Instance lock state.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LockReason: An instance is locked the reason.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The resource attribute field representing the paid type is desirable:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Application Port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: The public connection string ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicPort: The public port ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyDbInstanceIds")
    def attr_read_only_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReadOnlyDbInstanceIds: The array of the readonly db instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadOnlyDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: Resource Group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: resource Tag group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The vpc id of the db instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The vpc switch id of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: ZoneId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbInstanceCategory")
    def db_instance_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceCategory: The category of the db instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceCategory"))

    @db_instance_category.setter
    def db_instance_category(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__237d999b2a605e091689504958e5479047d7118bc0e0a794241468fcf396599b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceCategory", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceNetworkType")
    def db_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceNetworkType: The network type of the db instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceNetworkType"))

    @db_instance_network_type.setter
    def db_instance_network_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bc793240b8c66c83b0df828c9f94b298e491728311a2693d59f23efd9190d65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbInstanceStorageType: Instance storage type, Valid values:

        - cloud_essd.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e5f1788945e92673eaa77292bcea26f99fb0f76cf70afe0ff1558a408d71a13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property
    @jsii.member(jsii_name="dbNodeClass")
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbNodeClass: The class of the db node. Valid values:
        gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbNodeClass"))

    @db_node_class.setter
    def db_node_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1395c5258a6c5a43fed490d10c8f5bf2a45ba9afded2e87190160ecd86b5e49f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbNodeStorage")
    def db_node_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeStorage: Instance storage space, which is measured in GB. The minimum storage space is 20 GB and the step size is 10GB.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbNodeStorage"))

    @db_node_storage.setter
    def db_node_storage(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__521c18b3a58e97e95ad760ac9eb64f363de71cb1741f6814f5afd34193c43d2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeStorage", value)

    @builtins.property
    @jsii.member(jsii_name="dbVersion")
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbVersion"))

    @db_version.setter
    def db_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16abe490b54e94f09fd1e94eb32acc15daf11c0923554b98cf0c04b0629db5cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b60de0dc4caa810a116464048cacad79c80619159e8724c860df18d286b458f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="backupSetId")
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupSetId: Backup set id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupSetId"))

    @backup_set_id.setter
    def backup_set_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a966be15bb81a5c036144e5351f03b43241646ff8c70ed1e1bbb46d9f25db137)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupSetId", value)

    @builtins.property
    @jsii.member(jsii_name="createType")
    def create_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        createType: The creation method. Valid values:

        - CreateDBInstance: Create instance
        - CloneDBInstance: Clone instance
        - CreateReadDBInstance: Create a read-only instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "createType"))

    @create_type.setter
    def create_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9bdd735a3cf1cdcb73deb60d73e847877daf5394fac5015e025ac67d5cea534)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "createType", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__5964543c62fe26b84ade170f4daf241b63588940a07544729ce2bf0f4ced877d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceIpArray")
    def db_instance_ip_array(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.DBInstanceIPArrayProperty"]]]]:
        '''
        :Property: dbInstanceIpArray: IP address whitelist for the instance group list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.DBInstanceIPArrayProperty"]]]], jsii.get(self, "dbInstanceIpArray"))

    @db_instance_ip_array.setter
    def db_instance_ip_array(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.DBInstanceIPArrayProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b7a09aa343b3d1eeb2bc14be3ad0b6e5e13f4128193d6e1ca489d73b04d4f4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceIpArray", value)

    @builtins.property
    @jsii.member(jsii_name="ecsSecurityGroupRelations")
    def ecs_security_group_relations(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.EcsSecurityGroupRelationsProperty"]]]]:
        '''
        :Property: ecsSecurityGroupRelations: Security group information array.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.EcsSecurityGroupRelationsProperty"]]]], jsii.get(self, "ecsSecurityGroupRelations"))

    @ecs_security_group_relations.setter
    def ecs_security_group_relations(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbInstance.EcsSecurityGroupRelationsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b61c6036b75185ee969810276271911fdb0bd216b9d3383650619d4358653cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsSecurityGroupRelations", value)

    @builtins.property
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maintainTime"))

    @maintain_time.setter
    def maintain_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bcba6c1dbedabca61dc1b75ed8cbcc62cc66c26edc889e7db653461b38b817f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maintainTime", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        paymentType: The resource attribute field representing the paid type is desirable:

        - PayAsYouGo: Postpaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc1298eaf19393f1b2cc67f426607ce6d8aab2c3e29c89667a55673111998524)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af834a82815482d86348f76a2160c603fd92b70d83c0e2f8a18fe4e7b25d7b65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="restoreType")
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restoreType: Restore type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restoreType"))

    @restore_type.setter
    def restore_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29e8af6bb4477a2442ffd36b5d1f641034ca24e56c91adb3a21c8e354b5dbf29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreType", value)

    @builtins.property
    @jsii.member(jsii_name="sourceDbInstanceId")
    def source_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceDbInstanceId: Source Instance Id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceDbInstanceId"))

    @source_db_instance_id.setter
    def source_db_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__116f09bf51575ead4f177b068f1762b7dfbb512a76f24b74192421951c9280ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceDbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDbInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags of db instance.
        '''
        return typing.cast(typing.Optional[typing.List["RosDbInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDbInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6fa70a74ed814662c73f45e67a803173f4639e1e296fb5b3df4bbb350d137c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The vpc id of the db instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c8cc0543d1a2e5daf6fc89a09a6044765d95cd957bc29fd9bb3f9e522a61c26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vpc switch id of the resource.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__260418c71d9e868079197f27db1d1dc06939cb4172cb80d081283022bd55d58f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: ZoneId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2884909ce1005a4af52d8cb5a62c115a31b0d7783a4eb6f7b593e418ec8e9abd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-graphdatabase.RosDbInstance.DBInstanceIPArrayProperty",
        jsii_struct_bases=[],
        name_mapping={
            "security_ips": "securityIps",
            "db_instance_ip_array_name": "dbInstanceIpArrayName",
        },
    )
    class DBInstanceIPArrayProperty:
        def __init__(
            self,
            *,
            security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            db_instance_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param security_ips: 
            :param db_instance_ip_array_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e8a27fe3934cd390007a553e9ec510d3b43e057b515e0e03d1e7bd2d785e28bb)
                check_type(argname="argument security_ips", value=security_ips, expected_type=type_hints["security_ips"])
                check_type(argname="argument db_instance_ip_array_name", value=db_instance_ip_array_name, expected_type=type_hints["db_instance_ip_array_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "security_ips": security_ips,
            }
            if db_instance_ip_array_name is not None:
                self._values["db_instance_ip_array_name"] = db_instance_ip_array_name

        @builtins.property
        def security_ips(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: securityIps: IP address whitelist addresses in the IP address list, and a maximum of 1000 comma-separated format is as follows: 0.0.0.0/0 and 10.23.12.24(IP) or 10.23.12.24/24(CIDR mode, CIDR (Classless Inter-Domain Routing)/24 represents the address prefixes in the length of the range [1,32]).
            '''
            result = self._values.get("security_ips")
            assert result is not None, "Required property 'security_ips' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def db_instance_ip_array_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dbInstanceIpArrayName: IP address whitelist group name.
            '''
            result = self._values.get("db_instance_ip_array_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DBInstanceIPArrayProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-graphdatabase.RosDbInstance.EcsSecurityGroupRelationsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "security_group_id": "securityGroupId",
            "network_type": "networkType",
            "region_id": "regionId",
        },
    )
    class EcsSecurityGroupRelationsProperty:
        def __init__(
            self,
            *,
            security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param security_group_id: 
            :param network_type: 
            :param region_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__63cc1056c8bb37fbb07409e31875492f1611e049633f6e6221fafdb4c28c0e6f)
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
                check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "security_group_id": security_group_id,
            }
            if network_type is not None:
                self._values["network_type"] = network_type
            if region_id is not None:
                self._values["region_id"] = region_id

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: securityGroupId: Security group Id.
            '''
            result = self._values.get("security_group_id")
            assert result is not None, "Required property 'security_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def network_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: networkType: Network type.
            '''
            result = self._values.get("network_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: regionId: Region.
            '''
            result = self._values.get("region_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EcsSecurityGroupRelationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-graphdatabase.RosDbInstance.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2b3f8b59b2a00f1c7e76c801f21bc0ad16836bf18aa95f95e1cb02fa5b5f3bcd)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.RosDbInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_category": "dbInstanceCategory",
        "db_instance_network_type": "dbInstanceNetworkType",
        "db_instance_storage_type": "dbInstanceStorageType",
        "db_node_class": "dbNodeClass",
        "db_node_storage": "dbNodeStorage",
        "db_version": "dbVersion",
        "backup_set_id": "backupSetId",
        "create_type": "createType",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_ip_array": "dbInstanceIpArray",
        "ecs_security_group_relations": "ecsSecurityGroupRelations",
        "maintain_time": "maintainTime",
        "payment_type": "paymentType",
        "resource_group_id": "resourceGroupId",
        "restore_type": "restoreType",
        "source_db_instance_id": "sourceDbInstanceId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosDbInstanceProps:
    def __init__(
        self,
        *,
        db_instance_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        create_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_ip_array: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbInstance.DBInstanceIPArrayProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ecs_security_group_relations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbInstance.EcsSecurityGroupRelationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDbInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GraphDatabase::DbInstance``.

        :param db_instance_category: 
        :param db_instance_network_type: 
        :param db_instance_storage_type: 
        :param db_node_class: 
        :param db_node_storage: 
        :param db_version: 
        :param backup_set_id: 
        :param create_type: 
        :param db_instance_description: 
        :param db_instance_ip_array: 
        :param ecs_security_group_relations: 
        :param maintain_time: 
        :param payment_type: 
        :param resource_group_id: 
        :param restore_type: 
        :param source_db_instance_id: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__633f4d728a4b1f60f3a59d9e81b84af92da44ad5de6857494b7b8c272f2f1caf)
            check_type(argname="argument db_instance_category", value=db_instance_category, expected_type=type_hints["db_instance_category"])
            check_type(argname="argument db_instance_network_type", value=db_instance_network_type, expected_type=type_hints["db_instance_network_type"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument db_node_class", value=db_node_class, expected_type=type_hints["db_node_class"])
            check_type(argname="argument db_node_storage", value=db_node_storage, expected_type=type_hints["db_node_storage"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument backup_set_id", value=backup_set_id, expected_type=type_hints["backup_set_id"])
            check_type(argname="argument create_type", value=create_type, expected_type=type_hints["create_type"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_ip_array", value=db_instance_ip_array, expected_type=type_hints["db_instance_ip_array"])
            check_type(argname="argument ecs_security_group_relations", value=ecs_security_group_relations, expected_type=type_hints["ecs_security_group_relations"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restore_type", value=restore_type, expected_type=type_hints["restore_type"])
            check_type(argname="argument source_db_instance_id", value=source_db_instance_id, expected_type=type_hints["source_db_instance_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_category": db_instance_category,
            "db_instance_network_type": db_instance_network_type,
            "db_instance_storage_type": db_instance_storage_type,
            "db_node_class": db_node_class,
            "db_node_storage": db_node_storage,
            "db_version": db_version,
        }
        if backup_set_id is not None:
            self._values["backup_set_id"] = backup_set_id
        if create_type is not None:
            self._values["create_type"] = create_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_ip_array is not None:
            self._values["db_instance_ip_array"] = db_instance_ip_array
        if ecs_security_group_relations is not None:
            self._values["ecs_security_group_relations"] = ecs_security_group_relations
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_type is not None:
            self._values["restore_type"] = restore_type
        if source_db_instance_id is not None:
            self._values["source_db_instance_id"] = source_db_instance_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceCategory: The category of the db instance.
        '''
        result = self._values.get("db_instance_category")
        assert result is not None, "Required property 'db_instance_category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceNetworkType: The network type of the db instance.
        '''
        result = self._values.get("db_instance_network_type")
        assert result is not None, "Required property 'db_instance_network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbInstanceStorageType: Instance storage type, Valid values:

        - cloud_essd.
        '''
        result = self._values.get("db_instance_storage_type")
        assert result is not None, "Required property 'db_instance_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbNodeClass: The class of the db node. Valid values:
        gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
        '''
        result = self._values.get("db_node_class")
        assert result is not None, "Required property 'db_node_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeStorage: Instance storage space, which is measured in GB. The minimum storage space is 20 GB and the step size is 10GB.
        '''
        result = self._values.get("db_node_storage")
        assert result is not None, "Required property 'db_node_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
        '''
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupSetId: Backup set id.
        '''
        result = self._values.get("backup_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def create_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        createType: The creation method. Valid values:

        - CreateDBInstance: Create instance
        - CloneDBInstance: Clone instance
        - CreateReadDBInstance: Create a read-only instance
        '''
        result = self._values.get("create_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def db_instance_ip_array(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbInstance.DBInstanceIPArrayProperty]]]]:
        '''
        :Property: dbInstanceIpArray: IP address whitelist for the instance group list.
        '''
        result = self._values.get("db_instance_ip_array")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbInstance.DBInstanceIPArrayProperty]]]], result)

    @builtins.property
    def ecs_security_group_relations(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbInstance.EcsSecurityGroupRelationsProperty]]]]:
        '''
        :Property: ecsSecurityGroupRelations: Security group information array.
        '''
        result = self._values.get("ecs_security_group_relations")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbInstance.EcsSecurityGroupRelationsProperty]]]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        paymentType: The resource attribute field representing the paid type is desirable:

        - PayAsYouGo: Postpaid.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restoreType: Restore type.
        '''
        result = self._values.get("restore_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceDbInstanceId: Source Instance Id.
        '''
        result = self._values.get("source_db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDbInstance.TagsProperty]]:
        '''
        :Property: tags: Tags of db instance.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDbInstance.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The vpc id of the db instance.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vpc switch id of the resource.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: ZoneId.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Account",
    "AccountProps",
    "DbInstance",
    "DbInstanceProps",
    "RosAccount",
    "RosAccountProps",
    "RosDbInstance",
    "RosDbInstanceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__a135a8d3a0f6066401c76b7378f8e67e4c6e3b6c4d99e3f0485587bea536a5e0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60ed371ca48c9e3691df69180033348018130caf10856478e69f42fb1aa84fe9(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bda358cf6c6b98d797dee2c8b8a8f8d56ceba9906ed06cd33aeef5ffa0befa3d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DbInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d309c92c57341817343c2c6c43e8c8bf98157ef7846c26aba78a53f658140ed(
    *,
    db_instance_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    create_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_ip_array: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbInstance.DBInstanceIPArrayProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ecs_security_group_relations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbInstance.EcsSecurityGroupRelationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDbInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0132e2ad0b13f6342831a91ee7e9b712307729f4a06c827de9c37e2d6e9d52cf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22764b228d858babd05414e1118436140c1b0e2f8a514d9becd0299808fe6dda(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86d34997b886040eab8e93ff36acc6bec9ce163b23e98c9407f08b023c8444f7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c938ce51afd74fec5615d462fad0d52932c6dd9be971d19bd3e0c734ba57b28f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d7a8a49de63eba2379a43f3c7db67ec337c30c0a1d514ca561a18e970ae0644(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9bea5271ea28f8edf6fc611037c958097785f09b1cd0f26341b0917a198c939(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee82b03c16c7a4060c1f0b6f406da5ffc28bdecb484420582179013586c44619(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90cdc7f9cb2f5a4ae545fba95fc668c7675ef26da45fbf61d1cab408de24deff(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f042c4e001940d34b78ef3327f24b9c1de1b80249e7f2f841b564037f04ca6c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDbInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bf3553ef6a4645d093533d9c4bc84efc4acd7f9c725a83e991c12d30d0a41a8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__237d999b2a605e091689504958e5479047d7118bc0e0a794241468fcf396599b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bc793240b8c66c83b0df828c9f94b298e491728311a2693d59f23efd9190d65(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e5f1788945e92673eaa77292bcea26f99fb0f76cf70afe0ff1558a408d71a13(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1395c5258a6c5a43fed490d10c8f5bf2a45ba9afded2e87190160ecd86b5e49f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__521c18b3a58e97e95ad760ac9eb64f363de71cb1741f6814f5afd34193c43d2e(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16abe490b54e94f09fd1e94eb32acc15daf11c0923554b98cf0c04b0629db5cf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b60de0dc4caa810a116464048cacad79c80619159e8724c860df18d286b458f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a966be15bb81a5c036144e5351f03b43241646ff8c70ed1e1bbb46d9f25db137(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9bdd735a3cf1cdcb73deb60d73e847877daf5394fac5015e025ac67d5cea534(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5964543c62fe26b84ade170f4daf241b63588940a07544729ce2bf0f4ced877d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b7a09aa343b3d1eeb2bc14be3ad0b6e5e13f4128193d6e1ca489d73b04d4f4a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbInstance.DBInstanceIPArrayProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b61c6036b75185ee969810276271911fdb0bd216b9d3383650619d4358653cf(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbInstance.EcsSecurityGroupRelationsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bcba6c1dbedabca61dc1b75ed8cbcc62cc66c26edc889e7db653461b38b817f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc1298eaf19393f1b2cc67f426607ce6d8aab2c3e29c89667a55673111998524(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af834a82815482d86348f76a2160c603fd92b70d83c0e2f8a18fe4e7b25d7b65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29e8af6bb4477a2442ffd36b5d1f641034ca24e56c91adb3a21c8e354b5dbf29(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__116f09bf51575ead4f177b068f1762b7dfbb512a76f24b74192421951c9280ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6fa70a74ed814662c73f45e67a803173f4639e1e296fb5b3df4bbb350d137c2(
    value: typing.Optional[typing.List[RosDbInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c8cc0543d1a2e5daf6fc89a09a6044765d95cd957bc29fd9bb3f9e522a61c26(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__260418c71d9e868079197f27db1d1dc06939cb4172cb80d081283022bd55d58f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2884909ce1005a4af52d8cb5a62c115a31b0d7783a4eb6f7b593e418ec8e9abd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8a27fe3934cd390007a553e9ec510d3b43e057b515e0e03d1e7bd2d785e28bb(
    *,
    security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63cc1056c8bb37fbb07409e31875492f1611e049633f6e6221fafdb4c28c0e6f(
    *,
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b3f8b59b2a00f1c7e76c801f21bc0ad16836bf18aa95f95e1cb02fa5b5f3bcd(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__633f4d728a4b1f60f3a59d9e81b84af92da44ad5de6857494b7b8c272f2f1caf(
    *,
    db_instance_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    create_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_ip_array: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbInstance.DBInstanceIPArrayProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ecs_security_group_relations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbInstance.EcsSecurityGroupRelationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDbInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
