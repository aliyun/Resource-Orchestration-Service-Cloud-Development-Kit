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
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "db_instance_id": "dbInstanceId",
        "refresh_options": "refreshOptions",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Account``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account

        :param account_name: Property accountName: The name of the GDB Account.
        :param db_instance_id: Property dbInstanceId: The ID of the GDB Instance.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0ce23e8142c769db94ebae7dd5594a4149f7e833d408029233025a32d1aed32)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "db_instance_id": db_instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountName: The name of the GDB Account.'''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the GDB Instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.AccountsProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "account_name": "accountName",
        "refresh_options": "refreshOptions",
    },
)
class AccountsProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Accounts``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts

        :param db_instance_id: Property dbInstanceId: Instance Id.
        :param account_name: Property accountName: Account name.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2200f46a10d49083a3e76e05476bcdcf8a4a03c7af3428d89df3f9178df782d4)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.DbInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "refresh_options": "refreshOptions",
    },
)
class DbInstanceProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DbInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance

        :param db_instance_id: Property dbInstanceId: The ID of the GDB Instance.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34214e327d4117a5ae43b0e7ddf6b732fd7e876d732e05ce7fdb60a6cdf6df83)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the GDB Instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.DbInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_description": "dbInstanceDescription",
        "db_instance_id": "dbInstanceId",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class DbInstancesProps:
    def __init__(
        self,
        *,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DbInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances

        :param db_instance_description: Property dbInstanceDescription: According to the practical example or notes.
        :param db_instance_id: Property dbInstanceId: The first ID of the resource.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: Resource Group ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5e44697695983a4e460402d429f62148e39ec1677c1b469b5f1bab95f08dd60)
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.IAccount")
class IAccount(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Account``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountDescription: GDB Account description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountName: The name of the GDB Account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountType: GDB Account Type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        ...


class _IAccountProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Account``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-graphdatabase.datasource.IAccount"

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountDescription: GDB Account description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountName: The name of the GDB Account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountType: GDB Account Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        return typing.cast(AccountProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccount).__jsii_proxy_class__ = lambda : _IAccountProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.IAccounts")
class IAccounts(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Accounts``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountNames: The list of account names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accounts: The list of accounts.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountsProps:
        ...


class _IAccountsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Accounts``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-graphdatabase.datasource.IAccounts"

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountNames: The list of account names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accounts: The list of accounts.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccounts"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountsProps:
        return typing.cast(AccountsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccounts).__jsii_proxy_class__ = lambda : _IAccountsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.IDbInstance")
class IDbInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DbInstance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCurrentMinorVersion")
    def attr_current_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentMinorVersion: The current kernel image version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCategory")
    def attr_db_instance_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceCategory: The category of the db instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCpu")
    def attr_db_instance_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceDescription: According to the practical example or notes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceId: The ID of the GDB Instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIpArray")
    def attr_db_instance_ip_array(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceMemory")
    def attr_db_instance_memory(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceMemory: Instance memory, which is measured in MB.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceNetworkType")
    def attr_db_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceNetworkType: The network type of the db instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorageType")
    def attr_db_instance_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceStorageType: Cloud Disk.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceType: The type of the db instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeClass: The class of the db node.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeCount: The count of the db node.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorage: Instance storage space, which is measured in GB.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEcsSecurityGroupRelations")
    def attr_ecs_security_group_relations(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EcsSecurityGroupRelations: Security group information array.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExpired")
    def attr_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expired: The expire status of the db instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The instance after it expires time for subscription instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLatestMinorVersion")
    def attr_latest_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestMinorVersion: The latest kernel image version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: Instance lock state.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: An instance is locked the reason.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Application Port.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: The public connection string ID of the DB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: The public port ID of the DB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyDbInstanceIds")
    def attr_read_only_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: Resource Group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the GDB Instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The vpc id of the db instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The vswitch id of the DB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The zone ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbInstanceProps:
        ...


class _IDbInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DbInstance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-graphdatabase.datasource.IDbInstance"

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentMinorVersion")
    def attr_current_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentMinorVersion: The current kernel image version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCurrentMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCategory")
    def attr_db_instance_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceCategory: The category of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCpu")
    def attr_db_instance_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceDescription: According to the practical example or notes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceId: The ID of the GDB Instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIpArray")
    def attr_db_instance_ip_array(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceIpArray"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceMemory")
    def attr_db_instance_memory(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceMemory: Instance memory, which is measured in MB.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceNetworkType")
    def attr_db_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceNetworkType: The network type of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorageType")
    def attr_db_instance_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceStorageType: Cloud Disk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceType: The type of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeClass: The class of the db node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeCount: The count of the db node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorage: Instance storage space, which is measured in GB.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsSecurityGroupRelations")
    def attr_ecs_security_group_relations(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EcsSecurityGroupRelations: Security group information array.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEcsSecurityGroupRelations"))

    @builtins.property
    @jsii.member(jsii_name="attrExpired")
    def attr_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expired: The expire status of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The instance after it expires time for subscription instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestMinorVersion")
    def attr_latest_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestMinorVersion: The latest kernel image version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: Instance lock state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: An instance is locked the reason.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Application Port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: The public connection string ID of the DB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: The public port ID of the DB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyDbInstanceIds")
    def attr_read_only_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReadOnlyDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: Resource Group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the GDB Instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The vpc id of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The vswitch id of the DB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The zone ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbInstanceProps:
        return typing.cast(DbInstanceProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDbInstance).__jsii_proxy_class__ = lambda : _IDbInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.IDbInstances")
class IDbInstances(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DbInstances``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceIds: The list of db instance IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstances: The list of db instances.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbInstancesProps:
        ...


class _IDbInstancesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DbInstances``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-graphdatabase.datasource.IDbInstances"

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceIds: The list of db instance IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstances: The list of db instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstances"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbInstancesProps:
        return typing.cast(DbInstancesProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDbInstances).__jsii_proxy_class__ = lambda : _IDbInstancesProxy


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosAccount",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::GraphDatabase::Account``, which is used to query the information about an account of a Graph Database (GDB) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Account`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
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
            type_hints = typing.get_type_hints(_typecheckingstub__69b6f002c0ec51e14ad550094512beba9f1ed2e506eb13737d9c92f0fc340ff7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__19dc22889766d867b73e5d38d758f00f50656b0b549822c9fabebbe01a18e3cb)
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
        :Attribute: AccountDescription: GDB Account description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountName: The name of the GDB Account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountType: GDB Account Type.
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
        :Property: accountName: The name of the GDB Account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__246c18d8f347f2c2c89b4b19e4ac38fe1adf69a2434c85b2725a820fd502ac5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the GDB Instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c64f68188d6888896f78d040f84e9c0bdcc973ec24e84cdbd9d91f1ad4f4ed8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbfe3523a5c99d40c0d61998d94bd5248f7977cb2761f0e5eb6b87d3c1457ed7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__35962bae4e403d3040d5f460e770fd58f0c17ebc292a4985fea438ae871a14f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "db_instance_id": "dbInstanceId",
        "refresh_options": "refreshOptions",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account

        :param account_name: 
        :param db_instance_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6eb5fffa8b2ee0db61b629c239beac41209c3259b1f4375a7b14bf31e8c180e2)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "db_instance_id": db_instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountName: The name of the GDB Account.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the GDB Instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccounts(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosAccounts",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::GraphDatabase::Accounts``, which is used to query the information about accounts.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Accounts`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
            type_hints = typing.get_type_hints(_typecheckingstub__b564bb74e564b5fab61829b7e797e43fd4cbb45eb347654522c5965110493ec5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosAccountsProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "account_name": "accountName",
        "refresh_options": "refreshOptions",
    },
)
class RosAccountsProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccounts``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts

        :param db_instance_id: 
        :param account_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__223ed212bd4b35d3c7e58e6b61bbb486df0f1b33e4cd47a0e558d0362b5ed611)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosDbInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::GraphDatabase::DbInstance``, which is used to query the information about an instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DbInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9c11bfefe4762ffb386c1f25e095c4d5505a0896f2269096da1551d6cbc322a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__398d5ed3ff651d17438e24ad68e51a318680e8aa61f6ff35bcb329106890e1ed)
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
        :Attribute: DbInstanceId: The ID of the GDB Instance.
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
        :Attribute: PaymentType: The DB instance attribute field representing the paid type is desirable.
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
        :Attribute: PublicConnectionString: The public connection string ID of the DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicPort: The public port ID of the DB instance.
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
        :Attribute: Tags: The tags of the GDB Instance.
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
        :Attribute: VSwitchId: The vswitch id of the DB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The zone ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

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
        :Property: dbInstanceId: The ID of the GDB Instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2666f774551b96be0325834e63731849230df4a12eff57751b0d4c403bdfb45)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd2ccb746bc6f1ddece862eb93e8edfd6b42ed98c46ef69208431c80aac2e5c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__8f8d382ec1ea2e39263561370f9551998c3a4aeebe7adaffe8af9dbe5da39103)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosDbInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "refresh_options": "refreshOptions",
    },
)
class RosDbInstanceProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDbInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance

        :param db_instance_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef98b46741ba25115ded4aa38351722f7105b0403d2379b5f795f291db3380d7)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the GDB Instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.RosDbInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::GraphDatabase::DbInstances``, which is used to query the information about Graph Database (GDB) instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DbInstances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
            type_hints = typing.get_type_hints(_typecheckingstub__310e0bb9ae24dcc2cc133dc828d3bdf72a34eff4c0c02a331adb65c68dcd26de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

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
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosDbInstancesProps:
    def __init__(
        self,
        *,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDbInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances

        :param db_instance_description: 
        :param db_instance_id: 
        :param refresh_options: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c89ef366fa9faa206e2a81166eb4c248a785dd03c11cdd887234fa08f5c81b5)
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
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


@jsii.implements(IAccount)
class Account(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.Account",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::GraphDatabase::Account``, which is used to query the information about an account of a Graph Database (GDB) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccount``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
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
            type_hints = typing.get_type_hints(_typecheckingstub__eece7696badfe11840ca88b00a1d10527d4ea390cc561a84abe4fff9e9e61f03)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountDescription: GDB Account description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountName: The name of the GDB Account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountType: GDB Account Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c1292d6dc92b43dd00b77b51b86f48f4de80f80c0ace689cfa4f40390fa57e29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__230d0ae0d321cc9890fdd9acab3a526ce8d3ce5283d49166e96a5d1b45b0d050)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd0e151fddb4883695c3a69be3c7b3bc2169b6f457e66095922dbb8062dbdcb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAccounts)
class Accounts(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.Accounts",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::GraphDatabase::Accounts``, which is used to query the information about accounts.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccounts``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccountsProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_account_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountNames: The list of account names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accounts: The list of accounts.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccounts"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountsProps:
        return typing.cast(AccountsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52d62e5e65cda6b09d5e320a97468fedc4175293b10d667a00b19b0d61b7b36c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2149ba5c4bf76a038754258a0875d51c1f3679eec8bec57501c2ad6463d60154)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3adba0209705c9496c3126da060e3534a36e87b2e252fbd6dea62129b9cf4555)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDbInstance)
class DbInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.DbInstance",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::GraphDatabase::DbInstance``, which is used to query the information about an instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDbInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DbInstanceProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__635dcc2ab81915b4aa5e930821ae3dc8ed2ed1d73703f02bbb3b780c3d7da504)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentMinorVersion")
    def attr_current_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentMinorVersion: The current kernel image version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCurrentMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCategory")
    def attr_db_instance_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceCategory: The category of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCpu")
    def attr_db_instance_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceDescription: According to the practical example or notes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceId: The ID of the GDB Instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIpArray")
    def attr_db_instance_ip_array(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceIpArray"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceMemory")
    def attr_db_instance_memory(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceMemory: Instance memory, which is measured in MB.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceNetworkType")
    def attr_db_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceNetworkType: The network type of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorageType")
    def attr_db_instance_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceStorageType: Cloud Disk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceType: The type of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeClass: The class of the db node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeCount: The count of the db node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorage: Instance storage space, which is measured in GB.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbVersion")
    def attr_db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsSecurityGroupRelations")
    def attr_ecs_security_group_relations(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EcsSecurityGroupRelations: Security group information array.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEcsSecurityGroupRelations"))

    @builtins.property
    @jsii.member(jsii_name="attrExpired")
    def attr_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expired: The expire status of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The instance after it expires time for subscription instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestMinorVersion")
    def attr_latest_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestMinorVersion: The latest kernel image version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: Instance lock state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: An instance is locked the reason.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Application Port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: The public connection string ID of the DB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: The public port ID of the DB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyDbInstanceIds")
    def attr_read_only_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReadOnlyDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: Resource Group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the GDB Instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The vpc id of the db instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The vswitch id of the DB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The zone ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbInstanceProps:
        return typing.cast(DbInstanceProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be15f348b6f5e0664207877753254445265d282a978a9189fab442791e231a6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e059938c8a5a37a03a47b46cec51368f45d74220b7201035548ff68c37761451)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38a6d43e3b84f774af474ca0c884a06bf02b81a861d20e40b3575928449a38dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDbInstances)
class DbInstances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-graphdatabase.datasource.DbInstances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::GraphDatabase::DbInstances``, which is used to query the information about Graph Database (GDB) instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDbInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[DbInstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceIds: The list of db instance IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstances: The list of db instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstances"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbInstancesProps:
        return typing.cast(DbInstancesProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d0649893be3993c2c2bc648057bc2bb888872de8ead25c0f248b3fa0b55cbb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e95a884579c1f5d5467a27444d295f5ee72d546c5483f4de2576db8f22f35bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__903c897c3cb7152794d94535864152ebaeefbe3f42011ec62e35917d2e11c022)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Account",
    "AccountProps",
    "Accounts",
    "AccountsProps",
    "DbInstance",
    "DbInstanceProps",
    "DbInstances",
    "DbInstancesProps",
    "IAccount",
    "IAccounts",
    "IDbInstance",
    "IDbInstances",
    "RosAccount",
    "RosAccountProps",
    "RosAccounts",
    "RosAccountsProps",
    "RosDbInstance",
    "RosDbInstanceProps",
    "RosDbInstances",
    "RosDbInstancesProps",
]

publication.publish()

def _typecheckingstub__b0ce23e8142c769db94ebae7dd5594a4149f7e833d408029233025a32d1aed32(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2200f46a10d49083a3e76e05476bcdcf8a4a03c7af3428d89df3f9178df782d4(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34214e327d4117a5ae43b0e7ddf6b732fd7e876d732e05ce7fdb60a6cdf6df83(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5e44697695983a4e460402d429f62148e39ec1677c1b469b5f1bab95f08dd60(
    *,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69b6f002c0ec51e14ad550094512beba9f1ed2e506eb13737d9c92f0fc340ff7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19dc22889766d867b73e5d38d758f00f50656b0b549822c9fabebbe01a18e3cb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__246c18d8f347f2c2c89b4b19e4ac38fe1adf69a2434c85b2725a820fd502ac5c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c64f68188d6888896f78d040f84e9c0bdcc973ec24e84cdbd9d91f1ad4f4ed8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbfe3523a5c99d40c0d61998d94bd5248f7977cb2761f0e5eb6b87d3c1457ed7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35962bae4e403d3040d5f460e770fd58f0c17ebc292a4985fea438ae871a14f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6eb5fffa8b2ee0db61b629c239beac41209c3259b1f4375a7b14bf31e8c180e2(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__b564bb74e564b5fab61829b7e797e43fd4cbb45eb347654522c5965110493ec5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__223ed212bd4b35d3c7e58e6b61bbb486df0f1b33e4cd47a0e558d0362b5ed611(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9c11bfefe4762ffb386c1f25e095c4d5505a0896f2269096da1551d6cbc322a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDbInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__398d5ed3ff651d17438e24ad68e51a318680e8aa61f6ff35bcb329106890e1ed(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2666f774551b96be0325834e63731849230df4a12eff57751b0d4c403bdfb45(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd2ccb746bc6f1ddece862eb93e8edfd6b42ed98c46ef69208431c80aac2e5c6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f8d382ec1ea2e39263561370f9551998c3a4aeebe7adaffe8af9dbe5da39103(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef98b46741ba25115ded4aa38351722f7105b0403d2379b5f795f291db3380d7(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__310e0bb9ae24dcc2cc133dc828d3bdf72a34eff4c0c02a331adb65c68dcd26de(
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
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eece7696badfe11840ca88b00a1d10527d4ea390cc561a84abe4fff9e9e61f03(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1292d6dc92b43dd00b77b51b86f48f4de80f80c0ace689cfa4f40390fa57e29(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__230d0ae0d321cc9890fdd9acab3a526ce8d3ce5283d49166e96a5d1b45b0d050(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd0e151fddb4883695c3a69be3c7b3bc2169b6f457e66095922dbb8062dbdcb9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bad1137d2eae97d95e6d21b6160a25ec80bfcb7bcd4f05e7c7c6fd67d5dff5d2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52d62e5e65cda6b09d5e320a97468fedc4175293b10d667a00b19b0d61b7b36c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2149ba5c4bf76a038754258a0875d51c1f3679eec8bec57501c2ad6463d60154(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3adba0209705c9496c3126da060e3534a36e87b2e252fbd6dea62129b9cf4555(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__635dcc2ab81915b4aa5e930821ae3dc8ed2ed1d73703f02bbb3b780c3d7da504(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DbInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be15f348b6f5e0664207877753254445265d282a978a9189fab442791e231a6a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e059938c8a5a37a03a47b46cec51368f45d74220b7201035548ff68c37761451(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38a6d43e3b84f774af474ca0c884a06bf02b81a861d20e40b3575928449a38dc(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__8d0649893be3993c2c2bc648057bc2bb888872de8ead25c0f248b3fa0b55cbb8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e95a884579c1f5d5467a27444d295f5ee72d546c5483f4de2576db8f22f35bb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__903c897c3cb7152794d94535864152ebaeefbe3f42011ec62e35917d2e11c022(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
