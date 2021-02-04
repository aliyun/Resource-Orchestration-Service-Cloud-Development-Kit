"""
## Aliyun ROS POLARDB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_polardb as POLARDB
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


class Account(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.Account",
):
    """A ROS resource type:  ``ALIYUN::POLARDB::Account``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Account, self, [scope, id, props, enable_resource_property_constraint])


class AccountPrivilege(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.AccountPrivilege",
):
    """A ROS resource type:  ``ALIYUN::POLARDB::AccountPrivilege``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountPrivilegeProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::AccountPrivilege``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AccountPrivilege, self, [scope, id, props, enable_resource_property_constraint])


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
        account_name: builtins.str,
        account_privilege: builtins.str,
        db_cluster_id: builtins.str,
        db_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::AccountPrivilege``.

        :param account_name: 
        :param account_privilege: 
        :param db_cluster_id: 
        :param db_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_cluster_id": db_cluster_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(self) -> builtins.str:
        """
        :Property: accountName: The name of the database account to be granted access permissions.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_privilege(self) -> builtins.str:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:

        - ReadWrite: has read and write permissions on the database.
        - ReadOnly: has the read-only permission on the database.
        - DMLOnly: runs only data manipulation language (DML) statements.
        - DDLOnly: runs only data definition language (DDL) statements.
        The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
        Separate multiple permissions with a comma (,).
        """
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return result

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database whose access permissions are to be granted to the database account.
        You can grant access permissions on one or more databases to the database account.
        Separate multiple databases with a comma (,).
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
        account_name: builtins.str,
        account_password: builtins.str,
        db_cluster_id: builtins.str,
        account_description: typing.Optional[builtins.str] = None,
        account_privilege: typing.Optional[builtins.str] = None,
        account_type: typing.Optional[builtins.str] = None,
        db_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::Account``.

        :param account_name: 
        :param account_password: 
        :param db_cluster_id: 
        :param account_description: 
        :param account_privilege: 
        :param account_type: 
        :param db_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: The name of the database account. The name must comply with the following rules:

        - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
        - It can be up to 16 characters in length.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_password(self) -> builtins.str:
        """
        :Property:

        accountPassword: The password of the database account. The password must comply with the following rules:

        - It must consist of uppercase letters, lowercase letters, digits, and special characters.
        - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        - It must be 8 to 32 characters in length.
        """
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return result

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: The description of the database account. The description must comply with the following rules:

        - It cannot start with http:// or https://.
        - It must be 2 to 256 characters in length.
        """
        result = self._values.get("account_description")
        return result

    @builtins.property
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        Separate multiple permissions with a comma (,).
        """
        result = self._values.get("account_privilege")
        return result

    @builtins.property
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountType: The type of the database account. Valid values:

        - Normal: standard account
        - Super: privileged account
        Default value: Super.
        Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
        You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        """
        result = self._values.get("account_type")
        return result

    @builtins.property
    def db_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        """
        result = self._values.get("db_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBCluster",
):
    """A ROS resource type:  ``ALIYUN::POLARDB::DBCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBCluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterConnectionString")
    def attr_cluster_connection_string(self) -> typing.Any:
        """
        :Attribute: ClusterConnectionString: The cluster connection string of the db cluster.
        """
        return jsii.get(self, "attrClusterConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterEndpointId")
    def attr_cluster_endpoint_id(self) -> typing.Any:
        """
        :Attribute: ClusterEndpointId: The cluster endpoint ID of the db cluster.
        """
        return jsii.get(self, "attrClusterEndpointId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCustomConnectionStrings")
    def attr_custom_connection_strings(self) -> typing.Any:
        """
        :Attribute: CustomConnectionStrings: The custom connection strings of the db cluster.
        """
        return jsii.get(self, "attrCustomConnectionStrings")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCustomEndpointIds")
    def attr_custom_endpoint_ids(self) -> typing.Any:
        """
        :Attribute: CustomEndpointIds: The custom endpoint IDs of the db cluster.
        """
        return jsii.get(self, "attrCustomEndpointIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> typing.Any:
        """
        :Attribute: DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
        """
        return jsii.get(self, "attrDbClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(self) -> typing.Any:
        """
        :Attribute: DBNodeIds: The ID list of cluster nodes.
        """
        return jsii.get(self, "attrDbNodeIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: The Order ID.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrimaryConnectionString")
    def attr_primary_connection_string(self) -> typing.Any:
        """
        :Attribute: PrimaryConnectionString: The primary connection string of the db cluster.
        """
        return jsii.get(self, "attrPrimaryConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrimaryEndpointId")
    def attr_primary_endpoint_id(self) -> typing.Any:
        """
        :Attribute: PrimaryEndpointId: The primary endpoint ID of the db cluster.
        """
        return jsii.get(self, "attrPrimaryEndpointId")


class DBClusterAccessWhiteList(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterAccessWhiteList",
):
    """A ROS resource type:  ``ALIYUN::POLARDB::DBClusterAccessWhiteList``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBClusterAccessWhiteListProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBClusterAccessWhiteList, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> typing.Any:
        """
        :Attribute: DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        """
        return jsii.get(self, "attrDbClusterId")


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
        db_cluster_id: builtins.str,
        security_ips: builtins.str,
        db_cluster_ip_array_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

        :param db_cluster_id: 
        :param security_ips: 
        :param db_cluster_ip_array_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "security_ips": security_ips,
        }
        if db_cluster_ip_array_name is not None:
            self._values["db_cluster_ip_array_name"] = db_cluster_ip_array_name

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def security_ips(self) -> builtins.str:
        """
        :Property:

        securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
        whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
        addresses with a comma (,). The following two formats are supported:
        IP address: for example, 10.23.12.24.
        Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
        suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
        ranges from 1 to 32.
        """
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return result

    @builtins.property
    def db_cluster_ip_array_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
        the Default whitelist group is modified by default.
        Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        """
        result = self._values.get("db_cluster_ip_array_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterAccessWhiteListProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBClusterEndpoint(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterEndpoint",
):
    """A ROS resource type:  ``ALIYUN::POLARDB::DBClusterEndpoint``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBClusterEndpointProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBClusterEndpoint``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBClusterEndpoint, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(self) -> typing.Any:
        """
        :Attribute: Addresses: The address items of the db cluster endpoint.
        """
        return jsii.get(self, "attrAddresses")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> typing.Any:
        """
        :Attribute: ConnectionString: The first connection string of the db cluster endpoint.
        """
        return jsii.get(self, "attrConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbEndpointId")
    def attr_db_endpoint_id(self) -> typing.Any:
        """
        :Attribute: DBEndpointId: DB cluster endpoint ID. E.g. pe-xxxxxxxx.
        """
        return jsii.get(self, "attrDbEndpointId")


class DBClusterEndpointAddress(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBClusterEndpointAddress",
):
    """A ROS resource type:  ``ALIYUN::POLARDB::DBClusterEndpointAddress``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBClusterEndpointAddressProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBClusterEndpointAddress, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAddress")
    def attr_address(self) -> typing.Any:
        """
        :Attribute: Address: The details of the endpoint address.
        """
        return jsii.get(self, "attrAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> typing.Any:
        """
        :Attribute: ConnectionString: The connection string of the endpoint address.
        """
        return jsii.get(self, "attrConnectionString")


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
        db_cluster_id: builtins.str,
        db_endpoint_id: builtins.str,
        connection_string_prefix: typing.Optional[builtins.str] = None,
        net_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

        :param db_cluster_id: 
        :param db_endpoint_id: 
        :param connection_string_prefix: 
        :param net_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "db_endpoint_id": db_endpoint_id,
        }
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if net_type is not None:
            self._values["net_type"] = net_type

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def db_endpoint_id(self) -> builtins.str:
        """
        :Property: dbEndpointId: The ID of the cluster connection point.
        """
        result = self._values.get("db_endpoint_id")
        assert result is not None, "Required property 'db_endpoint_id' is missing"
        return result

    @builtins.property
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
        It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        The length is 6~30 characters.
        """
        result = self._values.get("connection_string_prefix")
        return result

    @builtins.property
    def net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        netType: The network type of the connection string.
        If set to Public, ROS will create, modify and delete Public address for you.
        If set to Private, ROS will only modify Private address for you.
        Default to Public.
        """
        result = self._values.get("net_type")
        return result

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
        db_cluster_id: builtins.str,
        auto_add_new_nodes: typing.Optional[builtins.str] = None,
        endpoint_config: typing.Optional[typing.Union["RosDBClusterEndpoint.EndpointConfigProperty", ros_cdk_core.IResolvable]] = None,
        endpoint_type: typing.Optional[builtins.str] = None,
        nodes: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        read_write_mode: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBClusterEndpoint``.

        :param db_cluster_id: 
        :param auto_add_new_nodes: 
        :param endpoint_config: 
        :param endpoint_type: 
        :param nodes: 
        :param read_write_mode: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def auto_add_new_nodes(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
        Valid values: Enable, Disable.
        Default value: Disable.
        """
        result = self._values.get("auto_add_new_nodes")
        return result

    @builtins.property
    def endpoint_config(
        self,
    ) -> typing.Optional[typing.Union["RosDBClusterEndpoint.EndpointConfigProperty", ros_cdk_core.IResolvable]]:
        """
        :Property: endpointConfig:
        """
        result = self._values.get("endpoint_config")
        return result

    @builtins.property
    def endpoint_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: endpointType: The type of the cluster connection point. Set this parameter to Custom.
        """
        result = self._values.get("endpoint_type")
        return result

    @builtins.property
    def nodes(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
        If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        """
        result = self._values.get("nodes")
        return result

    @builtins.property
    def read_write_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        readWriteMode: The read/write mode of the cluster connection point. Valid values:
        ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        ReadOnly: receives and forwards only read requests.
        Default value: ReadOnly.
        """
        result = self._values.get("read_write_mode")
        return result

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
        "auto_renew_period": "autoRenewPeriod",
        "backup_retention_policy_on_cluster_deletion": "backupRetentionPolicyOnClusterDeletion",
        "clone_data_point": "cloneDataPoint",
        "cluster_network_type": "clusterNetworkType",
        "creation_category": "creationCategory",
        "creation_option": "creationOption",
        "db_cluster_description": "dbClusterDescription",
        "default_time_zone": "defaultTimeZone",
        "gdn_id": "gdnId",
        "lower_case_table_names": "lowerCaseTableNames",
        "maintain_time": "maintainTime",
        "period": "period",
        "renewal_status": "renewalStatus",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "source_resource_id": "sourceResourceId",
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
        db_node_class: builtins.str,
        db_type: builtins.str,
        db_version: builtins.str,
        pay_type: builtins.str,
        auto_renew_period: typing.Optional[jsii.Number] = None,
        backup_retention_policy_on_cluster_deletion: typing.Optional[builtins.str] = None,
        clone_data_point: typing.Optional[builtins.str] = None,
        cluster_network_type: typing.Optional[builtins.str] = None,
        creation_category: typing.Optional[builtins.str] = None,
        creation_option: typing.Optional[builtins.str] = None,
        db_cluster_description: typing.Optional[builtins.str] = None,
        default_time_zone: typing.Optional[builtins.str] = None,
        gdn_id: typing.Optional[builtins.str] = None,
        lower_case_table_names: typing.Optional[jsii.Number] = None,
        maintain_time: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        renewal_status: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        security_ip_list: typing.Optional[builtins.str] = None,
        source_resource_id: typing.Optional[builtins.str] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBCluster``.

        :param db_node_class: 
        :param db_type: 
        :param db_version: 
        :param pay_type: 
        :param auto_renew_period: 
        :param backup_retention_policy_on_cluster_deletion: 
        :param clone_data_point: 
        :param cluster_network_type: 
        :param creation_category: 
        :param creation_option: 
        :param db_cluster_description: 
        :param default_time_zone: 
        :param gdn_id: 
        :param lower_case_table_names: 
        :param maintain_time: 
        :param period: 
        :param renewal_status: 
        :param resource_group_id: 
        :param security_ip_list: 
        :param source_resource_id: 
        :param tde_status: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_node_class": db_node_class,
            "db_type": db_type,
            "db_version": db_version,
            "pay_type": pay_type,
        }
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
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if source_resource_id is not None:
            self._values["source_resource_id"] = source_resource_id
        if tde_status is not None:
            self._values["tde_status"] = tde_status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_node_class(self) -> builtins.str:
        """
        :Property: dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
        """
        result = self._values.get("db_node_class")
        assert result is not None, "Required property 'db_node_class' is missing"
        return result

    @builtins.property
    def db_type(self) -> builtins.str:
        """
        :Property:

        dbType: Database type, value:
        MySQL
        PostgreSQL
        Oracle
        """
        result = self._values.get("db_type")
        assert result is not None, "Required property 'db_type' is missing"
        return result

    @builtins.property
    def db_version(self) -> builtins.str:
        """
        :Property:

        dbVersion: The version of the database. Valid values:
        MySQL: 5.6, 5.7 or 8.0
        PostgreSQL: 11
        Oracle: 11
        """
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return result

    @builtins.property
    def pay_type(self) -> builtins.str:
        """
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        """
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return result

    @builtins.property
    def auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        """
        result = self._values.get("auto_renew_period")
        return result

    @builtins.property
    def backup_retention_policy_on_cluster_deletion(
        self,
    ) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
        ALL: Keep all backups permanently.
        LATEST: Permanently keep the last backup (automatic backup before deletion).
        NONE: The backup set is not retained when the cluster is deleted.
        When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        """
        result = self._values.get("backup_retention_policy_on_cluster_deletion")
        return result

    @builtins.property
    def clone_data_point(self) -> typing.Optional[builtins.str]:
        """
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
        """
        result = self._values.get("clone_data_point")
        return result

    @builtins.property
    def cluster_network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
        """
        result = self._values.get("cluster_network_type")
        return result

    @builtins.property
    def creation_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: creationCategory: Cluster series. The value could be Normal (standard version).
        """
        result = self._values.get("creation_category")
        return result

    @builtins.property
    def creation_option(self) -> typing.Optional[builtins.str]:
        """
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
        """
        result = self._values.get("creation_option")
        return result

    @builtins.property
    def db_cluster_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbClusterDescription: The description of the cluster. The description must comply with the following rules:
        It must start with a Chinese character or an English letter.
        It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        """
        result = self._values.get("db_cluster_description")
        return result

    @builtins.property
    def default_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
        System:  The default time zone is the same as the time zone where the region is located. This is default value.
        Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        Note: This parameter takes effect only when DBType is MySQL.
        """
        result = self._values.get("default_time_zone")
        return result

    @builtins.property
    def gdn_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        gdnId: The ID of the Global Database Network (GDN).
        Note: This parameter is required when the CreationOption is CreateGdnStandby.
        """
        result = self._values.get("gdn_id")
        return result

    @builtins.property
    def lower_case_table_names(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
        1: Not case sensitive0: case sensitive
        The default value is 1.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        """
        result = self._values.get("lower_case_table_names")
        return result

    @builtins.property
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        maintainTime: The maintainable time of the cluster:
        Format: HH: mmZ- HH: mmZ.
        Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        """
        result = self._values.get("maintain_time")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the cluster in month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def renewal_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        renewalStatus: The auto renewal status of the cluster Valid values:
        AutoRenewal: automatically renews the cluster.
        Normal: manually renews the cluster.
        NotRenewal: does not renew the cluster.
        Default value: Normal.
        Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        but only sends an SMS message three days before the cluster expires to remind you
        that the cluster is not renewed.
        """
        result = self._values.get("renewal_status")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def security_ip_list(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpList: The whitelist of the Apsara PolarDB cluster.
        """
        result = self._values.get("security_ip_list")
        return result

    @builtins.property
    def source_resource_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
        Note
        This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        This parameter is required if the CreationOption parameter is not set to Normal.
        """
        result = self._values.get("source_resource_id")
        return result

    @builtins.property
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        """
        result = self._values.get("tde_status")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC to connect to.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch to connect to.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBInstance",
):
    """A ROS resource type:  ``ALIYUN::POLARDB::DBInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBInstance, self, [scope, id, props, enable_resource_property_constraint])


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
        character_set_name: builtins.str,
        db_cluster_id: builtins.str,
        db_name: builtins.str,
        account_name: typing.Optional[builtins.str] = None,
        account_privilege: typing.Optional[builtins.str] = None,
        db_description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBInstance``.

        :param character_set_name: 
        :param db_cluster_id: 
        :param db_name: 
        :param account_name: 
        :param account_privilege: 
        :param db_description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def character_set_name(self) -> builtins.str:
        """
        :Property: characterSetName: The character set of the database. For more information, see Character sets.
        """
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return result

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database to be created. The name must comply with the following rules:
        It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
        (-), and underscores (_).
        It must end with a letter or a digit. It can be up to 64 characters in length.
        """
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return result

    @builtins.property
    def account_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountName: The name of the database account to be used.
        """
        result = self._values.get("account_name")
        return result

    @builtins.property
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        """
        result = self._values.get("account_privilege")
        return result

    @builtins.property
    def db_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbDescription: The description of the database. Valid values:
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        """
        result = self._values.get("db_description")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBNodes(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.DBNodes",
):
    """A ROS resource type:  ``ALIYUN::POLARDB::DBNodes``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBNodesProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBNodes``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DBNodes, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(self) -> typing.Any:
        """
        :Attribute: DBNodeIds: The ID list of added cluster nodes.
        """
        return jsii.get(self, "attrDbNodeIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(self) -> typing.Any:
        """
        :Attribute: OrderIds: The order ID list of added cluster nodes.
        """
        return jsii.get(self, "attrOrderIds")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.DBNodesProps",
    jsii_struct_bases=[],
    name_mapping={"amount": "amount", "db_cluster_id": "dbClusterId"},
)
class DBNodesProps:
    def __init__(self, *, amount: jsii.Number, db_cluster_id: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBNodes``.

        :param amount: 
        :param db_cluster_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "amount": amount,
            "db_cluster_id": db_cluster_id,
        }

    @builtins.property
    def amount(self) -> jsii.Number:
        """
        :Property: amount: Number of nodes to be added to cluster.
        """
        result = self._values.get("amount")
        assert result is not None, "Required property 'amount' is missing"
        return result

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBNodesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosAccount",
):
    """A ROS template type:  ``ALIYUN::POLARDB::Account``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::Account``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: The name of the database account. The name must comply with the following rules:

        - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
        - It can be up to 16 characters in length.
        """
        return jsii.get(self, "accountName")

    @account_name.setter # type: ignore
    def account_name(self, value: builtins.str) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPassword")
    def account_password(self) -> builtins.str:
        """
        :Property:

        accountPassword: The password of the database account. The password must comply with the following rules:

        - It must consist of uppercase letters, lowercase letters, digits, and special characters.
        - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        - It must be 8 to 32 characters in length.
        """
        return jsii.get(self, "accountPassword")

    @account_password.setter # type: ignore
    def account_password(self, value: builtins.str) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        """
        return jsii.get(self, "dbClusterId")

    @db_cluster_id.setter # type: ignore
    def db_cluster_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbClusterId", value)

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
    @jsii.member(jsii_name="accountDescription")
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: The description of the database account. The description must comply with the following rules:

        - It cannot start with http:// or https://.
        - It must be 2 to 256 characters in length.
        """
        return jsii.get(self, "accountDescription")

    @account_description.setter # type: ignore
    def account_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        Separate multiple permissions with a comma (,).
        """
        return jsii.get(self, "accountPrivilege")

    @account_privilege.setter # type: ignore
    def account_privilege(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountPrivilege", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountType")
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountType: The type of the database account. Valid values:

        - Normal: standard account
        - Super: privileged account
        Default value: Super.
        Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
        You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        """
        return jsii.get(self, "accountType")

    @account_type.setter # type: ignore
    def account_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        """
        return jsii.get(self, "dbName")

    @db_name.setter # type: ignore
    def db_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbName", value)


class RosAccountPrivilege(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosAccountPrivilege",
):
    """A ROS template type:  ``ALIYUN::POLARDB::AccountPrivilege``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountPrivilegeProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::AccountPrivilege``.

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
        :Property: accountName: The name of the database account to be granted access permissions.
        """
        return jsii.get(self, "accountName")

    @account_name.setter # type: ignore
    def account_name(self, value: builtins.str) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(self) -> builtins.str:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:

        - ReadWrite: has read and write permissions on the database.
        - ReadOnly: has the read-only permission on the database.
        - DMLOnly: runs only data manipulation language (DML) statements.
        - DDLOnly: runs only data definition language (DDL) statements.
        The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
        Separate multiple permissions with a comma (,).
        """
        return jsii.get(self, "accountPrivilege")

    @account_privilege.setter # type: ignore
    def account_privilege(self, value: builtins.str) -> None:
        jsii.set(self, "accountPrivilege", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
        """
        return jsii.get(self, "dbClusterId")

    @db_cluster_id.setter # type: ignore
    def db_cluster_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbClusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database whose access permissions are to be granted to the database account.
        You can grant access permissions on one or more databases to the database account.
        Separate multiple databases with a comma (,).
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
        account_name: builtins.str,
        account_privilege: builtins.str,
        db_cluster_id: builtins.str,
        db_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::AccountPrivilege``.

        :param account_name: 
        :param account_privilege: 
        :param db_cluster_id: 
        :param db_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_privilege": account_privilege,
            "db_cluster_id": db_cluster_id,
            "db_name": db_name,
        }

    @builtins.property
    def account_name(self) -> builtins.str:
        """
        :Property: accountName: The name of the database account to be granted access permissions.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_privilege(self) -> builtins.str:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:

        - ReadWrite: has read and write permissions on the database.
        - ReadOnly: has the read-only permission on the database.
        - DMLOnly: runs only data manipulation language (DML) statements.
        - DDLOnly: runs only data definition language (DDL) statements.
        The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
        Separate multiple permissions with a comma (,).
        """
        result = self._values.get("account_privilege")
        assert result is not None, "Required property 'account_privilege' is missing"
        return result

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database whose access permissions are to be granted to the database account.
        You can grant access permissions on one or more databases to the database account.
        Separate multiple databases with a comma (,).
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
        account_name: builtins.str,
        account_password: builtins.str,
        db_cluster_id: builtins.str,
        account_description: typing.Optional[builtins.str] = None,
        account_privilege: typing.Optional[builtins.str] = None,
        account_type: typing.Optional[builtins.str] = None,
        db_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::Account``.

        :param account_name: 
        :param account_password: 
        :param db_cluster_id: 
        :param account_description: 
        :param account_privilege: 
        :param account_type: 
        :param db_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: The name of the database account. The name must comply with the following rules:

        - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
        - It can be up to 16 characters in length.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_password(self) -> builtins.str:
        """
        :Property:

        accountPassword: The password of the database account. The password must comply with the following rules:

        - It must consist of uppercase letters, lowercase letters, digits, and special characters.
        - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        - It must be 8 to 32 characters in length.
        """
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return result

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: The description of the database account. The description must comply with the following rules:

        - It cannot start with http:// or https://.
        - It must be 2 to 256 characters in length.
        """
        result = self._values.get("account_description")
        return result

    @builtins.property
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        Separate multiple permissions with a comma (,).
        """
        result = self._values.get("account_privilege")
        return result

    @builtins.property
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountType: The type of the database account. Valid values:

        - Normal: standard account
        - Super: privileged account
        Default value: Super.
        Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
        You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        """
        result = self._values.get("account_type")
        return result

    @builtins.property
    def db_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        """
        result = self._values.get("db_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBCluster",
):
    """A ROS template type:  ``ALIYUN::POLARDB::DBCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBCluster, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrClusterConnectionString")
    def attr_cluster_connection_string(self) -> typing.Any:
        """
        :Attribute: ClusterConnectionString: The cluster connection string of the db cluster.
        """
        return jsii.get(self, "attrClusterConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterEndpointId")
    def attr_cluster_endpoint_id(self) -> typing.Any:
        """
        :Attribute: ClusterEndpointId: The cluster endpoint ID of the db cluster.
        """
        return jsii.get(self, "attrClusterEndpointId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCustomConnectionStrings")
    def attr_custom_connection_strings(self) -> typing.Any:
        """
        :Attribute: CustomConnectionStrings: The custom connection strings of the db cluster.
        """
        return jsii.get(self, "attrCustomConnectionStrings")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCustomEndpointIds")
    def attr_custom_endpoint_ids(self) -> typing.Any:
        """
        :Attribute: CustomEndpointIds: The custom endpoint IDs of the db cluster.
        """
        return jsii.get(self, "attrCustomEndpointIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> typing.Any:
        """
        :Attribute: DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
        """
        return jsii.get(self, "attrDbClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(self) -> typing.Any:
        """
        :Attribute: DBNodeIds: The ID list of cluster nodes.
        """
        return jsii.get(self, "attrDbNodeIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: The Order ID.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrimaryConnectionString")
    def attr_primary_connection_string(self) -> typing.Any:
        """
        :Attribute: PrimaryConnectionString: The primary connection string of the db cluster.
        """
        return jsii.get(self, "attrPrimaryConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrimaryEndpointId")
    def attr_primary_endpoint_id(self) -> typing.Any:
        """
        :Attribute: PrimaryEndpointId: The primary endpoint ID of the db cluster.
        """
        return jsii.get(self, "attrPrimaryEndpointId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbNodeClass")
    def db_node_class(self) -> builtins.str:
        """
        :Property: dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
        """
        return jsii.get(self, "dbNodeClass")

    @db_node_class.setter # type: ignore
    def db_node_class(self, value: builtins.str) -> None:
        jsii.set(self, "dbNodeClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbType")
    def db_type(self) -> builtins.str:
        """
        :Property:

        dbType: Database type, value:
        MySQL
        PostgreSQL
        Oracle
        """
        return jsii.get(self, "dbType")

    @db_type.setter # type: ignore
    def db_type(self, value: builtins.str) -> None:
        jsii.set(self, "dbType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbVersion")
    def db_version(self) -> builtins.str:
        """
        :Property:

        dbVersion: The version of the database. Valid values:
        MySQL: 5.6, 5.7 or 8.0
        PostgreSQL: 11
        Oracle: 11
        """
        return jsii.get(self, "dbVersion")

    @db_version.setter # type: ignore
    def db_version(self, value: builtins.str) -> None:
        jsii.set(self, "dbVersion", value)

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
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        """
        return jsii.get(self, "payType")

    @pay_type.setter # type: ignore
    def pay_type(self, value: builtins.str) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        """
        return jsii.get(self, "autoRenewPeriod")

    @auto_renew_period.setter # type: ignore
    def auto_renew_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupRetentionPolicyOnClusterDeletion")
    def backup_retention_policy_on_cluster_deletion(
        self,
    ) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
        ALL: Keep all backups permanently.
        LATEST: Permanently keep the last backup (automatic backup before deletion).
        NONE: The backup set is not retained when the cluster is deleted.
        When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        """
        return jsii.get(self, "backupRetentionPolicyOnClusterDeletion")

    @backup_retention_policy_on_cluster_deletion.setter # type: ignore
    def backup_retention_policy_on_cluster_deletion(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "backupRetentionPolicyOnClusterDeletion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cloneDataPoint")
    def clone_data_point(self) -> typing.Optional[builtins.str]:
        """
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
        """
        return jsii.get(self, "cloneDataPoint")

    @clone_data_point.setter # type: ignore
    def clone_data_point(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "cloneDataPoint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterNetworkType")
    def cluster_network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
        """
        return jsii.get(self, "clusterNetworkType")

    @cluster_network_type.setter # type: ignore
    def cluster_network_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "clusterNetworkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="creationCategory")
    def creation_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: creationCategory: Cluster series. The value could be Normal (standard version).
        """
        return jsii.get(self, "creationCategory")

    @creation_category.setter # type: ignore
    def creation_category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "creationCategory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="creationOption")
    def creation_option(self) -> typing.Optional[builtins.str]:
        """
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
        """
        return jsii.get(self, "creationOption")

    @creation_option.setter # type: ignore
    def creation_option(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "creationOption", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterDescription")
    def db_cluster_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbClusterDescription: The description of the cluster. The description must comply with the following rules:
        It must start with a Chinese character or an English letter.
        It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        """
        return jsii.get(self, "dbClusterDescription")

    @db_cluster_description.setter # type: ignore
    def db_cluster_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbClusterDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="defaultTimeZone")
    def default_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
        System:  The default time zone is the same as the time zone where the region is located. This is default value.
        Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        Note: This parameter takes effect only when DBType is MySQL.
        """
        return jsii.get(self, "defaultTimeZone")

    @default_time_zone.setter # type: ignore
    def default_time_zone(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "defaultTimeZone", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="gdnId")
    def gdn_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        gdnId: The ID of the Global Database Network (GDN).
        Note: This parameter is required when the CreationOption is CreateGdnStandby.
        """
        return jsii.get(self, "gdnId")

    @gdn_id.setter # type: ignore
    def gdn_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "gdnId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="lowerCaseTableNames")
    def lower_case_table_names(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
        1: Not case sensitive0: case sensitive
        The default value is 1.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        """
        return jsii.get(self, "lowerCaseTableNames")

    @lower_case_table_names.setter # type: ignore
    def lower_case_table_names(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "lowerCaseTableNames", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maintainTime")
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        maintainTime: The maintainable time of the cluster:
        Format: HH: mmZ- HH: mmZ.
        Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        """
        return jsii.get(self, "maintainTime")

    @maintain_time.setter # type: ignore
    def maintain_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "maintainTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the cluster in month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        renewalStatus: The auto renewal status of the cluster Valid values:
        AutoRenewal: automatically renews the cluster.
        Normal: manually renews the cluster.
        NotRenewal: does not renew the cluster.
        Default value: Normal.
        Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        but only sends an SMS message three days before the cluster expires to remind you
        that the cluster is not renewed.
        """
        return jsii.get(self, "renewalStatus")

    @renewal_status.setter # type: ignore
    def renewal_status(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "renewalStatus", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpList: The whitelist of the Apsara PolarDB cluster.
        """
        return jsii.get(self, "securityIpList")

    @security_ip_list.setter # type: ignore
    def security_ip_list(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityIpList", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceResourceId")
    def source_resource_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
        Note
        This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        This parameter is required if the CreationOption parameter is not set to Normal.
        """
        return jsii.get(self, "sourceResourceId")

    @source_resource_id.setter # type: ignore
    def source_resource_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sourceResourceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tdeStatus")
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        """
        return jsii.get(self, "tdeStatus")

    @tde_status.setter # type: ignore
    def tde_status(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "tdeStatus", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC to connect to.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch to connect to.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "zoneId", value)


class RosDBClusterAccessWhiteList(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterAccessWhiteList",
):
    """A ROS template type:  ``ALIYUN::POLARDB::DBClusterAccessWhiteList``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBClusterAccessWhiteListProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBClusterAccessWhiteList, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> typing.Any:
        """
        :Attribute: DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        """
        return jsii.get(self, "attrDbClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        """
        return jsii.get(self, "dbClusterId")

    @db_cluster_id.setter # type: ignore
    def db_cluster_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbClusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIps")
    def security_ips(self) -> builtins.str:
        """
        :Property:

        securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
        whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
        addresses with a comma (,). The following two formats are supported:
        IP address: for example, 10.23.12.24.
        Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
        suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
        ranges from 1 to 32.
        """
        return jsii.get(self, "securityIps")

    @security_ips.setter # type: ignore
    def security_ips(self, value: builtins.str) -> None:
        jsii.set(self, "securityIps", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterIpArrayName")
    def db_cluster_ip_array_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
        the Default whitelist group is modified by default.
        Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        """
        return jsii.get(self, "dbClusterIpArrayName")

    @db_cluster_ip_array_name.setter # type: ignore
    def db_cluster_ip_array_name(self, value: typing.Optional[builtins.str]) -> None:
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
        db_cluster_id: builtins.str,
        security_ips: builtins.str,
        db_cluster_ip_array_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBClusterAccessWhiteList``.

        :param db_cluster_id: 
        :param security_ips: 
        :param db_cluster_ip_array_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "security_ips": security_ips,
        }
        if db_cluster_ip_array_name is not None:
            self._values["db_cluster_ip_array_name"] = db_cluster_ip_array_name

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def security_ips(self) -> builtins.str:
        """
        :Property:

        securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
        whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
        addresses with a comma (,). The following two formats are supported:
        IP address: for example, 10.23.12.24.
        Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
        suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
        ranges from 1 to 32.
        """
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return result

    @builtins.property
    def db_cluster_ip_array_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
        the Default whitelist group is modified by default.
        Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        """
        result = self._values.get("db_cluster_ip_array_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterAccessWhiteListProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBClusterEndpoint(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterEndpoint",
):
    """A ROS template type:  ``ALIYUN::POLARDB::DBClusterEndpoint``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBClusterEndpointProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBClusterEndpoint``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBClusterEndpoint, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(self) -> typing.Any:
        """
        :Attribute: Addresses: The address items of the db cluster endpoint.
        """
        return jsii.get(self, "attrAddresses")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> typing.Any:
        """
        :Attribute: ConnectionString: The first connection string of the db cluster endpoint.
        """
        return jsii.get(self, "attrConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbEndpointId")
    def attr_db_endpoint_id(self) -> typing.Any:
        """
        :Attribute: DBEndpointId: DB cluster endpoint ID. E.g. pe-xxxxxxxx.
        """
        return jsii.get(self, "attrDbEndpointId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
        """
        return jsii.get(self, "dbClusterId")

    @db_cluster_id.setter # type: ignore
    def db_cluster_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbClusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoAddNewNodes")
    def auto_add_new_nodes(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
        Valid values: Enable, Disable.
        Default value: Disable.
        """
        return jsii.get(self, "autoAddNewNodes")

    @auto_add_new_nodes.setter # type: ignore
    def auto_add_new_nodes(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "autoAddNewNodes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointConfig")
    def endpoint_config(
        self,
    ) -> typing.Optional[typing.Union["RosDBClusterEndpoint.EndpointConfigProperty", ros_cdk_core.IResolvable]]:
        """
        :Property: endpointConfig:
        """
        return jsii.get(self, "endpointConfig")

    @endpoint_config.setter # type: ignore
    def endpoint_config(
        self,
        value: typing.Optional[typing.Union["RosDBClusterEndpoint.EndpointConfigProperty", ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: endpointType: The type of the cluster connection point. Set this parameter to Custom.
        """
        return jsii.get(self, "endpointType")

    @endpoint_type.setter # type: ignore
    def endpoint_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "endpointType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="nodes")
    def nodes(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
        If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        """
        return jsii.get(self, "nodes")

    @nodes.setter # type: ignore
    def nodes(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "nodes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="readWriteMode")
    def read_write_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        readWriteMode: The read/write mode of the cluster connection point. Valid values:
        ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        ReadOnly: receives and forwards only read requests.
        Default value: ReadOnly.
        """
        return jsii.get(self, "readWriteMode")

    @read_write_mode.setter # type: ignore
    def read_write_mode(self, value: typing.Optional[builtins.str]) -> None:
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
            consist_level: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param consist_level: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if consist_level is not None:
                self._values["consist_level"] = consist_level

        @builtins.property
        def consist_level(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            consistLevel: The consistency level of the cluster connection point. Valid values:
            0: eventual consistency
            1: session consistency
            For example, {"ConsistLevel": "0"}.
            Note If the ReadWriteMode parameter is set to ReadOnly, the value of this parameter must be 0.
            """
            result = self._values.get("consist_level")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EndpointConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDBClusterEndpointAddress(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBClusterEndpointAddress",
):
    """A ROS template type:  ``ALIYUN::POLARDB::DBClusterEndpointAddress``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBClusterEndpointAddressProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBClusterEndpointAddress, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAddress")
    def attr_address(self) -> typing.Any:
        """
        :Attribute: Address: The details of the endpoint address.
        """
        return jsii.get(self, "attrAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> typing.Any:
        """
        :Attribute: ConnectionString: The connection string of the endpoint address.
        """
        return jsii.get(self, "attrConnectionString")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
        """
        return jsii.get(self, "dbClusterId")

    @db_cluster_id.setter # type: ignore
    def db_cluster_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbClusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbEndpointId")
    def db_endpoint_id(self) -> builtins.str:
        """
        :Property: dbEndpointId: The ID of the cluster connection point.
        """
        return jsii.get(self, "dbEndpointId")

    @db_endpoint_id.setter # type: ignore
    def db_endpoint_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbEndpointId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
        It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        The length is 6~30 characters.
        """
        return jsii.get(self, "connectionStringPrefix")

    @connection_string_prefix.setter # type: ignore
    def connection_string_prefix(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="netType")
    def net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        netType: The network type of the connection string.
        If set to Public, ROS will create, modify and delete Public address for you.
        If set to Private, ROS will only modify Private address for you.
        Default to Public.
        """
        return jsii.get(self, "netType")

    @net_type.setter # type: ignore
    def net_type(self, value: typing.Optional[builtins.str]) -> None:
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
        db_cluster_id: builtins.str,
        db_endpoint_id: builtins.str,
        connection_string_prefix: typing.Optional[builtins.str] = None,
        net_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBClusterEndpointAddress``.

        :param db_cluster_id: 
        :param db_endpoint_id: 
        :param connection_string_prefix: 
        :param net_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
            "db_endpoint_id": db_endpoint_id,
        }
        if connection_string_prefix is not None:
            self._values["connection_string_prefix"] = connection_string_prefix
        if net_type is not None:
            self._values["net_type"] = net_type

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def db_endpoint_id(self) -> builtins.str:
        """
        :Property: dbEndpointId: The ID of the cluster connection point.
        """
        result = self._values.get("db_endpoint_id")
        assert result is not None, "Required property 'db_endpoint_id' is missing"
        return result

    @builtins.property
    def connection_string_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
        It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        The length is 6~30 characters.
        """
        result = self._values.get("connection_string_prefix")
        return result

    @builtins.property
    def net_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        netType: The network type of the connection string.
        If set to Public, ROS will create, modify and delete Public address for you.
        If set to Private, ROS will only modify Private address for you.
        Default to Public.
        """
        result = self._values.get("net_type")
        return result

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
        db_cluster_id: builtins.str,
        auto_add_new_nodes: typing.Optional[builtins.str] = None,
        endpoint_config: typing.Optional[typing.Union[RosDBClusterEndpoint.EndpointConfigProperty, ros_cdk_core.IResolvable]] = None,
        endpoint_type: typing.Optional[builtins.str] = None,
        nodes: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        read_write_mode: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBClusterEndpoint``.

        :param db_cluster_id: 
        :param auto_add_new_nodes: 
        :param endpoint_config: 
        :param endpoint_type: 
        :param nodes: 
        :param read_write_mode: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def auto_add_new_nodes(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
        Valid values: Enable, Disable.
        Default value: Disable.
        """
        result = self._values.get("auto_add_new_nodes")
        return result

    @builtins.property
    def endpoint_config(
        self,
    ) -> typing.Optional[typing.Union[RosDBClusterEndpoint.EndpointConfigProperty, ros_cdk_core.IResolvable]]:
        """
        :Property: endpointConfig:
        """
        result = self._values.get("endpoint_config")
        return result

    @builtins.property
    def endpoint_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: endpointType: The type of the cluster connection point. Set this parameter to Custom.
        """
        result = self._values.get("endpoint_type")
        return result

    @builtins.property
    def nodes(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
        If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        """
        result = self._values.get("nodes")
        return result

    @builtins.property
    def read_write_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        readWriteMode: The read/write mode of the cluster connection point. Valid values:
        ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        ReadOnly: receives and forwards only read requests.
        Default value: ReadOnly.
        """
        result = self._values.get("read_write_mode")
        return result

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
        "auto_renew_period": "autoRenewPeriod",
        "backup_retention_policy_on_cluster_deletion": "backupRetentionPolicyOnClusterDeletion",
        "clone_data_point": "cloneDataPoint",
        "cluster_network_type": "clusterNetworkType",
        "creation_category": "creationCategory",
        "creation_option": "creationOption",
        "db_cluster_description": "dbClusterDescription",
        "default_time_zone": "defaultTimeZone",
        "gdn_id": "gdnId",
        "lower_case_table_names": "lowerCaseTableNames",
        "maintain_time": "maintainTime",
        "period": "period",
        "renewal_status": "renewalStatus",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "source_resource_id": "sourceResourceId",
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
        db_node_class: builtins.str,
        db_type: builtins.str,
        db_version: builtins.str,
        pay_type: builtins.str,
        auto_renew_period: typing.Optional[jsii.Number] = None,
        backup_retention_policy_on_cluster_deletion: typing.Optional[builtins.str] = None,
        clone_data_point: typing.Optional[builtins.str] = None,
        cluster_network_type: typing.Optional[builtins.str] = None,
        creation_category: typing.Optional[builtins.str] = None,
        creation_option: typing.Optional[builtins.str] = None,
        db_cluster_description: typing.Optional[builtins.str] = None,
        default_time_zone: typing.Optional[builtins.str] = None,
        gdn_id: typing.Optional[builtins.str] = None,
        lower_case_table_names: typing.Optional[jsii.Number] = None,
        maintain_time: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        renewal_status: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        security_ip_list: typing.Optional[builtins.str] = None,
        source_resource_id: typing.Optional[builtins.str] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBCluster``.

        :param db_node_class: 
        :param db_type: 
        :param db_version: 
        :param pay_type: 
        :param auto_renew_period: 
        :param backup_retention_policy_on_cluster_deletion: 
        :param clone_data_point: 
        :param cluster_network_type: 
        :param creation_category: 
        :param creation_option: 
        :param db_cluster_description: 
        :param default_time_zone: 
        :param gdn_id: 
        :param lower_case_table_names: 
        :param maintain_time: 
        :param period: 
        :param renewal_status: 
        :param resource_group_id: 
        :param security_ip_list: 
        :param source_resource_id: 
        :param tde_status: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_node_class": db_node_class,
            "db_type": db_type,
            "db_version": db_version,
            "pay_type": pay_type,
        }
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
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if source_resource_id is not None:
            self._values["source_resource_id"] = source_resource_id
        if tde_status is not None:
            self._values["tde_status"] = tde_status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_node_class(self) -> builtins.str:
        """
        :Property: dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
        """
        result = self._values.get("db_node_class")
        assert result is not None, "Required property 'db_node_class' is missing"
        return result

    @builtins.property
    def db_type(self) -> builtins.str:
        """
        :Property:

        dbType: Database type, value:
        MySQL
        PostgreSQL
        Oracle
        """
        result = self._values.get("db_type")
        assert result is not None, "Required property 'db_type' is missing"
        return result

    @builtins.property
    def db_version(self) -> builtins.str:
        """
        :Property:

        dbVersion: The version of the database. Valid values:
        MySQL: 5.6, 5.7 or 8.0
        PostgreSQL: 11
        Oracle: 11
        """
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return result

    @builtins.property
    def pay_type(self) -> builtins.str:
        """
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        """
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return result

    @builtins.property
    def auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        """
        result = self._values.get("auto_renew_period")
        return result

    @builtins.property
    def backup_retention_policy_on_cluster_deletion(
        self,
    ) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
        ALL: Keep all backups permanently.
        LATEST: Permanently keep the last backup (automatic backup before deletion).
        NONE: The backup set is not retained when the cluster is deleted.
        When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        """
        result = self._values.get("backup_retention_policy_on_cluster_deletion")
        return result

    @builtins.property
    def clone_data_point(self) -> typing.Optional[builtins.str]:
        """
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
        """
        result = self._values.get("clone_data_point")
        return result

    @builtins.property
    def cluster_network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
        """
        result = self._values.get("cluster_network_type")
        return result

    @builtins.property
    def creation_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: creationCategory: Cluster series. The value could be Normal (standard version).
        """
        result = self._values.get("creation_category")
        return result

    @builtins.property
    def creation_option(self) -> typing.Optional[builtins.str]:
        """
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
        """
        result = self._values.get("creation_option")
        return result

    @builtins.property
    def db_cluster_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbClusterDescription: The description of the cluster. The description must comply with the following rules:
        It must start with a Chinese character or an English letter.
        It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        """
        result = self._values.get("db_cluster_description")
        return result

    @builtins.property
    def default_time_zone(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
        System:  The default time zone is the same as the time zone where the region is located. This is default value.
        Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        Note: This parameter takes effect only when DBType is MySQL.
        """
        result = self._values.get("default_time_zone")
        return result

    @builtins.property
    def gdn_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        gdnId: The ID of the Global Database Network (GDN).
        Note: This parameter is required when the CreationOption is CreateGdnStandby.
        """
        result = self._values.get("gdn_id")
        return result

    @builtins.property
    def lower_case_table_names(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
        1: Not case sensitive0: case sensitive
        The default value is 1.
        Note: This parameter takes effect only when the value of DBType is MySQL.
        """
        result = self._values.get("lower_case_table_names")
        return result

    @builtins.property
    def maintain_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        maintainTime: The maintainable time of the cluster:
        Format: HH: mmZ- HH: mmZ.
        Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        """
        result = self._values.get("maintain_time")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the cluster in month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def renewal_status(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        renewalStatus: The auto renewal status of the cluster Valid values:
        AutoRenewal: automatically renews the cluster.
        Normal: manually renews the cluster.
        NotRenewal: does not renew the cluster.
        Default value: Normal.
        Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        but only sends an SMS message three days before the cluster expires to remind you
        that the cluster is not renewed.
        """
        result = self._values.get("renewal_status")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def security_ip_list(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpList: The whitelist of the Apsara PolarDB cluster.
        """
        result = self._values.get("security_ip_list")
        return result

    @builtins.property
    def source_resource_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
        Note
        This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        This parameter is required if the CreationOption parameter is not set to Normal.
        """
        result = self._values.get("source_resource_id")
        return result

    @builtins.property
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        """
        result = self._values.get("tde_status")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC to connect to.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch to connect to.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBInstance",
):
    """A ROS template type:  ``ALIYUN::POLARDB::DBInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBInstance``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="characterSetName")
    def character_set_name(self) -> builtins.str:
        """
        :Property: characterSetName: The character set of the database. For more information, see Character sets.
        """
        return jsii.get(self, "characterSetName")

    @character_set_name.setter # type: ignore
    def character_set_name(self, value: builtins.str) -> None:
        jsii.set(self, "characterSetName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
        """
        return jsii.get(self, "dbClusterId")

    @db_cluster_id.setter # type: ignore
    def db_cluster_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbClusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database to be created. The name must comply with the following rules:
        It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
        (-), and underscores (_).
        It must end with a letter or a digit. It can be up to 64 characters in length.
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

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountName: The name of the database account to be used.
        """
        return jsii.get(self, "accountName")

    @account_name.setter # type: ignore
    def account_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        """
        return jsii.get(self, "accountPrivilege")

    @account_privilege.setter # type: ignore
    def account_privilege(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountPrivilege", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbDescription")
    def db_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbDescription: The description of the database. Valid values:
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        """
        return jsii.get(self, "dbDescription")

    @db_description.setter # type: ignore
    def db_description(self, value: typing.Optional[builtins.str]) -> None:
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
        character_set_name: builtins.str,
        db_cluster_id: builtins.str,
        db_name: builtins.str,
        account_name: typing.Optional[builtins.str] = None,
        account_privilege: typing.Optional[builtins.str] = None,
        db_description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBInstance``.

        :param character_set_name: 
        :param db_cluster_id: 
        :param db_name: 
        :param account_name: 
        :param account_privilege: 
        :param db_description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def character_set_name(self) -> builtins.str:
        """
        :Property: characterSetName: The character set of the database. For more information, see Character sets.
        """
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return result

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

    @builtins.property
    def db_name(self) -> builtins.str:
        """
        :Property:

        dbName: The name of the database to be created. The name must comply with the following rules:
        It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
        (-), and underscores (_).
        It must end with a letter or a digit. It can be up to 64 characters in length.
        """
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return result

    @builtins.property
    def account_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountName: The name of the database account to be used.
        """
        result = self._values.get("account_name")
        return result

    @builtins.property
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permissions of the database account on the database. Valid values:
        ReadWrite: has read and write permissions on the database.
        ReadOnly: has the read-only permission on the database.
        DMLOnly: runs only data manipulation language (DML) statements.
        DDLOnly: runs only data definition language (DDL) statements.
        Default value: ReadWrite.
        """
        result = self._values.get("account_privilege")
        return result

    @builtins.property
    def db_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbDescription: The description of the database. Valid values:
        It cannot start with http:// or https://.
        It must be 2 to 256 characters in length.
        """
        result = self._values.get("db_description")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBNodes(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.RosDBNodes",
):
    """A ROS template type:  ``ALIYUN::POLARDB::DBNodes``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBNodesProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::POLARDB::DBNodes``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDBNodes, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrDbNodeIds")
    def attr_db_node_ids(self) -> typing.Any:
        """
        :Attribute: DBNodeIds: The ID list of added cluster nodes.
        """
        return jsii.get(self, "attrDbNodeIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(self) -> typing.Any:
        """
        :Attribute: OrderIds: The order ID list of added cluster nodes.
        """
        return jsii.get(self, "attrOrderIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="amount")
    def amount(self) -> jsii.Number:
        """
        :Property: amount: Number of nodes to be added to cluster.
        """
        return jsii.get(self, "amount")

    @amount.setter # type: ignore
    def amount(self, value: jsii.Number) -> None:
        jsii.set(self, "amount", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        """
        return jsii.get(self, "dbClusterId")

    @db_cluster_id.setter # type: ignore
    def db_cluster_id(self, value: builtins.str) -> None:
        jsii.set(self, "dbClusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.RosDBNodesProps",
    jsii_struct_bases=[],
    name_mapping={"amount": "amount", "db_cluster_id": "dbClusterId"},
)
class RosDBNodesProps:
    def __init__(self, *, amount: jsii.Number, db_cluster_id: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::POLARDB::DBNodes``.

        :param amount: 
        :param db_cluster_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "amount": amount,
            "db_cluster_id": db_cluster_id,
        }

    @builtins.property
    def amount(self) -> jsii.Number:
        """
        :Property: amount: Number of nodes to be added to cluster.
        """
        result = self._values.get("amount")
        assert result is not None, "Required property 'amount' is missing"
        return result

    @builtins.property
    def db_cluster_id(self) -> builtins.str:
        """
        :Property: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        """
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return result

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
