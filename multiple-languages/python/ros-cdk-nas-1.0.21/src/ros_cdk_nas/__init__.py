'''
## Aliyun ROS NAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as NAS from '@alicloud/ros-cdk-nas';
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


class AccessGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.AccessGroup",
):
    '''A ROS resource type:  ``ALIYUN::NAS::AccessGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccessGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::AccessGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18f8c298f10dda5f46a5c7a0e038df9f0e230454cb630fd508bd594b6e4da1da)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroupName")
    def attr_access_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessGroupName: Permission group name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessGroupName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.AccessGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "access_group_type": "accessGroupType",
        "description": "description",
        "file_system_type": "fileSystemType",
    },
)
class AccessGroupProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::AccessGroup``.

        :param access_group_name: Property accessGroupName: Permission group name.
        :param access_group_type: Property accessGroupType: Permission group type, including the Vpc and Classic types.
        :param description: Property description: Permission group description. It is the same as the permission group name by default.
        :param file_system_type: Property fileSystemType: File system type. Values: standard (default), extreme
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39b9a144f1df420efd946b760447cdf23ef6e6c6fa4c30ec6ec54674f046df3f)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument access_group_type", value=access_group_type, expected_type=type_hints["access_group_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_name": access_group_name,
            "access_group_type": access_group_type,
        }
        if description is not None:
            self._values["description"] = description
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessGroupName: Permission group name.'''
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessGroupType: Permission group type, including the Vpc and Classic types.'''
        result = self._values.get("access_group_type")
        assert result is not None, "Required property 'access_group_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Permission group description.

        It is the same as the permission group name by default.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileSystemType: File system type.

        Values: standard (default), extreme
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AccessRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.AccessRule",
):
    '''A ROS resource type:  ``ALIYUN::NAS::AccessRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccessRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::AccessRule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e31eaf701123f48de8bfcc3d4279f6fb373a3227869cf26a9a34fcb407aa51f6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessRuleId")
    def attr_access_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessRuleId: Rule serial number.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessRuleId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.AccessRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "file_system_type": "fileSystemType",
        "ipv6_source_cidr_ip": "ipv6SourceCidrIp",
        "priority": "priority",
        "rw_access_type": "rwAccessType",
        "source_cidr_ip": "sourceCidrIp",
        "user_access_type": "userAccessType",
    },
)
class AccessRuleProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_source_cidr_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rw_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_cidr_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::AccessRule``.

        :param access_group_name: Property accessGroupName: Permission group name.
        :param file_system_type: Property fileSystemType: The type of file system. Values: standard: the general NAS extreme: the extreme NAS
        :param ipv6_source_cidr_ip: Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. IP addresses in CIDR format and IPv6 format are supported. Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function. Only VPC private network is supported. IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
        :param priority: Property priority: Priority level. Range: 1-100. Default value: 1
        :param rw_access_type: Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
        :param source_cidr_ip: Property sourceCidrIp: Address or address segment.
        :param user_access_type: Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6b08a221352ddf828597145f5104e395a7ec07a7829c2851cdf48d1ff5b6a0f)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
            check_type(argname="argument ipv6_source_cidr_ip", value=ipv6_source_cidr_ip, expected_type=type_hints["ipv6_source_cidr_ip"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument rw_access_type", value=rw_access_type, expected_type=type_hints["rw_access_type"])
            check_type(argname="argument source_cidr_ip", value=source_cidr_ip, expected_type=type_hints["source_cidr_ip"])
            check_type(argname="argument user_access_type", value=user_access_type, expected_type=type_hints["user_access_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_name": access_group_name,
        }
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type
        if ipv6_source_cidr_ip is not None:
            self._values["ipv6_source_cidr_ip"] = ipv6_source_cidr_ip
        if priority is not None:
            self._values["priority"] = priority
        if rw_access_type is not None:
            self._values["rw_access_type"] = rw_access_type
        if source_cidr_ip is not None:
            self._values["source_cidr_ip"] = source_cidr_ip
        if user_access_type is not None:
            self._values["user_access_type"] = user_access_type

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessGroupName: Permission group name.'''
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileSystemType: The type of file system.

        Values:
        standard: the general NAS
        extreme: the extreme NAS
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_source_cidr_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.

        IP addresses in CIDR format and IPv6 format are supported.
        Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
        Only VPC private network is supported.
        IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
        '''
        result = self._values.get("ipv6_source_cidr_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property priority: Priority level.

        Range: 1-100. Default value: 1
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rw_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.'''
        result = self._values.get("rw_access_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_cidr_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceCidrIp: Address or address segment.'''
        result = self._values.get("source_cidr_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.'''
        result = self._values.get("user_access_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DataFlow(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.DataFlow",
):
    '''A ROS resource type:  ``ALIYUN::NAS::DataFlow``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DataFlowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::DataFlow``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5e70b6fecd551511d1921080e2464dbbb9da08550fbf8a9a3cbc2733b4ed64b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDataFlowId")
    def attr_data_flow_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DataFlowId: Data flow ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemId: File system ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.DataFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "fset_id": "fsetId",
        "source_storage": "sourceStorage",
        "throughput": "throughput",
        "auto_refresh_interval": "autoRefreshInterval",
        "auto_refresh_policy": "autoRefreshPolicy",
        "auto_refreshs": "autoRefreshs",
        "description": "description",
        "source_security_type": "sourceSecurityType",
    },
)
class DataFlowProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        fset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_storage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        throughput: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        auto_refresh_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_refresh_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_refreshs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDataFlow.AutoRefreshsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_security_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::DataFlow``.

        :param file_system_id: Property fileSystemId: File system ID.
        :param fset_id: Property fsetId: Fileset ID.
        :param source_storage: Property sourceStorage: Access path stored at the source.Format: : // . in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region.
        :param throughput: Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value: 600 1200 1500. Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
        :param auto_refresh_interval: Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute. Scope of value: 5 ~ 525600, default value: 10.
        :param auto_refresh_policy: Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy. None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks. Importchanged: The data update at the source automatically imports CPFS.
        :param auto_refreshs: Property autoRefreshs:.
        :param description: Property description: Description of data flow. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        :param source_security_type: Property sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value: No (default value): It means that the source storage does not need to be accessed by safe protection. SSL: Protective access through SSL certificates.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9e168188f0d970a9c342231f51a2739302ab7e0cf9e2a3e1fff344592ed952d)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument fset_id", value=fset_id, expected_type=type_hints["fset_id"])
            check_type(argname="argument source_storage", value=source_storage, expected_type=type_hints["source_storage"])
            check_type(argname="argument throughput", value=throughput, expected_type=type_hints["throughput"])
            check_type(argname="argument auto_refresh_interval", value=auto_refresh_interval, expected_type=type_hints["auto_refresh_interval"])
            check_type(argname="argument auto_refresh_policy", value=auto_refresh_policy, expected_type=type_hints["auto_refresh_policy"])
            check_type(argname="argument auto_refreshs", value=auto_refreshs, expected_type=type_hints["auto_refreshs"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument source_security_type", value=source_security_type, expected_type=type_hints["source_security_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
            "fset_id": fset_id,
            "source_storage": source_storage,
            "throughput": throughput,
        }
        if auto_refresh_interval is not None:
            self._values["auto_refresh_interval"] = auto_refresh_interval
        if auto_refresh_policy is not None:
            self._values["auto_refresh_policy"] = auto_refresh_policy
        if auto_refreshs is not None:
            self._values["auto_refreshs"] = auto_refreshs
        if description is not None:
            self._values["description"] = description
        if source_security_type is not None:
            self._values["source_security_type"] = source_security_type

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemId: File system ID.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def fset_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fsetId: Fileset ID.'''
        result = self._values.get("fset_id")
        assert result is not None, "Required property 'fset_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceStorage: Access path stored at the source.Format: : // . in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region.'''
        result = self._values.get("source_storage")
        assert result is not None, "Required property 'source_storage' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def throughput(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value:  600 1200 1500.

        Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
        '''
        result = self._values.get("throughput")
        assert result is not None, "Required property 'throughput' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_refresh_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.

        If there is data update, start the automatic update task, unit: minute.
        Scope of value: 5 ~ 525600, default value: 10.
        '''
        result = self._values.get("auto_refresh_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_refresh_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.

        None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
        Importchanged: The data update at the source automatically imports CPFS.
        '''
        result = self._values.get("auto_refresh_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_refreshs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDataFlow.AutoRefreshsProperty"]]]]:
        '''Property autoRefreshs:.'''
        result = self._values.get("auto_refreshs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDataFlow.AutoRefreshsProperty"]]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of data flow.

        limit:
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_security_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceSecurityType: The type of safety protection types of the source storage.

        If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
        No (default value): It means that the source storage does not need to be accessed by safe protection.
        SSL: Protective access through SSL certificates.
        '''
        result = self._values.get("source_security_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DataFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FileSystem(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.FileSystem",
):
    '''A ROS resource type:  ``ALIYUN::NAS::FileSystem``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FileSystemProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::FileSystem``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f08e36f508bf6c26be2684e621f4c27b458de129cd7b2ed6334a675f7da67e2d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemId: ID of the file system created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.FileSystemProps",
    jsii_struct_bases=[],
    name_mapping={
        "protocol_type": "protocolType",
        "storage_type": "storageType",
        "bandwidth": "bandwidth",
        "capacity": "capacity",
        "charge_type": "chargeType",
        "deletion_force": "deletionForce",
        "description": "description",
        "duration": "duration",
        "encrypt_type": "encryptType",
        "file_system_type": "fileSystemType",
        "snapshot_id": "snapshotId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class FileSystemProps:
    def __init__(
        self,
        *,
        protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosFileSystem.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::FileSystem``.

        :param protocol_type: Property protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
        :param storage_type: Property storageType: The storage type of the file System. Valid values: Performance、Capacity(Available when the file_system_type is standard) standard、advance(Available when the file_system_type is extreme) advance_100、advance_200(Available when the file_system_type is cpfs)
        :param bandwidth: Property bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
        :param capacity: Property capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
        :param charge_type: Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.
        :param deletion_force: Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
        :param description: Property description: File system description (space characters are not allowed).
        :param duration: Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription. When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        :param encrypt_type: Property encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values: 0: specifies that no encryption is applied to data on the file system. 1: specifies that encryption is applied to data on the file system.
        :param file_system_type: Property fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
        :param snapshot_id: Property snapshotId: Snapshot ID.
        :param tags: Property tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: Vpc ID.
        :param v_switch_id: Property vSwitchId: VSwitch ID.
        :param zone_id: Property zoneId: Zone ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b629c1ab030cee3e8346720296fc68af606d8edcd8ca2e6fddb5daf51882ef5)
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument capacity", value=capacity, expected_type=type_hints["capacity"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument encrypt_type", value=encrypt_type, expected_type=type_hints["encrypt_type"])
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "protocol_type": protocol_type,
            "storage_type": storage_type,
        }
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if capacity is not None:
            self._values["capacity"] = capacity
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if description is not None:
            self._values["description"] = description
        if duration is not None:
            self._values["duration"] = duration
        if encrypt_type is not None:
            self._values["encrypt_type"] = encrypt_type
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocolType: Type of protocol used.

        Valid values: NFS, SMB, cpfs.
        '''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storageType: The storage type of the file System.

        Valid values:
        Performance、Capacity(Available when the file_system_type is standard)
        standard、advance(Available when the file_system_type is extreme)
        advance_100、advance_200(Available when the file_system_type is cpfs)
        '''
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidth: Maximum file system throughput, unit is MB/s.

        Required and valid only when FileSystemType=cpfs.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property capacity: File system capacity, the unit is GB.

        Required and valid when FileSystemType=extreme or cpfs.
        '''
        result = self._values.get("capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether delete all mount targets on the file system and then delete file system.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: File system description (space characters are not allowed).'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property duration: The period of subscription in months.

        Required and valid when ChargeType is Subscription.
        When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptType: Specifies whether to encrypt data.

        You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        0: specifies that no encryption is applied to data on the file system.
        1: specifies that encryption is applied to data on the file system.
        '''
        result = self._values.get("encrypt_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileSystemType: File system type.

        Allowed values: standard(default), extreme, cpfs
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snapshotId: Snapshot ID.'''
        result = self._values.get("snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosFileSystem.TagsProperty"]]:
        '''Property tags: Tags to attach to filesystem.

        Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosFileSystem.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: Vpc ID.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: VSwitch ID.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: Zone ID.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Fileset(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.Fileset",
):
    '''A ROS resource type:  ``ALIYUN::NAS::Fileset``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FilesetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::Fileset``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1d717ec7a00a869738ca6b33860bc335263b80fedb8a2fbebb041c6c425a226)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemId: File system ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemPath")
    def attr_file_system_path(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemPath: File system path.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemPath"))

    @builtins.property
    @jsii.member(jsii_name="attrFsetId")
    def attr_fset_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FsetId: Fileset ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFsetId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.FilesetProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "file_system_path": "fileSystemPath",
        "description": "description",
    },
)
class FilesetProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::Fileset``.

        :param file_system_id: Property fileSystemId: File system ID.
        :param file_system_path: Property fileSystemPath: The absolute path of Fileset to be created. The parent catalog of specified the directory must be a directory in the file system. The length is 2 to 1024 characters. Specify the directory must start with positive (/).
        :param description: Property description: Fileset description information. The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__368024a96739c25073aecc43ab390a7634b0c29e0b3777a4bf28ff7e12d72449)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument file_system_path", value=file_system_path, expected_type=type_hints["file_system_path"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
            "file_system_path": file_system_path,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemId: File system ID.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemPath: The absolute path of Fileset to be created.

        The parent catalog of specified the directory must be a directory in the file system.
        The length is 2 to 1024 characters.
        Specify the directory must start with positive (/).
        '''
        result = self._values.get("file_system_path")
        assert result is not None, "Required property 'file_system_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Fileset description information.

        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FilesetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MountTarget(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.MountTarget",
):
    '''A ROS resource type:  ``ALIYUN::NAS::MountTarget``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MountTargetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::MountTarget``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1f00245bc88fe214aea0f5fcf1301cb1a9de78f42632f94bc54e1db8cbe6268)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMountTargetDomain")
    def attr_mount_target_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MountTargetDomain: Mount point domain name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMountTargetDomain"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.MountTargetProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "file_system_id": "fileSystemId",
        "network_type": "networkType",
        "enable_ipv6": "enableIpv6",
        "security_group_id": "securityGroupId",
        "status": "status",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class MountTargetProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_ipv6: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::MountTarget``.

        :param access_group_name: Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
        :param file_system_id: Property fileSystemId: File system ID.
        :param network_type: Property networkType: Network type, including Vpc and Classic networks.
        :param enable_ipv6: Property enableIpv6: Whether to create an IPv6 mount point.Value: true: create false (default): do not create Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
        :param security_group_id: Property securityGroupId: Security group Id.
        :param status: Property status: Status, including Active and Inactive.
        :param vpc_id: Property vpcId: VPC network ID.
        :param v_switch_id: Property vSwitchId: VSwitch ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__503cdafbad0e86b5bb0ce1a4866d2baa7806ce596b11b936170eb711c72af6e2)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument enable_ipv6", value=enable_ipv6, expected_type=type_hints["enable_ipv6"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_name": access_group_name,
            "file_system_id": file_system_id,
            "network_type": network_type,
        }
        if enable_ipv6 is not None:
            self._values["enable_ipv6"] = enable_ipv6
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if status is not None:
            self._values["status"] = status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessGroupName: Permission group name.

        Default to DEFAULT_VPC_GROUP_NAME.
        '''
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemId: File system ID.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property networkType: Network type, including Vpc and Classic networks.'''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_ipv6(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableIpv6: Whether to create an IPv6 mount point.Value: true: create false (default): do not create Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.'''
        result = self._values.get("enable_ipv6")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Security group Id.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: Status, including Active and Inactive.'''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: VPC network ID.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: VSwitch ID.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MountTargetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ProtocolMountTarget(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.ProtocolMountTarget",
):
    '''A ROS resource type:  ``ALIYUN::NAS::ProtocolMountTarget``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProtocolMountTargetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::ProtocolMountTarget``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de46cad0bf38a0839321f0ea748d81797eb8445d30e5e451d56dce4e3fe8b886)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrExportId")
    def attr_export_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExportId: The protocol service exports directory ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExportId"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemId: File system ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolMountTargetDomain")
    def attr_protocol_mount_target_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProtocolMountTargetDomain: The protocol mount target domain.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolMountTargetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolServiceId")
    def attr_protocol_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProtocolServiceId: Protocol service ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolServiceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.ProtocolMountTargetProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "protocol_service_id": "protocolServiceId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "access_group_name": "accessGroupName",
        "description": "description",
        "fset_id": "fsetId",
        "path": "path",
    },
)
class ProtocolMountTargetProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol_service_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fset_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::ProtocolMountTarget``.

        :param file_system_id: Property fileSystemId: File system ID.
        :param protocol_service_id: Property protocolServiceId: Agreement service ID.
        :param vpc_id: Property vpcId: Proper network ID exported by the protocol service.
        :param v_switch_id: Property vSwitchId: Switch ID exported by the protocol service.
        :param access_group_name: Property accessGroupName: The name of the permissions group. Default value: DEFAULT_VPC_GROUP_NAME
        :param description: Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        :param fset_id: Property fsetId: Fileset ID needs to be exported. limit: The Fileset must exist. A Fileset allows only one export directory. Fileset and Path can only specify one.
        :param path: Property path: The path of the CPFS directory that needs to be exported. limit: This directory must be existing directory on CPFS. The same directory allows only one export. Fileset and Path can only specify one. Format: The length is 1 to 1024 characters. Use UTF-8 encoding. It must start with the positive oblique line (/), and the root directory must be/.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fedb67fd491330ac792c990726436fcf1a053ab8b8bebf4fd3b6ec19aaca0ee8)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument protocol_service_id", value=protocol_service_id, expected_type=type_hints["protocol_service_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument fset_id", value=fset_id, expected_type=type_hints["fset_id"])
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
            "protocol_service_id": protocol_service_id,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if access_group_name is not None:
            self._values["access_group_name"] = access_group_name
        if description is not None:
            self._values["description"] = description
        if fset_id is not None:
            self._values["fset_id"] = fset_id
        if path is not None:
            self._values["path"] = path

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemId: File system ID.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocolServiceId: Agreement service ID.'''
        result = self._values.get("protocol_service_id")
        assert result is not None, "Required property 'protocol_service_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: Proper network ID exported by the protocol service.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: Switch ID exported by the protocol service.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessGroupName: The name of the permissions group.

        Default value: DEFAULT_VPC_GROUP_NAME
        '''
        result = self._values.get("access_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fset_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fsetId: Fileset ID needs to be exported.

        limit:
        The Fileset must exist.
        A Fileset allows only one export directory.
        Fileset and Path can only specify one.
        '''
        result = self._values.get("fset_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property path: The path of the CPFS directory that needs to be exported.

        limit:
        This directory must be existing directory on CPFS.
        The same directory allows only one export.
        Fileset and Path can only specify one.
        Format:
        The length is 1 to 1024 characters.
        Use UTF-8 encoding.
        It must start with the positive oblique line (/), and the root directory must be/.
        '''
        result = self._values.get("path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProtocolMountTargetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ProtocolService(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.ProtocolService",
):
    '''A ROS resource type:  ``ALIYUN::NAS::ProtocolService``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProtocolServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::ProtocolService``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6ff8d2a67f998d4210b883c834d32c40245ef46cf04cb5df5ed174d5782a7be)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemId: File system ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolServiceId")
    def attr_protocol_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProtocolServiceId: Agreement cluster group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolServiceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.ProtocolServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "protocol_spec": "protocolSpec",
        "protocol_type": "protocolType",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "description": "description",
        "throughput": "throughput",
    },
)
class ProtocolServiceProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        throughput: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::ProtocolService``.

        :param file_system_id: Property fileSystemId: File system ID.
        :param protocol_spec: Property protocolSpec: The spec of protocol service. Default: General. Values: General
        :param protocol_type: Property protocolType: The protocol type of agreement service. Ranges: NFS: Agreement service supports NFS protocol access. The default value: NFS.
        :param vpc_id: Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
        :param v_switch_id: Property vSwitchId: Agreement service vswitchid.
        :param description: Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        :param throughput: Property throughput: The bandwidth of the agreement service. Unit: MB/S.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76fd55713defe391256665574c0d5061435e8faa1a9590b2ec159a6bfe7e8771)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument protocol_spec", value=protocol_spec, expected_type=type_hints["protocol_spec"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument throughput", value=throughput, expected_type=type_hints["throughput"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
            "protocol_spec": protocol_spec,
            "protocol_type": protocol_type,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if description is not None:
            self._values["description"] = description
        if throughput is not None:
            self._values["throughput"] = throughput

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemId: File system ID.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocolSpec: The spec of protocol service.

        Default: General. Values: General
        '''
        result = self._values.get("protocol_spec")
        assert result is not None, "Required property 'protocol_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocolType: The protocol type of agreement service.

        Ranges:
        NFS: Agreement service supports NFS protocol access.
        The default value: NFS.
        '''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: Agreement service vswitchid.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def throughput(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property throughput: The bandwidth of the agreement service.

        Unit: MB/S.
        '''
        result = self._values.get("throughput")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProtocolServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosAccessGroup",
):
    '''A ROS template type:  ``ALIYUN::NAS::AccessGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::AccessGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17d7caa04ec0f534160c6fd724465033498604c0b7b47d8ecbc263bdef694843)
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
            type_hints = typing.get_type_hints(_typecheckingstub__260b3e9a88edd5cc45696f2a9224a6a4163b228af37d761eb0532dec42e67072)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroupName")
    def attr_access_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessGroupName: Permission group name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessGroupName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupName: Permission group name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessGroupName"))

    @access_group_name.setter
    def access_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64de9dc66d110f14e43ff2a310e24c806e063bb9c71345c982e3439dc982e530)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="accessGroupType")
    def access_group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupType: Permission group type, including the Vpc and Classic types
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessGroupType"))

    @access_group_type.setter
    def access_group_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d29204d60677bb489ab4a6497e6a1dd73efb156b6b93ca283541d9f98038e5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__997068ffafd53ab7eca2ba5035ae391dbc877e5de4fb6ca24f26a2fd67ae34bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Permission group description. It is the same as the permission group name by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5038db951ef3e6113822ac996dd6369f1960f22cabedaae3e1ea9275d2e74849)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemType")
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemType: File system type.
        Values: standard (default), extreme
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileSystemType"))

    @file_system_type.setter
    def file_system_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2214608aae77eb4a9aa44cc8a50bf4a0c75116b81bb8bc360db32a3010fff738)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosAccessGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "access_group_type": "accessGroupType",
        "description": "description",
        "file_system_type": "fileSystemType",
    },
)
class RosAccessGroupProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::AccessGroup``.

        :param access_group_name: 
        :param access_group_type: 
        :param description: 
        :param file_system_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__894d86d5092e4136137947715c57558d006d0810f9d2223cd5815028c53323cf)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument access_group_type", value=access_group_type, expected_type=type_hints["access_group_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_name": access_group_name,
            "access_group_type": access_group_type,
        }
        if description is not None:
            self._values["description"] = description
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupName: Permission group name
        '''
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupType: Permission group type, including the Vpc and Classic types
        '''
        result = self._values.get("access_group_type")
        assert result is not None, "Required property 'access_group_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Permission group description. It is the same as the permission group name by default.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemType: File system type.
        Values: standard (default), extreme
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosAccessRule",
):
    '''A ROS template type:  ``ALIYUN::NAS::AccessRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::AccessRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c127ef585711a654fff848ac0fe54d2ed0a46fb75f9e8082c9f31b1a01b3481a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c149c12fbe435f30c97ace841d85d460e72d1b3f9ca9699bcf98789dbee6d02d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessRuleId")
    def attr_access_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessRuleId: Rule serial number
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessRuleId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupName: Permission group name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessGroupName"))

    @access_group_name.setter
    def access_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e5a292a3a40dce89521c918c412d6026a7c0d795da6e4b8c144b4654969a815)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44f29a4bb0ef2642c5d1bf914e831bb9736dc3ac45d6e1effc62c326ec381308)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemType")
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemType: The type of file system. Values:
        standard: the general NAS
        extreme: the extreme NAS
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileSystemType"))

    @file_system_type.setter
    def file_system_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99c7e8731b648ae4d8e93aef822910bb3cf0c398dc1cbfa3548cc1531f6ba3f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemType", value)

    @builtins.property
    @jsii.member(jsii_name="ipv6SourceCidrIp")
    def ipv6_source_cidr_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipv6SourceCidrIp: Source IPv6 CIDR address segment. IP addresses in CIDR format and IPv6 format are supported.
        Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
        Only VPC private network is supported.
        IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipv6SourceCidrIp"))

    @ipv6_source_cidr_ip.setter
    def ipv6_source_cidr_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1897a73cb46242cf34f507a56688529e174a36dc109c5773df12898abe515758)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv6SourceCidrIp", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: priority: Priority level. Range: 1-100. Default value: 1
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a427490a582a571a18e1b7cb1d5963b24135ce78fc29ec89a2970b9123dfff1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="rwAccessType")
    def rw_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rwAccessType: Read-write permission type: RDWR (default), RDONLY
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rwAccessType"))

    @rw_access_type.setter
    def rw_access_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d425bc1f462fccd1532eac85ce6709d44a2f7aeb36a46ac3b7847c2b786e652b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rwAccessType", value)

    @builtins.property
    @jsii.member(jsii_name="sourceCidrIp")
    def source_cidr_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceCidrIp: Address or address segment
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceCidrIp"))

    @source_cidr_ip.setter
    def source_cidr_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7293e86f1208efaa25433115fbbad7e7956a1cf2be94c226e3f78dd67840d879)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceCidrIp", value)

    @builtins.property
    @jsii.member(jsii_name="userAccessType")
    def user_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userAccessType: User permission type: no_squash (default), root_squash, all_squash
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userAccessType"))

    @user_access_type.setter
    def user_access_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e2306745096dfb9ed3f0bb2ecbc6b5cb5f1f6e8cb5287458ff063301383e740)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userAccessType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosAccessRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "file_system_type": "fileSystemType",
        "ipv6_source_cidr_ip": "ipv6SourceCidrIp",
        "priority": "priority",
        "rw_access_type": "rwAccessType",
        "source_cidr_ip": "sourceCidrIp",
        "user_access_type": "userAccessType",
    },
)
class RosAccessRuleProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_source_cidr_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rw_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_cidr_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::AccessRule``.

        :param access_group_name: 
        :param file_system_type: 
        :param ipv6_source_cidr_ip: 
        :param priority: 
        :param rw_access_type: 
        :param source_cidr_ip: 
        :param user_access_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__168086a55681ea64a5e0c16598b5bb0e13ffacecb5e3e64c6629d01eb622ca0f)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
            check_type(argname="argument ipv6_source_cidr_ip", value=ipv6_source_cidr_ip, expected_type=type_hints["ipv6_source_cidr_ip"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument rw_access_type", value=rw_access_type, expected_type=type_hints["rw_access_type"])
            check_type(argname="argument source_cidr_ip", value=source_cidr_ip, expected_type=type_hints["source_cidr_ip"])
            check_type(argname="argument user_access_type", value=user_access_type, expected_type=type_hints["user_access_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_name": access_group_name,
        }
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type
        if ipv6_source_cidr_ip is not None:
            self._values["ipv6_source_cidr_ip"] = ipv6_source_cidr_ip
        if priority is not None:
            self._values["priority"] = priority
        if rw_access_type is not None:
            self._values["rw_access_type"] = rw_access_type
        if source_cidr_ip is not None:
            self._values["source_cidr_ip"] = source_cidr_ip
        if user_access_type is not None:
            self._values["user_access_type"] = user_access_type

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupName: Permission group name
        '''
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemType: The type of file system. Values:
        standard: the general NAS
        extreme: the extreme NAS
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_source_cidr_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipv6SourceCidrIp: Source IPv6 CIDR address segment. IP addresses in CIDR format and IPv6 format are supported.
        Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
        Only VPC private network is supported.
        IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
        '''
        result = self._values.get("ipv6_source_cidr_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: priority: Priority level. Range: 1-100. Default value: 1
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rw_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rwAccessType: Read-write permission type: RDWR (default), RDONLY
        '''
        result = self._values.get("rw_access_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_cidr_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceCidrIp: Address or address segment
        '''
        result = self._values.get("source_cidr_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userAccessType: User permission type: no_squash (default), root_squash, all_squash
        '''
        result = self._values.get("user_access_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDataFlow(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosDataFlow",
):
    '''A ROS template type:  ``ALIYUN::NAS::DataFlow``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDataFlowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::DataFlow``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86db75dbc818cc45f7a30541573d7761bcea29d2107bb458416ec06c025dc8ab)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0e1f31fac01da09b536dc10d970b3becc86216ec8b499eef3370e1034980b917)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDataFlowId")
    def attr_data_flow_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DataFlowId: Data flow ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemId: File system ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a0f4557a2b8d5afa65362b7c158a88a22684e46cfde4492fc46df5f0be938330)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00dd7850eae7be3c8669a88403300be5eaabe4a57bbae57d8832a5a8bd89bea3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="fsetId")
    def fset_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fsetId: Fileset ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fsetId"))

    @fset_id.setter
    def fset_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39c355c7132cad9a6407a1e316dbc472c4e88bee1d2a1e6ee29fededdf98a131)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fsetId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceStorage")
    def source_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceStorage: Access path stored at the source.Format: : // .
        in:
        Storage Type: Currently only supports OSS.
        PATH: OSS's bucket name.Limit the following.
        Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number.
        The length is 8 ~ 128 English characters.
        Use UTF-8 encoding.
        Can't start with http: // and https: //.
        Explain that the OSS BUCKET must be the bucket that exists in the region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceStorage"))

    @source_storage.setter
    def source_storage(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c74f488186bf7dc01c95cdbe314ca14fdb069b4ab23e5bedcde5463334de0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceStorage", value)

    @builtins.property
    @jsii.member(jsii_name="throughput")
    def throughput(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s.
        Value:
        600
        1200
        1500

        Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "throughput"))

    @throughput.setter
    def throughput(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7de8a6fca7223853104406b64fdead80449f5afe372c73739a1cd8295fc9df59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "throughput", value)

    @builtins.property
    @jsii.member(jsii_name="autoRefreshInterval")
    def auto_refresh_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
        Scope of value: 5 ~ 525600, default value: 10.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRefreshInterval"))

    @auto_refresh_interval.setter
    def auto_refresh_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b27b3a427efa9dc29327d9b6a41d39f76894946cd71254ce6772964aa0688e21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRefreshInterval", value)

    @builtins.property
    @jsii.member(jsii_name="autoRefreshPolicy")
    def auto_refresh_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
        None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
        Importchanged: The data update at the source automatically imports CPFS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRefreshPolicy"))

    @auto_refresh_policy.setter
    def auto_refresh_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdb38926341d3d711fabac1a319abe5ee01602943a02b8d60e5766104dd3adf7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRefreshPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="autoRefreshs")
    def auto_refreshs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDataFlow.AutoRefreshsProperty"]]]]:
        '''
        :Property: autoRefreshs:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDataFlow.AutoRefreshsProperty"]]]], jsii.get(self, "autoRefreshs"))

    @auto_refreshs.setter
    def auto_refreshs(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDataFlow.AutoRefreshsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afd0b11c25b34b04165b4b17341da571c75c63388bc8eac53b7b2ad01c24d587)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRefreshs", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Description of data flow.
        limit:
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c570b60a7acacafc49e043aa92b2ad5944e22ad576830748c8518454c1665622)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="sourceSecurityType")
    def source_security_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
        No (default value): It means that the source storage does not need to be accessed by safe protection.
        SSL: Protective access through SSL certificates.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceSecurityType"))

    @source_security_type.setter
    def source_security_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d5346b37986c85ca586f8de228a10264d859971b34be199512c897daed62387)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceSecurityType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty",
        jsii_struct_bases=[],
        name_mapping={"refresh_path": "refreshPath"},
    )
    class AutoRefreshsProperty:
        def __init__(
            self,
            *,
            refresh_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param refresh_path: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d4e0677af98c37d7a598fe09b07d89bc6e1f470aeb2033a36ce2a9a33bde5d17)
                check_type(argname="argument refresh_path", value=refresh_path, expected_type=type_hints["refresh_path"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "refresh_path": refresh_path,
            }

        @builtins.property
        def refresh_path(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            refreshPath: Automatic update directory, data modification incident stored at the CPFS registration source end, check whether the source data in the directory is updated and automatically imported the updated data.
            The default is empty. Any data update stored at the source will not automatically import the CPFS. You need to import and update through manual tasks.
            limit:
            The length is 2 to 1024 characters.
            Use UTF-8 encoding.
            It must start with a positive oblique line (/).
            This directory must be existing directory on CPFS and must be located in the Fileset directory that flows in the data.
            '''
            result = self._values.get("refresh_path")
            assert result is not None, "Required property 'refresh_path' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AutoRefreshsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosDataFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "fset_id": "fsetId",
        "source_storage": "sourceStorage",
        "throughput": "throughput",
        "auto_refresh_interval": "autoRefreshInterval",
        "auto_refresh_policy": "autoRefreshPolicy",
        "auto_refreshs": "autoRefreshs",
        "description": "description",
        "source_security_type": "sourceSecurityType",
    },
)
class RosDataFlowProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        fset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_storage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        throughput: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        auto_refresh_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_refresh_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_refreshs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDataFlow.AutoRefreshsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_security_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::DataFlow``.

        :param file_system_id: 
        :param fset_id: 
        :param source_storage: 
        :param throughput: 
        :param auto_refresh_interval: 
        :param auto_refresh_policy: 
        :param auto_refreshs: 
        :param description: 
        :param source_security_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3003cffe28660bb9388dcaf896e791ba8082dfd544c4fbedef9ef50c05575f55)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument fset_id", value=fset_id, expected_type=type_hints["fset_id"])
            check_type(argname="argument source_storage", value=source_storage, expected_type=type_hints["source_storage"])
            check_type(argname="argument throughput", value=throughput, expected_type=type_hints["throughput"])
            check_type(argname="argument auto_refresh_interval", value=auto_refresh_interval, expected_type=type_hints["auto_refresh_interval"])
            check_type(argname="argument auto_refresh_policy", value=auto_refresh_policy, expected_type=type_hints["auto_refresh_policy"])
            check_type(argname="argument auto_refreshs", value=auto_refreshs, expected_type=type_hints["auto_refreshs"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument source_security_type", value=source_security_type, expected_type=type_hints["source_security_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
            "fset_id": fset_id,
            "source_storage": source_storage,
            "throughput": throughput,
        }
        if auto_refresh_interval is not None:
            self._values["auto_refresh_interval"] = auto_refresh_interval
        if auto_refresh_policy is not None:
            self._values["auto_refresh_policy"] = auto_refresh_policy
        if auto_refreshs is not None:
            self._values["auto_refreshs"] = auto_refreshs
        if description is not None:
            self._values["description"] = description
        if source_security_type is not None:
            self._values["source_security_type"] = source_security_type

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID.
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def fset_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fsetId: Fileset ID.
        '''
        result = self._values.get("fset_id")
        assert result is not None, "Required property 'fset_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceStorage: Access path stored at the source.Format: : // .
        in:
        Storage Type: Currently only supports OSS.
        PATH: OSS's bucket name.Limit the following.
        Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number.
        The length is 8 ~ 128 English characters.
        Use UTF-8 encoding.
        Can't start with http: // and https: //.
        Explain that the OSS BUCKET must be the bucket that exists in the region.
        '''
        result = self._values.get("source_storage")
        assert result is not None, "Required property 'source_storage' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def throughput(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s.
        Value:
        600
        1200
        1500

        Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
        '''
        result = self._values.get("throughput")
        assert result is not None, "Required property 'throughput' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_refresh_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
        Scope of value: 5 ~ 525600, default value: 10.
        '''
        result = self._values.get("auto_refresh_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_refresh_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
        None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
        Importchanged: The data update at the source automatically imports CPFS.
        '''
        result = self._values.get("auto_refresh_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_refreshs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDataFlow.AutoRefreshsProperty]]]]:
        '''
        :Property: autoRefreshs:
        '''
        result = self._values.get("auto_refreshs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDataFlow.AutoRefreshsProperty]]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Description of data flow.
        limit:
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_security_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
        No (default value): It means that the source storage does not need to be accessed by safe protection.
        SSL: Protective access through SSL certificates.
        '''
        result = self._values.get("source_security_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDataFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFileSystem(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosFileSystem",
):
    '''A ROS template type:  ``ALIYUN::NAS::FileSystem``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFileSystemProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::FileSystem``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b618ca4066169ac4c43de01db915fe3acfb35495d4f913e2f9c4505da185adb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6331cd590d51f5392a263500d440539ca7ce5e155b621832258560e912ce6523)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemId: ID of the file system created
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__491659fa974dcf8a9876b7ad0f4641e1ab52cef703b04ff77166a4c74546b475)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="protocolType")
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__986fb8c0115ba9fa3cdb689c121ac0c81eacc8f5fd3ed65cdb0d18c7dea46957)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolType", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        storageType: The storage type of the file System.
        Valid values:
        Performance、Capacity(Available when the file_system_type is standard)
        standard、advance(Available when the file_system_type is extreme)
        advance_100、advance_200(Available when the file_system_type is cpfs)
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__079b90dc1c3e873a456e1d10b1a17901b9485925812f4d3dcea11f976663bd41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acffeb47fb434a5da100ad39570bc5d470c4938aabf9f9b66690dd1f93ac43e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="capacity")
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "capacity"))

    @capacity.setter
    def capacity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adefa2636c52a5fb546682ec9dbf959cc1a49ed51d2258a47021bdb9a6656139)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "capacity", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: Type of payment:
        PayAsYouGo (pay as you go)
        Subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3afa4ccea73d7e8644d9a82f6234960f6be627887ee5f75455a00f213dcc4b01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9a3eb4a8dd889cc13fc33ea001c63869fbff90252bbf24a638accbabbc41b83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: File system description (space characters are not allowed)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__311911fbadef1a3e8d871675a924e86a3034e48dc5db94d0005fc0ce74f093cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
        When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8898fabcadd84f065f2c2de27986ffbefa5c0e6816249c0bea79947bd06234f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="encryptType")
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        0: specifies that no encryption is applied to data on the file system.
        1: specifies that encryption is applied to data on the file system.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptType"))

    @encrypt_type.setter
    def encrypt_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__375a0a1c36f743eb876e70d21c48c26300326839559ce27c03d7241f4e83ecc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptType", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemType")
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileSystemType"))

    @file_system_type.setter
    def file_system_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f25766e5a3e80cb75ddedd7e5fb5052a6db839e86151289740b15644d0eeed0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemType", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotId: Snapshot ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snapshotId"))

    @snapshot_id.setter
    def snapshot_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8f56a7407cebef62811cf4cfaa5954ef8b80c008bfb7e2533b3623b158a8374)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosFileSystem.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosFileSystem.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosFileSystem.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d68fcebb4464351798b50f8fff31aeaf57b93373be3fd4b10b7e548aead029a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: Vpc ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e31c7764e731169d4c0c4f713e70587525f88df97cb2be7eb2ae7038b1508e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa65219beeec7e8e60ef1f7903c41cc31a36cb5a610531d98ab298a267399c5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: Zone ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a100f82d73a735a0a2baacb79fe8304b52cd8fa91a4b14893364a5c5cf13b7dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nas.RosFileSystem.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__e81fe819d38816de57f81e94c8fb72af74e798fc88b2c5308bac62522317e6b8)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosFileSystemProps",
    jsii_struct_bases=[],
    name_mapping={
        "protocol_type": "protocolType",
        "storage_type": "storageType",
        "bandwidth": "bandwidth",
        "capacity": "capacity",
        "charge_type": "chargeType",
        "deletion_force": "deletionForce",
        "description": "description",
        "duration": "duration",
        "encrypt_type": "encryptType",
        "file_system_type": "fileSystemType",
        "snapshot_id": "snapshotId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosFileSystemProps:
    def __init__(
        self,
        *,
        protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosFileSystem.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::FileSystem``.

        :param protocol_type: 
        :param storage_type: 
        :param bandwidth: 
        :param capacity: 
        :param charge_type: 
        :param deletion_force: 
        :param description: 
        :param duration: 
        :param encrypt_type: 
        :param file_system_type: 
        :param snapshot_id: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca3e192edc6072b9caac2c98038a213c68ab41d46815cf1d4ce5e5cfaba61425)
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument capacity", value=capacity, expected_type=type_hints["capacity"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument encrypt_type", value=encrypt_type, expected_type=type_hints["encrypt_type"])
            check_type(argname="argument file_system_type", value=file_system_type, expected_type=type_hints["file_system_type"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "protocol_type": protocol_type,
            "storage_type": storage_type,
        }
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if capacity is not None:
            self._values["capacity"] = capacity
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if description is not None:
            self._values["description"] = description
        if duration is not None:
            self._values["duration"] = duration
        if encrypt_type is not None:
            self._values["encrypt_type"] = encrypt_type
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
        '''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        storageType: The storage type of the file System.
        Valid values:
        Performance、Capacity(Available when the file_system_type is standard)
        standard、advance(Available when the file_system_type is extreme)
        advance_100、advance_200(Available when the file_system_type is cpfs)
        '''
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
        '''
        result = self._values.get("capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: Type of payment:
        PayAsYouGo (pay as you go)
        Subscription
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: File system description (space characters are not allowed)
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
        When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        0: specifies that no encryption is applied to data on the file system.
        1: specifies that encryption is applied to data on the file system.
        '''
        result = self._values.get("encrypt_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_system_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
        '''
        result = self._values.get("file_system_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotId: Snapshot ID.
        '''
        result = self._values.get("snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosFileSystem.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosFileSystem.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: Vpc ID.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: Zone ID.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFileset(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosFileset",
):
    '''A ROS template type:  ``ALIYUN::NAS::Fileset``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFilesetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::Fileset``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c7c1a8d4c8feb5bbc5fec4db83194243a06c9882e12dbd796fe469e58b70e63)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d2e1eb4ee8d8162a7a1c812e9d514c2b27a447cfda1cbcdfae453bc6c07bb44c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemId: File system ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemPath")
    def attr_file_system_path(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemPath: File system path.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemPath"))

    @builtins.property
    @jsii.member(jsii_name="attrFsetId")
    def attr_fset_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FsetId: Fileset ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFsetId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a9983841a76737ec72af797a6350d987c6f640c1414b32dbebdf0864bf977485)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28e4127e37a1d559225470dcae2f08977f76bc9dacd04269ff9c1bd15f44a25c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemPath")
    def file_system_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        fileSystemPath: The absolute path of Fileset to be created.
        The parent catalog of specified the directory must be a directory in the file system.
        The length is 2 to 1024 characters.
        Specify the directory must start with positive (/).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemPath"))

    @file_system_path.setter
    def file_system_path(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7be1441ea70f9f9e4475ea7ce7c68552d796d480800d07c0f8cf8ca188de0a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemPath", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Fileset description information.
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1dbe557df307980974e51809d20b5028af3e1df92e717ba74f3473589716e226)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosFilesetProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "file_system_path": "fileSystemPath",
        "description": "description",
    },
)
class RosFilesetProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::Fileset``.

        :param file_system_id: 
        :param file_system_path: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e66afd6f275baaa041b5d45940936d8dc4e8b2b85ea480f96e215070d874669e)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument file_system_path", value=file_system_path, expected_type=type_hints["file_system_path"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
            "file_system_path": file_system_path,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID.
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        fileSystemPath: The absolute path of Fileset to be created.
        The parent catalog of specified the directory must be a directory in the file system.
        The length is 2 to 1024 characters.
        Specify the directory must start with positive (/).
        '''
        result = self._values.get("file_system_path")
        assert result is not None, "Required property 'file_system_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Fileset description information.
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFilesetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMountTarget(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosMountTarget",
):
    '''A ROS template type:  ``ALIYUN::NAS::MountTarget``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMountTargetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::MountTarget``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbaa6948b82b45f72b3219341c207fb7b5d2dad32e911f456ccd123c22b30d4d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b4b91938a2fff6d4815d4dc973571dd0e7dfa0f4562f0ef51a1d6f52d91b6a63)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMountTargetDomain")
    def attr_mount_target_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MountTargetDomain: Mount point domain name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMountTargetDomain"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessGroupName"))

    @access_group_name.setter
    def access_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c2d0334c66c9c90b6cc03b0ca5aa26505c7dae7407e4f2a5cfaca712caa1b17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9543207777664059608ba9680f052fd58302a7c8879c2a2e44b5ed5bae6ea9dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__345141c8132d575b934196721039ea9073feda9fe8e43f1fe0d45ca7a25fb449)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: networkType: Network type, including Vpc and Classic networks.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c44f535881b857f02efe1e7dc2af2ade5b0689d87b163f22adcc1e8e30fd75f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="enableIpv6")
    def enable_ipv6(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableIpv6: Whether to create an IPv6 mount point.Value:
        true: create
        false (default): do not create
        Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableIpv6"))

    @enable_ipv6.setter
    def enable_ipv6(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37b834f9a450b53b5421d5d58c0e8db3764a54caf9d1e0a6c9135825ba3bd0a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableIpv6", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security group Id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0a043f8b53444874359daa03208d36c265885f4bca09fd8a82fe534cc2b39b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: Status, including Active and Inactive
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdc45d0bb32ef343c1fa43c8f27e41a7b12c8b3bf2f0184ea7b1b0cbc013bde0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VPC network ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1389b1b8e879e36caa6ded984bf3cbca407845e55edeac4028dc85911132a2e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__553b75b354f1fbfe41ebaa38a9daeea0815c4cd349005f846f293fbccf6e7307)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosMountTargetProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "file_system_id": "fileSystemId",
        "network_type": "networkType",
        "enable_ipv6": "enableIpv6",
        "security_group_id": "securityGroupId",
        "status": "status",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosMountTargetProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_ipv6: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::MountTarget``.

        :param access_group_name: 
        :param file_system_id: 
        :param network_type: 
        :param enable_ipv6: 
        :param security_group_id: 
        :param status: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e50d045eea2d7b9dd1a6c2ecc7d6d9a43201226bb2dac2bf10a55d3d81a5ce0)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument enable_ipv6", value=enable_ipv6, expected_type=type_hints["enable_ipv6"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_name": access_group_name,
            "file_system_id": file_system_id,
            "network_type": network_type,
        }
        if enable_ipv6 is not None:
            self._values["enable_ipv6"] = enable_ipv6
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if status is not None:
            self._values["status"] = status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
        '''
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: networkType: Network type, including Vpc and Classic networks.
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_ipv6(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableIpv6: Whether to create an IPv6 mount point.Value:
        true: create
        false (default): do not create
        Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
        '''
        result = self._values.get("enable_ipv6")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security group Id
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: Status, including Active and Inactive
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VPC network ID
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMountTargetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProtocolMountTarget(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosProtocolMountTarget",
):
    '''A ROS template type:  ``ALIYUN::NAS::ProtocolMountTarget``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProtocolMountTargetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::ProtocolMountTarget``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7181588ce75cc65cf406ca327697d88fa8368a539a5578d79169360c8e665b45)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bb399a5ca06f618f627ac24a1ff0ff779c229d9d6176e933cc94d807dbe49830)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrExportId")
    def attr_export_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExportId: The protocol service exports directory ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExportId"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemId: File system ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolMountTargetDomain")
    def attr_protocol_mount_target_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProtocolMountTargetDomain: The protocol mount target domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolMountTargetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolServiceId")
    def attr_protocol_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProtocolServiceId: Protocol service ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolServiceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0e7ec81276d0ff5cb72f2254a7ede164e8bcd3bf1a6457e5b5c1433b46ad72f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be14e0a0178e89b4d1d61c6e7059f0d39329e8efe0e2465d774388b8a77f4ecb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="protocolServiceId")
    def protocol_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolServiceId: Agreement service ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocolServiceId"))

    @protocol_service_id.setter
    def protocol_service_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1952a48f767f19de886389c10228d801cc201bcfc53a83c34c0dca19635fe3f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolServiceId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: Proper network ID exported by the protocol service.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__598cf922a243c1fb57304c5727156ddee9e093f0dde5c96cfef60412a6bd3d7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: Switch ID exported by the protocol service.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04db921f49b9482adfecce2b478bbfc2a9d67711f06d99ac5feaf1274a711e05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessGroupName: The name of the permissions group.
        Default value: DEFAULT_VPC_GROUP_NAME
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessGroupName"))

    @access_group_name.setter
    def access_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27481f4a06f871e0b9853ea07e7448c5c6f8617a78eaec1de5713f2dc2103cfe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Description of the protocol service to export the directory.The console is displayed as the export directory name.
        limit:
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bbb4bb2289fd51031c1d4ce9906ed5865000b03975fa67872f02cfd6b20b694)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="fsetId")
    def fset_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fsetId: Fileset ID needs to be exported.
        limit:
        The Fileset must exist.
        A Fileset allows only one export directory.
        Fileset and Path can only specify one.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fsetId"))

    @fset_id.setter
    def fset_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9f79402278391f41c4c25db8037b7cfad436808f9d02ffae2ab1d788a6be531)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fsetId", value)

    @builtins.property
    @jsii.member(jsii_name="path")
    def path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        path: The path of the CPFS directory that needs to be exported.
        limit:
        This directory must be existing directory on CPFS.
        The same directory allows only one export.
        Fileset and Path can only specify one.
        Format:
        The length is 1 to 1024 characters.
        Use UTF-8 encoding.
        It must start with the positive oblique line (/), and the root directory must be/.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "path"))

    @path.setter
    def path(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd7bbfd70af43b96f5ebcb46b3ce6cd5f8ff7e2b1a31f5e096b4aabd1072e076)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "path", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosProtocolMountTargetProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "protocol_service_id": "protocolServiceId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "access_group_name": "accessGroupName",
        "description": "description",
        "fset_id": "fsetId",
        "path": "path",
    },
)
class RosProtocolMountTargetProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol_service_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fset_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::ProtocolMountTarget``.

        :param file_system_id: 
        :param protocol_service_id: 
        :param vpc_id: 
        :param v_switch_id: 
        :param access_group_name: 
        :param description: 
        :param fset_id: 
        :param path: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27cb04cb342c4092c8293caf1a2b5904927de7e107334df5c62a920f2f70b7c8)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument protocol_service_id", value=protocol_service_id, expected_type=type_hints["protocol_service_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument fset_id", value=fset_id, expected_type=type_hints["fset_id"])
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
            "protocol_service_id": protocol_service_id,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if access_group_name is not None:
            self._values["access_group_name"] = access_group_name
        if description is not None:
            self._values["description"] = description
        if fset_id is not None:
            self._values["fset_id"] = fset_id
        if path is not None:
            self._values["path"] = path

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID.
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolServiceId: Agreement service ID.
        '''
        result = self._values.get("protocol_service_id")
        assert result is not None, "Required property 'protocol_service_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: Proper network ID exported by the protocol service.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: Switch ID exported by the protocol service.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessGroupName: The name of the permissions group.
        Default value: DEFAULT_VPC_GROUP_NAME
        '''
        result = self._values.get("access_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Description of the protocol service to export the directory.The console is displayed as the export directory name.
        limit:
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fset_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fsetId: Fileset ID needs to be exported.
        limit:
        The Fileset must exist.
        A Fileset allows only one export directory.
        Fileset and Path can only specify one.
        '''
        result = self._values.get("fset_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        path: The path of the CPFS directory that needs to be exported.
        limit:
        This directory must be existing directory on CPFS.
        The same directory allows only one export.
        Fileset and Path can only specify one.
        Format:
        The length is 1 to 1024 characters.
        Use UTF-8 encoding.
        It must start with the positive oblique line (/), and the root directory must be/.
        '''
        result = self._values.get("path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProtocolMountTargetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProtocolService(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosProtocolService",
):
    '''A ROS template type:  ``ALIYUN::NAS::ProtocolService``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProtocolServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NAS::ProtocolService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__359612e2039931811df30746c74c850b1e19b68b10d27c4a9136c9f6106f06c2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e0754340e0cc98a561e71f1f32705a6162e5f041ea29da865ea33e1190289c05)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemId: File system ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolServiceId")
    def attr_protocol_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProtocolServiceId: Agreement cluster group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolServiceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ccc4298a2d30acea3d72c264fc6bf93deffb29f85453c6a9ed02d35c03320f89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9aeee1f203323389fb7dc0a999fb841332e45548fc24932dddf22ec5bb04bcd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="protocolSpec")
    def protocol_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolSpec: The spec of protocol service. Default: General. Values: General
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocolSpec"))

    @protocol_spec.setter
    def protocol_spec(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bd76c4d305655e4f93f3dfe92c522e0b83c0538c5cbac6c2baa4428ce559cc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolSpec", value)

    @builtins.property
    @jsii.member(jsii_name="protocolType")
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocolType: The protocol type of agreement service.
        Ranges:
        NFS: Agreement service supports NFS protocol access.
        The default value: NFS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fcfddb805a743d9fed5fcc0109b0c51cdb3dc79829d857295e727282a479237)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolType", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__215519c0e1f29bbc3265aa826754c3a9dbf673abdc8f930bbe8640b4e283cc92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: Agreement service vswitchid.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f01965448725c7fc785e80ca1ddca654959a26ef8f37b0c242e6a376d116840)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Description of protocol service.The console shows the "protocol service name".
        limit:
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7182e4324c52f0ad444f3a980c95471e16a5f399ae84e4b0025dbcb9e246885)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="throughput")
    def throughput(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        throughput: The bandwidth of the agreement service.
        Unit: MB/S.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "throughput"))

    @throughput.setter
    def throughput(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b45559924e838a0792651613074865198186db2ea118368dbc5199fdbdb32606)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "throughput", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosProtocolServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_system_id": "fileSystemId",
        "protocol_spec": "protocolSpec",
        "protocol_type": "protocolType",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "description": "description",
        "throughput": "throughput",
    },
)
class RosProtocolServiceProps:
    def __init__(
        self,
        *,
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        throughput: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NAS::ProtocolService``.

        :param file_system_id: 
        :param protocol_spec: 
        :param protocol_type: 
        :param vpc_id: 
        :param v_switch_id: 
        :param description: 
        :param throughput: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8014d33a2a0632d0637a246fe46d4ca6d083fbd5a8120a15fac416c89a8e9d2)
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument protocol_spec", value=protocol_spec, expected_type=type_hints["protocol_spec"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument throughput", value=throughput, expected_type=type_hints["throughput"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_system_id": file_system_id,
            "protocol_spec": protocol_spec,
            "protocol_type": protocol_type,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if description is not None:
            self._values["description"] = description
        if throughput is not None:
            self._values["throughput"] = throughput

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: File system ID.
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolSpec: The spec of protocol service. Default: General. Values: General
        '''
        result = self._values.get("protocol_spec")
        assert result is not None, "Required property 'protocol_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocolType: The protocol type of agreement service.
        Ranges:
        NFS: Agreement service supports NFS protocol access.
        The default value: NFS.
        '''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: Agreement service vswitchid.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Description of protocol service.The console shows the "protocol service name".
        limit:
        The length is 2 to 128 English or Chinese characters.
        Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def throughput(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        throughput: The bandwidth of the agreement service.
        Unit: MB/S.
        '''
        result = self._values.get("throughput")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProtocolServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AccessGroup",
    "AccessGroupProps",
    "AccessRule",
    "AccessRuleProps",
    "DataFlow",
    "DataFlowProps",
    "FileSystem",
    "FileSystemProps",
    "Fileset",
    "FilesetProps",
    "MountTarget",
    "MountTargetProps",
    "ProtocolMountTarget",
    "ProtocolMountTargetProps",
    "ProtocolService",
    "ProtocolServiceProps",
    "RosAccessGroup",
    "RosAccessGroupProps",
    "RosAccessRule",
    "RosAccessRuleProps",
    "RosDataFlow",
    "RosDataFlowProps",
    "RosFileSystem",
    "RosFileSystemProps",
    "RosFileset",
    "RosFilesetProps",
    "RosMountTarget",
    "RosMountTargetProps",
    "RosProtocolMountTarget",
    "RosProtocolMountTargetProps",
    "RosProtocolService",
    "RosProtocolServiceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__18f8c298f10dda5f46a5c7a0e038df9f0e230454cb630fd508bd594b6e4da1da(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39b9a144f1df420efd946b760447cdf23ef6e6c6fa4c30ec6ec54674f046df3f(
    *,
    access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e31eaf701123f48de8bfcc3d4279f6fb373a3227869cf26a9a34fcb407aa51f6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6b08a221352ddf828597145f5104e395a7ec07a7829c2851cdf48d1ff5b6a0f(
    *,
    access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_source_cidr_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rw_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_cidr_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5e70b6fecd551511d1921080e2464dbbb9da08550fbf8a9a3cbc2733b4ed64b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DataFlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9e168188f0d970a9c342231f51a2739302ab7e0cf9e2a3e1fff344592ed952d(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_storage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    throughput: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    auto_refresh_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_refresh_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_refreshs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDataFlow.AutoRefreshsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_security_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f08e36f508bf6c26be2684e621f4c27b458de129cd7b2ed6334a675f7da67e2d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FileSystemProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b629c1ab030cee3e8346720296fc68af606d8edcd8ca2e6fddb5daf51882ef5(
    *,
    protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosFileSystem.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1d717ec7a00a869738ca6b33860bc335263b80fedb8a2fbebb041c6c425a226(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FilesetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__368024a96739c25073aecc43ab390a7634b0c29e0b3777a4bf28ff7e12d72449(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1f00245bc88fe214aea0f5fcf1301cb1a9de78f42632f94bc54e1db8cbe6268(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MountTargetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__503cdafbad0e86b5bb0ce1a4866d2baa7806ce596b11b936170eb711c72af6e2(
    *,
    access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_ipv6: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de46cad0bf38a0839321f0ea748d81797eb8445d30e5e451d56dce4e3fe8b886(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProtocolMountTargetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fedb67fd491330ac792c990726436fcf1a053ab8b8bebf4fd3b6ec19aaca0ee8(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol_service_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fset_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6ff8d2a67f998d4210b883c834d32c40245ef46cf04cb5df5ed174d5782a7be(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProtocolServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76fd55713defe391256665574c0d5061435e8faa1a9590b2ec159a6bfe7e8771(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    throughput: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17d7caa04ec0f534160c6fd724465033498604c0b7b47d8ecbc263bdef694843(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__260b3e9a88edd5cc45696f2a9224a6a4163b228af37d761eb0532dec42e67072(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64de9dc66d110f14e43ff2a310e24c806e063bb9c71345c982e3439dc982e530(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d29204d60677bb489ab4a6497e6a1dd73efb156b6b93ca283541d9f98038e5a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__997068ffafd53ab7eca2ba5035ae391dbc877e5de4fb6ca24f26a2fd67ae34bd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5038db951ef3e6113822ac996dd6369f1960f22cabedaae3e1ea9275d2e74849(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2214608aae77eb4a9aa44cc8a50bf4a0c75116b81bb8bc360db32a3010fff738(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__894d86d5092e4136137947715c57558d006d0810f9d2223cd5815028c53323cf(
    *,
    access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c127ef585711a654fff848ac0fe54d2ed0a46fb75f9e8082c9f31b1a01b3481a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c149c12fbe435f30c97ace841d85d460e72d1b3f9ca9699bcf98789dbee6d02d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e5a292a3a40dce89521c918c412d6026a7c0d795da6e4b8c144b4654969a815(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44f29a4bb0ef2642c5d1bf914e831bb9736dc3ac45d6e1effc62c326ec381308(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99c7e8731b648ae4d8e93aef822910bb3cf0c398dc1cbfa3548cc1531f6ba3f6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1897a73cb46242cf34f507a56688529e174a36dc109c5773df12898abe515758(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a427490a582a571a18e1b7cb1d5963b24135ce78fc29ec89a2970b9123dfff1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d425bc1f462fccd1532eac85ce6709d44a2f7aeb36a46ac3b7847c2b786e652b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7293e86f1208efaa25433115fbbad7e7956a1cf2be94c226e3f78dd67840d879(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e2306745096dfb9ed3f0bb2ecbc6b5cb5f1f6e8cb5287458ff063301383e740(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__168086a55681ea64a5e0c16598b5bb0e13ffacecb5e3e64c6629d01eb622ca0f(
    *,
    access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_source_cidr_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rw_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_cidr_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86db75dbc818cc45f7a30541573d7761bcea29d2107bb458416ec06c025dc8ab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDataFlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e1f31fac01da09b536dc10d970b3becc86216ec8b499eef3370e1034980b917(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0f4557a2b8d5afa65362b7c158a88a22684e46cfde4492fc46df5f0be938330(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00dd7850eae7be3c8669a88403300be5eaabe4a57bbae57d8832a5a8bd89bea3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39c355c7132cad9a6407a1e316dbc472c4e88bee1d2a1e6ee29fededdf98a131(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c74f488186bf7dc01c95cdbe314ca14fdb069b4ab23e5bedcde5463334de0f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7de8a6fca7223853104406b64fdead80449f5afe372c73739a1cd8295fc9df59(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b27b3a427efa9dc29327d9b6a41d39f76894946cd71254ce6772964aa0688e21(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdb38926341d3d711fabac1a319abe5ee01602943a02b8d60e5766104dd3adf7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afd0b11c25b34b04165b4b17341da571c75c63388bc8eac53b7b2ad01c24d587(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDataFlow.AutoRefreshsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c570b60a7acacafc49e043aa92b2ad5944e22ad576830748c8518454c1665622(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d5346b37986c85ca586f8de228a10264d859971b34be199512c897daed62387(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4e0677af98c37d7a598fe09b07d89bc6e1f470aeb2033a36ce2a9a33bde5d17(
    *,
    refresh_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3003cffe28660bb9388dcaf896e791ba8082dfd544c4fbedef9ef50c05575f55(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_storage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    throughput: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    auto_refresh_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_refresh_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_refreshs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDataFlow.AutoRefreshsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_security_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b618ca4066169ac4c43de01db915fe3acfb35495d4f913e2f9c4505da185adb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFileSystemProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6331cd590d51f5392a263500d440539ca7ce5e155b621832258560e912ce6523(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__491659fa974dcf8a9876b7ad0f4641e1ab52cef703b04ff77166a4c74546b475(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__986fb8c0115ba9fa3cdb689c121ac0c81eacc8f5fd3ed65cdb0d18c7dea46957(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__079b90dc1c3e873a456e1d10b1a17901b9485925812f4d3dcea11f976663bd41(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acffeb47fb434a5da100ad39570bc5d470c4938aabf9f9b66690dd1f93ac43e0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adefa2636c52a5fb546682ec9dbf959cc1a49ed51d2258a47021bdb9a6656139(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3afa4ccea73d7e8644d9a82f6234960f6be627887ee5f75455a00f213dcc4b01(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9a3eb4a8dd889cc13fc33ea001c63869fbff90252bbf24a638accbabbc41b83(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__311911fbadef1a3e8d871675a924e86a3034e48dc5db94d0005fc0ce74f093cd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8898fabcadd84f065f2c2de27986ffbefa5c0e6816249c0bea79947bd06234f2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__375a0a1c36f743eb876e70d21c48c26300326839559ce27c03d7241f4e83ecc8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f25766e5a3e80cb75ddedd7e5fb5052a6db839e86151289740b15644d0eeed0d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8f56a7407cebef62811cf4cfaa5954ef8b80c008bfb7e2533b3623b158a8374(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d68fcebb4464351798b50f8fff31aeaf57b93373be3fd4b10b7e548aead029a7(
    value: typing.Optional[typing.List[RosFileSystem.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e31c7764e731169d4c0c4f713e70587525f88df97cb2be7eb2ae7038b1508e3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa65219beeec7e8e60ef1f7903c41cc31a36cb5a610531d98ab298a267399c5b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a100f82d73a735a0a2baacb79fe8304b52cd8fa91a4b14893364a5c5cf13b7dc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e81fe819d38816de57f81e94c8fb72af74e798fc88b2c5308bac62522317e6b8(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca3e192edc6072b9caac2c98038a213c68ab41d46815cf1d4ce5e5cfaba61425(
    *,
    protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_system_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosFileSystem.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c7c1a8d4c8feb5bbc5fec4db83194243a06c9882e12dbd796fe469e58b70e63(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFilesetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2e1eb4ee8d8162a7a1c812e9d514c2b27a447cfda1cbcdfae453bc6c07bb44c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9983841a76737ec72af797a6350d987c6f640c1414b32dbebdf0864bf977485(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28e4127e37a1d559225470dcae2f08977f76bc9dacd04269ff9c1bd15f44a25c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7be1441ea70f9f9e4475ea7ce7c68552d796d480800d07c0f8cf8ca188de0a7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1dbe557df307980974e51809d20b5028af3e1df92e717ba74f3473589716e226(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e66afd6f275baaa041b5d45940936d8dc4e8b2b85ea480f96e215070d874669e(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbaa6948b82b45f72b3219341c207fb7b5d2dad32e911f456ccd123c22b30d4d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMountTargetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4b91938a2fff6d4815d4dc973571dd0e7dfa0f4562f0ef51a1d6f52d91b6a63(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c2d0334c66c9c90b6cc03b0ca5aa26505c7dae7407e4f2a5cfaca712caa1b17(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9543207777664059608ba9680f052fd58302a7c8879c2a2e44b5ed5bae6ea9dd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__345141c8132d575b934196721039ea9073feda9fe8e43f1fe0d45ca7a25fb449(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c44f535881b857f02efe1e7dc2af2ade5b0689d87b163f22adcc1e8e30fd75f7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37b834f9a450b53b5421d5d58c0e8db3764a54caf9d1e0a6c9135825ba3bd0a5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0a043f8b53444874359daa03208d36c265885f4bca09fd8a82fe534cc2b39b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdc45d0bb32ef343c1fa43c8f27e41a7b12c8b3bf2f0184ea7b1b0cbc013bde0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1389b1b8e879e36caa6ded984bf3cbca407845e55edeac4028dc85911132a2e4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__553b75b354f1fbfe41ebaa38a9daeea0815c4cd349005f846f293fbccf6e7307(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e50d045eea2d7b9dd1a6c2ecc7d6d9a43201226bb2dac2bf10a55d3d81a5ce0(
    *,
    access_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_ipv6: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7181588ce75cc65cf406ca327697d88fa8368a539a5578d79169360c8e665b45(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProtocolMountTargetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb399a5ca06f618f627ac24a1ff0ff779c229d9d6176e933cc94d807dbe49830(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e7ec81276d0ff5cb72f2254a7ede164e8bcd3bf1a6457e5b5c1433b46ad72f5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be14e0a0178e89b4d1d61c6e7059f0d39329e8efe0e2465d774388b8a77f4ecb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1952a48f767f19de886389c10228d801cc201bcfc53a83c34c0dca19635fe3f4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__598cf922a243c1fb57304c5727156ddee9e093f0dde5c96cfef60412a6bd3d7a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04db921f49b9482adfecce2b478bbfc2a9d67711f06d99ac5feaf1274a711e05(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27481f4a06f871e0b9853ea07e7448c5c6f8617a78eaec1de5713f2dc2103cfe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bbb4bb2289fd51031c1d4ce9906ed5865000b03975fa67872f02cfd6b20b694(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9f79402278391f41c4c25db8037b7cfad436808f9d02ffae2ab1d788a6be531(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd7bbfd70af43b96f5ebcb46b3ce6cd5f8ff7e2b1a31f5e096b4aabd1072e076(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27cb04cb342c4092c8293caf1a2b5904927de7e107334df5c62a920f2f70b7c8(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol_service_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fset_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__359612e2039931811df30746c74c850b1e19b68b10d27c4a9136c9f6106f06c2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProtocolServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0754340e0cc98a561e71f1f32705a6162e5f041ea29da865ea33e1190289c05(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccc4298a2d30acea3d72c264fc6bf93deffb29f85453c6a9ed02d35c03320f89(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9aeee1f203323389fb7dc0a999fb841332e45548fc24932dddf22ec5bb04bcd1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bd76c4d305655e4f93f3dfe92c522e0b83c0538c5cbac6c2baa4428ce559cc6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fcfddb805a743d9fed5fcc0109b0c51cdb3dc79829d857295e727282a479237(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__215519c0e1f29bbc3265aa826754c3a9dbf673abdc8f930bbe8640b4e283cc92(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f01965448725c7fc785e80ca1ddca654959a26ef8f37b0c242e6a376d116840(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7182e4324c52f0ad444f3a980c95471e16a5f399ae84e4b0025dbcb9e246885(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b45559924e838a0792651613074865198186db2ea118368dbc5199fdbdb32606(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8014d33a2a0632d0637a246fe46d4ca6d083fbd5a8120a15fac416c89a8e9d2(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    throughput: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
