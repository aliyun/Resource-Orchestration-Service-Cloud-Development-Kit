'''
## Aliyun ROS POLARDB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as POLARDB from '@alicloud/ros-cdk-polardb';
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
    jsii_type="@alicloud/ros-cdk-polardb.Account",
):
    '''A ROS resource type:  ``ALIYUN::POLARDB::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::Account``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a03a44313de523810a255d0b788e0f1b02a2cadde7fe43c88f886598635b042)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


class AccountPrivilege(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.AccountPrivilege",
):
    '''A ROS resource type:  ``ALIYUN::POLARDB::AccountPrivilege``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountPrivilegeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::AccountPrivilege``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c040f43af7e166dd9852266ac401d3afd78f38a4f9642f7b55e1802cb28979d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.AccountPrivilegeProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_privilege": "accountPrivilege",
        "db_cluster_id": "dbClusterId",
        "db_name": "dbName",
    },
)
class AccountPrivilegeProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::AccountPrivilege``.

        :param account_name: Property accountName: The name of the database account to be granted access permissions.
        :param account_privilege: Property accountPrivilege: The permissions of the database account on the database. Valid values: - ReadWrite: has read and write permissions on the database. - ReadOnly: has the read-only permission on the database. - DMLOnly: runs only data manipulation language (DML) statements. - DDLOnly: runs only data definition language (DDL) statements. The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence. Separate multiple permissions with a comma (,).
        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
        :param db_name: Property dbName: The name of the database whose access permissions are to be granted to the database account. You can grant access permissions on one or more databases to the database account. Separate multiple databases with a comma (,).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__372ecfe0a1d9a1988a6736a9a5e32116dc0498c6d300192244f0749803770d5f)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_cluster_id": db_cluster_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountName: The name of the database account to be granted access permissions.'''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountPrivilege: The permissions of the database account on the database.

        Valid values:

        - ReadWrite: has read and write permissions on the database.
        - ReadOnly: has the read-only permission on the database.
        - DMLOnly: runs only data manipulation language (DML) statements.
        - DDLOnly: runs only data definition language (DDL) statements.
          The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
          Separate multiple permissions with a comma (,).
        '''
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbName: The name of the database whose access permissions are to be granted to the database account.

        You can grant access permissions on one or more databases to the database account.
        Separate multiple databases with a comma (,).
        '''
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
    jsii_type="@alicloud/ros-cdk-polardb.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "db_cluster_id": "dbClusterId",
        "account_description": "accountDescription",
        "account_privilege": "accountPrivilege",
        "account_type": "accountType",
        "db_name": "dbName",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::Account``.

        :param account_name: Property accountName: The name of the database account. The name must comply with the following rules: - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_). - It can be up to 16 characters in length.
        :param account_password: Property accountPassword: The password of the database account. The password must comply with the following rules: - It must consist of uppercase letters, lowercase letters, digits, and special characters. - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=). - It must be 8 to 32 characters in length.
        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        :param account_description: Property accountDescription: The description of the database account. The description must comply with the following rules: - It cannot start with http:// or https://. - It must be 2 to 256 characters in length.
        :param account_privilege: Property accountPrivilege: The permissions of the database account on the database. Valid values: ReadWrite: has read and write permissions on the database. ReadOnly: has the read-only permission on the database. DMLOnly: runs only data manipulation language (DML) statements. DDLOnly: runs only data definition language (DDL) statements. Default value: ReadWrite. Separate multiple permissions with a comma (,).
        :param account_type: Property accountType: The type of the database account. Valid values: - Normal: standard account - Super: privileged account Default value: Super. Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts. You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        :param db_name: Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__329c955f970e27553be9d2b08b609bf0b32f6debfaf4e838167a94708eacbcb0)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_cluster_id": db_cluster_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description
        if account_privilege is not None:
            self._values["account_privilege"] = account_privilege
        if account_type is not None:
            self._values["account_type"] = account_type
        if db_name is not None:
            self._values["db_name"] = db_name

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountName: The name of the database account.

        The name must comply with the following rules:

        - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
        - It can be up to 16 characters in length.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountPassword: The password of the database account.

        The password must comply with the following rules:

        - It must consist of uppercase letters, lowercase letters, digits, and special characters.
        - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        - It must be 8 to 32 characters in length.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountDescription: The description of the database account.

        The description must comply with the following rules:

        - It cannot start with http:// or https://.
        - It must be 2 to 256 characters in length.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountPrivilege: The permissions of the database account on the database.

        Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        Separate multiple permissions with a comma (,).
        '''
        result = self._values.get("account_privilege")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountType: The type of the database account.

        Valid values:

        - Normal: standard account
        - Super: privileged account
          Default value: Super.
          Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
          You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbName: The name of the database whose access permissions are to be granted to the database account.

        Separate multiple databases with a comma (,).
        '''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBCluster",
):
    '''A ROS resource type:  ``ALIYUN::POLARDB::DBCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBCluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__950fed24d51c22a326c1f6fefaf64ce68a5fe2c6787a8e0c4251c5e1f6321214)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterConnectionString")
    def attr_cluster_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterConnectionString: The cluster connection string of the db cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterEndpointId")
    def attr_cluster_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomConnectionStrings")
    def attr_custom_connection_strings(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CustomConnectionStrings: The custom connection strings of the db cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomConnectionStrings"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomEndpointIds")
    def attr_custom_endpoint_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomEndpointIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNodeIds: The ID list of cluster nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The Order ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionString")
    def attr_primary_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrimaryConnectionString: The primary connection string of the db cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionStrings")
    def attr_primary_connection_strings(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryConnectionStrings"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointId")
    def attr_primary_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointIds")
    def attr_primary_endpoint_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryEndpointIds"))


class DBClusterAccessWhiteList(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterAccessWhiteList",
):
    '''A ROS resource type:  ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBClusterAccessWhiteListProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbb9ec71224c75c9b6e8be7a5d72542da4916a257ab71270fa1dbc717c73767b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterAccessWhiteListProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "security_ips": "securityIps",
        "db_cluster_ip_array_name": "dbClusterIpArrayName",
    },
)
class DBClusterAccessWhiteListProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        :param security_ips: Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP addresses with a comma (,). The following two formats are supported: IP address: for example, 10.23.12.24. Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the suffix /24 indicates the number of bits for the prefix of the IP address. The suffix ranges from 1 to 32.
        :param db_cluster_ip_array_name: Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter, the Default whitelist group is modified by default. Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f05f65c7ff60d65538853eeecc168e498fea7e4903e0fa222f4122782bdd3765)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument security_ips", value=security_ips, expected_type=type_hints["security_ips"])
            check_type(argname="argument db_cluster_ip_array_name", value=db_cluster_ip_array_name, expected_type=type_hints["db_cluster_ip_array_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "security_ips": security_ips,
        }
        if db_cluster_ip_array_name is not None:
            self._values["db_cluster_ip_array_name"] = db_cluster_ip_array_name

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified.

        Each
        whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
        addresses with a comma (,). The following two formats are supported:
        IP address: for example, 10.23.12.24.
        Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
        suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
        ranges from 1 to 32.
        '''
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterIpArrayName: The name of the IP address whitelist group.

        If you do not specify this parameter,
        the Default whitelist group is modified by default.
        Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        '''
        result = self._values.get("db_cluster_ip_array_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterAccessWhiteListProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBClusterEndpoint(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterEndpoint",
):
    '''A ROS resource type:  ``ALIYUN::POLARDB::DBClusterEndpoint``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBClusterEndpointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBClusterEndpoint``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9684af1dc4952bced8d37b8117a3a6f91cc8e4da169b3c7969fe9e4efa773e60)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Addresses: The address items of the db cluster endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: The first connection string of the db cluster endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbEndpointId")
    def attr_db_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBEndpointId: DB cluster endpoint ID.

        E.g. pe-xxxxxxxx.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbEndpointId"))


class DBClusterEndpointAddress(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterEndpointAddress",
):
    '''A ROS resource type:  ``ALIYUN::POLARDB::DBClusterEndpointAddress``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBClusterEndpointAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49390d07e2c0fb3a643c754bdf1719d212242fb0e504a706f63b2a7e83ee8d84)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Address: The details of the endpoint address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: The connection string of the endpoint address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterEndpointAddressProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "db_endpoint_id": "dbEndpointId",
        "connection_string_prefix": "connectionStringPrefix",
        "net_type": "netType",
    },
)
class DBClusterEndpointAddressProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
        :param db_endpoint_id: Property dbEndpointId: The ID of the cluster connection point.
        :param connection_string_prefix: Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules: It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash. The length is 6~30 characters.
        :param net_type: Property netType: The network type of the connection string. If set to Public, ROS will create, modify and delete Public address for you. If set to Private, ROS will only modify Private address for you. Default to Public.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c93b160859f501435271f8a96d9c0a977b3a279a40c915381024a205944473b1)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_endpoint_id", value=db_endpoint_id, expected_type=type_hints["db_endpoint_id"])
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "db_endpoint_id": db_endpoint_id,
        }
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if net_type is not None:
            self._values["net_type"] = net_type

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbEndpointId: The ID of the cluster connection point.'''
        result = self._values.get("db_endpoint_id")
        assert result is not None, "Required property 'db_endpoint_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionStringPrefix: The prefix of the connection string.

        The prefix must comply with the following rules:
        It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        The length is 6~30 characters.
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property netType: The network type of the connection string.

        If set to Public, ROS will create, modify and delete Public address for you.
        If set to Private, ROS will only modify Private address for you.
        Default to Public.
        '''
        result = self._values.get("net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterEndpointAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "auto_add_new_nodes": "autoAddNewNodes",
        "endpoint_config": "endpointConfig",
        "endpoint_type": "endpointType",
        "nodes": "nodes",
        "read_write_mode": "readWriteMode",
    },
)
class DBClusterEndpointProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_add_new_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBClusterEndpoint.EndpointConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nodes: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        read_write_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBClusterEndpoint``.

        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
        :param auto_add_new_nodes: Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point. Valid values: Enable, Disable. Default value: Disable.
        :param endpoint_config: Property endpointConfig:.
        :param endpoint_type: Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
        :param nodes: Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes. If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        :param read_write_mode: Property readWriteMode: The read/write mode of the cluster connection point. Valid values: ReadWrite: receives and forwards read and write requests (automatic read-write splitting). ReadOnly: receives and forwards only read requests. Default value: ReadOnly.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5ef7b6ccd5697f337395b07e1a41475c4a59e5982c03cbb40634627d160567a)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument auto_add_new_nodes", value=auto_add_new_nodes, expected_type=type_hints["auto_add_new_nodes"])
            check_type(argname="argument endpoint_config", value=endpoint_config, expected_type=type_hints["endpoint_config"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument nodes", value=nodes, expected_type=type_hints["nodes"])
            check_type(argname="argument read_write_mode", value=read_write_mode, expected_type=type_hints["read_write_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
        }
        if auto_add_new_nodes is not None:
            self._values["auto_add_new_nodes"] = auto_add_new_nodes
        if endpoint_config is not None:
            self._values["endpoint_config"] = endpoint_config
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if nodes is not None:
            self._values["nodes"] = nodes
        if read_write_mode is not None:
            self._values["read_write_mode"] = read_write_mode

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_add_new_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.

        Valid values: Enable, Disable.
        Default value: Disable.
        '''
        result = self._values.get("auto_add_new_nodes")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBClusterEndpoint.EndpointConfigProperty"]]:
        '''Property endpointConfig:.'''
        result = self._values.get("endpoint_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBClusterEndpoint.EndpointConfigProperty"]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointType: The type of the cluster connection point.

        Set this parameter to Custom.
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nodes(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodes: The nodes to be added to this connection point to process read requests from this connection point.

        Add at least two nodes.
        If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        '''
        result = self._values.get("nodes")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def read_write_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property readWriteMode: The read/write mode of the cluster connection point.

        Valid values:
        ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        ReadOnly: receives and forwards only read requests.
        Default value: ReadOnly.
        '''
        result = self._values.get("read_write_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_node_class": "dbNodeClass",
        "db_type": "dbType",
        "db_version": "dbVersion",
        "pay_type": "payType",
        "allow_shut_down": "allowShutDown",
        "auto_renew_period": "autoRenewPeriod",
        "backup_retention_policy_on_cluster_deletion": "backupRetentionPolicyOnClusterDeletion",
        "clone_data_point": "cloneDataPoint",
        "cluster_network_type": "clusterNetworkType",
        "creation_category": "creationCategory",
        "creation_option": "creationOption",
        "db_cluster_description": "dbClusterDescription",
        "db_cluster_parameters": "dbClusterParameters",
        "default_time_zone": "defaultTimeZone",
        "gdn_id": "gdnId",
        "lower_case_table_names": "lowerCaseTableNames",
        "maintain_time": "maintainTime",
        "period": "period",
        "period_unit": "periodUnit",
        "renewal_status": "renewalStatus",
        "resource_group_id": "resourceGroupId",
        "scale_max": "scaleMax",
        "scale_min": "scaleMin",
        "scale_ro_num_max": "scaleRoNumMax",
        "scale_ro_num_min": "scaleRoNumMin",
        "security_group_ids": "securityGroupIds",
        "security_ip_list": "securityIpList",
        "serverless_type": "serverlessType",
        "source_resource_id": "sourceResourceId",
        "tags": "tags",
        "tde_status": "tdeStatus",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class DBClusterProps:
    def __init__(
        self,
        *,
        db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allow_shut_down: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        clone_data_point: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        creation_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        creation_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBCluster.DBClusterParametersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        default_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lower_case_table_names: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_ro_num_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_ro_num_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDBCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBCluster``.

        :param db_node_class: Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
        :param db_type: Property dbType: Database type, value: MySQL PostgreSQL Oracle.
        :param db_version: Property dbVersion: The version of the database. Valid values: MySQL: 5.6, 5.7 or 8.0 PostgreSQL: 11 Oracle: 11
        :param pay_type: Property payType: The billing method of the cluster. Valid values: Postpaid: pay-as-you-go Prepaid: subscription
        :param allow_shut_down: Property allowShutDown: Whether to turn on No activity pause. The default is false.
        :param auto_renew_period: Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        :param backup_retention_policy_on_cluster_deletion: Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently. LATEST: Permanently keep the last backup (automatic backup before deletion). NONE: The backup set is not retained when the cluster is deleted. When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted. Note: This parameter takes effect only when the value of DBType is MySQL.
        :param clone_data_point: Property cloneDataPoint: The time point of data to be cloned. Valid values: LATEST: clones data of the latest time point. : clones historical backup data. Specify the ID of the specific backup set. : clones data of a historical time point. Specify the specific time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Default value: LATEST. Note This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB. If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
        :param cluster_network_type: Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
        :param creation_category: Property creationCategory: Cluster series. The value could be Normal (standard version), Basic and ArchiveNormal.
        :param creation_option: Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values: Normal: creates an ApsaraDB for POLARDB cluster. CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster. CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default. CreateGdnStandby: Create a secondary cluster. Default value: Normal. Note: When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS. When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
        :param db_cluster_description: Property dbClusterDescription: The description of the cluster. The description must comply with the following rules: It must start with a Chinese character or an English letter. It can contain Chinese and English characters, digits, underscores (_), and hyphens (-). It cannot start with http:// or https://. It must be 2 to 256 characters in length.
        :param db_cluster_parameters: Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
        :param default_time_zone: Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System: The default time zone is the same as the time zone where the region is located. This is default value. Other pickable value range is from -12:00 to +13:00, for example, 00:00. Note: This parameter takes effect only when DBType is MySQL.
        :param gdn_id: Property gdnId: The ID of the Global Database Network (GDN). Note: This parameter is required when the CreationOption is CreateGdnStandby.
        :param lower_case_table_names: Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1. Note: This parameter takes effect only when the value of DBType is MySQL.
        :param maintain_time: Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ. Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        :param period: Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param renewal_status: Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster. Normal: manually renews the cluster. NotRenewal: does not renew the cluster. Default value: Normal. Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration, but only sends an SMS message three days before the cluster expires to remind you that the cluster is not renewed.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param scale_max: Property scaleMax: Maximum limit of single-node scaling.
        :param scale_min: Property scaleMin: Minimum limit of single-node scaling.
        :param scale_ro_num_max: Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
        :param scale_ro_num_min: Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
        :param security_group_ids: Property securityGroupIds: The ID of the security group. You can add up to three security groups to a cluster.
        :param security_ip_list: Property securityIpList: The whitelist of the Apsara PolarDB cluster.
        :param serverless_type: Property serverlessType: Serverless type.
        :param source_resource_id: Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster. Note This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6. This parameter is required if the CreationOption parameter is not set to Normal.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param tde_status: Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values: true: enable TDE false: disable TDE (default) Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        :param vpc_id: Property vpcId: The ID of the VPC to connect to.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch to connect to.
        :param zone_id: Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7345bba0f4e8821add574486f552159483056d740a1ef997ebfb84fe07e51682)
            check_type(argname="argument db_node_class", value=db_node_class, expected_type=type_hints["db_node_class"])
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument allow_shut_down", value=allow_shut_down, expected_type=type_hints["allow_shut_down"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument backup_retention_policy_on_cluster_deletion", value=backup_retention_policy_on_cluster_deletion, expected_type=type_hints["backup_retention_policy_on_cluster_deletion"])
            check_type(argname="argument clone_data_point", value=clone_data_point, expected_type=type_hints["clone_data_point"])
            check_type(argname="argument cluster_network_type", value=cluster_network_type, expected_type=type_hints["cluster_network_type"])
            check_type(argname="argument creation_category", value=creation_category, expected_type=type_hints["creation_category"])
            check_type(argname="argument creation_option", value=creation_option, expected_type=type_hints["creation_option"])
            check_type(argname="argument db_cluster_description", value=db_cluster_description, expected_type=type_hints["db_cluster_description"])
            check_type(argname="argument db_cluster_parameters", value=db_cluster_parameters, expected_type=type_hints["db_cluster_parameters"])
            check_type(argname="argument default_time_zone", value=default_time_zone, expected_type=type_hints["default_time_zone"])
            check_type(argname="argument gdn_id", value=gdn_id, expected_type=type_hints["gdn_id"])
            check_type(argname="argument lower_case_table_names", value=lower_case_table_names, expected_type=type_hints["lower_case_table_names"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scale_max", value=scale_max, expected_type=type_hints["scale_max"])
            check_type(argname="argument scale_min", value=scale_min, expected_type=type_hints["scale_min"])
            check_type(argname="argument scale_ro_num_max", value=scale_ro_num_max, expected_type=type_hints["scale_ro_num_max"])
            check_type(argname="argument scale_ro_num_min", value=scale_ro_num_min, expected_type=type_hints["scale_ro_num_min"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument serverless_type", value=serverless_type, expected_type=type_hints["serverless_type"])
            check_type(argname="argument source_resource_id", value=source_resource_id, expected_type=type_hints["source_resource_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tde_status", value=tde_status, expected_type=type_hints["tde_status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_node_class": db_node_class,
            "db_type": db_type,
            "db_version": db_version,
            "pay_type": pay_type,
        }
        if allow_shut_down is not None:
            self._values["allow_shut_down"] = allow_shut_down
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if backup_retention_policy_on_cluster_deletion is not None:
            self._values["backup_retention_policy_on_cluster_deletion"] = backup_retention_policy_on_cluster_deletion
        if clone_data_point is not None:
            self._values["clone_data_point"] = clone_data_point
        if cluster_network_type is not None:
            self._values["cluster_network_type"] = cluster_network_type
        if creation_category is not None:
            self._values["creation_category"] = creation_category
        if creation_option is not None:
            self._values["creation_option"] = creation_option
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if db_cluster_parameters is not None:
            self._values["db_cluster_parameters"] = db_cluster_parameters
        if default_time_zone is not None:
            self._values["default_time_zone"] = default_time_zone
        if gdn_id is not None:
            self._values["gdn_id"] = gdn_id
        if lower_case_table_names is not None:
            self._values["lower_case_table_names"] = lower_case_table_names
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scale_max is not None:
            self._values["scale_max"] = scale_max
        if scale_min is not None:
            self._values["scale_min"] = scale_min
        if scale_ro_num_max is not None:
            self._values["scale_ro_num_max"] = scale_ro_num_max
        if scale_ro_num_min is not None:
            self._values["scale_ro_num_min"] = scale_ro_num_min
        if security_group_ids is not None:
            self._values["security_group_ids"] = security_group_ids
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if serverless_type is not None:
            self._values["serverless_type"] = serverless_type
        if source_resource_id is not None:
            self._values["source_resource_id"] = source_resource_id
        if tags is not None:
            self._values["tags"] = tags
        if tde_status is not None:
            self._values["tde_status"] = tde_status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeClass: The node specifications of the cluster.

        For more information, see Specifications and pricing.
        '''
        result = self._values.get("db_node_class")
        assert result is not None, "Required property 'db_node_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbType: Database type, value: MySQL PostgreSQL Oracle.'''
        result = self._values.get("db_type")
        assert result is not None, "Required property 'db_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbVersion: The version of the database.

        Valid values:
        MySQL: 5.6, 5.7 or 8.0
        PostgreSQL: 11
        Oracle: 11
        '''
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The billing method of the cluster.

        Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allow_shut_down(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allowShutDown: Whether to turn on No activity pause.

        The default is false.
        '''
        result = self._values.get("allow_shut_down")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Set the cluster auto renewal time.

        Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_retention_policy_on_cluster_deletion(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.

        LATEST: Permanently keep the last backup (automatic backup before deletion).
        NONE: The backup set is not retained when the cluster is deleted.
        When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        '''
        result = self._values.get("backup_retention_policy_on_cluster_deletion")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def clone_data_point(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cloneDataPoint: The time point of data to be cloned.

        Valid values:
        LATEST: clones data of the latest time point.
        : clones historical backup data. Specify the ID of the specific backup set.
        : clones data of a historical time point. Specify the specific time in
        the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
        Default value: LATEST.
        Note
        This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
        If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
        '''
        result = self._values.get("clone_data_point")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterNetworkType: The network type of the cluster.

        Currently, only VPC is supported. Default value: VPC.
        '''
        result = self._values.get("cluster_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def creation_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property creationCategory: Cluster series.

        The value could be Normal (standard version), Basic and ArchiveNormal.
        '''
        result = self._values.get("creation_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def creation_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.

        Valid values:
        Normal: creates an ApsaraDB for POLARDB cluster.
        CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
        CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
        for POLARDB cluster.
        MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
        CreateGdnStandby: Create a secondary cluster.
        Default value: Normal.
        Note:
        When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
        When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
        '''
        result = self._values.get("creation_option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterDescription: The description of the cluster.

        The description must comply with the following rules:
        It must start with a Chinese character or an English letter.
        It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        '''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.DBClusterParametersProperty"]]:
        '''Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.'''
        result = self._values.get("db_cluster_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.DBClusterParametersProperty"]], result)

    @builtins.property
    def default_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.

        This is default value.
        Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        Note: This parameter takes effect only when DBType is MySQL.
        '''
        result = self._values.get("default_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gdn_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gdnId: The ID of the Global Database Network (GDN).

        Note: This parameter is required when the CreationOption is CreateGdnStandby.
        '''
        result = self._values.get("gdn_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lower_case_table_names(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.

        Note: This parameter takes effect only when the value of DBType is MySQL.
        '''
        result = self._values.get("lower_case_table_names")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.

        Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.

        Normal: manually renews the cluster.
        NotRenewal: does not renew the cluster.
        Default value: Normal.
        Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        but only sends an SMS message three days before the cluster expires to remind you
        that the cluster is not renewed.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scaleMax: Maximum limit of single-node scaling.'''
        result = self._values.get("scale_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_min(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scaleMin: Minimum limit of single-node scaling.'''
        result = self._values.get("scale_min")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_ro_num_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.'''
        result = self._values.get("scale_ro_num_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_ro_num_min(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.'''
        result = self._values.get("scale_ro_num_min")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property securityGroupIds: The ID of the security group.

        You can add up to three security groups to a cluster.
        '''
        result = self._values.get("security_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpList: The whitelist of the Apsara PolarDB cluster.'''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def serverless_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serverlessType: Serverless type.'''
        result = self._values.get("serverless_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.

        Note
        This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        This parameter is required if the CreationOption parameter is not set to Normal.
        '''
        result = self._values.get("source_resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDBCluster.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDBCluster.TagsProperty"]], result)

    @builtins.property
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).

        Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        '''
        result = self._values.get("tde_status")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC to connect to.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the VSwitch to connect to.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the cluster.

        You can call the DescribeRegions operation to query available zones.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBInstance",
):
    '''A ROS resource type:  ``ALIYUN::POLARDB::DBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bbfd3fb9ce03274362d5bd135065b6eb7a01305a2ab6663c965f56672c17c74)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "character_set_name": "characterSetName",
        "db_cluster_id": "dbClusterId",
        "db_name": "dbName",
        "account_name": "accountName",
        "account_privilege": "accountPrivilege",
        "db_description": "dbDescription",
    },
)
class DBInstanceProps:
    def __init__(
        self,
        *,
        character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBInstance``.

        :param character_set_name: Property characterSetName: The character set of the database. For more information, see Character sets.
        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
        :param db_name: Property dbName: The name of the database to be created. The name must comply with the following rules: It must start with a lowercase letter and consist of lowercase letters, digits, hyphens (-), and underscores (_). It must end with a letter or a digit. It can be up to 64 characters in length.
        :param account_name: Property accountName: The name of the database account to be used.
        :param account_privilege: Property accountPrivilege: The permissions of the database account on the database. Valid values: ReadWrite: has read and write permissions on the database. ReadOnly: has the read-only permission on the database. DMLOnly: runs only data manipulation language (DML) statements. DDLOnly: runs only data definition language (DDL) statements. Default value: ReadWrite.
        :param db_description: Property dbDescription: The description of the database. Valid values: It cannot start with http:// or https://. It must be 2 to 256 characters in length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63ca6216b27ec83b3cf890d85738c15ac975b8c965cd6a847f2c0f5803d5b333)
            check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument db_description", value=db_description, expected_type=type_hints["db_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "character_set_name": character_set_name,
            "db_cluster_id": db_cluster_id,
            "db_name": db_name,
        }
        if account_name is not None:
            self._values["account_name"] = account_name
        if account_privilege is not None:
            self._values["account_privilege"] = account_privilege
        if db_description is not None:
            self._values["db_description"] = db_description

    @builtins.property
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property characterSetName: The character set of the database.

        For more information, see Character sets.
        '''
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbName: The name of the database to be created.

        The name must comply with the following rules:
        It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
        (-), and underscores (_).
        It must end with a letter or a digit. It can be up to 64 characters in length.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountName: The name of the database account to be used.'''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountPrivilege: The permissions of the database account on the database.

        Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        '''
        result = self._values.get("account_privilege")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbDescription: The description of the database.

        Valid values:
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        '''
        result = self._values.get("db_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBNodes(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBNodes",
):
    '''A ROS resource type:  ``ALIYUN::POLARDB::DBNodes``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBNodesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBNodes``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__846ca6cee0aa34835326f3a4c868b562b8d4680da49bcc1bcb1ee994cf20020d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNodeIds: The ID list of added cluster nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderIds: The order ID list of added cluster nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DBNodesProps",
    jsii_struct_bases=[],
    name_mapping={
        "amount": "amount",
        "db_cluster_id": "dbClusterId",
        "imci_switch": "imciSwitch",
    },
)
class DBNodesProps:
    def __init__(
        self,
        *,
        amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        imci_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBNodes``.

        :param amount: Property amount: Number of nodes to be added to cluster.
        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        :param imci_switch: Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff474dbfc40a620c637b08605d0663742efa7f649d676f9e88ebe620ce3a217c)
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument imci_switch", value=imci_switch, expected_type=type_hints["imci_switch"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "amount": amount,
            "db_cluster_id": db_cluster_id,
        }
        if imci_switch is not None:
            self._values["imci_switch"] = imci_switch

    @builtins.property
    def amount(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property amount: Number of nodes to be added to cluster.'''
        result = self._values.get("amount")
        assert result is not None, "Required property 'amount' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def imci_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.'''
        result = self._values.get("imci_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBNodesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::POLARDB::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46d8faba00afce1ce243d063c1195e3a67a5845a4697453962d1e39769e4d1a5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__98956f915211dbcf06c26c3bb11992b13e6e071535be475c2e5122af6f10466f)
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
        :Property:

        accountName: The name of the database account. The name must comply with the following rules:

        - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
        - It can be up to 16 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0089c10d055da8714a14323772e98f6e0eb9780aaa2df9beb4ce665b82823111)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountPassword: The password of the database account. The password must comply with the following rules:

        - It must consist of uppercase letters, lowercase letters, digits, and special characters.
        - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        - It must be 8 to 32 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__266282e309e1adcb29a4ba888bcda2f9ab00d076745e14a34d1efac7697755cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93fee325f1e8986375afb8e2e8c14b6cf181b3afb1ed0829a9f018e7d8909b59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3c78771a972ae72fbc740fd69fd3a94eca48ef1183d4a287c6905c1ce9cb19d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountDescription: The description of the database account. The description must comply with the following rules:

        - It cannot start with http:// or https://.
        - It must be 2 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9bdb93a5c1d3f3bf4483c4c4bf1e753624b378f5b9dabeeabbf9520be2c3578)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountDescription", value)

    @builtins.property
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        Separate multiple permissions with a comma (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountPrivilege"))

    @account_privilege.setter
    def account_privilege(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2082cccd8edbeeca8856acaddaffbcae3033f8a73fe5fd0dd6a1419436b5e1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPrivilege", value)

    @builtins.property
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountType: The type of the database account. Valid values:

        - Normal: standard account
        - Super: privileged account
        Default value: Super.
        Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
        You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72dad3afa6224beff37f2e283e90855a1a49bfd97f2564345f8d74363786d41b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountType", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a73f8d86015aba198c02706e3449a59fb4c2d24e744bc523a0fac7476ac72b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)


class RosAccountPrivilege(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosAccountPrivilege",
):
    '''A ROS template type:  ``ALIYUN::POLARDB::AccountPrivilege``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountPrivilegeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::AccountPrivilege``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d1156e484ad1b637497237999cf6537727ed46faa36920a1ae63d9e68b9ecf6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5ca43cba62ba404a66f50a09df614631a59ba1983e0617796b0a74e24c62411d)
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
        :Property: accountName: The name of the database account to be granted access permissions.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77dd23231aa3da54f310b638437512ac946df0e2c4ee69bb78adafd042925c74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:

        - ReadWrite: has read and write permissions on the database.
        - ReadOnly: has the read-only permission on the database.
        - DMLOnly: runs only data manipulation language (DML) statements.
        - DDLOnly: runs only data definition language (DDL) statements.
        The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
        Separate multiple permissions with a comma (,).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountPrivilege"))

    @account_privilege.setter
    def account_privilege(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0b01dafc0245efdaffe822854030372456244852009848e25647dee4872d96b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPrivilege", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3609d0229b5536f2fba7e99af5c20f787c60566dfb6c6d085f4b01b8187b4e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbName: The name of the database whose access permissions are to be granted to the database account.
        You can grant access permissions on one or more databases to the database account.
        Separate multiple databases with a comma (,).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4adfbd9c0f6bab28036965fa6cceb536f066c27cadc3875c3c424433a7a76012)
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
            type_hints = typing.get_type_hints(_typecheckingstub__877c0ec7d58a24d859842600e15a4f4fb9b83e908707aceeec7a57060ca37130)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosAccountPrivilegeProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_privilege": "accountPrivilege",
        "db_cluster_id": "dbClusterId",
        "db_name": "dbName",
    },
)
class RosAccountPrivilegeProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::AccountPrivilege``.

        :param account_name: 
        :param account_privilege: 
        :param db_cluster_id: 
        :param db_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eacc4cdbca581f22aa3d1fa5b8c3be050435ca9d19f359bf4a20cd9c54fff31c)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_cluster_id": db_cluster_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountName: The name of the database account to be granted access permissions.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:

        - ReadWrite: has read and write permissions on the database.
        - ReadOnly: has the read-only permission on the database.
        - DMLOnly: runs only data manipulation language (DML) statements.
        - DDLOnly: runs only data definition language (DDL) statements.
        The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
        Separate multiple permissions with a comma (,).
        '''
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbName: The name of the database whose access permissions are to be granted to the database account.
        You can grant access permissions on one or more databases to the database account.
        Separate multiple databases with a comma (,).
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
    jsii_type="@alicloud/ros-cdk-polardb.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "db_cluster_id": "dbClusterId",
        "account_description": "accountDescription",
        "account_privilege": "accountPrivilege",
        "account_type": "accountType",
        "db_name": "dbName",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::Account``.

        :param account_name: 
        :param account_password: 
        :param db_cluster_id: 
        :param account_description: 
        :param account_privilege: 
        :param account_type: 
        :param db_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98c6ccf29e8cb56261fd0d469ddd2c5c31ccb6c405913fac762e0563458db924)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_cluster_id": db_cluster_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description
        if account_privilege is not None:
            self._values["account_privilege"] = account_privilege
        if account_type is not None:
            self._values["account_type"] = account_type
        if db_name is not None:
            self._values["db_name"] = db_name

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountName: The name of the database account. The name must comply with the following rules:

        - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
        - It can be up to 16 characters in length.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountPassword: The password of the database account. The password must comply with the following rules:

        - It must consist of uppercase letters, lowercase letters, digits, and special characters.
        - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        - It must be 8 to 32 characters in length.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountDescription: The description of the database account. The description must comply with the following rules:

        - It cannot start with http:// or https://.
        - It must be 2 to 256 characters in length.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        Separate multiple permissions with a comma (,).
        '''
        result = self._values.get("account_privilege")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountType: The type of the database account. Valid values:

        - Normal: standard account
        - Super: privileged account
        Default value: Super.
        Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
        You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        '''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBCluster",
):
    '''A ROS template type:  ``ALIYUN::POLARDB::DBCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12ea82206284747c7a13ce00c327e9170b2dea4a7a8cfc2bd19fc3b8c064d383)
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
            type_hints = typing.get_type_hints(_typecheckingstub__06bc618ea85f05749a7df8c27db33d2cbe9ce4057ff39397735bac2aa1019025)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterConnectionString")
    def attr_cluster_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterConnectionString: The cluster connection string of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterEndpointId")
    def attr_cluster_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterEndpointId: The cluster endpoint ID of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomConnectionStrings")
    def attr_custom_connection_strings(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CustomConnectionStrings: The custom connection strings of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomConnectionStrings"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomEndpointIds")
    def attr_custom_endpoint_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CustomEndpointIds: The custom endpoint IDs of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomEndpointIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNodeIds: The ID list of cluster nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The Order ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionString")
    def attr_primary_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrimaryConnectionString: The primary connection string of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionStrings")
    def attr_primary_connection_strings(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrimaryConnectionStrings: The primary connection strings of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryConnectionStrings"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointId")
    def attr_primary_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrimaryEndpointId: The primary endpoint ID of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointIds")
    def attr_primary_endpoint_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryEndpointIds"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbNodeClass")
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbNodeClass"))

    @db_node_class.setter
    def db_node_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9371a021fa14006a79cf45112b2beae98d344912d7df160a8784efdb67dd5cdf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbType")
    def db_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbType: Database type, value:
        MySQL
        PostgreSQL
        Oracle
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbType"))

    @db_type.setter
    def db_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f47b0e1da9fec210de9234568a3380ea0e4b4768a851f611904b111a8cba04dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbType", value)

    @builtins.property
    @jsii.member(jsii_name="dbVersion")
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbVersion: The version of the database. Valid values:
        MySQL: 5.6, 5.7 or 8.0
        PostgreSQL: 11
        Oracle: 11
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbVersion"))

    @db_version.setter
    def db_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb3e8af89a46281c26d68507a4ea34ead6b43050573752a7303f430857ca1fe9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf9f399ccea31ca3c317e8a1e3772f4bdac421aeefe6b9d4e50664c9bf634c07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38321c0fc701c644bb69dc5fed6910484c8d5bfcc7134e8a0bf21da8d69da510)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="allowShutDown")
    def allow_shut_down(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allowShutDown: Whether to turn on No activity pause. The default is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allowShutDown"))

    @allow_shut_down.setter
    def allow_shut_down(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38fc4adb5dd7f7b8841ea0b0292c42e3708aee09a34fe5a34505b949c17891e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allowShutDown", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43fe2d529e96939cafb91e79aba9af88b6a73ecac929ba582d8cf43d1b284d3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="backupRetentionPolicyOnClusterDeletion")
    def backup_retention_policy_on_cluster_deletion(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
        ALL: Keep all backups permanently.
        LATEST: Permanently keep the last backup (automatic backup before deletion).
        NONE: The backup set is not retained when the cluster is deleted.
        When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupRetentionPolicyOnClusterDeletion"))

    @backup_retention_policy_on_cluster_deletion.setter
    def backup_retention_policy_on_cluster_deletion(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2d7ca22fa77500d430d91c6bf01d2d9081b7f8f7ed89cdf6eb59cacc3e87cd0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupRetentionPolicyOnClusterDeletion", value)

    @builtins.property
    @jsii.member(jsii_name="cloneDataPoint")
    def clone_data_point(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloneDataPoint: The time point of data to be cloned. Valid values:
        LATEST: clones data of the latest time point.
        : clones historical backup data. Specify the ID of the specific backup set.
        : clones data of a historical time point. Specify the specific time in
        the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
        Default value: LATEST.
        Note
        This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
        If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cloneDataPoint"))

    @clone_data_point.setter
    def clone_data_point(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__512253f5b316bc73bed8e2b8a1b95cd40a622f75632104e4caaaf4ae6a6be786)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloneDataPoint", value)

    @builtins.property
    @jsii.member(jsii_name="clusterNetworkType")
    def cluster_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterNetworkType"))

    @cluster_network_type.setter
    def cluster_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d82de8a09817a0de35b6c6b0083661c12aca98635b2997f6993ec8975c2b8ce4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="creationCategory")
    def creation_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: creationCategory: Cluster series. The value could be Normal (standard version), Basic and ArchiveNormal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "creationCategory"))

    @creation_category.setter
    def creation_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f92668cf99be4da63e22a07418417897bb669f29e6a433e65ba8597538aa9f3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "creationCategory", value)

    @builtins.property
    @jsii.member(jsii_name="creationOption")
    def creation_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
        Normal: creates an ApsaraDB for POLARDB cluster.
        CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
        CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
        for POLARDB cluster.
        MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
        CreateGdnStandby: Create a secondary cluster.
        Default value: Normal.
        Note:
        When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
        When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "creationOption"))

    @creation_option.setter
    def creation_option(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed6054b6be49aec91895648816102b9585e0b769e6f6996c6eaeee9462226498)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "creationOption", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterDescription")
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbClusterDescription: The description of the cluster. The description must comply with the following rules:
        It must start with a Chinese character or an English letter.
        It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterDescription"))

    @db_cluster_description.setter
    def db_cluster_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5189e4de07eec4d77f78aa27e2a36054a6fcd845386bc71d61190ab569129fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterParameters")
    def db_cluster_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.DBClusterParametersProperty"]]:
        '''
        :Property: dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.DBClusterParametersProperty"]], jsii.get(self, "dbClusterParameters"))

    @db_cluster_parameters.setter
    def db_cluster_parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.DBClusterParametersProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__325550718d49669e7a415b641326824b9545702acccc575304d3e3f07abb283d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterParameters", value)

    @builtins.property
    @jsii.member(jsii_name="defaultTimeZone")
    def default_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
        System:  The default time zone is the same as the time zone where the region is located. This is default value.
        Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        Note: This parameter takes effect only when DBType is MySQL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultTimeZone"))

    @default_time_zone.setter
    def default_time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fc3789eff61e20b49431866ab795725d5ba7f97ea14e8d0f6752537c26ebb34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultTimeZone", value)

    @builtins.property
    @jsii.member(jsii_name="gdnId")
    def gdn_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        gdnId: The ID of the Global Database Network (GDN).
        Note: This parameter is required when the CreationOption is CreateGdnStandby.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gdnId"))

    @gdn_id.setter
    def gdn_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c641645ae2148e02bccaeae0e2c09db604b758bbe743d8adc625f418f1affc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gdnId", value)

    @builtins.property
    @jsii.member(jsii_name="lowerCaseTableNames")
    def lower_case_table_names(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
        1: Not case sensitive0: case sensitive
        The default value is 1.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lowerCaseTableNames"))

    @lower_case_table_names.setter
    def lower_case_table_names(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__409b0f01d04b979f179f53d3397060d8d26068df6b9106033fa8c2ed96ad8c1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lowerCaseTableNames", value)

    @builtins.property
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maintainTime: The maintainable time of the cluster:
        Format: HH: mmZ- HH: mmZ.
        Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maintainTime"))

    @maintain_time.setter
    def maintain_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b74c7f882cbc55d1e12c316ab779cc245effccc19730e0b90a157360dcdbdaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maintainTime", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0cabc50632135247d8c987785f508d5184d2b0d7c0a7da01405932812ded282)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02ca28bb1bc415f3aa4c946fb47f658f24154fdb6f3f19831ea888c3ad3c7e36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: The auto renewal status of the cluster Valid values:
        AutoRenewal: automatically renews the cluster.
        Normal: manually renews the cluster.
        NotRenewal: does not renew the cluster.
        Default value: Normal.
        Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        but only sends an SMS message three days before the cluster expires to remind you
        that the cluster is not renewed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalStatus"))

    @renewal_status.setter
    def renewal_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58bb70287b1c589871d7f62b1ee434094afaeedc207f7ae415a77b14881ef2f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalStatus", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecf46c9ccc0291f03e246f9f37a4fa3fb7ff142ae54cd6361bf0047f4dfd535c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="scaleMax")
    def scale_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scaleMax: Maximum limit of single-node scaling.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scaleMax"))

    @scale_max.setter
    def scale_max(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6466a4a20dd88f351c0d058327c6c34d7a4afac2a03c25ce1aba7abeb2033005)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scaleMax", value)

    @builtins.property
    @jsii.member(jsii_name="scaleMin")
    def scale_min(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scaleMin: Minimum limit of single-node scaling.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scaleMin"))

    @scale_min.setter
    def scale_min(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cce56ca83e6cbf1e40f1ddbf72b5db06717f865d568d829362c86d762f6f177)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scaleMin", value)

    @builtins.property
    @jsii.member(jsii_name="scaleRoNumMax")
    def scale_ro_num_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scaleRoNumMax"))

    @scale_ro_num_max.setter
    def scale_ro_num_max(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24886b91acea1d8a25cd795328fd725c1d4e688bda7deae30627ceac43d07d0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scaleRoNumMax", value)

    @builtins.property
    @jsii.member(jsii_name="scaleRoNumMin")
    def scale_ro_num_min(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scaleRoNumMin"))

    @scale_ro_num_min.setter
    def scale_ro_num_min(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bf179fe9954bd891309a8e8ed46b68640b2bfb5a05d713ed427652b579475f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scaleRoNumMin", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupIds")
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        securityGroupIds: The ID of the security group.
        You can add up to three security groups to a cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "securityGroupIds"))

    @security_group_ids.setter
    def security_group_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a481c4fd11ae134c50f6be088c0ccdb69ac5992b6386010271d624f0a497ab7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupIds", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpList: The whitelist of the Apsara PolarDB cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ddb9947455cad2fa41cb66cc4f7434585ed03ca33747cd17d50fbabba31b888)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="serverlessType")
    def serverless_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serverlessType: Serverless type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serverlessType"))

    @serverless_type.setter
    def serverless_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c9612b4d6083f933f37d48f6960a329aa6565a004c8bdf1d4e3a1f510af0bb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverlessType", value)

    @builtins.property
    @jsii.member(jsii_name="sourceResourceId")
    def source_resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
        Note
        This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        This parameter is required if the CreationOption parameter is not set to Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceResourceId"))

    @source_resource_id.setter
    def source_resource_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3e47c04b45c2836d37355ab4c47ce7e1ba86d9cadf5727f74714d391bafba45)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceResourceId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDBCluster.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosDBCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDBCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e614d0e9ef399b21db1b1788b0bd0e70775934f92658c2d31ccea92b8f2caa11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="tdeStatus")
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tdeStatus"))

    @tde_status.setter
    def tde_status(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fee00f81a8b3d9a60d56a502c91f85340283d1e4fb32588cf3ff86ce488a5174)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tdeStatus", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC to connect to.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9802ebef1a555231b358b34ff0fba88befa7a9c88be4008eb95de63b20910ea2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch to connect to.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c8f9ca28df4ac3841f8ed4d65fd2d41af2ca0d5e1a5301c9b069ec0665793ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc3ac87dc0315eeee89b3b3e22f4f761805cb1659fe4c639486f700e8ea38c11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"effective_time": "effectiveTime", "parameters": "parameters"},
    )
    class DBClusterParametersProperty:
        def __init__(
            self,
            *,
            effective_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param effective_time: 
            :param parameters: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__cfe5940049b45f979f91f3e258ab39e9c83647b2a85871a1a5d0511544fd26ff)
                check_type(argname="argument effective_time", value=effective_time, expected_type=type_hints["effective_time"])
                check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if effective_time is not None:
                self._values["effective_time"] = effective_time
            if parameters is not None:
                self._values["parameters"] = parameters

        @builtins.property
        def effective_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            effectiveTime: The time when the modified values of parameters take effect. Valid values:

            - Auto: The system automatically determines how the modified values of parameters take effect.
            If all the modified values of parameters can take effect without a cluster restart,
            they immediately take effect. If a cluster restart is required to make the modified values
            of some parameters take effect, all of them take effect after a cluster restart
            is performed within the maintenance window.
            - Immediately: If all the modified values of parameters can take effect without a
            cluster restart, the modifications immediately take effect. If a cluster restart is
            required to make the modified values of some parameters take effect,
            the cluster is immediately restarted for the modifications to take effect.
            - MaintainTime: The modified values of parameters take effect within the maintenance window.
            All the modified values of parameters take effect within the maintenance window.
            Default value: Auto.
            '''
            result = self._values.get("effective_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def parameters(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            parameters: The JSON string that consists of parameters and values.
            The parameter values are strings, for example,
            {"auto_increment_increment":"1","character_set_filesystem":"utf8"}.
            You can call the DescribeDBClusterParameters operation to
            view the parameters of the PolarDB cluster.
            '''
            result = self._values.get("parameters")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DBClusterParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-polardb.RosDBCluster.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__8584bedfed8622fc755ec40275c50a2978d432878e48f5c94426962cb63d1ebd)
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


