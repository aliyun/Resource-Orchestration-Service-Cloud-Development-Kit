'''
## Aliyun ROS RDS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as RDS from '@alicloud/ros-cdk-rds';
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

from ._jsii import *

import ros_cdk_core


class ADInfo(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.ADInfo",
):
    '''A ROS resource type:  ``ALIYUN::RDS::ADInfo``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ADInfoProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::ADInfo``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAddns")
    def attr_addns(self) -> ros_cdk_core.IResolvable:
        '''Attribute ADDNS: Active directory domain name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddns"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.ADInfoProps",
    jsii_struct_bases=[],
    name_mapping={
        "ad_account_name": "adAccountName",
        "addns": "addns",
        "ad_password": "adPassword",
        "ad_server_ip_address": "adServerIpAddress",
        "db_instance_id": "dbInstanceId",
    },
)
class ADInfoProps:
    def __init__(
        self,
        *,
        ad_account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        addns: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ad_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ad_server_ip_address: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::ADInfo``.

        :param ad_account_name: Property adAccountName: Domain account name.
        :param addns: Property addns: Active directory domain name.
        :param ad_password: Property adPassword: Domain password.
        :param ad_server_ip_address: Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ad_account_name": ad_account_name,
            "addns": addns,
            "ad_password": ad_password,
            "ad_server_ip_address": ad_server_ip_address,
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def ad_account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property adAccountName: Domain account name.'''
        result = self._values.get("ad_account_name")
        assert result is not None, "Required property 'ad_account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def addns(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property addns: Active directory domain name.'''
        result = self._values.get("addns")
        assert result is not None, "Required property 'addns' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ad_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property adPassword: Domain password.'''
        result = self._values.get("ad_password")
        assert result is not None, "Required property 'ad_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ad_server_ip_address(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.'''
        result = self._values.get("ad_server_ip_address")
        assert result is not None, "Required property 'ad_server_ip_address' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ADInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Account(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.Account",
):
    '''A ROS resource type:  ``ALIYUN::RDS::Account``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::Account``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccountName: Account name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountName"))


class AccountPrivilege(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.AccountPrivilege",
):
    '''A ROS resource type:  ``ALIYUN::RDS::AccountPrivilege``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountPrivilegeProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::AccountPrivilege``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.AccountPrivilegeProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_privilege": "accountPrivilege",
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
    },
)
class AccountPrivilegeProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_privilege: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::AccountPrivilege``.

        :param account_name: Property accountName: RDS account name.
        :param account_privilege: Property accountPrivilege: RDS account privilege.
        :param db_instance_id: Property dbInstanceId: RDS instance ID.
        :param db_name: Property dbName: RDS database name.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountName: RDS account name.'''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_privilege(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountPrivilege: RDS account privilege.'''
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: RDS instance ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbName: RDS database name.'''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountPrivilegeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "db_instance_id": "dbInstanceId",
        "account_description": "accountDescription",
        "account_type": "accountType",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::Account``.

        :param account_name: Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter; Consist of lower-case letters, digits, and underscores (_); Contain no more than 16 characters. For other invalid characters, see Forbidden keywords table.
        :param account_password: Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        :param db_instance_id: Property dbInstanceId: RDS instance ID.
        :param account_description: Property accountDescription: Account remarks. It cannot begin with http:// or https://. It must start with a Chinese character or English letter. It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits. The length may be 2-256 characters.
        :param account_type: Property accountType: Privilege type of account. Normal: Common privilege. Super: High privilege. And the default value is Normal. This parameter is valid for MySQL 5.5/5.6 only. MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description
        if account_type is not None:
            self._values["account_type"] = account_type

    @builtins.property
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter;

        Consist of lower-case letters, digits, and underscores (_);
        Contain no more than 16 characters.
        For other invalid characters, see Forbidden keywords table.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountPassword: The account password for the database instance.

        It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: RDS instance ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accountDescription: Account remarks.

        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accountType: Privilege type of account.

        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstance",
):
    '''A ROS resource type:  ``ALIYUN::RDS::DBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The instance id of created database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerConnectionString: DB instance connection url by Intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerIPAddress: IP Address for created DB instance of Intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerPort: Intranet port of created DB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionString: DB instance connection url by Internet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicIPAddress: IP Address for created DB instance of Internet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicPort: Internet port of created DB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicPort"))


