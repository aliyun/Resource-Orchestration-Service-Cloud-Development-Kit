'''
## Aliyun ROS CLOUDSSO Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CLOUDSSO from '@alicloud/ros-cdk-cloudsso';
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
    jsii_type="@alicloud/ros-cdk-cloudsso.AccessAssignmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_configuration_id": "accessConfigurationId",
        "directory_id": "directoryId",
        "principal_id": "principalId",
        "principal_type": "principalType",
        "target_id": "targetId",
        "target_type": "targetType",
    },
)
class AccessAssignmentProps:
    def __init__(
        self,
        *,
        access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``AccessAssignment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment

        :param access_configuration_id: Property accessConfigurationId: The ID of the access configuration.
        :param directory_id: Property directoryId: The ID of the directory.
        :param principal_id: Property principalId: The ID of the CloudSSO identity. - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user. - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
        :param principal_type: Property principalType: The type of the CloudSSO identity. Valid values: User, Group
        :param target_id: Property targetId: The ID of the task object.
        :param target_type: Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b2d6665a3d6a152b51621ee05762ebaabb88fbd81d8f753dd1772afea0b9437)
            check_type(argname="argument access_configuration_id", value=access_configuration_id, expected_type=type_hints["access_configuration_id"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument principal_id", value=principal_id, expected_type=type_hints["principal_id"])
            check_type(argname="argument principal_type", value=principal_type, expected_type=type_hints["principal_type"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_configuration_id": access_configuration_id,
            "directory_id": directory_id,
            "principal_id": principal_id,
            "principal_type": principal_type,
            "target_id": target_id,
            "target_type": target_type,
        }

    @builtins.property
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessConfigurationId: The ID of the access configuration.'''
        result = self._values.get("access_configuration_id")
        assert result is not None, "Required property 'access_configuration_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property principalId: The ID of the CloudSSO identity.

        - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
        - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
        '''
        result = self._values.get("principal_id")
        assert result is not None, "Required property 'principal_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property principalType: The type of the CloudSSO identity.

        Valid values: User, Group
        '''
        result = self._values.get("principal_type")
        assert result is not None, "Required property 'principal_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetId: The ID of the task object.'''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetType: The type of the task object.

        Set the value to RD-Account, which specifies the accounts in the resource directory.
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessAssignmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.AccessConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_configuration_name": "accessConfigurationName",
        "directory_id": "directoryId",
        "description": "description",
        "relay_state": "relayState",
        "session_duration": "sessionDuration",
    },
)
class AccessConfigurationProps:
    def __init__(
        self,
        *,
        access_configuration_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        relay_state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AccessConfiguration``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration

        :param access_configuration_name: Property accessConfigurationName: The name of the access configuration. The name can contain letters, digits, and hyphens (-). The name can be up to 32 characters in length.
        :param directory_id: Property directoryId: The ID of the directory.
        :param description: Property description: The description of the access configuration. The description can be up to 1,024 characters in length.
        :param relay_state: Property relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration. The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
        :param session_duration: Property sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration. Unit: seconds. Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours. Default value: 3600. The value indicates 1 hour.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__462eee573591b6b13c7e51df7f1b33c25a8221af521df04cae4f8d7207246563)
            check_type(argname="argument access_configuration_name", value=access_configuration_name, expected_type=type_hints["access_configuration_name"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument relay_state", value=relay_state, expected_type=type_hints["relay_state"])
            check_type(argname="argument session_duration", value=session_duration, expected_type=type_hints["session_duration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_configuration_name": access_configuration_name,
            "directory_id": directory_id,
        }
        if description is not None:
            self._values["description"] = description
        if relay_state is not None:
            self._values["relay_state"] = relay_state
        if session_duration is not None:
            self._values["session_duration"] = session_duration

    @builtins.property
    def access_configuration_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessConfigurationName: The name of the access configuration.

        The name can contain letters, digits, and hyphens (-).
        The name can be up to 32 characters in length.
        '''
        result = self._values.get("access_configuration_name")
        assert result is not None, "Required property 'access_configuration_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the access configuration.

        The description can be up to 1,024 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def relay_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.

        The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
        '''
        result = self._values.get("relay_state")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.

        Unit: seconds.
        Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
        Default value: 3600. The value indicates 1 hour.
        '''
        result = self._values.get("session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.AccessConfigurationProvisionProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_configuration_id": "accessConfigurationId",
        "directory_id": "directoryId",
        "target_id": "targetId",
        "target_type": "targetType",
    },
)
class AccessConfigurationProvisionProps:
    def __init__(
        self,
        *,
        access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``AccessConfigurationProvision``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision

        :param access_configuration_id: Property accessConfigurationId: The ID of the access configuration.
        :param directory_id: Property directoryId: The ID of the directory.
        :param target_id: Property targetId: The ID of the task object.
        :param target_type: Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d86405f221086d2c8010e115b015336e78b73aa76c7603021f0b8c4e810e606)
            check_type(argname="argument access_configuration_id", value=access_configuration_id, expected_type=type_hints["access_configuration_id"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_configuration_id": access_configuration_id,
            "directory_id": directory_id,
            "target_id": target_id,
            "target_type": target_type,
        }

    @builtins.property
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessConfigurationId: The ID of the access configuration.'''
        result = self._values.get("access_configuration_id")
        assert result is not None, "Required property 'access_configuration_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetId: The ID of the task object.'''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetType: The type of the task object.

        Set the value to RD-Account, which specifies the accounts in the resource directory.
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessConfigurationProvisionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.DirectoryProps",
    jsii_struct_bases=[],
    name_mapping={"directory_name": "directoryName"},
)
class DirectoryProps:
    def __init__(
        self,
        *,
        directory_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Directory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory

        :param directory_name: Property directoryName: The name of the directory. The name must be globally unique. The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-. The name must be 2 to 64 characters in length. **Note**: If you do not specify this parameter, the value of this parameter is automatically generated by the system.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5fa3e5941ef914b03081c743d8ace77626d1f6dbacd4c7e28ab9230e82dc24d)
            check_type(argname="argument directory_name", value=directory_name, expected_type=type_hints["directory_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if directory_name is not None:
            self._values["directory_name"] = directory_name

    @builtins.property
    def directory_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property directoryName: The name of the directory.

        The name must be globally unique.
        The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-.
        The name must be 2 to 64 characters in length.
        **Note**: If you do not specify this parameter, the value of this parameter is automatically generated by the system.
        '''
        result = self._values.get("directory_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.GroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "group_name": "groupName",
        "description": "description",
    },
)
class GroupProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Group``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group

        :param directory_id: Property directoryId: The ID of the directory.
        :param group_name: Property groupName: The name of the group. The name can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name can be up to 128 characters in length.
        :param description: Property description: The description of the group. The description can be up to 1,024 characters in length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e72b524ea54b64084162b9b9f187430cb4b730201150a88eb080aee48c3de856)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
            "group_name": group_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: The name of the group.

        The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
        The name can be up to 128 characters in length.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the group.

        The description can be up to 1,024 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.IAccessAssignment")
class IAccessAssignment(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AccessAssignment``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessAssignmentProps:
        ...


class _IAccessAssignmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AccessAssignment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IAccessAssignment"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessAssignmentProps:
        return typing.cast(AccessAssignmentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccessAssignment).__jsii_proxy_class__ = lambda : _IAccessAssignmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.IAccessConfiguration")
class IAccessConfiguration(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``AccessConfiguration``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessConfigurationId")
    def attr_access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessConfigurationId: The ID of the access configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessConfigurationProps:
        ...


class _IAccessConfigurationProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AccessConfiguration``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IAccessConfiguration"

    @builtins.property
    @jsii.member(jsii_name="attrAccessConfigurationId")
    def attr_access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessConfigurationId: The ID of the access configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessConfigurationProps:
        return typing.cast(AccessConfigurationProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccessConfiguration).__jsii_proxy_class__ = lambda : _IAccessConfigurationProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.IAccessConfigurationProvision")
class IAccessConfigurationProvision(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``AccessConfigurationProvision``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessConfigurationProvisionProps:
        ...


class _IAccessConfigurationProvisionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AccessConfigurationProvision``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IAccessConfigurationProvision"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessConfigurationProvisionProps:
        return typing.cast(AccessConfigurationProvisionProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccessConfigurationProvision).__jsii_proxy_class__ = lambda : _IAccessConfigurationProvisionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.IDirectory")
class IDirectory(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Directory``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryId")
    def attr_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DirectoryId: The ID of the directory.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DirectoryProps:
        ...


class _IDirectoryProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Directory``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IDirectory"

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryId")
    def attr_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DirectoryId: The ID of the directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DirectoryProps:
        return typing.cast(DirectoryProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDirectory).__jsii_proxy_class__ = lambda : _IDirectoryProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.IGroup")
class IGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Group``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The ID of the group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GroupProps:
        ...


class _IGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Group``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IGroup"

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The ID of the group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GroupProps:
        return typing.cast(GroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGroup).__jsii_proxy_class__ = lambda : _IGroupProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-cloudsso.IPermissionPolicyToAccessConfigurationAddition"
)
class IPermissionPolicyToAccessConfigurationAddition(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``PermissionPolicyToAccessConfigurationAddition``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PermissionPolicyToAccessConfigurationAdditionProps":
        ...


class _IPermissionPolicyToAccessConfigurationAdditionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PermissionPolicyToAccessConfigurationAddition``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IPermissionPolicyToAccessConfigurationAddition"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PermissionPolicyToAccessConfigurationAdditionProps":
        return typing.cast("PermissionPolicyToAccessConfigurationAdditionProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPermissionPolicyToAccessConfigurationAddition).__jsii_proxy_class__ = lambda : _IPermissionPolicyToAccessConfigurationAdditionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.ISAMLIdentityProvider")
class ISAMLIdentityProvider(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``SAMLIdentityProvider``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SAMLIdentityProviderProps":
        ...


class _ISAMLIdentityProviderProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SAMLIdentityProvider``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.ISAMLIdentityProvider"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SAMLIdentityProviderProps":
        return typing.cast("SAMLIdentityProviderProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISAMLIdentityProvider).__jsii_proxy_class__ = lambda : _ISAMLIdentityProviderProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.ISCIMServerCredential")
class ISCIMServerCredential(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``SCIMServerCredential``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCredentialId")
    def attr_credential_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CredentialId: The ID of the SCIM credential.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCredentialSecret")
    def attr_credential_secret(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CredentialSecret: The secret of the SCIM credential.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SCIMServerCredentialProps":
        ...


class _ISCIMServerCredentialProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SCIMServerCredential``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.ISCIMServerCredential"

    @builtins.property
    @jsii.member(jsii_name="attrCredentialId")
    def attr_credential_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CredentialId: The ID of the SCIM credential.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCredentialId"))

    @builtins.property
    @jsii.member(jsii_name="attrCredentialSecret")
    def attr_credential_secret(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CredentialSecret: The secret of the SCIM credential.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCredentialSecret"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SCIMServerCredentialProps":
        return typing.cast("SCIMServerCredentialProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISCIMServerCredential).__jsii_proxy_class__ = lambda : _ISCIMServerCredentialProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.ISCIMSynchronization")
class ISCIMSynchronization(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``SCIMSynchronization``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SCIMSynchronizationProps":
        ...


class _ISCIMSynchronizationProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SCIMSynchronization``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.ISCIMSynchronization"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SCIMSynchronizationProps":
        return typing.cast("SCIMSynchronizationProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISCIMSynchronization).__jsii_proxy_class__ = lambda : _ISCIMSynchronizationProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.IUser")
class IUser(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``User``.'''

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the user.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProps":
        ...


class _IUserProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``User``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IUser"

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the user.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProps":
        return typing.cast("UserProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUser).__jsii_proxy_class__ = lambda : _IUserProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.IUserProvision")
class IUserProvision(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserProvision``.'''

    @builtins.property
    @jsii.member(jsii_name="attrUserProvisionId")
    def attr_user_provision_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserProvisionId: The ID of the user provisioning.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProvisionProps":
        ...


class _IUserProvisionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserProvision``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IUserProvision"

    @builtins.property
    @jsii.member(jsii_name="attrUserProvisionId")
    def attr_user_provision_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserProvisionId: The ID of the user provisioning.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserProvisionId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProvisionProps":
        return typing.cast("UserProvisionProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserProvision).__jsii_proxy_class__ = lambda : _IUserProvisionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsso.IUserToGroupAddition")
class IUserToGroupAddition(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``UserToGroupAddition``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserToGroupAdditionProps":
        ...


class _IUserToGroupAdditionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserToGroupAddition``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsso.IUserToGroupAddition"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserToGroupAdditionProps":
        return typing.cast("UserToGroupAdditionProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserToGroupAddition).__jsii_proxy_class__ = lambda : _IUserToGroupAdditionProxy


@jsii.implements(IPermissionPolicyToAccessConfigurationAddition)
class PermissionPolicyToAccessConfigurationAddition(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.PermissionPolicyToAccessConfigurationAddition",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition``, which is used to add a policy to an access configuration.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPermissionPolicyToAccessConfigurationAddition``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PermissionPolicyToAccessConfigurationAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa6a60871e9306b28256f71fd47a89f5dd001422f379c0b4c3b0309c7b296a24)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PermissionPolicyToAccessConfigurationAdditionProps":
        return typing.cast("PermissionPolicyToAccessConfigurationAdditionProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8284319ba65cd7d504abd1c21d61b85181983db22067473a1707e144564e4f30)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3531bbefaf8b8bb53b796c5eac5f0cb8a5f3569ec8300cc1d687f8d322e2c8e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8f85fafd2437364445be6070c3e1a2c1ac8686564739a5f6433c21966904c30)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.PermissionPolicyToAccessConfigurationAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_configuration_id": "accessConfigurationId",
        "directory_id": "directoryId",
        "permission_policy_name": "permissionPolicyName",
        "permission_policy_type": "permissionPolicyType",
        "inline_policy_document": "inlinePolicyDocument",
    },
)
class PermissionPolicyToAccessConfigurationAdditionProps:
    def __init__(
        self,
        *,
        access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        permission_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        permission_policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        inline_policy_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``PermissionPolicyToAccessConfigurationAddition``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition

        :param access_configuration_id: Property accessConfigurationId: The ID of the access configuration.
        :param directory_id: Property directoryId: The ID of the directory.
        :param permission_policy_name: Property permissionPolicyName: The name of the permission policy. - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM. - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
        :param permission_policy_type: Property permissionPolicyType: The type of the permission policy. Valid values: - System: system policy. Resource Access Management (RAM) system policies are reused. - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
        :param inline_policy_document: Property inlinePolicyDocument: The configurations of the inline policy. The value can be up to 4,096 characters in length. If you set PermissionPolicyType to Inline, you must specify this parameter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f6a82338940e21a55cdc503f7fe53534fecf2de294f8a978402c54d4ff2b15b)
            check_type(argname="argument access_configuration_id", value=access_configuration_id, expected_type=type_hints["access_configuration_id"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument permission_policy_name", value=permission_policy_name, expected_type=type_hints["permission_policy_name"])
            check_type(argname="argument permission_policy_type", value=permission_policy_type, expected_type=type_hints["permission_policy_type"])
            check_type(argname="argument inline_policy_document", value=inline_policy_document, expected_type=type_hints["inline_policy_document"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_configuration_id": access_configuration_id,
            "directory_id": directory_id,
            "permission_policy_name": permission_policy_name,
            "permission_policy_type": permission_policy_type,
        }
        if inline_policy_document is not None:
            self._values["inline_policy_document"] = inline_policy_document

    @builtins.property
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessConfigurationId: The ID of the access configuration.'''
        result = self._values.get("access_configuration_id")
        assert result is not None, "Required property 'access_configuration_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def permission_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property permissionPolicyName: The name of the permission policy.

        - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
        - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
        '''
        result = self._values.get("permission_policy_name")
        assert result is not None, "Required property 'permission_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def permission_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property permissionPolicyType: The type of the permission policy.

        Valid values:

        - System: system policy. Resource Access Management (RAM) system policies are reused.
        - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
        '''
        result = self._values.get("permission_policy_type")
        assert result is not None, "Required property 'permission_policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def inline_policy_document(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property inlinePolicyDocument: The configurations of the inline policy.

        The value can be up to 4,096 characters in length.
        If you set PermissionPolicyType to Inline, you must specify this parameter.
        '''
        result = self._values.get("inline_policy_document")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PermissionPolicyToAccessConfigurationAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessAssignment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosAccessAssignment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::AccessAssignment``, which is used to assign access permissions on an account in your resource directory to a user or group by using an access configuration.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AccessAssignment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessAssignmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__743acd465c1c3c84b4e45ee1ef8cc5e8274381c9fb862a447abafd35a675ca57)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f4e47a86fae52c2c1e8d4755cec85188c3db5536d3c45be3b46f96f54a9f75d5)
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
    @jsii.member(jsii_name="accessConfigurationId")
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessConfigurationId: The ID of the access configuration.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessConfigurationId"))

    @access_configuration_id.setter
    def access_configuration_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f370e21d8dfe89d3cf53deb4a276285a24602d9cacf4213adb3ff726e234ba2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessConfigurationId", value)

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa1e8414dddea71ab951a1252b84a67576bd9491569924cfa99846ccef1f09f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88b955baf9b9af4329a14a8e281b771c1fe141860146ad5a1750a0f3a6b4131f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="principalId")
    def principal_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        principalId: The ID of the CloudSSO identity.

        - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
        - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "principalId"))

    @principal_id.setter
    def principal_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c9ac460460671866584db769e5f4f5a4f3f839b9ea92a9d4cc6f1fbfa9fa31c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "principalId", value)

    @builtins.property
    @jsii.member(jsii_name="principalType")
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: principalType: The type of the CloudSSO identity. Valid values: User, Group
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "principalType"))

    @principal_type.setter
    def principal_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9ee74cd7414fb6866994db6cdfa236c2c79835f16664f0eed6f3efcd481770e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "principalType", value)

    @builtins.property
    @jsii.member(jsii_name="targetId")
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetId: The ID of the task object.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetId"))

    @target_id.setter
    def target_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6ed5899bc6d39cb84d7ccacdfa5152ae75a8dd56ed0b8a1457cd5e9405a67e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetId", value)

    @builtins.property
    @jsii.member(jsii_name="targetType")
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetType"))

    @target_type.setter
    def target_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__429a8a0203e96ce303c2918dd09e1a47ad6d1640f47b1b9701a02afdbf5947c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosAccessAssignmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_configuration_id": "accessConfigurationId",
        "directory_id": "directoryId",
        "principal_id": "principalId",
        "principal_type": "principalType",
        "target_id": "targetId",
        "target_type": "targetType",
    },
)
class RosAccessAssignmentProps:
    def __init__(
        self,
        *,
        access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosAccessAssignment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment

        :param access_configuration_id: 
        :param directory_id: 
        :param principal_id: 
        :param principal_type: 
        :param target_id: 
        :param target_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd2d4a63c51dfd49b6cbdd8d58322012554961dd722b9b09a2d50fa85a1413b6)
            check_type(argname="argument access_configuration_id", value=access_configuration_id, expected_type=type_hints["access_configuration_id"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument principal_id", value=principal_id, expected_type=type_hints["principal_id"])
            check_type(argname="argument principal_type", value=principal_type, expected_type=type_hints["principal_type"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_configuration_id": access_configuration_id,
            "directory_id": directory_id,
            "principal_id": principal_id,
            "principal_type": principal_type,
            "target_id": target_id,
            "target_type": target_type,
        }

    @builtins.property
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessConfigurationId: The ID of the access configuration.
        '''
        result = self._values.get("access_configuration_id")
        assert result is not None, "Required property 'access_configuration_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        principalId: The ID of the CloudSSO identity.

        - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
        - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
        '''
        result = self._values.get("principal_id")
        assert result is not None, "Required property 'principal_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: principalType: The type of the CloudSSO identity. Valid values: User, Group
        '''
        result = self._values.get("principal_type")
        assert result is not None, "Required property 'principal_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetId: The ID of the task object.
        '''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessAssignmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessConfiguration(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosAccessConfiguration",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::AccessConfiguration``, which is used to create an access configuration.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AccessConfiguration`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessConfigurationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c720aa65121e65b10ebc4249c26a25a40f64d3d139eaaac95b275105c8db52b2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2acb49dc24ba546b426520e23f5d1595619b2a300822fb5f33345b34eabf21be)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessConfigurationId")
    def attr_access_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessConfigurationId: The ID of the access configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessConfigurationName")
    def access_configuration_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accessConfigurationName: The name of the access configuration.
        The name can contain letters, digits, and hyphens (-).
        The name can be up to 32 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessConfigurationName"))

    @access_configuration_name.setter
    def access_configuration_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dff26b22b825c10831a15192be6064de7540edfaadb474837e86eac0454cab1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessConfigurationName", value)

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c5914647ebf4b0047e73aa93391176e1fd62dee9d661e08a547f4e204bb5b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3222c00a6c40d0fba5613aef7140927bc405ef1f279ce0121a85d137804271d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the access configuration.
        The description can be up to 1,024 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eaecc216f45d50788d2ca4f67f6fbe0e8e021f47fdc8d3d3368229d1eba97ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="relayState")
    def relay_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
        The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "relayState"))

    @relay_state.setter
    def relay_state(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f234b6034fe52262910bb9ffa08b5cc331364aa284438d0254bc9a15433e983a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "relayState", value)

    @builtins.property
    @jsii.member(jsii_name="sessionDuration")
    def session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
        Unit: seconds.
        Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
        Default value: 3600. The value indicates 1 hour.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sessionDuration"))

    @session_duration.setter
    def session_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06e23a77f41c915d653d5604e985196c0cc564d38a065c7a2760afde6a62fe7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sessionDuration", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_configuration_name": "accessConfigurationName",
        "directory_id": "directoryId",
        "description": "description",
        "relay_state": "relayState",
        "session_duration": "sessionDuration",
    },
)
class RosAccessConfigurationProps:
    def __init__(
        self,
        *,
        access_configuration_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        relay_state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccessConfiguration``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration

        :param access_configuration_name: 
        :param directory_id: 
        :param description: 
        :param relay_state: 
        :param session_duration: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bae4d898f3a5799724d7655a838e0f6449b251fefd51c076f8aa9060d7288f7)
            check_type(argname="argument access_configuration_name", value=access_configuration_name, expected_type=type_hints["access_configuration_name"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument relay_state", value=relay_state, expected_type=type_hints["relay_state"])
            check_type(argname="argument session_duration", value=session_duration, expected_type=type_hints["session_duration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_configuration_name": access_configuration_name,
            "directory_id": directory_id,
        }
        if description is not None:
            self._values["description"] = description
        if relay_state is not None:
            self._values["relay_state"] = relay_state
        if session_duration is not None:
            self._values["session_duration"] = session_duration

    @builtins.property
    def access_configuration_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accessConfigurationName: The name of the access configuration.
        The name can contain letters, digits, and hyphens (-).
        The name can be up to 32 characters in length.
        '''
        result = self._values.get("access_configuration_name")
        assert result is not None, "Required property 'access_configuration_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the access configuration.
        The description can be up to 1,024 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def relay_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
        The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
        '''
        result = self._values.get("relay_state")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
        Unit: seconds.
        Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
        Default value: 3600. The value indicates 1 hour.
        '''
        result = self._values.get("session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessConfigurationProvision(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProvision",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::AccessConfigurationProvision``, which is used to provision an access configuration for an account in your resource directory.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AccessConfigurationProvision`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessConfigurationProvisionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c82a62e2cc292194c59fdbfeed2b997147043a41f7cbce91b108133a09ab509)
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
            type_hints = typing.get_type_hints(_typecheckingstub__38aa088c45f749ba26eef80ab622f60c7a4f51ed4420a8d40613f2048632be3a)
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
    @jsii.member(jsii_name="accessConfigurationId")
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessConfigurationId: The ID of the access configuration.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessConfigurationId"))

    @access_configuration_id.setter
    def access_configuration_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e5c3ef098eec0fc66d96097ad8a012096ed22212ba1c23487b24ba3db98a71c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessConfigurationId", value)

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c60de3b9f84f0d9ad9d9dcf5b59c75e385a749af130f7b2767957e9eb105f3c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58a303699abc28544b31076bd52dbfbff4f0944e0ce74954c4b114b5cb0e055e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="targetId")
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetId: The ID of the task object.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetId"))

    @target_id.setter
    def target_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8f1e431b947cf965d79cfd7b95a30fefeac1e5587cc45db405e7cf607034311)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetId", value)

    @builtins.property
    @jsii.member(jsii_name="targetType")
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetType"))

    @target_type.setter
    def target_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e14fa6b1b12cc32c9f2544a653ccb6df7b815a11c3b4e9a5c72f5ea2d107698)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProvisionProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_configuration_id": "accessConfigurationId",
        "directory_id": "directoryId",
        "target_id": "targetId",
        "target_type": "targetType",
    },
)
class RosAccessConfigurationProvisionProps:
    def __init__(
        self,
        *,
        access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosAccessConfigurationProvision``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision

        :param access_configuration_id: 
        :param directory_id: 
        :param target_id: 
        :param target_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a101ca369ade51389a3696f6cd76760111a262b69f20221f75f059f537625c1)
            check_type(argname="argument access_configuration_id", value=access_configuration_id, expected_type=type_hints["access_configuration_id"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_configuration_id": access_configuration_id,
            "directory_id": directory_id,
            "target_id": target_id,
            "target_type": target_type,
        }

    @builtins.property
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessConfigurationId: The ID of the access configuration.
        '''
        result = self._values.get("access_configuration_id")
        assert result is not None, "Required property 'access_configuration_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetId: The ID of the task object.
        '''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessConfigurationProvisionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDirectory(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosDirectory",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::Directory``, which is used to create a directory.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Directory`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDirectoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb2ed9f99fc7a44ec9f28065b6c4b22834b2d6d0b7074d9991832381f53685dd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4d161bdc54b4c05c8e15f7aa029e862582a0011319645b76277388fbc6c57a59)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryId")
    def attr_directory_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DirectoryId: The ID of the directory.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectoryId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__00d22994b555dbb2e6ed595155be9a02adf2b4a5c8a254301c70d8d6e860dfc2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="directoryName")
    def directory_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        directoryName: The name of the directory. The name must be globally unique.
        The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-.
        The name must be 2 to 64 characters in length.
        **Note**: If you do not specify this parameter, the value of this parameter is automatically generated by the system.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "directoryName"))

    @directory_name.setter
    def directory_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__502acde4d55c7394bd02e8211f8a5eadadf56c58ec9b4e46d63c2313eee21839)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={"directory_name": "directoryName"},
)
class RosDirectoryProps:
    def __init__(
        self,
        *,
        directory_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDirectory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory

        :param directory_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__029975f059106dd47ff3c17dbc45479fbbf103555ac5b78e176576dc1b311367)
            check_type(argname="argument directory_name", value=directory_name, expected_type=type_hints["directory_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if directory_name is not None:
            self._values["directory_name"] = directory_name

    @builtins.property
    def directory_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        directoryName: The name of the directory. The name must be globally unique.
        The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-.
        The name must be 2 to 64 characters in length.
        **Note**: If you do not specify this parameter, the value of this parameter is automatically generated by the system.
        '''
        result = self._values.get("directory_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::Group``, which is used to create a group in CloudSSO.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Group`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4637f07dea16283259cb688c5669725048356160cad248c3a196a233d05c5b0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8fccb064478d370e32a2c413cb48a31c00d6892bacf89b24263f14eb0052ddc8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: The ID of the group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43534d006d4626fb96eec66925c4908a2683173ef20a0f8355d2d013b49d95b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3783a6036df3997722f627d926afe0553c8a0abcf07be7ced6bba84661785b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        groupName: The name of the group.
        The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
        The name can be up to 128 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5bed229da7a42baca191ad52b1de3d6ddfdf1b339a43f4e9e41fca3e7e67bf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the group.
        The description can be up to 1,024 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7146cfe3f47ecfea63f1ae42e42267dad62af45c6bcab2ae1927a6b606b6c6d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "group_name": "groupName",
        "description": "description",
    },
)
class RosGroupProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group

        :param directory_id: 
        :param group_name: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a200f5a9e4228386b1fc9d5f22bd017eeff6cac1a60c40a927028294615c2e6)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
            "group_name": group_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        groupName: The name of the group.
        The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
        The name can be up to 128 characters in length.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the group.
        The description can be up to 1,024 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPermissionPolicyToAccessConfigurationAddition(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosPermissionPolicyToAccessConfigurationAddition",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition``, which is used to add a policy to an access configuration.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PermissionPolicyToAccessConfigurationAddition`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPermissionPolicyToAccessConfigurationAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6acc3a96b0a489741c126e57ee03d2a1ce816251dfdd967f90211774dd0f96b7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8117548807be690d8aaffd67c7b60775747cfaac25ee2e68a45a2dda2ff5cd9b)
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
    @jsii.member(jsii_name="accessConfigurationId")
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessConfigurationId: The ID of the access configuration.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessConfigurationId"))

    @access_configuration_id.setter
    def access_configuration_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__398dcdf5235b097b35e5a02cc3fae3bbe9adf9181803277e5cef904d303b7784)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessConfigurationId", value)

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b78b5076e86910f2b86581c073b816dc3a1194fc683ded45c3f9e5cd1fa2038)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37ffc13215b5a5c0d4576ab550818c1bd38d15bd0da2aa3ca4cf4a07dbedf823)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="permissionPolicyName")
    def permission_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        permissionPolicyName: The name of the permission policy.

        - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
        - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "permissionPolicyName"))

    @permission_policy_name.setter
    def permission_policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5b70e0761f2093da0cd64193470207efc7142ffea5dd6342d1ab6e18c0c4787)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "permissionPolicyName", value)

    @builtins.property
    @jsii.member(jsii_name="permissionPolicyType")
    def permission_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        permissionPolicyType: The type of the permission policy. Valid values:

        - System: system policy. Resource Access Management (RAM) system policies are reused.
        - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "permissionPolicyType"))

    @permission_policy_type.setter
    def permission_policy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65f18d591b63fe5bace7e6e8a2bd7bb21a1ca234ef417faaec97ea9d3a35b861)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "permissionPolicyType", value)

    @builtins.property
    @jsii.member(jsii_name="inlinePolicyDocument")
    def inline_policy_document(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        inlinePolicyDocument: The configurations of the inline policy.
        The value can be up to 4,096 characters in length.
        If you set PermissionPolicyType to Inline, you must specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "inlinePolicyDocument"))

    @inline_policy_document.setter
    def inline_policy_document(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef575bae615baf9562d3c6d951d1404085e67ffb1aedbc78139e8e2984ed5fb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inlinePolicyDocument", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosPermissionPolicyToAccessConfigurationAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_configuration_id": "accessConfigurationId",
        "directory_id": "directoryId",
        "permission_policy_name": "permissionPolicyName",
        "permission_policy_type": "permissionPolicyType",
        "inline_policy_document": "inlinePolicyDocument",
    },
)
class RosPermissionPolicyToAccessConfigurationAdditionProps:
    def __init__(
        self,
        *,
        access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        permission_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        permission_policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        inline_policy_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosPermissionPolicyToAccessConfigurationAddition``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition

        :param access_configuration_id: 
        :param directory_id: 
        :param permission_policy_name: 
        :param permission_policy_type: 
        :param inline_policy_document: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e0a0ae40adebe39c2251f832b1abeb80d9f1a716290ebf929bc7c8fa1334b4f)
            check_type(argname="argument access_configuration_id", value=access_configuration_id, expected_type=type_hints["access_configuration_id"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument permission_policy_name", value=permission_policy_name, expected_type=type_hints["permission_policy_name"])
            check_type(argname="argument permission_policy_type", value=permission_policy_type, expected_type=type_hints["permission_policy_type"])
            check_type(argname="argument inline_policy_document", value=inline_policy_document, expected_type=type_hints["inline_policy_document"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_configuration_id": access_configuration_id,
            "directory_id": directory_id,
            "permission_policy_name": permission_policy_name,
            "permission_policy_type": permission_policy_type,
        }
        if inline_policy_document is not None:
            self._values["inline_policy_document"] = inline_policy_document

    @builtins.property
    def access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessConfigurationId: The ID of the access configuration.
        '''
        result = self._values.get("access_configuration_id")
        assert result is not None, "Required property 'access_configuration_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def permission_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        permissionPolicyName: The name of the permission policy.

        - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
        - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
        '''
        result = self._values.get("permission_policy_name")
        assert result is not None, "Required property 'permission_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def permission_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        permissionPolicyType: The type of the permission policy. Valid values:

        - System: system policy. Resource Access Management (RAM) system policies are reused.
        - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
        '''
        result = self._values.get("permission_policy_type")
        assert result is not None, "Required property 'permission_policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def inline_policy_document(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        inlinePolicyDocument: The configurations of the inline policy.
        The value can be up to 4,096 characters in length.
        If you set PermissionPolicyType to Inline, you must specify this parameter.
        '''
        result = self._values.get("inline_policy_document")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPermissionPolicyToAccessConfigurationAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSAMLIdentityProvider(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosSAMLIdentityProvider",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::SAMLIdentityProvider``, which is used to configure the information about a Security Assertion Markup Language (SAML) identity provider (IdP).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SAMLIdentityProvider`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSAMLIdentityProviderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03b423c35036708b75f568c6dc6a98bd6060405745508679d303d549968d624b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__245452e5c9ddc59549dfea4f39e3dd6ba6a96e34f5511c44bcb19ac4fbf126d5)
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
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a3e9c6cba6e126bda3b8e2b1866204699e30e9f543a7eadbe7a34f199c1f065)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0830069b5857a3888532f2a5da96d3289f5eeb92d81e1660f716ec89582a26f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="encodedMetadataDocument")
    def encoded_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
        The file is provided by the IdP that supports SAML 2.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encodedMetadataDocument"))

    @encoded_metadata_document.setter
    def encoded_metadata_document(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0963bb1f3c57c0a3deebeecc50cf9d55b8e67f467e457d4d4266bd73788a0b55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encodedMetadataDocument", value)

    @builtins.property
    @jsii.member(jsii_name="entityId")
    def entity_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: entityId: The entity ID of the IdP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "entityId"))

    @entity_id.setter
    def entity_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dce5688fc61a94214d51fe07fc178ff614977c77980dc538cf2b70cd5e52f08a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "entityId", value)

    @builtins.property
    @jsii.member(jsii_name="loginUrl")
    def login_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loginUrl: The logon URL of the IdP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loginUrl"))

    @login_url.setter
    def login_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91334100c4805a2f9c9092dae9e6e5f276a2294e133fedd9aed55f7f80ac9767)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loginUrl", value)

    @builtins.property
    @jsii.member(jsii_name="ssoStatus")
    def sso_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ssoStatus: The status of SSO logon. Valid values:

        - Enabled
        - Disabled (default)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ssoStatus"))

    @sso_status.setter
    def sso_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14402630a9814db633c1af948a70632c0a7305ad37c811627c9acee19aa3af2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ssoStatus", value)

    @builtins.property
    @jsii.member(jsii_name="wantRequestSigned")
    def want_request_signed(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:

        - true: yes
        - false: no (default)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "wantRequestSigned"))

    @want_request_signed.setter
    def want_request_signed(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__724cb6ac4655fecfe260fa3cb3349ef61221dedf7546945598b58493b4423b71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "wantRequestSigned", value)

    @builtins.property
    @jsii.member(jsii_name="x509Certificate")
    def x509_certificate(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "x509Certificate"))

    @x509_certificate.setter
    def x509_certificate(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa18c5267dd3d892c4718ee600647bd703acce1cc933949422327de7c7a0b404)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "x509Certificate", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosSAMLIdentityProviderProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "encoded_metadata_document": "encodedMetadataDocument",
        "entity_id": "entityId",
        "login_url": "loginUrl",
        "sso_status": "ssoStatus",
        "want_request_signed": "wantRequestSigned",
        "x509_certificate": "x509Certificate",
    },
)
class RosSAMLIdentityProviderProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        encoded_metadata_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        entity_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sso_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        want_request_signed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        x509_certificate: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSAMLIdentityProvider``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider

        :param directory_id: 
        :param encoded_metadata_document: 
        :param entity_id: 
        :param login_url: 
        :param sso_status: 
        :param want_request_signed: 
        :param x509_certificate: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbc608a20aa6a7b5df353ff7539c5ed41a0d0ac55041a03035f554cb1371807e)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument encoded_metadata_document", value=encoded_metadata_document, expected_type=type_hints["encoded_metadata_document"])
            check_type(argname="argument entity_id", value=entity_id, expected_type=type_hints["entity_id"])
            check_type(argname="argument login_url", value=login_url, expected_type=type_hints["login_url"])
            check_type(argname="argument sso_status", value=sso_status, expected_type=type_hints["sso_status"])
            check_type(argname="argument want_request_signed", value=want_request_signed, expected_type=type_hints["want_request_signed"])
            check_type(argname="argument x509_certificate", value=x509_certificate, expected_type=type_hints["x509_certificate"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
        }
        if encoded_metadata_document is not None:
            self._values["encoded_metadata_document"] = encoded_metadata_document
        if entity_id is not None:
            self._values["entity_id"] = entity_id
        if login_url is not None:
            self._values["login_url"] = login_url
        if sso_status is not None:
            self._values["sso_status"] = sso_status
        if want_request_signed is not None:
            self._values["want_request_signed"] = want_request_signed
        if x509_certificate is not None:
            self._values["x509_certificate"] = x509_certificate

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def encoded_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
        The file is provided by the IdP that supports SAML 2.0.
        '''
        result = self._values.get("encoded_metadata_document")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def entity_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: entityId: The entity ID of the IdP.
        '''
        result = self._values.get("entity_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loginUrl: The logon URL of the IdP.
        '''
        result = self._values.get("login_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sso_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ssoStatus: The status of SSO logon. Valid values:

        - Enabled
        - Disabled (default)
        '''
        result = self._values.get("sso_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def want_request_signed(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:

        - true: yes
        - false: no (default)
        '''
        result = self._values.get("want_request_signed")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def x509_certificate(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
        '''
        result = self._values.get("x509_certificate")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSAMLIdentityProviderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSCIMServerCredential(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosSCIMServerCredential",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::SCIMServerCredential``, which is used to create a System for Cross-domain Identity Management (SCIM) credential.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SCIMServerCredential`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSCIMServerCredentialProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__376c159bf6ad49e45501e7cd0c1041ee9b030b6820e2cbab46741b96c019cd0b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__adf58c2423a9915e25dedce80899f66ca3db5e13e48340314c7b133334145829)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCredentialId")
    def attr_credential_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CredentialId: The ID of the SCIM credential.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCredentialId"))

    @builtins.property
    @jsii.member(jsii_name="attrCredentialSecret")
    def attr_credential_secret(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CredentialSecret: The secret of the SCIM credential.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCredentialSecret"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63aafd390f3f13f3cb504bbeed099b52bb8e7eccd6ec6b4d52157c1f937cc2f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20c610ca70b0437b8f8091b3e8e65d3364e16e117840e3bc19de9ab6870bbe63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The new status of the SCIM credential. Valid values:

        - Enabled: The SCIM credential is enabled.
        - Disabled: The SCIM credential is disabled.
        The default value is Enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0eeed0a13b7bcad714007b8e3d224b0792d71b99dad8089db334c02d0ab2ef2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosSCIMServerCredentialProps",
    jsii_struct_bases=[],
    name_mapping={"directory_id": "directoryId", "status": "status"},
)
class RosSCIMServerCredentialProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSCIMServerCredential``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential

        :param directory_id: 
        :param status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc9d0c239f0807e56e790a28d37b1c8d471b1894115837cddf504e6671f4b952)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
        }
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The new status of the SCIM credential. Valid values:

        - Enabled: The SCIM credential is enabled.
        - Disabled: The SCIM credential is disabled.
        The default value is Enabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSCIMServerCredentialProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSCIMSynchronization(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosSCIMSynchronization",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::SCIMSynchronization``, which is used to enable or disable System for Cross-domain Identity Management (SCIM) synchronization.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SCIMSynchronization`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSCIMSynchronizationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dea1d5525410f465915ee1294e3eabe4aaaf993ea4d2ca4128d47ae1af0f4ed8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__acdf7fea7a58250da5227a1d0831ecc2e20bede0df375a3bddc80605ee8db12b)
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
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e47f0e308d73f04f7f4ce4a23001ae1b032ceec93f7b2a81fd673380c5bdd55d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__320a3be1c9bfbe3ed90ee94e9747831e8e71c22f20f51c107a7bf87606de9735)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="scimSynchronizationStatus")
    def scim_synchronization_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scimSynchronizationStatus: The status of SCIM synchronization. Valid values:

        - Enabled
        - Disabled
        The default value is Enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scimSynchronizationStatus"))

    @scim_synchronization_status.setter
    def scim_synchronization_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a38c3823d692763b90e65bb65bde2f2dc0ddc29b4051761c9cc9c93aedea99b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scimSynchronizationStatus", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosSCIMSynchronizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "scim_synchronization_status": "scimSynchronizationStatus",
    },
)
class RosSCIMSynchronizationProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scim_synchronization_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSCIMSynchronization``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization

        :param directory_id: 
        :param scim_synchronization_status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb17a9636de68b4c1604bb35d244424d620cd6c1837bd48f65c625ea2bd48fd6)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument scim_synchronization_status", value=scim_synchronization_status, expected_type=type_hints["scim_synchronization_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
        }
        if scim_synchronization_status is not None:
            self._values["scim_synchronization_status"] = scim_synchronization_status

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scim_synchronization_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scimSynchronizationStatus: The status of SCIM synchronization. Valid values:

        - Enabled
        - Disabled
        The default value is Enabled.
        '''
        result = self._values.get("scim_synchronization_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSCIMSynchronizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUser(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosUser",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::User``, which is used to create a user.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``User`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6130709dde87bb46eff3dbbff7ac4e9011260f9093872da1cf421887c89a6e61)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b7fd49b5affa6dbe4a2e5fb93ed6980be8c9a7906cac4ea6030431d04924b828)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: The ID of the user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__165df52eff1bba38e55129d3a2b47df83e7faa77d3b09597072996629f955e4b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42c9453bcc7fa6cd0939ca8f656341e8185389c4e771e6c8780c469a291f43fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        userName: The name of the user. The name must be unique within the directory. The name cannot be changed.
        The name can contain numbers, letters, and the following special characters:
        :_-:

        .
        The name can be up to 64 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73f2d77e3b5eb966886dcffbc26422a31d41431ccabfed5a6c325ddf7f3fa15a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the user.
        The description can be up to 1,024 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26d47a969cff2132e9e4c8b0ac7e57ba8c393990133c47fd6f5fa1f1df99576f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        displayName: The display name of the user.
        The name can be up to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26e582a6ccbc02a87d9f5431fc32015531aff4207dc97b511a73b3990c3483d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="email")
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        email: The email address of the user. The email address must be unique within the directory.
        The email address can be up to 128 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "email"))

    @email.setter
    def email(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a5fabb0c3b382a4599331ca9d0b577d776fb467009da956c19f178a7cf03b47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "email", value)

    @builtins.property
    @jsii.member(jsii_name="firstName")
    def first_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        firstName: The first name of the user.
        The name can be up to 64 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firstName"))

    @first_name.setter
    def first_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdd6a9af5259cb85536037939cfd2c7f6c3fab69a515ee0a92d04bbcad5dcaec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firstName", value)

    @builtins.property
    @jsii.member(jsii_name="lastName")
    def last_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lastName: The last name of the user.
        The name can be up to 64 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lastName"))

    @last_name.setter
    def last_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d35c794698c909b814a6c13428c8dc093936166167a4985c62bd1bd7a068d02d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lastName", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the user. Valid values:

        - Enabled: The logon of the user is enabled. This is the default value.
        - Disabled: The logon of the user is disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7549094420a78bfd59cdb6ccb3857b34ee1580f9203b7a33dec4c381bd2e7b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "user_name": "userName",
        "description": "description",
        "display_name": "displayName",
        "email": "email",
        "first_name": "firstName",
        "last_name": "lastName",
        "status": "status",
    },
)
class RosUserProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        first_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        last_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosUser``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user

        :param directory_id: 
        :param user_name: 
        :param description: 
        :param display_name: 
        :param email: 
        :param first_name: 
        :param last_name: 
        :param status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55a45fb52bd1a1ec98cb4ad8a94912db2c8378aa09790f01f77b0b73aded968b)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument first_name", value=first_name, expected_type=type_hints["first_name"])
            check_type(argname="argument last_name", value=last_name, expected_type=type_hints["last_name"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
            "user_name": user_name,
        }
        if description is not None:
            self._values["description"] = description
        if display_name is not None:
            self._values["display_name"] = display_name
        if email is not None:
            self._values["email"] = email
        if first_name is not None:
            self._values["first_name"] = first_name
        if last_name is not None:
            self._values["last_name"] = last_name
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        userName: The name of the user. The name must be unique within the directory. The name cannot be changed.
        The name can contain numbers, letters, and the following special characters:
        :_-:

        .
        The name can be up to 64 characters in length.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the user.
        The description can be up to 1,024 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        displayName: The display name of the user.
        The name can be up to 256 characters in length.
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        email: The email address of the user. The email address must be unique within the directory.
        The email address can be up to 128 characters in length.
        '''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def first_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        firstName: The first name of the user.
        The name can be up to 64 characters in length.
        '''
        result = self._values.get("first_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def last_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lastName: The last name of the user.
        The name can be up to 64 characters in length.
        '''
        result = self._values.get("last_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the user. Valid values:

        - Enabled: The logon of the user is enabled. This is the default value.
        - Disabled: The logon of the user is disabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserProvision(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosUserProvision",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::UserProvision``, which is used to create a Resource Access Management (RAM) user provisioning.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserProvision`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserProvisionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cb5c6a47251d336f919a98ec30315017207c4b26b501ccc83624be8c500f774)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1c17c38ea17dda90e7d177c3e568fd8083f522a5a22070cf2d73aad0368ddb65)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrUserProvisionId")
    def attr_user_provision_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserProvisionId: The ID of the user provisioning.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserProvisionId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="deletionStrategy")
    def deletion_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:

        - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
        - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deletionStrategy"))

    @deletion_strategy.setter
    def deletion_strategy(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44253d86c0f328131a1ad5507967429dd0851b7fe576ab4df37b814d2b6396ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c07cfb8e4855c53b4d7695c0805b51b64bbf2b0cdc90dd4dcd296ae8a73ce2dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="duplicationStrategy")
    def duplication_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:

        - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
        - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "duplicationStrategy"))

    @duplication_strategy.setter
    def duplication_strategy(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77dc81ba7f70aeb2bc4108a2b01aafd9f14d13f7b3a13c40b29fef6237e375eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duplicationStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__839f4d60da69ea055799eed27b2fcf899de6322595635e2209ae3bfa31c11a31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="principalId")
    def principal_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        principalId: The ID of the principal. Valid values:

        - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
        - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "principalId"))

    @principal_id.setter
    def principal_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe3ba7e01648441d8c1b25ac239a3fffed6bdaffa0cdce88ef30050bc5891f97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "principalId", value)

    @builtins.property
    @jsii.member(jsii_name="principalType")
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        principalType: The type of the principal. Valid values:

        - User: The principal is a cloud SSO user.
        - Group: The principal is a cloud SSO group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "principalType"))

    @principal_type.setter
    def principal_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cbe967be0df53c6a43c3fb2ca4180eeecbd8575264d55360ca884fc74b7bbf3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "principalType", value)

    @builtins.property
    @jsii.member(jsii_name="targetId")
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetId"))

    @target_id.setter
    def target_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c16bf7e71c147bcebac36d94d5e32532a59f1c686f999ce8ee7bc14f8f106b06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetId", value)

    @builtins.property
    @jsii.member(jsii_name="targetType")
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetType"))

    @target_type.setter
    def target_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bff98161746854741ed0def6c119313f38ad091ffcdb5ca89c6f333f8825b989)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__284d9f1ff94e2007779e2edc2345b6a0d6557258b97d3709699d99f1e452e414)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosUserProvisionProps",
    jsii_struct_bases=[],
    name_mapping={
        "deletion_strategy": "deletionStrategy",
        "directory_id": "directoryId",
        "duplication_strategy": "duplicationStrategy",
        "principal_id": "principalId",
        "principal_type": "principalType",
        "target_id": "targetId",
        "target_type": "targetType",
        "description": "description",
    },
)
class RosUserProvisionProps:
    def __init__(
        self,
        *,
        deletion_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        duplication_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosUserProvision``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision

        :param deletion_strategy: 
        :param directory_id: 
        :param duplication_strategy: 
        :param principal_id: 
        :param principal_type: 
        :param target_id: 
        :param target_type: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8ee42a7dfd4ca66637a037b641b7874bca3eefc0c7583aa70fc7d516f8094ec)
            check_type(argname="argument deletion_strategy", value=deletion_strategy, expected_type=type_hints["deletion_strategy"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument duplication_strategy", value=duplication_strategy, expected_type=type_hints["duplication_strategy"])
            check_type(argname="argument principal_id", value=principal_id, expected_type=type_hints["principal_id"])
            check_type(argname="argument principal_type", value=principal_type, expected_type=type_hints["principal_type"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "deletion_strategy": deletion_strategy,
            "directory_id": directory_id,
            "duplication_strategy": duplication_strategy,
            "principal_id": principal_id,
            "principal_type": principal_type,
            "target_id": target_id,
            "target_type": target_type,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def deletion_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:

        - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
        - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
        '''
        result = self._values.get("deletion_strategy")
        assert result is not None, "Required property 'deletion_strategy' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def duplication_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:

        - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
        - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
        '''
        result = self._values.get("duplication_strategy")
        assert result is not None, "Required property 'duplication_strategy' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        principalId: The ID of the principal. Valid values:

        - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
        - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
        '''
        result = self._values.get("principal_id")
        assert result is not None, "Required property 'principal_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        principalType: The type of the principal. Valid values:

        - User: The principal is a cloud SSO user.
        - Group: The principal is a cloud SSO group.
        '''
        result = self._values.get("principal_type")
        assert result is not None, "Required property 'principal_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
        '''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the user.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserProvisionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserToGroupAddition(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.RosUserToGroupAddition",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSSO::UserToGroupAddition``, which is used to add a user to a group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserToGroupAddition`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserToGroupAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6821e2312a264cefbdd2b21d26f1308ae4e89877bf3ec3df7fc025b2a9883d1e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__52223e61013ea7ec73e03bf001e0cc36c81536f44e914834182173d445fa5b0f)
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
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26598de48fcbbd01a1f58381a14471d39da7b40038ba1185ee2691d7efb77741)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c0be7ad1580bcc4041b13150dd67b1905341aee0e4edf529a7948f4ab5401cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The ID of the group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d73c7712acb8b81ea36f1aa133bfd42448f012674737748d0fb3397dee4db6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="userId")
    def user_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userId: The ID of the user.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userId"))

    @user_id.setter
    def user_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9a75127f51908fe4f057ee885a30aca2acc18788b0edd09e136b9b0ea3f8705)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.RosUserToGroupAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "group_id": "groupId",
        "user_id": "userId",
    },
)
class RosUserToGroupAdditionProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosUserToGroupAddition``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition

        :param directory_id: 
        :param group_id: 
        :param user_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb0d492cb260f90c88fe84f6ed49ab020c64dedfcd56cfd5f6d111210df04a0b)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
            "group_id": group_id,
            "user_id": user_id,
        }

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryId: The ID of the directory.
        '''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The ID of the group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userId: The ID of the user.
        '''
        result = self._values.get("user_id")
        assert result is not None, "Required property 'user_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserToGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISAMLIdentityProvider)
class SAMLIdentityProvider(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.SAMLIdentityProvider",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::SAMLIdentityProvider``, which is used to configure the information about a Security Assertion Markup Language (SAML) identity provider (IdP).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSAMLIdentityProvider``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SAMLIdentityProviderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ae6fc67b53bcfb2576e8cd0d6f58bd6d822b7d831843e8b8882b6dbed7a3a26)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SAMLIdentityProviderProps":
        return typing.cast("SAMLIdentityProviderProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8115652132cf0dca0e5b2006ddf51fe41d84f52d62936a584afdde879e6cfbbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d6da0c8db40f4e82f88fd2e3837ae2d55711a0768a0c21badf01e5fe869912b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69989df42cac7612cf5d86fdaea6ee1e17c475eec8de969de2730603595cf5c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.SAMLIdentityProviderProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "encoded_metadata_document": "encodedMetadataDocument",
        "entity_id": "entityId",
        "login_url": "loginUrl",
        "sso_status": "ssoStatus",
        "want_request_signed": "wantRequestSigned",
        "x509_certificate": "x509Certificate",
    },
)
class SAMLIdentityProviderProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        encoded_metadata_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        entity_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sso_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        want_request_signed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        x509_certificate: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SAMLIdentityProvider``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider

        :param directory_id: Property directoryId: The ID of the directory.
        :param encoded_metadata_document: Property encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded. The file is provided by the IdP that supports SAML 2.0.
        :param entity_id: Property entityId: The entity ID of the IdP.
        :param login_url: Property loginUrl: The logon URL of the IdP.
        :param sso_status: Property ssoStatus: The status of SSO logon. Valid values: - Enabled - Disabled (default)
        :param want_request_signed: Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values: - true: yes - false: no (default)
        :param x509_certificate: Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66be9a13075a533b6483716ad0703357604e6a93e258f1eb0f7c71609627b385)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument encoded_metadata_document", value=encoded_metadata_document, expected_type=type_hints["encoded_metadata_document"])
            check_type(argname="argument entity_id", value=entity_id, expected_type=type_hints["entity_id"])
            check_type(argname="argument login_url", value=login_url, expected_type=type_hints["login_url"])
            check_type(argname="argument sso_status", value=sso_status, expected_type=type_hints["sso_status"])
            check_type(argname="argument want_request_signed", value=want_request_signed, expected_type=type_hints["want_request_signed"])
            check_type(argname="argument x509_certificate", value=x509_certificate, expected_type=type_hints["x509_certificate"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
        }
        if encoded_metadata_document is not None:
            self._values["encoded_metadata_document"] = encoded_metadata_document
        if entity_id is not None:
            self._values["entity_id"] = entity_id
        if login_url is not None:
            self._values["login_url"] = login_url
        if sso_status is not None:
            self._values["sso_status"] = sso_status
        if want_request_signed is not None:
            self._values["want_request_signed"] = want_request_signed
        if x509_certificate is not None:
            self._values["x509_certificate"] = x509_certificate

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def encoded_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encodedMetadataDocument: The metadata file of the IdP.

        The value of this parameter is Base64-encoded.
        The file is provided by the IdP that supports SAML 2.0.
        '''
        result = self._values.get("encoded_metadata_document")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def entity_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property entityId: The entity ID of the IdP.'''
        result = self._values.get("entity_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loginUrl: The logon URL of the IdP.'''
        result = self._values.get("login_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sso_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ssoStatus: The status of SSO logon.

        Valid values:

        - Enabled
        - Disabled (default)
        '''
        result = self._values.get("sso_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def want_request_signed(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests.

        The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:

        - true: yes
        - false: no (default)
        '''
        result = self._values.get("want_request_signed")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def x509_certificate(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.'''
        result = self._values.get("x509_certificate")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SAMLIdentityProviderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISCIMServerCredential)
class SCIMServerCredential(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.SCIMServerCredential",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::SCIMServerCredential``, which is used to create a System for Cross-domain Identity Management (SCIM) credential.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSCIMServerCredential``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SCIMServerCredentialProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3075d9100269965ac874b79c13effa2964afbd1742b3975bfd60187f72278279)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCredentialId")
    def attr_credential_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CredentialId: The ID of the SCIM credential.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCredentialId"))

    @builtins.property
    @jsii.member(jsii_name="attrCredentialSecret")
    def attr_credential_secret(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CredentialSecret: The secret of the SCIM credential.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCredentialSecret"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SCIMServerCredentialProps":
        return typing.cast("SCIMServerCredentialProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f4782b83134649496b0a2cfb4360ad62d459a750a485b37b4523960b1af65f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__020647fbddb368a8e2b8d43cf38d39b907c36826d7e79c4e06ec89317f9338a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26e599073e8c5b360834071b6527ef8437a8a824dfbfa4e2824b4c0ec4a2da23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.SCIMServerCredentialProps",
    jsii_struct_bases=[],
    name_mapping={"directory_id": "directoryId", "status": "status"},
)
class SCIMServerCredentialProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SCIMServerCredential``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential

        :param directory_id: Property directoryId: The ID of the directory.
        :param status: Property status: The new status of the SCIM credential. Valid values: - Enabled: The SCIM credential is enabled. - Disabled: The SCIM credential is disabled. The default value is Enabled.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f83ec1c799b668ee93a9b577a75000717366a39960001248a0ca794808f443d5)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
        }
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The new status of the SCIM credential.

        Valid values:

        - Enabled: The SCIM credential is enabled.
        - Disabled: The SCIM credential is disabled.
          The default value is Enabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SCIMServerCredentialProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISCIMSynchronization)
class SCIMSynchronization(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.SCIMSynchronization",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::SCIMSynchronization``, which is used to enable or disable System for Cross-domain Identity Management (SCIM) synchronization.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSCIMSynchronization``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SCIMSynchronizationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4d950118c506c7a9309a5bd73833ba7f7c867aa05e87988bc9b1937087c19c4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SCIMSynchronizationProps":
        return typing.cast("SCIMSynchronizationProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e55cdefd24bd71aa7dbf527f91e97f4d357c6b3b02a3f244ec7bb9f5b285b330)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5dac9e2e6e6a14eab97b61fca9cb35a7ff9c07fb4e11e1ca883ab51f8a3c0de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60e423bd4942094d9cce89ae56afac5cd1dacaf91fe1c8e625613306c13a37a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.SCIMSynchronizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "scim_synchronization_status": "scimSynchronizationStatus",
    },
)
class SCIMSynchronizationProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scim_synchronization_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SCIMSynchronization``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization

        :param directory_id: Property directoryId: The ID of the directory.
        :param scim_synchronization_status: Property scimSynchronizationStatus: The status of SCIM synchronization. Valid values: - Enabled - Disabled The default value is Enabled.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8edf9d1867cb6cc0f35c43a4f260837039d7a7ae0381d1f28bb26c8c4b7ef03b)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument scim_synchronization_status", value=scim_synchronization_status, expected_type=type_hints["scim_synchronization_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
        }
        if scim_synchronization_status is not None:
            self._values["scim_synchronization_status"] = scim_synchronization_status

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scim_synchronization_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scimSynchronizationStatus: The status of SCIM synchronization.

        Valid values:

        - Enabled
        - Disabled
          The default value is Enabled.
        '''
        result = self._values.get("scim_synchronization_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SCIMSynchronizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUser)
class User(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.User",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::User``, which is used to create a user.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUser``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d15d58b681d7927f5b367138eefe64638b7cef38202bbb4245a1c6350402296)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the user.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProps":
        return typing.cast("UserProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f4314c6a5c61bc8f4388ce4a8f824179862de5e653de17c2b26b54af7226651)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72520692ad1ff0c88742dce5419becbbf5af57f80b415b9a41a6fc45acdefae5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__620d45e4b96359fb658d8d9721e5b85945d89097ee5bbda3ca69b1d40c45ee87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.UserProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "user_name": "userName",
        "description": "description",
        "display_name": "displayName",
        "email": "email",
        "first_name": "firstName",
        "last_name": "lastName",
        "status": "status",
    },
)
class UserProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        first_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        last_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``User``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user

        :param directory_id: Property directoryId: The ID of the directory.
        :param user_name: Property userName: The name of the user. The name must be unique within the directory. The name cannot be changed. The name can contain numbers, letters, and the following special characters: @_-. The name can be up to 64 characters in length.
        :param description: Property description: The description of the user. The description can be up to 1,024 characters in length.
        :param display_name: Property displayName: The display name of the user. The name can be up to 256 characters in length.
        :param email: Property email: The email address of the user. The email address must be unique within the directory. The email address can be up to 128 characters in length.
        :param first_name: Property firstName: The first name of the user. The name can be up to 64 characters in length.
        :param last_name: Property lastName: The last name of the user. The name can be up to 64 characters in length.
        :param status: Property status: The status of the user. Valid values: - Enabled: The logon of the user is enabled. This is the default value. - Disabled: The logon of the user is disabled.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c7c91d9c65a800c03d846c706911a7fa3cab2b7fcb77e6cc76046d367292022)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument first_name", value=first_name, expected_type=type_hints["first_name"])
            check_type(argname="argument last_name", value=last_name, expected_type=type_hints["last_name"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
            "user_name": user_name,
        }
        if description is not None:
            self._values["description"] = description
        if display_name is not None:
            self._values["display_name"] = display_name
        if email is not None:
            self._values["email"] = email
        if first_name is not None:
            self._values["first_name"] = first_name
        if last_name is not None:
            self._values["last_name"] = last_name
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userName: The name of the user.

        The name must be unique within the directory. The name cannot be changed.
        The name can contain numbers, letters, and the following special characters: @_-.
        The name can be up to 64 characters in length.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the user.

        The description can be up to 1,024 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property displayName: The display name of the user.

        The name can be up to 256 characters in length.
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property email: The email address of the user.

        The email address must be unique within the directory.
        The email address can be up to 128 characters in length.
        '''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def first_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firstName: The first name of the user.

        The name can be up to 64 characters in length.
        '''
        result = self._values.get("first_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def last_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lastName: The last name of the user.

        The name can be up to 64 characters in length.
        '''
        result = self._values.get("last_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the user.

        Valid values:

        - Enabled: The logon of the user is enabled. This is the default value.
        - Disabled: The logon of the user is disabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserProvision)
class UserProvision(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.UserProvision",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::UserProvision``, which is used to create a Resource Access Management (RAM) user provisioning.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserProvision``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserProvisionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7d2fc946f66d62f8f2fb357142374b0b0e8501bb2428d70d1261d1aa829e913)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrUserProvisionId")
    def attr_user_provision_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserProvisionId: The ID of the user provisioning.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserProvisionId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProvisionProps":
        return typing.cast("UserProvisionProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bd4d32acc9c4ea3b46253b32cc779a2c868dce21be9140a1e022ec04213a1c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7822427c72f36064b92db61ab4ed911d11f3c7e6e4800f4c819121bd130a860)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c61330caef5e4839c6f6cd15c4b903eb9ddf0c4635764a5a5ea4428341a70d36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.UserProvisionProps",
    jsii_struct_bases=[],
    name_mapping={
        "deletion_strategy": "deletionStrategy",
        "directory_id": "directoryId",
        "duplication_strategy": "duplicationStrategy",
        "principal_id": "principalId",
        "principal_type": "principalType",
        "target_id": "targetId",
        "target_type": "targetType",
        "description": "description",
    },
)
class UserProvisionProps:
    def __init__(
        self,
        *,
        deletion_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        duplication_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``UserProvision``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision

        :param deletion_strategy: Property deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values: - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted. - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
        :param directory_id: Property directoryId: The ID of the directory.
        :param duplication_strategy: Property duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values: - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user. - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
        :param principal_id: Property principalId: The ID of the principal. Valid values: - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********). - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
        :param principal_type: Property principalType: The type of the principal. Valid values: - User: The principal is a cloud SSO user. - Group: The principal is a cloud SSO group.
        :param target_id: Property targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
        :param target_type: Property targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
        :param description: Property description: The description of the user.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb51510d5916f5fe028010f5817cdff646c18f44fbde740d5fb9d7f54f9bd34c)
            check_type(argname="argument deletion_strategy", value=deletion_strategy, expected_type=type_hints["deletion_strategy"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument duplication_strategy", value=duplication_strategy, expected_type=type_hints["duplication_strategy"])
            check_type(argname="argument principal_id", value=principal_id, expected_type=type_hints["principal_id"])
            check_type(argname="argument principal_type", value=principal_type, expected_type=type_hints["principal_type"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "deletion_strategy": deletion_strategy,
            "directory_id": directory_id,
            "duplication_strategy": duplication_strategy,
            "principal_id": principal_id,
            "principal_type": principal_type,
            "target_id": target_id,
            "target_type": target_type,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def deletion_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deletionStrategy: Delete policy.

        The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:

        - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
        - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
        '''
        result = self._values.get("deletion_strategy")
        assert result is not None, "Required property 'deletion_strategy' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def duplication_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property duplicationStrategy: Conflict policy.

        When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:

        - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
        - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
        '''
        result = self._values.get("duplication_strategy")
        assert result is not None, "Required property 'duplication_strategy' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property principalId: The ID of the principal.

        Valid values:

        - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
        - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
        '''
        result = self._values.get("principal_id")
        assert result is not None, "Required property 'principal_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property principalType: The type of the principal.

        Valid values:

        - User: The principal is a cloud SSO user.
        - Group: The principal is a cloud SSO group.
        '''
        result = self._values.get("principal_type")
        assert result is not None, "Required property 'principal_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetId: Target ID for RAM user synchronization.

        Currently, it is the RD account ID.
        '''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetType: Target type for RAM user synchronization.

        Currently, it is RD-Account.
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the user.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserProvisionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserToGroupAddition)
class UserToGroupAddition(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.UserToGroupAddition",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::UserToGroupAddition``, which is used to add a user to a group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserToGroupAddition``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserToGroupAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b562024239f174e52b83ccdea9b15b6d69466f904b17f80eb250031fcc31f23)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserToGroupAdditionProps":
        return typing.cast("UserToGroupAdditionProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57c34216870c304507faa22709874e4a29ae431f5d2ef3508655deb4d5ac488d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__732c93ebe96eddd0d82bccc60f2d0b39b61285df9fd2a8c35dbb44c2b26fd6e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62ab2739a0dabb77788affb8d6e72aa34e4c69fc9c32a1b6729e4dbd9333985a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsso.UserToGroupAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "directory_id": "directoryId",
        "group_id": "groupId",
        "user_id": "userId",
    },
)
class UserToGroupAdditionProps:
    def __init__(
        self,
        *,
        directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``UserToGroupAddition``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition

        :param directory_id: Property directoryId: The ID of the directory.
        :param group_id: Property groupId: The ID of the group.
        :param user_id: Property userId: The ID of the user.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1a0235f09474350125cbb6138c448e63f0ace93b49a9dc8f8fd48a5a2571078)
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "directory_id": directory_id,
            "group_id": group_id,
            "user_id": user_id,
        }

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryId: The ID of the directory.'''
        result = self._values.get("directory_id")
        assert result is not None, "Required property 'directory_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupId: The ID of the group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userId: The ID of the user.'''
        result = self._values.get("user_id")
        assert result is not None, "Required property 'user_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserToGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAccessAssignment)
class AccessAssignment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.AccessAssignment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::AccessAssignment``, which is used to assign access permissions on an account in your resource directory to a user or group by using an access configuration.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccessAssignment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccessAssignmentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7afab2112fb2b7402bf12a21be3d0c8f05741b3537ff2ed09162b8f0743e7ef)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessAssignmentProps:
        return typing.cast(AccessAssignmentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1175defd5ac2bf4a57130fd661b92c5268bbcc6bb62bc19df5ba6c2b5bfc2a15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bb1fcbe1889ae96bf439fa15084fb7d2eb5684326f6575add625d0ef25b9d63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c57cadbea510c734aa23c56f80558730b64b94e3a3a00473981ff24914f65a50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAccessConfiguration)
class AccessConfiguration(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.AccessConfiguration",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::AccessConfiguration``, which is used to create an access configuration.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccessConfiguration``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccessConfigurationProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b02cda9d0b0caf5f127fc7161cd40e0bf72ec13577ca6c81cdf2c2b0e85e5aa)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessConfigurationId")
    def attr_access_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessConfigurationId: The ID of the access configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessConfigurationProps:
        return typing.cast(AccessConfigurationProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f5a9c5bfa5013c8f8c64e8f803a4832350f46e128e705d6902862728e95d0bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5d862df5c465102f9ad4fe53c45f3a9de8ecbb658221ee59aa65c78bc546cd0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__878faeb2d38d67a20812dbbc6c7fae9c5f5d5be7f784c4fb92d6ec66938cdeec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAccessConfigurationProvision)
class AccessConfigurationProvision(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.AccessConfigurationProvision",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::AccessConfigurationProvision``, which is used to provision an access configuration for an account in your resource directory.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccessConfigurationProvision``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccessConfigurationProvisionProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2b719cf99c2aab88e0214ec941c653ec3a836e1d2ab66eddc6198c14b4d1d41)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessConfigurationProvisionProps:
        return typing.cast(AccessConfigurationProvisionProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d152604d2d3061d8e1052ced862b16cc6d00e194e034ddff2502f9907466519c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f299f00524ac88c78cfe5f3c7ceb8c49d9a3e602fd1752e5a13fcc6ed053956)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd9fe5b332a18a5d77360ef69bb39f2ed381de40e62ae3ef4ae6eb5b9cd2b1aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDirectory)
class Directory(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.Directory",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::Directory``, which is used to create a directory.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDirectory``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[DirectoryProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed47046fae3bbf85db7817fe8f0210227fbd741cc63116eccc17f4c2692ec524)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryId")
    def attr_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DirectoryId: The ID of the directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DirectoryProps:
        return typing.cast(DirectoryProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6ce5fef7fb5c42e316c0b611b39ee370d703f740f5939438875f643dd67e1b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad529a10483a1f15004c70632569d5af0194857d318eb85655409cda6d7796ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03d2f631c35786bced7610b1f69a8452c74c1970aff4d343d052766a950e5f07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGroup)
class Group(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsso.Group",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSSO::Group``, which is used to create a group in CloudSSO.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaa07d613cea8d621623b8b5544377e2e01949b2ef3dd43c70d2c13b788ac207)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The ID of the group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GroupProps:
        return typing.cast(GroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63bb60ed125dabf55a975c32c79b139d23698a8b826c3bb058afe272e23ebc52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53b59cd0c02c079f0a7f5f3912dde467566fe43373bbd286202692fa853db0c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ff8765e5399f9b1303741e6200a46d7b984c0a8a848221983aca491c2073b63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AccessAssignment",
    "AccessAssignmentProps",
    "AccessConfiguration",
    "AccessConfigurationProps",
    "AccessConfigurationProvision",
    "AccessConfigurationProvisionProps",
    "Directory",
    "DirectoryProps",
    "Group",
    "GroupProps",
    "IAccessAssignment",
    "IAccessConfiguration",
    "IAccessConfigurationProvision",
    "IDirectory",
    "IGroup",
    "IPermissionPolicyToAccessConfigurationAddition",
    "ISAMLIdentityProvider",
    "ISCIMServerCredential",
    "ISCIMSynchronization",
    "IUser",
    "IUserProvision",
    "IUserToGroupAddition",
    "PermissionPolicyToAccessConfigurationAddition",
    "PermissionPolicyToAccessConfigurationAdditionProps",
    "RosAccessAssignment",
    "RosAccessAssignmentProps",
    "RosAccessConfiguration",
    "RosAccessConfigurationProps",
    "RosAccessConfigurationProvision",
    "RosAccessConfigurationProvisionProps",
    "RosDirectory",
    "RosDirectoryProps",
    "RosGroup",
    "RosGroupProps",
    "RosPermissionPolicyToAccessConfigurationAddition",
    "RosPermissionPolicyToAccessConfigurationAdditionProps",
    "RosSAMLIdentityProvider",
    "RosSAMLIdentityProviderProps",
    "RosSCIMServerCredential",
    "RosSCIMServerCredentialProps",
    "RosSCIMSynchronization",
    "RosSCIMSynchronizationProps",
    "RosUser",
    "RosUserProps",
    "RosUserProvision",
    "RosUserProvisionProps",
    "RosUserToGroupAddition",
    "RosUserToGroupAdditionProps",
    "SAMLIdentityProvider",
    "SAMLIdentityProviderProps",
    "SCIMServerCredential",
    "SCIMServerCredentialProps",
    "SCIMSynchronization",
    "SCIMSynchronizationProps",
    "User",
    "UserProps",
    "UserProvision",
    "UserProvisionProps",
    "UserToGroupAddition",
    "UserToGroupAdditionProps",
]

publication.publish()

def _typecheckingstub__4b2d6665a3d6a152b51621ee05762ebaabb88fbd81d8f753dd1772afea0b9437(
    *,
    access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__462eee573591b6b13c7e51df7f1b33c25a8221af521df04cae4f8d7207246563(
    *,
    access_configuration_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    relay_state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d86405f221086d2c8010e115b015336e78b73aa76c7603021f0b8c4e810e606(
    *,
    access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5fa3e5941ef914b03081c743d8ace77626d1f6dbacd4c7e28ab9230e82dc24d(
    *,
    directory_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e72b524ea54b64084162b9b9f187430cb4b730201150a88eb080aee48c3de856(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa6a60871e9306b28256f71fd47a89f5dd001422f379c0b4c3b0309c7b296a24(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PermissionPolicyToAccessConfigurationAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8284319ba65cd7d504abd1c21d61b85181983db22067473a1707e144564e4f30(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3531bbefaf8b8bb53b796c5eac5f0cb8a5f3569ec8300cc1d687f8d322e2c8e1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8f85fafd2437364445be6070c3e1a2c1ac8686564739a5f6433c21966904c30(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f6a82338940e21a55cdc503f7fe53534fecf2de294f8a978402c54d4ff2b15b(
    *,
    access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    permission_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    permission_policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    inline_policy_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__743acd465c1c3c84b4e45ee1ef8cc5e8274381c9fb862a447abafd35a675ca57(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessAssignmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4e47a86fae52c2c1e8d4755cec85188c3db5536d3c45be3b46f96f54a9f75d5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f370e21d8dfe89d3cf53deb4a276285a24602d9cacf4213adb3ff726e234ba2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa1e8414dddea71ab951a1252b84a67576bd9491569924cfa99846ccef1f09f0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88b955baf9b9af4329a14a8e281b771c1fe141860146ad5a1750a0f3a6b4131f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c9ac460460671866584db769e5f4f5a4f3f839b9ea92a9d4cc6f1fbfa9fa31c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9ee74cd7414fb6866994db6cdfa236c2c79835f16664f0eed6f3efcd481770e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6ed5899bc6d39cb84d7ccacdfa5152ae75a8dd56ed0b8a1457cd5e9405a67e4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__429a8a0203e96ce303c2918dd09e1a47ad6d1640f47b1b9701a02afdbf5947c2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd2d4a63c51dfd49b6cbdd8d58322012554961dd722b9b09a2d50fa85a1413b6(
    *,
    access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c720aa65121e65b10ebc4249c26a25a40f64d3d139eaaac95b275105c8db52b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessConfigurationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2acb49dc24ba546b426520e23f5d1595619b2a300822fb5f33345b34eabf21be(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dff26b22b825c10831a15192be6064de7540edfaadb474837e86eac0454cab1e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c5914647ebf4b0047e73aa93391176e1fd62dee9d661e08a547f4e204bb5b6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3222c00a6c40d0fba5613aef7140927bc405ef1f279ce0121a85d137804271d9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eaecc216f45d50788d2ca4f67f6fbe0e8e021f47fdc8d3d3368229d1eba97ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f234b6034fe52262910bb9ffa08b5cc331364aa284438d0254bc9a15433e983a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06e23a77f41c915d653d5604e985196c0cc564d38a065c7a2760afde6a62fe7c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bae4d898f3a5799724d7655a838e0f6449b251fefd51c076f8aa9060d7288f7(
    *,
    access_configuration_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    relay_state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c82a62e2cc292194c59fdbfeed2b997147043a41f7cbce91b108133a09ab509(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessConfigurationProvisionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38aa088c45f749ba26eef80ab622f60c7a4f51ed4420a8d40613f2048632be3a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e5c3ef098eec0fc66d96097ad8a012096ed22212ba1c23487b24ba3db98a71c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c60de3b9f84f0d9ad9d9dcf5b59c75e385a749af130f7b2767957e9eb105f3c8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58a303699abc28544b31076bd52dbfbff4f0944e0ce74954c4b114b5cb0e055e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8f1e431b947cf965d79cfd7b95a30fefeac1e5587cc45db405e7cf607034311(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e14fa6b1b12cc32c9f2544a653ccb6df7b815a11c3b4e9a5c72f5ea2d107698(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a101ca369ade51389a3696f6cd76760111a262b69f20221f75f059f537625c1(
    *,
    access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb2ed9f99fc7a44ec9f28065b6c4b22834b2d6d0b7074d9991832381f53685dd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDirectoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d161bdc54b4c05c8e15f7aa029e862582a0011319645b76277388fbc6c57a59(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00d22994b555dbb2e6ed595155be9a02adf2b4a5c8a254301c70d8d6e860dfc2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__502acde4d55c7394bd02e8211f8a5eadadf56c58ec9b4e46d63c2313eee21839(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__029975f059106dd47ff3c17dbc45479fbbf103555ac5b78e176576dc1b311367(
    *,
    directory_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4637f07dea16283259cb688c5669725048356160cad248c3a196a233d05c5b0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fccb064478d370e32a2c413cb48a31c00d6892bacf89b24263f14eb0052ddc8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43534d006d4626fb96eec66925c4908a2683173ef20a0f8355d2d013b49d95b0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3783a6036df3997722f627d926afe0553c8a0abcf07be7ced6bba84661785b7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5bed229da7a42baca191ad52b1de3d6ddfdf1b339a43f4e9e41fca3e7e67bf9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7146cfe3f47ecfea63f1ae42e42267dad62af45c6bcab2ae1927a6b606b6c6d9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a200f5a9e4228386b1fc9d5f22bd017eeff6cac1a60c40a927028294615c2e6(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6acc3a96b0a489741c126e57ee03d2a1ce816251dfdd967f90211774dd0f96b7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPermissionPolicyToAccessConfigurationAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8117548807be690d8aaffd67c7b60775747cfaac25ee2e68a45a2dda2ff5cd9b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__398dcdf5235b097b35e5a02cc3fae3bbe9adf9181803277e5cef904d303b7784(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b78b5076e86910f2b86581c073b816dc3a1194fc683ded45c3f9e5cd1fa2038(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37ffc13215b5a5c0d4576ab550818c1bd38d15bd0da2aa3ca4cf4a07dbedf823(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5b70e0761f2093da0cd64193470207efc7142ffea5dd6342d1ab6e18c0c4787(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65f18d591b63fe5bace7e6e8a2bd7bb21a1ca234ef417faaec97ea9d3a35b861(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef575bae615baf9562d3c6d951d1404085e67ffb1aedbc78139e8e2984ed5fb4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e0a0ae40adebe39c2251f832b1abeb80d9f1a716290ebf929bc7c8fa1334b4f(
    *,
    access_configuration_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    permission_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    permission_policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    inline_policy_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03b423c35036708b75f568c6dc6a98bd6060405745508679d303d549968d624b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSAMLIdentityProviderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__245452e5c9ddc59549dfea4f39e3dd6ba6a96e34f5511c44bcb19ac4fbf126d5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a3e9c6cba6e126bda3b8e2b1866204699e30e9f543a7eadbe7a34f199c1f065(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0830069b5857a3888532f2a5da96d3289f5eeb92d81e1660f716ec89582a26f3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0963bb1f3c57c0a3deebeecc50cf9d55b8e67f467e457d4d4266bd73788a0b55(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dce5688fc61a94214d51fe07fc178ff614977c77980dc538cf2b70cd5e52f08a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91334100c4805a2f9c9092dae9e6e5f276a2294e133fedd9aed55f7f80ac9767(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14402630a9814db633c1af948a70632c0a7305ad37c811627c9acee19aa3af2a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__724cb6ac4655fecfe260fa3cb3349ef61221dedf7546945598b58493b4423b71(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa18c5267dd3d892c4718ee600647bd703acce1cc933949422327de7c7a0b404(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbc608a20aa6a7b5df353ff7539c5ed41a0d0ac55041a03035f554cb1371807e(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    encoded_metadata_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    entity_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sso_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    want_request_signed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x509_certificate: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__376c159bf6ad49e45501e7cd0c1041ee9b030b6820e2cbab46741b96c019cd0b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSCIMServerCredentialProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adf58c2423a9915e25dedce80899f66ca3db5e13e48340314c7b133334145829(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63aafd390f3f13f3cb504bbeed099b52bb8e7eccd6ec6b4d52157c1f937cc2f8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20c610ca70b0437b8f8091b3e8e65d3364e16e117840e3bc19de9ab6870bbe63(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0eeed0a13b7bcad714007b8e3d224b0792d71b99dad8089db334c02d0ab2ef2a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc9d0c239f0807e56e790a28d37b1c8d471b1894115837cddf504e6671f4b952(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dea1d5525410f465915ee1294e3eabe4aaaf993ea4d2ca4128d47ae1af0f4ed8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSCIMSynchronizationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acdf7fea7a58250da5227a1d0831ecc2e20bede0df375a3bddc80605ee8db12b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e47f0e308d73f04f7f4ce4a23001ae1b032ceec93f7b2a81fd673380c5bdd55d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__320a3be1c9bfbe3ed90ee94e9747831e8e71c22f20f51c107a7bf87606de9735(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a38c3823d692763b90e65bb65bde2f2dc0ddc29b4051761c9cc9c93aedea99b6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb17a9636de68b4c1604bb35d244424d620cd6c1837bd48f65c625ea2bd48fd6(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scim_synchronization_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6130709dde87bb46eff3dbbff7ac4e9011260f9093872da1cf421887c89a6e61(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7fd49b5affa6dbe4a2e5fb93ed6980be8c9a7906cac4ea6030431d04924b828(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__165df52eff1bba38e55129d3a2b47df83e7faa77d3b09597072996629f955e4b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42c9453bcc7fa6cd0939ca8f656341e8185389c4e771e6c8780c469a291f43fe(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73f2d77e3b5eb966886dcffbc26422a31d41431ccabfed5a6c325ddf7f3fa15a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26d47a969cff2132e9e4c8b0ac7e57ba8c393990133c47fd6f5fa1f1df99576f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26e582a6ccbc02a87d9f5431fc32015531aff4207dc97b511a73b3990c3483d5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a5fabb0c3b382a4599331ca9d0b577d776fb467009da956c19f178a7cf03b47(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdd6a9af5259cb85536037939cfd2c7f6c3fab69a515ee0a92d04bbcad5dcaec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d35c794698c909b814a6c13428c8dc093936166167a4985c62bd1bd7a068d02d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7549094420a78bfd59cdb6ccb3857b34ee1580f9203b7a33dec4c381bd2e7b4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55a45fb52bd1a1ec98cb4ad8a94912db2c8378aa09790f01f77b0b73aded968b(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    first_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    last_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cb5c6a47251d336f919a98ec30315017207c4b26b501ccc83624be8c500f774(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserProvisionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c17c38ea17dda90e7d177c3e568fd8083f522a5a22070cf2d73aad0368ddb65(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44253d86c0f328131a1ad5507967429dd0851b7fe576ab4df37b814d2b6396ca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c07cfb8e4855c53b4d7695c0805b51b64bbf2b0cdc90dd4dcd296ae8a73ce2dd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77dc81ba7f70aeb2bc4108a2b01aafd9f14d13f7b3a13c40b29fef6237e375eb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__839f4d60da69ea055799eed27b2fcf899de6322595635e2209ae3bfa31c11a31(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe3ba7e01648441d8c1b25ac239a3fffed6bdaffa0cdce88ef30050bc5891f97(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cbe967be0df53c6a43c3fb2ca4180eeecbd8575264d55360ca884fc74b7bbf3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c16bf7e71c147bcebac36d94d5e32532a59f1c686f999ce8ee7bc14f8f106b06(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bff98161746854741ed0def6c119313f38ad091ffcdb5ca89c6f333f8825b989(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__284d9f1ff94e2007779e2edc2345b6a0d6557258b97d3709699d99f1e452e414(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8ee42a7dfd4ca66637a037b641b7874bca3eefc0c7583aa70fc7d516f8094ec(
    *,
    deletion_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    duplication_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6821e2312a264cefbdd2b21d26f1308ae4e89877bf3ec3df7fc025b2a9883d1e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserToGroupAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52223e61013ea7ec73e03bf001e0cc36c81536f44e914834182173d445fa5b0f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26598de48fcbbd01a1f58381a14471d39da7b40038ba1185ee2691d7efb77741(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c0be7ad1580bcc4041b13150dd67b1905341aee0e4edf529a7948f4ab5401cf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d73c7712acb8b81ea36f1aa133bfd42448f012674737748d0fb3397dee4db6f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9a75127f51908fe4f057ee885a30aca2acc18788b0edd09e136b9b0ea3f8705(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb0d492cb260f90c88fe84f6ed49ab020c64dedfcd56cfd5f6d111210df04a0b(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ae6fc67b53bcfb2576e8cd0d6f58bd6d822b7d831843e8b8882b6dbed7a3a26(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SAMLIdentityProviderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8115652132cf0dca0e5b2006ddf51fe41d84f52d62936a584afdde879e6cfbbc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d6da0c8db40f4e82f88fd2e3837ae2d55711a0768a0c21badf01e5fe869912b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69989df42cac7612cf5d86fdaea6ee1e17c475eec8de969de2730603595cf5c1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66be9a13075a533b6483716ad0703357604e6a93e258f1eb0f7c71609627b385(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    encoded_metadata_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    entity_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sso_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    want_request_signed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x509_certificate: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3075d9100269965ac874b79c13effa2964afbd1742b3975bfd60187f72278279(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SCIMServerCredentialProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f4782b83134649496b0a2cfb4360ad62d459a750a485b37b4523960b1af65f9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__020647fbddb368a8e2b8d43cf38d39b907c36826d7e79c4e06ec89317f9338a3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26e599073e8c5b360834071b6527ef8437a8a824dfbfa4e2824b4c0ec4a2da23(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f83ec1c799b668ee93a9b577a75000717366a39960001248a0ca794808f443d5(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4d950118c506c7a9309a5bd73833ba7f7c867aa05e87988bc9b1937087c19c4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SCIMSynchronizationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e55cdefd24bd71aa7dbf527f91e97f4d357c6b3b02a3f244ec7bb9f5b285b330(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5dac9e2e6e6a14eab97b61fca9cb35a7ff9c07fb4e11e1ca883ab51f8a3c0de(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60e423bd4942094d9cce89ae56afac5cd1dacaf91fe1c8e625613306c13a37a8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8edf9d1867cb6cc0f35c43a4f260837039d7a7ae0381d1f28bb26c8c4b7ef03b(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scim_synchronization_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d15d58b681d7927f5b367138eefe64638b7cef38202bbb4245a1c6350402296(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f4314c6a5c61bc8f4388ce4a8f824179862de5e653de17c2b26b54af7226651(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72520692ad1ff0c88742dce5419becbbf5af57f80b415b9a41a6fc45acdefae5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__620d45e4b96359fb658d8d9721e5b85945d89097ee5bbda3ca69b1d40c45ee87(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c7c91d9c65a800c03d846c706911a7fa3cab2b7fcb77e6cc76046d367292022(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    first_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    last_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7d2fc946f66d62f8f2fb357142374b0b0e8501bb2428d70d1261d1aa829e913(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserProvisionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bd4d32acc9c4ea3b46253b32cc779a2c868dce21be9140a1e022ec04213a1c6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7822427c72f36064b92db61ab4ed911d11f3c7e6e4800f4c819121bd130a860(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c61330caef5e4839c6f6cd15c4b903eb9ddf0c4635764a5a5ea4428341a70d36(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb51510d5916f5fe028010f5817cdff646c18f44fbde740d5fb9d7f54f9bd34c(
    *,
    deletion_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    duplication_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b562024239f174e52b83ccdea9b15b6d69466f904b17f80eb250031fcc31f23(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserToGroupAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57c34216870c304507faa22709874e4a29ae431f5d2ef3508655deb4d5ac488d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__732c93ebe96eddd0d82bccc60f2d0b39b61285df9fd2a8c35dbb44c2b26fd6e3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62ab2739a0dabb77788affb8d6e72aa34e4c69fc9c32a1b6729e4dbd9333985a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1a0235f09474350125cbb6138c448e63f0ace93b49a9dc8f8fd48a5a2571078(
    *,
    directory_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7afab2112fb2b7402bf12a21be3d0c8f05741b3537ff2ed09162b8f0743e7ef(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessAssignmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1175defd5ac2bf4a57130fd661b92c5268bbcc6bb62bc19df5ba6c2b5bfc2a15(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bb1fcbe1889ae96bf439fa15084fb7d2eb5684326f6575add625d0ef25b9d63(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c57cadbea510c734aa23c56f80558730b64b94e3a3a00473981ff24914f65a50(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b02cda9d0b0caf5f127fc7161cd40e0bf72ec13577ca6c81cdf2c2b0e85e5aa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessConfigurationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f5a9c5bfa5013c8f8c64e8f803a4832350f46e128e705d6902862728e95d0bc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5d862df5c465102f9ad4fe53c45f3a9de8ecbb658221ee59aa65c78bc546cd0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__878faeb2d38d67a20812dbbc6c7fae9c5f5d5be7f784c4fb92d6ec66938cdeec(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2b719cf99c2aab88e0214ec941c653ec3a836e1d2ab66eddc6198c14b4d1d41(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessConfigurationProvisionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d152604d2d3061d8e1052ced862b16cc6d00e194e034ddff2502f9907466519c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f299f00524ac88c78cfe5f3c7ceb8c49d9a3e602fd1752e5a13fcc6ed053956(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd9fe5b332a18a5d77360ef69bb39f2ed381de40e62ae3ef4ae6eb5b9cd2b1aa(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed47046fae3bbf85db7817fe8f0210227fbd741cc63116eccc17f4c2692ec524(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DirectoryProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6ce5fef7fb5c42e316c0b611b39ee370d703f740f5939438875f643dd67e1b8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad529a10483a1f15004c70632569d5af0194857d318eb85655409cda6d7796ca(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03d2f631c35786bced7610b1f69a8452c74c1970aff4d343d052766a950e5f07(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaa07d613cea8d621623b8b5544377e2e01949b2ef3dd43c70d2c13b788ac207(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63bb60ed125dabf55a975c32c79b139d23698a8b826c3bb058afe272e23ebc52(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53b59cd0c02c079f0a7f5f3912dde467566fe43373bbd286202692fa853db0c4(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ff8765e5399f9b1303741e6200a46d7b984c0a8a848221983aca491c2073b63(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