class RosDBClusterAccessWhiteList(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterAccessWhiteList",
):
    '''A ROS template type:  ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterAccessWhiteListProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__151eda2c01b293aa525bc8a319d8ece4425b39fece1cdf6e8a06559009f0d93c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__67bb04e1b8e2303330e4113398d85b3134e98ad216688125a4a5402993829ea3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21d3cd5f11cc7ce80bfaf0358e475639d8a5b774609160101b1dabb402c3a8de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__015a99a0437b40ee7893e1c816c5e8628c96ff633d635f08d4bd5cc60c690454)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="securityIps")
    def security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
        whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
        addresses with a comma (,). The following two formats are supported:
        IP address: for example, 10.23.12.24.
        Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
        suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
        ranges from 1 to 32.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityIps"))

    @security_ips.setter
    def security_ips(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a2d688f33ab445aade3fbd30bc026190d776ac6b3da86bb9f913244aa894d92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIps", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterIpArrayName")
    def db_cluster_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
        the Default whitelist group is modified by default.
        Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterIpArrayName"))

    @db_cluster_ip_array_name.setter
    def db_cluster_ip_array_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d374a961d3df74bff995bb3a1dd9c19100cc4bc769865a609ca7239f91c9b39e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterIpArrayName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterAccessWhiteListProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "security_ips": "securityIps",
        "db_cluster_ip_array_name": "dbClusterIpArrayName",
    },
)
class RosDBClusterAccessWhiteListProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

        :param db_cluster_id: 
        :param security_ips: 
        :param db_cluster_ip_array_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efb658f46c27dc42f4109936ebd61f15bea3e5c5042392d911857f64b10fc999)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument security_ips", value=security_ips, expected_type=type_hints["security_ips"])
            check_type(argname="argument db_cluster_ip_array_name", value=db_cluster_ip_array_name, expected_type=type_hints["db_cluster_ip_array_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "security_ips": security_ips,
        }
        if db_cluster_ip_array_name is not None:
            self._values["db_cluster_ip_array_name"] = db_cluster_ip_array_name

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
        whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
        addresses with a comma (,). The following two formats are supported:
        IP address: for example, 10.23.12.24.
        Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
        suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
        ranges from 1 to 32.
        '''
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_ip_array_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
        the Default whitelist group is modified by default.
        Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        '''
        result = self._values.get("db_cluster_ip_array_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterAccessWhiteListProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBClusterEndpoint(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterEndpoint",
):
    '''A ROS template type:  ``ALIYUN::POLARDB::DBClusterEndpoint``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterEndpointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBClusterEndpoint``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6334b7a1968f6c562ccd243ab810c5f268b28e00e02a0d9361e6815753994d8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ec075be42cca6d3b4ae7157644dbf1c2aa50ec0797686c93e746a1fba22c9b32)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Addresses: The address items of the db cluster endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionString: The first connection string of the db cluster endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbEndpointId")
    def attr_db_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBEndpointId: DB cluster endpoint ID. E.g. pe-xxxxxxxx.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c2e41f6f6145cd442301b65b30d72b403f1ec3cafa912fb284a554e63cc6d77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81c41444657a712bf0dd7f0afb9362ecbfdcc88501f2d5e99d55e0aba56c884f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="autoAddNewNodes")
    def auto_add_new_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
        Valid values: Enable, Disable.
        Default value: Disable.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoAddNewNodes"))

    @auto_add_new_nodes.setter
    def auto_add_new_nodes(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__412e4c6b891408b70f74da27b881429bc75f85572f202cb0eb8d4e773ca9b8a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoAddNewNodes", value)

    @builtins.property
    @jsii.member(jsii_name="endpointConfig")
    def endpoint_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBClusterEndpoint.EndpointConfigProperty"]]:
        '''
        :Property: endpointConfig:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBClusterEndpoint.EndpointConfigProperty"]], jsii.get(self, "endpointConfig"))

    @endpoint_config.setter
    def endpoint_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBClusterEndpoint.EndpointConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__baa2fa2aa9955d5d79ad1540e241ee33ec4fca4138e99ef2f4ca5c4f82fc894d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointConfig", value)

    @builtins.property
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointType: The type of the cluster connection point. Set this parameter to Custom.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointType"))

    @endpoint_type.setter
    def endpoint_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9489fdb8438c8458b6c1b2180d8e658acc39f8a093226ea48e5cfeca76b5d95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointType", value)

    @builtins.property
    @jsii.member(jsii_name="nodes")
    def nodes(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
        If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodes"))

    @nodes.setter
    def nodes(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ca8b1fd7d865753c7d5d03dde210b0c62b7a7ec458085b5247e021740307653)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodes", value)

    @builtins.property
    @jsii.member(jsii_name="readWriteMode")
    def read_write_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        readWriteMode: The read/write mode of the cluster connection point. Valid values:
        ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        ReadOnly: receives and forwards only read requests.
        Default value: ReadOnly.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "readWriteMode"))

    @read_write_mode.setter
    def read_write_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54acbcb7e651b527e08c51d54242b07ca1feaefc69550b20c372d3ebfd092239)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "readWriteMode", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterEndpoint.EndpointConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"consist_level": "consistLevel"},
    )
    class EndpointConfigProperty:
        def __init__(
            self,
            *,
            consist_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param consist_level: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5d1908c39d32169d7232ff9ff0eee0a4a3a6dd75dbf1bb90ac653c9611108a28)
                check_type(argname="argument consist_level", value=consist_level, expected_type=type_hints["consist_level"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if consist_level is not None:
                self._values["consist_level"] = consist_level

        @builtins.property
        def consist_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            consistLevel: The consistency level of the cluster connection point. Valid values:
            0: eventual consistency
            1: session consistency
            For example, {"ConsistLevel": "0"}.
            Note If the ReadWriteMode parameter is set to ReadOnly, the value of this parameter must be 0.
            '''
            result = self._values.get("consist_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EndpointConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDBClusterEndpointAddress(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterEndpointAddress",
):
    '''A ROS template type:  ``ALIYUN::POLARDB::DBClusterEndpointAddress``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterEndpointAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02bf8146c634bf5f307f9c1e09e6bdbe9cdb33944291c8e8c9bb8ba83ddcaae3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7725ee8501d1462659688be6339a2407194018f5d313cc65b4aaa1a97c681d83)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Address: The details of the endpoint address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionString: The connection string of the endpoint address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74dffc61207eda78feae8dfa471f1815930dd6e337675203d7c0e6c5a932b65c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="dbEndpointId")
    def db_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbEndpointId: The ID of the cluster connection point.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbEndpointId"))

    @db_endpoint_id.setter
    def db_endpoint_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b137feef85352a186e56ca0cac80ee80d871015c231e5d90d68f5d3253b572a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbEndpointId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71208cd4d5c1857ba05867464fa5185ce2a5cc90cddc400f90c0ddd144ba6de3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
        It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        The length is 6~30 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba2cd3fcd4d9a3a21f8f45d7bf57a46e1ab3bc9602b64926f5771af6479f1876)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property
    @jsii.member(jsii_name="netType")
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        netType: The network type of the connection string.
        If set to Public, ROS will create, modify and delete Public address for you.
        If set to Private, ROS will only modify Private address for you.
        Default to Public.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "netType"))

    @net_type.setter
    def net_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e685f6984a61dcfbe5f6d60e9a323eb769177bbc042affaec73d7a9526c4a5a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "netType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterEndpointAddressProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "db_endpoint_id": "dbEndpointId",
        "connection_string_prefix": "connectionStringPrefix",
        "net_type": "netType",
    },
)
class RosDBClusterEndpointAddressProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

        :param db_cluster_id: 
        :param db_endpoint_id: 
        :param connection_string_prefix: 
        :param net_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4678e0ae8091add1bfd6cccb2816dfc1954dcbd1d6782c3532074164a8c04fe)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_endpoint_id", value=db_endpoint_id, expected_type=type_hints["db_endpoint_id"])
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "db_endpoint_id": db_endpoint_id,
        }
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if net_type is not None:
            self._values["net_type"] = net_type

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbEndpointId: The ID of the cluster connection point.
        '''
        result = self._values.get("db_endpoint_id")
        assert result is not None, "Required property 'db_endpoint_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
        It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        The length is 6~30 characters.
        '''
        result = self._values.get("connection_string_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        netType: The network type of the connection string.
        If set to Public, ROS will create, modify and delete Public address for you.
        If set to Private, ROS will only modify Private address for you.
        Default to Public.
        '''
        result = self._values.get("net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterEndpointAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "auto_add_new_nodes": "autoAddNewNodes",
        "endpoint_config": "endpointConfig",
        "endpoint_type": "endpointType",
        "nodes": "nodes",
        "read_write_mode": "readWriteMode",
    },
)
class RosDBClusterEndpointProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_add_new_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBClusterEndpoint.EndpointConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nodes: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        read_write_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBClusterEndpoint``.

        :param db_cluster_id: 
        :param auto_add_new_nodes: 
        :param endpoint_config: 
        :param endpoint_type: 
        :param nodes: 
        :param read_write_mode: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adebf97787f843f362f4403c691698e459d5a062b7eea91f32330f97a22dac8e)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument auto_add_new_nodes", value=auto_add_new_nodes, expected_type=type_hints["auto_add_new_nodes"])
            check_type(argname="argument endpoint_config", value=endpoint_config, expected_type=type_hints["endpoint_config"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument nodes", value=nodes, expected_type=type_hints["nodes"])
            check_type(argname="argument read_write_mode", value=read_write_mode, expected_type=type_hints["read_write_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
        }
        if auto_add_new_nodes is not None:
            self._values["auto_add_new_nodes"] = auto_add_new_nodes
        if endpoint_config is not None:
            self._values["endpoint_config"] = endpoint_config
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if nodes is not None:
            self._values["nodes"] = nodes
        if read_write_mode is not None:
            self._values["read_write_mode"] = read_write_mode

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_add_new_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
        Valid values: Enable, Disable.
        Default value: Disable.
        '''
        result = self._values.get("auto_add_new_nodes")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBClusterEndpoint.EndpointConfigProperty]]:
        '''
        :Property: endpointConfig:
        '''
        result = self._values.get("endpoint_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBClusterEndpoint.EndpointConfigProperty]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointType: The type of the cluster connection point. Set this parameter to Custom.
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nodes(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
        If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        '''
        result = self._values.get("nodes")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def read_write_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        readWriteMode: The read/write mode of the cluster connection point. Valid values:
        ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        ReadOnly: receives and forwards only read requests.
        Default value: ReadOnly.
        '''
        result = self._values.get("read_write_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_node_class": "dbNodeClass",
        "db_type": "dbType",
        "db_version": "dbVersion",
        "pay_type": "payType",
        "allow_shut_down": "allowShutDown",
        "auto_renew_period": "autoRenewPeriod",
        "backup_retention_policy_on_cluster_deletion": "backupRetentionPolicyOnClusterDeletion",
        "clone_data_point": "cloneDataPoint",
        "cluster_network_type": "clusterNetworkType",
        "creation_category": "creationCategory",
        "creation_option": "creationOption",
        "db_cluster_description": "dbClusterDescription",
        "db_cluster_parameters": "dbClusterParameters",
        "default_time_zone": "defaultTimeZone",
        "gdn_id": "gdnId",
        "lower_case_table_names": "lowerCaseTableNames",
        "maintain_time": "maintainTime",
        "period": "period",
        "period_unit": "periodUnit",
        "renewal_status": "renewalStatus",
        "resource_group_id": "resourceGroupId",
        "scale_max": "scaleMax",
        "scale_min": "scaleMin",
        "scale_ro_num_max": "scaleRoNumMax",
        "scale_ro_num_min": "scaleRoNumMin",
        "security_group_ids": "securityGroupIds",
        "security_ip_list": "securityIpList",
        "serverless_type": "serverlessType",
        "source_resource_id": "sourceResourceId",
        "tags": "tags",
        "tde_status": "tdeStatus",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosDBClusterProps:
    def __init__(
        self,
        *,
        db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allow_shut_down: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        clone_data_point: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        creation_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        creation_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.DBClusterParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        default_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lower_case_table_names: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_ro_num_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_ro_num_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBCluster``.

        :param db_node_class: 
        :param db_type: 
        :param db_version: 
        :param pay_type: 
        :param allow_shut_down: 
        :param auto_renew_period: 
        :param backup_retention_policy_on_cluster_deletion: 
        :param clone_data_point: 
        :param cluster_network_type: 
        :param creation_category: 
        :param creation_option: 
        :param db_cluster_description: 
        :param db_cluster_parameters: 
        :param default_time_zone: 
        :param gdn_id: 
        :param lower_case_table_names: 
        :param maintain_time: 
        :param period: 
        :param period_unit: 
        :param renewal_status: 
        :param resource_group_id: 
        :param scale_max: 
        :param scale_min: 
        :param scale_ro_num_max: 
        :param scale_ro_num_min: 
        :param security_group_ids: 
        :param security_ip_list: 
        :param serverless_type: 
        :param source_resource_id: 
        :param tags: 
        :param tde_status: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1a29ac9d8da911ae2f0a43d553d0964b9d91bbe9d9ece299cfcf4d4da2ca481)
            check_type(argname="argument db_node_class", value=db_node_class, expected_type=type_hints["db_node_class"])
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument allow_shut_down", value=allow_shut_down, expected_type=type_hints["allow_shut_down"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument backup_retention_policy_on_cluster_deletion", value=backup_retention_policy_on_cluster_deletion, expected_type=type_hints["backup_retention_policy_on_cluster_deletion"])
            check_type(argname="argument clone_data_point", value=clone_data_point, expected_type=type_hints["clone_data_point"])
            check_type(argname="argument cluster_network_type", value=cluster_network_type, expected_type=type_hints["cluster_network_type"])
            check_type(argname="argument creation_category", value=creation_category, expected_type=type_hints["creation_category"])
            check_type(argname="argument creation_option", value=creation_option, expected_type=type_hints["creation_option"])
            check_type(argname="argument db_cluster_description", value=db_cluster_description, expected_type=type_hints["db_cluster_description"])
            check_type(argname="argument db_cluster_parameters", value=db_cluster_parameters, expected_type=type_hints["db_cluster_parameters"])
            check_type(argname="argument default_time_zone", value=default_time_zone, expected_type=type_hints["default_time_zone"])
            check_type(argname="argument gdn_id", value=gdn_id, expected_type=type_hints["gdn_id"])
            check_type(argname="argument lower_case_table_names", value=lower_case_table_names, expected_type=type_hints["lower_case_table_names"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scale_max", value=scale_max, expected_type=type_hints["scale_max"])
            check_type(argname="argument scale_min", value=scale_min, expected_type=type_hints["scale_min"])
            check_type(argname="argument scale_ro_num_max", value=scale_ro_num_max, expected_type=type_hints["scale_ro_num_max"])
            check_type(argname="argument scale_ro_num_min", value=scale_ro_num_min, expected_type=type_hints["scale_ro_num_min"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument serverless_type", value=serverless_type, expected_type=type_hints["serverless_type"])
            check_type(argname="argument source_resource_id", value=source_resource_id, expected_type=type_hints["source_resource_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tde_status", value=tde_status, expected_type=type_hints["tde_status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_node_class": db_node_class,
            "db_type": db_type,
            "db_version": db_version,
            "pay_type": pay_type,
        }
        if allow_shut_down is not None:
            self._values["allow_shut_down"] = allow_shut_down
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if backup_retention_policy_on_cluster_deletion is not None:
            self._values["backup_retention_policy_on_cluster_deletion"] = backup_retention_policy_on_cluster_deletion
        if clone_data_point is not None:
            self._values["clone_data_point"] = clone_data_point
        if cluster_network_type is not None:
            self._values["cluster_network_type"] = cluster_network_type
        if creation_category is not None:
            self._values["creation_category"] = creation_category
        if creation_option is not None:
            self._values["creation_option"] = creation_option
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if db_cluster_parameters is not None:
            self._values["db_cluster_parameters"] = db_cluster_parameters
        if default_time_zone is not None:
            self._values["default_time_zone"] = default_time_zone
        if gdn_id is not None:
            self._values["gdn_id"] = gdn_id
        if lower_case_table_names is not None:
            self._values["lower_case_table_names"] = lower_case_table_names
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scale_max is not None:
            self._values["scale_max"] = scale_max
        if scale_min is not None:
            self._values["scale_min"] = scale_min
        if scale_ro_num_max is not None:
            self._values["scale_ro_num_max"] = scale_ro_num_max
        if scale_ro_num_min is not None:
            self._values["scale_ro_num_min"] = scale_ro_num_min
        if security_group_ids is not None:
            self._values["security_group_ids"] = security_group_ids
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if serverless_type is not None:
            self._values["serverless_type"] = serverless_type
        if source_resource_id is not None:
            self._values["source_resource_id"] = source_resource_id
        if tags is not None:
            self._values["tags"] = tags
        if tde_status is not None:
            self._values["tde_status"] = tde_status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
        '''
        result = self._values.get("db_node_class")
        assert result is not None, "Required property 'db_node_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbType: Database type, value:
        MySQL
        PostgreSQL
        Oracle
        '''
        result = self._values.get("db_type")
        assert result is not None, "Required property 'db_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbVersion: The version of the database. Valid values:
        MySQL: 5.6, 5.7 or 8.0
        PostgreSQL: 11
        Oracle: 11
        '''
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allow_shut_down(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allowShutDown: Whether to turn on No activity pause. The default is false.
        '''
        result = self._values.get("allow_shut_down")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_retention_policy_on_cluster_deletion(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
        ALL: Keep all backups permanently.
        LATEST: Permanently keep the last backup (automatic backup before deletion).
        NONE: The backup set is not retained when the cluster is deleted.
        When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        '''
        result = self._values.get("backup_retention_policy_on_cluster_deletion")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def clone_data_point(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloneDataPoint: The time point of data to be cloned. Valid values:
        LATEST: clones data of the latest time point.
        : clones historical backup data. Specify the ID of the specific backup set.
        : clones data of a historical time point. Specify the specific time in
        the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
        Default value: LATEST.
        Note
        This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
        If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
        '''
        result = self._values.get("clone_data_point")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
        '''
        result = self._values.get("cluster_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def creation_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: creationCategory: Cluster series. The value could be Normal (standard version), Basic and ArchiveNormal.
        '''
        result = self._values.get("creation_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def creation_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
        Normal: creates an ApsaraDB for POLARDB cluster.
        CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
        CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
        for POLARDB cluster.
        MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
        CreateGdnStandby: Create a secondary cluster.
        Default value: Normal.
        Note:
        When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
        When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
        '''
        result = self._values.get("creation_option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbClusterDescription: The description of the cluster. The description must comply with the following rules:
        It must start with a Chinese character or an English letter.
        It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        '''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBCluster.DBClusterParametersProperty]]:
        '''
        :Property: dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
        '''
        result = self._values.get("db_cluster_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBCluster.DBClusterParametersProperty]], result)

    @builtins.property
    def default_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
        System:  The default time zone is the same as the time zone where the region is located. This is default value.
        Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        Note: This parameter takes effect only when DBType is MySQL.
        '''
        result = self._values.get("default_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gdn_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        gdnId: The ID of the Global Database Network (GDN).
        Note: This parameter is required when the CreationOption is CreateGdnStandby.
        '''
        result = self._values.get("gdn_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lower_case_table_names(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
        1: Not case sensitive0: case sensitive
        The default value is 1.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        '''
        result = self._values.get("lower_case_table_names")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintain_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maintainTime: The maintainable time of the cluster:
        Format: HH: mmZ- HH: mmZ.
        Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        '''
        result = self._values.get("maintain_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: The auto renewal status of the cluster Valid values:
        AutoRenewal: automatically renews the cluster.
        Normal: manually renews the cluster.
        NotRenewal: does not renew the cluster.
        Default value: Normal.
        Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        but only sends an SMS message three days before the cluster expires to remind you
        that the cluster is not renewed.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scaleMax: Maximum limit of single-node scaling.
        '''
        result = self._values.get("scale_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_min(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scaleMin: Minimum limit of single-node scaling.
        '''
        result = self._values.get("scale_min")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_ro_num_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
        '''
        result = self._values.get("scale_ro_num_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_ro_num_min(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
        '''
        result = self._values.get("scale_ro_num_min")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        securityGroupIds: The ID of the security group.
        You can add up to three security groups to a cluster.
        '''
        result = self._values.get("security_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpList: The whitelist of the Apsara PolarDB cluster.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def serverless_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serverlessType: Serverless type.
        '''
        result = self._values.get("serverless_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
        Note
        This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        This parameter is required if the CreationOption parameter is not set to Normal.
        '''
        result = self._values.get("source_resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDBCluster.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDBCluster.TagsProperty]], result)

    @builtins.property
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        '''
        result = self._values.get("tde_status")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC to connect to.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch to connect to.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBInstance",
):
    '''A ROS template type:  ``ALIYUN::POLARDB::DBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bad70a10c5d0a7ba07bfcbe6ec6de98c1dc7aa24631560454e2c3a0f5187a41e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6364b7e78bcbdf4b6e7b2b8d71ff78ddef00444dc9b7483895530166822a622c)
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
    @jsii.member(jsii_name="characterSetName")
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: characterSetName: The character set of the database. For more information, see Character sets.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "characterSetName"))

    @character_set_name.setter
    def character_set_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8821c2621f18b9bd13ff36aa43ba1b3b5b35fe4ed5a0b61d972174402b8eb4d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "characterSetName", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f741d82a323d31a6becaae77319c477d4cdd3e5c8099364d3ac68371b8facd29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbName: The name of the database to be created. The name must comply with the following rules:
        It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
        (-), and underscores (_).
        It must end with a letter or a digit. It can be up to 64 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b362dac2fa09ad4d1b7b99f7a01cf5996368b096e47b454cd28f8a9b6b9bb309)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8cdff9072b188aea813a7dcc3e66925bccd5827d6ba461fb9e2387c6bef6c314)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: The name of the database account to be used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08899314c152017003c3e80a264261ec005dbd3cd37d0eb4031e76c1794a6427)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountPrivilege"))

    @account_privilege.setter
    def account_privilege(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35ed87aca37c0a2da8747e0e8efbaa0ad2154257f59eefbb21e025cdd5c5fc30)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPrivilege", value)

    @builtins.property
    @jsii.member(jsii_name="dbDescription")
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbDescription: The description of the database. Valid values:
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbDescription"))

    @db_description.setter
    def db_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89fc040ce07533bcc573a931d56a3e53ea7f2c4449b957612acd35d3d90127db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbDescription", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "character_set_name": "characterSetName",
        "db_cluster_id": "dbClusterId",
        "db_name": "dbName",
        "account_name": "accountName",
        "account_privilege": "accountPrivilege",
        "db_description": "dbDescription",
    },
)
class RosDBInstanceProps:
    def __init__(
        self,
        *,
        character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBInstance``.

        :param character_set_name: 
        :param db_cluster_id: 
        :param db_name: 
        :param account_name: 
        :param account_privilege: 
        :param db_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e16a03bbb102b5a03adc5fc8a09aaf88924beded796cb9a8803dfe5e1fcd6d9d)
            check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument db_description", value=db_description, expected_type=type_hints["db_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "character_set_name": character_set_name,
            "db_cluster_id": db_cluster_id,
            "db_name": db_name,
        }
        if account_name is not None:
            self._values["account_name"] = account_name
        if account_privilege is not None:
            self._values["account_privilege"] = account_privilege
        if db_description is not None:
            self._values["db_description"] = db_description

    @builtins.property
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: characterSetName: The character set of the database. For more information, see Character sets.
        '''
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbName: The name of the database to be created. The name must comply with the following rules:
        It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
        (-), and underscores (_).
        It must end with a letter or a digit. It can be up to 64 characters in length.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: The name of the database account to be used.
        '''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        '''
        result = self._values.get("account_privilege")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbDescription: The description of the database. Valid values:
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        '''
        result = self._values.get("db_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBNodes(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBNodes",
):
    '''A ROS template type:  ``ALIYUN::POLARDB::DBNodes``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBNodesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::POLARDB::DBNodes``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5038077e6e7b2f874a2d6c2fa866f0bbd868e5ecccf2092e2aec0678c373eeb8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__35404b4e2ed1bd56f9a64b3d1f87804cd88c3adb1b3840e15620404ce68466a2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNodeIds: The ID list of added cluster nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderIds: The order ID list of added cluster nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderIds"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="amount")
    def amount(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: amount: Number of nodes to be added to cluster.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "amount"))

    @amount.setter
    def amount(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8bc7ba5a8a1539c8f51c62deebaf08cc93286f9dd66afa84a847d37903b7e9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "amount", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cea4f42d20aa76580b49ff3ec92178442567a387f986712945870de57f2eaca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af783240f2828b6ec0d7764b36ee89d2360ea2669586e02762ed2caa80d95c37)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imciSwitch")
    def imci_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imciSwitch"))

    @imci_switch.setter
    def imci_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c19b3d396c35d4773a22b1a29a2e098d9268d7430582f4476b7b46366f1f4804)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imciSwitch", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDBNodesProps",
    jsii_struct_bases=[],
    name_mapping={
        "amount": "amount",
        "db_cluster_id": "dbClusterId",
        "imci_switch": "imciSwitch",
    },
)
class RosDBNodesProps:
    def __init__(
        self,
        *,
        amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        imci_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::POLARDB::DBNodes``.

        :param amount: 
        :param db_cluster_id: 
        :param imci_switch: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30ccd73541575440357dfbfaf46c8726ff957365d80870e75a0599bace78e3d1)
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument imci_switch", value=imci_switch, expected_type=type_hints["imci_switch"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "amount": amount,
            "db_cluster_id": db_cluster_id,
        }
        if imci_switch is not None:
            self._values["imci_switch"] = imci_switch

    @builtins.property
    def amount(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: amount: Number of nodes to be added to cluster.
        '''
        result = self._values.get("amount")
        assert result is not None, "Required property 'amount' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def imci_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
        '''
        result = self._values.get("imci_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBNodesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Account",
    "AccountPrivilege",
    "AccountPrivilegeProps",
    "AccountProps",
    "DBCluster",
    "DBClusterAccessWhiteList",
    "DBClusterAccessWhiteListProps",
    "DBClusterEndpoint",
    "DBClusterEndpointAddress",
    "DBClusterEndpointAddressProps",
    "DBClusterEndpointProps",
    "DBClusterProps",
    "DBInstance",
    "DBInstanceProps",
    "DBNodes",
    "DBNodesProps",
    "RosAccount",
    "RosAccountPrivilege",
    "RosAccountPrivilegeProps",
    "RosAccountProps",
    "RosDBCluster",
    "RosDBClusterAccessWhiteList",
    "RosDBClusterAccessWhiteListProps",
    "RosDBClusterEndpoint",
    "RosDBClusterEndpointAddress",
    "RosDBClusterEndpointAddressProps",
    "RosDBClusterEndpointProps",
    "RosDBClusterProps",
    "RosDBInstance",
    "RosDBInstanceProps",
    "RosDBNodes",
    "RosDBNodesProps",
]

publication.publish()

def _typecheckingstub__5a03a44313de523810a255d0b788e0f1b02a2cadde7fe43c88f886598635b042(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c040f43af7e166dd9852266ac401d3afd78f38a4f9642f7b55e1802cb28979d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountPrivilegeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__372ecfe0a1d9a1988a6736a9a5e32116dc0498c6d300192244f0749803770d5f(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__329c955f970e27553be9d2b08b609bf0b32f6debfaf4e838167a94708eacbcb0(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__950fed24d51c22a326c1f6fefaf64ce68a5fe2c6787a8e0c4251c5e1f6321214(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbb9ec71224c75c9b6e8be7a5d72542da4916a257ab71270fa1dbc717c73767b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBClusterAccessWhiteListProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f05f65c7ff60d65538853eeecc168e498fea7e4903e0fa222f4122782bdd3765(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9684af1dc4952bced8d37b8117a3a6f91cc8e4da169b3c7969fe9e4efa773e60(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBClusterEndpointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49390d07e2c0fb3a643c754bdf1719d212242fb0e504a706f63b2a7e83ee8d84(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBClusterEndpointAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c93b160859f501435271f8a96d9c0a977b3a279a40c915381024a205944473b1(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5ef7b6ccd5697f337395b07e1a41475c4a59e5982c03cbb40634627d160567a(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_add_new_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBClusterEndpoint.EndpointConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nodes: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    read_write_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7345bba0f4e8821add574486f552159483056d740a1ef997ebfb84fe07e51682(
    *,
    db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allow_shut_down: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    clone_data_point: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    creation_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    creation_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.DBClusterParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    default_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lower_case_table_names: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_ro_num_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_ro_num_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bbfd3fb9ce03274362d5bd135065b6eb7a01305a2ab6663c965f56672c17c74(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63ca6216b27ec83b3cf890d85738c15ac975b8c965cd6a847f2c0f5803d5b333(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__846ca6cee0aa34835326f3a4c868b562b8d4680da49bcc1bcb1ee994cf20020d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBNodesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff474dbfc40a620c637b08605d0663742efa7f649d676f9e88ebe620ce3a217c(
    *,
    amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    imci_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46d8faba00afce1ce243d063c1195e3a67a5845a4697453962d1e39769e4d1a5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98956f915211dbcf06c26c3bb11992b13e6e071535be475c2e5122af6f10466f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0089c10d055da8714a14323772e98f6e0eb9780aaa2df9beb4ce665b82823111(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__266282e309e1adcb29a4ba888bcda2f9ab00d076745e14a34d1efac7697755cb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93fee325f1e8986375afb8e2e8c14b6cf181b3afb1ed0829a9f018e7d8909b59(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3c78771a972ae72fbc740fd69fd3a94eca48ef1183d4a287c6905c1ce9cb19d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9bdb93a5c1d3f3bf4483c4c4bf1e753624b378f5b9dabeeabbf9520be2c3578(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2082cccd8edbeeca8856acaddaffbcae3033f8a73fe5fd0dd6a1419436b5e1c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72dad3afa6224beff37f2e283e90855a1a49bfd97f2564345f8d74363786d41b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a73f8d86015aba198c02706e3449a59fb4c2d24e744bc523a0fac7476ac72b8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d1156e484ad1b637497237999cf6537727ed46faa36920a1ae63d9e68b9ecf6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountPrivilegeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ca43cba62ba404a66f50a09df614631a59ba1983e0617796b0a74e24c62411d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77dd23231aa3da54f310b638437512ac946df0e2c4ee69bb78adafd042925c74(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0b01dafc0245efdaffe822854030372456244852009848e25647dee4872d96b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3609d0229b5536f2fba7e99af5c20f787c60566dfb6c6d085f4b01b8187b4e4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4adfbd9c0f6bab28036965fa6cceb536f066c27cadc3875c3c424433a7a76012(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__877c0ec7d58a24d859842600e15a4f4fb9b83e908707aceeec7a57060ca37130(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eacc4cdbca581f22aa3d1fa5b8c3be050435ca9d19f359bf4a20cd9c54fff31c(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98c6ccf29e8cb56261fd0d469ddd2c5c31ccb6c405913fac762e0563458db924(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12ea82206284747c7a13ce00c327e9170b2dea4a7a8cfc2bd19fc3b8c064d383(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06bc618ea85f05749a7df8c27db33d2cbe9ce4057ff39397735bac2aa1019025(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9371a021fa14006a79cf45112b2beae98d344912d7df160a8784efdb67dd5cdf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f47b0e1da9fec210de9234568a3380ea0e4b4768a851f611904b111a8cba04dd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb3e8af89a46281c26d68507a4ea34ead6b43050573752a7303f430857ca1fe9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf9f399ccea31ca3c317e8a1e3772f4bdac421aeefe6b9d4e50664c9bf634c07(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38321c0fc701c644bb69dc5fed6910484c8d5bfcc7134e8a0bf21da8d69da510(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38fc4adb5dd7f7b8841ea0b0292c42e3708aee09a34fe5a34505b949c17891e9(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43fe2d529e96939cafb91e79aba9af88b6a73ecac929ba582d8cf43d1b284d3b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2d7ca22fa77500d430d91c6bf01d2d9081b7f8f7ed89cdf6eb59cacc3e87cd0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__512253f5b316bc73bed8e2b8a1b95cd40a622f75632104e4caaaf4ae6a6be786(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d82de8a09817a0de35b6c6b0083661c12aca98635b2997f6993ec8975c2b8ce4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f92668cf99be4da63e22a07418417897bb669f29e6a433e65ba8597538aa9f3d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed6054b6be49aec91895648816102b9585e0b769e6f6996c6eaeee9462226498(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5189e4de07eec4d77f78aa27e2a36054a6fcd845386bc71d61190ab569129fd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__325550718d49669e7a415b641326824b9545702acccc575304d3e3f07abb283d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBCluster.DBClusterParametersProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fc3789eff61e20b49431866ab795725d5ba7f97ea14e8d0f6752537c26ebb34(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c641645ae2148e02bccaeae0e2c09db604b758bbe743d8adc625f418f1affc7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__409b0f01d04b979f179f53d3397060d8d26068df6b9106033fa8c2ed96ad8c1e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b74c7f882cbc55d1e12c316ab779cc245effccc19730e0b90a157360dcdbdaf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0cabc50632135247d8c987785f508d5184d2b0d7c0a7da01405932812ded282(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02ca28bb1bc415f3aa4c946fb47f658f24154fdb6f3f19831ea888c3ad3c7e36(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58bb70287b1c589871d7f62b1ee434094afaeedc207f7ae415a77b14881ef2f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecf46c9ccc0291f03e246f9f37a4fa3fb7ff142ae54cd6361bf0047f4dfd535c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6466a4a20dd88f351c0d058327c6c34d7a4afac2a03c25ce1aba7abeb2033005(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cce56ca83e6cbf1e40f1ddbf72b5db06717f865d568d829362c86d762f6f177(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24886b91acea1d8a25cd795328fd725c1d4e688bda7deae30627ceac43d07d0e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bf179fe9954bd891309a8e8ed46b68640b2bfb5a05d713ed427652b579475f9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a481c4fd11ae134c50f6be088c0ccdb69ac5992b6386010271d624f0a497ab7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ddb9947455cad2fa41cb66cc4f7434585ed03ca33747cd17d50fbabba31b888(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c9612b4d6083f933f37d48f6960a329aa6565a004c8bdf1d4e3a1f510af0bb1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3e47c04b45c2836d37355ab4c47ce7e1ba86d9cadf5727f74714d391bafba45(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e614d0e9ef399b21db1b1788b0bd0e70775934f92658c2d31ccea92b8f2caa11(
    value: typing.Optional[typing.List[RosDBCluster.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fee00f81a8b3d9a60d56a502c91f85340283d1e4fb32588cf3ff86ce488a5174(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9802ebef1a555231b358b34ff0fba88befa7a9c88be4008eb95de63b20910ea2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c8f9ca28df4ac3841f8ed4d65fd2d41af2ca0d5e1a5301c9b069ec0665793ad(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc3ac87dc0315eeee89b3b3e22f4f761805cb1659fe4c639486f700e8ea38c11(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfe5940049b45f979f91f3e258ab39e9c83647b2a85871a1a5d0511544fd26ff(
    *,
    effective_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8584bedfed8622fc755ec40275c50a2978d432878e48f5c94426962cb63d1ebd(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__151eda2c01b293aa525bc8a319d8ece4425b39fece1cdf6e8a06559009f0d93c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClusterAccessWhiteListProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67bb04e1b8e2303330e4113398d85b3134e98ad216688125a4a5402993829ea3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21d3cd5f11cc7ce80bfaf0358e475639d8a5b774609160101b1dabb402c3a8de(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__015a99a0437b40ee7893e1c816c5e8628c96ff633d635f08d4bd5cc60c690454(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a2d688f33ab445aade3fbd30bc026190d776ac6b3da86bb9f913244aa894d92(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d374a961d3df74bff995bb3a1dd9c19100cc4bc769865a609ca7239f91c9b39e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efb658f46c27dc42f4109936ebd61f15bea3e5c5042392d911857f64b10fc999(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_ip_array_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6334b7a1968f6c562ccd243ab810c5f268b28e00e02a0d9361e6815753994d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClusterEndpointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec075be42cca6d3b4ae7157644dbf1c2aa50ec0797686c93e746a1fba22c9b32(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c2e41f6f6145cd442301b65b30d72b403f1ec3cafa912fb284a554e63cc6d77(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81c41444657a712bf0dd7f0afb9362ecbfdcc88501f2d5e99d55e0aba56c884f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__412e4c6b891408b70f74da27b881429bc75f85572f202cb0eb8d4e773ca9b8a3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__baa2fa2aa9955d5d79ad1540e241ee33ec4fca4138e99ef2f4ca5c4f82fc894d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBClusterEndpoint.EndpointConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9489fdb8438c8458b6c1b2180d8e658acc39f8a093226ea48e5cfeca76b5d95(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ca8b1fd7d865753c7d5d03dde210b0c62b7a7ec458085b5247e021740307653(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54acbcb7e651b527e08c51d54242b07ca1feaefc69550b20c372d3ebfd092239(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d1908c39d32169d7232ff9ff0eee0a4a3a6dd75dbf1bb90ac653c9611108a28(
    *,
    consist_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02bf8146c634bf5f307f9c1e09e6bdbe9cdb33944291c8e8c9bb8ba83ddcaae3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClusterEndpointAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7725ee8501d1462659688be6339a2407194018f5d313cc65b4aaa1a97c681d83(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74dffc61207eda78feae8dfa471f1815930dd6e337675203d7c0e6c5a932b65c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b137feef85352a186e56ca0cac80ee80d871015c231e5d90d68f5d3253b572a9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71208cd4d5c1857ba05867464fa5185ce2a5cc90cddc400f90c0ddd144ba6de3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba2cd3fcd4d9a3a21f8f45d7bf57a46e1ab3bc9602b64926f5771af6479f1876(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e685f6984a61dcfbe5f6d60e9a323eb769177bbc042affaec73d7a9526c4a5a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4678e0ae8091add1bfd6cccb2816dfc1954dcbd1d6782c3532074164a8c04fe(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adebf97787f843f362f4403c691698e459d5a062b7eea91f32330f97a22dac8e(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_add_new_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBClusterEndpoint.EndpointConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nodes: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    read_write_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1a29ac9d8da911ae2f0a43d553d0964b9d91bbe9d9ece299cfcf4d4da2ca481(
    *,
    db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allow_shut_down: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    clone_data_point: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    creation_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    creation_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.DBClusterParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    default_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lower_case_table_names: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_ro_num_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_ro_num_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bad70a10c5d0a7ba07bfcbe6ec6de98c1dc7aa24631560454e2c3a0f5187a41e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6364b7e78bcbdf4b6e7b2b8d71ff78ddef00444dc9b7483895530166822a622c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8821c2621f18b9bd13ff36aa43ba1b3b5b35fe4ed5a0b61d972174402b8eb4d2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f741d82a323d31a6becaae77319c477d4cdd3e5c8099364d3ac68371b8facd29(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b362dac2fa09ad4d1b7b99f7a01cf5996368b096e47b454cd28f8a9b6b9bb309(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cdff9072b188aea813a7dcc3e66925bccd5827d6ba461fb9e2387c6bef6c314(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08899314c152017003c3e80a264261ec005dbd3cd37d0eb4031e76c1794a6427(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35ed87aca37c0a2da8747e0e8efbaa0ad2154257f59eefbb21e025cdd5c5fc30(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89fc040ce07533bcc573a931d56a3e53ea7f2c4449b957612acd35d3d90127db(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e16a03bbb102b5a03adc5fc8a09aaf88924beded796cb9a8803dfe5e1fcd6d9d(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5038077e6e7b2f874a2d6c2fa866f0bbd868e5ecccf2092e2aec0678c373eeb8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBNodesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35404b4e2ed1bd56f9a64b3d1f87804cd88c3adb1b3840e15620404ce68466a2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8bc7ba5a8a1539c8f51c62deebaf08cc93286f9dd66afa84a847d37903b7e9f(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cea4f42d20aa76580b49ff3ec92178442567a387f986712945870de57f2eaca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af783240f2828b6ec0d7764b36ee89d2360ea2669586e02762ed2caa80d95c37(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c19b3d396c35d4773a22b1a29a2e098d9268d7430582f4476b7b46366f1f4804(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30ccd73541575440357dfbfaf46c8726ff957365d80870e75a0599bace78e3d1(
    *,
    amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    imci_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
