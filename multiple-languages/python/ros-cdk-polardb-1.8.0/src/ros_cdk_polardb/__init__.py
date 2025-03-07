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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.AITaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "password": "password",
        "username": "username",
        "node_type": "nodeType",
    },
)
class AITaskProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AITask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask

        :param db_cluster_id: Property dbClusterId: The ID of the DB cluster.
        :param password: Property password: The password of the database account that enables the PolarDB for AI function is required.
        :param username: Property username: The database account that enables the PolarDB for AI function is required.
        :param node_type: Property nodeType: The type of the node. Valid values: DLNode: AI node(default). SearchNode: Search ai node.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f5ffc77d1a8fc10b101b8bf35f6f8338c6ca5ffabb8f11754b717a1ab9ae847)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument node_type", value=node_type, expected_type=type_hints["node_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "password": password,
            "username": username,
        }
        if node_type is not None:
            self._values["node_type"] = node_type

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the DB cluster.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property password: The password of the database account that enables the PolarDB for AI function is required.'''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property username: The database account that enables the PolarDB for AI function is required.'''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodeType: The type of the node.

        Valid values:
        DLNode: AI node(default).
        SearchNode: Search ai node.
        '''
        result = self._values.get("node_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AITaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


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
        '''Properties for defining a ``AccountPrivilege``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege

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
        "priv_for_all_db": "privForAllDb",
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
        priv_for_all_db: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Account``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account

        :param account_name: Property accountName: The name of the database account. The name must comply with the following rules: - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_). - It can be up to 16 characters in length.
        :param account_password: Property accountPassword: The password of the database account. The password must comply with the following rules: - It must consist of uppercase letters, lowercase letters, digits, and special characters. - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=). - It must be 8 to 32 characters in length.
        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        :param account_description: Property accountDescription: The description of the database account. The description must comply with the following rules: - It cannot start with http:// or https://. - It must be 2 to 256 characters in length.
        :param account_privilege: Property accountPrivilege: The permissions of the database account on the database. Valid values: ReadWrite: has read and write permissions on the database. ReadOnly: has the read-only permission on the database. DMLOnly: runs only data manipulation language (DML) statements. DDLOnly: runs only data definition language (DDL) statements. ReadIndex: has read and index permissions on the database. Default value: ReadWrite. Separate multiple permissions with a comma (,).
        :param account_type: Property accountType: The type of the database account. Valid values: - Normal: standard account - Super: privileged account Default value: Super. Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts. You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        :param db_name: Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        :param priv_for_all_db: Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future. Valid values: - 0 (default)): Not authorized. - 1: Authorization.
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
            check_type(argname="argument priv_for_all_db", value=priv_for_all_db, expected_type=type_hints["priv_for_all_db"])
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
        if priv_for_all_db is not None:
            self._values["priv_for_all_db"] = priv_for_all_db

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
        ReadIndex: has read and index permissions on the database.
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

    @builtins.property
    def priv_for_all_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future.

        Valid values:

        - 0 (default)): Not authorized.
        - 1: Authorization.
        '''
        result = self._values.get("priv_for_all_db")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.BackupProps",
    jsii_struct_bases=[],
    name_mapping={"db_cluster_id": "dbClusterId"},
)
class BackupProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Backup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup

        :param db_cluster_id: Property dbClusterId: The cluster ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4015e4ad624ac12a14f5c3bdbf231305e815a43c100784f6a56434808a01cd8b)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
        }

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The cluster ID.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


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
        '''Properties for defining a ``DBClusterAccessWhiteList``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist

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
        '''Properties for defining a ``DBClusterEndpointAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress

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
        '''Properties for defining a ``DBClusterEndpoint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint

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
        "architecture": "architecture",
        "auto_renew_period": "autoRenewPeriod",
        "backup_retention_policy_on_cluster_deletion": "backupRetentionPolicyOnClusterDeletion",
        "clone_data_point": "cloneDataPoint",
        "cluster_network_type": "clusterNetworkType",
        "cold_storage_option": "coldStorageOption",
        "creation_category": "creationCategory",
        "creation_option": "creationOption",
        "db_cluster_description": "dbClusterDescription",
        "db_cluster_parameters": "dbClusterParameters",
        "db_minor_version": "dbMinorVersion",
        "db_node_num": "dbNodeNum",
        "default_time_zone": "defaultTimeZone",
        "deletion_protection": "deletionProtection",
        "gdn_id": "gdnId",
        "hot_standby_cluster": "hotStandbyCluster",
        "loose_polar_log_bin": "loosePolarLogBin",
        "loose_x_engine": "looseXEngine",
        "loose_x_engine_use_memory_pct": "looseXEngineUseMemoryPct",
        "lower_case_table_names": "lowerCaseTableNames",
        "maintain_time": "maintainTime",
        "parameter_group_id": "parameterGroupId",
        "period": "period",
        "period_unit": "periodUnit",
        "provisioned_iops": "provisionedIops",
        "proxy_class": "proxyClass",
        "proxy_type": "proxyType",
        "renewal_status": "renewalStatus",
        "resource_group_id": "resourceGroupId",
        "restart_master_node": "restartMasterNode",
        "scale_max": "scaleMax",
        "scale_min": "scaleMin",
        "scale_ro_num_max": "scaleRoNumMax",
        "scale_ro_num_min": "scaleRoNumMin",
        "security_group_ids": "securityGroupIds",
        "security_ip_list": "securityIpList",
        "serverless_type": "serverlessType",
        "source_resource_id": "sourceResourceId",
        "ssl_enabled": "sslEnabled",
        "standby_az": "standbyAz",
        "storage_auto_scale": "storageAutoScale",
        "storage_pay_type": "storagePayType",
        "storage_space": "storageSpace",
        "storage_type": "storageType",
        "storage_upper_bound": "storageUpperBound",
        "strict_consistency": "strictConsistency",
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
        architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        clone_data_point: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cold_storage_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBCluster.ColdStorageOptionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        creation_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        creation_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBCluster.DBClusterParametersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        db_minor_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_node_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hot_standby_cluster: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        loose_polar_log_bin: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        loose_x_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        loose_x_engine_use_memory_pct: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lower_case_table_names: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameter_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        provisioned_iops: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restart_master_node: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_ro_num_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_ro_num_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        standby_az: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_auto_scale: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_upper_bound: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        strict_consistency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDBCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster

        :param db_node_class: Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
        :param db_type: Property dbType: Database type, value: MySQL PostgreSQL Oracle.
        :param db_version: Property dbVersion: The version of the database. Valid values: MySQL: 5.6, 5.7 or 8.0 PostgreSQL: 11, 14, 15 Oracle: 11, 14
        :param pay_type: Property payType: The billing method of the cluster. Valid values: Postpaid: pay-as-you-go Prepaid: subscription
        :param allow_shut_down: Property allowShutDown: Whether to turn on No activity pause. The default is false.
        :param architecture: Property architecture: The architecture of CPU. Valid values: X86 ARM
        :param auto_renew_period: Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        :param backup_retention_policy_on_cluster_deletion: Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently. LATEST: Permanently keep the last backup (automatic backup before deletion). NONE: The backup set is not retained when the cluster is deleted. When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted. Note: This parameter takes effect only when the value of DBType is MySQL.
        :param clone_data_point: Property cloneDataPoint: The time point of data to be cloned. Valid values: LATEST: clones data of the latest time point. : clones historical backup data. Specify the ID of the specific backup set. : clones data of a historical time point. Specify the specific time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Default value: LATEST. Note This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB. If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
        :param cluster_network_type: Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
        :param cold_storage_option: Property coldStorageOption: The option of cold storage.
        :param creation_category: Property creationCategory: Cluster series. The value could be Normal (standard version), Basic, ArchiveNormal, NormalMultimaster and SENormal.
        :param creation_option: Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values: Normal: creates an ApsaraDB for POLARDB cluster. CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster. CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default. CreateGdnStandby: Create a secondary cluster. RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster. UpgradeFromPolarDB: Upgrade migration from PolarDB. Default value: Normal. Note: When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS. When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
        :param db_cluster_description: Property dbClusterDescription: The description of the cluster. The description must comply with the following rules: It must start with a Chinese character or an English letter. It can contain Chinese and English characters, digits, underscores (_), and hyphens (-). It cannot start with http:// or https://. It must be 2 to 256 characters in length.
        :param db_cluster_parameters: Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
        :param db_minor_version: Property dbMinorVersion: The minor version of the cluster. Valid values: 8.0.2 8.0.1 This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
        :param db_node_num: Property dbNodeNum: The number of Standard Edition nodes. Default value: 1. Valid values: 1: only one primary node. 2: one read-only node and one primary node.
        :param default_time_zone: Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System: The default time zone is the same as the time zone where the region is located. This is default value. Other pickable value range is from -12:00 to +13:00, for example, 00:00. Note: This parameter takes effect only when DBType is MySQL.
        :param deletion_protection: Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
        :param gdn_id: Property gdnId: The ID of the Global Database Network (GDN). Note: This parameter is required when the CreationOption is CreateGdnStandby.
        :param hot_standby_cluster: Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. Default value: ON. Valid values: ON: enables the hot standby storage cluster feature. OFF: disables the hot standby storage cluster feature STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters. The default value for Standard Edition clusters is STANDBY.
        :param loose_polar_log_bin: Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.
        :param loose_x_engine: Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
        :param loose_x_engine_use_memory_pct: Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90. This parameter takes effect only when the parameter LooseXEngine is ON.
        :param lower_case_table_names: Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1. Note: This parameter takes effect only when the value of DBType is MySQL.
        :param maintain_time: Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ. Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        :param parameter_group_id: Property parameterGroupId: The ID of the parameter template. You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
        :param period: Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param provisioned_iops: Property provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk. Possible values: 0-min {50,000, 1000* capacity - baseline performance}. Baseline performance =min{1,800+50* capacity, 50000}.
        :param proxy_class: Property proxyClass: The specifications of the Standard Edition PolarProxy. Valid values: polar.maxscale.g2.medium.c: 2 cores polar.maxscale.g2.large.c: 4 cores polar.maxscale.g2.xlarge.c: 8 cores polar.maxscale.g2.2xlarge.c: 16 cores polar.maxscale.g2.3xlarge.c: 24 cores polar.maxscale.g2.4xlarge.c: 32 cores polar.maxscale.g2.8xlarge.c: 64 cores
        :param proxy_type: Property proxyType: The type of PolarProxy. Default value: OFF. Valid values: OFF: disables PolarProxy. EXCLUSIVE: Dedicated Enterprise Edition GENERAL: Standard Enterprise Edition
        :param renewal_status: Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster. Normal: manually renews the cluster. NotRenewal: does not renew the cluster. Default value: Normal. Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration, but only sends an SMS message three days before the cluster expires to remind you that the cluster is not renewed.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param restart_master_node: Property restartMasterNode: Whether to restart the master node.
        :param scale_max: Property scaleMax: Maximum limit of single-node scaling.
        :param scale_min: Property scaleMin: Minimum limit of single-node scaling.
        :param scale_ro_num_max: Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
        :param scale_ro_num_min: Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
        :param security_group_ids: Property securityGroupIds: The ID of the security group. You can add up to three security groups to a cluster.
        :param security_ip_list: Property securityIpList: The whitelist of the Apsara PolarDB cluster.
        :param serverless_type: Property serverlessType: Serverless type.
        :param source_resource_id: Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster. Note This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6. This parameter is required if the CreationOption parameter is not set to Normal.
        :param ssl_enabled: Property sslEnabled: Modifies the SSL status. Valid values: Disable: disables SSL encryption. Enable: enables SSL encryption. Update: updates the SSL certificate.
        :param standby_az: Property standbyAz: The zone where the hot standby storage cluster is stored. This is valid for Standard Edition clusters of Multi-zone Edition. This parameter takes effect only when the multi-zone data consistency feature is enabled.
        :param storage_auto_scale: Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows: Enable: Enable automatic storage scale. Disable: Disable automatic storage scale.
        :param storage_pay_type: Property storagePayType: The storage pay type.
        :param storage_space: Property storageSpace: The storage space that uses the subscription billing method. Unit: GB. Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
        :param storage_type: Property storageType: The storage type. Valid values for Enterprise Edition: PSL5 PSL4 Valid values for Standard Edition: ESSDPL0 ESSDPL1 ESSDPL2 ESSDPL3 ESSDAUTOPL This parameter is invalid for serverless clusters.
        :param storage_upper_bound: Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB. The maximum value is 32000.
        :param strict_consistency: Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature. Valid values: ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition. OFF: disables the multi-zone data consistency feature.
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
            check_type(argname="argument architecture", value=architecture, expected_type=type_hints["architecture"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument backup_retention_policy_on_cluster_deletion", value=backup_retention_policy_on_cluster_deletion, expected_type=type_hints["backup_retention_policy_on_cluster_deletion"])
            check_type(argname="argument clone_data_point", value=clone_data_point, expected_type=type_hints["clone_data_point"])
            check_type(argname="argument cluster_network_type", value=cluster_network_type, expected_type=type_hints["cluster_network_type"])
            check_type(argname="argument cold_storage_option", value=cold_storage_option, expected_type=type_hints["cold_storage_option"])
            check_type(argname="argument creation_category", value=creation_category, expected_type=type_hints["creation_category"])
            check_type(argname="argument creation_option", value=creation_option, expected_type=type_hints["creation_option"])
            check_type(argname="argument db_cluster_description", value=db_cluster_description, expected_type=type_hints["db_cluster_description"])
            check_type(argname="argument db_cluster_parameters", value=db_cluster_parameters, expected_type=type_hints["db_cluster_parameters"])
            check_type(argname="argument db_minor_version", value=db_minor_version, expected_type=type_hints["db_minor_version"])
            check_type(argname="argument db_node_num", value=db_node_num, expected_type=type_hints["db_node_num"])
            check_type(argname="argument default_time_zone", value=default_time_zone, expected_type=type_hints["default_time_zone"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument gdn_id", value=gdn_id, expected_type=type_hints["gdn_id"])
            check_type(argname="argument hot_standby_cluster", value=hot_standby_cluster, expected_type=type_hints["hot_standby_cluster"])
            check_type(argname="argument loose_polar_log_bin", value=loose_polar_log_bin, expected_type=type_hints["loose_polar_log_bin"])
            check_type(argname="argument loose_x_engine", value=loose_x_engine, expected_type=type_hints["loose_x_engine"])
            check_type(argname="argument loose_x_engine_use_memory_pct", value=loose_x_engine_use_memory_pct, expected_type=type_hints["loose_x_engine_use_memory_pct"])
            check_type(argname="argument lower_case_table_names", value=lower_case_table_names, expected_type=type_hints["lower_case_table_names"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument parameter_group_id", value=parameter_group_id, expected_type=type_hints["parameter_group_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument provisioned_iops", value=provisioned_iops, expected_type=type_hints["provisioned_iops"])
            check_type(argname="argument proxy_class", value=proxy_class, expected_type=type_hints["proxy_class"])
            check_type(argname="argument proxy_type", value=proxy_type, expected_type=type_hints["proxy_type"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restart_master_node", value=restart_master_node, expected_type=type_hints["restart_master_node"])
            check_type(argname="argument scale_max", value=scale_max, expected_type=type_hints["scale_max"])
            check_type(argname="argument scale_min", value=scale_min, expected_type=type_hints["scale_min"])
            check_type(argname="argument scale_ro_num_max", value=scale_ro_num_max, expected_type=type_hints["scale_ro_num_max"])
            check_type(argname="argument scale_ro_num_min", value=scale_ro_num_min, expected_type=type_hints["scale_ro_num_min"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument serverless_type", value=serverless_type, expected_type=type_hints["serverless_type"])
            check_type(argname="argument source_resource_id", value=source_resource_id, expected_type=type_hints["source_resource_id"])
            check_type(argname="argument ssl_enabled", value=ssl_enabled, expected_type=type_hints["ssl_enabled"])
            check_type(argname="argument standby_az", value=standby_az, expected_type=type_hints["standby_az"])
            check_type(argname="argument storage_auto_scale", value=storage_auto_scale, expected_type=type_hints["storage_auto_scale"])
            check_type(argname="argument storage_pay_type", value=storage_pay_type, expected_type=type_hints["storage_pay_type"])
            check_type(argname="argument storage_space", value=storage_space, expected_type=type_hints["storage_space"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument storage_upper_bound", value=storage_upper_bound, expected_type=type_hints["storage_upper_bound"])
            check_type(argname="argument strict_consistency", value=strict_consistency, expected_type=type_hints["strict_consistency"])
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
        if architecture is not None:
            self._values["architecture"] = architecture
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if backup_retention_policy_on_cluster_deletion is not None:
            self._values["backup_retention_policy_on_cluster_deletion"] = backup_retention_policy_on_cluster_deletion
        if clone_data_point is not None:
            self._values["clone_data_point"] = clone_data_point
        if cluster_network_type is not None:
            self._values["cluster_network_type"] = cluster_network_type
        if cold_storage_option is not None:
            self._values["cold_storage_option"] = cold_storage_option
        if creation_category is not None:
            self._values["creation_category"] = creation_category
        if creation_option is not None:
            self._values["creation_option"] = creation_option
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if db_cluster_parameters is not None:
            self._values["db_cluster_parameters"] = db_cluster_parameters
        if db_minor_version is not None:
            self._values["db_minor_version"] = db_minor_version
        if db_node_num is not None:
            self._values["db_node_num"] = db_node_num
        if default_time_zone is not None:
            self._values["default_time_zone"] = default_time_zone
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if gdn_id is not None:
            self._values["gdn_id"] = gdn_id
        if hot_standby_cluster is not None:
            self._values["hot_standby_cluster"] = hot_standby_cluster
        if loose_polar_log_bin is not None:
            self._values["loose_polar_log_bin"] = loose_polar_log_bin
        if loose_x_engine is not None:
            self._values["loose_x_engine"] = loose_x_engine
        if loose_x_engine_use_memory_pct is not None:
            self._values["loose_x_engine_use_memory_pct"] = loose_x_engine_use_memory_pct
        if lower_case_table_names is not None:
            self._values["lower_case_table_names"] = lower_case_table_names
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if parameter_group_id is not None:
            self._values["parameter_group_id"] = parameter_group_id
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if provisioned_iops is not None:
            self._values["provisioned_iops"] = provisioned_iops
        if proxy_class is not None:
            self._values["proxy_class"] = proxy_class
        if proxy_type is not None:
            self._values["proxy_type"] = proxy_type
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restart_master_node is not None:
            self._values["restart_master_node"] = restart_master_node
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
        if ssl_enabled is not None:
            self._values["ssl_enabled"] = ssl_enabled
        if standby_az is not None:
            self._values["standby_az"] = standby_az
        if storage_auto_scale is not None:
            self._values["storage_auto_scale"] = storage_auto_scale
        if storage_pay_type is not None:
            self._values["storage_pay_type"] = storage_pay_type
        if storage_space is not None:
            self._values["storage_space"] = storage_space
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if storage_upper_bound is not None:
            self._values["storage_upper_bound"] = storage_upper_bound
        if strict_consistency is not None:
            self._values["strict_consistency"] = strict_consistency
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
        PostgreSQL: 11, 14, 15
        Oracle: 11, 14
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
    def architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property architecture: The architecture of CPU.

        Valid values:
        X86
        ARM
        '''
        result = self._values.get("architecture")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def cold_storage_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.ColdStorageOptionProperty"]]:
        '''Property coldStorageOption: The option of cold storage.'''
        result = self._values.get("cold_storage_option")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.ColdStorageOptionProperty"]], result)

    @builtins.property
    def creation_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property creationCategory: Cluster series.

        The value could be Normal (standard version), Basic, ArchiveNormal, NormalMultimaster and SENormal.
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
        RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
        UpgradeFromPolarDB: Upgrade migration from PolarDB.
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
    def db_minor_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbMinorVersion: The minor version of the cluster.

        Valid values:
        8.0.2
        8.0.1
        This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
        '''
        result = self._values.get("db_minor_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbNodeNum: The number of Standard Edition nodes.

        Default value: 1. Valid values:
        1: only one primary node.
        2: one read-only node and one primary node.
        '''
        result = self._values.get("db_node_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.

        Default is false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def hot_standby_cluster(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature.

        Default value: ON. Valid values:
        ON: enables the hot standby storage cluster feature.
        OFF: disables the hot standby storage cluster feature
        STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
        The default value for Standard Edition clusters is STANDBY.
        '''
        result = self._values.get("hot_standby_cluster")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def loose_polar_log_bin(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.'''
        result = self._values.get("loose_polar_log_bin")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def loose_x_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.'''
        result = self._values.get("loose_x_engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def loose_x_engine_use_memory_pct(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.

        This parameter takes effect only when the parameter LooseXEngine is ON.
        '''
        result = self._values.get("loose_x_engine_use_memory_pct")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def parameter_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parameterGroupId: The ID of the parameter template.

        You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
        '''
        result = self._values.get("parameter_group_id")
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
    def provisioned_iops(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk.

        Possible values: 0-min {50,000, 1000* capacity - baseline performance}.
        Baseline performance =min{1,800+50* capacity, 50000}.
        '''
        result = self._values.get("provisioned_iops")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyClass: The specifications of the Standard Edition PolarProxy.

        Valid values:
        polar.maxscale.g2.medium.c: 2 cores
        polar.maxscale.g2.large.c: 4 cores
        polar.maxscale.g2.xlarge.c: 8 cores
        polar.maxscale.g2.2xlarge.c: 16 cores
        polar.maxscale.g2.3xlarge.c: 24 cores
        polar.maxscale.g2.4xlarge.c: 32 cores
        polar.maxscale.g2.8xlarge.c: 64 cores
        '''
        result = self._values.get("proxy_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyType: The type of PolarProxy.

        Default value: OFF. Valid values:
        OFF: disables PolarProxy.
        EXCLUSIVE: Dedicated Enterprise Edition
        GENERAL: Standard Enterprise Edition
        '''
        result = self._values.get("proxy_type")
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
    def restart_master_node(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restartMasterNode: Whether to restart the master node.'''
        result = self._values.get("restart_master_node")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sslEnabled: Modifies the SSL status.

        Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def standby_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property standbyAz: The zone where the hot standby storage cluster is stored.

        This is valid for Standard Edition clusters of Multi-zone Edition.
        This parameter takes effect only when the multi-zone data consistency feature is enabled.
        '''
        result = self._values.get("standby_az")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_auto_scale(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters.

        The value range is as follows:
        Enable: Enable automatic storage scale.
        Disable: Disable automatic storage scale.
        '''
        result = self._values.get("storage_auto_scale")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storagePayType: The storage pay type.'''
        result = self._values.get("storage_pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageSpace: The storage space that uses the subscription billing method.

        Unit: GB.
        Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
        '''
        result = self._values.get("storage_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageType: The storage type.

        Valid values for Enterprise Edition:
        PSL5
        PSL4
        Valid values for Standard Edition:
        ESSDPL0
        ESSDPL1
        ESSDPL2
        ESSDPL3
        ESSDAUTOPL
        This parameter is invalid for serverless clusters.
        '''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_upper_bound(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.

        The maximum value is 32000.
        '''
        result = self._values.get("storage_upper_bound")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def strict_consistency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature.

        Valid values:
        ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
        OFF: disables the multi-zone data consistency feature.
        '''
        result = self._values.get("strict_consistency")
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DBNodesProps",
    jsii_struct_bases=[],
    name_mapping={
        "amount": "amount",
        "db_cluster_id": "dbClusterId",
        "db_node_type": "dbNodeType",
        "endpoint_bind_list": "endpointBindList",
        "imci_switch": "imciSwitch",
        "planned_end_time": "plannedEndTime",
        "planned_start_time": "plannedStartTime",
        "resource_group_id": "resourceGroupId",
    },
)
class DBNodesProps:
    def __init__(
        self,
        *,
        amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_bind_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        imci_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        planned_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        planned_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DBNodes``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes

        :param amount: Property amount: Number of nodes to be added to cluster.
        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        :param db_node_type: Property dbNodeType: Node type. Ranges: RO|STANDBY|DLNode|RW
        :param endpoint_bind_list: Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
        :param imci_switch: Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
        :param planned_end_time: Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period). The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        :param planned_start_time: Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period). The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        :param resource_group_id: Property resourceGroupId: Resource group id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff474dbfc40a620c637b08605d0663742efa7f649d676f9e88ebe620ce3a217c)
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_node_type", value=db_node_type, expected_type=type_hints["db_node_type"])
            check_type(argname="argument endpoint_bind_list", value=endpoint_bind_list, expected_type=type_hints["endpoint_bind_list"])
            check_type(argname="argument imci_switch", value=imci_switch, expected_type=type_hints["imci_switch"])
            check_type(argname="argument planned_end_time", value=planned_end_time, expected_type=type_hints["planned_end_time"])
            check_type(argname="argument planned_start_time", value=planned_start_time, expected_type=type_hints["planned_start_time"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "amount": amount,
            "db_cluster_id": db_cluster_id,
        }
        if db_node_type is not None:
            self._values["db_node_type"] = db_node_type
        if endpoint_bind_list is not None:
            self._values["endpoint_bind_list"] = endpoint_bind_list
        if imci_switch is not None:
            self._values["imci_switch"] = imci_switch
        if planned_end_time is not None:
            self._values["planned_end_time"] = planned_end_time
        if planned_start_time is not None:
            self._values["planned_start_time"] = planned_start_time
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

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
    def db_node_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbNodeType: Node type.

        Ranges: RO|STANDBY|DLNode|RW
        '''
        result = self._values.get("db_node_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_bind_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.'''
        result = self._values.get("endpoint_bind_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def imci_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.'''
        result = self._values.get("imci_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def planned_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).

        The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        '''
        result = self._values.get("planned_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def planned_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).

        The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        '''
        result = self._values.get("planned_start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBNodesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DatabaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "character_set_name": "characterSetName",
        "db_cluster_id": "dbClusterId",
        "db_name": "dbName",
        "account_name": "accountName",
        "account_privilege": "accountPrivilege",
        "collate": "collate",
        "ctype": "ctype",
        "db_description": "dbDescription",
    },
)
class DatabaseProps:
    def __init__(
        self,
        *,
        character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        collate: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ctype: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Database``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database

        :param character_set_name: Property characterSetName: The character set of the database. For more information, see Character sets.
        :param db_cluster_id: Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
        :param db_name: Property dbName: The name of the database to be created. The name must comply with the following rules: It must start with a lowercase letter and consist of lowercase letters, digits, hyphens (-), and underscores (_). It must end with a letter or a digit. It can be up to 64 characters in length.
        :param account_name: Property accountName: The name of the database account to be used.
        :param account_privilege: Property accountPrivilege: The permissions of the database account on the database. Valid values: ReadWrite: has read and write permissions on the database. ReadOnly: has the read-only permission on the database. DMLOnly: runs only data manipulation language (DML) statements. DDLOnly: runs only data definition language (DDL) statements. ReadIndex: has read and index permissions on the database. Default value: ReadWrite.
        :param collate: Property collate: A locale setting that specifies the collation for newly created databases. The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required; when the cluster is PolarDB MySQL, this parameter is not supported.
        :param ctype: Property ctype: A locale setting that specifies the character classification of the database. The locale must be compatible with the character set set by the CharacterSetName parameter. It is consistent with the incoming information of Collate. When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required; when the cluster is PolarDB MySQL, this parameter is optional.
        :param db_description: Property dbDescription: The description of the database. Valid values: It cannot start with http:// or https://. It must be 2 to 256 characters in length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82b68f2502b91222ddde0dd5c94cf5d080c4ae26fd444b6d2e3204d79a1dd8cb)
            check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument collate", value=collate, expected_type=type_hints["collate"])
            check_type(argname="argument ctype", value=ctype, expected_type=type_hints["ctype"])
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
        if collate is not None:
            self._values["collate"] = collate
        if ctype is not None:
            self._values["ctype"] = ctype
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
        ReadIndex: has read and index permissions on the database.
        Default value: ReadWrite.
        '''
        result = self._values.get("account_privilege")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def collate(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property collate: A locale setting that specifies the collation for newly created databases.

        The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        when the cluster is PolarDB MySQL, this parameter is not supported.
        '''
        result = self._values.get("collate")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ctype(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ctype: A locale setting that specifies the character classification of the database.

        The locale must be compatible with the character set set by the CharacterSetName parameter.
        It is consistent with the incoming information of Collate.
        When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        when the cluster is PolarDB MySQL, this parameter is optional.
        '''
        result = self._values.get("ctype")
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
        return "DatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.GlobalDatabaseNetworkProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "gdn_description": "gdnDescription",
        "resource_group_id": "resourceGroupId",
    },
)
class GlobalDatabaseNetworkProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        gdn_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``GlobalDatabaseNetwork``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork

        :param db_cluster_id: Property dbClusterId: The ID of the primary cluster.
        :param gdn_description: Property gdnDescription: The description of the GDN.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__998a96ab96f51aa78e90b1a63a36693dc1a0dfef0e42862fddd93f85d117808c)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument gdn_description", value=gdn_description, expected_type=type_hints["gdn_description"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
        }
        if gdn_description is not None:
            self._values["gdn_description"] = gdn_description
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: The ID of the primary cluster.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def gdn_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gdnDescription: The description of the GDN.'''
        result = self._values.get("gdn_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GlobalDatabaseNetworkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.GlobalSecurityIPGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "g_ip_list": "gIpList",
        "global_ig_name": "globalIgName",
        "resource_group_id": "resourceGroupId",
    },
)
class GlobalSecurityIPGroupProps:
    def __init__(
        self,
        *,
        g_ip_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        global_ig_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``GlobalSecurityIPGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup

        :param g_ip_list: Property gIpList: The IP addresses in the whitelist template. You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
        :param global_ig_name: Property globalIgName: The name of the IP whitelist template. The name must meet the following requirements: The name can contain lowercase letters, digits, and underscores (_). The name must start with a letter and end with a letter or digit. The name must be 2 to 120 characters in length.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9f03ca5cc8e7ea2f35c3ee62541243d9d591f3e244b876f912d1350abeb1c26)
            check_type(argname="argument g_ip_list", value=g_ip_list, expected_type=type_hints["g_ip_list"])
            check_type(argname="argument global_ig_name", value=global_ig_name, expected_type=type_hints["global_ig_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "g_ip_list": g_ip_list,
            "global_ig_name": global_ig_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def g_ip_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property gIpList: The IP addresses in the whitelist template.

        You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
        '''
        result = self._values.get("g_ip_list")
        assert result is not None, "Required property 'g_ip_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property globalIgName: The name of the IP whitelist template.

        The name must meet the following requirements:
        The name can contain lowercase letters, digits, and underscores (_).
        The name must start with a letter and end with a letter or digit.
        The name must be 2 to 120 characters in length.
        '''
        result = self._values.get("global_ig_name")
        assert result is not None, "Required property 'global_ig_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GlobalSecurityIPGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IAITask")
class IAITask(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AITask``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the DB cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AITaskProps:
        ...


class _IAITaskProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AITask``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IAITask"

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the DB cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AITaskProps:
        return typing.cast(AITaskProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAITask).__jsii_proxy_class__ = lambda : _IAITaskProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IAccount")
class IAccount(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Account``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        ...


class _IAccountProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Account``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IAccount"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        return typing.cast(AccountProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccount).__jsii_proxy_class__ = lambda : _IAccountProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IAccountPrivilege")
class IAccountPrivilege(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AccountPrivilege``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountPrivilegeProps:
        ...


class _IAccountPrivilegeProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AccountPrivilege``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IAccountPrivilege"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountPrivilegeProps:
        return typing.cast(AccountPrivilegeProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccountPrivilege).__jsii_proxy_class__ = lambda : _IAccountPrivilegeProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IBackup")
class IBackup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Backup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackupJobId")
    def attr_backup_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupJobId: The ID of the backup set.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupProps:
        ...


class _IBackupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Backup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IBackup"

    @builtins.property
    @jsii.member(jsii_name="attrBackupJobId")
    def attr_backup_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupJobId: The ID of the backup set.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupProps:
        return typing.cast(BackupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBackup).__jsii_proxy_class__ = lambda : _IBackupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IDBCluster")
class IDBCluster(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DBCluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterConnectionString")
    def attr_cluster_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterConnectionString: The cluster connection string of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterEndpointId")
    def attr_cluster_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrColdStorageInstanceId")
    def attr_cold_storage_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ColdStorageInstanceId: The ID of the cold storage instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCustomConnectionStrings")
    def attr_custom_connection_strings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomConnectionStrings: The custom connection strings of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCustomEndpointIds")
    def attr_custom_endpoint_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterDescription: The description of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeIds: The ID list of cluster nodes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The Order ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionString")
    def attr_primary_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryConnectionString: The primary connection string of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionStrings")
    def attr_primary_connection_strings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointId")
    def attr_primary_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointIds")
    def attr_primary_endpoint_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterProps:
        ...


class _IDBClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DBCluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IDBCluster"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterConnectionString")
    def attr_cluster_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterConnectionString: The cluster connection string of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterEndpointId")
    def attr_cluster_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrColdStorageInstanceId")
    def attr_cold_storage_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ColdStorageInstanceId: The ID of the cold storage instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrColdStorageInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomConnectionStrings")
    def attr_custom_connection_strings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomConnectionStrings: The custom connection strings of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCustomConnectionStrings"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomEndpointIds")
    def attr_custom_endpoint_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCustomEndpointIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterDescription: The description of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeIds: The ID list of cluster nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The Order ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionString")
    def attr_primary_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryConnectionString: The primary connection string of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionStrings")
    def attr_primary_connection_strings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryConnectionStrings"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointId")
    def attr_primary_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointIds")
    def attr_primary_endpoint_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryEndpointIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterProps:
        return typing.cast(DBClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDBCluster).__jsii_proxy_class__ = lambda : _IDBClusterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IDBClusterAccessWhiteList")
class IDBClusterAccessWhiteList(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``DBClusterAccessWhiteList``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterAccessWhiteListProps:
        ...


class _IDBClusterAccessWhiteListProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DBClusterAccessWhiteList``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IDBClusterAccessWhiteList"

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterAccessWhiteListProps:
        return typing.cast(DBClusterAccessWhiteListProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDBClusterAccessWhiteList).__jsii_proxy_class__ = lambda : _IDBClusterAccessWhiteListProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IDBClusterEndpoint")
class IDBClusterEndpoint(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DBClusterEndpoint``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Addresses: The address items of the db cluster endpoint.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: The first connection string of the db cluster endpoint.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbEndpointId")
    def attr_db_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBEndpointId: DB cluster endpoint ID.

        E.g. pe-xxxxxxxx.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterEndpointProps:
        ...


class _IDBClusterEndpointProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DBClusterEndpoint``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IDBClusterEndpoint"

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Addresses: The address items of the db cluster endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: The first connection string of the db cluster endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbEndpointId")
    def attr_db_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBEndpointId: DB cluster endpoint ID.

        E.g. pe-xxxxxxxx.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterEndpointProps:
        return typing.cast(DBClusterEndpointProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDBClusterEndpoint).__jsii_proxy_class__ = lambda : _IDBClusterEndpointProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IDBClusterEndpointAddress")
class IDBClusterEndpointAddress(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``DBClusterEndpointAddress``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Address: The details of the endpoint address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: The connection string of the endpoint address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterEndpointAddressProps:
        ...


class _IDBClusterEndpointAddressProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DBClusterEndpointAddress``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IDBClusterEndpointAddress"

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Address: The details of the endpoint address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: The connection string of the endpoint address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterEndpointAddressProps:
        return typing.cast(DBClusterEndpointAddressProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDBClusterEndpointAddress).__jsii_proxy_class__ = lambda : _IDBClusterEndpointAddressProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IDBNodes")
class IDBNodes(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DBNodes``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeIds: The ID list of added cluster nodes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderIds: The order ID list of added cluster nodes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBNodesProps:
        ...


class _IDBNodesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DBNodes``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IDBNodes"

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeIds: The ID list of added cluster nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderIds: The order ID list of added cluster nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBNodesProps:
        return typing.cast(DBNodesProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDBNodes).__jsii_proxy_class__ = lambda : _IDBNodesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IDatabase")
class IDatabase(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Database``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatabaseProps:
        ...


class _IDatabaseProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Database``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IDatabase"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatabaseProps:
        return typing.cast(DatabaseProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDatabase).__jsii_proxy_class__ = lambda : _IDatabaseProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IGlobalDatabaseNetwork")
class IGlobalDatabaseNetwork(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``GlobalDatabaseNetwork``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Connections: The information about the connection to the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time at which the GDN was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusters: The clusters that are included in the GDN.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: The type of the database engine.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: The version of the database engine.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGdnDescription")
    def attr_gdn_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GdnDescription: The description of the GDN.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGdnId")
    def attr_gdn_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GdnId: The ID of the GDN.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalDatabaseNetworkProps:
        ...


class _IGlobalDatabaseNetworkProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``GlobalDatabaseNetwork``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IGlobalDatabaseNetwork"

    @builtins.property
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Connections: The information about the connection to the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time at which the GDN was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusters: The clusters that are included in the GDN.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusters"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: The type of the database engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: The version of the database engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrGdnDescription")
    def attr_gdn_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GdnDescription: The description of the GDN.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGdnDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGdnId")
    def attr_gdn_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GdnId: The ID of the GDN.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGdnId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalDatabaseNetworkProps:
        return typing.cast(GlobalDatabaseNetworkProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGlobalDatabaseNetwork).__jsii_proxy_class__ = lambda : _IGlobalDatabaseNetworkProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IGlobalSecurityIPGroup")
class IGlobalSecurityIPGroup(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``GlobalSecurityIPGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityGroupId")
    def attr_global_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalSecurityIPGroupProps:
        ...


class _IGlobalSecurityIPGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``GlobalSecurityIPGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IGlobalSecurityIPGroup"

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityGroupId")
    def attr_global_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGlobalSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalSecurityIPGroupProps:
        return typing.cast(GlobalSecurityIPGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGlobalSecurityIPGroup).__jsii_proxy_class__ = lambda : _IGlobalSecurityIPGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-polardb.IParameterGroup")
class IParameterGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ParameterGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the parameter template was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: The type of the database engine.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: The version of the database engine.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrForceRestart")
    def attr_force_restart(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameterCounts")
    def attr_parameter_counts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterCounts: The number of parameters in the parameter template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupDesc")
    def attr_parameter_group_desc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupDesc: The description of the parameter template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupId")
    def attr_parameter_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupId: The ID of the parameter group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupName")
    def attr_parameter_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupName: The name of the parameter template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupType")
    def attr_parameter_group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupType: The type of the parameter template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: The list of the parameters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ParameterGroupProps":
        ...


class _IParameterGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ParameterGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-polardb.IParameterGroup"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the parameter template was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: The type of the database engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: The version of the database engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrForceRestart")
    def attr_force_restart(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrForceRestart"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterCounts")
    def attr_parameter_counts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterCounts: The number of parameters in the parameter template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterCounts"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupDesc")
    def attr_parameter_group_desc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupDesc: The description of the parameter template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterGroupDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupId")
    def attr_parameter_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupId: The ID of the parameter group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupName")
    def attr_parameter_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupName: The name of the parameter template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupType")
    def attr_parameter_group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupType: The type of the parameter template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterGroupType"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: The list of the parameters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ParameterGroupProps":
        return typing.cast("ParameterGroupProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IParameterGroup).__jsii_proxy_class__ = lambda : _IParameterGroupProxy


@jsii.implements(IParameterGroup)
class ParameterGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.ParameterGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::ParameterGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosParameterGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ParameterGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e952e32b026b462aac761574a5ef88037003db23e35617b8d67d375ac85b713)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the parameter template was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: The type of the database engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: The version of the database engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrForceRestart")
    def attr_force_restart(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrForceRestart"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterCounts")
    def attr_parameter_counts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterCounts: The number of parameters in the parameter template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterCounts"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupDesc")
    def attr_parameter_group_desc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupDesc: The description of the parameter template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterGroupDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupId")
    def attr_parameter_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupId: The ID of the parameter group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupName")
    def attr_parameter_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupName: The name of the parameter template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupType")
    def attr_parameter_group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterGroupType: The type of the parameter template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterGroupType"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: The list of the parameters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ParameterGroupProps":
        return typing.cast("ParameterGroupProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__788d54f96c45f0b941e83cd3531928fbcf43c47da33f92ab80ee2b5f3e0045a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9757e3edd17b8226d7d1b73bd1ad05cac6f54c152b5811f0c06ea3bb2523b881)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a60ec18887588fcdd54cca5e85c1bf392cd7d10b32147b221b9d83fbdbedee96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.ParameterGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_type": "dbType",
        "db_version": "dbVersion",
        "parameter_group_name": "parameterGroupName",
        "parameters": "parameters",
        "parameter_group_desc": "parameterGroupDesc",
        "resource_group_id": "resourceGroupId",
    },
)
class ParameterGroupProps:
    def __init__(
        self,
        *,
        db_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parameter_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosParameterGroup.ParametersProperty", typing.Dict[builtins.str, typing.Any]]]]],
        parameter_group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ParameterGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup

        :param db_type: Property dbType: The type of the database engine.
        :param db_version: Property dbVersion: The version of the database engine.
        :param parameter_group_name: Property parameterGroupName: The name of the parameter template.
        :param parameters: Property parameters: The list of the parameters.
        :param parameter_group_desc: Property parameterGroupDesc: The description of the parameter template.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63ead05d2f9d89f1a68a2fb5fbf3b264320789ac80c49e211962dabc14535874)
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument parameter_group_name", value=parameter_group_name, expected_type=type_hints["parameter_group_name"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument parameter_group_desc", value=parameter_group_desc, expected_type=type_hints["parameter_group_desc"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_type": db_type,
            "db_version": db_version,
            "parameter_group_name": parameter_group_name,
            "parameters": parameters,
        }
        if parameter_group_desc is not None:
            self._values["parameter_group_desc"] = parameter_group_desc
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def db_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbType: The type of the database engine.'''
        result = self._values.get("db_type")
        assert result is not None, "Required property 'db_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbVersion: The version of the database engine.'''
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parameter_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property parameterGroupName: The name of the parameter template.'''
        result = self._values.get("parameter_group_name")
        assert result is not None, "Required property 'parameter_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosParameterGroup.ParametersProperty"]]]:
        '''Property parameters: The list of the parameters.'''
        result = self._values.get("parameters")
        assert result is not None, "Required property 'parameters' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosParameterGroup.ParametersProperty"]]], result)

    @builtins.property
    def parameter_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parameterGroupDesc: The description of the parameter template.'''
        result = self._values.get("parameter_group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ParameterGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAITask(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosAITask",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::AITask``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AITask`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAITaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95717fcfdd18a814df205d88b2f0a223d08c0e92bd8cebc7a90046fcd947d758)
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
            type_hints = typing.get_type_hints(_typecheckingstub__89d2f0372d0ed58e14ce8e738406bebf15e3b989b1f34d1732a055611006bfc7)
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
        :Attribute: DBClusterId: The ID of the DB cluster.
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
        :Property: dbClusterId: The ID of the DB cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54e9ce93bf5975a5dcf5a7f86cd182ee7efd1867fb95291cfbb78755d797db5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1838c7d0a32e34ce95e89abc6a5543dec890ab80156b0a075a827c8f2d9a842c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: password: The password of the database account that enables the PolarDB for AI function is required.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1dac65f0df46cfa1c9ad57afac173b8043cf0c3c9ce84eac6de01c627f2d2ad2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="username")
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: username: The database account that enables the PolarDB for AI function is required.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "username"))

    @username.setter
    def username(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35dabc51b008a9a6032c180720734ce5c6fdbbc0d1db8938a9488eb897898ff1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "username", value)

    @builtins.property
    @jsii.member(jsii_name="nodeType")
    def node_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeType: The type of the node. Valid values:
        DLNode: AI node(default).
        SearchNode: Search ai node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodeType"))

    @node_type.setter
    def node_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__222ef640be142c45012d4d96d441596bebc6cab1a28393cf703d9e6590d933e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosAITaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "password": "password",
        "username": "username",
        "node_type": "nodeType",
    },
)
class RosAITaskProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAITask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask

        :param db_cluster_id: 
        :param password: 
        :param username: 
        :param node_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85ea52567cdee4db3a327b024f1c996c394f7a7904253d95d0c3ad9d1daeeb9d)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument node_type", value=node_type, expected_type=type_hints["node_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "password": password,
            "username": username,
        }
        if node_type is not None:
            self._values["node_type"] = node_type

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the DB cluster.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: password: The password of the database account that enables the PolarDB for AI function is required.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: username: The database account that enables the PolarDB for AI function is required.
        '''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeType: The type of the node. Valid values:
        DLNode: AI node(default).
        SearchNode: Search ai node.
        '''
        result = self._values.get("node_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAITaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosAccount",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::Account``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Account`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        ReadIndex: has read and index permissions on the database.
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

    @builtins.property
    @jsii.member(jsii_name="privForAllDb")
    def priv_for_all_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future. Valid values:

        - 0 (default)): Not authorized.
        - 1: Authorization.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privForAllDb"))

    @priv_for_all_db.setter
    def priv_for_all_db(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0edc53f670a0a3fd7f9fdf35c4416dfae88ed5f81b276db763e0ab63ef677e38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privForAllDb", value)


class RosAccountPrivilege(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosAccountPrivilege",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::AccountPrivilege``, which is used to grant access permissions on one or more databases in a specified ApsaraDB for POLARDB cluster to a standard account.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AccountPrivilege`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountPrivilegeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosAccountPrivilege``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege

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
        "priv_for_all_db": "privForAllDb",
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
        priv_for_all_db: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account

        :param account_name: 
        :param account_password: 
        :param db_cluster_id: 
        :param account_description: 
        :param account_privilege: 
        :param account_type: 
        :param db_name: 
        :param priv_for_all_db: 
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
            check_type(argname="argument priv_for_all_db", value=priv_for_all_db, expected_type=type_hints["priv_for_all_db"])
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
        if priv_for_all_db is not None:
            self._values["priv_for_all_db"] = priv_for_all_db

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
        ReadIndex: has read and index permissions on the database.
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

    @builtins.property
    def priv_for_all_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future. Valid values:

        - 0 (default)): Not authorized.
        - 1: Authorization.
        '''
        result = self._values.get("priv_for_all_db")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosBackup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::Backup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Backup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b36bd7d8ac66820db05976a49f68567dfcebd287976e29ce2168a72b50520979)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c5b00a12ca33531ce4ecdcf377a49d9146ca28046f13186d1c1a6b50af3debbe)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupJobId")
    def attr_backup_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupJobId: The ID of the backup set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterId: The ID of the cluster.
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
        :Property: dbClusterId: The cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81eba724155d61380fff161042e8950d1bc67657368ac65bd7f3c0259aae657b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd85ed2b7bbd7948fba4f90eede30602c0f8554c63f9d550a2a524094ba1a398)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosBackupProps",
    jsii_struct_bases=[],
    name_mapping={"db_cluster_id": "dbClusterId"},
)
class RosBackupProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosBackup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup

        :param db_cluster_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8673ab4099ee01f12e164a554eb77dd95bb23681a4f14b4c44dbf7f8912bc8c)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
        }

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The cluster ID.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::DBCluster``, which is used to create a PolarDB cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

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
    @jsii.member(jsii_name="attrColdStorageInstanceId")
    def attr_cold_storage_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ColdStorageInstanceId: The ID of the cold storage instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrColdStorageInstanceId"))

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
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterDescription: The description of the db cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterDescription"))

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
        PostgreSQL: 11, 14, 15
        Oracle: 11, 14
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
    @jsii.member(jsii_name="architecture")
    def architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        architecture: The architecture of CPU. Valid values:
        X86
        ARM
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "architecture"))

    @architecture.setter
    def architecture(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__528fc0a7dedab76d1bf852ba40633e01b69513b065a6835b82941d756ced42a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "architecture", value)

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
    @jsii.member(jsii_name="coldStorageOption")
    def cold_storage_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.ColdStorageOptionProperty"]]:
        '''
        :Property: coldStorageOption: The option of cold storage.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.ColdStorageOptionProperty"]], jsii.get(self, "coldStorageOption"))

    @cold_storage_option.setter
    def cold_storage_option(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBCluster.ColdStorageOptionProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d7825e85c1aa74ae301e853e89115b111fcb0775635afcb7e7e0bb3f2e1217b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coldStorageOption", value)

    @builtins.property
    @jsii.member(jsii_name="creationCategory")
    def creation_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: creationCategory: Cluster series. The value could be Normal (standard version), Basic, ArchiveNormal, NormalMultimaster and SENormal.
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
        RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
        UpgradeFromPolarDB: Upgrade migration from PolarDB.
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
    @jsii.member(jsii_name="dbMinorVersion")
    def db_minor_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbMinorVersion: The minor version of the cluster. Valid values:
        8.0.2
        8.0.1
        This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbMinorVersion"))

    @db_minor_version.setter
    def db_minor_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdbb573dcf4d370a06d4b9c9759bd9592fd4cf785d1abe12c46ef0352a7d9ee9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbMinorVersion", value)

    @builtins.property
    @jsii.member(jsii_name="dbNodeNum")
    def db_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbNodeNum: The number of Standard Edition nodes. Default value: 1. Valid values:
        1: only one primary node.
        2: one read-only node and one primary node.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbNodeNum"))

    @db_node_num.setter
    def db_node_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a867e25f1dff795ee54524c54cc945a14344fbc534a77610b81e6fd04bc9f51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeNum", value)

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
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6117670c3d087a03952026d01d2126a42371b0a16ebafc6a148d7f0030fb7d08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtection", value)

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
    @jsii.member(jsii_name="hotStandbyCluster")
    def hot_standby_cluster(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. Default value: ON. Valid values:
        ON: enables the hot standby storage cluster feature.
        OFF: disables the hot standby storage cluster feature
        STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
        The default value for Standard Edition clusters is STANDBY.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hotStandbyCluster"))

    @hot_standby_cluster.setter
    def hot_standby_cluster(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da8f298d1d0e8a0f8a25198bccd1e4e8f25bb0e64952076cc09e46f903820004)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hotStandbyCluster", value)

    @builtins.property
    @jsii.member(jsii_name="loosePolarLogBin")
    def loose_polar_log_bin(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loosePolarLogBin: Enable the Binlog function, the value range is as follows:
        ON: The cluster enables the Binlog function
        OFF: The cluster disables the Binlog function
        This parameter takes effect only when the parameter DBType is MySQL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loosePolarLogBin"))

    @loose_polar_log_bin.setter
    def loose_polar_log_bin(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4116724b7903441032ed49bc3add0f3153dbe2cc72395a44a4d99c03822b9cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loosePolarLogBin", value)

    @builtins.property
    @jsii.member(jsii_name="looseXEngine")
    def loose_x_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        looseXEngine: Enable the X-Engine storage engine function, the value range is as follows:
        ON: The cluster starts the X-Engine enginen
        OFF: The cluster shuts down the X-Engine engine
        This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "looseXEngine"))

    @loose_x_engine.setter
    def loose_x_engine(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf2337e430f0cc6625fd184d496a57ffb973732558c809ed5dacd28a295d5f49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "looseXEngine", value)

    @builtins.property
    @jsii.member(jsii_name="looseXEngineUseMemoryPct")
    def loose_x_engine_use_memory_pct(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
        This parameter takes effect only when the parameter LooseXEngine is ON.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "looseXEngineUseMemoryPct"))

    @loose_x_engine_use_memory_pct.setter
    def loose_x_engine_use_memory_pct(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a7c8796333e66e5fc34a6637a6f766e4d2055710ff1c1ec3402d6fc2f021f00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "looseXEngineUseMemoryPct", value)

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
    @jsii.member(jsii_name="parameterGroupId")
    def parameter_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        parameterGroupId: The ID of the parameter template.
        You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parameterGroupId"))

    @parameter_group_id.setter
    def parameter_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6dd9984767b346b428e4b150638b52f827e25887070ffacd07e1c9376980d81)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameterGroupId", value)

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
    @jsii.member(jsii_name="provisionedIops")
    def provisioned_iops(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk. Possible values: 0-min {50,000, 1000* capacity - baseline performance}.
        Baseline performance =min{1,800+50* capacity, 50000}.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "provisionedIops"))

    @provisioned_iops.setter
    def provisioned_iops(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b6f9090b83cb86d16e672e55bc12aaa3ade73779055274362a06dc668ce8f27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "provisionedIops", value)

    @builtins.property
    @jsii.member(jsii_name="proxyClass")
    def proxy_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        proxyClass: The specifications of the Standard Edition PolarProxy. Valid values:
        polar.maxscale.g2.medium.c: 2 cores
        polar.maxscale.g2.large.c: 4 cores
        polar.maxscale.g2.xlarge.c: 8 cores
        polar.maxscale.g2.2xlarge.c: 16 cores
        polar.maxscale.g2.3xlarge.c: 24 cores
        polar.maxscale.g2.4xlarge.c: 32 cores
        polar.maxscale.g2.8xlarge.c: 64 cores
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyClass"))

    @proxy_class.setter
    def proxy_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b5f4546c49c1719f499c556158882865cde9bd6b15fa48915a5488166ee0153)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyClass", value)

    @builtins.property
    @jsii.member(jsii_name="proxyType")
    def proxy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        proxyType: The type of PolarProxy. Default value: OFF. Valid values:
        OFF: disables PolarProxy.
        EXCLUSIVE: Dedicated Enterprise Edition
        GENERAL: Standard Enterprise Edition
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyType"))

    @proxy_type.setter
    def proxy_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__528ba9917e5bc2d3f4ce1b251d599688f45001cc5608bd0aa06b478cc1b47d08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyType", value)

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
    @jsii.member(jsii_name="restartMasterNode")
    def restart_master_node(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restartMasterNode: Whether to restart the master node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restartMasterNode"))

    @restart_master_node.setter
    def restart_master_node(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4af4acd37ebce21dc478a5fa49752a9cae7a3029d89be40b6f1ba87535a77854)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restartMasterNode", value)

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
    @jsii.member(jsii_name="sslEnabled")
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sslEnabled"))

    @ssl_enabled.setter
    def ssl_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0dfd4ae1cf65becdc041b125a477b7b578827e7f84f1b07a91ca0ab811351740)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sslEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="standbyAz")
    def standby_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        standbyAz: The zone where the hot standby storage cluster is stored. This is valid for Standard Edition clusters of Multi-zone Edition.
        This parameter takes effect only when the multi-zone data consistency feature is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "standbyAz"))

    @standby_az.setter
    def standby_az(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8dd486a011397e5daec464fa91209d1a27bd9fefe14ad779f85dba45eba254d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "standbyAz", value)

    @builtins.property
    @jsii.member(jsii_name="storageAutoScale")
    def storage_auto_scale(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows:
        Enable: Enable automatic storage scale.
        Disable: Disable automatic storage scale.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageAutoScale"))

    @storage_auto_scale.setter
    def storage_auto_scale(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a3de34b6345344e2c984a2f98594b0a881f6882fee245deefe881bf79c3cce0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageAutoScale", value)

    @builtins.property
    @jsii.member(jsii_name="storagePayType")
    def storage_pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storagePayType: The storage pay type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storagePayType"))

    @storage_pay_type.setter
    def storage_pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50de4e9126449a8e26720bff0ad48e6833f3327a6d97cca3f363dbf2f38eea60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storagePayType", value)

    @builtins.property
    @jsii.member(jsii_name="storageSpace")
    def storage_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageSpace: The storage space that uses the subscription billing method. Unit: GB.
        Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageSpace"))

    @storage_space.setter
    def storage_space(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6a50074666355b3f0a8a9bdbc6e869bb1121929fe51eb54c478cdb5a4499647)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageSpace", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageType: The storage type. Valid values for Enterprise Edition:
        PSL5
        PSL4
        Valid values for Standard Edition:
        ESSDPL0
        ESSDPL1
        ESSDPL2
        ESSDPL3
        ESSDAUTOPL
        This parameter is invalid for serverless clusters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f2e28524f197d62dfd69e616c9b615ef95a5aea94f546df34e44decddee6691)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="storageUpperBound")
    def storage_upper_bound(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
        The maximum value is 32000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageUpperBound"))

    @storage_upper_bound.setter
    def storage_upper_bound(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6d6680b3c8b87b4d06383030d92e47a194d2fefca9b4d2542268623f8158731)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageUpperBound", value)

    @builtins.property
    @jsii.member(jsii_name="strictConsistency")
    def strict_consistency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        strictConsistency: Specifies whether to enable the multi-zone data consistency feature. Valid values:
        ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
        OFF: disables the multi-zone data consistency feature.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "strictConsistency"))

    @strict_consistency.setter
    def strict_consistency(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0a0702484ef9c85aad3f99be5b09d77169c09db9291a260f0a7fde7dc6b1a5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "strictConsistency", value)

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
        jsii_type="@alicloud/ros-cdk-polardb.RosDBCluster.ColdStorageOptionProperty",
        jsii_struct_bases=[],
        name_mapping={"description": "description", "enable": "enable"},
    )
    class ColdStorageOptionProperty:
        def __init__(
            self,
            *,
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param description: 
            :param enable: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__839435240d47a9564c700b40bd5c1c7983e2f7d541041c16e13ac9870109b1a4)
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if description is not None:
                self._values["description"] = description
            if enable is not None:
                self._values["enable"] = enable

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            description: The description of the cold storage instance. If the description is set, it means a cold storage instance is created.
            The length is no more than 256 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enable: Whether to create the cold storage instance.
            '''
            result = self._values.get("enable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColdStorageOptionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBClusterAccessWhiteList`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterAccessWhiteListProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosDBClusterAccessWhiteList``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::DBClusterEndpoint``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBClusterEndpoint`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterEndpointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        name_mapping={
            "connection_persist": "connectionPersist",
            "consist_level": "consistLevel",
            "consist_timeout": "consistTimeout",
            "consist_timeout_action": "consistTimeoutAction",
            "distributed_transaction": "distributedTransaction",
            "enable_htap_imci": "enableHtapImci",
            "enable_overload_throttle": "enableOverloadThrottle",
            "load_balance_policy": "loadBalancePolicy",
            "master_accept_reads": "masterAcceptReads",
            "max_parallel_degree": "maxParallelDegree",
        },
    )
    class EndpointConfigProperty:
        def __init__(
            self,
            *,
            connection_persist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            consist_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            consist_timeout: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            consist_timeout_action: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            distributed_transaction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_htap_imci: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_overload_throttle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            load_balance_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            master_accept_reads: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_parallel_degree: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param connection_persist: 
            :param consist_level: 
            :param consist_timeout: 
            :param consist_timeout_action: 
            :param distributed_transaction: 
            :param enable_htap_imci: 
            :param enable_overload_throttle: 
            :param load_balance_policy: 
            :param master_accept_reads: 
            :param max_parallel_degree: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5d1908c39d32169d7232ff9ff0eee0a4a3a6dd75dbf1bb90ac653c9611108a28)
                check_type(argname="argument connection_persist", value=connection_persist, expected_type=type_hints["connection_persist"])
                check_type(argname="argument consist_level", value=consist_level, expected_type=type_hints["consist_level"])
                check_type(argname="argument consist_timeout", value=consist_timeout, expected_type=type_hints["consist_timeout"])
                check_type(argname="argument consist_timeout_action", value=consist_timeout_action, expected_type=type_hints["consist_timeout_action"])
                check_type(argname="argument distributed_transaction", value=distributed_transaction, expected_type=type_hints["distributed_transaction"])
                check_type(argname="argument enable_htap_imci", value=enable_htap_imci, expected_type=type_hints["enable_htap_imci"])
                check_type(argname="argument enable_overload_throttle", value=enable_overload_throttle, expected_type=type_hints["enable_overload_throttle"])
                check_type(argname="argument load_balance_policy", value=load_balance_policy, expected_type=type_hints["load_balance_policy"])
                check_type(argname="argument master_accept_reads", value=master_accept_reads, expected_type=type_hints["master_accept_reads"])
                check_type(argname="argument max_parallel_degree", value=max_parallel_degree, expected_type=type_hints["max_parallel_degree"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if connection_persist is not None:
                self._values["connection_persist"] = connection_persist
            if consist_level is not None:
                self._values["consist_level"] = consist_level
            if consist_timeout is not None:
                self._values["consist_timeout"] = consist_timeout
            if consist_timeout_action is not None:
                self._values["consist_timeout_action"] = consist_timeout_action
            if distributed_transaction is not None:
                self._values["distributed_transaction"] = distributed_transaction
            if enable_htap_imci is not None:
                self._values["enable_htap_imci"] = enable_htap_imci
            if enable_overload_throttle is not None:
                self._values["enable_overload_throttle"] = enable_overload_throttle
            if load_balance_policy is not None:
                self._values["load_balance_policy"] = load_balance_policy
            if master_accept_reads is not None:
                self._values["master_accept_reads"] = master_accept_reads
            if max_parallel_degree is not None:
                self._values["max_parallel_degree"] = max_parallel_degree

        @builtins.property
        def connection_persist(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            connectionPersist: Set up a connection pool. Valid values:
            off: Turn off the connection pool (default value)
            Session: Enable session-level connection pooling
            Transaction: Enable transaction-level connection pooling.
            '''
            result = self._values.get("connection_persist")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def consist_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            consistLevel: The consistency level of the cluster connection point. Valid values:
            0: eventual consistency
            1: session consistency2: Global consistency (strong)
            For example, {"ConsistLevel": "0"}.
            Note If the ReadWriteMode parameter is set to ReadOnly, the value of this parameter must be 0.
            '''
            result = self._values.get("consist_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def consist_timeout(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: consistTimeout: Global consistency read timeout.
            '''
            result = self._values.get("consist_timeout")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def consist_timeout_action(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            consistTimeoutAction: Global consistency read timeout policy. Valid values:
            0: This request occurs to the master node (default).
            1: Sql error report.
            '''
            result = self._values.get("consist_timeout_action")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def distributed_transaction(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            distributedTransaction: Set up transaction splitting. Valid values:
            on: Turn on transaction splitting (default value)
            off: Turn off transaction splitting
            '''
            result = self._values.get("distributed_transaction")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_htap_imci(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableHtapImci: Set up row/column storage to automatically divert traffic. Valid values:
            on: Turn on the automatic traffic diversion function of row storage/column storage
            off: Turn off the automatic drainage function of row storage/column storage (default)
            '''
            result = self._values.get("enable_htap_imci")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_overload_throttle(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableOverloadThrottle: Set whether to enable overload protection. Valid values:
            on: Turn on overload protection.
            off: Turn off overload protection (default).
            '''
            result = self._values.get("enable_overload_throttle")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def load_balance_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            loadBalancePolicy: Set load balancing policy. Valid values:
            0: Load balancing based on the number of connections (default)
            1: Load balancing based on the number of active requests
            '''
            result = self._values.get("load_balance_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def master_accept_reads(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            masterAcceptReads: Set whether the main library accepts reading. Valid values:
            on: Indicates that the main library accepts reading.
            off: Indicates that the main library does not accept reading (default value)
            '''
            result = self._values.get("master_accept_reads")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_parallel_degree(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maxParallelDegree: Set up parallel queries. Valid values:
            on: Enable parallel query.
            off: Turn off parallel query (default).
            '''
            result = self._values.get("max_parallel_degree")
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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBClusterEndpointAddress`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterEndpointAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosDBClusterEndpointAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress

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
        '''Properties for defining a ``RosDBClusterEndpoint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint

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
        "architecture": "architecture",
        "auto_renew_period": "autoRenewPeriod",
        "backup_retention_policy_on_cluster_deletion": "backupRetentionPolicyOnClusterDeletion",
        "clone_data_point": "cloneDataPoint",
        "cluster_network_type": "clusterNetworkType",
        "cold_storage_option": "coldStorageOption",
        "creation_category": "creationCategory",
        "creation_option": "creationOption",
        "db_cluster_description": "dbClusterDescription",
        "db_cluster_parameters": "dbClusterParameters",
        "db_minor_version": "dbMinorVersion",
        "db_node_num": "dbNodeNum",
        "default_time_zone": "defaultTimeZone",
        "deletion_protection": "deletionProtection",
        "gdn_id": "gdnId",
        "hot_standby_cluster": "hotStandbyCluster",
        "loose_polar_log_bin": "loosePolarLogBin",
        "loose_x_engine": "looseXEngine",
        "loose_x_engine_use_memory_pct": "looseXEngineUseMemoryPct",
        "lower_case_table_names": "lowerCaseTableNames",
        "maintain_time": "maintainTime",
        "parameter_group_id": "parameterGroupId",
        "period": "period",
        "period_unit": "periodUnit",
        "provisioned_iops": "provisionedIops",
        "proxy_class": "proxyClass",
        "proxy_type": "proxyType",
        "renewal_status": "renewalStatus",
        "resource_group_id": "resourceGroupId",
        "restart_master_node": "restartMasterNode",
        "scale_max": "scaleMax",
        "scale_min": "scaleMin",
        "scale_ro_num_max": "scaleRoNumMax",
        "scale_ro_num_min": "scaleRoNumMin",
        "security_group_ids": "securityGroupIds",
        "security_ip_list": "securityIpList",
        "serverless_type": "serverlessType",
        "source_resource_id": "sourceResourceId",
        "ssl_enabled": "sslEnabled",
        "standby_az": "standbyAz",
        "storage_auto_scale": "storageAutoScale",
        "storage_pay_type": "storagePayType",
        "storage_space": "storageSpace",
        "storage_type": "storageType",
        "storage_upper_bound": "storageUpperBound",
        "strict_consistency": "strictConsistency",
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
        architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        clone_data_point: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cold_storage_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.ColdStorageOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        creation_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        creation_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.DBClusterParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        db_minor_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_node_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hot_standby_cluster: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        loose_polar_log_bin: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        loose_x_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        loose_x_engine_use_memory_pct: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lower_case_table_names: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameter_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        provisioned_iops: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restart_master_node: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_ro_num_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_ro_num_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        standby_az: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_auto_scale: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_upper_bound: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        strict_consistency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster

        :param db_node_class: 
        :param db_type: 
        :param db_version: 
        :param pay_type: 
        :param allow_shut_down: 
        :param architecture: 
        :param auto_renew_period: 
        :param backup_retention_policy_on_cluster_deletion: 
        :param clone_data_point: 
        :param cluster_network_type: 
        :param cold_storage_option: 
        :param creation_category: 
        :param creation_option: 
        :param db_cluster_description: 
        :param db_cluster_parameters: 
        :param db_minor_version: 
        :param db_node_num: 
        :param default_time_zone: 
        :param deletion_protection: 
        :param gdn_id: 
        :param hot_standby_cluster: 
        :param loose_polar_log_bin: 
        :param loose_x_engine: 
        :param loose_x_engine_use_memory_pct: 
        :param lower_case_table_names: 
        :param maintain_time: 
        :param parameter_group_id: 
        :param period: 
        :param period_unit: 
        :param provisioned_iops: 
        :param proxy_class: 
        :param proxy_type: 
        :param renewal_status: 
        :param resource_group_id: 
        :param restart_master_node: 
        :param scale_max: 
        :param scale_min: 
        :param scale_ro_num_max: 
        :param scale_ro_num_min: 
        :param security_group_ids: 
        :param security_ip_list: 
        :param serverless_type: 
        :param source_resource_id: 
        :param ssl_enabled: 
        :param standby_az: 
        :param storage_auto_scale: 
        :param storage_pay_type: 
        :param storage_space: 
        :param storage_type: 
        :param storage_upper_bound: 
        :param strict_consistency: 
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
            check_type(argname="argument architecture", value=architecture, expected_type=type_hints["architecture"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument backup_retention_policy_on_cluster_deletion", value=backup_retention_policy_on_cluster_deletion, expected_type=type_hints["backup_retention_policy_on_cluster_deletion"])
            check_type(argname="argument clone_data_point", value=clone_data_point, expected_type=type_hints["clone_data_point"])
            check_type(argname="argument cluster_network_type", value=cluster_network_type, expected_type=type_hints["cluster_network_type"])
            check_type(argname="argument cold_storage_option", value=cold_storage_option, expected_type=type_hints["cold_storage_option"])
            check_type(argname="argument creation_category", value=creation_category, expected_type=type_hints["creation_category"])
            check_type(argname="argument creation_option", value=creation_option, expected_type=type_hints["creation_option"])
            check_type(argname="argument db_cluster_description", value=db_cluster_description, expected_type=type_hints["db_cluster_description"])
            check_type(argname="argument db_cluster_parameters", value=db_cluster_parameters, expected_type=type_hints["db_cluster_parameters"])
            check_type(argname="argument db_minor_version", value=db_minor_version, expected_type=type_hints["db_minor_version"])
            check_type(argname="argument db_node_num", value=db_node_num, expected_type=type_hints["db_node_num"])
            check_type(argname="argument default_time_zone", value=default_time_zone, expected_type=type_hints["default_time_zone"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument gdn_id", value=gdn_id, expected_type=type_hints["gdn_id"])
            check_type(argname="argument hot_standby_cluster", value=hot_standby_cluster, expected_type=type_hints["hot_standby_cluster"])
            check_type(argname="argument loose_polar_log_bin", value=loose_polar_log_bin, expected_type=type_hints["loose_polar_log_bin"])
            check_type(argname="argument loose_x_engine", value=loose_x_engine, expected_type=type_hints["loose_x_engine"])
            check_type(argname="argument loose_x_engine_use_memory_pct", value=loose_x_engine_use_memory_pct, expected_type=type_hints["loose_x_engine_use_memory_pct"])
            check_type(argname="argument lower_case_table_names", value=lower_case_table_names, expected_type=type_hints["lower_case_table_names"])
            check_type(argname="argument maintain_time", value=maintain_time, expected_type=type_hints["maintain_time"])
            check_type(argname="argument parameter_group_id", value=parameter_group_id, expected_type=type_hints["parameter_group_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument provisioned_iops", value=provisioned_iops, expected_type=type_hints["provisioned_iops"])
            check_type(argname="argument proxy_class", value=proxy_class, expected_type=type_hints["proxy_class"])
            check_type(argname="argument proxy_type", value=proxy_type, expected_type=type_hints["proxy_type"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restart_master_node", value=restart_master_node, expected_type=type_hints["restart_master_node"])
            check_type(argname="argument scale_max", value=scale_max, expected_type=type_hints["scale_max"])
            check_type(argname="argument scale_min", value=scale_min, expected_type=type_hints["scale_min"])
            check_type(argname="argument scale_ro_num_max", value=scale_ro_num_max, expected_type=type_hints["scale_ro_num_max"])
            check_type(argname="argument scale_ro_num_min", value=scale_ro_num_min, expected_type=type_hints["scale_ro_num_min"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument serverless_type", value=serverless_type, expected_type=type_hints["serverless_type"])
            check_type(argname="argument source_resource_id", value=source_resource_id, expected_type=type_hints["source_resource_id"])
            check_type(argname="argument ssl_enabled", value=ssl_enabled, expected_type=type_hints["ssl_enabled"])
            check_type(argname="argument standby_az", value=standby_az, expected_type=type_hints["standby_az"])
            check_type(argname="argument storage_auto_scale", value=storage_auto_scale, expected_type=type_hints["storage_auto_scale"])
            check_type(argname="argument storage_pay_type", value=storage_pay_type, expected_type=type_hints["storage_pay_type"])
            check_type(argname="argument storage_space", value=storage_space, expected_type=type_hints["storage_space"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument storage_upper_bound", value=storage_upper_bound, expected_type=type_hints["storage_upper_bound"])
            check_type(argname="argument strict_consistency", value=strict_consistency, expected_type=type_hints["strict_consistency"])
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
        if architecture is not None:
            self._values["architecture"] = architecture
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if backup_retention_policy_on_cluster_deletion is not None:
            self._values["backup_retention_policy_on_cluster_deletion"] = backup_retention_policy_on_cluster_deletion
        if clone_data_point is not None:
            self._values["clone_data_point"] = clone_data_point
        if cluster_network_type is not None:
            self._values["cluster_network_type"] = cluster_network_type
        if cold_storage_option is not None:
            self._values["cold_storage_option"] = cold_storage_option
        if creation_category is not None:
            self._values["creation_category"] = creation_category
        if creation_option is not None:
            self._values["creation_option"] = creation_option
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if db_cluster_parameters is not None:
            self._values["db_cluster_parameters"] = db_cluster_parameters
        if db_minor_version is not None:
            self._values["db_minor_version"] = db_minor_version
        if db_node_num is not None:
            self._values["db_node_num"] = db_node_num
        if default_time_zone is not None:
            self._values["default_time_zone"] = default_time_zone
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if gdn_id is not None:
            self._values["gdn_id"] = gdn_id
        if hot_standby_cluster is not None:
            self._values["hot_standby_cluster"] = hot_standby_cluster
        if loose_polar_log_bin is not None:
            self._values["loose_polar_log_bin"] = loose_polar_log_bin
        if loose_x_engine is not None:
            self._values["loose_x_engine"] = loose_x_engine
        if loose_x_engine_use_memory_pct is not None:
            self._values["loose_x_engine_use_memory_pct"] = loose_x_engine_use_memory_pct
        if lower_case_table_names is not None:
            self._values["lower_case_table_names"] = lower_case_table_names
        if maintain_time is not None:
            self._values["maintain_time"] = maintain_time
        if parameter_group_id is not None:
            self._values["parameter_group_id"] = parameter_group_id
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if provisioned_iops is not None:
            self._values["provisioned_iops"] = provisioned_iops
        if proxy_class is not None:
            self._values["proxy_class"] = proxy_class
        if proxy_type is not None:
            self._values["proxy_type"] = proxy_type
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restart_master_node is not None:
            self._values["restart_master_node"] = restart_master_node
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
        if ssl_enabled is not None:
            self._values["ssl_enabled"] = ssl_enabled
        if standby_az is not None:
            self._values["standby_az"] = standby_az
        if storage_auto_scale is not None:
            self._values["storage_auto_scale"] = storage_auto_scale
        if storage_pay_type is not None:
            self._values["storage_pay_type"] = storage_pay_type
        if storage_space is not None:
            self._values["storage_space"] = storage_space
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if storage_upper_bound is not None:
            self._values["storage_upper_bound"] = storage_upper_bound
        if strict_consistency is not None:
            self._values["strict_consistency"] = strict_consistency
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
        PostgreSQL: 11, 14, 15
        Oracle: 11, 14
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
    def architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        architecture: The architecture of CPU. Valid values:
        X86
        ARM
        '''
        result = self._values.get("architecture")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def cold_storage_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBCluster.ColdStorageOptionProperty]]:
        '''
        :Property: coldStorageOption: The option of cold storage.
        '''
        result = self._values.get("cold_storage_option")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBCluster.ColdStorageOptionProperty]], result)

    @builtins.property
    def creation_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: creationCategory: Cluster series. The value could be Normal (standard version), Basic, ArchiveNormal, NormalMultimaster and SENormal.
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
        RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
        UpgradeFromPolarDB: Upgrade migration from PolarDB.
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
    def db_minor_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbMinorVersion: The minor version of the cluster. Valid values:
        8.0.2
        8.0.1
        This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
        '''
        result = self._values.get("db_minor_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbNodeNum: The number of Standard Edition nodes. Default value: 1. Valid values:
        1: only one primary node.
        2: one read-only node and one primary node.
        '''
        result = self._values.get("db_node_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def hot_standby_cluster(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. Default value: ON. Valid values:
        ON: enables the hot standby storage cluster feature.
        OFF: disables the hot standby storage cluster feature
        STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
        The default value for Standard Edition clusters is STANDBY.
        '''
        result = self._values.get("hot_standby_cluster")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def loose_polar_log_bin(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loosePolarLogBin: Enable the Binlog function, the value range is as follows:
        ON: The cluster enables the Binlog function
        OFF: The cluster disables the Binlog function
        This parameter takes effect only when the parameter DBType is MySQL.
        '''
        result = self._values.get("loose_polar_log_bin")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def loose_x_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        looseXEngine: Enable the X-Engine storage engine function, the value range is as follows:
        ON: The cluster starts the X-Engine enginen
        OFF: The cluster shuts down the X-Engine engine
        This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
        '''
        result = self._values.get("loose_x_engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def loose_x_engine_use_memory_pct(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
        This parameter takes effect only when the parameter LooseXEngine is ON.
        '''
        result = self._values.get("loose_x_engine_use_memory_pct")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def parameter_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        parameterGroupId: The ID of the parameter template.
        You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
        '''
        result = self._values.get("parameter_group_id")
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
    def provisioned_iops(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk. Possible values: 0-min {50,000, 1000* capacity - baseline performance}.
        Baseline performance =min{1,800+50* capacity, 50000}.
        '''
        result = self._values.get("provisioned_iops")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        proxyClass: The specifications of the Standard Edition PolarProxy. Valid values:
        polar.maxscale.g2.medium.c: 2 cores
        polar.maxscale.g2.large.c: 4 cores
        polar.maxscale.g2.xlarge.c: 8 cores
        polar.maxscale.g2.2xlarge.c: 16 cores
        polar.maxscale.g2.3xlarge.c: 24 cores
        polar.maxscale.g2.4xlarge.c: 32 cores
        polar.maxscale.g2.8xlarge.c: 64 cores
        '''
        result = self._values.get("proxy_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        proxyType: The type of PolarProxy. Default value: OFF. Valid values:
        OFF: disables PolarProxy.
        EXCLUSIVE: Dedicated Enterprise Edition
        GENERAL: Standard Enterprise Edition
        '''
        result = self._values.get("proxy_type")
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
    def restart_master_node(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restartMasterNode: Whether to restart the master node.
        '''
        result = self._values.get("restart_master_node")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def standby_az(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        standbyAz: The zone where the hot standby storage cluster is stored. This is valid for Standard Edition clusters of Multi-zone Edition.
        This parameter takes effect only when the multi-zone data consistency feature is enabled.
        '''
        result = self._values.get("standby_az")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_auto_scale(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows:
        Enable: Enable automatic storage scale.
        Disable: Disable automatic storage scale.
        '''
        result = self._values.get("storage_auto_scale")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storagePayType: The storage pay type.
        '''
        result = self._values.get("storage_pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_space(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageSpace: The storage space that uses the subscription billing method. Unit: GB.
        Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
        '''
        result = self._values.get("storage_space")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageType: The storage type. Valid values for Enterprise Edition:
        PSL5
        PSL4
        Valid values for Standard Edition:
        ESSDPL0
        ESSDPL1
        ESSDPL2
        ESSDPL3
        ESSDAUTOPL
        This parameter is invalid for serverless clusters.
        '''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_upper_bound(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
        The maximum value is 32000.
        '''
        result = self._values.get("storage_upper_bound")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def strict_consistency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        strictConsistency: Specifies whether to enable the multi-zone data consistency feature. Valid values:
        ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
        OFF: disables the multi-zone data consistency feature.
        '''
        result = self._values.get("strict_consistency")
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


class RosDBNodes(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBNodes",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::DBNodes``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBNodes`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBNodesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
    @jsii.member(jsii_name="dbNodeType")
    def db_node_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbNodeType: Node type. Ranges: RO|STANDBY|DLNode|RW
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbNodeType"))

    @db_node_type.setter
    def db_node_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac80c173eb443566d35e922de04e33ecc5d83f860956f98e157466883ae0a270)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeType", value)

    @builtins.property
    @jsii.member(jsii_name="endpointBindList")
    def endpoint_bind_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "endpointBindList"))

    @endpoint_bind_list.setter
    def endpoint_bind_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8dd32d26897c4e5ce3863c1497160fcfc172ea981e3704c983418a2ea9d098ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointBindList", value)

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

    @builtins.property
    @jsii.member(jsii_name="plannedEndTime")
    def planned_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period). The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "plannedEndTime"))

    @planned_end_time.setter
    def planned_end_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bb6eb731649cf070ab4a48cf9a5cfa8024e81af7ca30a5bdec4383d8c1a6adb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "plannedEndTime", value)

    @builtins.property
    @jsii.member(jsii_name="plannedStartTime")
    def planned_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period). The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "plannedStartTime"))

    @planned_start_time.setter
    def planned_start_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__feafedff49ac42ea5054d08dfe5be39e4addf0f76abcc6fd2b0742f9ca7b5ffc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "plannedStartTime", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__69727855d357603c9c1d3a9fa5782067d6ea0626861af05a3cc8131ef83774c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDBNodesProps",
    jsii_struct_bases=[],
    name_mapping={
        "amount": "amount",
        "db_cluster_id": "dbClusterId",
        "db_node_type": "dbNodeType",
        "endpoint_bind_list": "endpointBindList",
        "imci_switch": "imciSwitch",
        "planned_end_time": "plannedEndTime",
        "planned_start_time": "plannedStartTime",
        "resource_group_id": "resourceGroupId",
    },
)
class RosDBNodesProps:
    def __init__(
        self,
        *,
        amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_bind_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        imci_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        planned_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        planned_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDBNodes``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes

        :param amount: 
        :param db_cluster_id: 
        :param db_node_type: 
        :param endpoint_bind_list: 
        :param imci_switch: 
        :param planned_end_time: 
        :param planned_start_time: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30ccd73541575440357dfbfaf46c8726ff957365d80870e75a0599bace78e3d1)
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_node_type", value=db_node_type, expected_type=type_hints["db_node_type"])
            check_type(argname="argument endpoint_bind_list", value=endpoint_bind_list, expected_type=type_hints["endpoint_bind_list"])
            check_type(argname="argument imci_switch", value=imci_switch, expected_type=type_hints["imci_switch"])
            check_type(argname="argument planned_end_time", value=planned_end_time, expected_type=type_hints["planned_end_time"])
            check_type(argname="argument planned_start_time", value=planned_start_time, expected_type=type_hints["planned_start_time"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "amount": amount,
            "db_cluster_id": db_cluster_id,
        }
        if db_node_type is not None:
            self._values["db_node_type"] = db_node_type
        if endpoint_bind_list is not None:
            self._values["endpoint_bind_list"] = endpoint_bind_list
        if imci_switch is not None:
            self._values["imci_switch"] = imci_switch
        if planned_end_time is not None:
            self._values["planned_end_time"] = planned_end_time
        if planned_start_time is not None:
            self._values["planned_start_time"] = planned_start_time
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

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
    def db_node_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbNodeType: Node type. Ranges: RO|STANDBY|DLNode|RW
        '''
        result = self._values.get("db_node_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_bind_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
        '''
        result = self._values.get("endpoint_bind_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def imci_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
        '''
        result = self._values.get("imci_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def planned_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period). The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        '''
        result = self._values.get("planned_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def planned_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period). The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        '''
        result = self._values.get("planned_start_time")
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBNodesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDatabase(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDatabase",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::Database``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Database`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
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
            type_hints = typing.get_type_hints(_typecheckingstub__7155420c446412d6c2057d84f6a15cf7c7f03eb6883664c35809d0a3d5a78e1c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__be1511b61f9bdcac859bbb09e9ceb878cb0a8b62dfa9cdffb2480f11f3480ab5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__757210583760cf3303a8b0f14676c6325a6216aba5353528a78f7bb36dfddf09)
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
            type_hints = typing.get_type_hints(_typecheckingstub__607f9c9e7e85a87cc76542666c9dc82996fc678ca52a1452b4b8b6a3c8435683)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0a03cdadae55629d418d78fd72c71017e0994ba5454d981b49c9ad937cba6626)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e0582dda36152d133c08a47b6d346445594214fd0f4aea09ec6008a8a879ce0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cd23443f3e6773010f55ba5854d6e40a6f94634bb2f8d868ecf5021300ebb6c3)
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
        ReadIndex: has read and index permissions on the database.
        Default value: ReadWrite.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountPrivilege"))

    @account_privilege.setter
    def account_privilege(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f952fa9aa5e8e2c25b745997e1fdcd8472a131d63f2658c6cde32045f9ea2c95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPrivilege", value)

    @builtins.property
    @jsii.member(jsii_name="collate")
    def collate(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        collate: A locale setting that specifies the collation for newly created databases.
        The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        when the cluster is PolarDB MySQL, this parameter is not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "collate"))

    @collate.setter
    def collate(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdc9d2ee3c4cff07dd2c24489c3b331c5dba64dc9edefd10a0fd401dbec838fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "collate", value)

    @builtins.property
    @jsii.member(jsii_name="ctype")
    def ctype(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ctype: A locale setting that specifies the character classification of the database.
        The locale must be compatible with the character set set by the CharacterSetName parameter.
        It is consistent with the incoming information of Collate.
        When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        when the cluster is PolarDB MySQL, this parameter is optional.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ctype"))

    @ctype.setter
    def ctype(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9ed923e81c4d812768f8052fd13ff0a7154e717884328ad6c170d89cd35589b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ctype", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__ae7f4a289a152955288fdafd31be3bce4ed02454f3aa4ef26606d02f08a5dd2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbDescription", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDatabaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "character_set_name": "characterSetName",
        "db_cluster_id": "dbClusterId",
        "db_name": "dbName",
        "account_name": "accountName",
        "account_privilege": "accountPrivilege",
        "collate": "collate",
        "ctype": "ctype",
        "db_description": "dbDescription",
    },
)
class RosDatabaseProps:
    def __init__(
        self,
        *,
        character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        collate: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ctype: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDatabase``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database

        :param character_set_name: 
        :param db_cluster_id: 
        :param db_name: 
        :param account_name: 
        :param account_privilege: 
        :param collate: 
        :param ctype: 
        :param db_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35662224a54b9a0759b76cfaf7e8387d3da81a3b0dd626e85e49024df9b0948a)
            check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument collate", value=collate, expected_type=type_hints["collate"])
            check_type(argname="argument ctype", value=ctype, expected_type=type_hints["ctype"])
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
        if collate is not None:
            self._values["collate"] = collate
        if ctype is not None:
            self._values["ctype"] = ctype
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
        ReadIndex: has read and index permissions on the database.
        Default value: ReadWrite.
        '''
        result = self._values.get("account_privilege")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def collate(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        collate: A locale setting that specifies the collation for newly created databases.
        The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        when the cluster is PolarDB MySQL, this parameter is not supported.
        '''
        result = self._values.get("collate")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ctype(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ctype: A locale setting that specifies the character classification of the database.
        The locale must be compatible with the character set set by the CharacterSetName parameter.
        It is consistent with the incoming information of Collate.
        When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        when the cluster is PolarDB MySQL, this parameter is optional.
        '''
        result = self._values.get("ctype")
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
        return "RosDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGlobalDatabaseNetwork(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosGlobalDatabaseNetwork",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::GlobalDatabaseNetwork``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GlobalDatabaseNetwork`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGlobalDatabaseNetworkProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2577c0ed69ba8a50f226db5dc4268656cacb156425df3b370f830079f676abd6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__22b2432d96d0faf47f3a18bb837691978b0b8b844ecb476de2b19b0a3b3de137)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Connections: The information about the connection to the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time at which the GDN was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbClusters: The clusters that are included in the GDN.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusters"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbType: The type of the database engine.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbVersion: The version of the database engine.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrGdnDescription")
    def attr_gdn_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GdnDescription: The description of the GDN.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGdnDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGdnId")
    def attr_gdn_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GdnId: The ID of the GDN.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGdnId"))

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
        :Property: dbClusterId: The ID of the primary cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__092c367166851548aedbc143474393f88cdc3a1fee862761f36db4e2c70ea017)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0cece4b2734a13eb64a4e78fd1aaced5f1f807c5f416e70d7e303def90ee347)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gdnDescription")
    def gdn_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gdnDescription: The description of the GDN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gdnDescription"))

    @gdn_description.setter
    def gdn_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de2dbe8e888152a2a3d06e3adde7ec649baddb3ecdd943086f921175ce267bef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gdnDescription", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__1f5d71414370b0c093afc22dded448e3291a3c2eb6e4955193055bc821b853ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosGlobalDatabaseNetworkProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "gdn_description": "gdnDescription",
        "resource_group_id": "resourceGroupId",
    },
)
class RosGlobalDatabaseNetworkProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        gdn_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosGlobalDatabaseNetwork``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork

        :param db_cluster_id: 
        :param gdn_description: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__650880dfc4efcecb729ef1679258748a94170642eb6c11f3b3edaf5f31c4b364)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument gdn_description", value=gdn_description, expected_type=type_hints["gdn_description"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
        }
        if gdn_description is not None:
            self._values["gdn_description"] = gdn_description
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: The ID of the primary cluster.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def gdn_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gdnDescription: The description of the GDN.
        '''
        result = self._values.get("gdn_description")
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGlobalDatabaseNetworkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGlobalSecurityIPGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosGlobalSecurityIPGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::GlobalSecurityIPGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GlobalSecurityIPGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGlobalSecurityIPGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7349ab7f2235475d15d0319fdff649237ffa4d56853f4f4e95c4eec995f1a906)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7400de84ad09411345e329c64074a921339a0a538c752bb5393aad75fd8920e1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityGroupId")
    def attr_global_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GlobalSecurityGroupId: The ID of the IP whitelist template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGlobalSecurityGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5a7ff0908f388866de9d55de4ee384e33020ac8c19e822d4184f30edf448a399)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gIpList")
    def g_ip_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        gIpList: The IP addresses in the whitelist template.
        You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "gIpList"))

    @g_ip_list.setter
    def g_ip_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eea1bed087d2089a77c1ce8b9b101d721b6978324a1c4fd16af068a70468a8f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gIpList", value)

    @builtins.property
    @jsii.member(jsii_name="globalIgName")
    def global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        globalIgName: The name of the IP whitelist template. The name must meet the following requirements:
        The name can contain lowercase letters, digits, and underscores (_).
        The name must start with a letter and end with a letter or digit.
        The name must be 2 to 120 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "globalIgName"))

    @global_ig_name.setter
    def global_ig_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10e6dfca07d2c97c7aa553548760d194bb9f052e7aca36dbc8591d4de2f01f48)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "globalIgName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__6637f18728241c0dadfe98b343b101330afb951bd0e46a69a00acf57251ce061)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosGlobalSecurityIPGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "g_ip_list": "gIpList",
        "global_ig_name": "globalIgName",
        "resource_group_id": "resourceGroupId",
    },
)
class RosGlobalSecurityIPGroupProps:
    def __init__(
        self,
        *,
        g_ip_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        global_ig_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosGlobalSecurityIPGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup

        :param g_ip_list: 
        :param global_ig_name: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4810e2bc2f8b3c3d9a7e3f25e9fea99f7e87ddc9b1fd5b12e4ea9e3624fa39a)
            check_type(argname="argument g_ip_list", value=g_ip_list, expected_type=type_hints["g_ip_list"])
            check_type(argname="argument global_ig_name", value=global_ig_name, expected_type=type_hints["global_ig_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "g_ip_list": g_ip_list,
            "global_ig_name": global_ig_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def g_ip_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        gIpList: The IP addresses in the whitelist template.
        You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
        '''
        result = self._values.get("g_ip_list")
        assert result is not None, "Required property 'g_ip_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        globalIgName: The name of the IP whitelist template. The name must meet the following requirements:
        The name can contain lowercase letters, digits, and underscores (_).
        The name must start with a letter and end with a letter or digit.
        The name must be 2 to 120 characters in length.
        '''
        result = self._values.get("global_ig_name")
        assert result is not None, "Required property 'global_ig_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGlobalSecurityIPGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosParameterGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosParameterGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::POLARDB::ParameterGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ParameterGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosParameterGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ebc9d39556cb3e2c3bc5d1cbc8e4a652432b903eb352545e52e663f6471f6e7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ce646d3b5361bc77230accccf5455933caad599bb614da9cab3c7322e2098ad5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the parameter template was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbType: The type of the database engine.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbVersion: The version of the database engine.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrForceRestart")
    def attr_force_restart(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrForceRestart"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterCounts")
    def attr_parameter_counts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterCounts: The number of parameters in the parameter template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterCounts"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupDesc")
    def attr_parameter_group_desc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterGroupDesc: The description of the parameter template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterGroupDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupId")
    def attr_parameter_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterGroupId: The ID of the parameter group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupName")
    def attr_parameter_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterGroupName: The name of the parameter template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupType")
    def attr_parameter_group_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterGroupType: The type of the parameter template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterGroupType"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Parameters: The list of the parameters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbType")
    def db_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbType: The type of the database engine.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbType"))

    @db_type.setter
    def db_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1396742b5d30d5a89ea28e95ee0ece43cb15b2bacd8deaddf8e13ebefb698764)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbType", value)

    @builtins.property
    @jsii.member(jsii_name="dbVersion")
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbVersion: The version of the database engine.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbVersion"))

    @db_version.setter
    def db_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74a06f5bb700e2d897d49fdd2a7a0fef4db46c38c8f363ff678bee357437f163)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e76e401f75c51c5f09800c9a67d0b4ddd1c68dcb5bd4e17500d61c96d8b58f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="parameterGroupName")
    def parameter_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: parameterGroupName: The name of the parameter template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "parameterGroupName"))

    @parameter_group_name.setter
    def parameter_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25ffce05b2abb56afe94c366bb9e7e8638f5691c4723009551b7749ee78765f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameterGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosParameterGroup.ParametersProperty"]]]:
        '''
        :Property: parameters: The list of the parameters.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosParameterGroup.ParametersProperty"]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosParameterGroup.ParametersProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33baa2e0b2559e6c5bf120e483a3050a350d205af753f59ecee18c30dde512ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="parameterGroupDesc")
    def parameter_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parameterGroupDesc: The description of the parameter template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parameterGroupDesc"))

    @parameter_group_desc.setter
    def parameter_group_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8ffaf7bdc0cc95c2f1d8ed5a0cfcf8a2a371f30addd0b9beb9addb08b30726a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameterGroupDesc", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__03c2b57d57b6f2e9e7b6cd83bd8c20204d8cda64d6dd44254517ec070b75c287)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-polardb.RosParameterGroup.ParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"param_name": "paramName", "param_value": "paramValue"},
    )
    class ParametersProperty:
        def __init__(
            self,
            *,
            param_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            param_value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param param_name: 
            :param param_value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bdbad182f23416ba9b9e7da157b82fb87d750ef0c6d49af49a9dcacd9c5262a7)
                check_type(argname="argument param_name", value=param_name, expected_type=type_hints["param_name"])
                check_type(argname="argument param_value", value=param_value, expected_type=type_hints["param_value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "param_name": param_name,
                "param_value": param_value,
            }

        @builtins.property
        def param_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: paramName: Parameter name.
            '''
            result = self._values.get("param_name")
            assert result is not None, "Required property 'param_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def param_value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: paramValue: Parameter value.
            '''
            result = self._values.get("param_value")
            assert result is not None, "Required property 'param_value' is missing"
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
    jsii_type="@alicloud/ros-cdk-polardb.RosParameterGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_type": "dbType",
        "db_version": "dbVersion",
        "parameter_group_name": "parameterGroupName",
        "parameters": "parameters",
        "parameter_group_desc": "parameterGroupDesc",
        "resource_group_id": "resourceGroupId",
    },
)
class RosParameterGroupProps:
    def __init__(
        self,
        *,
        db_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parameter_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosParameterGroup.ParametersProperty, typing.Dict[builtins.str, typing.Any]]]]],
        parameter_group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosParameterGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup

        :param db_type: 
        :param db_version: 
        :param parameter_group_name: 
        :param parameters: 
        :param parameter_group_desc: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0e95f1642cbeb53fc7622c8520922ba247e03309651669ffa4a78c591c61202)
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument parameter_group_name", value=parameter_group_name, expected_type=type_hints["parameter_group_name"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument parameter_group_desc", value=parameter_group_desc, expected_type=type_hints["parameter_group_desc"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_type": db_type,
            "db_version": db_version,
            "parameter_group_name": parameter_group_name,
            "parameters": parameters,
        }
        if parameter_group_desc is not None:
            self._values["parameter_group_desc"] = parameter_group_desc
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def db_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbType: The type of the database engine.
        '''
        result = self._values.get("db_type")
        assert result is not None, "Required property 'db_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbVersion: The version of the database engine.
        '''
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parameter_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: parameterGroupName: The name of the parameter template.
        '''
        result = self._values.get("parameter_group_name")
        assert result is not None, "Required property 'parameter_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosParameterGroup.ParametersProperty]]]:
        '''
        :Property: parameters: The list of the parameters.
        '''
        result = self._values.get("parameters")
        assert result is not None, "Required property 'parameters' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosParameterGroup.ParametersProperty]]], result)

    @builtins.property
    def parameter_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parameterGroupDesc: The description of the parameter template.
        '''
        result = self._values.get("parameter_group_desc")
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosParameterGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAITask)
class AITask(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.AITask",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::AITask``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAITask``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AITaskProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__364de73a171180f45764ac3e0e1d85f55d97398c1a8eda6c36be118817b79e31)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the DB cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AITaskProps:
        return typing.cast(AITaskProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aa54741e020d0f2f924fbf9b04b9e54d1daa3bc16a5be482728e569d132a3a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afd80465f35662917ec22ebf3094eb60d0aa9a1d3891ef04fba3575894337c26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__122fed97c807ff897f28e868d3fd2b1979cb5a2b7caf05916531d6945775b61d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAccount)
class Account(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.Account",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::Account``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccount``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        return typing.cast(AccountProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13671a82efbc2c4f0199a84137e9e30fa4fd9f892cba13cd8a5ebf6a25215879)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57c20f2456ee0a654cad51fee00c50bf1e69c277d111ede0b480d53d5071ba6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1117eb9aed1b98220819a16a12ca8fa0a46a5b96e5d3cac20e8345e6c8c5b160)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAccountPrivilege)
class AccountPrivilege(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.AccountPrivilege",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::AccountPrivilege``, which is used to grant access permissions on one or more databases in a specified ApsaraDB for POLARDB cluster to a standard account.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccountPrivilege``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccountPrivilegeProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountPrivilegeProps:
        return typing.cast(AccountPrivilegeProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8935c0f3d7535ef24324ac2391f9c8b5fd38737298a4128811b9ef586d9a6bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__196e5cada31927b41b0c0fcbdf3a6a1a948a634ffa521e9fbb21591059f97431)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b7dce77905bd2cfd7c00d91e0981bc33380d65949c70c54926d35da49cb5ea8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IBackup)
class Backup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.Backup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::Backup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBackup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[BackupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce5632d3de29be14fefca62d80fa942c10d58794c315a0114ee4bbf6030d2c0d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackupJobId")
    def attr_backup_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupJobId: The ID of the backup set.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupProps:
        return typing.cast(BackupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15edb1fa44e028ae557d8be74d8be9e316a8572d8b9f3e4b05864fabbc76b755)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2888468a2c8b1b6fe8faadb97cdbfbe53b2cadd0deb7b93d47511fe93b087cd2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__240d3e4f1f243f5e36641fdf8121ec51a5587a8a3286da888badb3b5475a70f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDBCluster)
class DBCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBCluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::DBCluster``, which is used to create a PolarDB cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DBClusterProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterConnectionString")
    def attr_cluster_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterConnectionString: The cluster connection string of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterEndpointId")
    def attr_cluster_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrColdStorageInstanceId")
    def attr_cold_storage_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ColdStorageInstanceId: The ID of the cold storage instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrColdStorageInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomConnectionStrings")
    def attr_custom_connection_strings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomConnectionStrings: The custom connection strings of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCustomConnectionStrings"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomEndpointIds")
    def attr_custom_endpoint_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCustomEndpointIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterDescription: The description of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeIds: The ID list of cluster nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The Order ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionString")
    def attr_primary_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryConnectionString: The primary connection string of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryConnectionStrings")
    def attr_primary_connection_strings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryConnectionStrings"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointId")
    def attr_primary_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryEndpointIds")
    def attr_primary_endpoint_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryEndpointIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterProps:
        return typing.cast(DBClusterProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e55d78c8ec34053b83603e64172621aad9682f6897c9a609cbc45a9b61a63a16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1d9cead3a2e408027f5a0f4ee7dd8141cedc7accc39349998226e8427cbe5dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80dad29226986744dfb14e1bd816fc1d172b4f939d0317c73510034beccd1cb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDBClusterAccessWhiteList)
class DBClusterAccessWhiteList(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterAccessWhiteList",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBClusterAccessWhiteList``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DBClusterAccessWhiteListProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterAccessWhiteListProps:
        return typing.cast(DBClusterAccessWhiteListProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4501b9cc906d29c4aa650aee9fc4e3ece8d9e6b10a4c349c87406706e38850ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__122435bd6d20c609ccd2114642aa963b7763d01a110204350e3bb072da5221a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7d7bc8b0ea7ef8a55c0e14851f67f894a7188a26dfb6576d69571ea504e3971)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDBClusterEndpoint)
class DBClusterEndpoint(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterEndpoint",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::DBClusterEndpoint``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBClusterEndpoint``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DBClusterEndpointProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Addresses: The address items of the db cluster endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: The first connection string of the db cluster endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbEndpointId")
    def attr_db_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBEndpointId: DB cluster endpoint ID.

        E.g. pe-xxxxxxxx.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterEndpointProps:
        return typing.cast(DBClusterEndpointProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4eae5e4b0eac39b93250daadab98479e119d9ec0d3b300d7697320574ccb80e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca19c981a19445650486f5dfd8ad7734125589840744aaf78d2dfc19da1a292c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2b7788ebbc050c1a65fa1c2e3422d49d9470570423ca97680ed37903a17f5ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDBClusterEndpointAddress)
class DBClusterEndpointAddress(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterEndpointAddress",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBClusterEndpointAddress``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DBClusterEndpointAddressProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Address: The details of the endpoint address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: The connection string of the endpoint address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterEndpointAddressProps:
        return typing.cast(DBClusterEndpointAddressProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6936ea9c60dade4f8d091ca0ace9ce5008401eae69d62eced981356ed761ad0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad6ceb4d6edec4e09b9256be7fc547b292cab94fefc4f31f1e4ab65f33517638)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__461d47fc0e56ba57110fc3ba983f9215393001aa9a0b6630c624f7b5b59d6303)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDBNodes)
class DBNodes(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBNodes",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::DBNodes``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBNodes``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DBNodesProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_db_node_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeIds: The ID list of added cluster nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderIds: The order ID list of added cluster nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBNodesProps:
        return typing.cast(DBNodesProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__325e356adae17395928fc960f66822cf87c47aa4c702928d145f2b4976f5f0ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4ea4bf4787678ef4d66807456f260b336cbc144246777e622e29622b6f14870)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbc4ad39ec3d96e4fd04dc58c055b8c0c905be1cfba6a9c6267f2b647344fa42)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDatabase)
class Database(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.Database",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::Database``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDatabase``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
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
            type_hints = typing.get_type_hints(_typecheckingstub__b2459656f96d889d0b8cea065776b5be0f5bcd12624778897883aec92752c845)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

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
            type_hints = typing.get_type_hints(_typecheckingstub__a60502169ee552ada79ee5e4f229c84b0895e086ee3630b7fc7657b39f6d9360)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__512f6cd4b69f677bd6ab2861bdf3a928c5370a8e55c6050132d48f639323837e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46e4c58f1ccdf19e90fc39b8625d454ba1caf5c7964c25f82829890266ece2d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGlobalDatabaseNetwork)
class GlobalDatabaseNetwork(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.GlobalDatabaseNetwork",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::GlobalDatabaseNetwork``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGlobalDatabaseNetwork``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GlobalDatabaseNetworkProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7b60c5ce3c46151ee61aab192ac7563bf266366e639e990b36d33736d43ab8e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Connections: The information about the connection to the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time at which the GDN was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusters: The clusters that are included in the GDN.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusters"))

    @builtins.property
    @jsii.member(jsii_name="attrDbType")
    def attr_db_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbType: The type of the database engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: The version of the database engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrGdnDescription")
    def attr_gdn_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GdnDescription: The description of the GDN.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGdnDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGdnId")
    def attr_gdn_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GdnId: The ID of the GDN.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGdnId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalDatabaseNetworkProps:
        return typing.cast(GlobalDatabaseNetworkProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dafdd317d616c24b098e531b50cece01c33061c0c00fdbd9583536fb360cae0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70ff066a66f495d6077f220c3b21abb814dca18aaf67334daec3bed793369093)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aac9048d677bbe2dccf8dc60b7743508bb8465b0add758a4f9a9e99961e9f25b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGlobalSecurityIPGroup)
class GlobalSecurityIPGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.GlobalSecurityIPGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::POLARDB::GlobalSecurityIPGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGlobalSecurityIPGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GlobalSecurityIPGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c762a0bc1c532100fa393bb4d332c9534936251a08d203dcb2e0bbccd97469f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityGroupId")
    def attr_global_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGlobalSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalSecurityIPGroupProps:
        return typing.cast(GlobalSecurityIPGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaf4c7687bd669c240e6434bf796e25346d19147e0e85d2dff2cd9432d417572)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5629c961a3c473b98de0285f04d34d9782013f5e3a6c1b412df786c5a9a72af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dccef8a82906e8ae2fe31961422aa62271e86217140ce405d2a9c191d13cd33f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AITask",
    "AITaskProps",
    "Account",
    "AccountPrivilege",
    "AccountPrivilegeProps",
    "AccountProps",
    "Backup",
    "BackupProps",
    "DBCluster",
    "DBClusterAccessWhiteList",
    "DBClusterAccessWhiteListProps",
    "DBClusterEndpoint",
    "DBClusterEndpointAddress",
    "DBClusterEndpointAddressProps",
    "DBClusterEndpointProps",
    "DBClusterProps",
    "DBNodes",
    "DBNodesProps",
    "Database",
    "DatabaseProps",
    "GlobalDatabaseNetwork",
    "GlobalDatabaseNetworkProps",
    "GlobalSecurityIPGroup",
    "GlobalSecurityIPGroupProps",
    "IAITask",
    "IAccount",
    "IAccountPrivilege",
    "IBackup",
    "IDBCluster",
    "IDBClusterAccessWhiteList",
    "IDBClusterEndpoint",
    "IDBClusterEndpointAddress",
    "IDBNodes",
    "IDatabase",
    "IGlobalDatabaseNetwork",
    "IGlobalSecurityIPGroup",
    "IParameterGroup",
    "ParameterGroup",
    "ParameterGroupProps",
    "RosAITask",
    "RosAITaskProps",
    "RosAccount",
    "RosAccountPrivilege",
    "RosAccountPrivilegeProps",
    "RosAccountProps",
    "RosBackup",
    "RosBackupProps",
    "RosDBCluster",
    "RosDBClusterAccessWhiteList",
    "RosDBClusterAccessWhiteListProps",
    "RosDBClusterEndpoint",
    "RosDBClusterEndpointAddress",
    "RosDBClusterEndpointAddressProps",
    "RosDBClusterEndpointProps",
    "RosDBClusterProps",
    "RosDBNodes",
    "RosDBNodesProps",
    "RosDatabase",
    "RosDatabaseProps",
    "RosGlobalDatabaseNetwork",
    "RosGlobalDatabaseNetworkProps",
    "RosGlobalSecurityIPGroup",
    "RosGlobalSecurityIPGroupProps",
    "RosParameterGroup",
    "RosParameterGroupProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__9f5ffc77d1a8fc10b101b8bf35f6f8338c6ca5ffabb8f11754b717a1ab9ae847(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
    priv_for_all_db: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4015e4ad624ac12a14f5c3bdbf231305e815a43c100784f6a56434808a01cd8b(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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
    architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    clone_data_point: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cold_storage_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.ColdStorageOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    creation_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    creation_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.DBClusterParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    db_minor_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_node_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hot_standby_cluster: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    loose_polar_log_bin: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    loose_x_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    loose_x_engine_use_memory_pct: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lower_case_table_names: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameter_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    provisioned_iops: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restart_master_node: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_ro_num_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_ro_num_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    standby_az: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_auto_scale: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_upper_bound: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    strict_consistency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff474dbfc40a620c637b08605d0663742efa7f649d676f9e88ebe620ce3a217c(
    *,
    amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_bind_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    imci_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    planned_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    planned_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82b68f2502b91222ddde0dd5c94cf5d080c4ae26fd444b6d2e3204d79a1dd8cb(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    collate: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ctype: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__998a96ab96f51aa78e90b1a63a36693dc1a0dfef0e42862fddd93f85d117808c(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    gdn_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9f03ca5cc8e7ea2f35c3ee62541243d9d591f3e244b876f912d1350abeb1c26(
    *,
    g_ip_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    global_ig_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e952e32b026b462aac761574a5ef88037003db23e35617b8d67d375ac85b713(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ParameterGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__788d54f96c45f0b941e83cd3531928fbcf43c47da33f92ab80ee2b5f3e0045a8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9757e3edd17b8226d7d1b73bd1ad05cac6f54c152b5811f0c06ea3bb2523b881(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a60ec18887588fcdd54cca5e85c1bf392cd7d10b32147b221b9d83fbdbedee96(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63ead05d2f9d89f1a68a2fb5fbf3b264320789ac80c49e211962dabc14535874(
    *,
    db_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parameter_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosParameterGroup.ParametersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    parameter_group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95717fcfdd18a814df205d88b2f0a223d08c0e92bd8cebc7a90046fcd947d758(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAITaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89d2f0372d0ed58e14ce8e738406bebf15e3b989b1f34d1732a055611006bfc7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54e9ce93bf5975a5dcf5a7f86cd182ee7efd1867fb95291cfbb78755d797db5f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1838c7d0a32e34ce95e89abc6a5543dec890ab80156b0a075a827c8f2d9a842c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1dac65f0df46cfa1c9ad57afac173b8043cf0c3c9ce84eac6de01c627f2d2ad2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35dabc51b008a9a6032c180720734ce5c6fdbbc0d1db8938a9488eb897898ff1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__222ef640be142c45012d4d96d441596bebc6cab1a28393cf703d9e6590d933e3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85ea52567cdee4db3a327b024f1c996c394f7a7904253d95d0c3ad9d1daeeb9d(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__0edc53f670a0a3fd7f9fdf35c4416dfae88ed5f81b276db763e0ab63ef677e38(
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
    priv_for_all_db: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b36bd7d8ac66820db05976a49f68567dfcebd287976e29ce2168a72b50520979(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBackupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5b00a12ca33531ce4ecdcf377a49d9146ca28046f13186d1c1a6b50af3debbe(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81eba724155d61380fff161042e8950d1bc67657368ac65bd7f3c0259aae657b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd85ed2b7bbd7948fba4f90eede30602c0f8554c63f9d550a2a524094ba1a398(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8673ab4099ee01f12e164a554eb77dd95bb23681a4f14b4c44dbf7f8912bc8c(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__528fc0a7dedab76d1bf852ba40633e01b69513b065a6835b82941d756ced42a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__7d7825e85c1aa74ae301e853e89115b111fcb0775635afcb7e7e0bb3f2e1217b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBCluster.ColdStorageOptionProperty]],
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

def _typecheckingstub__bdbb573dcf4d370a06d4b9c9759bd9592fd4cf785d1abe12c46ef0352a7d9ee9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a867e25f1dff795ee54524c54cc945a14344fbc534a77610b81e6fd04bc9f51(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fc3789eff61e20b49431866ab795725d5ba7f97ea14e8d0f6752537c26ebb34(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6117670c3d087a03952026d01d2126a42371b0a16ebafc6a148d7f0030fb7d08(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c641645ae2148e02bccaeae0e2c09db604b758bbe743d8adc625f418f1affc7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da8f298d1d0e8a0f8a25198bccd1e4e8f25bb0e64952076cc09e46f903820004(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4116724b7903441032ed49bc3add0f3153dbe2cc72395a44a4d99c03822b9cf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf2337e430f0cc6625fd184d496a57ffb973732558c809ed5dacd28a295d5f49(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a7c8796333e66e5fc34a6637a6f766e4d2055710ff1c1ec3402d6fc2f021f00(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__e6dd9984767b346b428e4b150638b52f827e25887070ffacd07e1c9376980d81(
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

def _typecheckingstub__9b6f9090b83cb86d16e672e55bc12aaa3ade73779055274362a06dc668ce8f27(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b5f4546c49c1719f499c556158882865cde9bd6b15fa48915a5488166ee0153(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__528ba9917e5bc2d3f4ce1b251d599688f45001cc5608bd0aa06b478cc1b47d08(
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

def _typecheckingstub__4af4acd37ebce21dc478a5fa49752a9cae7a3029d89be40b6f1ba87535a77854(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__0dfd4ae1cf65becdc041b125a477b7b578827e7f84f1b07a91ca0ab811351740(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8dd486a011397e5daec464fa91209d1a27bd9fefe14ad779f85dba45eba254d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a3de34b6345344e2c984a2f98594b0a881f6882fee245deefe881bf79c3cce0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50de4e9126449a8e26720bff0ad48e6833f3327a6d97cca3f363dbf2f38eea60(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6a50074666355b3f0a8a9bdbc6e869bb1121929fe51eb54c478cdb5a4499647(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f2e28524f197d62dfd69e616c9b615ef95a5aea94f546df34e44decddee6691(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6d6680b3c8b87b4d06383030d92e47a194d2fefca9b4d2542268623f8158731(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0a0702484ef9c85aad3f99be5b09d77169c09db9291a260f0a7fde7dc6b1a5c(
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

def _typecheckingstub__839435240d47a9564c700b40bd5c1c7983e2f7d541041c16e13ac9870109b1a4(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
    connection_persist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    consist_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    consist_timeout: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    consist_timeout_action: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    distributed_transaction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_htap_imci: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_overload_throttle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balance_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_accept_reads: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_parallel_degree: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
    architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    clone_data_point: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cold_storage_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.ColdStorageOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    creation_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    creation_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBCluster.DBClusterParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    db_minor_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_node_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hot_standby_cluster: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    loose_polar_log_bin: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    loose_x_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    loose_x_engine_use_memory_pct: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lower_case_table_names: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameter_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    provisioned_iops: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restart_master_node: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_ro_num_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_ro_num_min: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    standby_az: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_auto_scale: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_space: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_upper_bound: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    strict_consistency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__ac80c173eb443566d35e922de04e33ecc5d83f860956f98e157466883ae0a270(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8dd32d26897c4e5ce3863c1497160fcfc172ea981e3704c983418a2ea9d098ef(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c19b3d396c35d4773a22b1a29a2e098d9268d7430582f4476b7b46366f1f4804(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bb6eb731649cf070ab4a48cf9a5cfa8024e81af7ca30a5bdec4383d8c1a6adb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feafedff49ac42ea5054d08dfe5be39e4addf0f76abcc6fd2b0742f9ca7b5ffc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69727855d357603c9c1d3a9fa5782067d6ea0626861af05a3cc8131ef83774c1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30ccd73541575440357dfbfaf46c8726ff957365d80870e75a0599bace78e3d1(
    *,
    amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_bind_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    imci_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    planned_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    planned_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7155420c446412d6c2057d84f6a15cf7c7f03eb6883664c35809d0a3d5a78e1c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be1511b61f9bdcac859bbb09e9ceb878cb0a8b62dfa9cdffb2480f11f3480ab5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__757210583760cf3303a8b0f14676c6325a6216aba5353528a78f7bb36dfddf09(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__607f9c9e7e85a87cc76542666c9dc82996fc678ca52a1452b4b8b6a3c8435683(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a03cdadae55629d418d78fd72c71017e0994ba5454d981b49c9ad937cba6626(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e0582dda36152d133c08a47b6d346445594214fd0f4aea09ec6008a8a879ce0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd23443f3e6773010f55ba5854d6e40a6f94634bb2f8d868ecf5021300ebb6c3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f952fa9aa5e8e2c25b745997e1fdcd8472a131d63f2658c6cde32045f9ea2c95(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdc9d2ee3c4cff07dd2c24489c3b331c5dba64dc9edefd10a0fd401dbec838fd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9ed923e81c4d812768f8052fd13ff0a7154e717884328ad6c170d89cd35589b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae7f4a289a152955288fdafd31be3bce4ed02454f3aa4ef26606d02f08a5dd2c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35662224a54b9a0759b76cfaf7e8387d3da81a3b0dd626e85e49024df9b0948a(
    *,
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    collate: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ctype: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2577c0ed69ba8a50f226db5dc4268656cacb156425df3b370f830079f676abd6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGlobalDatabaseNetworkProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22b2432d96d0faf47f3a18bb837691978b0b8b844ecb476de2b19b0a3b3de137(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__092c367166851548aedbc143474393f88cdc3a1fee862761f36db4e2c70ea017(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0cece4b2734a13eb64a4e78fd1aaced5f1f807c5f416e70d7e303def90ee347(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de2dbe8e888152a2a3d06e3adde7ec649baddb3ecdd943086f921175ce267bef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f5d71414370b0c093afc22dded448e3291a3c2eb6e4955193055bc821b853ff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__650880dfc4efcecb729ef1679258748a94170642eb6c11f3b3edaf5f31c4b364(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    gdn_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7349ab7f2235475d15d0319fdff649237ffa4d56853f4f4e95c4eec995f1a906(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGlobalSecurityIPGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7400de84ad09411345e329c64074a921339a0a538c752bb5393aad75fd8920e1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a7ff0908f388866de9d55de4ee384e33020ac8c19e822d4184f30edf448a399(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eea1bed087d2089a77c1ce8b9b101d721b6978324a1c4fd16af068a70468a8f7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10e6dfca07d2c97c7aa553548760d194bb9f052e7aca36dbc8591d4de2f01f48(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6637f18728241c0dadfe98b343b101330afb951bd0e46a69a00acf57251ce061(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4810e2bc2f8b3c3d9a7e3f25e9fea99f7e87ddc9b1fd5b12e4ea9e3624fa39a(
    *,
    g_ip_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    global_ig_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ebc9d39556cb3e2c3bc5d1cbc8e4a652432b903eb352545e52e663f6471f6e7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosParameterGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce646d3b5361bc77230accccf5455933caad599bb614da9cab3c7322e2098ad5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1396742b5d30d5a89ea28e95ee0ece43cb15b2bacd8deaddf8e13ebefb698764(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74a06f5bb700e2d897d49fdd2a7a0fef4db46c38c8f363ff678bee357437f163(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e76e401f75c51c5f09800c9a67d0b4ddd1c68dcb5bd4e17500d61c96d8b58f3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25ffce05b2abb56afe94c366bb9e7e8638f5691c4723009551b7749ee78765f8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33baa2e0b2559e6c5bf120e483a3050a350d205af753f59ecee18c30dde512ae(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosParameterGroup.ParametersProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8ffaf7bdc0cc95c2f1d8ed5a0cfcf8a2a371f30addd0b9beb9addb08b30726a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03c2b57d57b6f2e9e7b6cd83bd8c20204d8cda64d6dd44254517ec070b75c287(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdbad182f23416ba9b9e7da157b82fb87d750ef0c6d49af49a9dcacd9c5262a7(
    *,
    param_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    param_value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0e95f1642cbeb53fc7622c8520922ba247e03309651669ffa4a78c591c61202(
    *,
    db_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parameter_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosParameterGroup.ParametersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    parameter_group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__364de73a171180f45764ac3e0e1d85f55d97398c1a8eda6c36be118817b79e31(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AITaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aa54741e020d0f2f924fbf9b04b9e54d1daa3bc16a5be482728e569d132a3a8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afd80465f35662917ec22ebf3094eb60d0aa9a1d3891ef04fba3575894337c26(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__122fed97c807ff897f28e868d3fd2b1979cb5a2b7caf05916531d6945775b61d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a03a44313de523810a255d0b788e0f1b02a2cadde7fe43c88f886598635b042(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13671a82efbc2c4f0199a84137e9e30fa4fd9f892cba13cd8a5ebf6a25215879(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57c20f2456ee0a654cad51fee00c50bf1e69c277d111ede0b480d53d5071ba6a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1117eb9aed1b98220819a16a12ca8fa0a46a5b96e5d3cac20e8345e6c8c5b160(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__d8935c0f3d7535ef24324ac2391f9c8b5fd38737298a4128811b9ef586d9a6bf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__196e5cada31927b41b0c0fcbdf3a6a1a948a634ffa521e9fbb21591059f97431(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b7dce77905bd2cfd7c00d91e0981bc33380d65949c70c54926d35da49cb5ea8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce5632d3de29be14fefca62d80fa942c10d58794c315a0114ee4bbf6030d2c0d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BackupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15edb1fa44e028ae557d8be74d8be9e316a8572d8b9f3e4b05864fabbc76b755(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2888468a2c8b1b6fe8faadb97cdbfbe53b2cadd0deb7b93d47511fe93b087cd2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__240d3e4f1f243f5e36641fdf8121ec51a5587a8a3286da888badb3b5475a70f9(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__e55d78c8ec34053b83603e64172621aad9682f6897c9a609cbc45a9b61a63a16(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1d9cead3a2e408027f5a0f4ee7dd8141cedc7accc39349998226e8427cbe5dc(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80dad29226986744dfb14e1bd816fc1d172b4f939d0317c73510034beccd1cb9(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__4501b9cc906d29c4aa650aee9fc4e3ece8d9e6b10a4c349c87406706e38850ad(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__122435bd6d20c609ccd2114642aa963b7763d01a110204350e3bb072da5221a1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7d7bc8b0ea7ef8a55c0e14851f67f894a7188a26dfb6576d69571ea504e3971(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__4eae5e4b0eac39b93250daadab98479e119d9ec0d3b300d7697320574ccb80e3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca19c981a19445650486f5dfd8ad7734125589840744aaf78d2dfc19da1a292c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2b7788ebbc050c1a65fa1c2e3422d49d9470570423ca97680ed37903a17f5ca(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__6936ea9c60dade4f8d091ca0ace9ce5008401eae69d62eced981356ed761ad0c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad6ceb4d6edec4e09b9256be7fc547b292cab94fefc4f31f1e4ab65f33517638(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__461d47fc0e56ba57110fc3ba983f9215393001aa9a0b6630c624f7b5b59d6303(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__325e356adae17395928fc960f66822cf87c47aa4c702928d145f2b4976f5f0ea(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4ea4bf4787678ef4d66807456f260b336cbc144246777e622e29622b6f14870(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbc4ad39ec3d96e4fd04dc58c055b8c0c905be1cfba6a9c6267f2b647344fa42(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2459656f96d889d0b8cea065776b5be0f5bcd12624778897883aec92752c845(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a60502169ee552ada79ee5e4f229c84b0895e086ee3630b7fc7657b39f6d9360(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__512f6cd4b69f677bd6ab2861bdf3a928c5370a8e55c6050132d48f639323837e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46e4c58f1ccdf19e90fc39b8625d454ba1caf5c7964c25f82829890266ece2d8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7b60c5ce3c46151ee61aab192ac7563bf266366e639e990b36d33736d43ab8e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GlobalDatabaseNetworkProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dafdd317d616c24b098e531b50cece01c33061c0c00fdbd9583536fb360cae0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70ff066a66f495d6077f220c3b21abb814dca18aaf67334daec3bed793369093(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aac9048d677bbe2dccf8dc60b7743508bb8465b0add758a4f9a9e99961e9f25b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c762a0bc1c532100fa393bb4d332c9534936251a08d203dcb2e0bbccd97469f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GlobalSecurityIPGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaf4c7687bd669c240e6434bf796e25346d19147e0e85d2dff2cd9432d417572(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5629c961a3c473b98de0285f04d34d9782013f5e3a6c1b412df786c5a9a72af(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dccef8a82906e8ae2fe31961422aa62271e86217140ce405d2a9c191d13cd33f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
