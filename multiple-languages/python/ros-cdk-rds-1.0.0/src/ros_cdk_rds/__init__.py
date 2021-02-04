"""
## Aliyun ROS RDS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_rds as RDS
```
"""
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
    """A ROS resource type:  ``ALIYUN::RDS::ADInfo``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ADInfoProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::ADInfo``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ADInfo, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAddns")
    def attr_addns(self) -> typing.Any:
        """
        :Attribute: ADDNS: Active directory domain name.
        """
        return jsii.get(self, "attrAddns")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The ID of the instance.
        """
        return jsii.get(self, "attrDbInstanceId")


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
        ad_account_name: builtins.str,
        addns: builtins.str,
        ad_password: builtins.str,
        ad_server_ip_address: builtins.str,
        db_instance_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::ADInfo``.

        :param ad_account_name: 
        :param addns: 
        :param ad_password: 
        :param ad_server_ip_address: 
        :param db_instance_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ad_account_name": ad_account_name,
            "addns": addns,
            "ad_password": ad_password,
            "ad_server_ip_address": ad_server_ip_address,
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def ad_account_name(self) -> builtins.str:
        """
        :Property: adAccountName: Domain account name.
        """
        result = self._values.get("ad_account_name")
        assert result is not None, "Required property 'ad_account_name' is missing"
        return result

    @builtins.property
    def addns(self) -> builtins.str:
        """
        :Property: addns: Active directory domain name.
        """
        result = self._values.get("addns")
        assert result is not None, "Required property 'addns' is missing"
        return result

    @builtins.property
    def ad_password(self) -> builtins.str:
        """
        :Property: adPassword: Domain password.
        """
        result = self._values.get("ad_password")
        assert result is not None, "Required property 'ad_password' is missing"
        return result

    @builtins.property
    def ad_server_ip_address(self) -> builtins.str:
        """
        :Property: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        """
        result = self._values.get("ad_server_ip_address")
        assert result is not None, "Required property 'ad_server_ip_address' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the instance.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::RDS::Account``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Account, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> typing.Any:
        """
        :Attribute: AccountName: Account name
        """
        return jsii.get(self, "attrAccountName")