class DBInstanceClone(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceClone",
):
    '''A ROS resource type:  ``ALIYUN::RDS::DBInstanceClone``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceCloneProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceClone``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The instance id of created database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerConnectionString: DB instance connection url by Intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerIPAddress: IP Address for created DB instance of Intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerPort: Intranet port of created DB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionString: DB instance connection url by Internet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicIPAddress: IP Address for created DB instance of Internet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicPort: Internet port of created DB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceCloneProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "pay_type": "payType",
        "allocate_public_connection": "allocatePublicConnection",
        "backup_id": "backupId",
        "backup_retention_period": "backupRetentionPeriod",
        "backup_type": "backupType",
        "category": "category",
        "connection_string_prefix": "connectionStringPrefix",
        "connection_string_type": "connectionStringType",
        "db_instance_class": "dbInstanceClass",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_storage": "dbInstanceStorage",
        "db_instance_storage_type": "dbInstanceStorageType",
        "db_mappings": "dbMappings",
        "db_names": "dbNames",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "instance_network_type": "instanceNetworkType",
        "maintain_time": "maintainTime",
        "master_username": "masterUsername",
        "master_user_password": "masterUserPassword",
        "master_user_type": "masterUserType",
        "period": "period",
        "period_type": "periodType",
        "port": "port",
        "preferred_backup_period": "preferredBackupPeriod",
        "preferred_backup_time": "preferredBackupTime",
        "private_ip_address": "privateIpAddress",
        "restore_table": "restoreTable",
        "restore_time": "restoreTime",
        "security_group_id": "securityGroupId",
        "security_ip_list": "securityIpList",
        "slave_zone_ids": "slaveZoneIds",
        "sql_collector_status": "sqlCollectorStatus",
        "ssl_setting": "sslSetting",
        "table_meta": "tableMeta",
        "tags": "tags",
        "timeout_in_minutes": "timeoutInMinutes",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class DBInstanceCloneProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pay_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        backup_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_storage: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]] = None,
        db_names: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_table: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slave_zone_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        table_meta: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceClone``.

        :param db_instance_id: Property dbInstanceId: Instance id.
        :param pay_type: Property payType: The charge type of created instance.
        :param allocate_public_connection: Property allocatePublicConnection: If true, allocate public connection automate.
        :param backup_id: Property backupId: The ID of the backup set that you want to use. You can call the DescribeBackups operation to query the most recent backup set list. Note You must specify at least one of the BackupId and RestoreTime parameters.
        :param backup_retention_period: Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        :param backup_type: Property backupType: The type of backup used by the new instance. Valid values: - FullBackup: full backup - IncrementalBackup: incremental backup
        :param category: Property category: The edition of the instance. Valid values: Basic: specifies to use the Basic Edition. HighAvailability: specifies to use the High-availability Edition. AlwaysOn: specifies to use the Cluster Edition. Finance: specifies to use the Enterprise Edition.
        :param connection_string_prefix: Property connectionStringPrefix: The prefix of the endpoint. Only the prefix of the CurrentConnectionString parameter value can be modified. The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        :param connection_string_type: Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
        :param db_instance_class: Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        :param db_instance_description: Property dbInstanceDescription: Description of created database instance.
        :param db_instance_storage: Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        :param db_instance_storage_type: Property dbInstanceStorageType: The storage type of the instance. Valid values: local_ssd: specifies to use local SSDs. This is the recommended storage type. cloud_ssd: specifies to use standard SSDs. cloud_essd: enhanced SSD of performance level (PL)1. cloud_essd2: enhanced SSD of PL2. cloud_essd3: enhanced SSD of PL3.
        :param db_mappings: Property dbMappings: Database mappings to attach to db instance.
        :param db_names: Property dbNames: The names of the databases that you want to create on the new instance.
        :param dedicated_host_group_id: Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        :param instance_network_type: Property instanceNetworkType: The network type of the new instance. Valid values: - VPC - Classic The default value is the network type of the original instance.
        :param maintain_time: Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        :param master_username: Property masterUsername: The master user name for the database instance.
        :param master_user_password: Property masterUserPassword: The master password for the database instance.
        :param master_user_type: Property masterUserType: Privilege type of account. Normal: Common privilege. Super: High privilege. Sysadmin: Super privileges (SA) (only supported by SQL Server) The default value is Normal.
        :param period: Property period: The subscription duration. Valid values: When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60. When PeriodType is Year, it could be from 1 to 5.
        :param period_type: Property periodType: Charge period for created instances.
        :param port: Property port: The port of the database service.
        :param preferred_backup_period: Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        :param preferred_backup_time: Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        :param private_ip_address: Property privateIpAddress: The private ip for created instance.
        :param restore_table: Property restoreTable: Specifies whether to restore specific databases and tables. The value 1 specifies to restore specific databases and tables. If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        :param restore_time: Property restoreTime: The point in time to which you want to restore the data of the original instance. The point in time must fall within the specified log backup retention period. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
        :param security_group_id: Property securityGroupId: The ID of the ECS security groups. Each RDS instance can be associated with up to three ECS security groups. You must separate them with commas (,). To delete an ECS Security group, leave this parameter empty.
        :param security_ip_list: Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        :param slave_zone_ids: Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        :param sql_collector_status: Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. Valid values:Enable | Disabled.
        :param ssl_setting: Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values: Disabled: Disable SSL EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true. EnabledForInnerConnection: Private connection address will be protected by the SSL certificate. Default value is Disabled.
        :param table_meta: Property tableMeta: The information about the databases and tables that you want to restore.
        :param tags: Property tags: The tags of an instance. You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}. At most 5 tags can be specified. Key It can be up to 64 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Cannot be a null string. Value It can be up to 128 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Can be a null string.
        :param timeout_in_minutes: Property timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        :param vpc_id: Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
        :param v_switch_id: Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        :param zone_id: Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "pay_type": pay_type,
        }
        if allocate_public_connection is not None:
            self._values["allocate_public_connection"] = allocate_public_connection
        if backup_id is not None:
            self._values["backup_id"] = backup_id
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if backup_type is not None:
            self._values["backup_type"] = backup_type
        if category is not None:
            self._values["category"] = category
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if connection_string_type is not None:
            self._values["connection_string_type"] = connection_string_type
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_storage is not None:
            self._values["db_instance_storage"] = db_instance_storage
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if db_mappings is not None:
            self._values["db_mappings"] = db_mappings
        if db_names is not None:
            self._values["db_names"] = db_names
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if instance_network_type is not None:
            self._values["instance_network_type"] = instance_network_type
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if master_username is not None:
            self._values["master_username"] = master_username
        if master_user_password is not None:
            self._values["master_user_password"] = master_user_password
        if master_user_type is not None:
            self._values["master_user_type"] = master_user_type
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if port is not None:
            self._values["port"] = port
        if preferred_backup_period is not None:
            self._values["preferred_backup_period"] = preferred_backup_period
        if preferred_backup_time is not None:
            self._values["preferred_backup_time"] = preferred_backup_time
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if restore_table is not None:
            self._values["restore_table"] = restore_table
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if slave_zone_ids is not None:
            self._values["slave_zone_ids"] = slave_zone_ids
        if sql_collector_status is not None:
            self._values["sql_collector_status"] = sql_collector_status
        if ssl_setting is not None:
            self._values["ssl_setting"] = ssl_setting
        if table_meta is not None:
            self._values["table_meta"] = table_meta
        if tags is not None:
            self._values["tags"] = tags
        if timeout_in_minutes is not None:
            self._values["timeout_in_minutes"] = timeout_in_minutes
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: Instance id.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property payType: The charge type of created instance.'''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property allocatePublicConnection: If true, allocate public connection automate.'''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backupId: The ID of the backup set that you want to use.

        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        '''
        result = self._values.get("backup_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property backupRetentionPeriod: The retention period of the data backup.

        Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backupType: The type of backup used by the new instance.

        Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        '''
        result = self._values.get("backup_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property category: The edition of the instance.

        Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionStringPrefix: The prefix of the endpoint.

        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.'''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceClass: Database instance type.

        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceStorage: Database instance storage size.

        mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceStorageType: The storage type of the instance.

        Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]]:
        '''Property dbMappings: Database mappings to attach to db instance.'''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]], result)

    @builtins.property
    def db_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbNames: The names of the databases that you want to create on the new instance.'''
        result = self._values.get("db_names")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceNetworkType: The network type of the new instance.

        Valid values:

        - VPC
        - Classic
          The default value is the network type of the original instance.
        '''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property maintainTime: The period during which the maintenance performs.

        The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUsername: The master user name for the database instance.'''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUserPassword: The master password for the database instance.'''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUserType: Privilege type of account.

        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The subscription duration.

        Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodType: Charge period for created instances.'''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property port: The port of the database service.'''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property preferredBackupPeriod: The backup period.

        Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property preferredBackupTime: The time when the backup task is performed.

        Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property privateIpAddress: The private ip for created instance.'''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property restoreTable: Specifies whether to restore specific databases and tables.

        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        '''
        result = self._values.get("restore_table")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property restoreTime: The point in time to which you want to restore the data of the original instance.

        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: The ID of the ECS security groups.

        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.'''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.

        Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.

        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.

        Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]]:
        '''Property tableMeta: The information about the databases and tables that you want to restore.'''
        result = self._values.get("table_meta")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: The tags of an instance.

        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property timeoutInMinutes: The timeout period for creating the clone instance resource.

        Unit: Minute. Default: 120.
        '''
        result = self._values.get("timeout_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The VPC id of created database instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The vSwitch id of created instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: selected zone to create database instance.

        You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceCloneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstanceParameterGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceParameterGroup",
):
    '''A ROS resource type:  ``ALIYUN::RDS::DBInstanceParameterGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceParameterGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceParameterGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceParameterGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "parameters": "parameters",
        "forcerestart": "forcerestart",
    },
)
class DBInstanceParameterGroupProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        parameters: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]],
        forcerestart: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param db_instance_id: Property dbInstanceId: Database InstanceId to update properties.
        :param parameters: Property parameters: Parameters to update for selected database instance.
        :param forcerestart: Property forcerestart: whether restart database instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "parameters": parameters,
        }
        if forcerestart is not None:
            self._values["forcerestart"] = forcerestart

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: Database InstanceId to update properties.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]]:
        '''Property parameters: Parameters to update for selected database instance.'''
        result = self._values.get("parameters")
        assert result is not None, "Required property 'parameters' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]], result)

    @builtins.property
    def forcerestart(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property forcerestart: whether restart database instance.'''
        result = self._values.get("forcerestart")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceParameterGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_storage": "dbInstanceStorage",
        "engine": "engine",
        "engine_version": "engineVersion",
        "security_ip_list": "securityIpList",
        "allocate_public_connection": "allocatePublicConnection",
        "archive_backup_keep_count": "archiveBackupKeepCount",
        "archive_backup_keep_policy": "archiveBackupKeepPolicy",
        "archive_backup_retention_period": "archiveBackupRetentionPeriod",
        "auto_renew": "autoRenew",
        "back_up_category": "backUpCategory",
        "backup_policy_mode": "backupPolicyMode",
        "backup_retention_period": "backupRetentionPeriod",
        "category": "category",
        "compress_type": "compressType",
        "connection_mode": "connectionMode",
        "connection_string_prefix": "connectionStringPrefix",
        "connection_string_type": "connectionStringType",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_net_type": "dbInstanceNetType",
        "db_instance_storage_type": "dbInstanceStorageType",
        "db_is_ignore_case": "dbIsIgnoreCase",
        "db_mappings": "dbMappings",
        "db_param_group_id": "dbParamGroupId",
        "db_time_zone": "dbTimeZone",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "enable_backup_log": "enableBackupLog",
        "encryption_key": "encryptionKey",
        "high_space_usage_protection": "highSpaceUsageProtection",
        "local_log_retention_hours": "localLogRetentionHours",
        "local_log_retention_space": "localLogRetentionSpace",
        "log_backup_frequency": "logBackupFrequency",
        "log_backup_local_retention_number": "logBackupLocalRetentionNumber",
        "log_backup_retention_period": "logBackupRetentionPeriod",
        "maintain_time": "maintainTime",
        "master_username": "masterUsername",
        "master_user_password": "masterUserPassword",
        "master_user_type": "masterUserType",
        "multi_az": "multiAz",
        "pay_type": "payType",
        "period": "period",
        "period_type": "periodType",
        "port": "port",
        "preferred_backup_period": "preferredBackupPeriod",
        "preferred_backup_time": "preferredBackupTime",
        "private_ip_address": "privateIpAddress",
        "released_keep_policy": "releasedKeepPolicy",
        "resource_group_id": "resourceGroupId",
        "role_arn": "roleArn",
        "security_group_id": "securityGroupId",
        "slave_zone_ids": "slaveZoneIds",
        "sql_collector_status": "sqlCollectorStatus",
        "ssl_setting": "sslSetting",
        "tags": "tags",
        "target_dedicated_host_id_for_log": "targetDedicatedHostIdForLog",
        "target_dedicated_host_id_for_master": "targetDedicatedHostIdForMaster",
        "target_dedicated_host_id_for_slave": "targetDedicatedHostIdForSlave",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class DBInstanceProps:
    def __init__(
        self,
        *,
        db_instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        engine: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        security_ip_list: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        back_up_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_policy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        compress_type: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        connection_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_net_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]] = None,
        db_param_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_backup_log: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        high_space_usage_protection: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        local_log_retention_space: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        log_backup_frequency: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        released_keep_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slave_zone_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstance``.

        :param db_instance_class: Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        :param db_instance_storage: Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        :param engine: Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        :param engine_version: Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0; SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent; PostgreSQL: 9.4/10.0/11.0/12.0; PPAS: 9.3/10.0; MariaDB: 10.3.
        :param security_ip_list: Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        :param allocate_public_connection: Property allocatePublicConnection: If true, allocate public connection automate.
        :param archive_backup_keep_count: Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values: The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy parameter is set to ByMonth. The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy parameter is set to ByWeek. Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy parameter is set to KeepAll.
        :param archive_backup_keep_policy: Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can be retained within the specified period is determined by the ArchiveBackupKeepCount parameter. Default value: 0. Valid values: ByMonth ByWeek KeepAll
        :param archive_backup_retention_period: Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups. The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        :param auto_renew: Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note :Monthly subscription: The auto-renewal cycle is one month. Annual subscription: The auto-renewal cycle is one year.
        :param back_up_category: Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup to be completed within seconds. Valid values: Flash: specifies to enable the second-level backup function. Standard: specifies to disable the second-level backup function.
        :param backup_policy_mode: Property backupPolicyMode: Backup type, DataBackupPolicy: data backup LogBackupPolicy: log backup.
        :param backup_retention_period: Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        :param category: Property category: The edition of the instance. Valid values: Basic: specifies to use the Basic Edition. HighAvailability: specifies to use the High-availability Edition. AlwaysOn: specifies to use the Cluster Edition. Finance: specifies to use the Enterprise Edition.
        :param compress_type: Property compressType: The format used to compress backups. Valid values: 1: The zlib tool is used to compress backups into .tar.gz files. 4: The QuickLZ tool is used to compress backups into .xb.gz files. This compression format is supported only when the instance runs MySQL 5.6 or 5.7. It can be used to restore individual databases and tables. 8: The QuickLZ tool is used to compress backups into .xb.gz files. This compression format is supported only when the instance runs MySQL 8.0. It cannot be used to restore individual databases or tables.
        :param connection_mode: Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        :param connection_string_prefix: Property connectionStringPrefix: The prefix of the endpoint. Only the prefix of the CurrentConnectionString parameter value can be modified. The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        :param connection_string_type: Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
        :param db_instance_description: Property dbInstanceDescription: Description of created database instance.
        :param db_instance_net_type: Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        :param db_instance_storage_type: Property dbInstanceStorageType: The storage type of the instance. Valid values: local_ssd: specifies to use local SSDs. This is the recommended storage type. cloud_ssd: specifies to use standard SSDs. cloud_essd: enhanced SSD of performance level (PL)1. cloud_essd2: enhanced SSD of PL2. cloud_essd3: enhanced SSD of PL3.
        :param db_is_ignore_case: Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values: 1: Table names are not case-sensitive. This is the default value. 0: Table names are case-sensitive.
        :param db_mappings: Property dbMappings: Database mappings to attach to db instance.
        :param db_param_group_id: Property dbParamGroupId: The ID of the parameter template used by the instance.
        :param db_time_zone: Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        :param dedicated_host_group_id: Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        :param enable_backup_log: Property enableBackupLog: Specifies whether to enable the log backup function. Valid values: True: specifies to enable the log backup function. False: specifies to disable the log backup function. Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        :param encryption_key: Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        :param high_space_usage_protection: Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the instance exceeds 80% or the remaining space is less than 5 GB. Valid values: Enable and Disable. You can retain the default value. Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        :param local_log_retention_hours: Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance. Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance. You can retain the default value. Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        :param local_log_retention_space: Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance. If the space usage for log backup files exceeds this percentage, the system deletes earlier log backup files until the space usage falls below this percentage. Valid values:0 to 50. You can retain the default value. Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        :param log_backup_frequency: Property logBackupFrequency: The frequency at which to back up logs. Valid values: The value LogInterval specifies to back up logs every 30 minutes. The default value of this parameter is the same as the data backup frequency. Note The value LogInterval is supported only when the instance runs SQL Server.
        :param log_backup_local_retention_number: Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance. Default value: 60. Valid values: 6 to 100.
        :param log_backup_retention_period: Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup retention period cannot be longer than the data backup retention period.Note If you enable the log backup function, you can specify the log backup retention period. This applies only when the instance runs MySQL, PostgreSQL, or PPAS.
        :param maintain_time: Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        :param master_username: Property masterUsername: The master user name for the database instance.
        :param master_user_password: Property masterUserPassword: The master password for the database instance.
        :param master_user_type: Property masterUserType: Privilege type of account. Normal: Common privilege. Super: High privilege. Sysadmin: Super privileges (SA) (only supported by SQL Server) The default value is Normal.
        :param multi_az: Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        :param pay_type: Property payType: The charge type of created instance.
        :param period: Property period: The subscription duration. Valid values: When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60. When PeriodType is Year, it could be from 1 to 5.
        :param period_type: Property periodType: Charge period for created instances.
        :param port: Property port: The port of the database service.
        :param preferred_backup_period: Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        :param preferred_backup_time: Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        :param private_ip_address: Property privateIpAddress: The private ip for created instance.
        :param released_keep_policy: Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None. Valid values: Lastest: Only the last archived backup is retained. All: All of the archived backups are retained.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param role_arn: Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        :param security_group_id: Property securityGroupId: The ID of the ECS security groups. Each RDS instance can be associated with up to three ECS security groups. You must separate them with commas (,). To delete an ECS Security group, leave this parameter empty.
        :param slave_zone_ids: Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        :param sql_collector_status: Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. Valid values:Enable | Disabled.
        :param ssl_setting: Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values: Disabled: Disable SSL EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true. EnabledForInnerConnection: Private connection address will be protected by the SSL certificate. Default value is Disabled.
        :param tags: Property tags: The tags of an instance. You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}. At most 5 tags can be specified. Key It can be up to 64 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Cannot be a null string. Value It can be up to 128 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Can be a null string.
        :param target_dedicated_host_id_for_log: Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        :param target_dedicated_host_id_for_master: Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        :param target_dedicated_host_id_for_slave: Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        :param vpc_id: Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
        :param v_switch_id: Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        :param zone_id: Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
            "engine": engine,
            "engine_version": engine_version,
            "security_ip_list": security_ip_list,
        }
        if allocate_public_connection is not None:
            self._values["allocate_public_connection"] = allocate_public_connection
        if archive_backup_keep_count is not None:
            self._values["archive_backup_keep_count"] = archive_backup_keep_count
        if archive_backup_keep_policy is not None:
            self._values["archive_backup_keep_policy"] = archive_backup_keep_policy
        if archive_backup_retention_period is not None:
            self._values["archive_backup_retention_period"] = archive_backup_retention_period
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if back_up_category is not None:
            self._values["back_up_category"] = back_up_category
        if backup_policy_mode is not None:
            self._values["backup_policy_mode"] = backup_policy_mode
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if category is not None:
            self._values["category"] = category
        if compress_type is not None:
            self._values["compress_type"] = compress_type
        if connection_mode is not None:
            self._values["connection_mode"] = connection_mode
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if connection_string_type is not None:
            self._values["connection_string_type"] = connection_string_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_net_type is not None:
            self._values["db_instance_net_type"] = db_instance_net_type
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if db_is_ignore_case is not None:
            self._values["db_is_ignore_case"] = db_is_ignore_case
        if db_mappings is not None:
            self._values["db_mappings"] = db_mappings
        if db_param_group_id is not None:
            self._values["db_param_group_id"] = db_param_group_id
        if db_time_zone is not None:
            self._values["db_time_zone"] = db_time_zone
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if enable_backup_log is not None:
            self._values["enable_backup_log"] = enable_backup_log
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if high_space_usage_protection is not None:
            self._values["high_space_usage_protection"] = high_space_usage_protection
        if local_log_retention_hours is not None:
            self._values["local_log_retention_hours"] = local_log_retention_hours
        if local_log_retention_space is not None:
            self._values["local_log_retention_space"] = local_log_retention_space
        if log_backup_frequency is not None:
            self._values["log_backup_frequency"] = log_backup_frequency
        if log_backup_local_retention_number is not None:
            self._values["log_backup_local_retention_number"] = log_backup_local_retention_number
        if log_backup_retention_period is not None:
            self._values["log_backup_retention_period"] = log_backup_retention_period
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if master_username is not None:
            self._values["master_username"] = master_username
        if master_user_password is not None:
            self._values["master_user_password"] = master_user_password
        if master_user_type is not None:
            self._values["master_user_type"] = master_user_type
        if multi_az is not None:
            self._values["multi_az"] = multi_az
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if port is not None:
            self._values["port"] = port
        if preferred_backup_period is not None:
            self._values["preferred_backup_period"] = preferred_backup_period
        if preferred_backup_time is not None:
            self._values["preferred_backup_time"] = preferred_backup_time
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if released_keep_policy is not None:
            self._values["released_keep_policy"] = released_keep_policy
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if role_arn is not None:
            self._values["role_arn"] = role_arn
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if slave_zone_ids is not None:
            self._values["slave_zone_ids"] = slave_zone_ids
        if sql_collector_status is not None:
            self._values["sql_collector_status"] = sql_collector_status
        if ssl_setting is not None:
            self._values["ssl_setting"] = ssl_setting
        if tags is not None:
            self._values["tags"] = tags
        if target_dedicated_host_id_for_log is not None:
            self._values["target_dedicated_host_id_for_log"] = target_dedicated_host_id_for_log
        if target_dedicated_host_id_for_master is not None:
            self._values["target_dedicated_host_id_for_master"] = target_dedicated_host_id_for_master
        if target_dedicated_host_id_for_slave is not None:
            self._values["target_dedicated_host_id_for_slave"] = target_dedicated_host_id_for_slave
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceClass: Database instance type.

        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property dbInstanceStorage: Database instance storage size.

        mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property engine: Database instance engine type.

        Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0; SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent; PostgreSQL: 9.4/10.0/11.0/12.0; PPAS: 9.3/10.0; MariaDB: 10.3.'''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def security_ip_list(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.'''
        result = self._values.get("security_ip_list")
        assert result is not None, "Required property 'security_ip_list' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property allocatePublicConnection: If true, allocate public connection automate.'''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property archiveBackupKeepCount: The number of archived backups that can be retained.

        Default value: 1. Valid values:
        The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
        parameter is set to ByMonth.
        The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
        parameter is set to ByWeek.
        Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
        parameter is set to KeepAll.
        '''
        result = self._values.get("archive_backup_keep_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property archiveBackupKeepPolicy: The period for which to retain archived backups.

        The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        result = self._values.get("archive_backup_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.

        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        result = self._values.get("archive_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal.

        Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backUpCategory: Specifies whether to enable the second-level backup function.

        This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        result = self._values.get("back_up_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.'''
        result = self._values.get("backup_policy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property backupRetentionPeriod: The retention period of the data backup.

        Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property category: The edition of the instance.

        Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property compressType: The format used to compress backups.

        Valid values:
        1: The zlib tool is used to compress backups into .tar.gz files.
        4: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
        It can be used to restore individual databases and tables.
        8: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 8.0.
        It cannot be used to restore individual databases or tables.
        '''
        result = self._values.get("compress_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.

        Default is RDS system assigns.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionStringPrefix: The prefix of the endpoint.

        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.'''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.'''
        result = self._values.get("db_instance_net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceStorageType: The storage type of the instance.

        Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.

        Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        result = self._values.get("db_is_ignore_case")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]]:
        '''Property dbMappings: Database mappings to attach to db instance.'''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]], result)

    @builtins.property
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbParamGroupId: The ID of the parameter template used by the instance.'''
        result = self._values.get("db_param_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbTimeZone: The UTC time zone of the instance.

        Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableBackupLog: Specifies whether to enable the log backup function.

        Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("enable_backup_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.

        You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.

        Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("high_space_usage_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.

        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_hours")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.

        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logBackupFrequency: The frequency at which to back up logs.

        Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        result = self._values.get("log_backup_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.

        Default value: 60. Valid values: 6 to 100.
        '''
        result = self._values.get("log_backup_local_retention_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property logBackupRetentionPeriod: The number of days for which to retain log backup files.

        Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        result = self._values.get("log_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property maintainTime: The period during which the maintenance performs.

        The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUsername: The master user name for the database instance.'''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUserPassword: The master password for the database instance.'''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUserType: Privilege type of account.

        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.'''
        result = self._values.get("multi_az")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payType: The charge type of created instance.'''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The subscription duration.

        Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodType: Charge period for created instances.'''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property port: The port of the database service.'''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property preferredBackupPeriod: The backup period.

        Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property preferredBackupTime: The time when the backup task is performed.

        Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property privateIpAddress: The private ip for created instance.'''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.

        Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        result = self._values.get("released_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.

        You can copy the ARN from the RAM console.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: The ID of the ECS security groups.

        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.

        Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.

        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.

        Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: The tags of an instance.

        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def target_dedicated_host_id_for_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_log")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_master")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_slave")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The VPC id of created database instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The vSwitch id of created instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: selected zone to create database instance.

        You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstanceSecurityIps(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceSecurityIps",
):
    '''A ROS resource type:  ``ALIYUN::RDS::DBInstanceSecurityIps``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceSecurityIpsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceSecurityIps``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> ros_cdk_core.IResolvable:
        '''Attribute SecurityIps: The security ips of selected database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityIps"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceSecurityIpsProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "db_instance_ip_array_attribute": "dbInstanceIpArrayAttribute",
        "db_instance_ip_array_name": "dbInstanceIpArrayName",
    },
)
class DBInstanceSecurityIpsProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_ip_array_attribute: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_ip_array_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param db_instance_id: Property dbInstanceId: Database instance id to update security ips.
        :param db_instance_ip_array_attribute: Property dbInstanceIpArrayAttribute: Security ips to add or remove.
        :param db_instance_ip_array_name: Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "db_instance_ip_array_attribute": db_instance_ip_array_attribute,
        }
        if db_instance_ip_array_name is not None:
            self._values["db_instance_ip_array_name"] = db_instance_ip_array_name

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: Database instance id to update security ips.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_ip_array_attribute(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceIpArrayAttribute: Security ips to add or remove.'''
        result = self._values.get("db_instance_ip_array_attribute")
        assert result is not None, "Required property 'db_instance_ip_array_attribute' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'.

        Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        '''
        result = self._values.get("db_instance_ip_array_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceSecurityIpsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Database(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.Database",
):
    '''A ROS resource type:  ``ALIYUN::RDS::Database``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DatabaseProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::Database``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBName: The name of the database.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.DatabaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "character_set_name": "characterSetName",
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
        "db_description": "dbDescription",
    },
)
class DatabaseProps:
    def __init__(
        self,
        *,
        character_set_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::Database``.

        :param character_set_name: Property characterSetName: The character set you want to use for the database. Valid values: MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4. SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS | Chinese_PRC_BIN. PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 | WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004 | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7 | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 | SQL_ASCII.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param db_name: Property dbName: The name of the database you want to create. Note The name must be 2 to 64 characters in length. The name must start with a lowercase letter and end with a lowercase letter or digit. The name can contain lowercase letters, digits, underscores (_), and hyphens (-). The name must be unique in the instance. For more information about invalid characters, see Forbidden keywords table.
        :param db_description: Property dbDescription: The description of the database. The description must be 2 to 256 characters in length. The description must start with a letter and can contain letters, digits, underscores (_), and hyphens (-). Note The description cannot start with http:// or https://.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "character_set_name": character_set_name,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }
        if db_description is not None:
            self._values["db_description"] = db_description

    @builtins.property
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property characterSetName: The character set you want to use for the database.

        Valid values:
        MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
        SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
        | Chinese_PRC_BIN.
        PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
        WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
        | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
        | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
        SQL_ASCII.
        '''
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbName: The name of the database you want to create.

        Note
        The name must be 2 to 64 characters in length.
        The name must start with a lowercase letter and end with a lowercase letter or digit.
        The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
        The name must be unique in the instance.
        For more information about invalid characters, see Forbidden keywords table.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbDescription: The description of the database.

        The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        '''
        result = self._values.get("db_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PrepayDBInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.PrepayDBInstance",
):
    '''A ROS resource type:  ``ALIYUN::RDS::PrepayDBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PrepayDBInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::PrepayDBInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The instance id of created database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerConnectionString: DB instance connection url by Intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerIPAddress: IP Address for created DB instance of Intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute InnerPort: Intranet port of created DB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The order id list of created instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionString: DB instance connection url by Internet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicIPAddress: IP Address for created DB instance of Internet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicPort: Internet port of created DB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.PrepayDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "commodity_code": "commodityCode",
        "db_instance_class": "dbInstanceClass",
        "db_instance_storage": "dbInstanceStorage",
        "engine": "engine",
        "engine_version": "engineVersion",
        "period": "period",
        "period_type": "periodType",
        "allocate_public_connection": "allocatePublicConnection",
        "archive_backup_keep_count": "archiveBackupKeepCount",
        "archive_backup_keep_policy": "archiveBackupKeepPolicy",
        "archive_backup_retention_period": "archiveBackupRetentionPeriod",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "back_up_category": "backUpCategory",
        "backup_policy_mode": "backupPolicyMode",
        "backup_retention_period": "backupRetentionPeriod",
        "category": "category",
        "compress_type": "compressType",
        "connection_mode": "connectionMode",
        "connection_string_prefix": "connectionStringPrefix",
        "connection_string_type": "connectionStringType",
        "coupon_code": "couponCode",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_net_type": "dbInstanceNetType",
        "db_instance_storage_type": "dbInstanceStorageType",
        "db_is_ignore_case": "dbIsIgnoreCase",
        "db_mappings": "dbMappings",
        "db_param_group_id": "dbParamGroupId",
        "db_time_zone": "dbTimeZone",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "enable_backup_log": "enableBackupLog",
        "encryption_key": "encryptionKey",
        "high_space_usage_protection": "highSpaceUsageProtection",
        "local_log_retention_hours": "localLogRetentionHours",
        "local_log_retention_space": "localLogRetentionSpace",
        "log_backup_frequency": "logBackupFrequency",
        "log_backup_local_retention_number": "logBackupLocalRetentionNumber",
        "log_backup_retention_period": "logBackupRetentionPeriod",
        "maintain_time": "maintainTime",
        "master_username": "masterUsername",
        "master_user_password": "masterUserPassword",
        "master_user_type": "masterUserType",
        "multi_az": "multiAz",
        "port": "port",
        "preferred_backup_period": "preferredBackupPeriod",
        "preferred_backup_time": "preferredBackupTime",
        "private_ip_address": "privateIpAddress",
        "quantity": "quantity",
        "released_keep_policy": "releasedKeepPolicy",
        "resource_group_id": "resourceGroupId",
        "role_arn": "roleArn",
        "security_group_id": "securityGroupId",
        "slave_zone_ids": "slaveZoneIds",
        "sql_collector_status": "sqlCollectorStatus",
        "ssl_setting": "sslSetting",
        "tags": "tags",
        "target_dedicated_host_id_for_log": "targetDedicatedHostIdForLog",
        "target_dedicated_host_id_for_master": "targetDedicatedHostIdForMaster",
        "target_dedicated_host_id_for_slave": "targetDedicatedHostIdForSlave",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class PrepayDBInstanceProps:
    def __init__(
        self,
        *,
        commodity_code: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        engine: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        period: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        period_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        back_up_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_policy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        compress_type: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        connection_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        coupon_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_net_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]] = None,
        db_param_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_backup_log: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        high_space_usage_protection: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        local_log_retention_space: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        log_backup_frequency: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        quantity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        released_keep_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slave_zone_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::PrepayDBInstance``.

        :param commodity_code: Property commodityCode: The CommodityCode of the order.
        :param db_instance_class: Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        :param db_instance_storage: Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        :param engine: Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        :param engine_version: Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0; SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent; PostgreSQL: 9.4/10.0/11.0/12.0; PPAS: 9.3/10.0; MariaDB: 10.3.
        :param period: Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        :param period_type: Property periodType: Charge period for created instances.
        :param allocate_public_connection: Property allocatePublicConnection: If true, allocate public connection automate.
        :param archive_backup_keep_count: Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values: The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy parameter is set to ByMonth. The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy parameter is set to ByWeek. Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy parameter is set to KeepAll.
        :param archive_backup_keep_policy: Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can be retained within the specified period is determined by the ArchiveBackupKeepCount parameter. Default value: 0. Valid values: ByMonth ByWeek KeepAll
        :param archive_backup_retention_period: Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups. The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        :param auto_pay: Property autoPay: Automatic Payment. Default is false.
        :param auto_renew: Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        :param back_up_category: Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup to be completed within seconds. Valid values: Flash: specifies to enable the second-level backup function. Standard: specifies to disable the second-level backup function.
        :param backup_policy_mode: Property backupPolicyMode: Backup type, DataBackupPolicy: data backup LogBackupPolicy: log backup.
        :param backup_retention_period: Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        :param category: Property category: The edition of the instance. Valid values: Basic: specifies to use the Basic Edition. HighAvailability: specifies to use the High-availability Edition. AlwaysOn: specifies to use the Cluster Edition. Finance: specifies to use the Enterprise Edition.
        :param compress_type: Property compressType: The format used to compress backups. Valid values: 1: The zlib tool is used to compress backups into .tar.gz files. 4: The QuickLZ tool is used to compress backups into .xb.gz files. This compression format is supported only when the instance runs MySQL 5.6 or 5.7. It can be used to restore individual databases and tables. 8: The QuickLZ tool is used to compress backups into .xb.gz files. This compression format is supported only when the instance runs MySQL 8.0. It cannot be used to restore individual databases or tables.
        :param connection_mode: Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        :param connection_string_prefix: Property connectionStringPrefix: The prefix of the endpoint. Only the prefix of the CurrentConnectionString parameter value can be modified. The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        :param connection_string_type: Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
        :param coupon_code: Property couponCode: The coupon code of the order.
        :param db_instance_description: Property dbInstanceDescription: Description of created database instance.
        :param db_instance_net_type: Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        :param db_instance_storage_type: Property dbInstanceStorageType: The storage type of the instance. Valid values: local_ssd: specifies to use local SSDs. This is the recommended storage type. cloud_ssd: specifies to use standard SSDs. cloud_essd: enhanced SSD of performance level (PL)1. cloud_essd2: enhanced SSD of PL2. cloud_essd3: enhanced SSD of PL3.
        :param db_is_ignore_case: Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values: 1: Table names are not case-sensitive. This is the default value. 0: Table names are case-sensitive.
        :param db_mappings: Property dbMappings: Database mappings to attach to db instance.
        :param db_param_group_id: Property dbParamGroupId: The ID of the parameter template used by the instance.
        :param db_time_zone: Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        :param dedicated_host_group_id: Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        :param enable_backup_log: Property enableBackupLog: Specifies whether to enable the log backup function. Valid values: True: specifies to enable the log backup function. False: specifies to disable the log backup function. Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        :param encryption_key: Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        :param high_space_usage_protection: Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the instance exceeds 80% or the remaining space is less than 5 GB. Valid values: Enable and Disable. You can retain the default value. Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        :param local_log_retention_hours: Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance. Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance. You can retain the default value. Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        :param local_log_retention_space: Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance. If the space usage for log backup files exceeds this percentage, the system deletes earlier log backup files until the space usage falls below this percentage. Valid values:0 to 50. You can retain the default value. Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        :param log_backup_frequency: Property logBackupFrequency: The frequency at which to back up logs. Valid values: The value LogInterval specifies to back up logs every 30 minutes. The default value of this parameter is the same as the data backup frequency. Note The value LogInterval is supported only when the instance runs SQL Server.
        :param log_backup_local_retention_number: Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance. Default value: 60. Valid values: 6 to 100.
        :param log_backup_retention_period: Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup retention period cannot be longer than the data backup retention period.Note If you enable the log backup function, you can specify the log backup retention period. This applies only when the instance runs MySQL, PostgreSQL, or PPAS.
        :param maintain_time: Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        :param master_username: Property masterUsername: The master user name for the database instance.
        :param master_user_password: Property masterUserPassword: The master password for the database instance.
        :param master_user_type: Property masterUserType: Privilege type of account. Normal: Common privilege. Super: High privilege. Sysadmin: Super privileges (SA) (only supported by SQL Server) The default value is Normal.
        :param multi_az: Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        :param port: Property port: The port of the database service.
        :param preferred_backup_period: Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        :param preferred_backup_time: Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        :param private_ip_address: Property privateIpAddress: The private ip for created instance.
        :param quantity: Property quantity: The number of instance to be created, default is 1, max number is 99.
        :param released_keep_policy: Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None. Valid values: Lastest: Only the last archived backup is retained. All: All of the archived backups are retained.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param role_arn: Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        :param security_group_id: Property securityGroupId: The ID of the ECS security groups. Each RDS instance can be associated with up to three ECS security groups. You must separate them with commas (,). To delete an ECS Security group, leave this parameter empty.
        :param slave_zone_ids: Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        :param sql_collector_status: Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. Valid values:Enable | Disabled.
        :param ssl_setting: Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values: Disabled: Disable SSL EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true. EnabledForInnerConnection: Private connection address will be protected by the SSL certificate. Default value is Disabled.
        :param tags: Property tags: The tags of an instance. You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}. At most 5 tags can be specified. Key It can be up to 64 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Cannot be a null string. Value It can be up to 128 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Can be a null string.
        :param target_dedicated_host_id_for_log: Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        :param target_dedicated_host_id_for_master: Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        :param target_dedicated_host_id_for_slave: Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        :param vpc_id: Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
        :param v_switch_id: Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        :param zone_id: Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "commodity_code": commodity_code,
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
            "engine": engine,
            "engine_version": engine_version,
            "period": period,
            "period_type": period_type,
        }
        if allocate_public_connection is not None:
            self._values["allocate_public_connection"] = allocate_public_connection
        if archive_backup_keep_count is not None:
            self._values["archive_backup_keep_count"] = archive_backup_keep_count
        if archive_backup_keep_policy is not None:
            self._values["archive_backup_keep_policy"] = archive_backup_keep_policy
        if archive_backup_retention_period is not None:
            self._values["archive_backup_retention_period"] = archive_backup_retention_period
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if back_up_category is not None:
            self._values["back_up_category"] = back_up_category
        if backup_policy_mode is not None:
            self._values["backup_policy_mode"] = backup_policy_mode
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if category is not None:
            self._values["category"] = category
        if compress_type is not None:
            self._values["compress_type"] = compress_type
        if connection_mode is not None:
            self._values["connection_mode"] = connection_mode
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if connection_string_type is not None:
            self._values["connection_string_type"] = connection_string_type
        if coupon_code is not None:
            self._values["coupon_code"] = coupon_code
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_net_type is not None:
            self._values["db_instance_net_type"] = db_instance_net_type
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if db_is_ignore_case is not None:
            self._values["db_is_ignore_case"] = db_is_ignore_case
        if db_mappings is not None:
            self._values["db_mappings"] = db_mappings
        if db_param_group_id is not None:
            self._values["db_param_group_id"] = db_param_group_id
        if db_time_zone is not None:
            self._values["db_time_zone"] = db_time_zone
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if enable_backup_log is not None:
            self._values["enable_backup_log"] = enable_backup_log
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if high_space_usage_protection is not None:
            self._values["high_space_usage_protection"] = high_space_usage_protection
        if local_log_retention_hours is not None:
            self._values["local_log_retention_hours"] = local_log_retention_hours
        if local_log_retention_space is not None:
            self._values["local_log_retention_space"] = local_log_retention_space
        if log_backup_frequency is not None:
            self._values["log_backup_frequency"] = log_backup_frequency
        if log_backup_local_retention_number is not None:
            self._values["log_backup_local_retention_number"] = log_backup_local_retention_number
        if log_backup_retention_period is not None:
            self._values["log_backup_retention_period"] = log_backup_retention_period
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if master_username is not None:
            self._values["master_username"] = master_username
        if master_user_password is not None:
            self._values["master_user_password"] = master_user_password
        if master_user_type is not None:
            self._values["master_user_type"] = master_user_type
        if multi_az is not None:
            self._values["multi_az"] = multi_az
        if port is not None:
            self._values["port"] = port
        if preferred_backup_period is not None:
            self._values["preferred_backup_period"] = preferred_backup_period
        if preferred_backup_time is not None:
            self._values["preferred_backup_time"] = preferred_backup_time
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if quantity is not None:
            self._values["quantity"] = quantity
        if released_keep_policy is not None:
            self._values["released_keep_policy"] = released_keep_policy
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if role_arn is not None:
            self._values["role_arn"] = role_arn
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if slave_zone_ids is not None:
            self._values["slave_zone_ids"] = slave_zone_ids
        if sql_collector_status is not None:
            self._values["sql_collector_status"] = sql_collector_status
        if ssl_setting is not None:
            self._values["ssl_setting"] = ssl_setting
        if tags is not None:
            self._values["tags"] = tags
        if target_dedicated_host_id_for_log is not None:
            self._values["target_dedicated_host_id_for_log"] = target_dedicated_host_id_for_log
        if target_dedicated_host_id_for_master is not None:
            self._values["target_dedicated_host_id_for_master"] = target_dedicated_host_id_for_master
        if target_dedicated_host_id_for_slave is not None:
            self._values["target_dedicated_host_id_for_slave"] = target_dedicated_host_id_for_slave
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def commodity_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property commodityCode: The CommodityCode of the order.'''
        result = self._values.get("commodity_code")
        assert result is not None, "Required property 'commodity_code' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceClass: Database instance type.

        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property dbInstanceStorage: Database instance storage size.

        mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property engine: Database instance engine type.

        Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0; SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent; PostgreSQL: 9.4/10.0/11.0/12.0; PPAS: 9.3/10.0; MariaDB: 10.3.'''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property period: Prepaid time period.

        While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def period_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property periodType: Charge period for created instances.'''
        result = self._values.get("period_type")
        assert result is not None, "Required property 'period_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property allocatePublicConnection: If true, allocate public connection automate.'''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property archiveBackupKeepCount: The number of archived backups that can be retained.

        Default value: 1. Valid values:
        The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
        parameter is set to ByMonth.
        The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
        parameter is set to ByWeek.
        Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
        parameter is set to KeepAll.
        '''
        result = self._values.get("archive_backup_keep_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property archiveBackupKeepPolicy: The period for which to retain archived backups.

        The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        result = self._values.get("archive_backup_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.

        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        result = self._values.get("archive_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Automatic Payment.

        Default is false.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Auto renew the prepay instance.

        If the period type is by year, it will renew by year, else it will renew by month.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backUpCategory: Specifies whether to enable the second-level backup function.

        This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        result = self._values.get("back_up_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.'''
        result = self._values.get("backup_policy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property backupRetentionPeriod: The retention period of the data backup.

        Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property category: The edition of the instance.

        Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property compressType: The format used to compress backups.

        Valid values:
        1: The zlib tool is used to compress backups into .tar.gz files.
        4: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
        It can be used to restore individual databases and tables.
        8: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 8.0.
        It cannot be used to restore individual databases or tables.
        '''
        result = self._values.get("compress_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.

        Default is RDS system assigns.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionStringPrefix: The prefix of the endpoint.

        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.'''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def coupon_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property couponCode: The coupon code of the order.'''
        result = self._values.get("coupon_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.'''
        result = self._values.get("db_instance_net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceStorageType: The storage type of the instance.

        Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.

        Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        result = self._values.get("db_is_ignore_case")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]]:
        '''Property dbMappings: Database mappings to attach to db instance.'''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]], result)

    @builtins.property
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbParamGroupId: The ID of the parameter template used by the instance.'''
        result = self._values.get("db_param_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbTimeZone: The UTC time zone of the instance.

        Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableBackupLog: Specifies whether to enable the log backup function.

        Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("enable_backup_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.

        You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.

        Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("high_space_usage_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.

        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_hours")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.

        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logBackupFrequency: The frequency at which to back up logs.

        Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        result = self._values.get("log_backup_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.

        Default value: 60. Valid values: 6 to 100.
        '''
        result = self._values.get("log_backup_local_retention_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property logBackupRetentionPeriod: The number of days for which to retain log backup files.

        Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        result = self._values.get("log_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property maintainTime: The period during which the maintenance performs.

        The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUsername: The master user name for the database instance.'''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUserPassword: The master password for the database instance.'''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterUserType: Privilege type of account.

        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.'''
        result = self._values.get("multi_az")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property port: The port of the database service.'''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property preferredBackupPeriod: The backup period.

        Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property preferredBackupTime: The time when the backup task is performed.

        Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property privateIpAddress: The private ip for created instance.'''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def quantity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property quantity: The number of instance to be created, default is 1, max number is 99.'''
        result = self._values.get("quantity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.

        Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        result = self._values.get("released_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.

        You can copy the ARN from the RAM console.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: The ID of the ECS security groups.

        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.

        Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.

        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.

        Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: The tags of an instance.

        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def target_dedicated_host_id_for_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_log")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_master")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_slave")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The VPC id of created database instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The vSwitch id of created instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: selected zone to create database instance.

        You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrepayDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ReadOnlyDBInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.ReadOnlyDBInstance",
):
    '''A ROS resource type:  ``ALIYUN::RDS::ReadOnlyDBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ReadOnlyDBInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::ReadOnlyDBInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionString: DB instance connection url by Intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The instance id of created database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: Intranet port of created DB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.ReadOnlyDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_id": "dbInstanceId",
        "db_instance_storage": "dbInstanceStorage",
        "engine_version": "engineVersion",
        "zone_id": "zoneId",
        "auto_renew": "autoRenew",
        "category": "category",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_storage_type": "dbInstanceStorageType",
        "pay_type": "payType",
        "period": "period",
        "period_type": "periodType",
        "private_ip_address": "privateIpAddress",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class ReadOnlyDBInstanceProps:
    def __init__(
        self,
        *,
        db_instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::ReadOnlyDBInstance``.

        :param db_instance_class: Property dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        :param db_instance_id: Property dbInstanceId: The ID of the master instance.
        :param db_instance_storage: Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        :param engine_version: Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
        :param zone_id: Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
        :param auto_renew: Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note :Monthly subscription: The auto-renewal cycle is one month. Annual subscription: The auto-renewal cycle is one year.
        :param category: Property category: The RDS edition of the read-only instance. Valid values: Basic: Basic Edition. HighAvailability: High-availability Edition. This is the default value. AlwaysOn: Cluster Edition. Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
        :param db_instance_description: Property dbInstanceDescription: Description of created database instance.
        :param db_instance_storage_type: Property dbInstanceStorageType: The type of storage media that is used by the instance. Valid values: local_ssd: local SSDs cloud_ssd: standard SSDs cloud_essd: ESSDs of performance level 1 (PL1) cloud_essd2: ESSDs of PL2 cloud_essd3: ESSDs of PL3
        :param pay_type: Property payType: The billing method. Valid value: Postpaid, Prepaid.
        :param period: Property period: The subscription duration. Valid values: When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60. When PeriodType is Year, it could be from 1 to 5.
        :param period_type: Property periodType: Charge period for created instances.
        :param private_ip_address: Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: The tags of an instance. You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}. At most 5 tags can be specified. Key It can be up to 64 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Cannot be a null string. Value It can be up to 128 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Can be a null string.
        :param vpc_id: Property vpcId: The ID of the VPC.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_id": db_instance_id,
            "db_instance_storage": db_instance_storage,
            "engine_version": engine_version,
            "zone_id": zone_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if category is not None:
            self._values["category"] = category
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceClass: The type of the instance.

        For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: The ID of the master instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property dbInstanceStorage: The storage space of the instance.

        Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property engineVersion: The version of the database.

        The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: The ID of the zone.

        You can call the DescribeRegions API operation to view the latest zones.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal.

        Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property category: The RDS edition of the read-only instance.

        Valid values:
        Basic: Basic Edition.
        HighAvailability: High-availability Edition. This is the default value.
        AlwaysOn: Cluster Edition.
        Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceStorageType: The type of storage media that is used by the instance.

        Valid values:
        local_ssd: local SSDs
        cloud_ssd: standard SSDs
        cloud_essd: ESSDs of performance level 1 (PL1)
        cloud_essd2: ESSDs of PL2
        cloud_essd3: ESSDs of PL3
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payType: The billing method.

        Valid value: Postpaid, Prepaid.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The subscription duration.

        Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodType: Charge period for created instances.'''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property privateIpAddress: The private IP address of the read-only instance.

        It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: The tags of an instance.

        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The ID of the VPC.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The ID of the VSwitch.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ReadOnlyDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosADInfo(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosADInfo",
):
    '''A ROS template type:  ``ALIYUN::RDS::ADInfo``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosADInfoProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::ADInfo``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAddns")
    def attr_addns(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ADDNS: Active directory domain name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddns"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="adAccountName")
    def ad_account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: adAccountName: Domain account name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "adAccountName"))

    @ad_account_name.setter
    def ad_account_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "adAccountName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="addns")
    def addns(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: addns: Active directory domain name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "addns"))

    @addns.setter
    def addns(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "addns", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="adPassword")
    def ad_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: adPassword: Domain password.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "adPassword"))

    @ad_password.setter
    def ad_password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "adPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="adServerIpAddress")
    def ad_server_ip_address(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "adServerIpAddress"))

    @ad_server_ip_address.setter
    def ad_server_ip_address(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "adServerIpAddress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosADInfoProps",
    jsii_struct_bases=[],
    name_mapping={
        "ad_account_name": "adAccountName",
        "addns": "addns",
        "ad_password": "adPassword",
        "ad_server_ip_address": "adServerIpAddress",
        "db_instance_id": "dbInstanceId",
    },
)
class RosADInfoProps:
    def __init__(
        self,
        *,
        ad_account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        addns: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ad_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ad_server_ip_address: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::ADInfo``.

        :param ad_account_name: 
        :param addns: 
        :param ad_password: 
        :param ad_server_ip_address: 
        :param db_instance_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ad_account_name": ad_account_name,
            "addns": addns,
            "ad_password": ad_password,
            "ad_server_ip_address": ad_server_ip_address,
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def ad_account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: adAccountName: Domain account name.
        '''
        result = self._values.get("ad_account_name")
        assert result is not None, "Required property 'ad_account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def addns(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: addns: Active directory domain name.
        '''
        result = self._values.get("addns")
        assert result is not None, "Required property 'addns' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ad_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: adPassword: Domain password.
        '''
        result = self._values.get("ad_password")
        assert result is not None, "Required property 'ad_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ad_server_ip_address(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        '''
        result = self._values.get("ad_server_ip_address")
        assert result is not None, "Required property 'ad_server_ip_address' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosADInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::RDS::Account``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccountName: Account name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        accountName: Account name, which must be unique and meet the following requirements:
        Start with a letter;
        Consist of lower-case letters, digits, and underscores (_);
        Contain no more than 16 characters.
        For other invalid characters, see Forbidden keywords table.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountPassword")
    def account_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: RDS instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accountDescription: Account remarks.
        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accountDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accountType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accountType", value)


class RosAccountPrivilege(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosAccountPrivilege",
):
    '''A ROS template type:  ``ALIYUN::RDS::AccountPrivilege``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountPrivilegeProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::AccountPrivilege``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accountName: RDS account name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accountPrivilege: RDS account privilege
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accountPrivilege"))

    @account_privilege.setter
    def account_privilege(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accountPrivilege", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: RDS instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbName: RDS database name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosAccountPrivilegeProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_privilege": "accountPrivilege",
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
    },
)
class RosAccountPrivilegeProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_privilege: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::AccountPrivilege``.

        :param account_name: 
        :param account_privilege: 
        :param db_instance_id: 
        :param db_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accountName: RDS account name.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_privilege(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accountPrivilege: RDS account privilege
        '''
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: RDS instance ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbName: RDS database name
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountPrivilegeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "db_instance_id": "dbInstanceId",
        "account_description": "accountDescription",
        "account_type": "accountType",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::Account``.

        :param account_name: 
        :param account_password: 
        :param db_instance_id: 
        :param account_description: 
        :param account_type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description
        if account_type is not None:
            self._values["account_type"] = account_type

    @builtins.property
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        accountName: Account name, which must be unique and meet the following requirements:
        Start with a letter;
        Consist of lower-case letters, digits, and underscores (_);
        Contain no more than 16 characters.
        For other invalid characters, see Forbidden keywords table.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: RDS instance ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accountDescription: Account remarks.
        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accountType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstance",
):
    '''A ROS template type:  ``ALIYUN::RDS::DBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerPort: Intranet port of created DB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicPort: Internet port of created DB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "engine", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "securityIpList", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "allocatePublicConnection"))

    @allocate_public_connection.setter
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="archiveBackupKeepCount")
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values:
        The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
        parameter is set to ByMonth.
        The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
        parameter is set to ByWeek.
        Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
        parameter is set to KeepAll.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "archiveBackupKeepCount"))

    @archive_backup_keep_count.setter
    def archive_backup_keep_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "archiveBackupKeepCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="archiveBackupKeepPolicy")
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "archiveBackupKeepPolicy"))

    @archive_backup_keep_policy.setter
    def archive_backup_keep_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "archiveBackupKeepPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="archiveBackupRetentionPeriod")
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "archiveBackupRetentionPeriod"))

    @archive_backup_retention_period.setter
    def archive_backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "archiveBackupRetentionPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backUpCategory")
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backUpCategory"))

    @back_up_category.setter
    def back_up_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backUpCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupPolicyMode")
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupPolicyMode: Backup type,
        DataBackupPolicy: data backup
        LogBackupPolicy: log backup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backupPolicyMode"))

    @backup_policy_mode.setter
    def backup_policy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupPolicyMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "backupRetentionPeriod"))

    @backup_retention_period.setter
    def backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="compressType")
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        compressType: The format used to compress backups. Valid values:
        1: The zlib tool is used to compress backups into .tar.gz files.
        4: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
        It can be used to restore individual databases and tables.
        8: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 8.0.
        It cannot be used to restore individual databases or tables.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "compressType"))

    @compress_type.setter
    def compress_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "compressType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionMode")
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionMode"))

    @connection_mode.setter
    def connection_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionStringType"))

    @connection_string_type.setter
    def connection_string_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionStringType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceNetType")
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceNetType"))

    @db_instance_net_type.setter
    def db_instance_net_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceNetType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbIsIgnoreCase")
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "dbIsIgnoreCase"))

    @db_is_ignore_case.setter
    def db_is_ignore_case(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbIsIgnoreCase", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]], jsii.get(self, "dbMappings"))

    @db_mappings.setter
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]],
    ) -> None:
        jsii.set(self, "dbMappings", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbParamGroupId")
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbParamGroupId"))

    @db_param_group_id.setter
    def db_param_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbParamGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbTimeZone")
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbTimeZone"))

    @db_time_zone.setter
    def db_time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbTimeZone", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableBackupLog")
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableBackupLog: Specifies whether to enable the log backup function. Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableBackupLog"))

    @enable_backup_log.setter
    def enable_backup_log(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableBackupLog", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encryptionKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="highSpaceUsageProtection")
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
        instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "highSpaceUsageProtection"))

    @high_space_usage_protection.setter
    def high_space_usage_protection(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "highSpaceUsageProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localLogRetentionHours")
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "localLogRetentionHours"))

    @local_log_retention_hours.setter
    def local_log_retention_hours(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "localLogRetentionHours", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localLogRetentionSpace")
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "localLogRetentionSpace"))

    @local_log_retention_space.setter
    def local_log_retention_space(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "localLogRetentionSpace", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logBackupFrequency")
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupFrequency: The frequency at which to back up logs. Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logBackupFrequency"))

    @log_backup_frequency.setter
    def log_backup_frequency(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logBackupFrequency", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logBackupLocalRetentionNumber")
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
        Default value: 60. Valid values: 6 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "logBackupLocalRetentionNumber"))

    @log_backup_local_retention_number.setter
    def log_backup_local_retention_number(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logBackupLocalRetentionNumber", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logBackupRetentionPeriod")
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "logBackupRetentionPeriod"))

    @log_backup_retention_period.setter
    def log_backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logBackupRetentionPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "maintainTime"))

    @maintain_time.setter
    def maintain_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maintainTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUsername")
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUsername"))

    @master_username.setter
    def master_username(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUsername", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUserPassword"))

    @master_user_password.setter
    def master_user_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUserPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUserType"))

    @master_user_type.setter
    def master_user_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUserType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="multiAz")
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "multiAz"))

    @multi_az.setter
    def multi_az(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "multiAz", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payType: The charge type of created instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="port")
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "preferredBackupPeriod"))

    @preferred_backup_period.setter
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "preferredBackupTime"))

    @preferred_backup_time.setter
    def preferred_backup_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="releasedKeepPolicy")
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "releasedKeepPolicy"))

    @released_keep_policy.setter
    def released_keep_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "releasedKeepPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="roleArn")
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "roleArn"))

    @role_arn.setter
    def role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "roleArn", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="slaveZoneIds")
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "slaveZoneIds"))

    @slave_zone_ids.setter
    def slave_zone_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "slaveZoneIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sqlCollectorStatus"))

    @sql_collector_status.setter
    def sql_collector_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sslSetting"))

    @ssl_setting.setter
    def ssl_setting(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sslSetting", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        tags: The tags of an instance.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetDedicatedHostIdForLog")
    def target_dedicated_host_id_for_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "targetDedicatedHostIdForLog"))

    @target_dedicated_host_id_for_log.setter
    def target_dedicated_host_id_for_log(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForLog", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetDedicatedHostIdForMaster")
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "targetDedicatedHostIdForMaster"))

    @target_dedicated_host_id_for_master.setter
    def target_dedicated_host_id_for_master(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForMaster", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetDedicatedHostIdForSlave")
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "targetDedicatedHostIdForSlave"))

    @target_dedicated_host_id_for_slave.setter
    def target_dedicated_host_id_for_slave(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForSlave", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosDBInstance.DBMappingsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "character_set_name": "characterSetName",
            "db_name": "dbName",
            "db_description": "dbDescription",
        },
    )
    class DBMappingsProperty:
        def __init__(
            self,
            *,
            character_set_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            db_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            '''
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            '''
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def db_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            '''
            result = self._values.get("db_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DBMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDBInstanceClone(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceClone",
):
    '''A ROS template type:  ``ALIYUN::RDS::DBInstanceClone``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceCloneProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceClone``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerPort: Intranet port of created DB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicPort: Internet port of created DB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: Instance id
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: payType: The charge type of created instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "allocatePublicConnection"))

    @allocate_public_connection.setter
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupId")
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupId: The ID of the backup set that you want to use.
        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backupId"))

    @backup_id.setter
    def backup_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "backupRetentionPeriod"))

    @backup_retention_period.setter
    def backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupType")
    def backup_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupType: The type of backup used by the new instance. Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backupType"))

    @backup_type.setter
    def backup_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionStringType"))

    @connection_string_type.setter
    def connection_string_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionStringType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]], jsii.get(self, "dbMappings"))

    @db_mappings.setter
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]],
    ) -> None:
        jsii.set(self, "dbMappings", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbNames")
    def db_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbNames: The names of the databases that you want to create on the new instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbNames"))

    @db_names.setter
    def db_names(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbNames", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceNetworkType")
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        instanceNetworkType: The network type of the new instance. Valid values:

        - VPC
        - Classic
        The default value is the network type of the original instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceNetworkType"))

    @instance_network_type.setter
    def instance_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceNetworkType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "maintainTime"))

    @maintain_time.setter
    def maintain_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maintainTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUsername")
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUsername"))

    @master_username.setter
    def master_username(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUsername", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUserPassword"))

    @master_user_password.setter
    def master_user_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUserPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUserType"))

    @master_user_type.setter
    def master_user_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUserType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="port")
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "preferredBackupPeriod"))

    @preferred_backup_period.setter
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "preferredBackupTime"))

    @preferred_backup_time.setter
    def preferred_backup_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="restoreTable")
    def restore_table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        restoreTable: Specifies whether to restore specific databases and tables.
        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "restoreTable"))

    @restore_table.setter
    def restore_table(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "restoreTable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="restoreTime")
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        restoreTime: The point in time to which you want to restore the data of the original instance.
        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "restoreTime"))

    @restore_time.setter
    def restore_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "restoreTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityIpList", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="slaveZoneIds")
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "slaveZoneIds"))

    @slave_zone_ids.setter
    def slave_zone_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "slaveZoneIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sqlCollectorStatus"))

    @sql_collector_status.setter
    def sql_collector_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sslSetting"))

    @ssl_setting.setter
    def ssl_setting(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sslSetting", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tableMeta")
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]]:
        '''
        :Property: tableMeta: The information about the databases and tables that you want to restore.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]], jsii.get(self, "tableMeta"))

    @table_meta.setter
    def table_meta(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]],
    ) -> None:
        jsii.set(self, "tableMeta", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        tags: The tags of an instance.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeoutInMinutes")
    def timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "timeoutInMinutes"))

    @timeout_in_minutes.setter
    def timeout_in_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "timeoutInMinutes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "character_set_name": "characterSetName",
            "db_name": "dbName",
            "db_description": "dbDescription",
        },
    )
    class DBMappingsProperty:
        def __init__(
            self,
            *,
            character_set_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            db_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            '''
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            '''
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def db_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            '''
            result = self._values.get("db_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DBMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "new_name": "newName",
            "tables": "tables",
            "type": "type",
        },
    )
    class TableMetaProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            new_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            tables: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TablesProperty"]]]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param new_name: 
            :param tables: 
            :param type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if new_name is not None:
                self._values["new_name"] = new_name
            if tables is not None:
                self._values["tables"] = tables
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: Name of database you want to restore.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def new_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: newName: New database name in clone instance.
            '''
            result = self._values.get("new_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def tables(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TablesProperty"]]]]:
            '''
            :Property: tables: The table information that you want to restore.
            '''
            result = self._values.get("tables")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TablesProperty"]]]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: Restore type, db
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableMetaProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "new_name": "newName", "type": "type"},
    )
    class TablesProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            new_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param new_name: 
            :param type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if new_name is not None:
                self._values["new_name"] = new_name
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: Name of table you want to restore
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def new_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: newName: New name of the table in db
            '''
            result = self._values.get("new_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: Restore type, table
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TablesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceCloneProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "pay_type": "payType",
        "allocate_public_connection": "allocatePublicConnection",
        "backup_id": "backupId",
        "backup_retention_period": "backupRetentionPeriod",
        "backup_type": "backupType",
        "category": "category",
        "connection_string_prefix": "connectionStringPrefix",
        "connection_string_type": "connectionStringType",
        "db_instance_class": "dbInstanceClass",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_storage": "dbInstanceStorage",
        "db_instance_storage_type": "dbInstanceStorageType",
        "db_mappings": "dbMappings",
        "db_names": "dbNames",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "instance_network_type": "instanceNetworkType",
        "maintain_time": "maintainTime",
        "master_username": "masterUsername",
        "master_user_password": "masterUserPassword",
        "master_user_type": "masterUserType",
        "period": "period",
        "period_type": "periodType",
        "port": "port",
        "preferred_backup_period": "preferredBackupPeriod",
        "preferred_backup_time": "preferredBackupTime",
        "private_ip_address": "privateIpAddress",
        "restore_table": "restoreTable",
        "restore_time": "restoreTime",
        "security_group_id": "securityGroupId",
        "security_ip_list": "securityIpList",
        "slave_zone_ids": "slaveZoneIds",
        "sql_collector_status": "sqlCollectorStatus",
        "ssl_setting": "sslSetting",
        "table_meta": "tableMeta",
        "tags": "tags",
        "timeout_in_minutes": "timeoutInMinutes",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosDBInstanceCloneProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pay_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        backup_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_storage: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.DBMappingsProperty]]]] = None,
        db_names: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_table: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slave_zone_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        table_meta: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.TableMetaProperty]]]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceClone``.

        :param db_instance_id: 
        :param pay_type: 
        :param allocate_public_connection: 
        :param backup_id: 
        :param backup_retention_period: 
        :param backup_type: 
        :param category: 
        :param connection_string_prefix: 
        :param connection_string_type: 
        :param db_instance_class: 
        :param db_instance_description: 
        :param db_instance_storage: 
        :param db_instance_storage_type: 
        :param db_mappings: 
        :param db_names: 
        :param dedicated_host_group_id: 
        :param instance_network_type: 
        :param maintain_time: 
        :param master_username: 
        :param master_user_password: 
        :param master_user_type: 
        :param period: 
        :param period_type: 
        :param port: 
        :param preferred_backup_period: 
        :param preferred_backup_time: 
        :param private_ip_address: 
        :param restore_table: 
        :param restore_time: 
        :param security_group_id: 
        :param security_ip_list: 
        :param slave_zone_ids: 
        :param sql_collector_status: 
        :param ssl_setting: 
        :param table_meta: 
        :param tags: 
        :param timeout_in_minutes: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "pay_type": pay_type,
        }
        if allocate_public_connection is not None:
            self._values["allocate_public_connection"] = allocate_public_connection
        if backup_id is not None:
            self._values["backup_id"] = backup_id
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if backup_type is not None:
            self._values["backup_type"] = backup_type
        if category is not None:
            self._values["category"] = category
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if connection_string_type is not None:
            self._values["connection_string_type"] = connection_string_type
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_storage is not None:
            self._values["db_instance_storage"] = db_instance_storage
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if db_mappings is not None:
            self._values["db_mappings"] = db_mappings
        if db_names is not None:
            self._values["db_names"] = db_names
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if instance_network_type is not None:
            self._values["instance_network_type"] = instance_network_type
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if master_username is not None:
            self._values["master_username"] = master_username
        if master_user_password is not None:
            self._values["master_user_password"] = master_user_password
        if master_user_type is not None:
            self._values["master_user_type"] = master_user_type
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if port is not None:
            self._values["port"] = port
        if preferred_backup_period is not None:
            self._values["preferred_backup_period"] = preferred_backup_period
        if preferred_backup_time is not None:
            self._values["preferred_backup_time"] = preferred_backup_time
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if restore_table is not None:
            self._values["restore_table"] = restore_table
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if slave_zone_ids is not None:
            self._values["slave_zone_ids"] = slave_zone_ids
        if sql_collector_status is not None:
            self._values["sql_collector_status"] = sql_collector_status
        if ssl_setting is not None:
            self._values["ssl_setting"] = ssl_setting
        if table_meta is not None:
            self._values["table_meta"] = table_meta
        if tags is not None:
            self._values["tags"] = tags
        if timeout_in_minutes is not None:
            self._values["timeout_in_minutes"] = timeout_in_minutes
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: Instance id
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: payType: The charge type of created instance.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupId: The ID of the backup set that you want to use.
        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        '''
        result = self._values.get("backup_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupType: The type of backup used by the new instance. Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        '''
        result = self._values.get("backup_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.DBMappingsProperty]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.DBMappingsProperty]]]], result)

    @builtins.property
    def db_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbNames: The names of the databases that you want to create on the new instance.
        '''
        result = self._values.get("db_names")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        instanceNetworkType: The network type of the new instance. Valid values:

        - VPC
        - Classic
        The default value is the network type of the original instance.
        '''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        restoreTable: Specifies whether to restore specific databases and tables.
        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        '''
        result = self._values.get("restore_table")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        restoreTime: The point in time to which you want to restore the data of the original instance.
        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.TableMetaProperty]]]]:
        '''
        :Property: tableMeta: The information about the databases and tables that you want to restore.
        '''
        result = self._values.get("table_meta")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.TableMetaProperty]]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        tags: The tags of an instance.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        '''
        result = self._values.get("timeout_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceCloneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstanceParameterGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup",
):
    '''A ROS template type:  ``ALIYUN::RDS::DBInstanceParameterGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceParameterGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: Database InstanceId to update properties.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]]:
        '''
        :Property: parameters: Parameters to update for selected database instance.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]],
    ) -> None:
        jsii.set(self, "parameters", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="forcerestart")
    def forcerestart(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: forcerestart: whether restart database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "forcerestart"))

    @forcerestart.setter
    def forcerestart(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "forcerestart", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class ParametersProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: Key to update for instance property.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: value: Value to update for instance property.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceParameterGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "parameters": "parameters",
        "forcerestart": "forcerestart",
    },
)
class RosDBInstanceParameterGroupProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        parameters: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceParameterGroup.ParametersProperty]]],
        forcerestart: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param db_instance_id: 
        :param parameters: 
        :param forcerestart: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "parameters": parameters,
        }
        if forcerestart is not None:
            self._values["forcerestart"] = forcerestart

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: Database InstanceId to update properties.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceParameterGroup.ParametersProperty]]]:
        '''
        :Property: parameters: Parameters to update for selected database instance.
        '''
        result = self._values.get("parameters")
        assert result is not None, "Required property 'parameters' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceParameterGroup.ParametersProperty]]], result)

    @builtins.property
    def forcerestart(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: forcerestart: whether restart database instance.
        '''
        result = self._values.get("forcerestart")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceParameterGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_storage": "dbInstanceStorage",
        "engine": "engine",
        "engine_version": "engineVersion",
        "security_ip_list": "securityIpList",
        "allocate_public_connection": "allocatePublicConnection",
        "archive_backup_keep_count": "archiveBackupKeepCount",
        "archive_backup_keep_policy": "archiveBackupKeepPolicy",
        "archive_backup_retention_period": "archiveBackupRetentionPeriod",
        "auto_renew": "autoRenew",
        "back_up_category": "backUpCategory",
        "backup_policy_mode": "backupPolicyMode",
        "backup_retention_period": "backupRetentionPeriod",
        "category": "category",
        "compress_type": "compressType",
        "connection_mode": "connectionMode",
        "connection_string_prefix": "connectionStringPrefix",
        "connection_string_type": "connectionStringType",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_net_type": "dbInstanceNetType",
        "db_instance_storage_type": "dbInstanceStorageType",
        "db_is_ignore_case": "dbIsIgnoreCase",
        "db_mappings": "dbMappings",
        "db_param_group_id": "dbParamGroupId",
        "db_time_zone": "dbTimeZone",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "enable_backup_log": "enableBackupLog",
        "encryption_key": "encryptionKey",
        "high_space_usage_protection": "highSpaceUsageProtection",
        "local_log_retention_hours": "localLogRetentionHours",
        "local_log_retention_space": "localLogRetentionSpace",
        "log_backup_frequency": "logBackupFrequency",
        "log_backup_local_retention_number": "logBackupLocalRetentionNumber",
        "log_backup_retention_period": "logBackupRetentionPeriod",
        "maintain_time": "maintainTime",
        "master_username": "masterUsername",
        "master_user_password": "masterUserPassword",
        "master_user_type": "masterUserType",
        "multi_az": "multiAz",
        "pay_type": "payType",
        "period": "period",
        "period_type": "periodType",
        "port": "port",
        "preferred_backup_period": "preferredBackupPeriod",
        "preferred_backup_time": "preferredBackupTime",
        "private_ip_address": "privateIpAddress",
        "released_keep_policy": "releasedKeepPolicy",
        "resource_group_id": "resourceGroupId",
        "role_arn": "roleArn",
        "security_group_id": "securityGroupId",
        "slave_zone_ids": "slaveZoneIds",
        "sql_collector_status": "sqlCollectorStatus",
        "ssl_setting": "sslSetting",
        "tags": "tags",
        "target_dedicated_host_id_for_log": "targetDedicatedHostIdForLog",
        "target_dedicated_host_id_for_master": "targetDedicatedHostIdForMaster",
        "target_dedicated_host_id_for_slave": "targetDedicatedHostIdForSlave",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosDBInstanceProps:
    def __init__(
        self,
        *,
        db_instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        engine: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        security_ip_list: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        back_up_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_policy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        compress_type: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        connection_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_net_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosDBInstance.DBMappingsProperty]]]] = None,
        db_param_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_backup_log: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        high_space_usage_protection: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        local_log_retention_space: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        log_backup_frequency: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        released_keep_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slave_zone_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstance``.

        :param db_instance_class: 
        :param db_instance_storage: 
        :param engine: 
        :param engine_version: 
        :param security_ip_list: 
        :param allocate_public_connection: 
        :param archive_backup_keep_count: 
        :param archive_backup_keep_policy: 
        :param archive_backup_retention_period: 
        :param auto_renew: 
        :param back_up_category: 
        :param backup_policy_mode: 
        :param backup_retention_period: 
        :param category: 
        :param compress_type: 
        :param connection_mode: 
        :param connection_string_prefix: 
        :param connection_string_type: 
        :param db_instance_description: 
        :param db_instance_net_type: 
        :param db_instance_storage_type: 
        :param db_is_ignore_case: 
        :param db_mappings: 
        :param db_param_group_id: 
        :param db_time_zone: 
        :param dedicated_host_group_id: 
        :param enable_backup_log: 
        :param encryption_key: 
        :param high_space_usage_protection: 
        :param local_log_retention_hours: 
        :param local_log_retention_space: 
        :param log_backup_frequency: 
        :param log_backup_local_retention_number: 
        :param log_backup_retention_period: 
        :param maintain_time: 
        :param master_username: 
        :param master_user_password: 
        :param master_user_type: 
        :param multi_az: 
        :param pay_type: 
        :param period: 
        :param period_type: 
        :param port: 
        :param preferred_backup_period: 
        :param preferred_backup_time: 
        :param private_ip_address: 
        :param released_keep_policy: 
        :param resource_group_id: 
        :param role_arn: 
        :param security_group_id: 
        :param slave_zone_ids: 
        :param sql_collector_status: 
        :param ssl_setting: 
        :param tags: 
        :param target_dedicated_host_id_for_log: 
        :param target_dedicated_host_id_for_master: 
        :param target_dedicated_host_id_for_slave: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
            "engine": engine,
            "engine_version": engine_version,
            "security_ip_list": security_ip_list,
        }
        if allocate_public_connection is not None:
            self._values["allocate_public_connection"] = allocate_public_connection
        if archive_backup_keep_count is not None:
            self._values["archive_backup_keep_count"] = archive_backup_keep_count
        if archive_backup_keep_policy is not None:
            self._values["archive_backup_keep_policy"] = archive_backup_keep_policy
        if archive_backup_retention_period is not None:
            self._values["archive_backup_retention_period"] = archive_backup_retention_period
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if back_up_category is not None:
            self._values["back_up_category"] = back_up_category
        if backup_policy_mode is not None:
            self._values["backup_policy_mode"] = backup_policy_mode
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if category is not None:
            self._values["category"] = category
        if compress_type is not None:
            self._values["compress_type"] = compress_type
        if connection_mode is not None:
            self._values["connection_mode"] = connection_mode
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if connection_string_type is not None:
            self._values["connection_string_type"] = connection_string_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_net_type is not None:
            self._values["db_instance_net_type"] = db_instance_net_type
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if db_is_ignore_case is not None:
            self._values["db_is_ignore_case"] = db_is_ignore_case
        if db_mappings is not None:
            self._values["db_mappings"] = db_mappings
        if db_param_group_id is not None:
            self._values["db_param_group_id"] = db_param_group_id
        if db_time_zone is not None:
            self._values["db_time_zone"] = db_time_zone
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if enable_backup_log is not None:
            self._values["enable_backup_log"] = enable_backup_log
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if high_space_usage_protection is not None:
            self._values["high_space_usage_protection"] = high_space_usage_protection
        if local_log_retention_hours is not None:
            self._values["local_log_retention_hours"] = local_log_retention_hours
        if local_log_retention_space is not None:
            self._values["local_log_retention_space"] = local_log_retention_space
        if log_backup_frequency is not None:
            self._values["log_backup_frequency"] = log_backup_frequency
        if log_backup_local_retention_number is not None:
            self._values["log_backup_local_retention_number"] = log_backup_local_retention_number
        if log_backup_retention_period is not None:
            self._values["log_backup_retention_period"] = log_backup_retention_period
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if master_username is not None:
            self._values["master_username"] = master_username
        if master_user_password is not None:
            self._values["master_user_password"] = master_user_password
        if master_user_type is not None:
            self._values["master_user_type"] = master_user_type
        if multi_az is not None:
            self._values["multi_az"] = multi_az
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if port is not None:
            self._values["port"] = port
        if preferred_backup_period is not None:
            self._values["preferred_backup_period"] = preferred_backup_period
        if preferred_backup_time is not None:
            self._values["preferred_backup_time"] = preferred_backup_time
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if released_keep_policy is not None:
            self._values["released_keep_policy"] = released_keep_policy
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if role_arn is not None:
            self._values["role_arn"] = role_arn
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if slave_zone_ids is not None:
            self._values["slave_zone_ids"] = slave_zone_ids
        if sql_collector_status is not None:
            self._values["sql_collector_status"] = sql_collector_status
        if ssl_setting is not None:
            self._values["ssl_setting"] = ssl_setting
        if tags is not None:
            self._values["tags"] = tags
        if target_dedicated_host_id_for_log is not None:
            self._values["target_dedicated_host_id_for_log"] = target_dedicated_host_id_for_log
        if target_dedicated_host_id_for_master is not None:
            self._values["target_dedicated_host_id_for_master"] = target_dedicated_host_id_for_master
        if target_dedicated_host_id_for_slave is not None:
            self._values["target_dedicated_host_id_for_slave"] = target_dedicated_host_id_for_slave
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def security_ip_list(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        '''
        result = self._values.get("security_ip_list")
        assert result is not None, "Required property 'security_ip_list' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values:
        The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
        parameter is set to ByMonth.
        The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
        parameter is set to ByWeek.
        Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
        parameter is set to KeepAll.
        '''
        result = self._values.get("archive_backup_keep_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        result = self._values.get("archive_backup_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        result = self._values.get("archive_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        result = self._values.get("back_up_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupPolicyMode: Backup type,
        DataBackupPolicy: data backup
        LogBackupPolicy: log backup
        '''
        result = self._values.get("backup_policy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        compressType: The format used to compress backups. Valid values:
        1: The zlib tool is used to compress backups into .tar.gz files.
        4: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
        It can be used to restore individual databases and tables.
        8: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 8.0.
        It cannot be used to restore individual databases or tables.
        '''
        result = self._values.get("compress_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        '''
        result = self._values.get("db_instance_net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        result = self._values.get("db_is_ignore_case")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstance.DBMappingsProperty]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstance.DBMappingsProperty]]]], result)

    @builtins.property
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        '''
        result = self._values.get("db_param_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableBackupLog: Specifies whether to enable the log backup function. Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("enable_backup_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
        instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("high_space_usage_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_hours")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupFrequency: The frequency at which to back up logs. Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        result = self._values.get("log_backup_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
        Default value: 60. Valid values: 6 to 100.
        '''
        result = self._values.get("log_backup_local_retention_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        result = self._values.get("log_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        '''
        result = self._values.get("multi_az")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payType: The charge type of created instance.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        result = self._values.get("released_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        tags: The tags of an instance.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def target_dedicated_host_id_for_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_log")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_master")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_slave")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstanceSecurityIps(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceSecurityIps",
):
    '''A ROS template type:  ``ALIYUN::RDS::DBInstanceSecurityIps``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceSecurityIpsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SecurityIps: The security ips of selected database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityIps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: Database instance id to update security ips.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceIpArrayAttribute")
    def db_instance_ip_array_attribute(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceIpArrayAttribute: Security ips to add or remove.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceIpArrayAttribute"))

    @db_instance_ip_array_attribute.setter
    def db_instance_ip_array_attribute(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceIpArrayAttribute", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceIpArrayName")
    def db_instance_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceIpArrayName"))

    @db_instance_ip_array_name.setter
    def db_instance_ip_array_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceIpArrayName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceSecurityIpsProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "db_instance_ip_array_attribute": "dbInstanceIpArrayAttribute",
        "db_instance_ip_array_name": "dbInstanceIpArrayName",
    },
)
class RosDBInstanceSecurityIpsProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_ip_array_attribute: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_ip_array_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param db_instance_id: 
        :param db_instance_ip_array_attribute: 
        :param db_instance_ip_array_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "db_instance_ip_array_attribute": db_instance_ip_array_attribute,
        }
        if db_instance_ip_array_name is not None:
            self._values["db_instance_ip_array_name"] = db_instance_ip_array_name

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: Database instance id to update security ips.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_ip_array_attribute(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceIpArrayAttribute: Security ips to add or remove.
        '''
        result = self._values.get("db_instance_ip_array_attribute")
        assert result is not None, "Required property 'db_instance_ip_array_attribute' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        '''
        result = self._values.get("db_instance_ip_array_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceSecurityIpsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDatabase(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDatabase",
):
    '''A ROS template type:  ``ALIYUN::RDS::Database``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDatabaseProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::Database``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBName: The name of the database.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="characterSetName")
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        characterSetName: The character set you want to use for the database. Valid values:
        MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
        SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
        | Chinese_PRC_BIN.
        PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
        WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
        | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
        | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
        SQL_ASCII.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "characterSetName"))

    @character_set_name.setter
    def character_set_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "characterSetName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dbName: The name of the database you want to create.
        Note
        The name must be 2 to 64 characters in length.
        The name must start with a lowercase letter and end with a lowercase letter or digit.
        The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
        The name must be unique in the instance.
        For more information about invalid characters, see Forbidden keywords table.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbDescription")
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbDescription: The description of the database. The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbDescription"))

    @db_description.setter
    def db_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbDescription", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosDatabaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "character_set_name": "characterSetName",
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
        "db_description": "dbDescription",
    },
)
class RosDatabaseProps:
    def __init__(
        self,
        *,
        character_set_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::Database``.

        :param character_set_name: 
        :param db_instance_id: 
        :param db_name: 
        :param db_description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "character_set_name": character_set_name,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }
        if db_description is not None:
            self._values["db_description"] = db_description

    @builtins.property
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        characterSetName: The character set you want to use for the database. Valid values:
        MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
        SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
        | Chinese_PRC_BIN.
        PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
        WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
        | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
        | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
        SQL_ASCII.
        '''
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dbName: The name of the database you want to create.
        Note
        The name must be 2 to 64 characters in length.
        The name must start with a lowercase letter and end with a lowercase letter or digit.
        The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
        The name must be unique in the instance.
        For more information about invalid characters, see Forbidden keywords table.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbDescription: The description of the database. The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        '''
        result = self._values.get("db_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrepayDBInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosPrepayDBInstance",
):
    '''A ROS template type:  ``ALIYUN::RDS::PrepayDBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPrepayDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::PrepayDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InnerPort: Intranet port of created DB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The order id list of created instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicPort: Internet port of created DB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="commodityCode")
    def commodity_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: commodityCode: The CommodityCode of the order.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "commodityCode"))

    @commodity_code.setter
    def commodity_code(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "commodityCode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "engine", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodType")
    def period_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "periodType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "allocatePublicConnection"))

    @allocate_public_connection.setter
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="archiveBackupKeepCount")
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values:
        The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
        parameter is set to ByMonth.
        The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
        parameter is set to ByWeek.
        Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
        parameter is set to KeepAll.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "archiveBackupKeepCount"))

    @archive_backup_keep_count.setter
    def archive_backup_keep_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "archiveBackupKeepCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="archiveBackupKeepPolicy")
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "archiveBackupKeepPolicy"))

    @archive_backup_keep_policy.setter
    def archive_backup_keep_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "archiveBackupKeepPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="archiveBackupRetentionPeriod")
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "archiveBackupRetentionPeriod"))

    @archive_backup_retention_period.setter
    def archive_backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "archiveBackupRetentionPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Automatic Payment. Default is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backUpCategory")
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backUpCategory"))

    @back_up_category.setter
    def back_up_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backUpCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupPolicyMode")
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupPolicyMode: Backup type,
        DataBackupPolicy: data backup
        LogBackupPolicy: log backup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backupPolicyMode"))

    @backup_policy_mode.setter
    def backup_policy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupPolicyMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "backupRetentionPeriod"))

    @backup_retention_period.setter
    def backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="compressType")
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        compressType: The format used to compress backups. Valid values:
        1: The zlib tool is used to compress backups into .tar.gz files.
        4: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
        It can be used to restore individual databases and tables.
        8: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 8.0.
        It cannot be used to restore individual databases or tables.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "compressType"))

    @compress_type.setter
    def compress_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "compressType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionMode")
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionMode"))

    @connection_mode.setter
    def connection_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionStringType"))

    @connection_string_type.setter
    def connection_string_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionStringType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="couponCode")
    def coupon_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: couponCode: The coupon code of the order.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "couponCode"))

    @coupon_code.setter
    def coupon_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "couponCode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceNetType")
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceNetType"))

    @db_instance_net_type.setter
    def db_instance_net_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceNetType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbIsIgnoreCase")
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "dbIsIgnoreCase"))

    @db_is_ignore_case.setter
    def db_is_ignore_case(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbIsIgnoreCase", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]], jsii.get(self, "dbMappings"))

    @db_mappings.setter
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]],
    ) -> None:
        jsii.set(self, "dbMappings", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbParamGroupId")
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbParamGroupId"))

    @db_param_group_id.setter
    def db_param_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbParamGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbTimeZone")
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbTimeZone"))

    @db_time_zone.setter
    def db_time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbTimeZone", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableBackupLog")
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableBackupLog: Specifies whether to enable the log backup function. Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableBackupLog"))

    @enable_backup_log.setter
    def enable_backup_log(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableBackupLog", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encryptionKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="highSpaceUsageProtection")
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
        instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "highSpaceUsageProtection"))

    @high_space_usage_protection.setter
    def high_space_usage_protection(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "highSpaceUsageProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localLogRetentionHours")
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "localLogRetentionHours"))

    @local_log_retention_hours.setter
    def local_log_retention_hours(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "localLogRetentionHours", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localLogRetentionSpace")
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "localLogRetentionSpace"))

    @local_log_retention_space.setter
    def local_log_retention_space(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "localLogRetentionSpace", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logBackupFrequency")
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupFrequency: The frequency at which to back up logs. Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logBackupFrequency"))

    @log_backup_frequency.setter
    def log_backup_frequency(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logBackupFrequency", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logBackupLocalRetentionNumber")
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
        Default value: 60. Valid values: 6 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "logBackupLocalRetentionNumber"))

    @log_backup_local_retention_number.setter
    def log_backup_local_retention_number(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logBackupLocalRetentionNumber", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logBackupRetentionPeriod")
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "logBackupRetentionPeriod"))

    @log_backup_retention_period.setter
    def log_backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logBackupRetentionPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "maintainTime"))

    @maintain_time.setter
    def maintain_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maintainTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUsername")
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUsername"))

    @master_username.setter
    def master_username(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUsername", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUserPassword"))

    @master_user_password.setter
    def master_user_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUserPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterUserType"))

    @master_user_type.setter
    def master_user_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterUserType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="multiAz")
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "multiAz"))

    @multi_az.setter
    def multi_az(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "multiAz", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="port")
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "preferredBackupPeriod"))

    @preferred_backup_period.setter
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "preferredBackupTime"))

    @preferred_backup_time.setter
    def preferred_backup_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="quantity")
    def quantity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: quantity: The number of instance to be created, default is 1, max number is 99
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "quantity"))

    @quantity.setter
    def quantity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "quantity", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="releasedKeepPolicy")
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "releasedKeepPolicy"))

    @released_keep_policy.setter
    def released_keep_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "releasedKeepPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="roleArn")
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "roleArn"))

    @role_arn.setter
    def role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "roleArn", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="slaveZoneIds")
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "slaveZoneIds"))

    @slave_zone_ids.setter
    def slave_zone_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "slaveZoneIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sqlCollectorStatus"))

    @sql_collector_status.setter
    def sql_collector_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sslSetting"))

    @ssl_setting.setter
    def ssl_setting(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sslSetting", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        tags: The tags of an instance.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetDedicatedHostIdForLog")
    def target_dedicated_host_id_for_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "targetDedicatedHostIdForLog"))

    @target_dedicated_host_id_for_log.setter
    def target_dedicated_host_id_for_log(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForLog", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetDedicatedHostIdForMaster")
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "targetDedicatedHostIdForMaster"))

    @target_dedicated_host_id_for_master.setter
    def target_dedicated_host_id_for_master(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForMaster", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetDedicatedHostIdForSlave")
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "targetDedicatedHostIdForSlave"))

    @target_dedicated_host_id_for_slave.setter
    def target_dedicated_host_id_for_slave(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForSlave", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "character_set_name": "characterSetName",
            "db_name": "dbName",
            "db_description": "dbDescription",
        },
    )
    class DBMappingsProperty:
        def __init__(
            self,
            *,
            character_set_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            db_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            '''
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            '''
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def db_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            '''
            result = self._values.get("db_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DBMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosPrepayDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "commodity_code": "commodityCode",
        "db_instance_class": "dbInstanceClass",
        "db_instance_storage": "dbInstanceStorage",
        "engine": "engine",
        "engine_version": "engineVersion",
        "period": "period",
        "period_type": "periodType",
        "allocate_public_connection": "allocatePublicConnection",
        "archive_backup_keep_count": "archiveBackupKeepCount",
        "archive_backup_keep_policy": "archiveBackupKeepPolicy",
        "archive_backup_retention_period": "archiveBackupRetentionPeriod",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "back_up_category": "backUpCategory",
        "backup_policy_mode": "backupPolicyMode",
        "backup_retention_period": "backupRetentionPeriod",
        "category": "category",
        "compress_type": "compressType",
        "connection_mode": "connectionMode",
        "connection_string_prefix": "connectionStringPrefix",
        "connection_string_type": "connectionStringType",
        "coupon_code": "couponCode",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_net_type": "dbInstanceNetType",
        "db_instance_storage_type": "dbInstanceStorageType",
        "db_is_ignore_case": "dbIsIgnoreCase",
        "db_mappings": "dbMappings",
        "db_param_group_id": "dbParamGroupId",
        "db_time_zone": "dbTimeZone",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "enable_backup_log": "enableBackupLog",
        "encryption_key": "encryptionKey",
        "high_space_usage_protection": "highSpaceUsageProtection",
        "local_log_retention_hours": "localLogRetentionHours",
        "local_log_retention_space": "localLogRetentionSpace",
        "log_backup_frequency": "logBackupFrequency",
        "log_backup_local_retention_number": "logBackupLocalRetentionNumber",
        "log_backup_retention_period": "logBackupRetentionPeriod",
        "maintain_time": "maintainTime",
        "master_username": "masterUsername",
        "master_user_password": "masterUserPassword",
        "master_user_type": "masterUserType",
        "multi_az": "multiAz",
        "port": "port",
        "preferred_backup_period": "preferredBackupPeriod",
        "preferred_backup_time": "preferredBackupTime",
        "private_ip_address": "privateIpAddress",
        "quantity": "quantity",
        "released_keep_policy": "releasedKeepPolicy",
        "resource_group_id": "resourceGroupId",
        "role_arn": "roleArn",
        "security_group_id": "securityGroupId",
        "slave_zone_ids": "slaveZoneIds",
        "sql_collector_status": "sqlCollectorStatus",
        "ssl_setting": "sslSetting",
        "tags": "tags",
        "target_dedicated_host_id_for_log": "targetDedicatedHostIdForLog",
        "target_dedicated_host_id_for_master": "targetDedicatedHostIdForMaster",
        "target_dedicated_host_id_for_slave": "targetDedicatedHostIdForSlave",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosPrepayDBInstanceProps:
    def __init__(
        self,
        *,
        commodity_code: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        engine: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        period: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        period_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        back_up_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_policy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        compress_type: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        connection_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        coupon_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_net_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosPrepayDBInstance.DBMappingsProperty]]]] = None,
        db_param_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_backup_log: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        high_space_usage_protection: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        local_log_retention_space: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        log_backup_frequency: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        quantity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        released_keep_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slave_zone_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::PrepayDBInstance``.

        :param commodity_code: 
        :param db_instance_class: 
        :param db_instance_storage: 
        :param engine: 
        :param engine_version: 
        :param period: 
        :param period_type: 
        :param allocate_public_connection: 
        :param archive_backup_keep_count: 
        :param archive_backup_keep_policy: 
        :param archive_backup_retention_period: 
        :param auto_pay: 
        :param auto_renew: 
        :param back_up_category: 
        :param backup_policy_mode: 
        :param backup_retention_period: 
        :param category: 
        :param compress_type: 
        :param connection_mode: 
        :param connection_string_prefix: 
        :param connection_string_type: 
        :param coupon_code: 
        :param db_instance_description: 
        :param db_instance_net_type: 
        :param db_instance_storage_type: 
        :param db_is_ignore_case: 
        :param db_mappings: 
        :param db_param_group_id: 
        :param db_time_zone: 
        :param dedicated_host_group_id: 
        :param enable_backup_log: 
        :param encryption_key: 
        :param high_space_usage_protection: 
        :param local_log_retention_hours: 
        :param local_log_retention_space: 
        :param log_backup_frequency: 
        :param log_backup_local_retention_number: 
        :param log_backup_retention_period: 
        :param maintain_time: 
        :param master_username: 
        :param master_user_password: 
        :param master_user_type: 
        :param multi_az: 
        :param port: 
        :param preferred_backup_period: 
        :param preferred_backup_time: 
        :param private_ip_address: 
        :param quantity: 
        :param released_keep_policy: 
        :param resource_group_id: 
        :param role_arn: 
        :param security_group_id: 
        :param slave_zone_ids: 
        :param sql_collector_status: 
        :param ssl_setting: 
        :param tags: 
        :param target_dedicated_host_id_for_log: 
        :param target_dedicated_host_id_for_master: 
        :param target_dedicated_host_id_for_slave: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "commodity_code": commodity_code,
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
            "engine": engine,
            "engine_version": engine_version,
            "period": period,
            "period_type": period_type,
        }
        if allocate_public_connection is not None:
            self._values["allocate_public_connection"] = allocate_public_connection
        if archive_backup_keep_count is not None:
            self._values["archive_backup_keep_count"] = archive_backup_keep_count
        if archive_backup_keep_policy is not None:
            self._values["archive_backup_keep_policy"] = archive_backup_keep_policy
        if archive_backup_retention_period is not None:
            self._values["archive_backup_retention_period"] = archive_backup_retention_period
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if back_up_category is not None:
            self._values["back_up_category"] = back_up_category
        if backup_policy_mode is not None:
            self._values["backup_policy_mode"] = backup_policy_mode
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if category is not None:
            self._values["category"] = category
        if compress_type is not None:
            self._values["compress_type"] = compress_type
        if connection_mode is not None:
            self._values["connection_mode"] = connection_mode
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if connection_string_type is not None:
            self._values["connection_string_type"] = connection_string_type
        if coupon_code is not None:
            self._values["coupon_code"] = coupon_code
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_net_type is not None:
            self._values["db_instance_net_type"] = db_instance_net_type
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if db_is_ignore_case is not None:
            self._values["db_is_ignore_case"] = db_is_ignore_case
        if db_mappings is not None:
            self._values["db_mappings"] = db_mappings
        if db_param_group_id is not None:
            self._values["db_param_group_id"] = db_param_group_id
        if db_time_zone is not None:
            self._values["db_time_zone"] = db_time_zone
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if enable_backup_log is not None:
            self._values["enable_backup_log"] = enable_backup_log
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if high_space_usage_protection is not None:
            self._values["high_space_usage_protection"] = high_space_usage_protection
        if local_log_retention_hours is not None:
            self._values["local_log_retention_hours"] = local_log_retention_hours
        if local_log_retention_space is not None:
            self._values["local_log_retention_space"] = local_log_retention_space
        if log_backup_frequency is not None:
            self._values["log_backup_frequency"] = log_backup_frequency
        if log_backup_local_retention_number is not None:
            self._values["log_backup_local_retention_number"] = log_backup_local_retention_number
        if log_backup_retention_period is not None:
            self._values["log_backup_retention_period"] = log_backup_retention_period
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if master_username is not None:
            self._values["master_username"] = master_username
        if master_user_password is not None:
            self._values["master_user_password"] = master_user_password
        if master_user_type is not None:
            self._values["master_user_type"] = master_user_type
        if multi_az is not None:
            self._values["multi_az"] = multi_az
        if port is not None:
            self._values["port"] = port
        if preferred_backup_period is not None:
            self._values["preferred_backup_period"] = preferred_backup_period
        if preferred_backup_time is not None:
            self._values["preferred_backup_time"] = preferred_backup_time
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if quantity is not None:
            self._values["quantity"] = quantity
        if released_keep_policy is not None:
            self._values["released_keep_policy"] = released_keep_policy
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if role_arn is not None:
            self._values["role_arn"] = role_arn
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if slave_zone_ids is not None:
            self._values["slave_zone_ids"] = slave_zone_ids
        if sql_collector_status is not None:
            self._values["sql_collector_status"] = sql_collector_status
        if ssl_setting is not None:
            self._values["ssl_setting"] = ssl_setting
        if tags is not None:
            self._values["tags"] = tags
        if target_dedicated_host_id_for_log is not None:
            self._values["target_dedicated_host_id_for_log"] = target_dedicated_host_id_for_log
        if target_dedicated_host_id_for_master is not None:
            self._values["target_dedicated_host_id_for_master"] = target_dedicated_host_id_for_master
        if target_dedicated_host_id_for_slave is not None:
            self._values["target_dedicated_host_id_for_slave"] = target_dedicated_host_id_for_slave
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def commodity_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: commodityCode: The CommodityCode of the order.
        '''
        result = self._values.get("commodity_code")
        assert result is not None, "Required property 'commodity_code' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def period_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        result = self._values.get("period_type")
        assert result is not None, "Required property 'period_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values:
        The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
        parameter is set to ByMonth.
        The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
        parameter is set to ByWeek.
        Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
        parameter is set to KeepAll.
        '''
        result = self._values.get("archive_backup_keep_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        result = self._values.get("archive_backup_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        result = self._values.get("archive_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Automatic Payment. Default is false.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        result = self._values.get("back_up_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupPolicyMode: Backup type,
        DataBackupPolicy: data backup
        LogBackupPolicy: log backup
        '''
        result = self._values.get("backup_policy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        compressType: The format used to compress backups. Valid values:
        1: The zlib tool is used to compress backups into .tar.gz files.
        4: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
        It can be used to restore individual databases and tables.
        8: The QuickLZ tool is used to compress backups into .xb.gz files.
        This compression format is supported only when the instance runs MySQL 8.0.
        It cannot be used to restore individual databases or tables.
        '''
        result = self._values.get("compress_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def coupon_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: couponCode: The coupon code of the order.
        '''
        result = self._values.get("coupon_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        '''
        result = self._values.get("db_instance_net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        result = self._values.get("db_is_ignore_case")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosPrepayDBInstance.DBMappingsProperty]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosPrepayDBInstance.DBMappingsProperty]]]], result)

    @builtins.property
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        '''
        result = self._values.get("db_param_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableBackupLog: Specifies whether to enable the log backup function. Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("enable_backup_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
        instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("high_space_usage_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_hours")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupFrequency: The frequency at which to back up logs. Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        result = self._values.get("log_backup_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
        Default value: 60. Valid values: 6 to 100.
        '''
        result = self._values.get("log_backup_local_retention_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        result = self._values.get("log_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        '''
        result = self._values.get("multi_az")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def quantity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: quantity: The number of instance to be created, default is 1, max number is 99
        '''
        result = self._values.get("quantity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        result = self._values.get("released_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        tags: The tags of an instance.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def target_dedicated_host_id_for_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_log")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_master")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_slave")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrepayDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosReadOnlyDBInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosReadOnlyDBInstance",
):
    '''A ROS template type:  ``ALIYUN::RDS::ReadOnlyDBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosReadOnlyDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::ReadOnlyDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionString: DB instance connection url by Intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: Intranet port of created DB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the master instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        category: The RDS edition of the read-only instance. Valid values:
        Basic: Basic Edition.
        HighAvailability: High-availability Edition. This is the default value.
        AlwaysOn: Cluster Edition.
        Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The type of storage media that is used by the instance. Valid values:
        local_ssd: local SSDs
        cloud_ssd: standard SSDs
        cloud_essd: ESSDs of performance level 1 (PL1)
        cloud_essd2: ESSDs of PL2
        cloud_essd3: ESSDs of PL3
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payType: The billing method. Valid value: Postpaid, Prepaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        tags: The tags of an instance.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosReadOnlyDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_id": "dbInstanceId",
        "db_instance_storage": "dbInstanceStorage",
        "engine_version": "engineVersion",
        "zone_id": "zoneId",
        "auto_renew": "autoRenew",
        "category": "category",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_storage_type": "dbInstanceStorageType",
        "pay_type": "payType",
        "period": "period",
        "period_type": "periodType",
        "private_ip_address": "privateIpAddress",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosReadOnlyDBInstanceProps:
    def __init__(
        self,
        *,
        db_instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::ReadOnlyDBInstance``.

        :param db_instance_class: 
        :param db_instance_id: 
        :param db_instance_storage: 
        :param engine_version: 
        :param zone_id: 
        :param auto_renew: 
        :param category: 
        :param db_instance_description: 
        :param db_instance_storage_type: 
        :param pay_type: 
        :param period: 
        :param period_type: 
        :param private_ip_address: 
        :param resource_group_id: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_id": db_instance_id,
            "db_instance_storage": db_instance_storage,
            "engine_version": engine_version,
            "zone_id": zone_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if category is not None:
            self._values["category"] = category
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the master instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        category: The RDS edition of the read-only instance. Valid values:
        Basic: Basic Edition.
        HighAvailability: High-availability Edition. This is the default value.
        AlwaysOn: Cluster Edition.
        Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The type of storage media that is used by the instance. Valid values:
        local_ssd: local SSDs
        cloud_ssd: standard SSDs
        cloud_essd: ESSDs of performance level 1 (PL1)
        cloud_essd2: ESSDs of PL2
        cloud_essd3: ESSDs of PL3
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payType: The billing method. Valid value: Postpaid, Prepaid.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        tags: The tags of an instance.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 5 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosReadOnlyDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ADInfo",
    "ADInfoProps",
    "Account",
    "AccountPrivilege",
    "AccountPrivilegeProps",
    "AccountProps",
    "DBInstance",
    "DBInstanceClone",
    "DBInstanceCloneProps",
    "DBInstanceParameterGroup",
    "DBInstanceParameterGroupProps",
    "DBInstanceProps",
    "DBInstanceSecurityIps",
    "DBInstanceSecurityIpsProps",
    "Database",
    "DatabaseProps",
    "PrepayDBInstance",
    "PrepayDBInstanceProps",
    "ReadOnlyDBInstance",
    "ReadOnlyDBInstanceProps",
    "RosADInfo",
    "RosADInfoProps",
    "RosAccount",
    "RosAccountPrivilege",
    "RosAccountPrivilegeProps",
    "RosAccountProps",
    "RosDBInstance",
    "RosDBInstanceClone",
    "RosDBInstanceCloneProps",
    "RosDBInstanceParameterGroup",
    "RosDBInstanceParameterGroupProps",
    "RosDBInstanceProps",
    "RosDBInstanceSecurityIps",
    "RosDBInstanceSecurityIpsProps",
    "RosDatabase",
    "RosDatabaseProps",
    "RosPrepayDBInstance",
    "RosPrepayDBInstanceProps",
    "RosReadOnlyDBInstance",
    "RosReadOnlyDBInstanceProps",
]

publication.publish()
