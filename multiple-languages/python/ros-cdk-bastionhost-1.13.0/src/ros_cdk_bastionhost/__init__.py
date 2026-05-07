'''
## Aliyun ROS BASTIONHOST Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as BASTIONHOST from '@alicloud/ros-cdk-bastionhost';
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
    jsii_type="@alicloud/ros-cdk-bastionhost.ExportConfigJobProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId"},
)
class ExportConfigJobProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ExportConfigJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob

        :param instance_id: Property instanceId: The ID of the bastion host instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed95f83f47ff57d8d7783f16b0d750e5e8c2594146d4d263e9ef4e07f1f7e996)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the bastion host instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ExportConfigJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.HostAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "host_account_name": "hostAccountName",
        "host_id": "hostId",
        "instance_id": "instanceId",
        "protocol_name": "protocolName",
        "host_share_key_id": "hostShareKeyId",
        "pass_phrase": "passPhrase",
        "password": "password",
        "private_key": "privateKey",
        "privilege_type": "privilegeType",
        "rotation_mode": "rotationMode",
    },
)
class HostAccountProps:
    def __init__(
        self,
        *,
        host_account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_share_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pass_phrase: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        privilege_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rotation_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``HostAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount

        :param host_account_name: Property hostAccountName: The name of the host account.
        :param host_id: Property hostId: The ID of the host.
        :param instance_id: Property instanceId: The ID of the bastion host instance.
        :param protocol_name: Property protocolName: The protocol name of the host account. Valid values: SSH, RDP.
        :param host_share_key_id: Property hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
        :param pass_phrase: Property passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
        :param password: Property password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
        :param private_key: Property privateKey: The private key of the host account. This parameter is required when the protocol is SSH.
        :param privilege_type: Property privilegeType: The privilege type of the host account. Valid values: Normal, Administrator.
        :param rotation_mode: Property rotationMode: The rotation mode of the host account. Valid values: Manual, Automatic.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0af8439c88e8cccc76aa60ffc04cc1d29a2b2b845d2e3b80be5361ae9fac182b)
            check_type(argname="argument host_account_name", value=host_account_name, expected_type=type_hints["host_account_name"])
            check_type(argname="argument host_id", value=host_id, expected_type=type_hints["host_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument protocol_name", value=protocol_name, expected_type=type_hints["protocol_name"])
            check_type(argname="argument host_share_key_id", value=host_share_key_id, expected_type=type_hints["host_share_key_id"])
            check_type(argname="argument pass_phrase", value=pass_phrase, expected_type=type_hints["pass_phrase"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument private_key", value=private_key, expected_type=type_hints["private_key"])
            check_type(argname="argument privilege_type", value=privilege_type, expected_type=type_hints["privilege_type"])
            check_type(argname="argument rotation_mode", value=rotation_mode, expected_type=type_hints["rotation_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "host_account_name": host_account_name,
            "host_id": host_id,
            "instance_id": instance_id,
            "protocol_name": protocol_name,
        }
        if host_share_key_id is not None:
            self._values["host_share_key_id"] = host_share_key_id
        if pass_phrase is not None:
            self._values["pass_phrase"] = pass_phrase
        if password is not None:
            self._values["password"] = password
        if private_key is not None:
            self._values["private_key"] = private_key
        if privilege_type is not None:
            self._values["privilege_type"] = privilege_type
        if rotation_mode is not None:
            self._values["rotation_mode"] = rotation_mode

    @builtins.property
    def host_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hostAccountName: The name of the host account.'''
        result = self._values.get("host_account_name")
        assert result is not None, "Required property 'host_account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hostId: The ID of the host.'''
        result = self._values.get("host_id")
        assert result is not None, "Required property 'host_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the bastion host instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocolName: The protocol name of the host account.

        Valid values: SSH, RDP.
        '''
        result = self._values.get("protocol_name")
        assert result is not None, "Required property 'protocol_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_share_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostShareKeyId: The ID of the host share key.

        This parameter is required when the protocol is SSH.
        '''
        result = self._values.get("host_share_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pass_phrase(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property passPhrase: The passphrase of the host account.

        This parameter is required when the protocol is SSH and the private key is encrypted.
        '''
        result = self._values.get("pass_phrase")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: The password of the host account.

        This parameter is required when the protocol is SSH or RDP.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateKey: The private key of the host account.

        This parameter is required when the protocol is SSH.
        '''
        result = self._values.get("private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def privilege_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privilegeType: The privilege type of the host account.

        Valid values: Normal, Administrator.
        '''
        result = self._values.get("privilege_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rotation_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rotationMode: The rotation mode of the host account.

        Valid values: Manual, Automatic.
        '''
        result = self._values.get("rotation_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HostAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.HostAccountUserGroupAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "hosts": "hosts",
        "instance_id": "instanceId",
        "user_group_id": "userGroupId",
    },
)
class HostAccountUserGroupAttachmentProps:
    def __init__(
        self,
        *,
        hosts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosHostAccountUserGroupAttachment.HostsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``HostAccountUserGroupAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment

        :param hosts: Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
        :param instance_id: Property instanceId: The ID of the BastionHost instance.
        :param user_group_id: Property userGroupId: The ID of the user group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d83524d6bdde74a832db84555270a327586509b096e86d0cf15cdfd3d3c30635)
            check_type(argname="argument hosts", value=hosts, expected_type=type_hints["hosts"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument user_group_id", value=user_group_id, expected_type=type_hints["user_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "hosts": hosts,
            "instance_id": instance_id,
            "user_group_id": user_group_id,
        }

    @builtins.property
    def hosts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostAccountUserGroupAttachment.HostsProperty"]]]:
        '''Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.'''
        result = self._values.get("hosts")
        assert result is not None, "Required property 'hosts' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostAccountUserGroupAttachment.HostsProperty"]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the BastionHost instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userGroupId: The ID of the user group.'''
        result = self._values.get("user_group_id")
        assert result is not None, "Required property 'user_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HostAccountUserGroupAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.HostProps",
    jsii_struct_bases=[],
    name_mapping={
        "active_address_type": "activeAddressType",
        "host_name": "hostName",
        "instance_id": "instanceId",
        "os_type": "osType",
        "source": "source",
        "comment": "comment",
        "host_private_address": "hostPrivateAddress",
        "host_public_address": "hostPublicAddress",
        "instance_region_id": "instanceRegionId",
        "source_instance_id": "sourceInstanceId",
    },
)
class HostProps:
    def __init__(
        self,
        *,
        active_address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        os_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_private_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_public_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Host``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host

        :param active_address_type: Property activeAddressType: The endpoint type of the host that you want to create. Valid values: Public: a public endpoint Private: an internal endpoint
        :param host_name: Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        :param instance_id: Property instanceId: The ID of the Bastionhost instance where you want to create the host. Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        :param os_type: Property osType: The operating system of the host that you want to create. Valid values: - Linux - Windows
        :param source: Property source: The source of the host that you want to create. Valid values: - Local: an on-premises host - Ecs: an Elastic Compute Service (ECS) instance - Rds: a host in a dedicated cluster
        :param comment: Property comment: The description of the host that you want to create. The value can be up to 500 characters.
        :param host_private_address: Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address. Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        :param host_public_address: Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address. Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        :param instance_region_id: Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides. Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        :param source_instance_id: Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create. Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c99113053d4d394fd799d048617084e8d023e7b20a240c8ec1268b0e955efdc)
            check_type(argname="argument active_address_type", value=active_address_type, expected_type=type_hints["active_address_type"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument host_private_address", value=host_private_address, expected_type=type_hints["host_private_address"])
            check_type(argname="argument host_public_address", value=host_public_address, expected_type=type_hints["host_public_address"])
            check_type(argname="argument instance_region_id", value=instance_region_id, expected_type=type_hints["instance_region_id"])
            check_type(argname="argument source_instance_id", value=source_instance_id, expected_type=type_hints["source_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "active_address_type": active_address_type,
            "host_name": host_name,
            "instance_id": instance_id,
            "os_type": os_type,
            "source": source,
        }
        if comment is not None:
            self._values["comment"] = comment
        if host_private_address is not None:
            self._values["host_private_address"] = host_private_address
        if host_public_address is not None:
            self._values["host_public_address"] = host_public_address
        if instance_region_id is not None:
            self._values["instance_region_id"] = instance_region_id
        if source_instance_id is not None:
            self._values["source_instance_id"] = source_instance_id

    @builtins.property
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property activeAddressType: The endpoint type of the host that you want to create.

        Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        result = self._values.get("active_address_type")
        assert result is not None, "Required property 'active_address_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hostName: The name of the host that you want to create.

        The name can be up to 128 characters in length.
        '''
        result = self._values.get("host_name")
        assert result is not None, "Required property 'host_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the Bastionhost instance where you want to create the host.

        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def os_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property osType: The operating system of the host that you want to create.

        Valid values:

        - Linux
        - Windows
        '''
        result = self._values.get("os_type")
        assert result is not None, "Required property 'os_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property source: The source of the host that you want to create.

        Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: The description of the host that you want to create.

        The value can be up to 500 characters.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostPrivateAddress: The internal endpoint of the host that you want to create.

        You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        result = self._values.get("host_private_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostPublicAddress: The public endpoint of the host that you want to create.

        You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        result = self._values.get("host_public_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.

        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("instance_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.

        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("source_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-bastionhost.IExportConfigJob")
class IExportConfigJob(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ExportConfigJob``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDownloadUrl")
    def attr_download_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DownloadUrl: The download url of the export config job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the export config job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExportConfigJobProps:
        ...


class _IExportConfigJobProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ExportConfigJob``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bastionhost.IExportConfigJob"

    @builtins.property
    @jsii.member(jsii_name="attrDownloadUrl")
    def attr_download_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DownloadUrl: The download url of the export config job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDownloadUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the export config job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrJobId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExportConfigJobProps:
        return typing.cast(ExportConfigJobProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IExportConfigJob).__jsii_proxy_class__ = lambda : _IExportConfigJobProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-bastionhost.IHost")
class IHost(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Host``.'''

    @builtins.property
    @jsii.member(jsii_name="attrHostId")
    def attr_host_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostId: The ID of the host that was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostProps:
        ...


class _IHostProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Host``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bastionhost.IHost"

    @builtins.property
    @jsii.member(jsii_name="attrHostId")
    def attr_host_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostId: The ID of the host that was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostProps:
        return typing.cast(HostProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHost).__jsii_proxy_class__ = lambda : _IHostProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-bastionhost.IHostAccount")
class IHostAccount(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``HostAccount``.'''

    @builtins.property
    @jsii.member(jsii_name="attrHostAccountId")
    def attr_host_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostAccountId: The ID of the host account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostAccountProps:
        ...


class _IHostAccountProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HostAccount``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bastionhost.IHostAccount"

    @builtins.property
    @jsii.member(jsii_name="attrHostAccountId")
    def attr_host_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostAccountId: The ID of the host account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostAccountId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostAccountProps:
        return typing.cast(HostAccountProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHostAccount).__jsii_proxy_class__ = lambda : _IHostAccountProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-bastionhost.IHostAccountUserGroupAttachment"
)
class IHostAccountUserGroupAttachment(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``HostAccountUserGroupAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostAccountUserGroupAttachmentProps:
        ...


class _IHostAccountUserGroupAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HostAccountUserGroupAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bastionhost.IHostAccountUserGroupAttachment"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostAccountUserGroupAttachmentProps:
        return typing.cast(HostAccountUserGroupAttachmentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHostAccountUserGroupAttachment).__jsii_proxy_class__ = lambda : _IHostAccountUserGroupAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-bastionhost.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bastionhost.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-bastionhost.IPasswordTask")
class IPasswordTask(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PasswordTask``.'''

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: The ID of the password task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PasswordTaskProps":
        ...


class _IPasswordTaskProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PasswordTask``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bastionhost.IPasswordTask"

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: The ID of the password task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PasswordTaskProps":
        return typing.cast("PasswordTaskProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPasswordTask).__jsii_proxy_class__ = lambda : _IPasswordTaskProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-bastionhost.IPasswordTaskHostAccountAttachment"
)
class IPasswordTaskHostAccountAttachment(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``PasswordTaskHostAccountAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PasswordTaskHostAccountAttachmentProps":
        ...


class _IPasswordTaskHostAccountAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PasswordTaskHostAccountAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bastionhost.IPasswordTaskHostAccountAttachment"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PasswordTaskHostAccountAttachmentProps":
        return typing.cast("PasswordTaskHostAccountAttachmentProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPasswordTaskHostAccountAttachment).__jsii_proxy_class__ = lambda : _IPasswordTaskHostAccountAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-bastionhost.IUserGroup")
class IUserGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrUserGroupId")
    def attr_user_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserGroupId: The ID of the user group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserGroupProps":
        ...


class _IUserGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bastionhost.IUserGroup"

    @builtins.property
    @jsii.member(jsii_name="attrUserGroupId")
    def attr_user_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserGroupId: The ID of the user group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserGroupProps":
        return typing.cast("UserGroupProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserGroup).__jsii_proxy_class__ = lambda : _IUserGroupProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::Instance``, which is used to create a bastion host.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7e76171e4ab46bd78788c0dd2c16be6c516bcf23aea62af6746d657e4328cec)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f479e345b6f9b33ebc150b1c9ac711520a5848e132584e573bd2f23b2392ba1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46ce2979eb64a70fe9b0ba89feed4db618360c8a590204a5acedd5a15811b4a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87a6a6e08d8f4c05623313b9634d52cca547b7394c3da330c6f31b70b2dc9a64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "extended_storage_plans": "extendedStoragePlans",
        "extra_bandwidth": "extraBandwidth",
        "plan": "plan",
        "start_instance_param": "startInstanceParam",
        "version": "version",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        extended_storage_plans: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        extra_bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        start_instance_param: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.StartInstanceParamProperty", typing.Dict[builtins.str, typing.Any]]],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance

        :param extended_storage_plans: Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB.
        :param extra_bandwidth: Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps.
        :param plan: Property plan: The number of asset authorization and concurrency limit.Unit: Asset number.
        :param start_instance_param: Property startInstanceParam: Parameters required to start a bastion host instance.
        :param version: Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows, database assets - User management: RAM, AD/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc. - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones. - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows assets - User management: RAM, AD/LDAP and local users - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        :param auto_pay: Property autoPay: Whether to auto pay the bill.
        :param auto_renew: Property autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
        :param period: Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param resource_group_id: Property resourceGroupId: Resource group ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9133d987d047c69563f055f5e2cfcdcecb35b20426820991caa3b4e170d71d94)
            check_type(argname="argument extended_storage_plans", value=extended_storage_plans, expected_type=type_hints["extended_storage_plans"])
            check_type(argname="argument extra_bandwidth", value=extra_bandwidth, expected_type=type_hints["extra_bandwidth"])
            check_type(argname="argument plan", value=plan, expected_type=type_hints["plan"])
            check_type(argname="argument start_instance_param", value=start_instance_param, expected_type=type_hints["start_instance_param"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "extended_storage_plans": extended_storage_plans,
            "extra_bandwidth": extra_bandwidth,
            "plan": plan,
            "start_instance_param": start_instance_param,
            "version": version,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def extended_storage_plans(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB.'''
        result = self._values.get("extended_storage_plans")
        assert result is not None, "Required property 'extended_storage_plans' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def extra_bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps.'''
        result = self._values.get("extra_bandwidth")
        assert result is not None, "Required property 'extra_bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property plan: The number of asset authorization and concurrency limit.Unit: Asset number.'''
        result = self._values.get("plan")
        assert result is not None, "Required property 'plan' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def start_instance_param(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"]:
        '''Property startInstanceParam: Parameters required to start a bastion host instance.'''
        result = self._values.get("start_instance_param")
        assert result is not None, "Required property 'start_instance_param' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows, database assets - User management: RAM, AD/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.

        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
          Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether to auto pay the bill.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether to auto renew the prepay instance.

        The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.'''
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
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPasswordTask)
class PasswordTask(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.PasswordTask",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::PasswordTask``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPasswordTask``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PasswordTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32979b7784417e495be108087b8dca68350d0b5ddf4585a0ab85d826c6fe2381)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: The ID of the password task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PasswordTaskProps":
        return typing.cast("PasswordTaskProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__259b03ef2ea549a7984bb9d82733361b1586b1c50e91c9a9a6688209a1dbb62b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea885f8e1204bb026ab5693d9039a5ba05b280b030910ad91dc4a0d740a50ecb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1678c8ba05f9be40301e12784cf2ead1e3ffed8b1fdb6427a5c8551a1b5ca4fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IPasswordTaskHostAccountAttachment)
class PasswordTaskHostAccountAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.PasswordTaskHostAccountAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::PasswordTaskHostAccountAttachment``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPasswordTaskHostAccountAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PasswordTaskHostAccountAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06c5b3298d9cf13496fe12924ed2d82d60717fa3cb013acf2d9ad31db81c334b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PasswordTaskHostAccountAttachmentProps":
        return typing.cast("PasswordTaskHostAccountAttachmentProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5d651af51af50fb22c4a044a43333c4137be21da5659c12b75249364a343ae0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f06b87e59f5f4b3fd88a1d24378fa05099ce4142849dc4eab159b719a693f785)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41da9584d43dbefcbd1a7a74c9cdaeeec49b3fe3922e441160119c0d95313736)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.PasswordTaskHostAccountAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "host_account_ids": "hostAccountIds",
        "instance_id": "instanceId",
        "task_id": "taskId",
    },
)
class PasswordTaskHostAccountAttachmentProps:
    def __init__(
        self,
        *,
        host_account_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``PasswordTaskHostAccountAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment

        :param host_account_ids: Property hostAccountIds: The IDs of the host accounts to be attached to the password task.
        :param instance_id: Property instanceId: The ID of the bastion host instance.
        :param task_id: Property taskId: The ID of the password task.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__176598c16b74282d52b0a397881644724b9950d53756a7b7e22f287425cbce8b)
            check_type(argname="argument host_account_ids", value=host_account_ids, expected_type=type_hints["host_account_ids"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument task_id", value=task_id, expected_type=type_hints["task_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "host_account_ids": host_account_ids,
            "instance_id": instance_id,
            "task_id": task_id,
        }

    @builtins.property
    def host_account_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property hostAccountIds: The IDs of the host accounts to be attached to the password task.'''
        result = self._values.get("host_account_ids")
        assert result is not None, "Required property 'host_account_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the bastion host instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property taskId: The ID of the password task.'''
        result = self._values.get("task_id")
        assert result is not None, "Required property 'task_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PasswordTaskHostAccountAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.PasswordTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "name": "name",
        "task_schedule_type": "taskScheduleType",
        "comment": "comment",
        "credential_type": "credentialType",
        "key_pair_generate_config": "keyPairGenerateConfig",
        "password_generate_config": "passwordGenerateConfig",
        "password_generate_type": "passwordGenerateType",
        "task_schedule_config": "taskScheduleConfig",
    },
)
class PasswordTaskProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_schedule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        credential_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_generate_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password_generate_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        password_generate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_schedule_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``PasswordTask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask

        :param instance_id: Property instanceId: The ID of the BastionHost instance.
        :param name: Property name: The name of the password task.
        :param task_schedule_type: Property taskScheduleType: The schedule type of the password task.
        :param comment: Property comment: The comment of the password task.
        :param credential_type: Property credentialType: The credential type of the password task.
        :param key_pair_generate_config: Property keyPairGenerateConfig: The key pair generate config of the password task.
        :param password_generate_config: Property passwordGenerateConfig: The password generate config of the password task.
        :param password_generate_type: Property passwordGenerateType: The password generate type of the password task.
        :param task_schedule_config: Property taskScheduleConfig: The schedule config of the password task.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fbb9a969c98f51ecb5dadc871fe3ee875e66c5e95fd6105fc5bf4fe5aa9a287)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument task_schedule_type", value=task_schedule_type, expected_type=type_hints["task_schedule_type"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument credential_type", value=credential_type, expected_type=type_hints["credential_type"])
            check_type(argname="argument key_pair_generate_config", value=key_pair_generate_config, expected_type=type_hints["key_pair_generate_config"])
            check_type(argname="argument password_generate_config", value=password_generate_config, expected_type=type_hints["password_generate_config"])
            check_type(argname="argument password_generate_type", value=password_generate_type, expected_type=type_hints["password_generate_type"])
            check_type(argname="argument task_schedule_config", value=task_schedule_config, expected_type=type_hints["task_schedule_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "name": name,
            "task_schedule_type": task_schedule_type,
        }
        if comment is not None:
            self._values["comment"] = comment
        if credential_type is not None:
            self._values["credential_type"] = credential_type
        if key_pair_generate_config is not None:
            self._values["key_pair_generate_config"] = key_pair_generate_config
        if password_generate_config is not None:
            self._values["password_generate_config"] = password_generate_config
        if password_generate_type is not None:
            self._values["password_generate_type"] = password_generate_type
        if task_schedule_config is not None:
            self._values["task_schedule_config"] = task_schedule_config

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the BastionHost instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the password task.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_schedule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property taskScheduleType: The schedule type of the password task.'''
        result = self._values.get("task_schedule_type")
        assert result is not None, "Required property 'task_schedule_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: The comment of the password task.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def credential_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property credentialType: The credential type of the password task.'''
        result = self._values.get("credential_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_generate_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairGenerateConfig: The key pair generate config of the password task.'''
        result = self._values.get("key_pair_generate_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password_generate_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property passwordGenerateConfig: The password generate config of the password task.'''
        result = self._values.get("password_generate_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def password_generate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property passwordGenerateType: The password generate type of the password task.'''
        result = self._values.get("password_generate_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_schedule_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property taskScheduleConfig: The schedule config of the password task.'''
        result = self._values.get("task_schedule_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PasswordTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosExportConfigJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosExportConfigJob",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::ExportConfigJob``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ExportConfigJob`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosExportConfigJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55fde676f118b852c9e4389312c54d31435e91521f6b44b938ee69faaf607cb0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__22a04b0531ecd103bf3c81aa51d2b1248abef33c5d149f90c6cff18f314599a2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDownloadUrl")
    def attr_download_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DownloadUrl: The download url of the export config job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDownloadUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: JobId: The ID of the export config job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJobId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a7f30ce76e9c7b36e5415ad23729bc88988293df0f9f1d2d414fa7f76808c18d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the bastion host instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15e4dc2d73f72f1efb9a7af85d8ac1a7fc3f5c688d44554619c9a45934bb59d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosExportConfigJobProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId"},
)
class RosExportConfigJobProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosExportConfigJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob

        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d1e00679a493f3ae7d381c78f807a18137955d8bc15549751a4bd91617c038b)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the bastion host instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosExportConfigJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHost(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHost",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::Host``, which is used to create a host for O&M in a bastion host.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Host`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHostProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de71b84bf8924d081168dd16cf6d34eb9b5bd4f8482e4701e82913159c11d945)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2f23e0075876628cf092b95fbd5c752b1cc96ac1a9eceded0969a834a502696f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHostId")
    def attr_host_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostId: The ID of the host that was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="activeAddressType")
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        activeAddressType: The endpoint type of the host that you want to create. Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "activeAddressType"))

    @active_address_type.setter
    def active_address_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ecf55d3b9e001d213e18defc24eb080850459b59e94c58471fc575a23233271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "activeAddressType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b417b2b12a8e6de3b794bdd23543f050286eec7da5860c1b9fe0308865ab1a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostName")
    def host_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hostName"))

    @host_name.setter
    def host_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c14fcbdfa7061146d44dded867f6e877dd1883ff8dc4b78c4bdef6cfccc9c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Bastionhost instance where you want to create the host.
        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee0602e7cb92fb577ecd7def8d672010913a968dfb88f0a34dce7163e9065be3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="osType")
    def os_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        osType: The operating system of the host that you want to create. Valid values:

        - Linux
        - Windows
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6df66c032766b45e4bbf66321580178a982c5357c3566ffbdd438bccb66ceff7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osType", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The source of the host that you want to create. Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__170bf54af43e605e39716af0ebd6818e6e06a21382044734032fda136b35d110)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The description of the host that you want to create. The value can be up to 500 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21355f3f9ea1f29eecef6c0e608310bb32aff6b4d830230b1a2cf9dd5ca28271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="hostPrivateAddress")
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostPrivateAddress"))

    @host_private_address.setter
    def host_private_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__180177a596f5456334cc263fb2272fc338d16f2458f0242fe534ff52e3709a5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostPrivateAddress", value)

    @builtins.property
    @jsii.member(jsii_name="hostPublicAddress")
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostPublicAddress"))

    @host_public_address.setter
    def host_public_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03f8e728c64bba1f1a8fbfab3dc99b4f331629328bc03a2e10be5eb7557ef712)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostPublicAddress", value)

    @builtins.property
    @jsii.member(jsii_name="instanceRegionId")
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceRegionId"))

    @instance_region_id.setter
    def instance_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a609d2efcd432f120de7beb9042f2619573d3e14d3a4f5f5582bcbc07baf3ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceInstanceId")
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceInstanceId"))

    @source_instance_id.setter
    def source_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93e7b4226856024594f6facea40de41f48c46c1cdb4af4d74035b0693d19aeb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceInstanceId", value)


class RosHostAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHostAccount",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::HostAccount``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HostAccount`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHostAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e0e66ae75c3c9fa0611d74fbddf44851f051cc7c5e77cbc80b2752ad43dd2a3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5df557e3f81de971b57e08f3b8cc49e0e4ea58cc148fad087aa4d3d52d49a982)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHostAccountId")
    def attr_host_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostAccountId: The ID of the host account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostAccountId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__381efed9a7d90275c4164503c9cb374ce80c7fca67dbeb67649f2d944a100592)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostAccountName")
    def host_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostAccountName: The name of the host account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hostAccountName"))

    @host_account_name.setter
    def host_account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1f407ff324a1b6735be994c07821c9047c090adc320b376d24c5a730191178e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostAccountName", value)

    @builtins.property
    @jsii.member(jsii_name="hostId")
    def host_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostId: The ID of the host.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hostId"))

    @host_id.setter
    def host_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d832fadf96390124dcf6843f7616d05b484616720618568a4d42a9adca90fd27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the bastion host instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e473dac68b96178e4726aca9c0cd2d2ffb2390e082c4c13ce05befde2c200f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="protocolName")
    def protocol_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolName: The protocol name of the host account. Valid values: SSH, RDP.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocolName"))

    @protocol_name.setter
    def protocol_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d788a2dd8d4b430c4b9bf8fce2126c5ce980c09739e6498307432a5f7b7e57f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolName", value)

    @builtins.property
    @jsii.member(jsii_name="hostShareKeyId")
    def host_share_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostShareKeyId"))

    @host_share_key_id.setter
    def host_share_key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28340df0e95d39b530ac96cf5cbee20c75f47eb8a4c9845e2dbd841fd11c65ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostShareKeyId", value)

    @builtins.property
    @jsii.member(jsii_name="passPhrase")
    def pass_phrase(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "passPhrase"))

    @pass_phrase.setter
    def pass_phrase(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f879f261d1083bdbc5efca719f66803679b850d603952b957f992bcb331b0e60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "passPhrase", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4480cf544036ed3e69bc594c287ef858850d67f73bfe7a48f569708922f4e021)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="privateKey")
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateKey: The private key of the host account. This parameter is required when the protocol is SSH.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateKey"))

    @private_key.setter
    def private_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ede832cb64c92124508205d30ad645be72dd06d8b5cf5f2534d3ee4e6caea622)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateKey", value)

    @builtins.property
    @jsii.member(jsii_name="privilegeType")
    def privilege_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privilegeType: The privilege type of the host account. Valid values: Normal, Administrator.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privilegeType"))

    @privilege_type.setter
    def privilege_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__767985e25f23efa31290332ea4e2ab629a2260af6bde6556fd4a21751dd35986)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privilegeType", value)

    @builtins.property
    @jsii.member(jsii_name="rotationMode")
    def rotation_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rotationMode: The rotation mode of the host account. Valid values: Manual, Automatic.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rotationMode"))

    @rotation_mode.setter
    def rotation_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__486648b6b41a8359cc08e4a310db4922faa744321cc65bfe97e412595b324fd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rotationMode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHostAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "host_account_name": "hostAccountName",
        "host_id": "hostId",
        "instance_id": "instanceId",
        "protocol_name": "protocolName",
        "host_share_key_id": "hostShareKeyId",
        "pass_phrase": "passPhrase",
        "password": "password",
        "private_key": "privateKey",
        "privilege_type": "privilegeType",
        "rotation_mode": "rotationMode",
    },
)
class RosHostAccountProps:
    def __init__(
        self,
        *,
        host_account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_share_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pass_phrase: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        privilege_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rotation_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHostAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount

        :param host_account_name: 
        :param host_id: 
        :param instance_id: 
        :param protocol_name: 
        :param host_share_key_id: 
        :param pass_phrase: 
        :param password: 
        :param private_key: 
        :param privilege_type: 
        :param rotation_mode: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__883a7f76a3996ee43272443ef719a59be972e5e65f36eb3be7edfa3eebff8c64)
            check_type(argname="argument host_account_name", value=host_account_name, expected_type=type_hints["host_account_name"])
            check_type(argname="argument host_id", value=host_id, expected_type=type_hints["host_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument protocol_name", value=protocol_name, expected_type=type_hints["protocol_name"])
            check_type(argname="argument host_share_key_id", value=host_share_key_id, expected_type=type_hints["host_share_key_id"])
            check_type(argname="argument pass_phrase", value=pass_phrase, expected_type=type_hints["pass_phrase"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument private_key", value=private_key, expected_type=type_hints["private_key"])
            check_type(argname="argument privilege_type", value=privilege_type, expected_type=type_hints["privilege_type"])
            check_type(argname="argument rotation_mode", value=rotation_mode, expected_type=type_hints["rotation_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "host_account_name": host_account_name,
            "host_id": host_id,
            "instance_id": instance_id,
            "protocol_name": protocol_name,
        }
        if host_share_key_id is not None:
            self._values["host_share_key_id"] = host_share_key_id
        if pass_phrase is not None:
            self._values["pass_phrase"] = pass_phrase
        if password is not None:
            self._values["password"] = password
        if private_key is not None:
            self._values["private_key"] = private_key
        if privilege_type is not None:
            self._values["privilege_type"] = privilege_type
        if rotation_mode is not None:
            self._values["rotation_mode"] = rotation_mode

    @builtins.property
    def host_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostAccountName: The name of the host account.
        '''
        result = self._values.get("host_account_name")
        assert result is not None, "Required property 'host_account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostId: The ID of the host.
        '''
        result = self._values.get("host_id")
        assert result is not None, "Required property 'host_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the bastion host instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolName: The protocol name of the host account. Valid values: SSH, RDP.
        '''
        result = self._values.get("protocol_name")
        assert result is not None, "Required property 'protocol_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_share_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
        '''
        result = self._values.get("host_share_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pass_phrase(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
        '''
        result = self._values.get("pass_phrase")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateKey: The private key of the host account. This parameter is required when the protocol is SSH.
        '''
        result = self._values.get("private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def privilege_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privilegeType: The privilege type of the host account. Valid values: Normal, Administrator.
        '''
        result = self._values.get("privilege_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rotation_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rotationMode: The rotation mode of the host account. Valid values: Manual, Automatic.
        '''
        result = self._values.get("rotation_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHostAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHostAccountUserGroupAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::HostAccountUserGroupAttachment``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HostAccountUserGroupAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHostAccountUserGroupAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a812c715925bba410890d781443f8728989a41d47f8ea69054b53e908a124f0a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__12e2f1f9f5e9920c77d8326d977e67e9bfc3815b69180b94412a4e369bb961fe)
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
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55801257957d46ad1be8a7b48c1688533bf74cf17e2da583db921b3e6bfb11d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hosts")
    def hosts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostAccountUserGroupAttachment.HostsProperty"]]]:
        '''
        :Property: hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostAccountUserGroupAttachment.HostsProperty"]]], jsii.get(self, "hosts"))

    @hosts.setter
    def hosts(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostAccountUserGroupAttachment.HostsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd8431697a2a223b4255ba2e7fd66c325d44d53ad1c30938af35efdb9d7eed23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hosts", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the BastionHost instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__339e5cb13ea7f019332556527581245ac9907bccc6202dc4aee71dec876a39e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="userGroupId")
    def user_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userGroupId: The ID of the user group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userGroupId"))

    @user_group_id.setter
    def user_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76c3598b935d95781e7a971d2ae995ae50e3d778e36b309e15648abb00edc876)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userGroupId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment.HostsProperty",
        jsii_struct_bases=[],
        name_mapping={"host_id": "hostId", "host_account_ids": "hostAccountIds"},
    )
    class HostsProperty:
        def __init__(
            self,
            *,
            host_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            host_account_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param host_id: 
            :param host_account_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3e768a96a5a5775ef8005fb456b235ad9e63e0eeeffdcfca918bdecb3911e50a)
                check_type(argname="argument host_id", value=host_id, expected_type=type_hints["host_id"])
                check_type(argname="argument host_account_ids", value=host_account_ids, expected_type=type_hints["host_account_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "host_id": host_id,
            }
            if host_account_ids is not None:
                self._values["host_account_ids"] = host_account_ids

        @builtins.property
        def host_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: hostId: The ID of the host.
            '''
            result = self._values.get("host_id")
            assert result is not None, "Required property 'host_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def host_account_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: hostAccountIds: The IDs of the host accounts.
            '''
            result = self._values.get("host_account_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HostsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "hosts": "hosts",
        "instance_id": "instanceId",
        "user_group_id": "userGroupId",
    },
)
class RosHostAccountUserGroupAttachmentProps:
    def __init__(
        self,
        *,
        hosts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHostAccountUserGroupAttachment.HostsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosHostAccountUserGroupAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment

        :param hosts: 
        :param instance_id: 
        :param user_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9eefd8446431412b750676fc54c76f23503244b99c804c869df35e0a50375619)
            check_type(argname="argument hosts", value=hosts, expected_type=type_hints["hosts"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument user_group_id", value=user_group_id, expected_type=type_hints["user_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "hosts": hosts,
            "instance_id": instance_id,
            "user_group_id": user_group_id,
        }

    @builtins.property
    def hosts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHostAccountUserGroupAttachment.HostsProperty]]]:
        '''
        :Property: hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
        '''
        result = self._values.get("hosts")
        assert result is not None, "Required property 'hosts' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHostAccountUserGroupAttachment.HostsProperty]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the BastionHost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userGroupId: The ID of the user group.
        '''
        result = self._values.get("user_group_id")
        assert result is not None, "Required property 'user_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHostAccountUserGroupAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHostProps",
    jsii_struct_bases=[],
    name_mapping={
        "active_address_type": "activeAddressType",
        "host_name": "hostName",
        "instance_id": "instanceId",
        "os_type": "osType",
        "source": "source",
        "comment": "comment",
        "host_private_address": "hostPrivateAddress",
        "host_public_address": "hostPublicAddress",
        "instance_region_id": "instanceRegionId",
        "source_instance_id": "sourceInstanceId",
    },
)
class RosHostProps:
    def __init__(
        self,
        *,
        active_address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        os_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_private_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_public_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHost``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host

        :param active_address_type: 
        :param host_name: 
        :param instance_id: 
        :param os_type: 
        :param source: 
        :param comment: 
        :param host_private_address: 
        :param host_public_address: 
        :param instance_region_id: 
        :param source_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6437460f12c5827a2252d699a10869e314ce0b7c948f156200ccd36549840ed7)
            check_type(argname="argument active_address_type", value=active_address_type, expected_type=type_hints["active_address_type"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument host_private_address", value=host_private_address, expected_type=type_hints["host_private_address"])
            check_type(argname="argument host_public_address", value=host_public_address, expected_type=type_hints["host_public_address"])
            check_type(argname="argument instance_region_id", value=instance_region_id, expected_type=type_hints["instance_region_id"])
            check_type(argname="argument source_instance_id", value=source_instance_id, expected_type=type_hints["source_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "active_address_type": active_address_type,
            "host_name": host_name,
            "instance_id": instance_id,
            "os_type": os_type,
            "source": source,
        }
        if comment is not None:
            self._values["comment"] = comment
        if host_private_address is not None:
            self._values["host_private_address"] = host_private_address
        if host_public_address is not None:
            self._values["host_public_address"] = host_public_address
        if instance_region_id is not None:
            self._values["instance_region_id"] = instance_region_id
        if source_instance_id is not None:
            self._values["source_instance_id"] = source_instance_id

    @builtins.property
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        activeAddressType: The endpoint type of the host that you want to create. Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        result = self._values.get("active_address_type")
        assert result is not None, "Required property 'active_address_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        '''
        result = self._values.get("host_name")
        assert result is not None, "Required property 'host_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Bastionhost instance where you want to create the host.
        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def os_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        osType: The operating system of the host that you want to create. Valid values:

        - Linux
        - Windows
        '''
        result = self._values.get("os_type")
        assert result is not None, "Required property 'os_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The source of the host that you want to create. Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The description of the host that you want to create. The value can be up to 500 characters.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        result = self._values.get("host_private_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        result = self._values.get("host_public_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("instance_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("source_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::Instance``, which is used to create a bastion host.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33c6172c41957cb73b51eba81971807017e4cd43cb316d37c515918fff889f84)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a766b4afaa51f1a2adbd31b4e5cba00e4f44a07df16cb87907ca21d5162acabd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b634cd871a3a32669695b9c796bb041cbcd6e4a32d6e93989544c85417d84498)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="extendedStoragePlans")
    def extended_storage_plans(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "extendedStoragePlans"))

    @extended_storage_plans.setter
    def extended_storage_plans(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb4e84aee68dc089e835a702deb7988cc736e4376de300d42a2b4e12d7bba51d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extendedStoragePlans", value)

    @builtins.property
    @jsii.member(jsii_name="extraBandwidth")
    def extra_bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "extraBandwidth"))

    @extra_bandwidth.setter
    def extra_bandwidth(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3269a6e38f46e6633ab823dd405e65a44c0cac4866d3c5d342054b07cb1c0cf7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extraBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="plan")
    def plan(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: plan: The number of asset authorization and concurrency limit.Unit: Asset number
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "plan"))

    @plan.setter
    def plan(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e154d21f03b0a2e54e40712cab3e603ec04a2507d17efb40fed6dd30e52ae012)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "plan", value)

    @builtins.property
    @jsii.member(jsii_name="startInstanceParam")
    def start_instance_param(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"]:
        '''
        :Property: startInstanceParam: Parameters required to start a bastion host instance.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"], jsii.get(self, "startInstanceParam"))

    @start_instance_param.setter
    def start_instance_param(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ca1e4e47e72e2b3ba1303584cb9b8f02a0f31ef765d0be77be91079a4bf19fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startInstanceParam", value)

    @builtins.property
    @jsii.member(jsii_name="version")
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability

        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows, database assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "version"))

    @version.setter
    def version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b92c2e5f0f20e9199022b403a71f16d524aa6381b1c07e44e0417000ceae2aa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "version", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bafa0dd476c5ebe4096056abafdd6cc54f9c33477d957cf0aacd7ce539802ef1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a423eb41c4f260147658714c52b8b0f33c58513bad00213f10a1c5c9bdfdd7f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f00d727722a057316299e25037362144ec705eab692f33916d3379f0122a92dd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1f6ef072a498ff5da4ed6e8ab446230049395329431679c7dfe0ca53aacbbd5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9505cc404e13bcb913fb1abf07e32f0c33f5283c993f7f91bb36381808cb081a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-bastionhost.RosInstance.StartInstanceParamProperty",
        jsii_struct_bases=[],
        name_mapping={
            "security_group_ids": "securityGroupIds",
            "vswitch_id": "vswitchId",
        },
    )
    class StartInstanceParamProperty:
        def __init__(
            self,
            *,
            security_group_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            vswitch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param security_group_ids: 
            :param vswitch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__79cfc1523770317c4772a5b7be585c7915833bc10b0484c79da45f4183fb871e)
                check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
                check_type(argname="argument vswitch_id", value=vswitch_id, expected_type=type_hints["vswitch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "security_group_ids": security_group_ids,
                "vswitch_id": vswitch_id,
            }

        @builtins.property
        def security_group_ids(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: securityGroupIds: List of security group IDs bound to the bastion host instance
            '''
            result = self._values.get("security_group_ids")
            assert result is not None, "Required property 'security_group_ids' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def vswitch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vswitchId: The VSwitch ID bound to the bastion host instance.
            '''
            result = self._values.get("vswitch_id")
            assert result is not None, "Required property 'vswitch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "StartInstanceParamProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "extended_storage_plans": "extendedStoragePlans",
        "extra_bandwidth": "extraBandwidth",
        "plan": "plan",
        "start_instance_param": "startInstanceParam",
        "version": "version",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        extended_storage_plans: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        extra_bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        start_instance_param: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.StartInstanceParamProperty, typing.Dict[builtins.str, typing.Any]]],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance

        :param extended_storage_plans: 
        :param extra_bandwidth: 
        :param plan: 
        :param start_instance_param: 
        :param version: 
        :param auto_pay: 
        :param auto_renew: 
        :param period: 
        :param period_unit: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9314358ca64f22f88096e1b5d73a194d6d9843fefe488f68b52931ed41936f9b)
            check_type(argname="argument extended_storage_plans", value=extended_storage_plans, expected_type=type_hints["extended_storage_plans"])
            check_type(argname="argument extra_bandwidth", value=extra_bandwidth, expected_type=type_hints["extra_bandwidth"])
            check_type(argname="argument plan", value=plan, expected_type=type_hints["plan"])
            check_type(argname="argument start_instance_param", value=start_instance_param, expected_type=type_hints["start_instance_param"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "extended_storage_plans": extended_storage_plans,
            "extra_bandwidth": extra_bandwidth,
            "plan": plan,
            "start_instance_param": start_instance_param,
            "version": version,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def extended_storage_plans(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
        '''
        result = self._values.get("extended_storage_plans")
        assert result is not None, "Required property 'extended_storage_plans' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def extra_bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
        '''
        result = self._values.get("extra_bandwidth")
        assert result is not None, "Required property 'extra_bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: plan: The number of asset authorization and concurrency limit.Unit: Asset number
        '''
        result = self._values.get("plan")
        assert result is not None, "Required property 'plan' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def start_instance_param(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.StartInstanceParamProperty]:
        '''
        :Property: startInstanceParam: Parameters required to start a bastion host instance.
        '''
        result = self._values.get("start_instance_param")
        assert result is not None, "Required property 'start_instance_param' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.StartInstanceParamProperty], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability

        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows, database assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
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
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPasswordTask(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosPasswordTask",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::PasswordTask``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PasswordTask`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPasswordTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed6d19b1efb322f2d22632d8e74273bf0bc921c7a20c46ece11b95ad1894f671)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6ad90c0576a067de0c4367a0372211bf9bb0147a560503dcc3e865b0c9ddf930)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: The ID of the password task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__aed302f11434102485886e1f4ac6ed599d2821798cc6ec81f4e0f5ce35984b46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the BastionHost instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efd3ce2b5ebf96a7869374c58a6e47c9b80fcd55011ad0dc62642162b29431c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the password task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42aae1d0e3fca094973373bcab8535bc825eaf1bdc809fe0d5d5ad1b29a62a82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="taskScheduleType")
    def task_schedule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskScheduleType: The schedule type of the password task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "taskScheduleType"))

    @task_schedule_type.setter
    def task_schedule_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04b4b0dbdfbe7a873fb96d0c940314c229e39a9f36d8e761137da1245b96b841)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskScheduleType", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The comment of the password task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__414a4b2ac834256e56e065af9580b65f2231d847726f6983f6e0ca140825c1c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="credentialType")
    def credential_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: credentialType: The credential type of the password task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "credentialType"))

    @credential_type.setter
    def credential_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34d4660cb6d4c835519a5117c28212305a86dde045765d8ce9a7c33b2ae3cc89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "credentialType", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairGenerateConfig")
    def key_pair_generate_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairGenerateConfig: The key pair generate config of the password task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairGenerateConfig"))

    @key_pair_generate_config.setter
    def key_pair_generate_config(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f70f1ad72c052762b918b0070d197f97486e3a26260a0401d754c9c70b5f88cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairGenerateConfig", value)

    @builtins.property
    @jsii.member(jsii_name="passwordGenerateConfig")
    def password_generate_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: passwordGenerateConfig: The password generate config of the password task.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "passwordGenerateConfig"))

    @password_generate_config.setter
    def password_generate_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b90e7505eb4a089467322d169e199d08444825cf4ddc0da62bbae21682bc4fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "passwordGenerateConfig", value)

    @builtins.property
    @jsii.member(jsii_name="passwordGenerateType")
    def password_generate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: passwordGenerateType: The password generate type of the password task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "passwordGenerateType"))

    @password_generate_type.setter
    def password_generate_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb393fbbc752bde38c35f5ee105be35a99393fa8d7aae29b2ae8c734d014c019)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "passwordGenerateType", value)

    @builtins.property
    @jsii.member(jsii_name="taskScheduleConfig")
    def task_schedule_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: taskScheduleConfig: The schedule config of the password task.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "taskScheduleConfig"))

    @task_schedule_config.setter
    def task_schedule_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e08d642e911fe949153d04111689ed1f89ab95ca7c9b2ee5d0fb857b5fd53f39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskScheduleConfig", value)


class RosPasswordTaskHostAccountAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosPasswordTaskHostAccountAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::PasswordTaskHostAccountAttachment``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PasswordTaskHostAccountAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPasswordTaskHostAccountAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a477e8270b40fac346867b02aef0eab9b9fd9f4fedf317afea1849ddd4da924)
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
            type_hints = typing.get_type_hints(_typecheckingstub__edb20f1c0eef94c7e2661e1a78c54093b1631659c6b20408aa4bdc7f0630168e)
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
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4244fdbedec94af393e9c8626e3e6d893f1bfaf3f8c868f499a6ad9cd3c35ae4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostAccountIds")
    def host_account_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: hostAccountIds: The IDs of the host accounts to be attached to the password task.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "hostAccountIds"))

    @host_account_ids.setter
    def host_account_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__249fe8a9bb634a666565945d393fca8a0f085f74688d38a9b267b085bfcbc091)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostAccountIds", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the bastion host instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4c6ddd8dcc933e357ffac788efdcd428beedda039ce6db67bd7228205958954)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="taskId")
    def task_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskId: The ID of the password task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "taskId"))

    @task_id.setter
    def task_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f824e251af3d4183529d8fe9069bfbdbee42e402af98d15f07bdf30599572dbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosPasswordTaskHostAccountAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "host_account_ids": "hostAccountIds",
        "instance_id": "instanceId",
        "task_id": "taskId",
    },
)
class RosPasswordTaskHostAccountAttachmentProps:
    def __init__(
        self,
        *,
        host_account_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosPasswordTaskHostAccountAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment

        :param host_account_ids: 
        :param instance_id: 
        :param task_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7afb17442e73abc40a76b7e40669b5bef19e9a36f3910cddd9fc693b2f41be47)
            check_type(argname="argument host_account_ids", value=host_account_ids, expected_type=type_hints["host_account_ids"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument task_id", value=task_id, expected_type=type_hints["task_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "host_account_ids": host_account_ids,
            "instance_id": instance_id,
            "task_id": task_id,
        }

    @builtins.property
    def host_account_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: hostAccountIds: The IDs of the host accounts to be attached to the password task.
        '''
        result = self._values.get("host_account_ids")
        assert result is not None, "Required property 'host_account_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the bastion host instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskId: The ID of the password task.
        '''
        result = self._values.get("task_id")
        assert result is not None, "Required property 'task_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPasswordTaskHostAccountAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosPasswordTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "name": "name",
        "task_schedule_type": "taskScheduleType",
        "comment": "comment",
        "credential_type": "credentialType",
        "key_pair_generate_config": "keyPairGenerateConfig",
        "password_generate_config": "passwordGenerateConfig",
        "password_generate_type": "passwordGenerateType",
        "task_schedule_config": "taskScheduleConfig",
    },
)
class RosPasswordTaskProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_schedule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        credential_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_generate_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password_generate_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        password_generate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_schedule_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosPasswordTask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask

        :param instance_id: 
        :param name: 
        :param task_schedule_type: 
        :param comment: 
        :param credential_type: 
        :param key_pair_generate_config: 
        :param password_generate_config: 
        :param password_generate_type: 
        :param task_schedule_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccdf3e66a9953f87898c530249b22a4588f95384953dbd2c0a87f5f0bc0c63e2)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument task_schedule_type", value=task_schedule_type, expected_type=type_hints["task_schedule_type"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument credential_type", value=credential_type, expected_type=type_hints["credential_type"])
            check_type(argname="argument key_pair_generate_config", value=key_pair_generate_config, expected_type=type_hints["key_pair_generate_config"])
            check_type(argname="argument password_generate_config", value=password_generate_config, expected_type=type_hints["password_generate_config"])
            check_type(argname="argument password_generate_type", value=password_generate_type, expected_type=type_hints["password_generate_type"])
            check_type(argname="argument task_schedule_config", value=task_schedule_config, expected_type=type_hints["task_schedule_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "name": name,
            "task_schedule_type": task_schedule_type,
        }
        if comment is not None:
            self._values["comment"] = comment
        if credential_type is not None:
            self._values["credential_type"] = credential_type
        if key_pair_generate_config is not None:
            self._values["key_pair_generate_config"] = key_pair_generate_config
        if password_generate_config is not None:
            self._values["password_generate_config"] = password_generate_config
        if password_generate_type is not None:
            self._values["password_generate_type"] = password_generate_type
        if task_schedule_config is not None:
            self._values["task_schedule_config"] = task_schedule_config

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the BastionHost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the password task.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_schedule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskScheduleType: The schedule type of the password task.
        '''
        result = self._values.get("task_schedule_type")
        assert result is not None, "Required property 'task_schedule_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The comment of the password task.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def credential_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: credentialType: The credential type of the password task.
        '''
        result = self._values.get("credential_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_generate_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairGenerateConfig: The key pair generate config of the password task.
        '''
        result = self._values.get("key_pair_generate_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password_generate_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: passwordGenerateConfig: The password generate config of the password task.
        '''
        result = self._values.get("password_generate_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def password_generate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: passwordGenerateType: The password generate type of the password task.
        '''
        result = self._values.get("password_generate_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_schedule_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: taskScheduleConfig: The schedule config of the password task.
        '''
        result = self._values.get("task_schedule_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPasswordTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosUserGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::UserGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9ba1f9d2c38e1de5797bc3641fcc6e40c1a9ed7ac7d6df7e41c04cf8bb16928)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a80411ba7c3e2a989d606b0c048ded1ddf1d3eaf1a0e91f0bd44d32e0ca1b1ab)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrUserGroupId")
    def attr_user_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserGroupId: The ID of the user group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__95b8f633b0f8823f4829a7e7802216f3c74f087550ef07acbea37f1221762b78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the BastionHost instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24a1040f64847541ff99b3db32c4a58acaf53d04d6f014439913e1a0e6f12084)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="userGroupName")
    def user_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userGroupName: The name of the user group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userGroupName"))

    @user_group_name.setter
    def user_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4794064da5083cf76e141ef618d00bfbb30fdfac367c860d51af12d342915cf0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The comment of the user group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d39d7133e76b54f5992ffd61d8755e5b440f6c5769b6d7e1cbbea81c0e166a34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosUserGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "user_group_name": "userGroupName",
        "comment": "comment",
    },
)
class RosUserGroupProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosUserGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup

        :param instance_id: 
        :param user_group_name: 
        :param comment: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7687c52dfb545da671a5e5d37c896403368c733414e3237183526bc72fcacbbe)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument user_group_name", value=user_group_name, expected_type=type_hints["user_group_name"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "user_group_name": user_group_name,
        }
        if comment is not None:
            self._values["comment"] = comment

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the BastionHost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userGroupName: The name of the user group.
        '''
        result = self._values.get("user_group_name")
        assert result is not None, "Required property 'user_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The comment of the user group.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserGroup)
class UserGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.UserGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::UserGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__379aba467a555cca14fd62b036b64eee8b94911db05df2ed83fc6e7170aaad93)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrUserGroupId")
    def attr_user_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserGroupId: The ID of the user group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserGroupProps":
        return typing.cast("UserGroupProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf82fc156c4e0da693483ab680c444acff3755f0ac3d79c74524e79c2fbf40ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad8e3a83cf87e5bbbbf280bb3a633d990640ec30ec2cb497dc0b8e9f2a452f0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63f3dafef094454c54d3c1d6216368e754ad9f864021ed1d9022227d52851567)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.UserGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "user_group_name": "userGroupName",
        "comment": "comment",
    },
)
class UserGroupProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``UserGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup

        :param instance_id: Property instanceId: The ID of the BastionHost instance.
        :param user_group_name: Property userGroupName: The name of the user group.
        :param comment: Property comment: The comment of the user group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8eec840e28479fb0cba978a28a748eeb2d268f65befdf1f9fc95d4d2863d8617)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument user_group_name", value=user_group_name, expected_type=type_hints["user_group_name"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "user_group_name": user_group_name,
        }
        if comment is not None:
            self._values["comment"] = comment

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the BastionHost instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userGroupName: The name of the user group.'''
        result = self._values.get("user_group_name")
        assert result is not None, "Required property 'user_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: The comment of the user group.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IExportConfigJob)
class ExportConfigJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.ExportConfigJob",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::ExportConfigJob``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosExportConfigJob``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ExportConfigJobProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7ec96fdeb93299829e1f4b3359151163d8b2d5590c376f754e9746b797cb8e2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDownloadUrl")
    def attr_download_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DownloadUrl: The download url of the export config job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDownloadUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the export config job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrJobId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExportConfigJobProps:
        return typing.cast(ExportConfigJobProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__932a0f0429a812fbb0b28cb24620702cb613ee783f7c1882213e9d573148a36d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__064919bef1c4ea7c341d97ba7805bcd6da022e84a933d80fafcd6c6848abaa6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__742158f1d446e18ec9ac338dd32994613cc8c66115cb8b1f2a9aedc98b239b68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHost)
class Host(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.Host",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::Host``, which is used to create a host for O&M in a bastion host.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHost``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HostProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37e6c27758efc11aabd63c809396802ff78296c4b61e292bda206365dda8b0b6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHostId")
    def attr_host_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostId: The ID of the host that was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostProps:
        return typing.cast(HostProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da19bdba0d5c03257b20188be746fce774477c02cdb43e290572e3e5c2f56628)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70572c53a13159c9293987fb66b3f6f84e357ff67b47b35a3fb1b1e364f09ce2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52db1e2762be5534ff35ea9833525b2a3f8ea9dab567059257a831e1579021a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHostAccount)
class HostAccount(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.HostAccount",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::HostAccount``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHostAccount``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HostAccountProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8405464314ba7d5dbcf360e803395e6c304642491e4e66f00f6ec7a0e4b3558c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHostAccountId")
    def attr_host_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostAccountId: The ID of the host account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostAccountId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostAccountProps:
        return typing.cast(HostAccountProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5871ee77f3483b819d7f7cedba1d20e02ffce09adba5d7417fa3a5aeca268fe4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__137744d8c942972ee46f1bad655426a6fcd1c8b17c88f504b2474a89c95cb0a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57e5ff7039e5eb1f04537963aa944f9d28094fa251b401d6180185b8e2796462)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHostAccountUserGroupAttachment)
class HostAccountUserGroupAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.HostAccountUserGroupAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::HostAccountUserGroupAttachment``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHostAccountUserGroupAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HostAccountUserGroupAttachmentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6d80416a63877ba6f77c3685e0e9511112048ec185824c0a355b18a6aa53fa3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostAccountUserGroupAttachmentProps:
        return typing.cast(HostAccountUserGroupAttachmentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c54cfcbb085ff1250cde3c113569e7f2b8d544814f38c787ed480716f036055)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__063c72c5163006d8c0578e72ca198737a85172b1b7b5fb55d97cfe44e833c12e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94bc3e9357c8978ccffc14cfbac6d14f7c0e51e0ba6e2d27084227dcfbc7fdea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "ExportConfigJob",
    "ExportConfigJobProps",
    "Host",
    "HostAccount",
    "HostAccountProps",
    "HostAccountUserGroupAttachment",
    "HostAccountUserGroupAttachmentProps",
    "HostProps",
    "IExportConfigJob",
    "IHost",
    "IHostAccount",
    "IHostAccountUserGroupAttachment",
    "IInstance",
    "IPasswordTask",
    "IPasswordTaskHostAccountAttachment",
    "IUserGroup",
    "Instance",
    "InstanceProps",
    "PasswordTask",
    "PasswordTaskHostAccountAttachment",
    "PasswordTaskHostAccountAttachmentProps",
    "PasswordTaskProps",
    "RosExportConfigJob",
    "RosExportConfigJobProps",
    "RosHost",
    "RosHostAccount",
    "RosHostAccountProps",
    "RosHostAccountUserGroupAttachment",
    "RosHostAccountUserGroupAttachmentProps",
    "RosHostProps",
    "RosInstance",
    "RosInstanceProps",
    "RosPasswordTask",
    "RosPasswordTaskHostAccountAttachment",
    "RosPasswordTaskHostAccountAttachmentProps",
    "RosPasswordTaskProps",
    "RosUserGroup",
    "RosUserGroupProps",
    "UserGroup",
    "UserGroupProps",
]

publication.publish()

def _typecheckingstub__ed95f83f47ff57d8d7783f16b0d750e5e8c2594146d4d263e9ef4e07f1f7e996(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0af8439c88e8cccc76aa60ffc04cc1d29a2b2b845d2e3b80be5361ae9fac182b(
    *,
    host_account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_share_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pass_phrase: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    privilege_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rotation_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d83524d6bdde74a832db84555270a327586509b096e86d0cf15cdfd3d3c30635(
    *,
    hosts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHostAccountUserGroupAttachment.HostsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c99113053d4d394fd799d048617084e8d023e7b20a240c8ec1268b0e955efdc(
    *,
    active_address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    os_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_private_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_public_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7e76171e4ab46bd78788c0dd2c16be6c516bcf23aea62af6746d657e4328cec(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f479e345b6f9b33ebc150b1c9ac711520a5848e132584e573bd2f23b2392ba1e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46ce2979eb64a70fe9b0ba89feed4db618360c8a590204a5acedd5a15811b4a1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87a6a6e08d8f4c05623313b9634d52cca547b7394c3da330c6f31b70b2dc9a64(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9133d987d047c69563f055f5e2cfcdcecb35b20426820991caa3b4e170d71d94(
    *,
    extended_storage_plans: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    extra_bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    start_instance_param: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.StartInstanceParamProperty, typing.Dict[builtins.str, typing.Any]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32979b7784417e495be108087b8dca68350d0b5ddf4585a0ab85d826c6fe2381(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PasswordTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__259b03ef2ea549a7984bb9d82733361b1586b1c50e91c9a9a6688209a1dbb62b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea885f8e1204bb026ab5693d9039a5ba05b280b030910ad91dc4a0d740a50ecb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1678c8ba05f9be40301e12784cf2ead1e3ffed8b1fdb6427a5c8551a1b5ca4fe(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06c5b3298d9cf13496fe12924ed2d82d60717fa3cb013acf2d9ad31db81c334b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PasswordTaskHostAccountAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5d651af51af50fb22c4a044a43333c4137be21da5659c12b75249364a343ae0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f06b87e59f5f4b3fd88a1d24378fa05099ce4142849dc4eab159b719a693f785(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41da9584d43dbefcbd1a7a74c9cdaeeec49b3fe3922e441160119c0d95313736(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__176598c16b74282d52b0a397881644724b9950d53756a7b7e22f287425cbce8b(
    *,
    host_account_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fbb9a969c98f51ecb5dadc871fe3ee875e66c5e95fd6105fc5bf4fe5aa9a287(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_schedule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    credential_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_generate_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_generate_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    password_generate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_schedule_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55fde676f118b852c9e4389312c54d31435e91521f6b44b938ee69faaf607cb0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosExportConfigJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22a04b0531ecd103bf3c81aa51d2b1248abef33c5d149f90c6cff18f314599a2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7f30ce76e9c7b36e5415ad23729bc88988293df0f9f1d2d414fa7f76808c18d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15e4dc2d73f72f1efb9a7af85d8ac1a7fc3f5c688d44554619c9a45934bb59d3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d1e00679a493f3ae7d381c78f807a18137955d8bc15549751a4bd91617c038b(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de71b84bf8924d081168dd16cf6d34eb9b5bd4f8482e4701e82913159c11d945(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHostProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f23e0075876628cf092b95fbd5c752b1cc96ac1a9eceded0969a834a502696f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ecf55d3b9e001d213e18defc24eb080850459b59e94c58471fc575a23233271(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b417b2b12a8e6de3b794bdd23543f050286eec7da5860c1b9fe0308865ab1a1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c14fcbdfa7061146d44dded867f6e877dd1883ff8dc4b78c4bdef6cfccc9c1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee0602e7cb92fb577ecd7def8d672010913a968dfb88f0a34dce7163e9065be3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6df66c032766b45e4bbf66321580178a982c5357c3566ffbdd438bccb66ceff7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__170bf54af43e605e39716af0ebd6818e6e06a21382044734032fda136b35d110(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21355f3f9ea1f29eecef6c0e608310bb32aff6b4d830230b1a2cf9dd5ca28271(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__180177a596f5456334cc263fb2272fc338d16f2458f0242fe534ff52e3709a5c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03f8e728c64bba1f1a8fbfab3dc99b4f331629328bc03a2e10be5eb7557ef712(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a609d2efcd432f120de7beb9042f2619573d3e14d3a4f5f5582bcbc07baf3ef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93e7b4226856024594f6facea40de41f48c46c1cdb4af4d74035b0693d19aeb5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e0e66ae75c3c9fa0611d74fbddf44851f051cc7c5e77cbc80b2752ad43dd2a3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHostAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5df557e3f81de971b57e08f3b8cc49e0e4ea58cc148fad087aa4d3d52d49a982(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__381efed9a7d90275c4164503c9cb374ce80c7fca67dbeb67649f2d944a100592(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1f407ff324a1b6735be994c07821c9047c090adc320b376d24c5a730191178e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d832fadf96390124dcf6843f7616d05b484616720618568a4d42a9adca90fd27(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e473dac68b96178e4726aca9c0cd2d2ffb2390e082c4c13ce05befde2c200f5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d788a2dd8d4b430c4b9bf8fce2126c5ce980c09739e6498307432a5f7b7e57f4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28340df0e95d39b530ac96cf5cbee20c75f47eb8a4c9845e2dbd841fd11c65ff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f879f261d1083bdbc5efca719f66803679b850d603952b957f992bcb331b0e60(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4480cf544036ed3e69bc594c287ef858850d67f73bfe7a48f569708922f4e021(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ede832cb64c92124508205d30ad645be72dd06d8b5cf5f2534d3ee4e6caea622(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__767985e25f23efa31290332ea4e2ab629a2260af6bde6556fd4a21751dd35986(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__486648b6b41a8359cc08e4a310db4922faa744321cc65bfe97e412595b324fd5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__883a7f76a3996ee43272443ef719a59be972e5e65f36eb3be7edfa3eebff8c64(
    *,
    host_account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_share_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pass_phrase: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    privilege_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rotation_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a812c715925bba410890d781443f8728989a41d47f8ea69054b53e908a124f0a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHostAccountUserGroupAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12e2f1f9f5e9920c77d8326d977e67e9bfc3815b69180b94412a4e369bb961fe(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55801257957d46ad1be8a7b48c1688533bf74cf17e2da583db921b3e6bfb11d3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd8431697a2a223b4255ba2e7fd66c325d44d53ad1c30938af35efdb9d7eed23(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHostAccountUserGroupAttachment.HostsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__339e5cb13ea7f019332556527581245ac9907bccc6202dc4aee71dec876a39e3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76c3598b935d95781e7a971d2ae995ae50e3d778e36b309e15648abb00edc876(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e768a96a5a5775ef8005fb456b235ad9e63e0eeeffdcfca918bdecb3911e50a(
    *,
    host_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_account_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eefd8446431412b750676fc54c76f23503244b99c804c869df35e0a50375619(
    *,
    hosts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHostAccountUserGroupAttachment.HostsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6437460f12c5827a2252d699a10869e314ce0b7c948f156200ccd36549840ed7(
    *,
    active_address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    os_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_private_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_public_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33c6172c41957cb73b51eba81971807017e4cd43cb316d37c515918fff889f84(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a766b4afaa51f1a2adbd31b4e5cba00e4f44a07df16cb87907ca21d5162acabd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b634cd871a3a32669695b9c796bb041cbcd6e4a32d6e93989544c85417d84498(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb4e84aee68dc089e835a702deb7988cc736e4376de300d42a2b4e12d7bba51d(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3269a6e38f46e6633ab823dd405e65a44c0cac4866d3c5d342054b07cb1c0cf7(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e154d21f03b0a2e54e40712cab3e603ec04a2507d17efb40fed6dd30e52ae012(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ca1e4e47e72e2b3ba1303584cb9b8f02a0f31ef765d0be77be91079a4bf19fd(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.StartInstanceParamProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b92c2e5f0f20e9199022b403a71f16d524aa6381b1c07e44e0417000ceae2aa1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bafa0dd476c5ebe4096056abafdd6cc54f9c33477d957cf0aacd7ce539802ef1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a423eb41c4f260147658714c52b8b0f33c58513bad00213f10a1c5c9bdfdd7f7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f00d727722a057316299e25037362144ec705eab692f33916d3379f0122a92dd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f6ef072a498ff5da4ed6e8ab446230049395329431679c7dfe0ca53aacbbd5d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9505cc404e13bcb913fb1abf07e32f0c33f5283c993f7f91bb36381808cb081a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79cfc1523770317c4772a5b7be585c7915833bc10b0484c79da45f4183fb871e(
    *,
    security_group_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    vswitch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9314358ca64f22f88096e1b5d73a194d6d9843fefe488f68b52931ed41936f9b(
    *,
    extended_storage_plans: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    extra_bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    start_instance_param: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.StartInstanceParamProperty, typing.Dict[builtins.str, typing.Any]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed6d19b1efb322f2d22632d8e74273bf0bc921c7a20c46ece11b95ad1894f671(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPasswordTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ad90c0576a067de0c4367a0372211bf9bb0147a560503dcc3e865b0c9ddf930(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aed302f11434102485886e1f4ac6ed599d2821798cc6ec81f4e0f5ce35984b46(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efd3ce2b5ebf96a7869374c58a6e47c9b80fcd55011ad0dc62642162b29431c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42aae1d0e3fca094973373bcab8535bc825eaf1bdc809fe0d5d5ad1b29a62a82(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04b4b0dbdfbe7a873fb96d0c940314c229e39a9f36d8e761137da1245b96b841(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__414a4b2ac834256e56e065af9580b65f2231d847726f6983f6e0ca140825c1c4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34d4660cb6d4c835519a5117c28212305a86dde045765d8ce9a7c33b2ae3cc89(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f70f1ad72c052762b918b0070d197f97486e3a26260a0401d754c9c70b5f88cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b90e7505eb4a089467322d169e199d08444825cf4ddc0da62bbae21682bc4fa(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb393fbbc752bde38c35f5ee105be35a99393fa8d7aae29b2ae8c734d014c019(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e08d642e911fe949153d04111689ed1f89ab95ca7c9b2ee5d0fb857b5fd53f39(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a477e8270b40fac346867b02aef0eab9b9fd9f4fedf317afea1849ddd4da924(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPasswordTaskHostAccountAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edb20f1c0eef94c7e2661e1a78c54093b1631659c6b20408aa4bdc7f0630168e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4244fdbedec94af393e9c8626e3e6d893f1bfaf3f8c868f499a6ad9cd3c35ae4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__249fe8a9bb634a666565945d393fca8a0f085f74688d38a9b267b085bfcbc091(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4c6ddd8dcc933e357ffac788efdcd428beedda039ce6db67bd7228205958954(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f824e251af3d4183529d8fe9069bfbdbee42e402af98d15f07bdf30599572dbc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7afb17442e73abc40a76b7e40669b5bef19e9a36f3910cddd9fc693b2f41be47(
    *,
    host_account_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccdf3e66a9953f87898c530249b22a4588f95384953dbd2c0a87f5f0bc0c63e2(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_schedule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    credential_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_generate_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_generate_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    password_generate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_schedule_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9ba1f9d2c38e1de5797bc3641fcc6e40c1a9ed7ac7d6df7e41c04cf8bb16928(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a80411ba7c3e2a989d606b0c048ded1ddf1d3eaf1a0e91f0bd44d32e0ca1b1ab(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95b8f633b0f8823f4829a7e7802216f3c74f087550ef07acbea37f1221762b78(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24a1040f64847541ff99b3db32c4a58acaf53d04d6f014439913e1a0e6f12084(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4794064da5083cf76e141ef618d00bfbb30fdfac367c860d51af12d342915cf0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d39d7133e76b54f5992ffd61d8755e5b440f6c5769b6d7e1cbbea81c0e166a34(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7687c52dfb545da671a5e5d37c896403368c733414e3237183526bc72fcacbbe(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__379aba467a555cca14fd62b036b64eee8b94911db05df2ed83fc6e7170aaad93(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf82fc156c4e0da693483ab680c444acff3755f0ac3d79c74524e79c2fbf40ad(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad8e3a83cf87e5bbbbf280bb3a633d990640ec30ec2cb497dc0b8e9f2a452f0e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63f3dafef094454c54d3c1d6216368e754ad9f864021ed1d9022227d52851567(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eec840e28479fb0cba978a28a748eeb2d268f65befdf1f9fc95d4d2863d8617(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7ec96fdeb93299829e1f4b3359151163d8b2d5590c376f754e9746b797cb8e2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ExportConfigJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__932a0f0429a812fbb0b28cb24620702cb613ee783f7c1882213e9d573148a36d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__064919bef1c4ea7c341d97ba7805bcd6da022e84a933d80fafcd6c6848abaa6c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__742158f1d446e18ec9ac338dd32994613cc8c66115cb8b1f2a9aedc98b239b68(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37e6c27758efc11aabd63c809396802ff78296c4b61e292bda206365dda8b0b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HostProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da19bdba0d5c03257b20188be746fce774477c02cdb43e290572e3e5c2f56628(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70572c53a13159c9293987fb66b3f6f84e357ff67b47b35a3fb1b1e364f09ce2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52db1e2762be5534ff35ea9833525b2a3f8ea9dab567059257a831e1579021a3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8405464314ba7d5dbcf360e803395e6c304642491e4e66f00f6ec7a0e4b3558c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HostAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5871ee77f3483b819d7f7cedba1d20e02ffce09adba5d7417fa3a5aeca268fe4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__137744d8c942972ee46f1bad655426a6fcd1c8b17c88f504b2474a89c95cb0a4(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57e5ff7039e5eb1f04537963aa944f9d28094fa251b401d6180185b8e2796462(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6d80416a63877ba6f77c3685e0e9511112048ec185824c0a355b18a6aa53fa3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HostAccountUserGroupAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c54cfcbb085ff1250cde3c113569e7f2b8d544814f38c787ed480716f036055(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__063c72c5163006d8c0578e72ca198737a85172b1b7b5fb55d97cfe44e833c12e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94bc3e9357c8978ccffc14cfbac6d14f7c0e51e0ba6e2d27084227dcfbc7fdea(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