class AccountPrivilege(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.AccountPrivilege",
):
    """A ROS resource type:  ``ALIYUN::RDS::AccountPrivilege``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountPrivilegeProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::AccountPrivilege``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AccountPrivilege, self, [scope, id, props, enable_resource_property_constraint])


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
        account_name: builtins.str,
        account_privilege: builtins.str,
        db_instance_id: builtins.str,
        db_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::AccountPrivilege``.

        :param account_name: 
        :param account_privilege: 
        :param db_instance_id: 
        :param db_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(self) -> builtins.str:
        """
        :Property: accountName: RDS account name.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_privilege(self) -> builtins.str:
        """
        :Property: accountPrivilege: RDS account privilege
        """
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: RDS instance ID.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_name(self) -> builtins.str:
        """
        :Property: dbName: RDS database name
        """
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return result

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
        account_name: builtins.str,
        account_password: builtins.str,
        db_instance_id: builtins.str,
        account_description: typing.Optional[builtins.str] = None,
        account_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::Account``.

        :param account_name: 
        :param account_password: 
        :param db_instance_id: 
        :param account_description: 
        :param account_type: 
        """
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
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: Account name, which must be unique and meet the following requirements:
        Start with a letter;
        Consist of lower-case letters, digits, and underscores (_);
        Contain no more than 16 characters.
        For other invalid characters, see Forbidden keywords table.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_password(self) -> builtins.str:
        """
        :Property: accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        """
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: RDS instance ID.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: Account remarks.
        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        """
        result = self._values.get("account_description")
        return result

    @builtins.property
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        """
        result = self._values.get("account_type")
        return result

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
    """A ROS resource type:  ``ALIYUN::RDS::DBInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::DBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBInstance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created database instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> typing.Any:
        """
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        """
        return jsii.get(self, "attrInnerConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> typing.Any:
        """
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        """
        return jsii.get(self, "attrInnerIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> typing.Any:
        """
        :Attribute: InnerPort: Intranet port of created DB instance.
        """
        return jsii.get(self, "attrInnerPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> typing.Any:
        """
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        """
        return jsii.get(self, "attrPublicConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> typing.Any:
        """
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        """
        return jsii.get(self, "attrPublicIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> typing.Any:
        """
        :Attribute: PublicPort: Internet port of created DB instance.
        """
        return jsii.get(self, "attrPublicPort")


class DBInstanceClone(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceClone",
):
    """A ROS resource type:  ``ALIYUN::RDS::DBInstanceClone``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceCloneProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::DBInstanceClone``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBInstanceClone, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created database instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> typing.Any:
        """
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        """
        return jsii.get(self, "attrInnerConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> typing.Any:
        """
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        """
        return jsii.get(self, "attrInnerIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> typing.Any:
        """
        :Attribute: InnerPort: Intranet port of created DB instance.
        """
        return jsii.get(self, "attrInnerPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> typing.Any:
        """
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        """
        return jsii.get(self, "attrPublicConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> typing.Any:
        """
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        """
        return jsii.get(self, "attrPublicIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> typing.Any:
        """
        :Attribute: PublicPort: Internet port of created DB instance.
        """
        return jsii.get(self, "attrPublicPort")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceCloneProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "db_instance_storage": "dbInstanceStorage",
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
        db_instance_id: builtins.str,
        db_instance_storage: jsii.Number,
        pay_type: builtins.str,
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_id: typing.Optional[builtins.str] = None,
        backup_retention_period: typing.Optional[jsii.Number] = None,
        backup_type: typing.Optional[builtins.str] = None,
        category: typing.Optional[builtins.str] = None,
        connection_string_prefix: typing.Optional[builtins.str] = None,
        connection_string_type: typing.Optional[builtins.str] = None,
        db_instance_class: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        db_instance_storage_type: typing.Optional[builtins.str] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]] = None,
        db_names: typing.Optional[builtins.str] = None,
        dedicated_host_group_id: typing.Optional[builtins.str] = None,
        instance_network_type: typing.Optional[builtins.str] = None,
        maintain_time: typing.Optional[builtins.str] = None,
        master_username: typing.Optional[builtins.str] = None,
        master_user_password: typing.Optional[builtins.str] = None,
        master_user_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        period_type: typing.Optional[builtins.str] = None,
        port: typing.Optional[jsii.Number] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        restore_table: typing.Optional[builtins.str] = None,
        restore_time: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        security_ip_list: typing.Optional[builtins.str] = None,
        sql_collector_status: typing.Optional[builtins.str] = None,
        ssl_setting: typing.Optional[builtins.str] = None,
        table_meta: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        timeout_in_minutes: typing.Optional[jsii.Number] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::DBInstanceClone``.

        :param db_instance_id: 
        :param db_instance_storage: 
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
        :param sql_collector_status: 
        :param ssl_setting: 
        :param table_meta: 
        :param tags: 
        :param timeout_in_minutes: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "db_instance_storage": db_instance_storage,
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
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Instance id
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def pay_type(self) -> builtins.str:
        """
        :Property: payType: The charge type of created instance.
        """
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return result

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        result = self._values.get("allocate_public_connection")
        return result

    @builtins.property
    def backup_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupId: The ID of the backup set that you want to use.
        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        """
        result = self._values.get("backup_id")
        return result

    @builtins.property
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        result = self._values.get("backup_retention_period")
        return result

    @builtins.property
    def backup_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupType: The type of backup used by the new instance. Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        """
        result = self._values.get("backup_type")
        return result

    @builtins.property
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        result = self._values.get("category")
        return result

    @builtins.property
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        result = self._values.get("connection_string_prefix")
        return result

    @builtins.property
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        result = self._values.get("connection_string_type")
        return result

    @builtins.property
    def db_instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        result = self._values.get("db_instance_class")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        result = self._values.get("db_instance_storage_type")
        return result

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        result = self._values.get("db_mappings")
        return result

    @builtins.property
    def db_names(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbNames: The names of the databases that you want to create on the new instance.
        """
        result = self._values.get("db_names")
        return result

    @builtins.property
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        result = self._values.get("dedicated_host_group_id")
        return result

    @builtins.property
    def instance_network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceNetworkType: The network type of the new instance. Valid values:

        - VPC
        - Classic
        The default value is the network type of the original instance.
        """
        result = self._values.get("instance_network_type")
        return result

    @builtins.property
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        result = self._values.get("maintain_time")
        return result

    @builtins.property
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        result = self._values.get("master_username")
        return result

    @builtins.property
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        result = self._values.get("master_user_password")
        return result

    @builtins.property
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        result = self._values.get("master_user_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def period_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodType: Charge period for created instances.
        """
        result = self._values.get("period_type")
        return result

    @builtins.property
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        result = self._values.get("port")
        return result

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_period")
        return result

    @builtins.property
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_time")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def restore_table(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreTable: Specifies whether to restore specific databases and tables.
        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        """
        result = self._values.get("restore_table")
        return result

    @builtins.property
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreTime: The point in time to which you want to restore the data of the original instance.
        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        """
        result = self._values.get("restore_time")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def security_ip_list(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        """
        result = self._values.get("security_ip_list")
        return result

    @builtins.property
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        result = self._values.get("sql_collector_status")
        return result

    @builtins.property
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        result = self._values.get("ssl_setting")
        return result

    @builtins.property
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]]:
        """
        :Property: tableMeta: The information about the databases and tables that you want to restore.
        """
        result = self._values.get("table_meta")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
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
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def timeout_in_minutes(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        """
        result = self._values.get("timeout_in_minutes")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::RDS::DBInstanceParameterGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceParameterGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBInstanceParameterGroup, self, [scope, id, props, enable_resource_property_constraint])


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
        db_instance_id: builtins.str,
        parameters: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosDBInstanceParameterGroup.ParametersProperty", ros_cdk_core.IResolvable]]],
        forcerestart: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param db_instance_id: 
        :param parameters: 
        :param forcerestart: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "parameters": parameters,
        }
        if forcerestart is not None:
            self._values["forcerestart"] = forcerestart

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Database InstanceId to update properties.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def parameters(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosDBInstanceParameterGroup.ParametersProperty", ros_cdk_core.IResolvable]]]:
        """
        :Property: parameters: Parameters to update for selected database instance.
        """
        result = self._values.get("parameters")
        assert result is not None, "Required property 'parameters' is missing"
        return result

    @builtins.property
    def forcerestart(self) -> typing.Optional[builtins.str]:
        """
        :Property: forcerestart: whether restart database instance.
        """
        result = self._values.get("forcerestart")
        return result

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
        "backup_retention_period": "backupRetentionPeriod",
        "category": "category",
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
        "encryption_key": "encryptionKey",
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
        db_instance_class: builtins.str,
        db_instance_storage: jsii.Number,
        engine: builtins.str,
        engine_version: builtins.str,
        security_ip_list: builtins.str,
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[jsii.Number] = None,
        category: typing.Optional[builtins.str] = None,
        connection_mode: typing.Optional[builtins.str] = None,
        connection_string_prefix: typing.Optional[builtins.str] = None,
        connection_string_type: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        db_instance_net_type: typing.Optional[builtins.str] = None,
        db_instance_storage_type: typing.Optional[builtins.str] = None,
        db_is_ignore_case: typing.Optional[jsii.Number] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]] = None,
        db_param_group_id: typing.Optional[builtins.str] = None,
        db_time_zone: typing.Optional[builtins.str] = None,
        dedicated_host_group_id: typing.Optional[builtins.str] = None,
        encryption_key: typing.Optional[builtins.str] = None,
        maintain_time: typing.Optional[builtins.str] = None,
        master_username: typing.Optional[builtins.str] = None,
        master_user_password: typing.Optional[builtins.str] = None,
        master_user_type: typing.Optional[builtins.str] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        period_type: typing.Optional[builtins.str] = None,
        port: typing.Optional[jsii.Number] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        role_arn: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        slave_zone_ids: typing.Optional[typing.List[builtins.str]] = None,
        sql_collector_status: typing.Optional[builtins.str] = None,
        ssl_setting: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        target_dedicated_host_id_for_log: typing.Optional[builtins.str] = None,
        target_dedicated_host_id_for_master: typing.Optional[builtins.str] = None,
        target_dedicated_host_id_for_slave: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::DBInstance``.

        :param db_instance_class: 
        :param db_instance_storage: 
        :param engine: 
        :param engine_version: 
        :param security_ip_list: 
        :param allocate_public_connection: 
        :param backup_retention_period: 
        :param category: 
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
        :param encryption_key: 
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
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
            "engine": engine,
            "engine_version": engine_version,
            "security_ip_list": security_ip_list,
        }
        if allocate_public_connection is not None:
            self._values["allocate_public_connection"] = allocate_public_connection
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if category is not None:
            self._values["category"] = category
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
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
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
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def engine(self) -> builtins.str:
        """
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        """
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return result

    @builtins.property
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        """
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return result

    @builtins.property
    def security_ip_list(self) -> builtins.str:
        """
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        """
        result = self._values.get("security_ip_list")
        assert result is not None, "Required property 'security_ip_list' is missing"
        return result

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        result = self._values.get("allocate_public_connection")
        return result

    @builtins.property
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        result = self._values.get("backup_retention_period")
        return result

    @builtins.property
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        result = self._values.get("category")
        return result

    @builtins.property
    def connection_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        """
        result = self._values.get("connection_mode")
        return result

    @builtins.property
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        result = self._values.get("connection_string_prefix")
        return result

    @builtins.property
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        result = self._values.get("connection_string_type")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def db_instance_net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        """
        result = self._values.get("db_instance_net_type")
        return result

    @builtins.property
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        result = self._values.get("db_instance_storage_type")
        return result

    @builtins.property
    def db_is_ignore_case(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        """
        result = self._values.get("db_is_ignore_case")
        return result

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        result = self._values.get("db_mappings")
        return result

    @builtins.property
    def db_param_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        """
        result = self._values.get("db_param_group_id")
        return result

    @builtins.property
    def db_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        """
        result = self._values.get("db_time_zone")
        return result

    @builtins.property
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        result = self._values.get("dedicated_host_group_id")
        return result

    @builtins.property
    def encryption_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        """
        result = self._values.get("encryption_key")
        return result

    @builtins.property
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        result = self._values.get("maintain_time")
        return result

    @builtins.property
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        result = self._values.get("master_username")
        return result

    @builtins.property
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        result = self._values.get("master_user_password")
        return result

    @builtins.property
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        result = self._values.get("master_user_type")
        return result

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        """
        result = self._values.get("multi_az")
        return result

    @builtins.property
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: payType: The charge type of created instance.
        """
        result = self._values.get("pay_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def period_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodType: Charge period for created instances.
        """
        result = self._values.get("period_type")
        return result

    @builtins.property
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        result = self._values.get("port")
        return result

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_period")
        return result

    @builtins.property
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_time")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        """
        result = self._values.get("role_arn")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def slave_zone_ids(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        """
        result = self._values.get("slave_zone_ids")
        return result

    @builtins.property
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        result = self._values.get("sql_collector_status")
        return result

    @builtins.property
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        result = self._values.get("ssl_setting")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
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
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def target_dedicated_host_id_for_log(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_log")
        return result

    @builtins.property
    def target_dedicated_host_id_for_master(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_master")
        return result

    @builtins.property
    def target_dedicated_host_id_for_slave(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_slave")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::RDS::DBInstanceSecurityIps``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceSecurityIpsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBInstanceSecurityIps, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> typing.Any:
        """
        :Attribute: SecurityIps: The security ips of selected database instance.
        """
        return jsii.get(self, "attrSecurityIps")


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
        db_instance_id: builtins.str,
        db_instance_ip_array_attribute: builtins.str,
        db_instance_ip_array_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param db_instance_id: 
        :param db_instance_ip_array_attribute: 
        :param db_instance_ip_array_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "db_instance_ip_array_attribute": db_instance_ip_array_attribute,
        }
        if db_instance_ip_array_name is not None:
            self._values["db_instance_ip_array_name"] = db_instance_ip_array_name

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Database instance id to update security ips.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_instance_ip_array_attribute(self) -> builtins.str:
        """
        :Property: dbInstanceIpArrayAttribute: Security ips to add or remove.
        """
        result = self._values.get("db_instance_ip_array_attribute")
        assert result is not None, "Required property 'db_instance_ip_array_attribute' is missing"
        return result

    @builtins.property
    def db_instance_ip_array_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        """
        result = self._values.get("db_instance_ip_array_name")
        return result

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
    """A ROS resource type:  ``ALIYUN::RDS::Database``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DatabaseProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::Database``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Database, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The ID of the instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> typing.Any:
        """
        :Attribute: DBName: The name of the database.
        """
        return jsii.get(self, "attrDbName")


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
        character_set_name: builtins.str,
        db_instance_id: builtins.str,
        db_name: builtins.str,
        db_description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::Database``.

        :param character_set_name: 
        :param db_instance_id: 
        :param db_name: 
        :param db_description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "character_set_name": character_set_name,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }
        if db_description is not None:
            self._values["db_description"] = db_description

    @builtins.property
    def character_set_name(self) -> builtins.str:
        """
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
        """
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the instance.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database you want to create.
        Note
        The name must be 2 to 64 characters in length.
        The name must start with a lowercase letter and end with a lowercase letter or digit.
        The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
        The name must be unique in the instance.
        For more information about invalid characters, see Forbidden keywords table.
        """
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return result

    @builtins.property
    def db_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbDescription: The description of the database. The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        """
        result = self._values.get("db_description")
        return result

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
    """A ROS resource type:  ``ALIYUN::RDS::PrepayDBInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PrepayDBInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::PrepayDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(PrepayDBInstance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created database instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> typing.Any:
        """
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        """
        return jsii.get(self, "attrInnerConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> typing.Any:
        """
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        """
        return jsii.get(self, "attrInnerIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> typing.Any:
        """
        :Attribute: InnerPort: Intranet port of created DB instance.
        """
        return jsii.get(self, "attrInnerPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: The order id list of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> typing.Any:
        """
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        """
        return jsii.get(self, "attrPublicConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> typing.Any:
        """
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        """
        return jsii.get(self, "attrPublicIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> typing.Any:
        """
        :Attribute: PublicPort: Internet port of created DB instance.
        """
        return jsii.get(self, "attrPublicPort")


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
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "backup_retention_period": "backupRetentionPeriod",
        "category": "category",
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
        "encryption_key": "encryptionKey",
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
        commodity_code: builtins.str,
        db_instance_class: builtins.str,
        db_instance_storage: jsii.Number,
        engine: builtins.str,
        engine_version: builtins.str,
        period: jsii.Number,
        period_type: builtins.str,
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[jsii.Number] = None,
        category: typing.Optional[builtins.str] = None,
        connection_mode: typing.Optional[builtins.str] = None,
        connection_string_prefix: typing.Optional[builtins.str] = None,
        connection_string_type: typing.Optional[builtins.str] = None,
        coupon_code: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        db_instance_net_type: typing.Optional[builtins.str] = None,
        db_instance_storage_type: typing.Optional[builtins.str] = None,
        db_is_ignore_case: typing.Optional[jsii.Number] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]] = None,
        db_param_group_id: typing.Optional[builtins.str] = None,
        db_time_zone: typing.Optional[builtins.str] = None,
        dedicated_host_group_id: typing.Optional[builtins.str] = None,
        encryption_key: typing.Optional[builtins.str] = None,
        maintain_time: typing.Optional[builtins.str] = None,
        master_username: typing.Optional[builtins.str] = None,
        master_user_password: typing.Optional[builtins.str] = None,
        master_user_type: typing.Optional[builtins.str] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[jsii.Number] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        quantity: typing.Optional[jsii.Number] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        role_arn: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        slave_zone_ids: typing.Optional[typing.List[builtins.str]] = None,
        sql_collector_status: typing.Optional[builtins.str] = None,
        ssl_setting: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        target_dedicated_host_id_for_log: typing.Optional[builtins.str] = None,
        target_dedicated_host_id_for_master: typing.Optional[builtins.str] = None,
        target_dedicated_host_id_for_slave: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::PrepayDBInstance``.

        :param commodity_code: 
        :param db_instance_class: 
        :param db_instance_storage: 
        :param engine: 
        :param engine_version: 
        :param period: 
        :param period_type: 
        :param allocate_public_connection: 
        :param auto_pay: 
        :param auto_renew: 
        :param backup_retention_period: 
        :param category: 
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
        :param encryption_key: 
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
        """
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
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if category is not None:
            self._values["category"] = category
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
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
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
    def commodity_code(self) -> builtins.str:
        """
        :Property: commodityCode: The CommodityCode of the order.
        """
        result = self._values.get("commodity_code")
        assert result is not None, "Required property 'commodity_code' is missing"
        return result

    @builtins.property
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def engine(self) -> builtins.str:
        """
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        """
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return result

    @builtins.property
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        """
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return result

    @builtins.property
    def period(self) -> jsii.Number:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return result

    @builtins.property
    def period_type(self) -> builtins.str:
        """
        :Property: periodType: Charge period for created instances.
        """
        result = self._values.get("period_type")
        assert result is not None, "Required property 'period_type' is missing"
        return result

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        result = self._values.get("allocate_public_connection")
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Automatic Payment. Default is false.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        result = self._values.get("backup_retention_period")
        return result

    @builtins.property
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        result = self._values.get("category")
        return result

    @builtins.property
    def connection_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        """
        result = self._values.get("connection_mode")
        return result

    @builtins.property
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        result = self._values.get("connection_string_prefix")
        return result

    @builtins.property
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        result = self._values.get("connection_string_type")
        return result

    @builtins.property
    def coupon_code(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponCode: The coupon code of the order.
        """
        result = self._values.get("coupon_code")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def db_instance_net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        """
        result = self._values.get("db_instance_net_type")
        return result

    @builtins.property
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        result = self._values.get("db_instance_storage_type")
        return result

    @builtins.property
    def db_is_ignore_case(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        """
        result = self._values.get("db_is_ignore_case")
        return result

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        result = self._values.get("db_mappings")
        return result

    @builtins.property
    def db_param_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        """
        result = self._values.get("db_param_group_id")
        return result

    @builtins.property
    def db_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        """
        result = self._values.get("db_time_zone")
        return result

    @builtins.property
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        result = self._values.get("dedicated_host_group_id")
        return result

    @builtins.property
    def encryption_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        """
        result = self._values.get("encryption_key")
        return result

    @builtins.property
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        result = self._values.get("maintain_time")
        return result

    @builtins.property
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        result = self._values.get("master_username")
        return result

    @builtins.property
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        result = self._values.get("master_user_password")
        return result

    @builtins.property
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        result = self._values.get("master_user_type")
        return result

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        """
        result = self._values.get("multi_az")
        return result

    @builtins.property
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        result = self._values.get("port")
        return result

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_period")
        return result

    @builtins.property
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_time")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def quantity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: quantity: The number of instance to be created, default is 1, max number is 99
        """
        result = self._values.get("quantity")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        """
        result = self._values.get("role_arn")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def slave_zone_ids(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        """
        result = self._values.get("slave_zone_ids")
        return result

    @builtins.property
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        result = self._values.get("sql_collector_status")
        return result

    @builtins.property
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        result = self._values.get("ssl_setting")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
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
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def target_dedicated_host_id_for_log(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_log")
        return result

    @builtins.property
    def target_dedicated_host_id_for_master(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_master")
        return result

    @builtins.property
    def target_dedicated_host_id_for_slave(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_slave")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::RDS::ReadOnlyDBInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ReadOnlyDBInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RDS::ReadOnlyDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ReadOnlyDBInstance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> typing.Any:
        """
        :Attribute: ConnectionString: DB instance connection url by Intranet.
        """
        return jsii.get(self, "attrConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created database instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: Intranet port of created DB instance.
        """
        return jsii.get(self, "attrPort")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.ReadOnlyDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_id": "dbInstanceId",
        "db_instance_storage": "dbInstanceStorage",
        "engine_version": "engineVersion",
        "zone_id": "zoneId",
        "category": "category",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_storage_type": "dbInstanceStorageType",
        "pay_type": "payType",
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
        db_instance_class: builtins.str,
        db_instance_id: builtins.str,
        db_instance_storage: jsii.Number,
        engine_version: builtins.str,
        zone_id: builtins.str,
        category: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        db_instance_storage_type: typing.Optional[builtins.str] = None,
        pay_type: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::ReadOnlyDBInstance``.

        :param db_instance_class: 
        :param db_instance_id: 
        :param db_instance_storage: 
        :param engine_version: 
        :param zone_id: 
        :param category: 
        :param db_instance_description: 
        :param db_instance_storage_type: 
        :param pay_type: 
        :param private_ip_address: 
        :param resource_group_id: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_id": db_instance_id,
            "db_instance_storage": db_instance_storage,
            "engine_version": engine_version,
            "zone_id": zone_id,
        }
        if category is not None:
            self._values["category"] = category
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
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
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        """
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the master instance.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values:

        - 5.6
        - 5.7
        - 8.0
        - 2017_ent
        """
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return result

    @builtins.property
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
        """
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return result

    @builtins.property
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:

        - Basic
        - HighAvailability
        - AlwaysOn
        """
        result = self._values.get("category")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:

        - local_ssd/ephemeral_ssd: local SSDs.
        - cloud_ssd: SSDs.
        - cloud_essd: ESSDs.
        """
        result = self._values.get("db_instance_storage_type")
        return result

    @builtins.property
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: payType: The billing method. The system only supports Pay-As-You-Go. Valid value: Postpaid.
        """
        result = self._values.get("pay_type")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
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
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        result = self._values.get("v_switch_id")
        return result

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
    """A ROS template type:  ``ALIYUN::RDS::ADInfo``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosADInfoProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::ADInfo``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosADInfo, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAddns")
    def attr_addns(self) -> typing.Any:
        """
        :Attribute: ADDNS: Active directory domain name.
        """
        return jsii.get(self, "attrAddns")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The ID of the instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="adAccountName")
    def ad_account_name(self) -> builtins.str:
        """
        :Property: adAccountName: Domain account name.
        """
        return jsii.get(self, "adAccountName")

    @ad_account_name.setter # type: ignore
    def ad_account_name(self, value: builtins.str) -> None:
        jsii.set(self, "adAccountName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="addns")
    def addns(self) -> builtins.str:
        """
        :Property: addns: Active directory domain name.
        """
        return jsii.get(self, "addns")

    @addns.setter # type: ignore
    def addns(self, value: builtins.str) -> None:
        jsii.set(self, "addns", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="adPassword")
    def ad_password(self) -> builtins.str:
        """
        :Property: adPassword: Domain password.
        """
        return jsii.get(self, "adPassword")

    @ad_password.setter # type: ignore
    def ad_password(self, value: builtins.str) -> None:
        jsii.set(self, "adPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="adServerIpAddress")
    def ad_server_ip_address(self) -> builtins.str:
        """
        :Property: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        """
        return jsii.get(self, "adServerIpAddress")

    @ad_server_ip_address.setter # type: ignore
    def ad_server_ip_address(self, value: builtins.str) -> None:
        jsii.set(self, "adServerIpAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the instance.
        """
        return jsii.get(self, "dbInstanceId")

    @db_instance_id.setter # type: ignore
    def db_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
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
        ad_account_name: builtins.str,
        addns: builtins.str,
        ad_password: builtins.str,
        ad_server_ip_address: builtins.str,
        db_instance_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::ADInfo``.

        :param ad_account_name: 
        :param addns: 
        :param ad_password: 
        :param ad_server_ip_address: 
        :param db_instance_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ad_account_name": ad_account_name,
            "addns": addns,
            "ad_password": ad_password,
            "ad_server_ip_address": ad_server_ip_address,
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def ad_account_name(self) -> builtins.str:
        """
        :Property: adAccountName: Domain account name.
        """
        result = self._values.get("ad_account_name")
        assert result is not None, "Required property 'ad_account_name' is missing"
        return result

    @builtins.property
    def addns(self) -> builtins.str:
        """
        :Property: addns: Active directory domain name.
        """
        result = self._values.get("addns")
        assert result is not None, "Required property 'addns' is missing"
        return result

    @builtins.property
    def ad_password(self) -> builtins.str:
        """
        :Property: adPassword: Domain password.
        """
        result = self._values.get("ad_password")
        assert result is not None, "Required property 'ad_password' is missing"
        return result

    @builtins.property
    def ad_server_ip_address(self) -> builtins.str:
        """
        :Property: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        """
        result = self._values.get("ad_server_ip_address")
        assert result is not None, "Required property 'ad_server_ip_address' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the instance.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::RDS::Account``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAccount, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> typing.Any:
        """
        :Attribute: AccountName: Account name
        """
        return jsii.get(self, "attrAccountName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: Account name, which must be unique and meet the following requirements:
        Start with a letter;
        Consist of lower-case letters, digits, and underscores (_);
        Contain no more than 16 characters.
        For other invalid characters, see Forbidden keywords table.
        """
        return jsii.get(self, "accountName")

    @account_name.setter # type: ignore
    def account_name(self, value: builtins.str) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPassword")
    def account_password(self) -> builtins.str:
        """
        :Property: accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        """
        return jsii.get(self, "accountPassword")

    @account_password.setter # type: ignore
    def account_password(self, value: builtins.str) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: RDS instance ID.
        """
        return jsii.get(self, "dbInstanceId")

    @db_instance_id.setter # type: ignore
    def db_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountDescription")
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: Account remarks.
        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        """
        return jsii.get(self, "accountDescription")

    @account_description.setter # type: ignore
    def account_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountType")
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        """
        return jsii.get(self, "accountType")

    @account_type.setter # type: ignore
    def account_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountType", value)


class RosAccountPrivilege(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosAccountPrivilege",
):
    """A ROS template type:  ``ALIYUN::RDS::AccountPrivilege``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountPrivilegeProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::AccountPrivilege``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAccountPrivilege, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> builtins.str:
        """
        :Property: accountName: RDS account name.
        """
        return jsii.get(self, "accountName")

    @account_name.setter # type: ignore
    def account_name(self, value: builtins.str) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(self) -> builtins.str:
        """
        :Property: accountPrivilege: RDS account privilege
        """
        return jsii.get(self, "accountPrivilege")

    @account_privilege.setter # type: ignore
    def account_privilege(self, value: builtins.str) -> None:
        jsii.set(self, "accountPrivilege", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: RDS instance ID.
        """
        return jsii.get(self, "dbInstanceId")

    @db_instance_id.setter # type: ignore
    def db_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> builtins.str:
        """
        :Property: dbName: RDS database name
        """
        return jsii.get(self, "dbName")

    @db_name.setter # type: ignore
    def db_name(self, value: builtins.str) -> None:
        jsii.set(self, "dbName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
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
        account_name: builtins.str,
        account_privilege: builtins.str,
        db_instance_id: builtins.str,
        db_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::AccountPrivilege``.

        :param account_name: 
        :param account_privilege: 
        :param db_instance_id: 
        :param db_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(self) -> builtins.str:
        """
        :Property: accountName: RDS account name.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_privilege(self) -> builtins.str:
        """
        :Property: accountPrivilege: RDS account privilege
        """
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: RDS instance ID.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_name(self) -> builtins.str:
        """
        :Property: dbName: RDS database name
        """
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return result

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
        account_name: builtins.str,
        account_password: builtins.str,
        db_instance_id: builtins.str,
        account_description: typing.Optional[builtins.str] = None,
        account_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::Account``.

        :param account_name: 
        :param account_password: 
        :param db_instance_id: 
        :param account_description: 
        :param account_type: 
        """
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
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: Account name, which must be unique and meet the following requirements:
        Start with a letter;
        Consist of lower-case letters, digits, and underscores (_);
        Contain no more than 16 characters.
        For other invalid characters, see Forbidden keywords table.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_password(self) -> builtins.str:
        """
        :Property: accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        """
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: RDS instance ID.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: Account remarks.
        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        """
        result = self._values.get("account_description")
        return result

    @builtins.property
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        """
        result = self._values.get("account_type")
        return result

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
    """A ROS template type:  ``ALIYUN::RDS::DBInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::DBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBInstance, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created database instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> typing.Any:
        """
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        """
        return jsii.get(self, "attrInnerConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> typing.Any:
        """
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        """
        return jsii.get(self, "attrInnerIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> typing.Any:
        """
        :Attribute: InnerPort: Intranet port of created DB instance.
        """
        return jsii.get(self, "attrInnerPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> typing.Any:
        """
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        """
        return jsii.get(self, "attrPublicConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> typing.Any:
        """
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        """
        return jsii.get(self, "attrPublicIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> typing.Any:
        """
        :Attribute: PublicPort: Internet port of created DB instance.
        """
        return jsii.get(self, "attrPublicPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
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
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        return jsii.get(self, "dbInstanceClass")

    @db_instance_class.setter # type: ignore
    def db_instance_class(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        return jsii.get(self, "dbInstanceStorage")

    @db_instance_storage.setter # type: ignore
    def db_instance_storage(self, value: jsii.Number) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engine")
    def engine(self) -> builtins.str:
        """
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        """
        return jsii.get(self, "engine")

    @engine.setter # type: ignore
    def engine(self, value: builtins.str) -> None:
        jsii.set(self, "engine", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        """
        return jsii.get(self, "engineVersion")

    @engine_version.setter # type: ignore
    def engine_version(self, value: builtins.str) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(self) -> builtins.str:
        """
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        """
        return jsii.get(self, "securityIpList")

    @security_ip_list.setter # type: ignore
    def security_ip_list(self, value: builtins.str) -> None:
        jsii.set(self, "securityIpList", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        return jsii.get(self, "allocatePublicConnection")

    @allocate_public_connection.setter # type: ignore
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "backupRetentionPeriod")

    @backup_retention_period.setter # type: ignore
    def backup_retention_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="category")
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        return jsii.get(self, "category")

    @category.setter # type: ignore
    def category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionMode")
    def connection_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        """
        return jsii.get(self, "connectionMode")

    @connection_mode.setter # type: ignore
    def connection_mode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionMode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        return jsii.get(self, "connectionStringPrefix")

    @connection_string_prefix.setter # type: ignore
    def connection_string_prefix(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        return jsii.get(self, "connectionStringType")

    @connection_string_type.setter # type: ignore
    def connection_string_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionStringType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        return jsii.get(self, "dbInstanceDescription")

    @db_instance_description.setter # type: ignore
    def db_instance_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceNetType")
    def db_instance_net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        """
        return jsii.get(self, "dbInstanceNetType")

    @db_instance_net_type.setter # type: ignore
    def db_instance_net_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceNetType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        return jsii.get(self, "dbInstanceStorageType")

    @db_instance_storage_type.setter # type: ignore
    def db_instance_storage_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbIsIgnoreCase")
    def db_is_ignore_case(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        """
        return jsii.get(self, "dbIsIgnoreCase")

    @db_is_ignore_case.setter # type: ignore
    def db_is_ignore_case(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "dbIsIgnoreCase", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        return jsii.get(self, "dbMappings")

    @db_mappings.setter # type: ignore
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstance.DBMappingsProperty"]]]],
    ) -> None:
        jsii.set(self, "dbMappings", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbParamGroupId")
    def db_param_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        """
        return jsii.get(self, "dbParamGroupId")

    @db_param_group_id.setter # type: ignore
    def db_param_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbParamGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbTimeZone")
    def db_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        """
        return jsii.get(self, "dbTimeZone")

    @db_time_zone.setter # type: ignore
    def db_time_zone(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbTimeZone", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        return jsii.get(self, "dedicatedHostGroupId")

    @dedicated_host_group_id.setter # type: ignore
    def dedicated_host_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        """
        return jsii.get(self, "encryptionKey")

    @encryption_key.setter # type: ignore
    def encryption_key(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "encryptionKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        return jsii.get(self, "maintainTime")

    @maintain_time.setter # type: ignore
    def maintain_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "maintainTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUsername")
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        return jsii.get(self, "masterUsername")

    @master_username.setter # type: ignore
    def master_username(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUsername", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        return jsii.get(self, "masterUserPassword")

    @master_user_password.setter # type: ignore
    def master_user_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUserPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        return jsii.get(self, "masterUserType")

    @master_user_type.setter # type: ignore
    def master_user_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUserType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="multiAz")
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        """
        return jsii.get(self, "multiAz")

    @multi_az.setter # type: ignore
    def multi_az(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "multiAz", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="payType")
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: payType: The charge type of created instance.
        """
        return jsii.get(self, "payType")

    @pay_type.setter # type: ignore
    def pay_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="periodType")
    def period_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodType: Charge period for created instances.
        """
        return jsii.get(self, "periodType")

    @period_type.setter # type: ignore
    def period_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "periodType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        return jsii.get(self, "port")

    @port.setter # type: ignore
    def port(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "preferredBackupPeriod")

    @preferred_backup_period.setter # type: ignore
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "preferredBackupTime")

    @preferred_backup_time.setter # type: ignore
    def preferred_backup_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        return jsii.get(self, "privateIpAddress")

    @private_ip_address.setter # type: ignore
    def private_ip_address(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="roleArn")
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        """
        return jsii.get(self, "roleArn")

    @role_arn.setter # type: ignore
    def role_arn(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "roleArn", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slaveZoneIds")
    def slave_zone_ids(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        """
        return jsii.get(self, "slaveZoneIds")

    @slave_zone_ids.setter # type: ignore
    def slave_zone_ids(self, value: typing.Optional[typing.List[builtins.str]]) -> None:
        jsii.set(self, "slaveZoneIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        return jsii.get(self, "sqlCollectorStatus")

    @sql_collector_status.setter # type: ignore
    def sql_collector_status(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        return jsii.get(self, "sslSetting")

    @ssl_setting.setter # type: ignore
    def ssl_setting(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sslSetting", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetDedicatedHostIdForLog")
    def target_dedicated_host_id_for_log(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        """
        return jsii.get(self, "targetDedicatedHostIdForLog")

    @target_dedicated_host_id_for_log.setter # type: ignore
    def target_dedicated_host_id_for_log(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForLog", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetDedicatedHostIdForMaster")
    def target_dedicated_host_id_for_master(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        """
        return jsii.get(self, "targetDedicatedHostIdForMaster")

    @target_dedicated_host_id_for_master.setter # type: ignore
    def target_dedicated_host_id_for_master(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForMaster", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetDedicatedHostIdForSlave")
    def target_dedicated_host_id_for_slave(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        """
        return jsii.get(self, "targetDedicatedHostIdForSlave")

    @target_dedicated_host_id_for_slave.setter # type: ignore
    def target_dedicated_host_id_for_slave(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForSlave", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
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
            character_set_name: builtins.str,
            db_name: builtins.str,
            db_description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(self) -> builtins.str:
            """
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            """
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return result

        @builtins.property
        def db_name(self) -> builtins.str:
            """
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            """
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return result

        @builtins.property
        def db_description(self) -> typing.Optional[builtins.str]:
            """
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            """
            result = self._values.get("db_description")
            return result

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
    """A ROS template type:  ``ALIYUN::RDS::DBInstanceClone``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceCloneProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::DBInstanceClone``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBInstanceClone, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created database instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> typing.Any:
        """
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        """
        return jsii.get(self, "attrInnerConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> typing.Any:
        """
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        """
        return jsii.get(self, "attrInnerIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> typing.Any:
        """
        :Attribute: InnerPort: Intranet port of created DB instance.
        """
        return jsii.get(self, "attrInnerPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> typing.Any:
        """
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        """
        return jsii.get(self, "attrPublicConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> typing.Any:
        """
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        """
        return jsii.get(self, "attrPublicIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> typing.Any:
        """
        :Attribute: PublicPort: Internet port of created DB instance.
        """
        return jsii.get(self, "attrPublicPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
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
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Instance id
        """
        return jsii.get(self, "dbInstanceId")

    @db_instance_id.setter # type: ignore
    def db_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        return jsii.get(self, "dbInstanceStorage")

    @db_instance_storage.setter # type: ignore
    def db_instance_storage(self, value: jsii.Number) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="payType")
    def pay_type(self) -> builtins.str:
        """
        :Property: payType: The charge type of created instance.
        """
        return jsii.get(self, "payType")

    @pay_type.setter # type: ignore
    def pay_type(self, value: builtins.str) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        return jsii.get(self, "allocatePublicConnection")

    @allocate_public_connection.setter # type: ignore
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupId")
    def backup_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupId: The ID of the backup set that you want to use.
        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        """
        return jsii.get(self, "backupId")

    @backup_id.setter # type: ignore
    def backup_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "backupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "backupRetentionPeriod")

    @backup_retention_period.setter # type: ignore
    def backup_retention_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupType")
    def backup_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupType: The type of backup used by the new instance. Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        """
        return jsii.get(self, "backupType")

    @backup_type.setter # type: ignore
    def backup_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "backupType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="category")
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        return jsii.get(self, "category")

    @category.setter # type: ignore
    def category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        return jsii.get(self, "connectionStringPrefix")

    @connection_string_prefix.setter # type: ignore
    def connection_string_prefix(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        return jsii.get(self, "connectionStringType")

    @connection_string_type.setter # type: ignore
    def connection_string_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionStringType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        return jsii.get(self, "dbInstanceClass")

    @db_instance_class.setter # type: ignore
    def db_instance_class(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        return jsii.get(self, "dbInstanceDescription")

    @db_instance_description.setter # type: ignore
    def db_instance_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        return jsii.get(self, "dbInstanceStorageType")

    @db_instance_storage_type.setter # type: ignore
    def db_instance_storage_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        return jsii.get(self, "dbMappings")

    @db_mappings.setter # type: ignore
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]],
    ) -> None:
        jsii.set(self, "dbMappings", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbNames")
    def db_names(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbNames: The names of the databases that you want to create on the new instance.
        """
        return jsii.get(self, "dbNames")

    @db_names.setter # type: ignore
    def db_names(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbNames", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        return jsii.get(self, "dedicatedHostGroupId")

    @dedicated_host_group_id.setter # type: ignore
    def dedicated_host_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceNetworkType")
    def instance_network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceNetworkType: The network type of the new instance. Valid values:

        - VPC
        - Classic
        The default value is the network type of the original instance.
        """
        return jsii.get(self, "instanceNetworkType")

    @instance_network_type.setter # type: ignore
    def instance_network_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceNetworkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        return jsii.get(self, "maintainTime")

    @maintain_time.setter # type: ignore
    def maintain_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "maintainTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUsername")
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        return jsii.get(self, "masterUsername")

    @master_username.setter # type: ignore
    def master_username(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUsername", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        return jsii.get(self, "masterUserPassword")

    @master_user_password.setter # type: ignore
    def master_user_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUserPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        return jsii.get(self, "masterUserType")

    @master_user_type.setter # type: ignore
    def master_user_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUserType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="periodType")
    def period_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodType: Charge period for created instances.
        """
        return jsii.get(self, "periodType")

    @period_type.setter # type: ignore
    def period_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "periodType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        return jsii.get(self, "port")

    @port.setter # type: ignore
    def port(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "preferredBackupPeriod")

    @preferred_backup_period.setter # type: ignore
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "preferredBackupTime")

    @preferred_backup_time.setter # type: ignore
    def preferred_backup_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        return jsii.get(self, "privateIpAddress")

    @private_ip_address.setter # type: ignore
    def private_ip_address(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreTable")
    def restore_table(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreTable: Specifies whether to restore specific databases and tables.
        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        """
        return jsii.get(self, "restoreTable")

    @restore_table.setter # type: ignore
    def restore_table(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "restoreTable", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreTime")
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreTime: The point in time to which you want to restore the data of the original instance.
        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        """
        return jsii.get(self, "restoreTime")

    @restore_time.setter # type: ignore
    def restore_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "restoreTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        """
        return jsii.get(self, "securityIpList")

    @security_ip_list.setter # type: ignore
    def security_ip_list(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityIpList", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        return jsii.get(self, "sqlCollectorStatus")

    @sql_collector_status.setter # type: ignore
    def sql_collector_status(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        return jsii.get(self, "sslSetting")

    @ssl_setting.setter # type: ignore
    def ssl_setting(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sslSetting", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tableMeta")
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]]:
        """
        :Property: tableMeta: The information about the databases and tables that you want to restore.
        """
        return jsii.get(self, "tableMeta")

    @table_meta.setter # type: ignore
    def table_meta(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]],
    ) -> None:
        jsii.set(self, "tableMeta", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeoutInMinutes")
    def timeout_in_minutes(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        """
        return jsii.get(self, "timeoutInMinutes")

    @timeout_in_minutes.setter # type: ignore
    def timeout_in_minutes(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "timeoutInMinutes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
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
            character_set_name: builtins.str,
            db_name: builtins.str,
            db_description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(self) -> builtins.str:
            """
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            """
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return result

        @builtins.property
        def db_name(self) -> builtins.str:
            """
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            """
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return result

        @builtins.property
        def db_description(self) -> typing.Optional[builtins.str]:
            """
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            """
            result = self._values.get("db_description")
            return result

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
            name: typing.Optional[builtins.str] = None,
            new_name: typing.Optional[builtins.str] = None,
            tables: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TablesProperty"]]]] = None,
            type: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param name: 
            :param new_name: 
            :param tables: 
            :param type: 
            """
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
        def name(self) -> typing.Optional[builtins.str]:
            """
            :Property: name: Name of database you want to restore.
            """
            result = self._values.get("name")
            return result

        @builtins.property
        def new_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newName: New database name in clone instance.
            """
            result = self._values.get("new_name")
            return result

        @builtins.property
        def tables(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDBInstanceClone.TablesProperty"]]]]:
            """
            :Property: tables: The table information that you want to restore.
            """
            result = self._values.get("tables")
            return result

        @builtins.property
        def type(self) -> typing.Optional[builtins.str]:
            """
            :Property: type: Restore type, db
            """
            result = self._values.get("type")
            return result

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
            name: typing.Optional[builtins.str] = None,
            new_name: typing.Optional[builtins.str] = None,
            type: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param name: 
            :param new_name: 
            :param type: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if new_name is not None:
                self._values["new_name"] = new_name
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def name(self) -> typing.Optional[builtins.str]:
            """
            :Property: name: Name of table you want to restore
            """
            result = self._values.get("name")
            return result

        @builtins.property
        def new_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newName: New name of the table in db
            """
            result = self._values.get("new_name")
            return result

        @builtins.property
        def type(self) -> typing.Optional[builtins.str]:
            """
            :Property: type: Restore type, table
            """
            result = self._values.get("type")
            return result

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
        "db_instance_storage": "dbInstanceStorage",
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
        db_instance_id: builtins.str,
        db_instance_storage: jsii.Number,
        pay_type: builtins.str,
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_id: typing.Optional[builtins.str] = None,
        backup_retention_period: typing.Optional[jsii.Number] = None,
        backup_type: typing.Optional[builtins.str] = None,
        category: typing.Optional[builtins.str] = None,
        connection_string_prefix: typing.Optional[builtins.str] = None,
        connection_string_type: typing.Optional[builtins.str] = None,
        db_instance_class: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        db_instance_storage_type: typing.Optional[builtins.str] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.DBMappingsProperty]]]] = None,
        db_names: typing.Optional[builtins.str] = None,
        dedicated_host_group_id: typing.Optional[builtins.str] = None,
        instance_network_type: typing.Optional[builtins.str] = None,
        maintain_time: typing.Optional[builtins.str] = None,
        master_username: typing.Optional[builtins.str] = None,
        master_user_password: typing.Optional[builtins.str] = None,
        master_user_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        period_type: typing.Optional[builtins.str] = None,
        port: typing.Optional[jsii.Number] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        restore_table: typing.Optional[builtins.str] = None,
        restore_time: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        security_ip_list: typing.Optional[builtins.str] = None,
        sql_collector_status: typing.Optional[builtins.str] = None,
        ssl_setting: typing.Optional[builtins.str] = None,
        table_meta: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.TableMetaProperty]]]] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        timeout_in_minutes: typing.Optional[jsii.Number] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::DBInstanceClone``.

        :param db_instance_id: 
        :param db_instance_storage: 
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
        :param sql_collector_status: 
        :param ssl_setting: 
        :param table_meta: 
        :param tags: 
        :param timeout_in_minutes: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "db_instance_storage": db_instance_storage,
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
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Instance id
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def pay_type(self) -> builtins.str:
        """
        :Property: payType: The charge type of created instance.
        """
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return result

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        result = self._values.get("allocate_public_connection")
        return result

    @builtins.property
    def backup_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupId: The ID of the backup set that you want to use.
        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        """
        result = self._values.get("backup_id")
        return result

    @builtins.property
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        result = self._values.get("backup_retention_period")
        return result

    @builtins.property
    def backup_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupType: The type of backup used by the new instance. Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        """
        result = self._values.get("backup_type")
        return result

    @builtins.property
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        result = self._values.get("category")
        return result

    @builtins.property
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        result = self._values.get("connection_string_prefix")
        return result

    @builtins.property
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        result = self._values.get("connection_string_type")
        return result

    @builtins.property
    def db_instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        result = self._values.get("db_instance_class")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        result = self._values.get("db_instance_storage_type")
        return result

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.DBMappingsProperty]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        result = self._values.get("db_mappings")
        return result

    @builtins.property
    def db_names(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbNames: The names of the databases that you want to create on the new instance.
        """
        result = self._values.get("db_names")
        return result

    @builtins.property
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        result = self._values.get("dedicated_host_group_id")
        return result

    @builtins.property
    def instance_network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceNetworkType: The network type of the new instance. Valid values:

        - VPC
        - Classic
        The default value is the network type of the original instance.
        """
        result = self._values.get("instance_network_type")
        return result

    @builtins.property
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        result = self._values.get("maintain_time")
        return result

    @builtins.property
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        result = self._values.get("master_username")
        return result

    @builtins.property
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        result = self._values.get("master_user_password")
        return result

    @builtins.property
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        result = self._values.get("master_user_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def period_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodType: Charge period for created instances.
        """
        result = self._values.get("period_type")
        return result

    @builtins.property
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        result = self._values.get("port")
        return result

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_period")
        return result

    @builtins.property
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_time")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def restore_table(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreTable: Specifies whether to restore specific databases and tables.
        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        """
        result = self._values.get("restore_table")
        return result

    @builtins.property
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreTime: The point in time to which you want to restore the data of the original instance.
        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        """
        result = self._values.get("restore_time")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def security_ip_list(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        """
        result = self._values.get("security_ip_list")
        return result

    @builtins.property
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        result = self._values.get("sql_collector_status")
        return result

    @builtins.property
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        result = self._values.get("ssl_setting")
        return result

    @builtins.property
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstanceClone.TableMetaProperty]]]]:
        """
        :Property: tableMeta: The information about the databases and tables that you want to restore.
        """
        result = self._values.get("table_meta")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
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
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def timeout_in_minutes(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        """
        result = self._values.get("timeout_in_minutes")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS template type:  ``ALIYUN::RDS::DBInstanceParameterGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceParameterGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBInstanceParameterGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Database InstanceId to update properties.
        """
        return jsii.get(self, "dbInstanceId")

    @db_instance_id.setter # type: ignore
    def db_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosDBInstanceParameterGroup.ParametersProperty", ros_cdk_core.IResolvable]]]:
        """
        :Property: parameters: Parameters to update for selected database instance.
        """
        return jsii.get(self, "parameters")

    @parameters.setter # type: ignore
    def parameters(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosDBInstanceParameterGroup.ParametersProperty", ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "parameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="forcerestart")
    def forcerestart(self) -> typing.Optional[builtins.str]:
        """
        :Property: forcerestart: whether restart database instance.
        """
        return jsii.get(self, "forcerestart")

    @forcerestart.setter # type: ignore
    def forcerestart(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "forcerestart", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class ParametersProperty:
        def __init__(self, *, key: builtins.str, value: builtins.str) -> None:
            """
            :param key: 
            :param value: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> builtins.str:
            """
            :Property: key: Key to update for instance property.
            """
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return result

        @builtins.property
        def value(self) -> builtins.str:
            """
            :Property: value: Value to update for instance property.
            """
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return result

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
        db_instance_id: builtins.str,
        parameters: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosDBInstanceParameterGroup.ParametersProperty, ros_cdk_core.IResolvable]]],
        forcerestart: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param db_instance_id: 
        :param parameters: 
        :param forcerestart: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "parameters": parameters,
        }
        if forcerestart is not None:
            self._values["forcerestart"] = forcerestart

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Database InstanceId to update properties.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def parameters(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosDBInstanceParameterGroup.ParametersProperty, ros_cdk_core.IResolvable]]]:
        """
        :Property: parameters: Parameters to update for selected database instance.
        """
        result = self._values.get("parameters")
        assert result is not None, "Required property 'parameters' is missing"
        return result

    @builtins.property
    def forcerestart(self) -> typing.Optional[builtins.str]:
        """
        :Property: forcerestart: whether restart database instance.
        """
        result = self._values.get("forcerestart")
        return result

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
        "backup_retention_period": "backupRetentionPeriod",
        "category": "category",
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
        "encryption_key": "encryptionKey",
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
        db_instance_class: builtins.str,
        db_instance_storage: jsii.Number,
        engine: builtins.str,
        engine_version: builtins.str,
        security_ip_list: builtins.str,
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[jsii.Number] = None,
        category: typing.Optional[builtins.str] = None,
        connection_mode: typing.Optional[builtins.str] = None,
        connection_string_prefix: typing.Optional[builtins.str] = None,
        connection_string_type: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        db_instance_net_type: typing.Optional[builtins.str] = None,
        db_instance_storage_type: typing.Optional[builtins.str] = None,
        db_is_ignore_case: typing.Optional[jsii.Number] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstance.DBMappingsProperty]]]] = None,
        db_param_group_id: typing.Optional[builtins.str] = None,
        db_time_zone: typing.Optional[builtins.str] = None,
        dedicated_host_group_id: typing.Optional[builtins.str] = None,
        encryption_key: typing.Optional[builtins.str] = None,
        maintain_time: typing.Optional[builtins.str] = None,
        master_username: typing.Optional[builtins.str] = None,
        master_user_password: typing.Optional[builtins.str] = None,
        master_user_type: typing.Optional[builtins.str] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        period_type: typing.Optional[builtins.str] = None,
        port: typing.Optional[jsii.Number] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        role_arn: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        slave_zone_ids: typing.Optional[typing.List[builtins.str]] = None,
        sql_collector_status: typing.Optional[builtins.str] = None,
        ssl_setting: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        target_dedicated_host_id_for_log: typing.Optional[builtins.str] = None,
        target_dedicated_host_id_for_master: typing.Optional[builtins.str] = None,
        target_dedicated_host_id_for_slave: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::DBInstance``.

        :param db_instance_class: 
        :param db_instance_storage: 
        :param engine: 
        :param engine_version: 
        :param security_ip_list: 
        :param allocate_public_connection: 
        :param backup_retention_period: 
        :param category: 
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
        :param encryption_key: 
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
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
            "engine": engine,
            "engine_version": engine_version,
            "security_ip_list": security_ip_list,
        }
        if allocate_public_connection is not None:
            self._values["allocate_public_connection"] = allocate_public_connection
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if category is not None:
            self._values["category"] = category
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
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
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
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def engine(self) -> builtins.str:
        """
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        """
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return result

    @builtins.property
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        """
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return result

    @builtins.property
    def security_ip_list(self) -> builtins.str:
        """
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        """
        result = self._values.get("security_ip_list")
        assert result is not None, "Required property 'security_ip_list' is missing"
        return result

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        result = self._values.get("allocate_public_connection")
        return result

    @builtins.property
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        result = self._values.get("backup_retention_period")
        return result

    @builtins.property
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        result = self._values.get("category")
        return result

    @builtins.property
    def connection_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        """
        result = self._values.get("connection_mode")
        return result

    @builtins.property
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        result = self._values.get("connection_string_prefix")
        return result

    @builtins.property
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        result = self._values.get("connection_string_type")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def db_instance_net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        """
        result = self._values.get("db_instance_net_type")
        return result

    @builtins.property
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        result = self._values.get("db_instance_storage_type")
        return result

    @builtins.property
    def db_is_ignore_case(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        """
        result = self._values.get("db_is_ignore_case")
        return result

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDBInstance.DBMappingsProperty]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        result = self._values.get("db_mappings")
        return result

    @builtins.property
    def db_param_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        """
        result = self._values.get("db_param_group_id")
        return result

    @builtins.property
    def db_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        """
        result = self._values.get("db_time_zone")
        return result

    @builtins.property
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        result = self._values.get("dedicated_host_group_id")
        return result

    @builtins.property
    def encryption_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        """
        result = self._values.get("encryption_key")
        return result

    @builtins.property
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        result = self._values.get("maintain_time")
        return result

    @builtins.property
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        result = self._values.get("master_username")
        return result

    @builtins.property
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        result = self._values.get("master_user_password")
        return result

    @builtins.property
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        result = self._values.get("master_user_type")
        return result

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        """
        result = self._values.get("multi_az")
        return result

    @builtins.property
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: payType: The charge type of created instance.
        """
        result = self._values.get("pay_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def period_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodType: Charge period for created instances.
        """
        result = self._values.get("period_type")
        return result

    @builtins.property
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        result = self._values.get("port")
        return result

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_period")
        return result

    @builtins.property
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_time")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        """
        result = self._values.get("role_arn")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def slave_zone_ids(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        """
        result = self._values.get("slave_zone_ids")
        return result

    @builtins.property
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        result = self._values.get("sql_collector_status")
        return result

    @builtins.property
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        result = self._values.get("ssl_setting")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
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
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def target_dedicated_host_id_for_log(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_log")
        return result

    @builtins.property
    def target_dedicated_host_id_for_master(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_master")
        return result

    @builtins.property
    def target_dedicated_host_id_for_slave(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_slave")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS template type:  ``ALIYUN::RDS::DBInstanceSecurityIps``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceSecurityIpsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBInstanceSecurityIps, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> typing.Any:
        """
        :Attribute: SecurityIps: The security ips of selected database instance.
        """
        return jsii.get(self, "attrSecurityIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Database instance id to update security ips.
        """
        return jsii.get(self, "dbInstanceId")

    @db_instance_id.setter # type: ignore
    def db_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceIpArrayAttribute")
    def db_instance_ip_array_attribute(self) -> builtins.str:
        """
        :Property: dbInstanceIpArrayAttribute: Security ips to add or remove.
        """
        return jsii.get(self, "dbInstanceIpArrayAttribute")

    @db_instance_ip_array_attribute.setter # type: ignore
    def db_instance_ip_array_attribute(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceIpArrayAttribute", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceIpArrayName")
    def db_instance_ip_array_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        """
        return jsii.get(self, "dbInstanceIpArrayName")

    @db_instance_ip_array_name.setter # type: ignore
    def db_instance_ip_array_name(self, value: typing.Optional[builtins.str]) -> None:
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
        db_instance_id: builtins.str,
        db_instance_ip_array_attribute: builtins.str,
        db_instance_ip_array_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param db_instance_id: 
        :param db_instance_ip_array_attribute: 
        :param db_instance_ip_array_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "db_instance_ip_array_attribute": db_instance_ip_array_attribute,
        }
        if db_instance_ip_array_name is not None:
            self._values["db_instance_ip_array_name"] = db_instance_ip_array_name

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: Database instance id to update security ips.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_instance_ip_array_attribute(self) -> builtins.str:
        """
        :Property: dbInstanceIpArrayAttribute: Security ips to add or remove.
        """
        result = self._values.get("db_instance_ip_array_attribute")
        assert result is not None, "Required property 'db_instance_ip_array_attribute' is missing"
        return result

    @builtins.property
    def db_instance_ip_array_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        """
        result = self._values.get("db_instance_ip_array_name")
        return result

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
    """A ROS template type:  ``ALIYUN::RDS::Database``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDatabaseProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::Database``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDatabase, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The ID of the instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> typing.Any:
        """
        :Attribute: DBName: The name of the database.
        """
        return jsii.get(self, "attrDbName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="characterSetName")
    def character_set_name(self) -> builtins.str:
        """
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
        """
        return jsii.get(self, "characterSetName")

    @character_set_name.setter # type: ignore
    def character_set_name(self, value: builtins.str) -> None:
        jsii.set(self, "characterSetName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the instance.
        """
        return jsii.get(self, "dbInstanceId")

    @db_instance_id.setter # type: ignore
    def db_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database you want to create.
        Note
        The name must be 2 to 64 characters in length.
        The name must start with a lowercase letter and end with a lowercase letter or digit.
        The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
        The name must be unique in the instance.
        For more information about invalid characters, see Forbidden keywords table.
        """
        return jsii.get(self, "dbName")

    @db_name.setter # type: ignore
    def db_name(self, value: builtins.str) -> None:
        jsii.set(self, "dbName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbDescription")
    def db_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbDescription: The description of the database. The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        """
        return jsii.get(self, "dbDescription")

    @db_description.setter # type: ignore
    def db_description(self, value: typing.Optional[builtins.str]) -> None:
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
        character_set_name: builtins.str,
        db_instance_id: builtins.str,
        db_name: builtins.str,
        db_description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::Database``.

        :param character_set_name: 
        :param db_instance_id: 
        :param db_name: 
        :param db_description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "character_set_name": character_set_name,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }
        if db_description is not None:
            self._values["db_description"] = db_description

    @builtins.property
    def character_set_name(self) -> builtins.str:
        """
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
        """
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the instance.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database you want to create.
        Note
        The name must be 2 to 64 characters in length.
        The name must start with a lowercase letter and end with a lowercase letter or digit.
        The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
        The name must be unique in the instance.
        For more information about invalid characters, see Forbidden keywords table.
        """
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return result

    @builtins.property
    def db_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbDescription: The description of the database. The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        """
        result = self._values.get("db_description")
        return result

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
    """A ROS template type:  ``ALIYUN::RDS::PrepayDBInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPrepayDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::PrepayDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosPrepayDBInstance, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created database instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> typing.Any:
        """
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        """
        return jsii.get(self, "attrInnerConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> typing.Any:
        """
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        """
        return jsii.get(self, "attrInnerIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> typing.Any:
        """
        :Attribute: InnerPort: Intranet port of created DB instance.
        """
        return jsii.get(self, "attrInnerPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: The order id list of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> typing.Any:
        """
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        """
        return jsii.get(self, "attrPublicConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> typing.Any:
        """
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        """
        return jsii.get(self, "attrPublicIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> typing.Any:
        """
        :Attribute: PublicPort: Internet port of created DB instance.
        """
        return jsii.get(self, "attrPublicPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
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
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="commodityCode")
    def commodity_code(self) -> builtins.str:
        """
        :Property: commodityCode: The CommodityCode of the order.
        """
        return jsii.get(self, "commodityCode")

    @commodity_code.setter # type: ignore
    def commodity_code(self, value: builtins.str) -> None:
        jsii.set(self, "commodityCode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        return jsii.get(self, "dbInstanceClass")

    @db_instance_class.setter # type: ignore
    def db_instance_class(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        return jsii.get(self, "dbInstanceStorage")

    @db_instance_storage.setter # type: ignore
    def db_instance_storage(self, value: jsii.Number) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engine")
    def engine(self) -> builtins.str:
        """
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        """
        return jsii.get(self, "engine")

    @engine.setter # type: ignore
    def engine(self, value: builtins.str) -> None:
        jsii.set(self, "engine", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        """
        return jsii.get(self, "engineVersion")

    @engine_version.setter # type: ignore
    def engine_version(self, value: builtins.str) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> jsii.Number:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: jsii.Number) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="periodType")
    def period_type(self) -> builtins.str:
        """
        :Property: periodType: Charge period for created instances.
        """
        return jsii.get(self, "periodType")

    @period_type.setter # type: ignore
    def period_type(self, value: builtins.str) -> None:
        jsii.set(self, "periodType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        return jsii.get(self, "allocatePublicConnection")

    @allocate_public_connection.setter # type: ignore
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Automatic Payment. Default is false.
        """
        return jsii.get(self, "autoPay")

    @auto_pay.setter # type: ignore
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        """
        return jsii.get(self, "autoRenew")

    @auto_renew.setter # type: ignore
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "backupRetentionPeriod")

    @backup_retention_period.setter # type: ignore
    def backup_retention_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="category")
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        return jsii.get(self, "category")

    @category.setter # type: ignore
    def category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionMode")
    def connection_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        """
        return jsii.get(self, "connectionMode")

    @connection_mode.setter # type: ignore
    def connection_mode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionMode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        return jsii.get(self, "connectionStringPrefix")

    @connection_string_prefix.setter # type: ignore
    def connection_string_prefix(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        return jsii.get(self, "connectionStringType")

    @connection_string_type.setter # type: ignore
    def connection_string_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionStringType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="couponCode")
    def coupon_code(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponCode: The coupon code of the order.
        """
        return jsii.get(self, "couponCode")

    @coupon_code.setter # type: ignore
    def coupon_code(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "couponCode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        return jsii.get(self, "dbInstanceDescription")

    @db_instance_description.setter # type: ignore
    def db_instance_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceNetType")
    def db_instance_net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        """
        return jsii.get(self, "dbInstanceNetType")

    @db_instance_net_type.setter # type: ignore
    def db_instance_net_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceNetType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        return jsii.get(self, "dbInstanceStorageType")

    @db_instance_storage_type.setter # type: ignore
    def db_instance_storage_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbIsIgnoreCase")
    def db_is_ignore_case(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        """
        return jsii.get(self, "dbIsIgnoreCase")

    @db_is_ignore_case.setter # type: ignore
    def db_is_ignore_case(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "dbIsIgnoreCase", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        return jsii.get(self, "dbMappings")

    @db_mappings.setter # type: ignore
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]],
    ) -> None:
        jsii.set(self, "dbMappings", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbParamGroupId")
    def db_param_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        """
        return jsii.get(self, "dbParamGroupId")

    @db_param_group_id.setter # type: ignore
    def db_param_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbParamGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbTimeZone")
    def db_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        """
        return jsii.get(self, "dbTimeZone")

    @db_time_zone.setter # type: ignore
    def db_time_zone(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbTimeZone", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        return jsii.get(self, "dedicatedHostGroupId")

    @dedicated_host_group_id.setter # type: ignore
    def dedicated_host_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        """
        return jsii.get(self, "encryptionKey")

    @encryption_key.setter # type: ignore
    def encryption_key(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "encryptionKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        return jsii.get(self, "maintainTime")

    @maintain_time.setter # type: ignore
    def maintain_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "maintainTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUsername")
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        return jsii.get(self, "masterUsername")

    @master_username.setter # type: ignore
    def master_username(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUsername", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        return jsii.get(self, "masterUserPassword")

    @master_user_password.setter # type: ignore
    def master_user_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUserPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        return jsii.get(self, "masterUserType")

    @master_user_type.setter # type: ignore
    def master_user_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterUserType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="multiAz")
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        """
        return jsii.get(self, "multiAz")

    @multi_az.setter # type: ignore
    def multi_az(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "multiAz", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        return jsii.get(self, "port")

    @port.setter # type: ignore
    def port(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "preferredBackupPeriod")

    @preferred_backup_period.setter # type: ignore
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        return jsii.get(self, "preferredBackupTime")

    @preferred_backup_time.setter # type: ignore
    def preferred_backup_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        return jsii.get(self, "privateIpAddress")

    @private_ip_address.setter # type: ignore
    def private_ip_address(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="quantity")
    def quantity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: quantity: The number of instance to be created, default is 1, max number is 99
        """
        return jsii.get(self, "quantity")

    @quantity.setter # type: ignore
    def quantity(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "quantity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="roleArn")
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        """
        return jsii.get(self, "roleArn")

    @role_arn.setter # type: ignore
    def role_arn(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "roleArn", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slaveZoneIds")
    def slave_zone_ids(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        """
        return jsii.get(self, "slaveZoneIds")

    @slave_zone_ids.setter # type: ignore
    def slave_zone_ids(self, value: typing.Optional[typing.List[builtins.str]]) -> None:
        jsii.set(self, "slaveZoneIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        return jsii.get(self, "sqlCollectorStatus")

    @sql_collector_status.setter # type: ignore
    def sql_collector_status(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        return jsii.get(self, "sslSetting")

    @ssl_setting.setter # type: ignore
    def ssl_setting(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sslSetting", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetDedicatedHostIdForLog")
    def target_dedicated_host_id_for_log(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        """
        return jsii.get(self, "targetDedicatedHostIdForLog")

    @target_dedicated_host_id_for_log.setter # type: ignore
    def target_dedicated_host_id_for_log(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForLog", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetDedicatedHostIdForMaster")
    def target_dedicated_host_id_for_master(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        """
        return jsii.get(self, "targetDedicatedHostIdForMaster")

    @target_dedicated_host_id_for_master.setter # type: ignore
    def target_dedicated_host_id_for_master(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForMaster", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetDedicatedHostIdForSlave")
    def target_dedicated_host_id_for_slave(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        """
        return jsii.get(self, "targetDedicatedHostIdForSlave")

    @target_dedicated_host_id_for_slave.setter # type: ignore
    def target_dedicated_host_id_for_slave(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "targetDedicatedHostIdForSlave", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
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
            character_set_name: builtins.str,
            db_name: builtins.str,
            db_description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(self) -> builtins.str:
            """
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            """
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return result

        @builtins.property
        def db_name(self) -> builtins.str:
            """
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            """
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return result

        @builtins.property
        def db_description(self) -> typing.Optional[builtins.str]:
            """
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            """
            result = self._values.get("db_description")
            return result

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
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "backup_retention_period": "backupRetentionPeriod",
        "category": "category",
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
        "encryption_key": "encryptionKey",
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
        commodity_code: builtins.str,
        db_instance_class: builtins.str,
        db_instance_storage: jsii.Number,
        engine: builtins.str,
        engine_version: builtins.str,
        period: jsii.Number,
        period_type: builtins.str,
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_retention_period: typing.Optional[jsii.Number] = None,
        category: typing.Optional[builtins.str] = None,
        connection_mode: typing.Optional[builtins.str] = None,
        connection_string_prefix: typing.Optional[builtins.str] = None,
        connection_string_type: typing.Optional[builtins.str] = None,
        coupon_code: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        db_instance_net_type: typing.Optional[builtins.str] = None,
        db_instance_storage_type: typing.Optional[builtins.str] = None,
        db_is_ignore_case: typing.Optional[jsii.Number] = None,
        db_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosPrepayDBInstance.DBMappingsProperty]]]] = None,
        db_param_group_id: typing.Optional[builtins.str] = None,
        db_time_zone: typing.Optional[builtins.str] = None,
        dedicated_host_group_id: typing.Optional[builtins.str] = None,
        encryption_key: typing.Optional[builtins.str] = None,
        maintain_time: typing.Optional[builtins.str] = None,
        master_username: typing.Optional[builtins.str] = None,
        master_user_password: typing.Optional[builtins.str] = None,
        master_user_type: typing.Optional[builtins.str] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[jsii.Number] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        preferred_backup_time: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        quantity: typing.Optional[jsii.Number] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        role_arn: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        slave_zone_ids: typing.Optional[typing.List[builtins.str]] = None,
        sql_collector_status: typing.Optional[builtins.str] = None,
        ssl_setting: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        target_dedicated_host_id_for_log: typing.Optional[builtins.str] = None,
        target_dedicated_host_id_for_master: typing.Optional[builtins.str] = None,
        target_dedicated_host_id_for_slave: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::PrepayDBInstance``.

        :param commodity_code: 
        :param db_instance_class: 
        :param db_instance_storage: 
        :param engine: 
        :param engine_version: 
        :param period: 
        :param period_type: 
        :param allocate_public_connection: 
        :param auto_pay: 
        :param auto_renew: 
        :param backup_retention_period: 
        :param category: 
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
        :param encryption_key: 
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
        """
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
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if backup_retention_period is not None:
            self._values["backup_retention_period"] = backup_retention_period
        if category is not None:
            self._values["category"] = category
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
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
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
    def commodity_code(self) -> builtins.str:
        """
        :Property: commodityCode: The CommodityCode of the order.
        """
        result = self._values.get("commodity_code")
        assert result is not None, "Required property 'commodity_code' is missing"
        return result

    @builtins.property
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        """
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def engine(self) -> builtins.str:
        """
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        """
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return result

    @builtins.property
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        PostgreSQL: 9.4/10.0/11.0/12.0;
        PPAS: 9.3/10.0;
        MariaDB: 10.3.
        """
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return result

    @builtins.property
    def period(self) -> jsii.Number:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return result

    @builtins.property
    def period_type(self) -> builtins.str:
        """
        :Property: periodType: Charge period for created instances.
        """
        result = self._values.get("period_type")
        assert result is not None, "Required property 'period_type' is missing"
        return result

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        """
        result = self._values.get("allocate_public_connection")
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Automatic Payment. Default is false.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def backup_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        """
        result = self._values.get("backup_retention_period")
        return result

    @builtins.property
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        """
        result = self._values.get("category")
        return result

    @builtins.property
    def connection_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        """
        result = self._values.get("connection_mode")
        return result

    @builtins.property
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        """
        result = self._values.get("connection_string_prefix")
        return result

    @builtins.property
    def connection_string_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        """
        result = self._values.get("connection_string_type")
        return result

    @builtins.property
    def coupon_code(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponCode: The coupon code of the order.
        """
        result = self._values.get("coupon_code")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def db_instance_net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        """
        result = self._values.get("db_instance_net_type")
        return result

    @builtins.property
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: specifies to use enhanced SSDs.
        """
        result = self._values.get("db_instance_storage_type")
        return result

    @builtins.property
    def db_is_ignore_case(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        """
        result = self._values.get("db_is_ignore_case")
        return result

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosPrepayDBInstance.DBMappingsProperty]]]]:
        """
        :Property: dbMappings: Database mappings to attach to db instance.
        """
        result = self._values.get("db_mappings")
        return result

    @builtins.property
    def db_param_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        """
        result = self._values.get("db_param_group_id")
        return result

    @builtins.property
    def db_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        """
        result = self._values.get("db_time_zone")
        return result

    @builtins.property
    def dedicated_host_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        """
        result = self._values.get("dedicated_host_group_id")
        return result

    @builtins.property
    def encryption_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        """
        result = self._values.get("encryption_key")
        return result

    @builtins.property
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        """
        result = self._values.get("maintain_time")
        return result

    @builtins.property
    def master_username(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUsername: The master user name for the database instance.
        """
        result = self._values.get("master_username")
        return result

    @builtins.property
    def master_user_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: masterUserPassword: The master password for the database instance.
        """
        result = self._values.get("master_user_password")
        return result

    @builtins.property
    def master_user_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        """
        result = self._values.get("master_user_type")
        return result

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        """
        result = self._values.get("multi_az")
        return result

    @builtins.property
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: port: The port of the database service.
        """
        result = self._values.get("port")
        return result

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_period")
        return result

    @builtins.property
    def preferred_backup_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        """
        result = self._values.get("preferred_backup_time")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private ip for created instance.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def quantity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: quantity: The number of instance to be created, default is 1, max number is 99
        """
        result = self._values.get("quantity")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        """
        result = self._values.get("role_arn")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def slave_zone_ids(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        """
        result = self._values.get("slave_zone_ids")
        return result

    @builtins.property
    def sql_collector_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        """
        result = self._values.get("sql_collector_status")
        return result

    @builtins.property
    def ssl_setting(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        """
        result = self._values.get("ssl_setting")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
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
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def target_dedicated_host_id_for_log(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_log")
        return result

    @builtins.property
    def target_dedicated_host_id_for_master(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_master")
        return result

    @builtins.property
    def target_dedicated_host_id_for_slave(self) -> typing.Optional[builtins.str]:
        """
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        """
        result = self._values.get("target_dedicated_host_id_for_slave")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS template type:  ``ALIYUN::RDS::ReadOnlyDBInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosReadOnlyDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RDS::ReadOnlyDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosReadOnlyDBInstance, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> typing.Any:
        """
        :Attribute: ConnectionString: DB instance connection url by Intranet.
        """
        return jsii.get(self, "attrConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created database instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: Intranet port of created DB instance.
        """
        return jsii.get(self, "attrPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
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
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        """
        return jsii.get(self, "dbInstanceClass")

    @db_instance_class.setter # type: ignore
    def db_instance_class(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the master instance.
        """
        return jsii.get(self, "dbInstanceId")

    @db_instance_id.setter # type: ignore
    def db_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        """
        return jsii.get(self, "dbInstanceStorage")

    @db_instance_storage.setter # type: ignore
    def db_instance_storage(self, value: jsii.Number) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values:

        - 5.6
        - 5.7
        - 8.0
        - 2017_ent
        """
        return jsii.get(self, "engineVersion")

    @engine_version.setter # type: ignore
    def engine_version(self, value: builtins.str) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: builtins.str) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="category")
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:

        - Basic
        - HighAvailability
        - AlwaysOn
        """
        return jsii.get(self, "category")

    @category.setter # type: ignore
    def category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        return jsii.get(self, "dbInstanceDescription")

    @db_instance_description.setter # type: ignore
    def db_instance_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:

        - local_ssd/ephemeral_ssd: local SSDs.
        - cloud_ssd: SSDs.
        - cloud_essd: ESSDs.
        """
        return jsii.get(self, "dbInstanceStorageType")

    @db_instance_storage_type.setter # type: ignore
    def db_instance_storage_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="payType")
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: payType: The billing method. The system only supports Pay-As-You-Go. Valid value: Postpaid.
        """
        return jsii.get(self, "payType")

    @pay_type.setter # type: ignore
    def pay_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        """
        return jsii.get(self, "privateIpAddress")

    @private_ip_address.setter # type: ignore
    def private_ip_address(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
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
        "category": "category",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_storage_type": "dbInstanceStorageType",
        "pay_type": "payType",
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
        db_instance_class: builtins.str,
        db_instance_id: builtins.str,
        db_instance_storage: jsii.Number,
        engine_version: builtins.str,
        zone_id: builtins.str,
        category: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        db_instance_storage_type: typing.Optional[builtins.str] = None,
        pay_type: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RDS::ReadOnlyDBInstance``.

        :param db_instance_class: 
        :param db_instance_id: 
        :param db_instance_storage: 
        :param engine_version: 
        :param zone_id: 
        :param category: 
        :param db_instance_description: 
        :param db_instance_storage_type: 
        :param pay_type: 
        :param private_ip_address: 
        :param resource_group_id: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_id": db_instance_id,
            "db_instance_storage": db_instance_storage,
            "engine_version": engine_version,
            "zone_id": zone_id,
        }
        if category is not None:
            self._values["category"] = category
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_storage_type is not None:
            self._values["db_instance_storage_type"] = db_instance_storage_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
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
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        """
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return result

    @builtins.property
    def db_instance_id(self) -> builtins.str:
        """
        :Property: dbInstanceId: The ID of the master instance.
        """
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def engine_version(self) -> builtins.str:
        """
        :Property:

        engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values:

        - 5.6
        - 5.7
        - 8.0
        - 2017_ent
        """
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return result

    @builtins.property
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
        """
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return result

    @builtins.property
    def category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        category: The edition of the instance. Valid values:

        - Basic
        - HighAvailability
        - AlwaysOn
        """
        result = self._values.get("category")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def db_instance_storage_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:

        - local_ssd/ephemeral_ssd: local SSDs.
        - cloud_ssd: SSDs.
        - cloud_essd: ESSDs.
        """
        result = self._values.get("db_instance_storage_type")
        return result

    @builtins.property
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: payType: The billing method. The system only supports Pay-As-You-Go. Valid value: Postpaid.
        """
        result = self._values.get("pay_type")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
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
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        result = self._values.get("v_switch_id")
        return result

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
