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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class ADInfo(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.ADInfo",
):
    '''A ROS resource type:  ``ALIYUN::RDS::ADInfo``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ADInfoProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3233ce007fdd8ef74de4da4e2c52b3a9dee0f6da81fd6c060e3a30ad3229d13)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddns")
    def attr_addns(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ADDNS: Active directory domain name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddns"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))


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
        ad_account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        addns: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ad_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ad_server_ip_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::ADInfo``.

        :param ad_account_name: Property adAccountName: Domain account name.
        :param addns: Property addns: Active directory domain name.
        :param ad_password: Property adPassword: Domain password.
        :param ad_server_ip_address: Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49f94204f44a2484fc17a678c05b8bca2286fceba643868f246c28775742b763)
            check_type(argname="argument ad_account_name", value=ad_account_name, expected_type=type_hints["ad_account_name"])
            check_type(argname="argument addns", value=addns, expected_type=type_hints["addns"])
            check_type(argname="argument ad_password", value=ad_password, expected_type=type_hints["ad_password"])
            check_type(argname="argument ad_server_ip_address", value=ad_server_ip_address, expected_type=type_hints["ad_server_ip_address"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ad_account_name": ad_account_name,
            "addns": addns,
            "ad_password": ad_password,
            "ad_server_ip_address": ad_server_ip_address,
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def ad_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property adAccountName: Domain account name.'''
        result = self._values.get("ad_account_name")
        assert result is not None, "Required property 'ad_account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addns(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addns: Active directory domain name.'''
        result = self._values.get("addns")
        assert result is not None, "Required property 'addns' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ad_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property adPassword: Domain password.'''
        result = self._values.get("ad_password")
        assert result is not None, "Required property 'ad_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ad_server_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.'''
        result = self._values.get("ad_server_ip_address")
        assert result is not None, "Required property 'ad_server_ip_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ADInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Account(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.Account",
):
    '''A ROS resource type:  ``ALIYUN::RDS::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__662640c75a3893cf9aaa0b7496e5c83e63230229a3afddbb8547a699873d6527)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountName: Account name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))


class AccountPrivilege(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.AccountPrivilege",
):
    '''A ROS resource type:  ``ALIYUN::RDS::AccountPrivilege``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountPrivilegeProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4143048ca2f7bf5329a7859123a4391ba83549ce6c72c22b39b0713dd2b50524)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
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
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::AccountPrivilege``.

        :param account_name: Property accountName: RDS account name.
        :param account_privilege: Property accountPrivilege: RDS account privilege.
        :param db_instance_id: Property dbInstanceId: RDS instance ID.
        :param db_name: Property dbName: RDS database name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__879bff009a7f186412bc8ddbeeae873f972ac1781b70921c5ba614a54ab03a04)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountName: RDS account name.'''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountPrivilege: RDS account privilege.'''
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: RDS instance ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbName: RDS database name.'''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::Account``.

        :param account_name: Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter; Consist of lower-case letters, digits, and underscores (_); Contain no more than 16 characters. For other invalid characters, see Forbidden keywords table.
        :param account_password: Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        :param db_instance_id: Property dbInstanceId: RDS instance ID.
        :param account_description: Property accountDescription: Account remarks. It cannot begin with http:// or https://. It must start with a Chinese character or English letter. It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits. The length may be 2-256 characters.
        :param account_type: Property accountType: Privilege type of account. Normal: Common privilege. Super: High privilege. And the default value is Normal. Sysadmin: Super privileges (SA) (only supported by SQL Server) This parameter is valid for MySQL 5.5/5.6 only. MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2acc2bcbbe7a0fc539514b32a047cbbbba551a5c3f055a5a26f2addf39641efd)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description
        if account_type is not None:
            self._values["account_type"] = account_type

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter;

        Consist of lower-case letters, digits, and underscores (_);
        Contain no more than 16 characters.
        For other invalid characters, see Forbidden keywords table.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountPassword: The account password for the database instance.

        It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: RDS instance ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountDescription: Account remarks.

        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountType: Privilege type of account.

        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstance",
):
    '''A ROS resource type:  ``ALIYUN::RDS::DBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBInstanceProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25286659ebf4ba1a86414c94b8534a86810f92c161c6efe147d378b96c1bce4a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The instance id of created database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerConnectionString: DB instance connection url by Intranet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerIPAddress: IP Address for created DB instance of Intranet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerPort: Intranet port of created DB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionString: DB instance connection url by Internet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIPAddress: IP Address for created DB instance of Internet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicPort: Internet port of created DB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))


