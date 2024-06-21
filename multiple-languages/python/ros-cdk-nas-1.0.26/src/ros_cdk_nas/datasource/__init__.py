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
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::NAS::AccessGroups``, which is used to query the details of permission groups.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccessGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AccessGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77d72d7cf544c4dcc732e9ac48b76ad9d0524616924156d1cb4a09c6fa04a5ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fed89aba426781c33e3c32824bcacccd7d493cc0bedee2e82a0c139416f525f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AccessGroupsProps":
        return typing.cast("AccessGroupsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AccessGroupsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be70e24b5bfe254e58b0a5ce0c52a87463b6b6ab7e82cfa75a729e99dd43722c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc620557400d9ffb58c601cff9f3d0c2dc862948d3e5911da7e56ac9aad4d013)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


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
        '''Properties for defining a ``AccessGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups

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


class FileSystem(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.FileSystem",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::NAS::FileSystem``, which is used to query the information about a file system.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFileSystem``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FileSystemProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8756f2eee6ee0bbcad3c342cb839d4a15bee3099c4266fe11e6ee8658b755eee)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: Maximum file system throughput.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Capacity: File system capacity.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: CreateTime.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: File system description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptType")
    def attr_encrypt_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EncryptType: Whether the file system is encrypted.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptType"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiredTime")
    def attr_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExpiredTime: ExpiredTime.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemId: The ID of the file system to be created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemType")
    def attr_file_system_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemType: File system type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemType"))

    @builtins.property
    @jsii.member(jsii_name="attrKmsKeyId")
    def attr_kms_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KmsKeyId: The ID of the KMS key.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKmsKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrLdap")
    def attr_ldap(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ldap: Ldap.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLdap"))

    @builtins.property
    @jsii.member(jsii_name="attrMeteredSize")
    def attr_metered_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MeteredSize: MeteredSize.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMeteredSize"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: ChargeType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProtocolType: File transfer protocol type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolType"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StorageType: Storage type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: Tags.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: The zone ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__864f6b227d139e1ec99be95b7fdab5bfde8b9957114fe2ad8bc8ddb72d238c10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6a8674f9f388b79e3c4649e02ef67a2b11ff7255439d94845bbbeea621f53fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "FileSystemProps":
        return typing.cast("FileSystemProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "FileSystemProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b65be93eed32b43809c32e35a112595a938bb5210797b2af91335747e7dd47f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b527bf1f166bb75b8ef4c84d7c9468c1b9dcaf27f21207dd86c48fa04a801140)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.datasource.FileSystemProps",
    jsii_struct_bases=[],
    name_mapping={"file_system_id": "fileSystemId"},
)
class FileSystemProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``FileSystem``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem

        :param file_system_id: Property fileSystemId: The ID of the file system to be created.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4b3d0afd041344af7c252d68fb89cfff4ffec15c1925c1c41cf5ba8934d6bdb)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
        }

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemId: The ID of the file system to be created.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FileSystems(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.FileSystems",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::NAS::FileSystems``, which is used to query the details of file systems.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFileSystems``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["FileSystemsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed10704e5ef5300f6bfc7b98029a8377c3c6c2310613afe7221bff5b6b908adf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e152f110cfb9cbb2604276f9c18c68a600297717f819ead9e2e9bcf420f8a335)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "FileSystemsProps":
        return typing.cast("FileSystemsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "FileSystemsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7c67310098f4b11cd2ea7aa9412890514ca562445310264846cc1671fbfff00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b0ffdedf918a2dd265f0b43f90292da5ab6c39b5f60ee146847167b3636018b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


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
        '''Properties for defining a ``FileSystems``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems

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
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::NAS::AccessGroups``, which is used to query the details of permission groups.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AccessGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosAccessGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups

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


class RosFileSystem(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosFileSystem",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::NAS::FileSystem``, which is used to query the information about a file system.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``FileSystem`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFileSystemProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__facc330092ed75eb55692a739ff07f46dd6724ce9e854c6047628fd2384b408a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f1b96d2173dd3641e9d7b6e0b989ee3cea9e9f07b6c93ef9dda9c47e1228f3f0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: Maximum file system throughput.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Capacity: File system capacity.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: CreateTime.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: File system description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptType")
    def attr_encrypt_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EncryptType: Whether the file system is encrypted.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptType"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiredTime")
    def attr_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpiredTime: ExpiredTime.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemId: The ID of the file system to be created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemType")
    def attr_file_system_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemType: File system type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemType"))

    @builtins.property
    @jsii.member(jsii_name="attrKmsKeyId")
    def attr_kms_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KmsKeyId: The ID of the KMS key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKmsKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrLdap")
    def attr_ldap(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ldap: Ldap.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLdap"))

    @builtins.property
    @jsii.member(jsii_name="attrMeteredSize")
    def attr_metered_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MeteredSize: MeteredSize.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMeteredSize"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: ChargeType.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProtocolType: File transfer protocol type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolType"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageType: Storage type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: Tags.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The zone ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__91574d8d6a16a4ae4a99a59cd0cc646ab802c1ba821ee3888d6112d707fe3668)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: The ID of the file system to be created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__296ab244d64c0126e7911a27790f7972ffad6e26ebe4b8c0e2e9cef76ef86b0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosFileSystemProps",
    jsii_struct_bases=[],
    name_mapping={"file_system_id": "fileSystemId"},
)
class RosFileSystemProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosFileSystem``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem

        :param file_system_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0e817947e56bf803870a86947d9bbc2dfc5f27af4d0c3c45b31aa7ece7a6053)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
        }

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: The ID of the file system to be created.
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFileSystems(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.datasource.RosFileSystems",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::NAS::FileSystems``, which is used to query the details of file systems.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``FileSystems`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFileSystemsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosFileSystems``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems

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
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::NAS::Zones``, which is used to query zones.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Zones`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosZones``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones

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
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::NAS::Zones``, which is used to query zones.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosZones``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ZonesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d53726a582e0b159f60ac97196e732002e9b60a5982e63e714eddb5122a8a10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6860089d629ea40b0af3b8a9f561e362f93cf3e122c9636703510fd93ba1197b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ZonesProps":
        return typing.cast("ZonesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ZonesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1823b22a7e1d7743aac8b33564f6ff667c03086860c147b4bdeeae241f8c1ca4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98b5f65dea87c3999e63cbf970567e00f1c463676ec80f490f236203987a62e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


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
        '''Properties for defining a ``Zones``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones

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
    "FileSystem",
    "FileSystemProps",
    "FileSystems",
    "FileSystemsProps",
    "RosAccessGroups",
    "RosAccessGroupsProps",
    "RosFileSystem",
    "RosFileSystemProps",
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

def _typecheckingstub__77d72d7cf544c4dcc732e9ac48b76ad9d0524616924156d1cb4a09c6fa04a5ba(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fed89aba426781c33e3c32824bcacccd7d493cc0bedee2e82a0c139416f525f0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be70e24b5bfe254e58b0a5ce0c52a87463b6b6ab7e82cfa75a729e99dd43722c(
    value: AccessGroupsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc620557400d9ffb58c601cff9f3d0c2dc862948d3e5911da7e56ac9aad4d013(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9a6328398a694afd70397ebf27ede3f710328614204e7ff85048e38ed918dd6(
    *,
    access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8756f2eee6ee0bbcad3c342cb839d4a15bee3099c4266fe11e6ee8658b755eee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FileSystemProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__864f6b227d139e1ec99be95b7fdab5bfde8b9957114fe2ad8bc8ddb72d238c10(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6a8674f9f388b79e3c4649e02ef67a2b11ff7255439d94845bbbeea621f53fa(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b65be93eed32b43809c32e35a112595a938bb5210797b2af91335747e7dd47f(
    value: FileSystemProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b527bf1f166bb75b8ef4c84d7c9468c1b9dcaf27f21207dd86c48fa04a801140(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4b3d0afd041344af7c252d68fb89cfff4ffec15c1925c1c41cf5ba8934d6bdb(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__ed10704e5ef5300f6bfc7b98029a8377c3c6c2310613afe7221bff5b6b908adf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e152f110cfb9cbb2604276f9c18c68a600297717f819ead9e2e9bcf420f8a335(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7c67310098f4b11cd2ea7aa9412890514ca562445310264846cc1671fbfff00(
    value: FileSystemsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b0ffdedf918a2dd265f0b43f90292da5ab6c39b5f60ee146847167b3636018b(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__facc330092ed75eb55692a739ff07f46dd6724ce9e854c6047628fd2384b408a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFileSystemProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1b96d2173dd3641e9d7b6e0b989ee3cea9e9f07b6c93ef9dda9c47e1228f3f0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91574d8d6a16a4ae4a99a59cd0cc646ab802c1ba821ee3888d6112d707fe3668(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__296ab244d64c0126e7911a27790f7972ffad6e26ebe4b8c0e2e9cef76ef86b0c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0e817947e56bf803870a86947d9bbc2dfc5f27af4d0c3c45b31aa7ece7a6053(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__8d53726a582e0b159f60ac97196e732002e9b60a5982e63e714eddb5122a8a10(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6860089d629ea40b0af3b8a9f561e362f93cf3e122c9636703510fd93ba1197b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1823b22a7e1d7743aac8b33564f6ff667c03086860c147b4bdeeae241f8c1ca4(
    value: ZonesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98b5f65dea87c3999e63cbf970567e00f1c463676ec80f490f236203987a62e7(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29bb010ffdb0fce1ece143024708e0bbf3e2e7565f8e526ba8133a062baafaed(
    *,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
