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


class AccessGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.AccessGroups",
):
    '''A ROS resource type:  ``DATASOURCE::NAS::AccessGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AccessGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::NAS::AccessGroups``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23703588c8bbc957d34ebb4ceae46305c9ddaeb58c92e47e04925d6865aff779)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroupNames")
    def attr_access_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessGroupNames: The list of access group names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroups")
    def attr_access_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessGroups: The list of access groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessGroups"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.datasource.AccessGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"access_group_name": "accessGroupName"},
)
class AccessGroupsProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::NAS::AccessGroups``.

        :param access_group_name: Property accessGroupName: The name of the permission group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9a6328398a694afd70397ebf27ede3f710328614204e7ff85048e38ed918dd6)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if access_group_name is not None:
            self._values["access_group_name"] = access_group_name

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessGroupName: The name of the permission group.'''
        result = self._values.get("access_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FileSystems(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.FileSystems",
):
    '''A ROS resource type:  ``DATASOURCE::NAS::FileSystems``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["FileSystemsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::NAS::FileSystems``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa89f3e654e499a3c61967f2f891672e09f20c495eab3ca0b7854b13f8793de2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemIds")
    def attr_file_system_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemIds: The list of file system IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemIds"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystems")
    def attr_file_systems(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystems: The list of file systems.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystems"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.datasource.FileSystemsProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "file_system_type": "fileSystemType",
    },
)
class FileSystemsProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::NAS::FileSystems``.

        :param file_system_id: Property fileSystemId: The ID of the file system to be created.
        :param file_system_type: Property fileSystemType: File system type. Value: -standard (default): Universal NAS -extreme: extreme NAS -cpfs: file storage CPFS
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02d9d656d272d8032ca9a53a3003b261907c38f4bbd94ff00726201766cde3eb)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if file_system_id is not None:
            self._values["file_system_id"] = file_system_id
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileSystemId: The ID of the file system to be created.'''
        result = self._values.get("file_system_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileSystemType: File system type.

        Value:
        -standard (default): Universal NAS
        -extreme: extreme NAS
        -cpfs: file storage CPFS
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileSystemsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosAccessGroups",
):
    '''A ROS template type:  ``DATASOURCE::NAS::AccessGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::NAS::AccessGroups``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__359e6d6f1b2a4f8e5998bcb3363d99ed32ea2d501719e3eef839463ed5f2a515)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0a0d6dfbd1d98f1462b98c496333ae36a566a5131271810e55c101f662d03649)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroupNames")
    def attr_access_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessGroupNames: The list of access group names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroups")
    def attr_access_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessGroups: The list of access groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__07a1de1ebb42d13ebf32ac3650abf80bf341d0f3ca62f2ffc60203d0b48443e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessGroupName: The name of the permission group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessGroupName"))

    @access_group_name.setter
    def access_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0c7edb27e633590af304ee33668af92989d7836a75feb687b8f65f652fefbbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosAccessGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"access_group_name": "accessGroupName"},
)
class RosAccessGroupsProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::NAS::AccessGroups``.

        :param access_group_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bc2b97fbb138f9e1ac4295b75bb7ca8edbab455f947f0f91c60c5dbfca80e3a)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if access_group_name is not None:
            self._values["access_group_name"] = access_group_name

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessGroupName: The name of the permission group.
        '''
        result = self._values.get("access_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFileSystems(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosFileSystems",
):
    '''A ROS template type:  ``DATASOURCE::NAS::FileSystems``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFileSystemsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::NAS::FileSystems``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4ae03dbe33c59c096f61761e182f8d969e32e19e17ced8f4453653bf58cda3b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__627b9a3b3356fc80e1ac0b96b2839071b540112c3bf6c11a6d411497b245a397)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemIds")
    def attr_file_system_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemIds: The list of file system IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemIds"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystems")
    def attr_file_systems(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystems: The list of file systems.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystems"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7d9878707c7ca6400e64a2a0bb23c81d91559de4af26644ddfc3f9cbbf8c4cbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fileSystemId: The ID of the file system to be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d07d2da56536a5434d3c56ae18f715a142f899cac30a152201fe37e72bf8b3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemType")
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemType: File system type.
        Value:
        -standard (default): Universal NAS
        -extreme: extreme NAS
        -cpfs: file storage CPFS
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileSystemType"))

    @file_system_type.setter
    def file_system_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d41263bd6e2c7c16f4be2a7527c7f54202ec7e6126b7b8a248fd51203f4dc4b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosFileSystemsProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "file_system_type": "fileSystemType",
    },
)
class RosFileSystemsProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::NAS::FileSystems``.

        :param file_system_id: 
        :param file_system_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4116b9311fa4bfd6d4d70b55c4dcdf1ba4fa9f3d3d02a66c55d9b02bd8c063b)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if file_system_id is not None:
            self._values["file_system_id"] = file_system_id
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fileSystemId: The ID of the file system to be created.
        '''
        result = self._values.get("file_system_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemType: File system type.
        Value:
        -standard (default): Universal NAS
        -extreme: extreme NAS
        -cpfs: file storage CPFS
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFileSystemsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZones(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosZones",
):
    '''A ROS template type:  ``DATASOURCE::NAS::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::NAS::Zones``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__777bce6a2be638cc66db186c67ea29a21c02036677640af23ca5851412838060)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c089e84835f3dbf51087038d4489256556a73026faa4dbd1cdeb71b5d078d9b2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneIds: The list of zone IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Zones: The list of zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c1f048a4953d75519d6b05142714df1f472a367385dec19d88cf43cd5b772850)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemType")
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemType: The type of the file system. Default value: all. Valid values:
        standard: General-purpose NAS file system
        extreme: Extreme NAS file system
        cpfs: CPFS file system
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileSystemType"))

    @file_system_type.setter
    def file_system_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74d89a12e7aaf04a5e08a5a61146ab3f478c94d19afde4d6aa5e681272204503)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosZonesProps",
    jsii_struct_bases=[],
    name_mapping={"file_system_type": "fileSystemType"},
)
class RosZonesProps:
    def __init__(
        self,
        *,
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::NAS::Zones``.

        :param file_system_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9c9960b8175c67b4b098906965dd77c08d06dd7c499b9a63228eff7a27f9282)
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemType: The type of the file system. Default value: all. Valid values:
        standard: General-purpose NAS file system
        extreme: Extreme NAS file system
        cpfs: CPFS file system
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Zones(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.Zones",
):
    '''A ROS resource type:  ``DATASOURCE::NAS::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ZonesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::NAS::Zones``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2ac3fd33af35bef3d58c81412c5f673ae14e852c67addc605ea0a4337b88a6b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneIds: The list of zone IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Zones: The list of zones.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.datasource.ZonesProps",
    jsii_struct_bases=[],
    name_mapping={"file_system_type": "fileSystemType"},
)
class ZonesProps:
    def __init__(
        self,
        *,
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::NAS::Zones``.

        :param file_system_type: Property fileSystemType: The type of the file system. Default value: all. Valid values: standard: General-purpose NAS file system extreme: Extreme NAS file system cpfs: CPFS file system
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29bb010ffdb0fce1ece143024708e0bbf3e2e7565f8e526ba8133a062baafaed)
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileSystemType: The type of the file system.

        Default value: all. Valid values:
        standard: General-purpose NAS file system
        extreme: Extreme NAS file system
        cpfs: CPFS file system
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AccessGroups",
    "AccessGroupsProps",
    "FileSystems",
    "FileSystemsProps",
    "RosAccessGroups",
    "RosAccessGroupsProps",
    "RosFileSystems",
    "RosFileSystemsProps",
    "RosZones",
    "RosZonesProps",
    "Zones",
    "ZonesProps",
]