class DBInstanceClone(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceClone",
):
    '''A ROS resource type:  ``ALIYUN::RDS::DBInstanceClone``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBInstanceCloneProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37b1ea8bd1c1bdd7fd6d46932f94f8c337c4e3c43740988a5abe6fc4a1f2ff86)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The instance id of created database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerConnectionString: DB instance connection url by Intranet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerIPAddress: IP Address for created DB instance of Intranet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerPort: Intranet port of created DB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionString: DB instance connection url by Internet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIPAddress: IP Address for created DB instance of Internet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicPort: Internet port of created DB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))


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
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBInstanceClone.DBMappingsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        db_names: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_table: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        table_meta: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBInstanceClone.TableMetaProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb4fc0f711f3d10c6f3bcd5810a9b4265be0a3082805ed3058035f2539017167)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument allocate_public_connection", value=allocate_public_connection, expected_type=type_hints["allocate_public_connection"])
            check_type(argname="argument backup_id", value=backup_id, expected_type=type_hints["backup_id"])
            check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument connection_string_type", value=connection_string_type, expected_type=type_hints["connection_string_type"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument db_mappings", value=db_mappings, expected_type=type_hints["db_mappings"])
            check_type(argname="argument db_names", value=db_names, expected_type=type_hints["db_names"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument instance_network_type", value=instance_network_type, expected_type=type_hints["instance_network_type"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument master_username", value=master_username, expected_type=type_hints["master_username"])
            check_type(argname="argument master_user_password", value=master_user_password, expected_type=type_hints["master_user_password"])
            check_type(argname="argument master_user_type", value=master_user_type, expected_type=type_hints["master_user_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
            check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument restore_table", value=restore_table, expected_type=type_hints["restore_table"])
            check_type(argname="argument restore_time", value=restore_time, expected_type=type_hints["restore_time"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument slave_zone_ids", value=slave_zone_ids, expected_type=type_hints["slave_zone_ids"])
            check_type(argname="argument sql_collector_status", value=sql_collector_status, expected_type=type_hints["sql_collector_status"])
            check_type(argname="argument ssl_setting", value=ssl_setting, expected_type=type_hints["ssl_setting"])
            check_type(argname="argument table_meta", value=table_meta, expected_type=type_hints["table_meta"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument timeout_in_minutes", value=timeout_in_minutes, expected_type=type_hints["timeout_in_minutes"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: Instance id.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The charge type of created instance.'''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allocatePublicConnection: If true, allocate public connection automate.'''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupId: The ID of the backup set that you want to use.

        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        '''
        result = self._values.get("backup_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupRetentionPeriod: The retention period of the data backup.

        Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupType: The type of backup used by the new instance.

        Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        '''
        result = self._values.get("backup_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The edition of the instance.

        Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionStringPrefix: The prefix of the endpoint.

        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.'''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceClass: Database instance type.

        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceStorage: Database instance storage size.

        mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceStorageType: The storage type of the instance.

        Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]]:
        '''Property dbMappings: Database mappings to attach to db instance.'''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]], result)

    @builtins.property
    def db_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbNames: The names of the databases that you want to create on the new instance.'''
        result = self._values.get("db_names")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceNetworkType: The network type of the new instance.

        Valid values:

        - VPC
        - Classic
          The default value is the network type of the original instance.
        '''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maintainTime: The period during which the maintenance performs.

        The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUsername: The master user name for the database instance.'''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUserPassword: The master password for the database instance.'''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUserType: Privilege type of account.

        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription duration.

        Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodType: Charge period for created instances.'''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property port: The port of the database service.'''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preferredBackupPeriod: The backup period.

        Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preferredBackupTime: The time when the backup task is performed.

        Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateIpAddress: The private ip for created instance.'''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restoreTable: Specifies whether to restore specific databases and tables.

        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        '''
        result = self._values.get("restore_table")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restoreTime: The point in time to which you want to restore the data of the original instance.

        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the ECS security groups.

        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.'''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.

        Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.

        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.

        Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]]:
        '''Property tableMeta: The information about the databases and tables that you want to restore.'''
        result = self._values.get("table_meta")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]], result)

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
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeoutInMinutes: The timeout period for creating the clone instance resource.

        Unit: Minute. Default: 120.
        '''
        result = self._values.get("timeout_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC id of created database instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vSwitch id of created instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: selected zone to create database instance.

        You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceCloneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstanceParameterGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceParameterGroup",
):
    '''A ROS resource type:  ``ALIYUN::RDS::DBInstanceParameterGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBInstanceParameterGroupProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00bce13d5c506813cabd9f5fb121c59105974950ff1ebb9f020903e70d44c827)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
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
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBInstanceParameterGroup.ParametersProperty", typing.Dict[builtins.str, typing.Any]]]]],
        forcerestart: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param db_instance_id: Property dbInstanceId: Database InstanceId to update properties.
        :param parameters: Property parameters: Parameters to update for selected database instance.
        :param forcerestart: Property forcerestart: whether restart database instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eef252d70d395b53afd848d20c892c455f2364d729e1f14a2d9ae99f0bd2ca8)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument forcerestart", value=forcerestart, expected_type=type_hints["forcerestart"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "parameters": parameters,
        }
        if forcerestart is not None:
            self._values["forcerestart"] = forcerestart

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: Database InstanceId to update properties.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]]:
        '''Property parameters: Parameters to update for selected database instance.'''
        result = self._values.get("parameters")
        assert result is not None, "Required property 'parameters' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]], result)

    @builtins.property
    def forcerestart(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property forcerestart: whether restart database instance.'''
        result = self._values.get("forcerestart")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        "serverless_config": "serverlessConfig",
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
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ip_list: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        back_up_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compress_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBInstance.DBMappingsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        db_param_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_backup_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        high_space_usage_protection: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        local_log_retention_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        released_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBInstance.ServerlessConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstance``.

        :param db_instance_class: Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        :param db_instance_storage: Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        :param engine: Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        :param engine_version: Property engineVersion: Database instance version of the relative engine type. Support: Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0 Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0 Valid values when you set the Engine parameter to MariaDB: 10.3
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
        :param serverless_config: Property serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e89b6340eeaf0ceb5fcda5835514ff8458fc9a0ae3a9fd05debf668e9fc101ac)
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument allocate_public_connection", value=allocate_public_connection, expected_type=type_hints["allocate_public_connection"])
            check_type(argname="argument archive_backup_keep_count", value=archive_backup_keep_count, expected_type=type_hints["archive_backup_keep_count"])
            check_type(argname="argument archive_backup_keep_policy", value=archive_backup_keep_policy, expected_type=type_hints["archive_backup_keep_policy"])
            check_type(argname="argument archive_backup_retention_period", value=archive_backup_retention_period, expected_type=type_hints["archive_backup_retention_period"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument back_up_category", value=back_up_category, expected_type=type_hints["back_up_category"])
            check_type(argname="argument backup_policy_mode", value=backup_policy_mode, expected_type=type_hints["backup_policy_mode"])
            check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument compress_type", value=compress_type, expected_type=type_hints["compress_type"])
            check_type(argname="argument connection_mode", value=connection_mode, expected_type=type_hints["connection_mode"])
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument connection_string_type", value=connection_string_type, expected_type=type_hints["connection_string_type"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_net_type", value=db_instance_net_type, expected_type=type_hints["db_instance_net_type"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument db_is_ignore_case", value=db_is_ignore_case, expected_type=type_hints["db_is_ignore_case"])
            check_type(argname="argument db_mappings", value=db_mappings, expected_type=type_hints["db_mappings"])
            check_type(argname="argument db_param_group_id", value=db_param_group_id, expected_type=type_hints["db_param_group_id"])
            check_type(argname="argument db_time_zone", value=db_time_zone, expected_type=type_hints["db_time_zone"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument enable_backup_log", value=enable_backup_log, expected_type=type_hints["enable_backup_log"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument high_space_usage_protection", value=high_space_usage_protection, expected_type=type_hints["high_space_usage_protection"])
            check_type(argname="argument local_log_retention_hours", value=local_log_retention_hours, expected_type=type_hints["local_log_retention_hours"])
            check_type(argname="argument local_log_retention_space", value=local_log_retention_space, expected_type=type_hints["local_log_retention_space"])
            check_type(argname="argument log_backup_frequency", value=log_backup_frequency, expected_type=type_hints["log_backup_frequency"])
            check_type(argname="argument log_backup_local_retention_number", value=log_backup_local_retention_number, expected_type=type_hints["log_backup_local_retention_number"])
            check_type(argname="argument log_backup_retention_period", value=log_backup_retention_period, expected_type=type_hints["log_backup_retention_period"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument master_username", value=master_username, expected_type=type_hints["master_username"])
            check_type(argname="argument master_user_password", value=master_user_password, expected_type=type_hints["master_user_password"])
            check_type(argname="argument master_user_type", value=master_user_type, expected_type=type_hints["master_user_type"])
            check_type(argname="argument multi_az", value=multi_az, expected_type=type_hints["multi_az"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
            check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument released_keep_policy", value=released_keep_policy, expected_type=type_hints["released_keep_policy"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument serverless_config", value=serverless_config, expected_type=type_hints["serverless_config"])
            check_type(argname="argument slave_zone_ids", value=slave_zone_ids, expected_type=type_hints["slave_zone_ids"])
            check_type(argname="argument sql_collector_status", value=sql_collector_status, expected_type=type_hints["sql_collector_status"])
            check_type(argname="argument ssl_setting", value=ssl_setting, expected_type=type_hints["ssl_setting"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument target_dedicated_host_id_for_log", value=target_dedicated_host_id_for_log, expected_type=type_hints["target_dedicated_host_id_for_log"])
            check_type(argname="argument target_dedicated_host_id_for_master", value=target_dedicated_host_id_for_master, expected_type=type_hints["target_dedicated_host_id_for_master"])
            check_type(argname="argument target_dedicated_host_id_for_slave", value=target_dedicated_host_id_for_slave, expected_type=type_hints["target_dedicated_host_id_for_slave"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if serverless_config is not None:
            self._values["serverless_config"] = serverless_config
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
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceClass: Database instance type.

        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceStorage: Database instance storage size.

        mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: Database instance engine type.

        Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engineVersion: Database instance version of the relative engine type.

        Support:
        Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
        Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
        Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
        Valid values when you set the Engine parameter to MariaDB: 10.3
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.'''
        result = self._values.get("security_ip_list")
        assert result is not None, "Required property 'security_ip_list' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allocatePublicConnection: If true, allocate public connection automate.'''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property archiveBackupKeepPolicy: The period for which to retain archived backups.

        The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        result = self._values.get("archive_backup_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.

        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        result = self._values.get("archive_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal.

        Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backUpCategory: Specifies whether to enable the second-level backup function.

        This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        result = self._values.get("back_up_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.'''
        result = self._values.get("backup_policy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupRetentionPeriod: The retention period of the data backup.

        Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The edition of the instance.

        Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.

        Default is RDS system assigns.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionStringPrefix: The prefix of the endpoint.

        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.'''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.'''
        result = self._values.get("db_instance_net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceStorageType: The storage type of the instance.

        Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.

        Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        result = self._values.get("db_is_ignore_case")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.DBMappingsProperty"]]]]:
        '''Property dbMappings: Database mappings to attach to db instance.'''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.DBMappingsProperty"]]]], result)

    @builtins.property
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbParamGroupId: The ID of the parameter template used by the instance.'''
        result = self._values.get("db_param_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbTimeZone: The UTC time zone of the instance.

        Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableBackupLog: Specifies whether to enable the log backup function.

        Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("enable_backup_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.

        You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.

        Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("high_space_usage_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.

        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_hours")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.

        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logBackupFrequency: The frequency at which to back up logs.

        Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        result = self._values.get("log_backup_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.

        Default value: 60. Valid values: 6 to 100.
        '''
        result = self._values.get("log_backup_local_retention_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logBackupRetentionPeriod: The number of days for which to retain log backup files.

        Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        result = self._values.get("log_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maintainTime: The period during which the maintenance performs.

        The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUsername: The master user name for the database instance.'''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUserPassword: The master password for the database instance.'''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUserType: Privilege type of account.

        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.'''
        result = self._values.get("multi_az")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The charge type of created instance.'''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription duration.

        Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodType: Charge period for created instances.'''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property port: The port of the database service.'''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preferredBackupPeriod: The backup period.

        Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preferredBackupTime: The time when the backup task is performed.

        Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateIpAddress: The private ip for created instance.'''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.

        Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        result = self._values.get("released_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.

        You can copy the ARN from the RAM console.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the ECS security groups.

        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.ServerlessConfigProperty"]]:
        '''Property serverlessConfig: The config of RDS serverless instance.

        This is required when creating serverless instance.
        '''
        result = self._values.get("serverless_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.ServerlessConfigProperty"]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.

        Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.

        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.

        Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_log")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_master")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_slave")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC id of created database instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vSwitch id of created instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: selected zone to create database instance.

        You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstanceSecurityIps(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.DBInstanceSecurityIps",
):
    '''A ROS resource type:  ``ALIYUN::RDS::DBInstanceSecurityIps``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBInstanceSecurityIpsProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3767e5a20a69d016851f9b8326aff5c6f21041eb1a81c7cf61b0b4fc8715bed)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIps: The security ips of selected database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIps"))


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
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_ip_array_attribute: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param db_instance_id: Property dbInstanceId: Database instance id to update security ips.
        :param db_instance_ip_array_attribute: Property dbInstanceIpArrayAttribute: Security ips to add or remove.
        :param db_instance_ip_array_name: Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92d7ac5c0362abfa9e376faf8e3f77ff5c51a409f8fcbf273dc9021cbb2b764a)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_ip_array_attribute", value=db_instance_ip_array_attribute, expected_type=type_hints["db_instance_ip_array_attribute"])
            check_type(argname="argument db_instance_ip_array_name", value=db_instance_ip_array_name, expected_type=type_hints["db_instance_ip_array_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "db_instance_ip_array_attribute": db_instance_ip_array_attribute,
        }
        if db_instance_ip_array_name is not None:
            self._values["db_instance_ip_array_name"] = db_instance_ip_array_name

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: Database instance id to update security ips.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_ip_array_attribute(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceIpArrayAttribute: Security ips to add or remove.'''
        result = self._values.get("db_instance_ip_array_attribute")
        assert result is not None, "Required property 'db_instance_ip_array_attribute' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'.

        Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        '''
        result = self._values.get("db_instance_ip_array_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceSecurityIpsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Database(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.Database",
):
    '''A ROS resource type:  ``ALIYUN::RDS::Database``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DatabaseProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a16b891fc544b72f728998b214881851e68747516cd567ab094cc8d3cf295e2d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBName: The name of the database.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbName"))


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
        character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::Database``.

        :param character_set_name: Property characterSetName: The character set you want to use for the database. Valid values: MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4. SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS | Chinese_PRC_BIN. PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 | WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004 | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7 | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 | SQL_ASCII.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param db_name: Property dbName: The name of the database you want to create. Note The name must be 2 to 64 characters in length. The name must start with a lowercase letter and end with a lowercase letter or digit. The name can contain lowercase letters, digits, underscores (_), and hyphens (-). The name must be unique in the instance. For more information about invalid characters, see Forbidden keywords table.
        :param db_description: Property dbDescription: The description of the database. The description must be 2 to 256 characters in length. The description must start with a letter and can contain letters, digits, underscores (_), and hyphens (-). Note The description cannot start with http:// or https://.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dee6c1812705d776dae16ff3fbb80eab354a7cf8f1740e08c138b314ca61afc)
            check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument db_description", value=db_description, expected_type=type_hints["db_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "character_set_name": character_set_name,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }
        if db_description is not None:
            self._values["db_description"] = db_description

    @builtins.property
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbDescription: The description of the database.

        The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        '''
        result = self._values.get("db_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MigrateTask(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.MigrateTask",
):
    '''A ROS resource type:  ``ALIYUN::RDS::MigrateTask``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MigrateTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::MigrateTask``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd11bf33e2fdd68afa1f595a274bdfa04c52b83438a0bbb2da81acfcd087866b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBName: The name of the database that you want to restore.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbName"))

    @builtins.property
    @jsii.member(jsii_name="attrMigrateTaskId")
    def attr_migrate_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MigrateTaskId: The ID of the migrate task.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMigrateTaskId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.MigrateTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_mode": "backupMode",
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
        "is_online_db": "isOnlineDb",
        "check_db_mode": "checkDbMode",
        "oss_object_positions": "ossObjectPositions",
        "oss_urls": "ossUrls",
    },
)
class MigrateTaskProps:
    def __init__(
        self,
        *,
        backup_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_online_db: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        check_db_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_object_positions: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_urls: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::MigrateTask``.

        :param backup_mode: Property backupMode: The type of the migration task. Valid values: FULL: specifies that full backup files are used to restore data. UPDF: specifies that incremental backup files or log files are used to restore incremental data.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param db_name: Property dbName: The name of the database that you want to restore.
        :param is_online_db: Property isOnlineDb: Specifies whether to bring the restored database online for user access. Note The value for SQL Server 2008 R2 is fixed to True.
        :param check_db_mode: Property checkDbMode: The consistency check method of the database. Valid values: SyncExecuteDBCheck: synchronous database check AsyncExecuteDBCheck: asynchronous database check Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2). Note When IsOnlineDB is set to True, this value is valid.
        :param oss_object_positions: Property ossObjectPositions: The information of the backup file in the OSS bucket. The values consist of three parts that are separated by colons (:): The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com. The name of the OSS bucket: rdsmssqlsingapore. The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak. Note This parameter is optional for instances that run SQL Server 2008 R2. This parameter is required for instances that run a database engine later than SQL Server 2008 R2.
        :param oss_urls: Property ossUrls: The shared URL of the backup file in the OSS bucket. The URL must be encoded. If you specify multiple URLs, separate them with vertical bars (|) and then encode them. Note This parameter must be entered for instances that run SQL Server 2008 R2.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42bbb3bb93114c97649b27ac607bfb19c8efda2fed1938fbcef2dbc52df59159)
            check_type(argname="argument backup_mode", value=backup_mode, expected_type=type_hints["backup_mode"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument is_online_db", value=is_online_db, expected_type=type_hints["is_online_db"])
            check_type(argname="argument check_db_mode", value=check_db_mode, expected_type=type_hints["check_db_mode"])
            check_type(argname="argument oss_object_positions", value=oss_object_positions, expected_type=type_hints["oss_object_positions"])
            check_type(argname="argument oss_urls", value=oss_urls, expected_type=type_hints["oss_urls"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_mode": backup_mode,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
            "is_online_db": is_online_db,
        }
        if check_db_mode is not None:
            self._values["check_db_mode"] = check_db_mode
        if oss_object_positions is not None:
            self._values["oss_object_positions"] = oss_object_positions
        if oss_urls is not None:
            self._values["oss_urls"] = oss_urls

    @builtins.property
    def backup_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property backupMode: The type of the migration task.

        Valid values:
        FULL: specifies that full backup files are used to restore data.
        UPDF: specifies that incremental backup files or log files are used to restore incremental data.
        '''
        result = self._values.get("backup_mode")
        assert result is not None, "Required property 'backup_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbName: The name of the database that you want to restore.'''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_online_db(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property isOnlineDb: Specifies whether to bring the restored database online for user access.

        Note The value for SQL Server 2008 R2 is fixed to True.
        '''
        result = self._values.get("is_online_db")
        assert result is not None, "Required property 'is_online_db' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def check_db_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property checkDbMode: The consistency check method of the database.

        Valid values:
        SyncExecuteDBCheck: synchronous database check
        AsyncExecuteDBCheck: asynchronous database check
        Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
        Note When IsOnlineDB is set to True, this value is valid.
        '''
        result = self._values.get("check_db_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_object_positions(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossObjectPositions: The information of the backup file in the OSS bucket.

        The values consist of three parts that are separated by colons (:):
        The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
        The name of the OSS bucket: rdsmssqlsingapore.
        The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
        Note
        This parameter is optional for instances that run SQL Server 2008 R2.
        This parameter is required for instances that run a database engine later than SQL
        Server 2008 R2.
        '''
        result = self._values.get("oss_object_positions")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_urls(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossUrls: The shared URL of the backup file in the OSS bucket.

        The URL must be encoded.
        If you specify multiple URLs, separate them with vertical bars (|) and then encode
        them.
        Note This parameter must be entered for instances that run SQL Server 2008 R2.
        '''
        result = self._values.get("oss_urls")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MigrateTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PrepayDBInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.PrepayDBInstance",
):
    '''A ROS resource type:  ``ALIYUN::RDS::PrepayDBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PrepayDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__296f8dcdd8cecad7e33fc8b804b33fe67c6d1064c30a8728ed522528d6b49e83)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The instance id of created database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerConnectionString: DB instance connection url by Intranet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerIPAddress: IP Address for created DB instance of Intranet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InnerPort: Intranet port of created DB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The order id list of created instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionString: DB instance connection url by Internet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIPAddress: IP Address for created DB instance of Internet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicPort: Internet port of created DB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))


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
        "serverless_config": "serverlessConfig",
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
        commodity_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        back_up_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compress_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        coupon_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayDBInstance.DBMappingsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        db_param_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_backup_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        high_space_usage_protection: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        local_log_retention_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quantity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        released_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayDBInstance.ServerlessConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::PrepayDBInstance``.

        :param commodity_code: Property commodityCode: The CommodityCode of the order.
        :param db_instance_class: Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        :param db_instance_storage: Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        :param engine: Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        :param engine_version: Property engineVersion: Database instance version of the relative engine type. Support: Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0 Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0 Valid values when you set the Engine parameter to MariaDB: 10.3
        :param period: Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        :param period_type: Property periodType: Charge period for created instances.
        :param allocate_public_connection: Property allocatePublicConnection: If true, allocate public connection automate.
        :param archive_backup_keep_count: Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values: The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy parameter is set to ByMonth. The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy parameter is set to ByWeek. Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy parameter is set to KeepAll.
        :param archive_backup_keep_policy: Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can be retained within the specified period is determined by the ArchiveBackupKeepCount parameter. Default value: 0. Valid values: ByMonth ByWeek KeepAll
        :param archive_backup_retention_period: Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups. The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        :param auto_pay: Property autoPay: Automatic Payment. Default is true.
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
        :param serverless_config: Property serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8e3b948e447a4f4e7c0dbcd2b1ba3e8c1f39b845a1136d07526c41d8cfeee33)
            check_type(argname="argument commodity_code", value=commodity_code, expected_type=type_hints["commodity_code"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument allocate_public_connection", value=allocate_public_connection, expected_type=type_hints["allocate_public_connection"])
            check_type(argname="argument archive_backup_keep_count", value=archive_backup_keep_count, expected_type=type_hints["archive_backup_keep_count"])
            check_type(argname="argument archive_backup_keep_policy", value=archive_backup_keep_policy, expected_type=type_hints["archive_backup_keep_policy"])
            check_type(argname="argument archive_backup_retention_period", value=archive_backup_retention_period, expected_type=type_hints["archive_backup_retention_period"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument back_up_category", value=back_up_category, expected_type=type_hints["back_up_category"])
            check_type(argname="argument backup_policy_mode", value=backup_policy_mode, expected_type=type_hints["backup_policy_mode"])
            check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument compress_type", value=compress_type, expected_type=type_hints["compress_type"])
            check_type(argname="argument connection_mode", value=connection_mode, expected_type=type_hints["connection_mode"])
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument connection_string_type", value=connection_string_type, expected_type=type_hints["connection_string_type"])
            check_type(argname="argument coupon_code", value=coupon_code, expected_type=type_hints["coupon_code"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_net_type", value=db_instance_net_type, expected_type=type_hints["db_instance_net_type"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument db_is_ignore_case", value=db_is_ignore_case, expected_type=type_hints["db_is_ignore_case"])
            check_type(argname="argument db_mappings", value=db_mappings, expected_type=type_hints["db_mappings"])
            check_type(argname="argument db_param_group_id", value=db_param_group_id, expected_type=type_hints["db_param_group_id"])
            check_type(argname="argument db_time_zone", value=db_time_zone, expected_type=type_hints["db_time_zone"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument enable_backup_log", value=enable_backup_log, expected_type=type_hints["enable_backup_log"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument high_space_usage_protection", value=high_space_usage_protection, expected_type=type_hints["high_space_usage_protection"])
            check_type(argname="argument local_log_retention_hours", value=local_log_retention_hours, expected_type=type_hints["local_log_retention_hours"])
            check_type(argname="argument local_log_retention_space", value=local_log_retention_space, expected_type=type_hints["local_log_retention_space"])
            check_type(argname="argument log_backup_frequency", value=log_backup_frequency, expected_type=type_hints["log_backup_frequency"])
            check_type(argname="argument log_backup_local_retention_number", value=log_backup_local_retention_number, expected_type=type_hints["log_backup_local_retention_number"])
            check_type(argname="argument log_backup_retention_period", value=log_backup_retention_period, expected_type=type_hints["log_backup_retention_period"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument master_username", value=master_username, expected_type=type_hints["master_username"])
            check_type(argname="argument master_user_password", value=master_user_password, expected_type=type_hints["master_user_password"])
            check_type(argname="argument master_user_type", value=master_user_type, expected_type=type_hints["master_user_type"])
            check_type(argname="argument multi_az", value=multi_az, expected_type=type_hints["multi_az"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
            check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument quantity", value=quantity, expected_type=type_hints["quantity"])
            check_type(argname="argument released_keep_policy", value=released_keep_policy, expected_type=type_hints["released_keep_policy"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument serverless_config", value=serverless_config, expected_type=type_hints["serverless_config"])
            check_type(argname="argument slave_zone_ids", value=slave_zone_ids, expected_type=type_hints["slave_zone_ids"])
            check_type(argname="argument sql_collector_status", value=sql_collector_status, expected_type=type_hints["sql_collector_status"])
            check_type(argname="argument ssl_setting", value=ssl_setting, expected_type=type_hints["ssl_setting"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument target_dedicated_host_id_for_log", value=target_dedicated_host_id_for_log, expected_type=type_hints["target_dedicated_host_id_for_log"])
            check_type(argname="argument target_dedicated_host_id_for_master", value=target_dedicated_host_id_for_master, expected_type=type_hints["target_dedicated_host_id_for_master"])
            check_type(argname="argument target_dedicated_host_id_for_slave", value=target_dedicated_host_id_for_slave, expected_type=type_hints["target_dedicated_host_id_for_slave"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if serverless_config is not None:
            self._values["serverless_config"] = serverless_config
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
    def commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property commodityCode: The CommodityCode of the order.'''
        result = self._values.get("commodity_code")
        assert result is not None, "Required property 'commodity_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceClass: Database instance type.

        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceStorage: Database instance storage size.

        mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: Database instance engine type.

        Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engineVersion: Database instance version of the relative engine type.

        Support:
        Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
        Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
        Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
        Valid values when you set the Engine parameter to MariaDB: 10.3
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: Prepaid time period.

        While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property periodType: Charge period for created instances.'''
        result = self._values.get("period_type")
        assert result is not None, "Required property 'period_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allocatePublicConnection: If true, allocate public connection automate.'''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property archiveBackupKeepPolicy: The period for which to retain archived backups.

        The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        result = self._values.get("archive_backup_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.

        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        result = self._values.get("archive_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Automatic Payment.

        Default is true.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Auto renew the prepay instance.

        If the period type is by year, it will renew by year, else it will renew by month.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backUpCategory: Specifies whether to enable the second-level backup function.

        This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        result = self._values.get("back_up_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.'''
        result = self._values.get("backup_policy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupRetentionPeriod: The retention period of the data backup.

        Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The edition of the instance.

        Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.

        Default is RDS system assigns.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionStringPrefix: The prefix of the endpoint.

        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.'''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def coupon_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property couponCode: The coupon code of the order.'''
        result = self._values.get("coupon_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.'''
        result = self._values.get("db_instance_net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceStorageType: The storage type of the instance.

        Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.

        Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        result = self._values.get("db_is_ignore_case")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]]:
        '''Property dbMappings: Database mappings to attach to db instance.'''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]], result)

    @builtins.property
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbParamGroupId: The ID of the parameter template used by the instance.'''
        result = self._values.get("db_param_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbTimeZone: The UTC time zone of the instance.

        Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableBackupLog: Specifies whether to enable the log backup function.

        Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("enable_backup_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.

        You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.

        Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("high_space_usage_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.

        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_hours")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.

        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logBackupFrequency: The frequency at which to back up logs.

        Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        result = self._values.get("log_backup_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.

        Default value: 60. Valid values: 6 to 100.
        '''
        result = self._values.get("log_backup_local_retention_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logBackupRetentionPeriod: The number of days for which to retain log backup files.

        Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        result = self._values.get("log_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maintainTime: The period during which the maintenance performs.

        The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUsername: The master user name for the database instance.'''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUserPassword: The master password for the database instance.'''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterUserType: Privilege type of account.

        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.'''
        result = self._values.get("multi_az")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property port: The port of the database service.'''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preferredBackupPeriod: The backup period.

        Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preferredBackupTime: The time when the backup task is performed.

        Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateIpAddress: The private ip for created instance.'''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quantity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property quantity: The number of instance to be created, default is 1, max number is 99.'''
        result = self._values.get("quantity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.

        Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        result = self._values.get("released_keep_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.

        You can copy the ARN from the RAM console.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the ECS security groups.

        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.ServerlessConfigProperty"]]:
        '''Property serverlessConfig: The config of RDS serverless instance.

        This is required when creating serverless instance.
        '''
        result = self._values.get("serverless_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.ServerlessConfigProperty"]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.

        Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.

        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.

        Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_log")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_master")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.'''
        result = self._values.get("target_dedicated_host_id_for_slave")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC id of created database instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vSwitch id of created instance.

        For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: selected zone to create database instance.

        You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrepayDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ReadOnlyDBInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.ReadOnlyDBInstance",
):
    '''A ROS resource type:  ``ALIYUN::RDS::ReadOnlyDBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ReadOnlyDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6cbd4fd5366f3166d6ae403e5795eb81b40bed0223a013ac75a2d721a88dbe9f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: DB instance connection url by Intranet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The instance id of created database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: Intranet port of created DB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))


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
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        :param pay_type: Property payType: The billing method.
        :param period: Property period: The subscription duration. Valid values: When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60. When PeriodType is Year, it could be from 1 to 5.
        :param period_type: Property periodType: Charge period for created instances.
        :param private_ip_address: Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: The tags of an instance. You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}. At most 5 tags can be specified. Key It can be up to 64 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Cannot be a null string. Value It can be up to 128 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Can be a null string.
        :param vpc_id: Property vpcId: The ID of the VPC.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a3e5c21bceab2cf0c5dd4c67b21ba39edb1d7b0846ee1116cb3fae7cbac5ce8)
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceClass: The type of the instance.

        For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the master instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceStorage: The storage space of the instance.

        Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engineVersion: The version of the database.

        The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The ID of the zone.

        You can call the DescribeRegions API operation to view the latest zones.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal.

        Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The RDS edition of the read-only instance.

        Valid values:
        Basic: Basic Edition.
        HighAvailability: High-availability Edition. This is the default value.
        AlwaysOn: Cluster Edition.
        Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceStorageType: The type of storage media that is used by the instance.

        Valid values:
        local_ssd: local SSDs
        cloud_ssd: standard SSDs
        cloud_essd: ESSDs of performance level 1 (PL1)
        cloud_essd2: ESSDs of PL2
        cloud_essd3: ESSDs of PL3
        '''
        result = self._values.get("db_instance_storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The billing method.'''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription duration.

        Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodType: Charge period for created instances.'''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateIpAddress: The private IP address of the read-only instance.

        It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the VSwitch.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ReadOnlyDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosADInfo(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosADInfo",
):
    '''A ROS template type:  ``ALIYUN::RDS::ADInfo``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosADInfoProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::ADInfo``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24633c68789f0c13162f8b750a514104068c6600c62d67e4cf365d4ec462b774)
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
            type_hints = typing.get_type_hints(_typecheckingstub__475a50ab06181e3e7ceb1f6721e48b716b1f103409bcd40c799f700e734e958c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddns")
    def attr_addns(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ADDNS: Active directory domain name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddns"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="adAccountName")
    def ad_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: adAccountName: Domain account name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "adAccountName"))

    @ad_account_name.setter
    def ad_account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b292745089c1ac28040abca025888c5141d9df1f4dd1d9f55e9348f6d30e8932)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "adAccountName", value)

    @builtins.property
    @jsii.member(jsii_name="addns")
    def addns(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addns: Active directory domain name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addns"))

    @addns.setter
    def addns(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d770653d2485fdeed2b68f4aa94352ae29fd2edd07f5723022930ca16ca5062b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addns", value)

    @builtins.property
    @jsii.member(jsii_name="adPassword")
    def ad_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: adPassword: Domain password.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "adPassword"))

    @ad_password.setter
    def ad_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26a8807527a48dbc51eba41f490f30878311e97167b24a3bce66f6f14c91bdfc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "adPassword", value)

    @builtins.property
    @jsii.member(jsii_name="adServerIpAddress")
    def ad_server_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "adServerIpAddress"))

    @ad_server_ip_address.setter
    def ad_server_ip_address(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13780c1b2f113d0abeb5710d4273f7f1fcd55f0fe9c123153ea294ee73475ef9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "adServerIpAddress", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9df19d2db3da80e6705ad5ad03b4f621771c5ad22bcbf61fed784a65b34525f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe22533828abe81995188514f88b6c5568b86678917e9971bd0fd45d80827add)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        ad_account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        addns: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ad_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ad_server_ip_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::ADInfo``.

        :param ad_account_name: 
        :param addns: 
        :param ad_password: 
        :param ad_server_ip_address: 
        :param db_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cc567626eb191f055f3106f6a29093ffcf5ebe9d3806e59c86b6dc1c0bd5bb5)
            check_type(argname="argument ad_account_name", value=ad_account_name, expected_type=type_hints["ad_account_name"])
            check_type(argname="argument addns", value=addns, expected_type=type_hints["addns"])
            check_type(argname="argument ad_password", value=ad_password, expected_type=type_hints["ad_password"])
            check_type(argname="argument ad_server_ip_address", value=ad_server_ip_address, expected_type=type_hints["ad_server_ip_address"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ad_account_name": ad_account_name,
            "addns": addns,
            "ad_password": ad_password,
            "ad_server_ip_address": ad_server_ip_address,
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def ad_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: adAccountName: Domain account name.
        '''
        result = self._values.get("ad_account_name")
        assert result is not None, "Required property 'ad_account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addns(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addns: Active directory domain name.
        '''
        result = self._values.get("addns")
        assert result is not None, "Required property 'addns' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ad_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: adPassword: Domain password.
        '''
        result = self._values.get("ad_password")
        assert result is not None, "Required property 'ad_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ad_server_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        '''
        result = self._values.get("ad_server_ip_address")
        assert result is not None, "Required property 'ad_server_ip_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosADInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::RDS::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9cdc06da70f394fd63ce8ede0604423109828a898e754968784474242eb94cb0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d285432d788d87ff12e4f2185cfc700325ec2c8a8570ddbf52e54d0469aeb3d4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountName: Account name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

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
        :Property:

        accountName: Account name, which must be unique and meet the following requirements:
        Start with a letter;
        Consist of lower-case letters, digits, and underscores (_);
        Contain no more than 16 characters.
        For other invalid characters, see Forbidden keywords table.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de3d62e29f1bc5496c6e479b43e41cee5190a88c76bd231fd4c96cc253d4b85d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2157d00766dbe47dbf2b56b78a5594853a83767f892f4f739615e5001eb454f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: RDS instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9cf84f66fffc0ff642a9c7aa932c62904dade74547981098a35bd119ff709b6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__348c6d5729377051621fa6752508792aa715c45b614da7a7c8ee9d7b60e1f27a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountDescription: Account remarks.
        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c7725298cf81c3e99fef02ba9d895443334904c4e4dae87435e318320f70516)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountDescription", value)

    @builtins.property
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0395cd0fe5f00fe781d10ed06315c8d1819a6e90885247c66adbaa768f754fcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountType", value)


class RosAccountPrivilege(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosAccountPrivilege",
):
    '''A ROS template type:  ``ALIYUN::RDS::AccountPrivilege``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountPrivilegeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::AccountPrivilege``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__613b4f261e620fe323f69c40fddeb17355f14ef0ee9614d044f3df07c565bb2f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fbd016b814025a6a442238c74ff81030004ec77b063efa74955ad389b92c235f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
        :Property: accountName: RDS account name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdb3a4be52db8306503b4067c579d09928e17277ec3efc6f102df8b15d4736e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountPrivilege: RDS account privilege
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountPrivilege"))

    @account_privilege.setter
    def account_privilege(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc8ffddea0a94514537bc34658dfd425754bef1de5dc260f478700caecec6889)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPrivilege", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: RDS instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ad0be25f96fd8b0e39caefb1675650c9805667cf3669d4c42504193e4186293)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbName: RDS database name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0bbab1e9993a2477e9ffb71421f5fbaef66e0218d30c1016191e271bcae6978)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1b25bf3d918213899322a8a9f8c33d1fad59db8a58874aa7b949180a131b9cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::AccountPrivilege``.

        :param account_name: 
        :param account_privilege: 
        :param db_instance_id: 
        :param db_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6da918476f84cb4037104941d3f18f9ebe2168f9b4f5300789519bb4aac8158)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountName: RDS account name.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountPrivilege: RDS account privilege
        '''
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: RDS instance ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbName: RDS database name
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::Account``.

        :param account_name: 
        :param account_password: 
        :param db_instance_id: 
        :param account_description: 
        :param account_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d44881b70cd8bae3236219e28d381dd921c5ce580f835e8d428735994b83612a)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description
        if account_type is not None:
            self._values["account_type"] = account_type

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: RDS instance ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountDescription: Account remarks.
        It cannot begin with http:// or https://.
        It must start with a Chinese character or English letter.
        It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        The length may be 2-256 characters.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege. And the default value is Normal.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        This parameter is valid for MySQL 5.5/5.6 only.
        MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstance",
):
    '''A ROS template type:  ``ALIYUN::RDS::DBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__823c253c86e872a6fb66a9bd16b7ac324ba6fa2da589981ea79f1620a838f88e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0f6c66a41e929b462684eb00c4476f1d4532efeb38b2693a590667d94be04270)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerPort: Intranet port of created DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicPort: Internet port of created DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d929a5b0ae44753c945184c2389f1b36ffa48137b2e03ec459faae48672cdca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9d61c299aabc3e52894250d64a27d2f7e3728c05b12b2dc02c2a04bb6a2e86a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24f2b927b12e1eef4eddd2b8b2df2597b8e4ac8758eaae261f8f404adae1b33d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e437471c1ddaa68623e568f9377696f1fcb00e8ffe7abceda66755e96e466306)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engineVersion: Database instance version of the relative engine type. Support:
        Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
        Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
        Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
        Valid values when you set the Engine parameter to MariaDB: 10.3
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75ce80cd7009985f6a3fc2bc0fa4fb5db46c36c91d72188b2c31a826efe457d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fdde95cb77c8be04250acbb5c88a738a53591553eb9f51a9b9d15c13f78cfd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allocatePublicConnection"))

    @allocate_public_connection.setter
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54e54452d485b9be0f2a0f9f97dea2c9a7fd4cedfed2e65afdbbbbe604916b03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property
    @jsii.member(jsii_name="archiveBackupKeepCount")
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "archiveBackupKeepCount"))

    @archive_backup_keep_count.setter
    def archive_backup_keep_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3be158695b2d750f61a3bf87268c9a2d13e3d831d81f999ad9dd43e2e49cc130)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "archiveBackupKeepCount", value)

    @builtins.property
    @jsii.member(jsii_name="archiveBackupKeepPolicy")
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "archiveBackupKeepPolicy"))

    @archive_backup_keep_policy.setter
    def archive_backup_keep_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29506d99f6c886aea79faffae9bf8d1a2caa4b00c79f26c98f578323469be8b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "archiveBackupKeepPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="archiveBackupRetentionPeriod")
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "archiveBackupRetentionPeriod"))

    @archive_backup_retention_period.setter
    def archive_backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad11904cc7a6ccdac88abecfd411c4d6aaee2f588d237d2a42bb33e938458417)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "archiveBackupRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2e0428fdddc5672190bf9bf903d918784defd809be71deba4ad61b46a03f8e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="backUpCategory")
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backUpCategory"))

    @back_up_category.setter
    def back_up_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fba2952495cdaf88abc342ded5b8d465132d173f69ec3c8a29ad2dcd62dd6ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backUpCategory", value)

    @builtins.property
    @jsii.member(jsii_name="backupPolicyMode")
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupPolicyMode: Backup type,
        DataBackupPolicy: data backup
        LogBackupPolicy: log backup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupPolicyMode"))

    @backup_policy_mode.setter
    def backup_policy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e63cbb6f138fd1be1cdd15abed294662ce03bfbb2caa2e21670050614bc30d7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupPolicyMode", value)

    @builtins.property
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupRetentionPeriod"))

    @backup_retention_period.setter
    def backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92c290a51e59af9dbb043706beea4a39b4226914bb9bac8edcda0ba790463b90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aeec62629182866ccfd029ed1730e9bb0cb315fa847e9f15899669ee60591ae6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="compressType")
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "compressType"))

    @compress_type.setter
    def compress_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4b89d9d591152d908da3d2d164cac0bd521fce6d582241ca780551b509fac91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compressType", value)

    @builtins.property
    @jsii.member(jsii_name="connectionMode")
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionMode"))

    @connection_mode.setter
    def connection_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__590990aa7bdeea7d617862d5b69af04f7339baf7062bf58de456df138030d2e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionMode", value)

    @builtins.property
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43ecb57f76eef84dc9297e3541ab6dfb88885c4a1b512788301deaef31016532)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionStringType"))

    @connection_string_type.setter
    def connection_string_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6eab49bbc288884423c6f0770babc0c50cf5f7c1dd837bbfb74c7363ad015ada)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionStringType", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2de63f684f02dd7526110178b66b6ed425104f62130f0d916db6808bf9a3daf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceNetType")
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceNetType"))

    @db_instance_net_type.setter
    def db_instance_net_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c195b3b25970e24e3d39dcceb79d03f37f09e648183eaf51c9c80955324acc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceNetType", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__119fe35ed60660dc193985022507cb29c466751c95641b696e5856bf767a8cbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property
    @jsii.member(jsii_name="dbIsIgnoreCase")
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbIsIgnoreCase"))

    @db_is_ignore_case.setter
    def db_is_ignore_case(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__023b5842d134a08e9066151c4070800999e915f639630a85e1abf98ed5bee320)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbIsIgnoreCase", value)

    @builtins.property
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.DBMappingsProperty"]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.DBMappingsProperty"]]]], jsii.get(self, "dbMappings"))

    @db_mappings.setter
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.DBMappingsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70e218db99aca343e60534d143e73c08e3f178d23d0a8ab480fb3a2bf562bc1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbMappings", value)

    @builtins.property
    @jsii.member(jsii_name="dbParamGroupId")
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbParamGroupId"))

    @db_param_group_id.setter
    def db_param_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__866a351fe0408163c81f7d0c304683298d64fdfac6f0fc462bee2b22c87bbbc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbParamGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="dbTimeZone")
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbTimeZone"))

    @db_time_zone.setter
    def db_time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b2d8c0d8907722ea1418f7142a60d8a48a481788f9adeecc15b9737a1a1ba6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbTimeZone", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c95a8a446aa7012025c95622f0624a98a83c063c34aa3c7c37d48d917299d7eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="enableBackupLog")
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableBackupLog: Specifies whether to enable the log backup function. Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableBackupLog"))

    @enable_backup_log.setter
    def enable_backup_log(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6a9b3739e45bff77cefb1ee067e52647ce66c95c269b2c2fc998124862a8694)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableBackupLog", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1fa7cc48f6e92967d12d46ff690a5c755fe6d5e4eaa71875a72d83813fc0c9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionKey", value)

    @builtins.property
    @jsii.member(jsii_name="highSpaceUsageProtection")
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
        instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "highSpaceUsageProtection"))

    @high_space_usage_protection.setter
    def high_space_usage_protection(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fa183fae363951104b1a1b5065537a89a8a95c484e8b44ae30cfe88d6304679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "highSpaceUsageProtection", value)

    @builtins.property
    @jsii.member(jsii_name="localLogRetentionHours")
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "localLogRetentionHours"))

    @local_log_retention_hours.setter
    def local_log_retention_hours(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19aeb8eb23e42e47f28cee2fbf9a843b7492152f606a87b19f66281144a8853f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localLogRetentionHours", value)

    @builtins.property
    @jsii.member(jsii_name="localLogRetentionSpace")
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "localLogRetentionSpace"))

    @local_log_retention_space.setter
    def local_log_retention_space(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4691ebdbcc0484d9b82669af2d3320bed6af8d064f98413d2633b48fb12f9f57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localLogRetentionSpace", value)

    @builtins.property
    @jsii.member(jsii_name="logBackupFrequency")
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupFrequency: The frequency at which to back up logs. Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logBackupFrequency"))

    @log_backup_frequency.setter
    def log_backup_frequency(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3784c81d0cfb024513ec7722ecd256a12085f99bb5baeae6be1566c32c5ae1e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logBackupFrequency", value)

    @builtins.property
    @jsii.member(jsii_name="logBackupLocalRetentionNumber")
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
        Default value: 60. Valid values: 6 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logBackupLocalRetentionNumber"))

    @log_backup_local_retention_number.setter
    def log_backup_local_retention_number(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3bdb083293f47a7ce0dc17e54385d0984db1e756818a144073e29a4e8c0f662)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logBackupLocalRetentionNumber", value)

    @builtins.property
    @jsii.member(jsii_name="logBackupRetentionPeriod")
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logBackupRetentionPeriod"))

    @log_backup_retention_period.setter
    def log_backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe85aea843d6c66393dbdbc9e43a180ff40877e67472d719f4b882750b82361c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logBackupRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maintainTime"))

    @maintain_time.setter
    def maintain_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deb79e74e12a93ee395805c6b18ff291fb474e85d40919388050c5b46a7287bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maintainTime", value)

    @builtins.property
    @jsii.member(jsii_name="masterUsername")
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUsername"))

    @master_username.setter
    def master_username(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8027b15e902cc097794265448577f832784ab7584b3dd1f2095414ce2196331)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUsername", value)

    @builtins.property
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUserPassword"))

    @master_user_password.setter
    def master_user_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__678490f721f7115c385d05aafe23bcb7a6c8e2f046455e7f96375c4dad2160b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUserPassword", value)

    @builtins.property
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUserType"))

    @master_user_type.setter
    def master_user_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95870197ae35dc05339f17aed60cc90b54344d37ff93a4274903117220b2d5ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUserType", value)

    @builtins.property
    @jsii.member(jsii_name="multiAz")
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiAz"))

    @multi_az.setter
    def multi_az(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed943f7f08d3f2dca522e6185d232fa421c798c10e6382641be1c347a47b2922)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAz", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The charge type of created instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9da35212d4325fb4f15fbdfd5407df524292162841a687a34821dcd90ad125f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b396ac2ac43706ac521b70b399ce5859a93484bf99bd2f925b37db1354bdf6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d0e30099778e11f48afbed9e4ae1d21f28c40cebf5fd239589383811df832aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodType", value)

    @builtins.property
    @jsii.member(jsii_name="port")
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68d2f72aa118b99d406435b9f77f22ee8b424e96bc1eb601f49ede35db3ab38b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "port", value)

    @builtins.property
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preferredBackupPeriod"))

    @preferred_backup_period.setter
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8792830afd998b340cba2bbd6882471b85d242543b604d50b57a24ec47620191)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preferredBackupTime"))

    @preferred_backup_time.setter
    def preferred_backup_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f520734209a05aa97fa5e803ac8d2d1089875cf0f0164d50fe21feb5b3b5f20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8758d03b331a66fe01515f99299eb44f7d9c591ac0f93fcc90df77e420bc74a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddress", value)

    @builtins.property
    @jsii.member(jsii_name="releasedKeepPolicy")
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "releasedKeepPolicy"))

    @released_keep_policy.setter
    def released_keep_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcdfdd92b3030eab520b261e09e4ec59bacc6693aac8736958dc2bfdbeed3ecf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "releasedKeepPolicy", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__9f2e6805f04416d2f809757efd07e1349954776d6bdeeba87b8184644c691388)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="roleArn")
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "roleArn"))

    @role_arn.setter
    def role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba1da2547288fe3dfc5707c1796bb635d4faf66bd893108420d2d2621838f667)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roleArn", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad73206278bd1b79c7bb37549852b0b5edb864e83725f29c9ac3f59e1c499965)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serverlessConfig")
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.ServerlessConfigProperty"]]:
        '''
        :Property: serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.ServerlessConfigProperty"]], jsii.get(self, "serverlessConfig"))

    @serverless_config.setter
    def serverless_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.ServerlessConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52919d8de3d62af04ef5ce6302fac64b294379b7564ceee163776c201fcd28a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverlessConfig", value)

    @builtins.property
    @jsii.member(jsii_name="slaveZoneIds")
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "slaveZoneIds"))

    @slave_zone_ids.setter
    def slave_zone_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12350f29a203f8166e97b1b477862429d23bff4352ae7d528a2aed2fa74b2912)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slaveZoneIds", value)

    @builtins.property
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sqlCollectorStatus"))

    @sql_collector_status.setter
    def sql_collector_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f43c8de38c2256957c14ce175118adad04cdbec6f0abd358d32ddeff0391ce31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sslSetting"))

    @ssl_setting.setter
    def ssl_setting(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83017dff1414b908bd460fedc6a0201ac8ba46a1093a37710837be34ae0b8fa9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sslSetting", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a627dc4808326e70c887b1967eaf2b17e500488cd9c91550775efc562fa821b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="targetDedicatedHostIdForLog")
    def target_dedicated_host_id_for_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetDedicatedHostIdForLog"))

    @target_dedicated_host_id_for_log.setter
    def target_dedicated_host_id_for_log(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66f6e55e171922a152bcb84e227ad794999c0ff0a5576f8650be48d77f95f072)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetDedicatedHostIdForLog", value)

    @builtins.property
    @jsii.member(jsii_name="targetDedicatedHostIdForMaster")
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetDedicatedHostIdForMaster"))

    @target_dedicated_host_id_for_master.setter
    def target_dedicated_host_id_for_master(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84dbcafbc37d361975e259517caee367f88f7f7433c111563f4d913a99ae8042)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetDedicatedHostIdForMaster", value)

    @builtins.property
    @jsii.member(jsii_name="targetDedicatedHostIdForSlave")
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetDedicatedHostIdForSlave"))

    @target_dedicated_host_id_for_slave.setter
    def target_dedicated_host_id_for_slave(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a43cadeb65141cc3990f808d657ef96e61a6d00eadebf76f758d455490a7bbc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetDedicatedHostIdForSlave", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a75236f3c7090c4e44fed6b2cc8faaf51ba9442a384a800746b3abafa0881334)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2e0e9736d3b5fa91756aea512a805961df5575086ffa76f116b74d725eafe90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__401c9a8b13a3c3c4e9e6087f87622a516ef2973612f6e259cbe160cd450b7428)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fc9acca6b07a9b8b2e1647e1b97fbdfab111043f67e569a1da7ca5a6c360e302)
                check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
                check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
                check_type(argname="argument db_description", value=db_description, expected_type=type_hints["db_description"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            '''
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def db_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            '''
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def db_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            '''
            result = self._values.get("db_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DBMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosDBInstance.ServerlessConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "max_capacity": "maxCapacity",
            "min_capacity": "minCapacity",
            "auto_pause": "autoPause",
            "switch_force": "switchForce",
        },
    )
    class ServerlessConfigProperty:
        def __init__(
            self,
            *,
            max_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            min_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            auto_pause: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            switch_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param max_capacity: 
            :param min_capacity: 
            :param auto_pause: 
            :param switch_force: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__df1a7d2ad5966ea0225073a64037c95a37f03f97f5eef6762b9b35a068ba4c18)
                check_type(argname="argument max_capacity", value=max_capacity, expected_type=type_hints["max_capacity"])
                check_type(argname="argument min_capacity", value=min_capacity, expected_type=type_hints["min_capacity"])
                check_type(argname="argument auto_pause", value=auto_pause, expected_type=type_hints["auto_pause"])
                check_type(argname="argument switch_force", value=switch_force, expected_type=type_hints["switch_force"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "max_capacity": max_capacity,
                "min_capacity": min_capacity,
            }
            if auto_pause is not None:
                self._values["auto_pause"] = auto_pause
            if switch_force is not None:
                self._values["switch_force"] = switch_force

        @builtins.property
        def max_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: maxCapacity: The maximum value of the automatic scaling range of an instance RCU (RDS Capacity Unit). Value: 0.5-8.
            '''
            result = self._values.get("max_capacity")
            assert result is not None, "Required property 'max_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def min_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: minCapacity: The minimum value of the automatic scaling range of an instance RCU (RDS Capacity Unit). Value: 0.5-8.
            '''
            result = self._values.get("min_capacity")
            assert result is not None, "Required property 'min_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def auto_pause(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoPause: Whether to enable intelligent pause and start of serverless instances. Value:
            true: enabled.
            false: not enabled (default).
            '''
            result = self._values.get("auto_pause")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def switch_force(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            switchForce: Whether to enable mandatory elastic scaling of serverless instances. Value:
            true: enabled.
            false: not enabled (default).
            '''
            result = self._values.get("switch_force")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServerlessConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDBInstanceClone(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceClone",
):
    '''A ROS template type:  ``ALIYUN::RDS::DBInstanceClone``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstanceCloneProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceClone``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ed37c6a1b0e42a1aae5328b1763c9eb1cf1a63ba339844cf6ef7350f8983793)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3aae60dc7fe3eb51dbb1597000a516b7844f3b4cf374c3c3b9e027e75edba702)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerPort: Intranet port of created DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicPort: Internet port of created DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))

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
        :Property: dbInstanceId: Instance id
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48b9e748f467c76b20152151a3e6d3f7bcfbdb7d80b545a6d6e64004afb59a10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fda3af490e3dec75a1ed130a0aa23bd7af03e503617f0f17e66aa12175cdef15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: payType: The charge type of created instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__babe3cac0de9e36441c7943e19f4b5fe90f50d005188c23dc19558f59b08c456)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allocatePublicConnection"))

    @allocate_public_connection.setter
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__020843c13e0796afff19aac6e216cd8c2c7cf9c8be9d70e61335aea014c75c57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property
    @jsii.member(jsii_name="backupId")
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupId: The ID of the backup set that you want to use.
        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupId"))

    @backup_id.setter
    def backup_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7afb0fe0d8e0a8619d01383bcb753bbf0bac5af503ab339c85b5b8da23745813)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupId", value)

    @builtins.property
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupRetentionPeriod"))

    @backup_retention_period.setter
    def backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6585a78d17c93f50224fe664ef76740f9f8a975c03cc29e3965cd1ea617b75fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="backupType")
    def backup_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupType: The type of backup used by the new instance. Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupType"))

    @backup_type.setter
    def backup_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__204ec47e79d080920190b399c9318f657ae32b13244d3f46c20a15f0a22fd952)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupType", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1911459ba9d1b52abcfe57f25b4283c8d1280aee8a1a7c53a50d5bbed238601d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf9c08ccb46fe9204470d7c98ee09de5196b25e4f8a155a63cf54badb7aec4d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionStringType"))

    @connection_string_type.setter
    def connection_string_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd6695a3adb5cd20a190f4974e49d777bb07e77845be3c5a39e31f2e69b77b96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionStringType", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5bbccc60dbdf2cbca63b8cf75cb39adad24f4779347108591f4948e6472c573)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa85fa0a996c0b4815bb869bc26c59d56db44911deb1fcbe2a7ed10ebbc4151d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83b7572d05b2e5b58b3b45548594436cd85bebfccb43840ff221a5b0611040d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97429888eecd224a8be0e0f235809d223a4ca9842488b5371d8470602b79d4e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]], jsii.get(self, "dbMappings"))

    @db_mappings.setter
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.DBMappingsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c170c6b3c77e51c9b35ac80d8ddf1a4930ddaea3e04728ef1b4e7ebdd9456683)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbMappings", value)

    @builtins.property
    @jsii.member(jsii_name="dbNames")
    def db_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbNames: The names of the databases that you want to create on the new instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbNames"))

    @db_names.setter
    def db_names(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4b8c2a8afed560220bf90c8afc0fe20c1702ed87958355784a1d7afc3192e28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNames", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20af97682666a98a77f557556a649efb5b47a4d25bceae28f2c690be11523622)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceNetworkType")
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceNetworkType: The network type of the new instance. Valid values:

        - VPC
        - Classic
        The default value is the network type of the original instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceNetworkType"))

    @instance_network_type.setter
    def instance_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c6878afc604ae1c39bac701bde8e6a090afd24332dbd3aea77866df4b867e51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maintainTime"))

    @maintain_time.setter
    def maintain_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2636632f57c008ba37af91ef20486b3c7feb71b18643b2cf934144f5ea2ed752)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maintainTime", value)

    @builtins.property
    @jsii.member(jsii_name="masterUsername")
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUsername"))

    @master_username.setter
    def master_username(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bbcf618ac5aab986393173d1675def8ada8892d0411ebe7ab7f5b51960e4997)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUsername", value)

    @builtins.property
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUserPassword"))

    @master_user_password.setter
    def master_user_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fae32d582583360d5e56c5a34d931abe2e1d3e27cd184f51cd95789c1bc0f6f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUserPassword", value)

    @builtins.property
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUserType"))

    @master_user_type.setter
    def master_user_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f931a8c4bfc1410eb688f5c1bcf8f38e5820fa3a85024004692bdefc16acbfa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUserType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__061b15829a4486cd8ac9abd4dd48dd38ecc2ad3e8ef140ca8daafb448c767f27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd15767c594e8e3eaae0d944d46e36b965ce8bf1c1ad21e8585a38bd1202f761)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodType", value)

    @builtins.property
    @jsii.member(jsii_name="port")
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef08ac501de7b5750a695ebc55822c8e11e58cc50440c19abf755f17342f02ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "port", value)

    @builtins.property
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preferredBackupPeriod"))

    @preferred_backup_period.setter
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b67c27212ffd54ae6eee6d4c1275196524a229b5b8893e5dcf524d38ca946c3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preferredBackupTime"))

    @preferred_backup_time.setter
    def preferred_backup_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f02b81a8e84087377a7747e424464bf45669853ae3e2e77e4847b2b2e104b90b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d5eaeed3915edf6f0eac885f7a11d1e0711b0a973cba1bc17be4544a9f2636d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddress", value)

    @builtins.property
    @jsii.member(jsii_name="restoreTable")
    def restore_table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restoreTable: Specifies whether to restore specific databases and tables.
        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restoreTable"))

    @restore_table.setter
    def restore_table(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5901f2536cb3be314c73cb8c451f0788cc956a45b67be80e5382709f2a146cb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreTable", value)

    @builtins.property
    @jsii.member(jsii_name="restoreTime")
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restoreTime: The point in time to which you want to restore the data of the original instance.
        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restoreTime"))

    @restore_time.setter
    def restore_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ff8ee4a83819e5a4958be3160e9d73cde834a85782c30b33abd85434b1a274f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreTime", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2408cac3872fd7b8327fc913c64d78372ce04a00488c81af1408e781386940b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d788e8e7f0566b7b6304a496208b47bd2e4a0cea0dc0e25f4359ff65b6627161)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="slaveZoneIds")
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "slaveZoneIds"))

    @slave_zone_ids.setter
    def slave_zone_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffb7dc9587ae3c79b72d327acb87dc24f79d8b2d95c620c9edca0ca8b6d001e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slaveZoneIds", value)

    @builtins.property
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sqlCollectorStatus"))

    @sql_collector_status.setter
    def sql_collector_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__914ebff626803557b107d2b17e824c3046ca2d22749ebb946e5518a78f23c608)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sslSetting"))

    @ssl_setting.setter
    def ssl_setting(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__455b83abf3c40f8379d7c7a110ba000d264121622e46b8535986ae9a3350f452)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sslSetting", value)

    @builtins.property
    @jsii.member(jsii_name="tableMeta")
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]]:
        '''
        :Property: tableMeta: The information about the databases and tables that you want to restore.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]], jsii.get(self, "tableMeta"))

    @table_meta.setter
    def table_meta(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.TableMetaProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd93b774c02c264787c3f43ee02836de2e2ba874674644feafc9d94d6e88fb47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tableMeta", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be74b33578aa39143092cbc5d3cb0561d98866ce0cd91f652b170b39652c5bcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="timeoutInMinutes")
    def timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeoutInMinutes"))

    @timeout_in_minutes.setter
    def timeout_in_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65daca22dc42c16baecb296222864113ffef17fb757f9362bf846cdb4dc087d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeoutInMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65ae5be5985a7123decff5200722accd918639e614c42dc9c574857511b855ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25fd624980a2496376a0cefe18d7fee42b28eceab0e46178d310d206921302ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb916552b40438258a6309e5fbec8173b1d25e59ee64821ee8c3d91ef48177da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d954dd02caa1a9ede46b6b0b692ef6d88f3464f96d948b29554360f3cf2e5375)
                check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
                check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
                check_type(argname="argument db_description", value=db_description, expected_type=type_hints["db_description"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            '''
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def db_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            '''
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def db_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            '''
            result = self._values.get("db_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBInstanceClone.TablesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param new_name: 
            :param tables: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d8e0527ba5f0aaebd662d955519a94d10cb834144c1d69f83878d7d618e0514b)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument new_name", value=new_name, expected_type=type_hints["new_name"])
                check_type(argname="argument tables", value=tables, expected_type=type_hints["tables"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: Name of database you want to restore.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newName: New database name in clone instance.
            '''
            result = self._values.get("new_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tables(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.TablesProperty"]]]]:
            '''
            :Property: tables: The table information that you want to restore.
            '''
            result = self._values.get("tables")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceClone.TablesProperty"]]]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: Restore type, db
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param new_name: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7b1fbb76d604b48a4b7ef0dd6e4465c2a887c3d638fc62afe90b9a91b08bf34a)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument new_name", value=new_name, expected_type=type_hints["new_name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if new_name is not None:
                self._values["new_name"] = new_name
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: Name of table you want to restore
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newName: New name of the table in db
            '''
            result = self._values.get("new_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: Restore type, table
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceClone.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        db_names: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_table: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        table_meta: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceClone.TableMetaProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb8992ded3aff4afabe9ef132e129c8a86b9333845d4f17728fa23ed194febab)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument allocate_public_connection", value=allocate_public_connection, expected_type=type_hints["allocate_public_connection"])
            check_type(argname="argument backup_id", value=backup_id, expected_type=type_hints["backup_id"])
            check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument connection_string_type", value=connection_string_type, expected_type=type_hints["connection_string_type"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument db_mappings", value=db_mappings, expected_type=type_hints["db_mappings"])
            check_type(argname="argument db_names", value=db_names, expected_type=type_hints["db_names"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument instance_network_type", value=instance_network_type, expected_type=type_hints["instance_network_type"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument master_username", value=master_username, expected_type=type_hints["master_username"])
            check_type(argname="argument master_user_password", value=master_user_password, expected_type=type_hints["master_user_password"])
            check_type(argname="argument master_user_type", value=master_user_type, expected_type=type_hints["master_user_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
            check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument restore_table", value=restore_table, expected_type=type_hints["restore_table"])
            check_type(argname="argument restore_time", value=restore_time, expected_type=type_hints["restore_time"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument slave_zone_ids", value=slave_zone_ids, expected_type=type_hints["slave_zone_ids"])
            check_type(argname="argument sql_collector_status", value=sql_collector_status, expected_type=type_hints["sql_collector_status"])
            check_type(argname="argument ssl_setting", value=ssl_setting, expected_type=type_hints["ssl_setting"])
            check_type(argname="argument table_meta", value=table_meta, expected_type=type_hints["table_meta"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument timeout_in_minutes", value=timeout_in_minutes, expected_type=type_hints["timeout_in_minutes"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: Instance id
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: payType: The charge type of created instance.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupId: The ID of the backup set that you want to use.
        You can call the DescribeBackups operation to query the most recent backup set list.
        Note You must specify at least one of the BackupId and RestoreTime parameters.
        '''
        result = self._values.get("backup_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupType: The type of backup used by the new instance. Valid values:

        - FullBackup: full backup
        - IncrementalBackup: incremental backup
        '''
        result = self._values.get("backup_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceClone.DBMappingsProperty]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceClone.DBMappingsProperty]]]], result)

    @builtins.property
    def db_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbNames: The names of the databases that you want to create on the new instance.
        '''
        result = self._values.get("db_names")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceNetworkType: The network type of the new instance. Valid values:

        - VPC
        - Classic
        The default value is the network type of the original instance.
        '''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restoreTable: Specifies whether to restore specific databases and tables.
        The value 1 specifies to restore specific databases and tables.
        If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        '''
        result = self._values.get("restore_table")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restoreTime: The point in time to which you want to restore the data of the original instance.
        The point in time must fall within the specified log backup retention period.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        The time must be in UTC.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def table_meta(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceClone.TableMetaProperty]]]]:
        '''
        :Property: tableMeta: The information about the databases and tables that you want to restore.
        '''
        result = self._values.get("table_meta")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceClone.TableMetaProperty]]]], result)

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
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        '''
        result = self._values.get("timeout_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceCloneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstanceParameterGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup",
):
    '''A ROS template type:  ``ALIYUN::RDS::DBInstanceParameterGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstanceParameterGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb3db093eee0e40eb0fc245cbb2177f145964644f0f064a6827d6707876847b6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a4d2e51ea0067c14b6d6f4bebed529a3121f9371c466e5c2b3d25142c3b79d1c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
        :Property: dbInstanceId: Database InstanceId to update properties.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27f8ded0c03641162914ef7eac3f8effb7c81042edd39bfa7d737c24d061aa28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccc9d00c1cb3be2b3d662f7ce7584aad4b531a98276a654f8dc562056448f479)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]]:
        '''
        :Property: parameters: Parameters to update for selected database instance.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstanceParameterGroup.ParametersProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dadecfaa839e38634bf945b5b9e0b8a65dc83e54709d155234736c6fe60cb9fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="forcerestart")
    def forcerestart(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: forcerestart: whether restart database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "forcerestart"))

    @forcerestart.setter
    def forcerestart(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6834ec709d655c024f33980e441d14bf15b93623a2098cff941256f0b94248e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__66239e854a9bcdb742fa614ecadeee5d84c5961982b974a50126c22b52fde1da)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: Key to update for instance property.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: Value to update for instance property.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceParameterGroup.ParametersProperty, typing.Dict[builtins.str, typing.Any]]]]],
        forcerestart: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceParameterGroup``.

        :param db_instance_id: 
        :param parameters: 
        :param forcerestart: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c551bc387d21e59a41fadbe3db5ab7b10e6113521ecd8032757836f89ab19ee1)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument forcerestart", value=forcerestart, expected_type=type_hints["forcerestart"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "parameters": parameters,
        }
        if forcerestart is not None:
            self._values["forcerestart"] = forcerestart

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: Database InstanceId to update properties.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceParameterGroup.ParametersProperty]]]:
        '''
        :Property: parameters: Parameters to update for selected database instance.
        '''
        result = self._values.get("parameters")
        assert result is not None, "Required property 'parameters' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceParameterGroup.ParametersProperty]]], result)

    @builtins.property
    def forcerestart(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: forcerestart: whether restart database instance.
        '''
        result = self._values.get("forcerestart")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        "serverless_config": "serverlessConfig",
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
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ip_list: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        back_up_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compress_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        db_param_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_backup_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        high_space_usage_protection: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        local_log_retention_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        released_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        :param serverless_config: 
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9a785fa9e02d3fc1a956a7849219ebcf7b8a6470a59d21edd34171b74fbfd57)
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument allocate_public_connection", value=allocate_public_connection, expected_type=type_hints["allocate_public_connection"])
            check_type(argname="argument archive_backup_keep_count", value=archive_backup_keep_count, expected_type=type_hints["archive_backup_keep_count"])
            check_type(argname="argument archive_backup_keep_policy", value=archive_backup_keep_policy, expected_type=type_hints["archive_backup_keep_policy"])
            check_type(argname="argument archive_backup_retention_period", value=archive_backup_retention_period, expected_type=type_hints["archive_backup_retention_period"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument back_up_category", value=back_up_category, expected_type=type_hints["back_up_category"])
            check_type(argname="argument backup_policy_mode", value=backup_policy_mode, expected_type=type_hints["backup_policy_mode"])
            check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument compress_type", value=compress_type, expected_type=type_hints["compress_type"])
            check_type(argname="argument connection_mode", value=connection_mode, expected_type=type_hints["connection_mode"])
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument connection_string_type", value=connection_string_type, expected_type=type_hints["connection_string_type"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_net_type", value=db_instance_net_type, expected_type=type_hints["db_instance_net_type"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument db_is_ignore_case", value=db_is_ignore_case, expected_type=type_hints["db_is_ignore_case"])
            check_type(argname="argument db_mappings", value=db_mappings, expected_type=type_hints["db_mappings"])
            check_type(argname="argument db_param_group_id", value=db_param_group_id, expected_type=type_hints["db_param_group_id"])
            check_type(argname="argument db_time_zone", value=db_time_zone, expected_type=type_hints["db_time_zone"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument enable_backup_log", value=enable_backup_log, expected_type=type_hints["enable_backup_log"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument high_space_usage_protection", value=high_space_usage_protection, expected_type=type_hints["high_space_usage_protection"])
            check_type(argname="argument local_log_retention_hours", value=local_log_retention_hours, expected_type=type_hints["local_log_retention_hours"])
            check_type(argname="argument local_log_retention_space", value=local_log_retention_space, expected_type=type_hints["local_log_retention_space"])
            check_type(argname="argument log_backup_frequency", value=log_backup_frequency, expected_type=type_hints["log_backup_frequency"])
            check_type(argname="argument log_backup_local_retention_number", value=log_backup_local_retention_number, expected_type=type_hints["log_backup_local_retention_number"])
            check_type(argname="argument log_backup_retention_period", value=log_backup_retention_period, expected_type=type_hints["log_backup_retention_period"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument master_username", value=master_username, expected_type=type_hints["master_username"])
            check_type(argname="argument master_user_password", value=master_user_password, expected_type=type_hints["master_user_password"])
            check_type(argname="argument master_user_type", value=master_user_type, expected_type=type_hints["master_user_type"])
            check_type(argname="argument multi_az", value=multi_az, expected_type=type_hints["multi_az"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
            check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument released_keep_policy", value=released_keep_policy, expected_type=type_hints["released_keep_policy"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument serverless_config", value=serverless_config, expected_type=type_hints["serverless_config"])
            check_type(argname="argument slave_zone_ids", value=slave_zone_ids, expected_type=type_hints["slave_zone_ids"])
            check_type(argname="argument sql_collector_status", value=sql_collector_status, expected_type=type_hints["sql_collector_status"])
            check_type(argname="argument ssl_setting", value=ssl_setting, expected_type=type_hints["ssl_setting"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument target_dedicated_host_id_for_log", value=target_dedicated_host_id_for_log, expected_type=type_hints["target_dedicated_host_id_for_log"])
            check_type(argname="argument target_dedicated_host_id_for_master", value=target_dedicated_host_id_for_master, expected_type=type_hints["target_dedicated_host_id_for_master"])
            check_type(argname="argument target_dedicated_host_id_for_slave", value=target_dedicated_host_id_for_slave, expected_type=type_hints["target_dedicated_host_id_for_slave"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if serverless_config is not None:
            self._values["serverless_config"] = serverless_config
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
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engineVersion: Database instance version of the relative engine type. Support:
        Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
        Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
        Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
        Valid values when you set the Engine parameter to MariaDB: 10.3
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        '''
        result = self._values.get("security_ip_list")
        assert result is not None, "Required property 'security_ip_list' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        result = self._values.get("archive_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        result = self._values.get("back_up_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupPolicyMode: Backup type,
        DataBackupPolicy: data backup
        LogBackupPolicy: log backup
        '''
        result = self._values.get("backup_policy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        '''
        result = self._values.get("db_instance_net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        result = self._values.get("db_is_ignore_case")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.DBMappingsProperty]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.DBMappingsProperty]]]], result)

    @builtins.property
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        '''
        result = self._values.get("db_param_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableBackupLog: Specifies whether to enable the log backup function. Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("enable_backup_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
        instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("high_space_usage_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_hours")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupFrequency: The frequency at which to back up logs. Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        result = self._values.get("log_backup_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
        Default value: 60. Valid values: 6 to 100.
        '''
        result = self._values.get("log_backup_local_retention_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        result = self._values.get("log_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        '''
        result = self._values.get("multi_az")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The charge type of created instance.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        result = self._values.get("released_keep_policy")
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
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.ServerlessConfigProperty]]:
        '''
        :Property: serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
        '''
        result = self._values.get("serverless_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.ServerlessConfigProperty]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_log")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_master")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_slave")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstanceSecurityIps(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDBInstanceSecurityIps",
):
    '''A ROS template type:  ``ALIYUN::RDS::DBInstanceSecurityIps``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstanceSecurityIpsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a936e94bb70594a42e15aaab49da9d55e2583ec72c496c25a1cbc04630b6385b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1b228232e7926dae6ca03ffb704b84939c85ecdf02ae0e9e799162479507ce22)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIps: The security ips of selected database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIps"))

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
        :Property: dbInstanceId: Database instance id to update security ips.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0593e37e4cfb89aea06ef1081660afadcaae839e078db5f44c8d96637156d99b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceIpArrayAttribute")
    def db_instance_ip_array_attribute(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceIpArrayAttribute: Security ips to add or remove.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceIpArrayAttribute"))

    @db_instance_ip_array_attribute.setter
    def db_instance_ip_array_attribute(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e6afc545d67abd566aa93eab9e1cc069e25eca120da413c0d7688b4de088471)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceIpArrayAttribute", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b858d8478bbb779d82750d3f3f9cd4645e9513ca51b54b28f8de76450b54782)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceIpArrayName")
    def db_instance_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceIpArrayName"))

    @db_instance_ip_array_name.setter
    def db_instance_ip_array_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__317f8bee90eda295591448ad0a15d1806df3a370eb388d43305a0b005e698385)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_ip_array_attribute: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::DBInstanceSecurityIps``.

        :param db_instance_id: 
        :param db_instance_ip_array_attribute: 
        :param db_instance_ip_array_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bb494f5af8a7485f1b917248d03cad729f0df7123e400e42333a37f295624fd)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_ip_array_attribute", value=db_instance_ip_array_attribute, expected_type=type_hints["db_instance_ip_array_attribute"])
            check_type(argname="argument db_instance_ip_array_name", value=db_instance_ip_array_name, expected_type=type_hints["db_instance_ip_array_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "db_instance_ip_array_attribute": db_instance_ip_array_attribute,
        }
        if db_instance_ip_array_name is not None:
            self._values["db_instance_ip_array_name"] = db_instance_ip_array_name

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: Database instance id to update security ips.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_ip_array_attribute(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceIpArrayAttribute: Security ips to add or remove.
        '''
        result = self._values.get("db_instance_ip_array_attribute")
        assert result is not None, "Required property 'db_instance_ip_array_attribute' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        '''
        result = self._values.get("db_instance_ip_array_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceSecurityIpsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDatabase(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosDatabase",
):
    '''A ROS template type:  ``ALIYUN::RDS::Database``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatabaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::Database``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44c8fed800a1c3abd8d2b177d78b72f11e44d78ec99b606eb16588c321202073)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b2d8af04270f5d2bf8d10aee81de765d2b33c598313cde4cbc67c6e1484e07e4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBName: The name of the database.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="characterSetName")
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "characterSetName"))

    @character_set_name.setter
    def character_set_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b6c32e4bb66b8bede2795062da7dd90c8bedc39a74a61f84909ac6e566c53f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "characterSetName", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20796ac3ebe5f718e417fc5e3524c8e08c272842c04bb63bf126b462a7ed55f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a158e3de6483b67327c529a7593452b7b316485537e82b5aa2900da84a6b6030)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21e98e2679f0397621750d2fbd9bb2bc46c9c3e9cfce11261e6793125e3aa48d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbDescription")
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbDescription: The description of the database. The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbDescription"))

    @db_description.setter
    def db_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__daa63961e43f40041ffd2171ab3fc1e9e3568427b14adba03f27be25651a5c36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::Database``.

        :param character_set_name: 
        :param db_instance_id: 
        :param db_name: 
        :param db_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a377b5f971bcff9aa815fc115788b67065685ccb692706ca4e54cf256c95883)
            check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument db_description", value=db_description, expected_type=type_hints["db_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "character_set_name": character_set_name,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
        }
        if db_description is not None:
            self._values["db_description"] = db_description

    @builtins.property
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbDescription: The description of the database. The description must be 2 to 256 characters in length.
        The description must start with a letter and can contain letters, digits, underscores
        (_), and hyphens (-).
        Note The description cannot start with http:// or https://.
        '''
        result = self._values.get("db_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMigrateTask(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosMigrateTask",
):
    '''A ROS template type:  ``ALIYUN::RDS::MigrateTask``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMigrateTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::MigrateTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe477984dc2c2400030b9f889e5479e2cc7bfc6e61b145d8157c273e3cde483d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bf20ab9a52b3f36ce4639060cfdad11e729b5ac8edde2821c1d63a32c3dab919)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBName: The name of the database that you want to restore.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbName"))

    @builtins.property
    @jsii.member(jsii_name="attrMigrateTaskId")
    def attr_migrate_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MigrateTaskId: The ID of the migrate task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMigrateTaskId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backupMode")
    def backup_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        backupMode: The type of the migration task. Valid values:
        FULL: specifies that full backup files are used to restore data.
        UPDF: specifies that incremental backup files or log files are used to restore incremental data.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "backupMode"))

    @backup_mode.setter
    def backup_mode(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38ccfa53ec80c79a11b3dedd1f20451a0786441b35182ddc419726c9f0c4b118)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupMode", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57632e6e64d902b3ad4508fca85d9b240521c8a705a8404bc7d5c092b6d91ac5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbName: The name of the database that you want to restore.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__170f6c09af721398bbff53a6338558eab2072dfabe6161fbf9f59d7d3d388371)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd804927775035ba48822e544c7ad11329dc498749bba639d007fb4dc9f9ba30)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="isOnlineDb")
    def is_online_db(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: isOnlineDb: Specifies whether to bring the restored database online for user access. Note The value for SQL Server 2008 R2 is fixed to True.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "isOnlineDb"))

    @is_online_db.setter
    def is_online_db(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15719b3067b7efd64365eb0262a04c4b7fbc6c9f5583db4e36517f4dcfcab2cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isOnlineDb", value)

    @builtins.property
    @jsii.member(jsii_name="checkDbMode")
    def check_db_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        checkDbMode: The consistency check method of the database. Valid values:
        SyncExecuteDBCheck: synchronous database check
        AsyncExecuteDBCheck: asynchronous database check
        Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
        Note When IsOnlineDB is set to True, this value is valid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "checkDbMode"))

    @check_db_mode.setter
    def check_db_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a2f72aa5e54806266205c1d371a345c49951eda4bf702f8b927f82c0236877e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkDbMode", value)

    @builtins.property
    @jsii.member(jsii_name="ossObjectPositions")
    def oss_object_positions(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ossObjectPositions: The information of the backup file in the OSS bucket.
        The values consist of three parts that are separated by colons (:):
        The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
        The name of the OSS bucket: rdsmssqlsingapore.
        The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
        Note
        This parameter is optional for instances that run SQL Server 2008 R2.
        This parameter is required for instances that run a database engine later than SQL
        Server 2008 R2.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossObjectPositions"))

    @oss_object_positions.setter
    def oss_object_positions(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f4f1eaa4b58b99d044e62d3eaa5e3d422d06d6d8dc7d66c7e77e18c01f3fa52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossObjectPositions", value)

    @builtins.property
    @jsii.member(jsii_name="ossUrls")
    def oss_urls(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ossUrls: The shared URL of the backup file in the OSS bucket. The URL must be encoded.
        If you specify multiple URLs, separate them with vertical bars (|) and then encode
        them.
        Note This parameter must be entered for instances that run SQL Server 2008 R2.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossUrls"))

    @oss_urls.setter
    def oss_urls(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1810afcdbcf896d6c2959af102ae258fbbcb003a9dc4dcf91b513e96c46a92fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossUrls", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.RosMigrateTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_mode": "backupMode",
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
        "is_online_db": "isOnlineDb",
        "check_db_mode": "checkDbMode",
        "oss_object_positions": "ossObjectPositions",
        "oss_urls": "ossUrls",
    },
)
class RosMigrateTaskProps:
    def __init__(
        self,
        *,
        backup_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_online_db: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        check_db_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_object_positions: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_urls: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RDS::MigrateTask``.

        :param backup_mode: 
        :param db_instance_id: 
        :param db_name: 
        :param is_online_db: 
        :param check_db_mode: 
        :param oss_object_positions: 
        :param oss_urls: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dd063a61e496749dfc1be88e077bd69644d2ac755e7aa6ffb6b80ede3398bbd)
            check_type(argname="argument backup_mode", value=backup_mode, expected_type=type_hints["backup_mode"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument is_online_db", value=is_online_db, expected_type=type_hints["is_online_db"])
            check_type(argname="argument check_db_mode", value=check_db_mode, expected_type=type_hints["check_db_mode"])
            check_type(argname="argument oss_object_positions", value=oss_object_positions, expected_type=type_hints["oss_object_positions"])
            check_type(argname="argument oss_urls", value=oss_urls, expected_type=type_hints["oss_urls"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_mode": backup_mode,
            "db_instance_id": db_instance_id,
            "db_name": db_name,
            "is_online_db": is_online_db,
        }
        if check_db_mode is not None:
            self._values["check_db_mode"] = check_db_mode
        if oss_object_positions is not None:
            self._values["oss_object_positions"] = oss_object_positions
        if oss_urls is not None:
            self._values["oss_urls"] = oss_urls

    @builtins.property
    def backup_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        backupMode: The type of the migration task. Valid values:
        FULL: specifies that full backup files are used to restore data.
        UPDF: specifies that incremental backup files or log files are used to restore incremental data.
        '''
        result = self._values.get("backup_mode")
        assert result is not None, "Required property 'backup_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbName: The name of the database that you want to restore.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_online_db(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: isOnlineDb: Specifies whether to bring the restored database online for user access. Note The value for SQL Server 2008 R2 is fixed to True.
        '''
        result = self._values.get("is_online_db")
        assert result is not None, "Required property 'is_online_db' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def check_db_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        checkDbMode: The consistency check method of the database. Valid values:
        SyncExecuteDBCheck: synchronous database check
        AsyncExecuteDBCheck: asynchronous database check
        Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
        Note When IsOnlineDB is set to True, this value is valid.
        '''
        result = self._values.get("check_db_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_object_positions(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ossObjectPositions: The information of the backup file in the OSS bucket.
        The values consist of three parts that are separated by colons (:):
        The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
        The name of the OSS bucket: rdsmssqlsingapore.
        The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
        Note
        This parameter is optional for instances that run SQL Server 2008 R2.
        This parameter is required for instances that run a database engine later than SQL
        Server 2008 R2.
        '''
        result = self._values.get("oss_object_positions")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_urls(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ossUrls: The shared URL of the backup file in the OSS bucket. The URL must be encoded.
        If you specify multiple URLs, separate them with vertical bars (|) and then encode
        them.
        Note This parameter must be entered for instances that run SQL Server 2008 R2.
        '''
        result = self._values.get("oss_urls")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMigrateTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrepayDBInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosPrepayDBInstance",
):
    '''A ROS template type:  ``ALIYUN::RDS::PrepayDBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrepayDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::PrepayDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a617b754269b381047f10d7d5aa39fa3642ab78110da2a1f67c6ce8e696ad075)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3f3f8f6de12f772618013e29f7521526fffb91a90998065396fc72c033bb5571)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerConnectionString")
    def attr_inner_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerConnectionString: DB instance connection url by Intranet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerIPAddress: IP Address for created DB instance of Intranet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerPort")
    def attr_inner_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerPort: Intranet port of created DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The order id list of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: DB instance connection url by Internet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIPAddress: IP Address for created DB instance of Internet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicPort: Internet port of created DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="commodityCode")
    def commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: commodityCode: The CommodityCode of the order.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "commodityCode"))

    @commodity_code.setter
    def commodity_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4991a20dd9487ab038920080109eb8b4a228a57dea4a5a6a43a7df680c9bd12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commodityCode", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ba4aa390d7b543db3bdbe1672c3ab08103ab747e72e1af008dde5ccfbbf5893)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b275cfa5c6f462d5d0258c183d88923efb46b06fcfdc7e7231260fc92439b625)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2aa2e5d0cb18c9eae98b3051109f4eb28c2a892e9b6670adeebaa1d5e5dde4e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b6b0d0360c9a6b0adf1c1c3528d668b92ea399bfef89f1de6bc389a08c4388c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engineVersion: Database instance version of the relative engine type. Support:
        Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
        Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
        Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
        Valid values when you set the Engine parameter to MariaDB: 10.3
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a309f5b72207e02456adee7f2731f83cdb68be5738af3c973c9b07304b2b3c44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5ff2a2033bbecf69e09eedfb494fa1b2ba53eecf8e09b8ffec13e5f8aeafc3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4de0d1449dd99e898626c418fb590cb111ea3dd2442958cf0dc6a51c54c18b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodType", value)

    @builtins.property
    @jsii.member(jsii_name="allocatePublicConnection")
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allocatePublicConnection"))

    @allocate_public_connection.setter
    def allocate_public_connection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a88bcf5e285a7a3a4f31c5e3c932588e0ad63025cd44bf2e21049ce55596042)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allocatePublicConnection", value)

    @builtins.property
    @jsii.member(jsii_name="archiveBackupKeepCount")
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "archiveBackupKeepCount"))

    @archive_backup_keep_count.setter
    def archive_backup_keep_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc886f81f9cb531c11219597fde850434f4a0009430e8ea53cb406617c247914)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "archiveBackupKeepCount", value)

    @builtins.property
    @jsii.member(jsii_name="archiveBackupKeepPolicy")
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
        be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        Default value: 0. Valid values:
        ByMonth
        ByWeek
        KeepAll
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "archiveBackupKeepPolicy"))

    @archive_backup_keep_policy.setter
    def archive_backup_keep_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fd6d986b85d3e56797500638cdd8f52bdb24d6f70e58291c98919392a577e33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "archiveBackupKeepPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="archiveBackupRetentionPeriod")
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "archiveBackupRetentionPeriod"))

    @archive_backup_retention_period.setter
    def archive_backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ae360cabc985a68120e4e7a644a03416ac08312409299cff523966b543b1d5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "archiveBackupRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Automatic Payment. Default is true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c48089e3d3709271a3cad725e65c6c9cae28e093b83871d9239a359cd331e381)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc74467ff7aecb431c3d27407e0dd3e0e9916bc559c5a1ad9201a8eba5a18336)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="backUpCategory")
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backUpCategory"))

    @back_up_category.setter
    def back_up_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__421333643f7c6abf12255a49f9d9d667e7d8842c9e5818e50089134133234cb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backUpCategory", value)

    @builtins.property
    @jsii.member(jsii_name="backupPolicyMode")
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupPolicyMode: Backup type,
        DataBackupPolicy: data backup
        LogBackupPolicy: log backup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupPolicyMode"))

    @backup_policy_mode.setter
    def backup_policy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cb630039d258bbdae690ddd1bcb354cbb0e4cebb6a33f9942559f849b227a8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupPolicyMode", value)

    @builtins.property
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupRetentionPeriod"))

    @backup_retention_period.setter
    def backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da456e1f882a27a0c39f1ade30d71dd6db147c689986f5f90adbd445670fccbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2978605954796b580cc21fc7baaade012a62f48fa5839fd5e253dc77e593709)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="compressType")
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "compressType"))

    @compress_type.setter
    def compress_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10909cac3da50dff052bb4802584c3400cacce94e491896068a6a99520bc906d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compressType", value)

    @builtins.property
    @jsii.member(jsii_name="connectionMode")
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionMode"))

    @connection_mode.setter
    def connection_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c1622ba6bc8d1db356acae6203ae628d85246defc4119a859289d65ad358643)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionMode", value)

    @builtins.property
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f31251d060cfccc3ac3754bb565dcca5aaa4bbd5a8cb95739afe36cf9f1f91ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property
    @jsii.member(jsii_name="connectionStringType")
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionStringType"))

    @connection_string_type.setter
    def connection_string_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d70f7421bf58b410ab86c8b8d30213d38e24a8d18bdc458493046a4223e7001)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionStringType", value)

    @builtins.property
    @jsii.member(jsii_name="couponCode")
    def coupon_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: couponCode: The coupon code of the order.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "couponCode"))

    @coupon_code.setter
    def coupon_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0454e98ec3908bdd5667c0ca4a296eec8f535ab367e03ba24899ef7e7089d620)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "couponCode", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__858a8502ea3d0325bdf78e835a717889ca3996110d8308865ff26e0d2e230871)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceNetType")
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceNetType"))

    @db_instance_net_type.setter
    def db_instance_net_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44fddcb0c04ac5acbd9688cc71098a3072cc52bef01497b41b9267075d3a3ff6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceNetType", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd: specifies to use local SSDs. This is the recommended storage type.
        cloud_ssd: specifies to use standard SSDs.
        cloud_essd: enhanced SSD of performance level (PL)1.
        cloud_essd2: enhanced SSD of PL2.
        cloud_essd3: enhanced SSD of PL3.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9c84af2c4348eca71e7109c9f613027fb1821236884bcb3e8e53c29edc51980)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property
    @jsii.member(jsii_name="dbIsIgnoreCase")
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbIsIgnoreCase"))

    @db_is_ignore_case.setter
    def db_is_ignore_case(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eee857b8fcefa937662f837bac3aff0e5035c54c8d05c304818d63f11db83de1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbIsIgnoreCase", value)

    @builtins.property
    @jsii.member(jsii_name="dbMappings")
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]], jsii.get(self, "dbMappings"))

    @db_mappings.setter
    def db_mappings(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.DBMappingsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18191a2f4e83f45be04af19ed5e122fff11d59b0fd274aceccca212cd896ae3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbMappings", value)

    @builtins.property
    @jsii.member(jsii_name="dbParamGroupId")
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbParamGroupId"))

    @db_param_group_id.setter
    def db_param_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90a314e85665796452aa85eb1bc43ccc696244d18ea7b6be2038d6ff9c8b902e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbParamGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="dbTimeZone")
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbTimeZone"))

    @db_time_zone.setter
    def db_time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36ac0fc2f47567e6da1323e804ebf2bd5fbb9bb393366daaf7a188d57cfc1121)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbTimeZone", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2038fb00144b424291539f43a39b2990aa486f6cb83206aec0c16a68e1e7ce9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="enableBackupLog")
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableBackupLog: Specifies whether to enable the log backup function. Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableBackupLog"))

    @enable_backup_log.setter
    def enable_backup_log(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9d82e0d26c225d67838eeab6c01575a8fb04326c94f51b6d19ee6d3e1df1662)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableBackupLog", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e2e2670386b97e2654feecd81bae1fe4f5829bba99e11322a8b34b4677a6c79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionKey", value)

    @builtins.property
    @jsii.member(jsii_name="highSpaceUsageProtection")
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
        instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "highSpaceUsageProtection"))

    @high_space_usage_protection.setter
    def high_space_usage_protection(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fa286de7ad7a822320cd202da6dcb4dcbc4e6aaa4dae2f9e89e1c468fac4bdb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "highSpaceUsageProtection", value)

    @builtins.property
    @jsii.member(jsii_name="localLogRetentionHours")
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "localLogRetentionHours"))

    @local_log_retention_hours.setter
    def local_log_retention_hours(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aa9680f0baf35839467adba69345fd2190b36f5cfdb713e8307caa0f997f8c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localLogRetentionHours", value)

    @builtins.property
    @jsii.member(jsii_name="localLogRetentionSpace")
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "localLogRetentionSpace"))

    @local_log_retention_space.setter
    def local_log_retention_space(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f68e0123c997d757588c7f771d024985b58a543853b8eb9a5ceff771ab2c8df7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localLogRetentionSpace", value)

    @builtins.property
    @jsii.member(jsii_name="logBackupFrequency")
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupFrequency: The frequency at which to back up logs. Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logBackupFrequency"))

    @log_backup_frequency.setter
    def log_backup_frequency(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__527bfe3331c796b2a2b1911438fe20ab85763c188ca90cf124ae3c274698c522)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logBackupFrequency", value)

    @builtins.property
    @jsii.member(jsii_name="logBackupLocalRetentionNumber")
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
        Default value: 60. Valid values: 6 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logBackupLocalRetentionNumber"))

    @log_backup_local_retention_number.setter
    def log_backup_local_retention_number(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7039410e04354b7f77278c2efd4c5cc0c3db7d6026873d61e170eb89f129fc49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logBackupLocalRetentionNumber", value)

    @builtins.property
    @jsii.member(jsii_name="logBackupRetentionPeriod")
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logBackupRetentionPeriod"))

    @log_backup_retention_period.setter
    def log_backup_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b51133d98387d5b71c171549dd2406817ea300086a4102b5b741841af5426452)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logBackupRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maintainTime"))

    @maintain_time.setter
    def maintain_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e846ed7218d6cded356ab7dafcf93a17b16148268e1376f2b70b87a12cda93e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maintainTime", value)

    @builtins.property
    @jsii.member(jsii_name="masterUsername")
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUsername"))

    @master_username.setter
    def master_username(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46a2ec6c922886c301629164e3ca81ce2cf824608e5efc73e50b00f6d8c56afc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUsername", value)

    @builtins.property
    @jsii.member(jsii_name="masterUserPassword")
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUserPassword"))

    @master_user_password.setter
    def master_user_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f7afb63d4cf6f7976ce4d8cab84fb3511916a9ce8793721a7e9ac6f94022042)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUserPassword", value)

    @builtins.property
    @jsii.member(jsii_name="masterUserType")
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterUserType"))

    @master_user_type.setter
    def master_user_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81a7486b2720aa697d78bfb078a4f8bd6842f1e39f09cd4ee314e469d3851555)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterUserType", value)

    @builtins.property
    @jsii.member(jsii_name="multiAz")
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiAz"))

    @multi_az.setter
    def multi_az(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a07ceeafef1dffbe1e2fa3090d5e64b0cf3762fc9d555735742f4c4f9975a7ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAz", value)

    @builtins.property
    @jsii.member(jsii_name="port")
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6af5d43fa1c261e8b210909b04c4ecf5e22d28f1bfd0ce91f6fb1b1e1008fcaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "port", value)

    @builtins.property
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preferredBackupPeriod"))

    @preferred_backup_period.setter
    def preferred_backup_period(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d7c2d4970fe198d0aaa7098fe8e368f42fb0a2c7cf3eb3d43d1948efa415819)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preferredBackupTime"))

    @preferred_backup_time.setter
    def preferred_backup_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__746b7cabf9afeea1100a10edf4f4516a3fc2ec6d0f29353b184831a08bac9999)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preferredBackupTime", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a677766867c19e0b4b1841385315dee05c65d5d897a6531a054a3759cda2ab01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddress", value)

    @builtins.property
    @jsii.member(jsii_name="quantity")
    def quantity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quantity: The number of instance to be created, default is 1, max number is 99
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "quantity"))

    @quantity.setter
    def quantity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c2d6f4334cbe80a75d76739e7b7b8815c04d1046e849ca97fd3fb7e76ff9598)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quantity", value)

    @builtins.property
    @jsii.member(jsii_name="releasedKeepPolicy")
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "releasedKeepPolicy"))

    @released_keep_policy.setter
    def released_keep_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e224d3b9c3cea2cac9e0f04030090855429e9271d4b6d478e7c42ddd718dd2a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "releasedKeepPolicy", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__dd24cb7c9ae8fffd36d4c0b142b191de46377b99e01ed52c451d82e3cb64fc89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="roleArn")
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "roleArn"))

    @role_arn.setter
    def role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d331f4169c354652daa554c902c9420275232b48810ac85adbaa36d2747b0892)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roleArn", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a47cd188e760a6f318f9df18ab61dccaa62a54467f79208335be9a1b319f6c09)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serverlessConfig")
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.ServerlessConfigProperty"]]:
        '''
        :Property: serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.ServerlessConfigProperty"]], jsii.get(self, "serverlessConfig"))

    @serverless_config.setter
    def serverless_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayDBInstance.ServerlessConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bac32108b4e864e8844160c42ce270c8ebd95497bd90c7e5e78c2168a59adc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverlessConfig", value)

    @builtins.property
    @jsii.member(jsii_name="slaveZoneIds")
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "slaveZoneIds"))

    @slave_zone_ids.setter
    def slave_zone_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f7c764323fef37dcb81084c6a2dd8ee2b68deb9876169e885d7cea58bf3b5a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slaveZoneIds", value)

    @builtins.property
    @jsii.member(jsii_name="sqlCollectorStatus")
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sqlCollectorStatus"))

    @sql_collector_status.setter
    def sql_collector_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70bd2533d1f6c578bb56b79c3add7784347ee533701605e6017b073d1dc7d7d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sqlCollectorStatus", value)

    @builtins.property
    @jsii.member(jsii_name="sslSetting")
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sslSetting"))

    @ssl_setting.setter
    def ssl_setting(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__019476306f050ddd839004c7e94a85d8eedb3b8cb2e642ecb7878f0c03cf911d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sslSetting", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e866c25697d4ca57543fc4be25b37e32179f8ef31ca4eb51ed55adcdacfdac9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="targetDedicatedHostIdForLog")
    def target_dedicated_host_id_for_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetDedicatedHostIdForLog"))

    @target_dedicated_host_id_for_log.setter
    def target_dedicated_host_id_for_log(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d3de7567efa97c781d3c6750fdbc2c8f2dc22e41997d110a8d21e21d613ef22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetDedicatedHostIdForLog", value)

    @builtins.property
    @jsii.member(jsii_name="targetDedicatedHostIdForMaster")
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetDedicatedHostIdForMaster"))

    @target_dedicated_host_id_for_master.setter
    def target_dedicated_host_id_for_master(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1866bdc922907101f91ae01103f756986449b1e516148806eefbbccdcea92a8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetDedicatedHostIdForMaster", value)

    @builtins.property
    @jsii.member(jsii_name="targetDedicatedHostIdForSlave")
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetDedicatedHostIdForSlave"))

    @target_dedicated_host_id_for_slave.setter
    def target_dedicated_host_id_for_slave(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b34cff30ae143f44cc0b96d27104e7187d0540bc2760c65c84d7d4f7580b7512)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetDedicatedHostIdForSlave", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a344ce1c8d8d917716979b6f7231974c80419b39e3e8116c99bf706e2900a613)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4541cc92816822f882f3bb4ad56ff4c0e6332984da3d7a77436e2f464f23e21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__216af88ef83309b6e6bb6747e7a924ade17efb4e0598c311736cacd3ca30e3f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param character_set_name: 
            :param db_name: 
            :param db_description: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__eb5e90d4c52d92cee920af561485f96348d215c5802a153575552a32c555cb4a)
                check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
                check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
                check_type(argname="argument db_description", value=db_description, expected_type=type_hints["db_description"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "character_set_name": character_set_name,
                "db_name": db_name,
            }
            if db_description is not None:
                self._values["db_description"] = db_description

        @builtins.property
        def character_set_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            '''
            result = self._values.get("character_set_name")
            assert result is not None, "Required property 'character_set_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def db_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            '''
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def db_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dbDescription: Specifies the database description, containing up to 256 characters.
            '''
            result = self._values.get("db_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DBMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rds.RosPrepayDBInstance.ServerlessConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "max_capacity": "maxCapacity",
            "min_capacity": "minCapacity",
            "auto_pause": "autoPause",
            "switch_force": "switchForce",
        },
    )
    class ServerlessConfigProperty:
        def __init__(
            self,
            *,
            max_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            min_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            auto_pause: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            switch_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param max_capacity: 
            :param min_capacity: 
            :param auto_pause: 
            :param switch_force: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__55a96792dde0634daab22d98d172bf0f479f2217c16649075b022cd88fe2e0e0)
                check_type(argname="argument max_capacity", value=max_capacity, expected_type=type_hints["max_capacity"])
                check_type(argname="argument min_capacity", value=min_capacity, expected_type=type_hints["min_capacity"])
                check_type(argname="argument auto_pause", value=auto_pause, expected_type=type_hints["auto_pause"])
                check_type(argname="argument switch_force", value=switch_force, expected_type=type_hints["switch_force"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "max_capacity": max_capacity,
                "min_capacity": min_capacity,
            }
            if auto_pause is not None:
                self._values["auto_pause"] = auto_pause
            if switch_force is not None:
                self._values["switch_force"] = switch_force

        @builtins.property
        def max_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: maxCapacity: The maximum value of the automatic scaling range of an instance RCU (RDS Capacity Unit). Value: 0.5-8.
            '''
            result = self._values.get("max_capacity")
            assert result is not None, "Required property 'max_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def min_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: minCapacity: The minimum value of the automatic scaling range of an instance RCU (RDS Capacity Unit). Value: 0.5-8.
            '''
            result = self._values.get("min_capacity")
            assert result is not None, "Required property 'min_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def auto_pause(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoPause: Whether to enable intelligent pause and start of serverless instances. Value:
            true: enabled.
            false: not enabled (default).
            '''
            result = self._values.get("auto_pause")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def switch_force(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            switchForce: Whether to enable mandatory elastic scaling of serverless instances. Value:
            true: enabled.
            false: not enabled (default).
            '''
            result = self._values.get("switch_force")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServerlessConfigProperty(%s)" % ", ".join(
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
        "serverless_config": "serverlessConfig",
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
        commodity_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        back_up_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compress_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        coupon_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayDBInstance.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        db_param_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_backup_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        high_space_usage_protection: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        local_log_retention_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_az: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quantity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        released_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayDBInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        :param serverless_config: 
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bee232ae574f0caede2f876bed1742789690f946d101a67e2b758451501854a)
            check_type(argname="argument commodity_code", value=commodity_code, expected_type=type_hints["commodity_code"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument allocate_public_connection", value=allocate_public_connection, expected_type=type_hints["allocate_public_connection"])
            check_type(argname="argument archive_backup_keep_count", value=archive_backup_keep_count, expected_type=type_hints["archive_backup_keep_count"])
            check_type(argname="argument archive_backup_keep_policy", value=archive_backup_keep_policy, expected_type=type_hints["archive_backup_keep_policy"])
            check_type(argname="argument archive_backup_retention_period", value=archive_backup_retention_period, expected_type=type_hints["archive_backup_retention_period"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument back_up_category", value=back_up_category, expected_type=type_hints["back_up_category"])
            check_type(argname="argument backup_policy_mode", value=backup_policy_mode, expected_type=type_hints["backup_policy_mode"])
            check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument compress_type", value=compress_type, expected_type=type_hints["compress_type"])
            check_type(argname="argument connection_mode", value=connection_mode, expected_type=type_hints["connection_mode"])
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument connection_string_type", value=connection_string_type, expected_type=type_hints["connection_string_type"])
            check_type(argname="argument coupon_code", value=coupon_code, expected_type=type_hints["coupon_code"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_net_type", value=db_instance_net_type, expected_type=type_hints["db_instance_net_type"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument db_is_ignore_case", value=db_is_ignore_case, expected_type=type_hints["db_is_ignore_case"])
            check_type(argname="argument db_mappings", value=db_mappings, expected_type=type_hints["db_mappings"])
            check_type(argname="argument db_param_group_id", value=db_param_group_id, expected_type=type_hints["db_param_group_id"])
            check_type(argname="argument db_time_zone", value=db_time_zone, expected_type=type_hints["db_time_zone"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument enable_backup_log", value=enable_backup_log, expected_type=type_hints["enable_backup_log"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument high_space_usage_protection", value=high_space_usage_protection, expected_type=type_hints["high_space_usage_protection"])
            check_type(argname="argument local_log_retention_hours", value=local_log_retention_hours, expected_type=type_hints["local_log_retention_hours"])
            check_type(argname="argument local_log_retention_space", value=local_log_retention_space, expected_type=type_hints["local_log_retention_space"])
            check_type(argname="argument log_backup_frequency", value=log_backup_frequency, expected_type=type_hints["log_backup_frequency"])
            check_type(argname="argument log_backup_local_retention_number", value=log_backup_local_retention_number, expected_type=type_hints["log_backup_local_retention_number"])
            check_type(argname="argument log_backup_retention_period", value=log_backup_retention_period, expected_type=type_hints["log_backup_retention_period"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument master_username", value=master_username, expected_type=type_hints["master_username"])
            check_type(argname="argument master_user_password", value=master_user_password, expected_type=type_hints["master_user_password"])
            check_type(argname="argument master_user_type", value=master_user_type, expected_type=type_hints["master_user_type"])
            check_type(argname="argument multi_az", value=multi_az, expected_type=type_hints["multi_az"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
            check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument quantity", value=quantity, expected_type=type_hints["quantity"])
            check_type(argname="argument released_keep_policy", value=released_keep_policy, expected_type=type_hints["released_keep_policy"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument serverless_config", value=serverless_config, expected_type=type_hints["serverless_config"])
            check_type(argname="argument slave_zone_ids", value=slave_zone_ids, expected_type=type_hints["slave_zone_ids"])
            check_type(argname="argument sql_collector_status", value=sql_collector_status, expected_type=type_hints["sql_collector_status"])
            check_type(argname="argument ssl_setting", value=ssl_setting, expected_type=type_hints["ssl_setting"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument target_dedicated_host_id_for_log", value=target_dedicated_host_id_for_log, expected_type=type_hints["target_dedicated_host_id_for_log"])
            check_type(argname="argument target_dedicated_host_id_for_master", value=target_dedicated_host_id_for_master, expected_type=type_hints["target_dedicated_host_id_for_master"])
            check_type(argname="argument target_dedicated_host_id_for_slave", value=target_dedicated_host_id_for_slave, expected_type=type_hints["target_dedicated_host_id_for_slave"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if serverless_config is not None:
            self._values["serverless_config"] = serverless_config
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
    def commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: commodityCode: The CommodityCode of the order.
        '''
        result = self._values.get("commodity_code")
        assert result is not None, "Required property 'commodity_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engineVersion: Database instance version of the relative engine type. Support:
        Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
        Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
        Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
        Valid values when you set the Engine parameter to MariaDB: 10.3
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        result = self._values.get("period_type")
        assert result is not None, "Required property 'period_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allocate_public_connection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocatePublicConnection: If true, allocate public connection automate.
        '''
        result = self._values.get("allocate_public_connection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def archive_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
        The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        '''
        result = self._values.get("archive_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Automatic Payment. Default is true.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def back_up_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
        to be completed within seconds. Valid values:
        Flash: specifies to enable the second-level backup function.
        Standard: specifies to disable the second-level backup function.
        '''
        result = self._values.get("back_up_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupPolicyMode: Backup type,
        DataBackupPolicy: data backup
        LogBackupPolicy: log backup
        '''
        result = self._values.get("backup_policy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        '''
        result = self._values.get("backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The edition of the instance. Valid values:
        Basic: specifies to use the Basic Edition.
        HighAvailability: specifies to use the High-availability Edition.
        AlwaysOn: specifies to use the Cluster Edition.
        Finance: specifies to use the Enterprise Edition.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compress_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the endpoint.
        Only the prefix of the CurrentConnectionString parameter value can be modified.
        The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        '''
        result = self._values.get("connection_string_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def coupon_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: couponCode: The coupon code of the order.
        '''
        result = self._values.get("coupon_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        '''
        result = self._values.get("db_instance_net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_is_ignore_case(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        1: Table names are not case-sensitive. This is the default value.
        0: Table names are case-sensitive.
        '''
        result = self._values.get("db_is_ignore_case")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayDBInstance.DBMappingsProperty]]]]:
        '''
        :Property: dbMappings: Database mappings to attach to db instance.
        '''
        result = self._values.get("db_mappings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayDBInstance.DBMappingsProperty]]]], result)

    @builtins.property
    def db_param_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbParamGroupId: The ID of the parameter template used by the instance.
        '''
        result = self._values.get("db_param_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_backup_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableBackupLog: Specifies whether to enable the log backup function. Valid values:
        True: specifies to enable the log backup function.
        False: specifies to disable the log backup function.
        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("enable_backup_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def high_space_usage_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
        instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
        Enable and Disable. You can retain the default value. Note You must specify
        this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("high_space_usage_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def local_log_retention_hours(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
        Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_hours")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def local_log_retention_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
        If the space usage for log backup files exceeds this percentage, the system deletes earlier
        log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        You can retain the default value. Note You must specify this parameter when the
        BackupPolicyMode parameter is set to LogBackupPolicy.
        '''
        result = self._values.get("local_log_retention_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupFrequency: The frequency at which to back up logs. Valid values:
        The value LogInterval specifies to back up logs every 30 minutes.
        The default value of this parameter is the same as the data backup frequency.
        Note The value LogInterval is supported only when the instance runs SQL Server.
        '''
        result = self._values.get("log_backup_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_local_retention_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
        Default value: 60. Valid values: 6 to 100.
        '''
        result = self._values.get("log_backup_local_retention_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_backup_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
        retention period cannot be longer than the data backup retention period.Note If you enable the log
        backup function, you can specify the log backup retention period. This applies only when the
        instance runs MySQL, PostgreSQL, or PPAS.
        '''
        result = self._values.get("log_backup_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUsername: The master user name for the database instance.
        '''
        result = self._values.get("master_username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterUserPassword: The master password for the database instance.
        '''
        result = self._values.get("master_user_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_user_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterUserType: Privilege type of account.
        Normal: Common privilege.
        Super: High privilege.
        Sysadmin: Super privileges (SA) (only supported by SQL Server)
        The default value is Normal.
        '''
        result = self._values.get("master_user_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        '''
        result = self._values.get("multi_az")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: port: The port of the database service.
        '''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_period")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        '''
        result = self._values.get("preferred_backup_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private ip for created instance.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quantity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quantity: The number of instance to be created, default is 1, max number is 99
        '''
        result = self._values.get("quantity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def released_keep_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
        Valid values:
        Lastest: Only the last archived backup is retained.
        All: All of the archived backups are retained.
        '''
        result = self._values.get("released_keep_policy")
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
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security groups.
        Each RDS instance can be associated with up to three ECS security groups.
        You must separate them with commas (,).
        To delete an ECS Security group, leave this parameter empty.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayDBInstance.ServerlessConfigProperty]]:
        '''
        :Property: serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
        '''
        result = self._values.get("serverless_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayDBInstance.ServerlessConfigProperty]], result)

    @builtins.property
    def slave_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        '''
        result = self._values.get("slave_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def sql_collector_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
        Valid values:Enable | Disabled.
        '''
        result = self._values.get("sql_collector_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_setting(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        Disabled: Disable SSL
        EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        Default value is Disabled.
        '''
        result = self._values.get("ssl_setting")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_log")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_master(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_master")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_dedicated_host_id_for_slave(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        '''
        result = self._values.get("target_dedicated_host_id_for_slave")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrepayDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosReadOnlyDBInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.RosReadOnlyDBInstance",
):
    '''A ROS template type:  ``ALIYUN::RDS::ReadOnlyDBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosReadOnlyDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RDS::ReadOnlyDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b58d2cbbda2bbc58f8d9f7afe3e4ace5e60758a34a3d5212ac83f3535493cbe)
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
            type_hints = typing.get_type_hints(_typecheckingstub__925f304f9ca4071e4dd98bc3ce5c57affbb416ef5fe4fe27ea11239f8ddfb8be)
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
        :Attribute: ConnectionString: DB instance connection url by Intranet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Intranet port of created DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83879600c2952f70dca4e6ce12f53d2c5a09943f4714b478a392ca7d4db2c4ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the master instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74e0a79532271335dcb987d5e1c91ac2178c0e53c5c545c9f56597a55d01f649)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5f38282b903c54a26b41b385ccab44d40b0c075666a13ad05c6120fd3871d99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4123bc64792af5f0ed73099d0dcd589760fa6ed831ecf6c4a88e8d34a7f6d82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07c5d8895db543fef6feb834d19daad5b7e24dc38dae912699d2a14d80078a27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c6caf34f3b63271421ca2e85c687732c9c3966adbebf8a86bdb4cbc7b2406f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a15cfb723d8e328681ab4cbf19a30d3fc9912a502e7f2066fc6c0643994b6f4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The RDS edition of the read-only instance. Valid values:
        Basic: Basic Edition.
        HighAvailability: High-availability Edition. This is the default value.
        AlwaysOn: Cluster Edition.
        Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca85f75587817062002c2048e273e5a6133197a22e90dff8eaf9b3edd644ecbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a5ee3da22ba771eda64c7a995ed9c8e21e6ee498430f5387e76a1cc0c33a0b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorageType")
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceStorageType: The type of storage media that is used by the instance. Valid values:
        local_ssd: local SSDs
        cloud_ssd: standard SSDs
        cloud_essd: ESSDs of performance level 1 (PL1)
        cloud_essd2: ESSDs of PL2
        cloud_essd3: ESSDs of PL3
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStorageType"))

    @db_instance_storage_type.setter
    def db_instance_storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc558eade7a1fca21c16dba30f0562ef31caee46c8820cedcaab20930ae77194)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorageType", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7d2a030b8d5f0d474f986bc87f22726211a22c269e97063f2aacf36acce4f6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cb852177b232959ed2c08301c6dfb88736f46d8fac10db9864cc6dec6a8a8bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7dd79b670e3b81ae42866295ce48f50db9efb4a76f54b39e3a79225867d55ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodType", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fe362c32f26237a1d23e9f3c7b9b159e9b9b18f8ed6917ab102e69891c441c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddress", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__504c21c02351b0143c33d4958095d90683892aab410aa2dc4613243eeaf7fa9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d666785674548dca81509d16c3a51d1a4ac7dafd312f0d76054bec76ea57e50a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d01a89683ce8a389b4938b27a69e00becc61e5f0338a07fed18a7c2773033ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bc0f051967824e82aaa3f9fc76d7246465e87fda44d57ac32f62b9a07938b92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d59026012c99768b50d624e42e252521e9b4ab9b34ddea529d0150c83f523f6a)
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_storage_type", value=db_instance_storage_type, expected_type=type_hints["db_instance_storage_type"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the master instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
        :Monthly subscription: The auto-renewal cycle is one month.
        Annual subscription: The auto-renewal cycle is one year.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The RDS edition of the read-only instance. Valid values:
        Basic: Basic Edition.
        HighAvailability: High-availability Edition. This is the default value.
        AlwaysOn: Cluster Edition.
        Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
        When PeriodType is Year, it could be from 1 to 5.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodType: Charge period for created instances.
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        '''
        result = self._values.get("private_ip_address")
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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    "MigrateTask",
    "MigrateTaskProps",
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
    "RosMigrateTask",
    "RosMigrateTaskProps",
    "RosPrepayDBInstance",
    "RosPrepayDBInstanceProps",
    "RosReadOnlyDBInstance",
    "RosReadOnlyDBInstanceProps",
]

publication.publish()

def _typecheckingstub__f3233ce007fdd8ef74de4da4e2c52b3a9dee0f6da81fd6c060e3a30ad3229d13(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ADInfoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49f94204f44a2484fc17a678c05b8bca2286fceba643868f246c28775742b763(
    *,
    ad_account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    addns: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ad_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ad_server_ip_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__662640c75a3893cf9aaa0b7496e5c83e63230229a3afddbb8547a699873d6527(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4143048ca2f7bf5329a7859123a4391ba83549ce6c72c22b39b0713dd2b50524(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountPrivilegeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__879bff009a7f186412bc8ddbeeae873f972ac1781b70921c5ba614a54ab03a04(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2acc2bcbbe7a0fc539514b32a047cbbbba551a5c3f055a5a26f2addf39641efd(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25286659ebf4ba1a86414c94b8534a86810f92c161c6efe147d378b96c1bce4a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37b1ea8bd1c1bdd7fd6d46932f94f8c337c4e3c43740988a5abe6fc4a1f2ff86(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBInstanceCloneProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb4fc0f711f3d10c6f3bcd5810a9b4265be0a3082805ed3058035f2539017167(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceClone.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    db_names: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_table: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table_meta: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceClone.TableMetaProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00bce13d5c506813cabd9f5fb121c59105974950ff1ebb9f020903e70d44c827(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBInstanceParameterGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eef252d70d395b53afd848d20c892c455f2364d729e1f14a2d9ae99f0bd2ca8(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceParameterGroup.ParametersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    forcerestart: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e89b6340eeaf0ceb5fcda5835514ff8458fc9a0ae3a9fd05debf668e9fc101ac(
    *,
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ip_list: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    back_up_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compress_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    db_param_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_backup_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    high_space_usage_protection: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    local_log_retention_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_az: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    released_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3767e5a20a69d016851f9b8326aff5c6f21041eb1a81c7cf61b0b4fc8715bed(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBInstanceSecurityIpsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92d7ac5c0362abfa9e376faf8e3f77ff5c51a409f8fcbf273dc9021cbb2b764a(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_ip_array_attribute: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a16b891fc544b72f728998b214881851e68747516cd567ab094cc8d3cf295e2d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dee6c1812705d776dae16ff3fbb80eab354a7cf8f1740e08c138b314ca61afc(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd11bf33e2fdd68afa1f595a274bdfa04c52b83438a0bbb2da81acfcd087866b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MigrateTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42bbb3bb93114c97649b27ac607bfb19c8efda2fed1938fbcef2dbc52df59159(
    *,
    backup_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_online_db: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    check_db_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_object_positions: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_urls: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__296f8dcdd8cecad7e33fc8b804b33fe67c6d1064c30a8728ed522528d6b49e83(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PrepayDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8e3b948e447a4f4e7c0dbcd2b1ba3e8c1f39b845a1136d07526c41d8cfeee33(
    *,
    commodity_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    back_up_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compress_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    coupon_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayDBInstance.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    db_param_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_backup_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    high_space_usage_protection: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    local_log_retention_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_az: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quantity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    released_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayDBInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cbd4fd5366f3166d6ae403e5795eb81b40bed0223a013ac75a2d721a88dbe9f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ReadOnlyDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a3e5c21bceab2cf0c5dd4c67b21ba39edb1d7b0846ee1116cb3fae7cbac5ce8(
    *,
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24633c68789f0c13162f8b750a514104068c6600c62d67e4cf365d4ec462b774(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosADInfoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__475a50ab06181e3e7ceb1f6721e48b716b1f103409bcd40c799f700e734e958c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b292745089c1ac28040abca025888c5141d9df1f4dd1d9f55e9348f6d30e8932(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d770653d2485fdeed2b68f4aa94352ae29fd2edd07f5723022930ca16ca5062b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26a8807527a48dbc51eba41f490f30878311e97167b24a3bce66f6f14c91bdfc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13780c1b2f113d0abeb5710d4273f7f1fcd55f0fe9c123153ea294ee73475ef9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9df19d2db3da80e6705ad5ad03b4f621771c5ad22bcbf61fed784a65b34525f0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe22533828abe81995188514f88b6c5568b86678917e9971bd0fd45d80827add(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cc567626eb191f055f3106f6a29093ffcf5ebe9d3806e59c86b6dc1c0bd5bb5(
    *,
    ad_account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    addns: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ad_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ad_server_ip_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cdc06da70f394fd63ce8ede0604423109828a898e754968784474242eb94cb0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d285432d788d87ff12e4f2185cfc700325ec2c8a8570ddbf52e54d0469aeb3d4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de3d62e29f1bc5496c6e479b43e41cee5190a88c76bd231fd4c96cc253d4b85d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2157d00766dbe47dbf2b56b78a5594853a83767f892f4f739615e5001eb454f7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cf84f66fffc0ff642a9c7aa932c62904dade74547981098a35bd119ff709b6b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__348c6d5729377051621fa6752508792aa715c45b614da7a7c8ee9d7b60e1f27a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c7725298cf81c3e99fef02ba9d895443334904c4e4dae87435e318320f70516(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0395cd0fe5f00fe781d10ed06315c8d1819a6e90885247c66adbaa768f754fcc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__613b4f261e620fe323f69c40fddeb17355f14ef0ee9614d044f3df07c565bb2f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountPrivilegeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbd016b814025a6a442238c74ff81030004ec77b063efa74955ad389b92c235f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdb3a4be52db8306503b4067c579d09928e17277ec3efc6f102df8b15d4736e5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc8ffddea0a94514537bc34658dfd425754bef1de5dc260f478700caecec6889(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ad0be25f96fd8b0e39caefb1675650c9805667cf3669d4c42504193e4186293(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0bbab1e9993a2477e9ffb71421f5fbaef66e0218d30c1016191e271bcae6978(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1b25bf3d918213899322a8a9f8c33d1fad59db8a58874aa7b949180a131b9cb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6da918476f84cb4037104941d3f18f9ebe2168f9b4f5300789519bb4aac8158(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d44881b70cd8bae3236219e28d381dd921c5ce580f835e8d428735994b83612a(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__823c253c86e872a6fb66a9bd16b7ac324ba6fa2da589981ea79f1620a838f88e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f6c66a41e929b462684eb00c4476f1d4532efeb38b2693a590667d94be04270(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d929a5b0ae44753c945184c2389f1b36ffa48137b2e03ec459faae48672cdca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9d61c299aabc3e52894250d64a27d2f7e3728c05b12b2dc02c2a04bb6a2e86a(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24f2b927b12e1eef4eddd2b8b2df2597b8e4ac8758eaae261f8f404adae1b33d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e437471c1ddaa68623e568f9377696f1fcb00e8ffe7abceda66755e96e466306(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75ce80cd7009985f6a3fc2bc0fa4fb5db46c36c91d72188b2c31a826efe457d4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fdde95cb77c8be04250acbb5c88a738a53591553eb9f51a9b9d15c13f78cfd9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54e54452d485b9be0f2a0f9f97dea2c9a7fd4cedfed2e65afdbbbbe604916b03(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3be158695b2d750f61a3bf87268c9a2d13e3d831d81f999ad9dd43e2e49cc130(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29506d99f6c886aea79faffae9bf8d1a2caa4b00c79f26c98f578323469be8b4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad11904cc7a6ccdac88abecfd411c4d6aaee2f588d237d2a42bb33e938458417(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2e0428fdddc5672190bf9bf903d918784defd809be71deba4ad61b46a03f8e5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fba2952495cdaf88abc342ded5b8d465132d173f69ec3c8a29ad2dcd62dd6ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e63cbb6f138fd1be1cdd15abed294662ce03bfbb2caa2e21670050614bc30d7e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92c290a51e59af9dbb043706beea4a39b4226914bb9bac8edcda0ba790463b90(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aeec62629182866ccfd029ed1730e9bb0cb315fa847e9f15899669ee60591ae6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4b89d9d591152d908da3d2d164cac0bd521fce6d582241ca780551b509fac91(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__590990aa7bdeea7d617862d5b69af04f7339baf7062bf58de456df138030d2e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43ecb57f76eef84dc9297e3541ab6dfb88885c4a1b512788301deaef31016532(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6eab49bbc288884423c6f0770babc0c50cf5f7c1dd837bbfb74c7363ad015ada(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2de63f684f02dd7526110178b66b6ed425104f62130f0d916db6808bf9a3daf9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c195b3b25970e24e3d39dcceb79d03f37f09e648183eaf51c9c80955324acc8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__119fe35ed60660dc193985022507cb29c466751c95641b696e5856bf767a8cbb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__023b5842d134a08e9066151c4070800999e915f639630a85e1abf98ed5bee320(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70e218db99aca343e60534d143e73c08e3f178d23d0a8ab480fb3a2bf562bc1b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.DBMappingsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__866a351fe0408163c81f7d0c304683298d64fdfac6f0fc462bee2b22c87bbbc5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b2d8c0d8907722ea1418f7142a60d8a48a481788f9adeecc15b9737a1a1ba6a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c95a8a446aa7012025c95622f0624a98a83c063c34aa3c7c37d48d917299d7eb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6a9b3739e45bff77cefb1ee067e52647ce66c95c269b2c2fc998124862a8694(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1fa7cc48f6e92967d12d46ff690a5c755fe6d5e4eaa71875a72d83813fc0c9e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fa183fae363951104b1a1b5065537a89a8a95c484e8b44ae30cfe88d6304679(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19aeb8eb23e42e47f28cee2fbf9a843b7492152f606a87b19f66281144a8853f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4691ebdbcc0484d9b82669af2d3320bed6af8d064f98413d2633b48fb12f9f57(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3784c81d0cfb024513ec7722ecd256a12085f99bb5baeae6be1566c32c5ae1e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3bdb083293f47a7ce0dc17e54385d0984db1e756818a144073e29a4e8c0f662(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe85aea843d6c66393dbdbc9e43a180ff40877e67472d719f4b882750b82361c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deb79e74e12a93ee395805c6b18ff291fb474e85d40919388050c5b46a7287bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8027b15e902cc097794265448577f832784ab7584b3dd1f2095414ce2196331(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__678490f721f7115c385d05aafe23bcb7a6c8e2f046455e7f96375c4dad2160b4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95870197ae35dc05339f17aed60cc90b54344d37ff93a4274903117220b2d5ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed943f7f08d3f2dca522e6185d232fa421c798c10e6382641be1c347a47b2922(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9da35212d4325fb4f15fbdfd5407df524292162841a687a34821dcd90ad125f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b396ac2ac43706ac521b70b399ce5859a93484bf99bd2f925b37db1354bdf6d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d0e30099778e11f48afbed9e4ae1d21f28c40cebf5fd239589383811df832aa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68d2f72aa118b99d406435b9f77f22ee8b424e96bc1eb601f49ede35db3ab38b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8792830afd998b340cba2bbd6882471b85d242543b604d50b57a24ec47620191(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f520734209a05aa97fa5e803ac8d2d1089875cf0f0164d50fe21feb5b3b5f20(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8758d03b331a66fe01515f99299eb44f7d9c591ac0f93fcc90df77e420bc74a6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcdfdd92b3030eab520b261e09e4ec59bacc6693aac8736958dc2bfdbeed3ecf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f2e6805f04416d2f809757efd07e1349954776d6bdeeba87b8184644c691388(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba1da2547288fe3dfc5707c1796bb635d4faf66bd893108420d2d2621838f667(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad73206278bd1b79c7bb37549852b0b5edb864e83725f29c9ac3f59e1c499965(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52919d8de3d62af04ef5ce6302fac64b294379b7564ceee163776c201fcd28a4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.ServerlessConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12350f29a203f8166e97b1b477862429d23bff4352ae7d528a2aed2fa74b2912(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f43c8de38c2256957c14ce175118adad04cdbec6f0abd358d32ddeff0391ce31(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83017dff1414b908bd460fedc6a0201ac8ba46a1093a37710837be34ae0b8fa9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a627dc4808326e70c887b1967eaf2b17e500488cd9c91550775efc562fa821b(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66f6e55e171922a152bcb84e227ad794999c0ff0a5576f8650be48d77f95f072(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84dbcafbc37d361975e259517caee367f88f7f7433c111563f4d913a99ae8042(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a43cadeb65141cc3990f808d657ef96e61a6d00eadebf76f758d455490a7bbc5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a75236f3c7090c4e44fed6b2cc8faaf51ba9442a384a800746b3abafa0881334(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2e0e9736d3b5fa91756aea512a805961df5575086ffa76f116b74d725eafe90(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__401c9a8b13a3c3c4e9e6087f87622a516ef2973612f6e259cbe160cd450b7428(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc9acca6b07a9b8b2e1647e1b97fbdfab111043f67e569a1da7ca5a6c360e302(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df1a7d2ad5966ea0225073a64037c95a37f03f97f5eef6762b9b35a068ba4c18(
    *,
    max_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    min_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pause: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    switch_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ed37c6a1b0e42a1aae5328b1763c9eb1cf1a63ba339844cf6ef7350f8983793(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstanceCloneProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3aae60dc7fe3eb51dbb1597000a516b7844f3b4cf374c3c3b9e027e75edba702(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48b9e748f467c76b20152151a3e6d3f7bcfbdb7d80b545a6d6e64004afb59a10(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fda3af490e3dec75a1ed130a0aa23bd7af03e503617f0f17e66aa12175cdef15(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__babe3cac0de9e36441c7943e19f4b5fe90f50d005188c23dc19558f59b08c456(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__020843c13e0796afff19aac6e216cd8c2c7cf9c8be9d70e61335aea014c75c57(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7afb0fe0d8e0a8619d01383bcb753bbf0bac5af503ab339c85b5b8da23745813(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6585a78d17c93f50224fe664ef76740f9f8a975c03cc29e3965cd1ea617b75fc(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__204ec47e79d080920190b399c9318f657ae32b13244d3f46c20a15f0a22fd952(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1911459ba9d1b52abcfe57f25b4283c8d1280aee8a1a7c53a50d5bbed238601d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf9c08ccb46fe9204470d7c98ee09de5196b25e4f8a155a63cf54badb7aec4d3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd6695a3adb5cd20a190f4974e49d777bb07e77845be3c5a39e31f2e69b77b96(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5bbccc60dbdf2cbca63b8cf75cb39adad24f4779347108591f4948e6472c573(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa85fa0a996c0b4815bb869bc26c59d56db44911deb1fcbe2a7ed10ebbc4151d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83b7572d05b2e5b58b3b45548594436cd85bebfccb43840ff221a5b0611040d6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97429888eecd224a8be0e0f235809d223a4ca9842488b5371d8470602b79d4e5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c170c6b3c77e51c9b35ac80d8ddf1a4930ddaea3e04728ef1b4e7ebdd9456683(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceClone.DBMappingsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4b8c2a8afed560220bf90c8afc0fe20c1702ed87958355784a1d7afc3192e28(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20af97682666a98a77f557556a649efb5b47a4d25bceae28f2c690be11523622(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c6878afc604ae1c39bac701bde8e6a090afd24332dbd3aea77866df4b867e51(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2636632f57c008ba37af91ef20486b3c7feb71b18643b2cf934144f5ea2ed752(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bbcf618ac5aab986393173d1675def8ada8892d0411ebe7ab7f5b51960e4997(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fae32d582583360d5e56c5a34d931abe2e1d3e27cd184f51cd95789c1bc0f6f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f931a8c4bfc1410eb688f5c1bcf8f38e5820fa3a85024004692bdefc16acbfa1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__061b15829a4486cd8ac9abd4dd48dd38ecc2ad3e8ef140ca8daafb448c767f27(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd15767c594e8e3eaae0d944d46e36b965ce8bf1c1ad21e8585a38bd1202f761(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef08ac501de7b5750a695ebc55822c8e11e58cc50440c19abf755f17342f02ae(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b67c27212ffd54ae6eee6d4c1275196524a229b5b8893e5dcf524d38ca946c3b(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f02b81a8e84087377a7747e424464bf45669853ae3e2e77e4847b2b2e104b90b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d5eaeed3915edf6f0eac885f7a11d1e0711b0a973cba1bc17be4544a9f2636d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5901f2536cb3be314c73cb8c451f0788cc956a45b67be80e5382709f2a146cb2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ff8ee4a83819e5a4958be3160e9d73cde834a85782c30b33abd85434b1a274f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2408cac3872fd7b8327fc913c64d78372ce04a00488c81af1408e781386940b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d788e8e7f0566b7b6304a496208b47bd2e4a0cea0dc0e25f4359ff65b6627161(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffb7dc9587ae3c79b72d327acb87dc24f79d8b2d95c620c9edca0ca8b6d001e8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__914ebff626803557b107d2b17e824c3046ca2d22749ebb946e5518a78f23c608(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__455b83abf3c40f8379d7c7a110ba000d264121622e46b8535986ae9a3350f452(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd93b774c02c264787c3f43ee02836de2e2ba874674644feafc9d94d6e88fb47(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceClone.TableMetaProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be74b33578aa39143092cbc5d3cb0561d98866ce0cd91f652b170b39652c5bcc(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65daca22dc42c16baecb296222864113ffef17fb757f9362bf846cdb4dc087d3(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65ae5be5985a7123decff5200722accd918639e614c42dc9c574857511b855ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25fd624980a2496376a0cefe18d7fee42b28eceab0e46178d310d206921302ca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb916552b40438258a6309e5fbec8173b1d25e59ee64821ee8c3d91ef48177da(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d954dd02caa1a9ede46b6b0b692ef6d88f3464f96d948b29554360f3cf2e5375(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8e0527ba5f0aaebd662d955519a94d10cb834144c1d69f83878d7d618e0514b(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceClone.TablesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b1fbb76d604b48a4b7ef0dd6e4465c2a887c3d638fc62afe90b9a91b08bf34a(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb8992ded3aff4afabe9ef132e129c8a86b9333845d4f17728fa23ed194febab(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceClone.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    db_names: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_table: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table_meta: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceClone.TableMetaProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb3db093eee0e40eb0fc245cbb2177f145964644f0f064a6827d6707876847b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstanceParameterGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4d2e51ea0067c14b6d6f4bebed529a3121f9371c466e5c2b3d25142c3b79d1c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27f8ded0c03641162914ef7eac3f8effb7c81042edd39bfa7d737c24d061aa28(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccc9d00c1cb3be2b3d662f7ce7584aad4b531a98276a654f8dc562056448f479(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dadecfaa839e38634bf945b5b9e0b8a65dc83e54709d155234736c6fe60cb9fb(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstanceParameterGroup.ParametersProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6834ec709d655c024f33980e441d14bf15b93623a2098cff941256f0b94248e6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66239e854a9bcdb742fa614ecadeee5d84c5961982b974a50126c22b52fde1da(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c551bc387d21e59a41fadbe3db5ab7b10e6113521ecd8032757836f89ab19ee1(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstanceParameterGroup.ParametersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    forcerestart: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9a785fa9e02d3fc1a956a7849219ebcf7b8a6470a59d21edd34171b74fbfd57(
    *,
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ip_list: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    back_up_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compress_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    db_param_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_backup_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    high_space_usage_protection: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    local_log_retention_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_az: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    released_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a936e94bb70594a42e15aaab49da9d55e2583ec72c496c25a1cbc04630b6385b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstanceSecurityIpsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b228232e7926dae6ca03ffb704b84939c85ecdf02ae0e9e799162479507ce22(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0593e37e4cfb89aea06ef1081660afadcaae839e078db5f44c8d96637156d99b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e6afc545d67abd566aa93eab9e1cc069e25eca120da413c0d7688b4de088471(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b858d8478bbb779d82750d3f3f9cd4645e9513ca51b54b28f8de76450b54782(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__317f8bee90eda295591448ad0a15d1806df3a370eb388d43305a0b005e698385(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bb494f5af8a7485f1b917248d03cad729f0df7123e400e42333a37f295624fd(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_ip_array_attribute: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44c8fed800a1c3abd8d2b177d78b72f11e44d78ec99b606eb16588c321202073(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2d8af04270f5d2bf8d10aee81de765d2b33c598313cde4cbc67c6e1484e07e4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b6c32e4bb66b8bede2795062da7dd90c8bedc39a74a61f84909ac6e566c53f4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20796ac3ebe5f718e417fc5e3524c8e08c272842c04bb63bf126b462a7ed55f0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a158e3de6483b67327c529a7593452b7b316485537e82b5aa2900da84a6b6030(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21e98e2679f0397621750d2fbd9bb2bc46c9c3e9cfce11261e6793125e3aa48d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__daa63961e43f40041ffd2171ab3fc1e9e3568427b14adba03f27be25651a5c36(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a377b5f971bcff9aa815fc115788b67065685ccb692706ca4e54cf256c95883(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe477984dc2c2400030b9f889e5479e2cc7bfc6e61b145d8157c273e3cde483d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMigrateTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf20ab9a52b3f36ce4639060cfdad11e729b5ac8edde2821c1d63a32c3dab919(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38ccfa53ec80c79a11b3dedd1f20451a0786441b35182ddc419726c9f0c4b118(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57632e6e64d902b3ad4508fca85d9b240521c8a705a8404bc7d5c092b6d91ac5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__170f6c09af721398bbff53a6338558eab2072dfabe6161fbf9f59d7d3d388371(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd804927775035ba48822e544c7ad11329dc498749bba639d007fb4dc9f9ba30(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15719b3067b7efd64365eb0262a04c4b7fbc6c9f5583db4e36517f4dcfcab2cc(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a2f72aa5e54806266205c1d371a345c49951eda4bf702f8b927f82c0236877e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f4f1eaa4b58b99d044e62d3eaa5e3d422d06d6d8dc7d66c7e77e18c01f3fa52(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1810afcdbcf896d6c2959af102ae258fbbcb003a9dc4dcf91b513e96c46a92fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dd063a61e496749dfc1be88e077bd69644d2ac755e7aa6ffb6b80ede3398bbd(
    *,
    backup_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_online_db: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    check_db_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_object_positions: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_urls: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a617b754269b381047f10d7d5aa39fa3642ab78110da2a1f67c6ce8e696ad075(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrepayDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f3f8f6de12f772618013e29f7521526fffb91a90998065396fc72c033bb5571(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4991a20dd9487ab038920080109eb8b4a228a57dea4a5a6a43a7df680c9bd12(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ba4aa390d7b543db3bdbe1672c3ab08103ab747e72e1af008dde5ccfbbf5893(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b275cfa5c6f462d5d0258c183d88923efb46b06fcfdc7e7231260fc92439b625(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2aa2e5d0cb18c9eae98b3051109f4eb28c2a892e9b6670adeebaa1d5e5dde4e3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b6b0d0360c9a6b0adf1c1c3528d668b92ea399bfef89f1de6bc389a08c4388c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a309f5b72207e02456adee7f2731f83cdb68be5738af3c973c9b07304b2b3c44(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5ff2a2033bbecf69e09eedfb494fa1b2ba53eecf8e09b8ffec13e5f8aeafc3a(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4de0d1449dd99e898626c418fb590cb111ea3dd2442958cf0dc6a51c54c18b6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a88bcf5e285a7a3a4f31c5e3c932588e0ad63025cd44bf2e21049ce55596042(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc886f81f9cb531c11219597fde850434f4a0009430e8ea53cb406617c247914(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fd6d986b85d3e56797500638cdd8f52bdb24d6f70e58291c98919392a577e33(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ae360cabc985a68120e4e7a644a03416ac08312409299cff523966b543b1d5d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c48089e3d3709271a3cad725e65c6c9cae28e093b83871d9239a359cd331e381(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc74467ff7aecb431c3d27407e0dd3e0e9916bc559c5a1ad9201a8eba5a18336(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__421333643f7c6abf12255a49f9d9d667e7d8842c9e5818e50089134133234cb7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cb630039d258bbdae690ddd1bcb354cbb0e4cebb6a33f9942559f849b227a8b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da456e1f882a27a0c39f1ade30d71dd6db147c689986f5f90adbd445670fccbd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2978605954796b580cc21fc7baaade012a62f48fa5839fd5e253dc77e593709(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10909cac3da50dff052bb4802584c3400cacce94e491896068a6a99520bc906d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c1622ba6bc8d1db356acae6203ae628d85246defc4119a859289d65ad358643(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f31251d060cfccc3ac3754bb565dcca5aaa4bbd5a8cb95739afe36cf9f1f91ba(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d70f7421bf58b410ab86c8b8d30213d38e24a8d18bdc458493046a4223e7001(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0454e98ec3908bdd5667c0ca4a296eec8f535ab367e03ba24899ef7e7089d620(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__858a8502ea3d0325bdf78e835a717889ca3996110d8308865ff26e0d2e230871(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44fddcb0c04ac5acbd9688cc71098a3072cc52bef01497b41b9267075d3a3ff6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9c84af2c4348eca71e7109c9f613027fb1821236884bcb3e8e53c29edc51980(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eee857b8fcefa937662f837bac3aff0e5035c54c8d05c304818d63f11db83de1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18191a2f4e83f45be04af19ed5e122fff11d59b0fd274aceccca212cd896ae3c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayDBInstance.DBMappingsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90a314e85665796452aa85eb1bc43ccc696244d18ea7b6be2038d6ff9c8b902e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36ac0fc2f47567e6da1323e804ebf2bd5fbb9bb393366daaf7a188d57cfc1121(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2038fb00144b424291539f43a39b2990aa486f6cb83206aec0c16a68e1e7ce9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9d82e0d26c225d67838eeab6c01575a8fb04326c94f51b6d19ee6d3e1df1662(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e2e2670386b97e2654feecd81bae1fe4f5829bba99e11322a8b34b4677a6c79(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fa286de7ad7a822320cd202da6dcb4dcbc4e6aaa4dae2f9e89e1c468fac4bdb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aa9680f0baf35839467adba69345fd2190b36f5cfdb713e8307caa0f997f8c4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f68e0123c997d757588c7f771d024985b58a543853b8eb9a5ceff771ab2c8df7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__527bfe3331c796b2a2b1911438fe20ab85763c188ca90cf124ae3c274698c522(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7039410e04354b7f77278c2efd4c5cc0c3db7d6026873d61e170eb89f129fc49(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b51133d98387d5b71c171549dd2406817ea300086a4102b5b741841af5426452(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e846ed7218d6cded356ab7dafcf93a17b16148268e1376f2b70b87a12cda93e2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46a2ec6c922886c301629164e3ca81ce2cf824608e5efc73e50b00f6d8c56afc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f7afb63d4cf6f7976ce4d8cab84fb3511916a9ce8793721a7e9ac6f94022042(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81a7486b2720aa697d78bfb078a4f8bd6842f1e39f09cd4ee314e469d3851555(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a07ceeafef1dffbe1e2fa3090d5e64b0cf3762fc9d555735742f4c4f9975a7ab(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6af5d43fa1c261e8b210909b04c4ecf5e22d28f1bfd0ce91f6fb1b1e1008fcaa(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d7c2d4970fe198d0aaa7098fe8e368f42fb0a2c7cf3eb3d43d1948efa415819(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__746b7cabf9afeea1100a10edf4f4516a3fc2ec6d0f29353b184831a08bac9999(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a677766867c19e0b4b1841385315dee05c65d5d897a6531a054a3759cda2ab01(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c2d6f4334cbe80a75d76739e7b7b8815c04d1046e849ca97fd3fb7e76ff9598(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e224d3b9c3cea2cac9e0f04030090855429e9271d4b6d478e7c42ddd718dd2a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd24cb7c9ae8fffd36d4c0b142b191de46377b99e01ed52c451d82e3cb64fc89(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d331f4169c354652daa554c902c9420275232b48810ac85adbaa36d2747b0892(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a47cd188e760a6f318f9df18ab61dccaa62a54467f79208335be9a1b319f6c09(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bac32108b4e864e8844160c42ce270c8ebd95497bd90c7e5e78c2168a59adc3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayDBInstance.ServerlessConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f7c764323fef37dcb81084c6a2dd8ee2b68deb9876169e885d7cea58bf3b5a7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70bd2533d1f6c578bb56b79c3add7784347ee533701605e6017b073d1dc7d7d3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__019476306f050ddd839004c7e94a85d8eedb3b8cb2e642ecb7878f0c03cf911d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e866c25697d4ca57543fc4be25b37e32179f8ef31ca4eb51ed55adcdacfdac9f(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d3de7567efa97c781d3c6750fdbc2c8f2dc22e41997d110a8d21e21d613ef22(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1866bdc922907101f91ae01103f756986449b1e516148806eefbbccdcea92a8e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b34cff30ae143f44cc0b96d27104e7187d0540bc2760c65c84d7d4f7580b7512(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a344ce1c8d8d917716979b6f7231974c80419b39e3e8116c99bf706e2900a613(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4541cc92816822f882f3bb4ad56ff4c0e6332984da3d7a77436e2f464f23e21(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__216af88ef83309b6e6bb6747e7a924ade17efb4e0598c311736cacd3ca30e3f2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb5e90d4c52d92cee920af561485f96348d215c5802a153575552a32c555cb4a(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55a96792dde0634daab22d98d172bf0f479f2217c16649075b022cd88fe2e0e0(
    *,
    max_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    min_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pause: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    switch_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bee232ae574f0caede2f876bed1742789690f946d101a67e2b758451501854a(
    *,
    commodity_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocate_public_connection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_keep_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    back_up_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compress_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    coupon_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_is_ignore_case: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayDBInstance.DBMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    db_param_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_backup_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    high_space_usage_protection: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    local_log_retention_hours: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    local_log_retention_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_local_retention_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_user_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_az: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_period: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quantity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    released_keep_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayDBInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    slave_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sql_collector_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_setting: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    target_dedicated_host_id_for_log: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_dedicated_host_id_for_master: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_dedicated_host_id_for_slave: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b58d2cbbda2bbc58f8d9f7afe3e4ace5e60758a34a3d5212ac83f3535493cbe(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosReadOnlyDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__925f304f9ca4071e4dd98bc3ce5c57affbb416ef5fe4fe27ea11239f8ddfb8be(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83879600c2952f70dca4e6ce12f53d2c5a09943f4714b478a392ca7d4db2c4ad(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74e0a79532271335dcb987d5e1c91ac2178c0e53c5c545c9f56597a55d01f649(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5f38282b903c54a26b41b385ccab44d40b0c075666a13ad05c6120fd3871d99(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4123bc64792af5f0ed73099d0dcd589760fa6ed831ecf6c4a88e8d34a7f6d82(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07c5d8895db543fef6feb834d19daad5b7e24dc38dae912699d2a14d80078a27(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c6caf34f3b63271421ca2e85c687732c9c3966adbebf8a86bdb4cbc7b2406f4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a15cfb723d8e328681ab4cbf19a30d3fc9912a502e7f2066fc6c0643994b6f4a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca85f75587817062002c2048e273e5a6133197a22e90dff8eaf9b3edd644ecbb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a5ee3da22ba771eda64c7a995ed9c8e21e6ee498430f5387e76a1cc0c33a0b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc558eade7a1fca21c16dba30f0562ef31caee46c8820cedcaab20930ae77194(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7d2a030b8d5f0d474f986bc87f22726211a22c269e97063f2aacf36acce4f6c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cb852177b232959ed2c08301c6dfb88736f46d8fac10db9864cc6dec6a8a8bb(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7dd79b670e3b81ae42866295ce48f50db9efb4a76f54b39e3a79225867d55ec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fe362c32f26237a1d23e9f3c7b9b159e9b9b18f8ed6917ab102e69891c441c3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__504c21c02351b0143c33d4958095d90683892aab410aa2dc4613243eeaf7fa9b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d666785674548dca81509d16c3a51d1a4ac7dafd312f0d76054bec76ea57e50a(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d01a89683ce8a389b4938b27a69e00becc61e5f0338a07fed18a7c2773033ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bc0f051967824e82aaa3f9fc76d7246465e87fda44d57ac32f62b9a07938b92(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d59026012c99768b50d624e42e252521e9b4ab9b34ddea529d0150c83f523f6a(
    *,
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