publication.publish()

def _typecheckingstub__23703588c8bbc957d34ebb4ceae46305c9ddaeb58c92e47e04925d6865aff779(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AccessGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9a6328398a694afd70397ebf27ede3f710328614204e7ff85048e38ed918dd6(
    *,
    access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa89f3e654e499a3c61967f2f891672e09f20c495eab3ca0b7854b13f8793de2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[FileSystemsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02d9d656d272d8032ca9a53a3003b261907c38f4bbd94ff00726201766cde3eb(
    *,
    file_system_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__359e6d6f1b2a4f8e5998bcb3363d99ed32ea2d501719e3eef839463ed5f2a515(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a0d6dfbd1d98f1462b98c496333ae36a566a5131271810e55c101f662d03649(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07a1de1ebb42d13ebf32ac3650abf80bf341d0f3ca62f2ffc60203d0b48443e9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0c7edb27e633590af304ee33668af92989d7836a75feb687b8f65f652fefbbb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bc2b97fbb138f9e1ac4295b75bb7ca8edbab455f947f0f91c60c5dbfca80e3a(
    *,
    access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4ae03dbe33c59c096f61761e182f8d969e32e19e17ced8f4453653bf58cda3b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFileSystemsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__627b9a3b3356fc80e1ac0b96b2839071b540112c3bf6c11a6d411497b245a397(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d9878707c7ca6400e64a2a0bb23c81d91559de4af26644ddfc3f9cbbf8c4cbf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d07d2da56536a5434d3c56ae18f715a142f899cac30a152201fe37e72bf8b3f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d41263bd6e2c7c16f4be2a7527c7f54202ec7e6126b7b8a248fd51203f4dc4b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4116b9311fa4bfd6d4d70b55c4dcdf1ba4fa9f3d3d02a66c55d9b02bd8c063b(
    *,
    file_system_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__777bce6a2be638cc66db186c67ea29a21c02036677640af23ca5851412838060(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c089e84835f3dbf51087038d4489256556a73026faa4dbd1cdeb71b5d078d9b2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1f048a4953d75519d6b05142714df1f472a367385dec19d88cf43cd5b772850(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74d89a12e7aaf04a5e08a5a61146ab3f478c94d19afde4d6aa5e681272204503(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9c9960b8175c67b4b098906965dd77c08d06dd7c499b9a63228eff7a27f9282(
    *,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2ac3fd33af35bef3d58c81412c5f673ae14e852c67addc605ea0a4337b88a6b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ZonesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29bb010ffdb0fce1ece143024708e0bbf3e2e7565f8e526ba8133a062baafaed(
    *,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
