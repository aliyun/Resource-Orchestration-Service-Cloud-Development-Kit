'''
## Aliyun ROS CLOUDSTORAGEGATEWAY Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CLOUDSTORAGEGATEWAY from '@alicloud/ros-cdk-cloudstoragegateway';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudstoragegateway.IStorageBundle")
class IStorageBundle(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``StorageBundle``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create a gateway cluster timestamp.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Gateway cluster description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageBundleId")
    def attr_storage_bundle_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageBundleId: The ID of the gateway cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageBundleName")
    def attr_storage_bundle_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageBundleName: Gateway cluster name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StorageBundleProps":
        ...


class _IStorageBundleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``StorageBundle``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudstoragegateway.IStorageBundle"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create a gateway cluster timestamp.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Gateway cluster description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageBundleId")
    def attr_storage_bundle_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageBundleId: The ID of the gateway cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageBundleId"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageBundleName")
    def attr_storage_bundle_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageBundleName: Gateway cluster name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageBundleName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StorageBundleProps":
        return typing.cast("StorageBundleProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IStorageBundle).__jsii_proxy_class__ = lambda : _IStorageBundleProxy


class RosStorageBundle(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.RosStorageBundle",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudStorageGateway::StorageBundle``, which is used to create a gateway cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``StorageBundle`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosStorageBundleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56d2380a5509994a8c8eee5aafe9fd096c3a188020ed9a8da2480d7292658d5d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__be52e25b65572f5489850a4a5d3356e21977705c9145e65d503ab4b960bf66e6)
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
        :Attribute: CreateTime: Create a gateway cluster timestamp.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Gateway cluster description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageBundleId")
    def attr_storage_bundle_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageBundleId: The ID of the gateway cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageBundleId"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageBundleName")
    def attr_storage_bundle_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageBundleName: Gateway cluster name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageBundleName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__346cdfb325e42f4bb6f4071e7036bf961be31313bb72d6730a92a0ba69978bb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="storageBundleName")
    def storage_bundle_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storageBundleName"))

    @storage_bundle_name.setter
    def storage_bundle_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6e6b73bca7c16c2dced1aa9a4ebd6f9a864c10ba7f5441d0e967bbe263d52d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageBundleName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5abb34238558f693492014ed7b517f64fe9df482a2ff48deb00a18eba8b75f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.RosStorageBundleProps",
    jsii_struct_bases=[],
    name_mapping={
        "storage_bundle_name": "storageBundleName",
        "description": "description",
    },
)
class RosStorageBundleProps:
    def __init__(
        self,
        *,
        storage_bundle_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosStorageBundle``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle

        :param storage_bundle_name: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66ad57281efe1aa1fefdca2857faf4c01bc410bc71243a793b91b6cb934bf30b)
            check_type(argname="argument storage_bundle_name", value=storage_bundle_name, expected_type=type_hints["storage_bundle_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "storage_bundle_name": storage_bundle_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def storage_bundle_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("storage_bundle_name")
        assert result is not None, "Required property 'storage_bundle_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStorageBundleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IStorageBundle)
class StorageBundle(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.StorageBundle",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudStorageGateway::StorageBundle``, which is used to create a gateway cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosStorageBundle``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["StorageBundleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1a1115458c009442e51da9d68f192b969ed01d43f4e92300b0517bd29049c9c)
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
        '''Attribute CreateTime: Create a gateway cluster timestamp.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Gateway cluster description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageBundleId")
    def attr_storage_bundle_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageBundleId: The ID of the gateway cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageBundleId"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageBundleName")
    def attr_storage_bundle_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageBundleName: Gateway cluster name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageBundleName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StorageBundleProps":
        return typing.cast("StorageBundleProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ad3c04df5aa7074f476c5b2e5171384ad55d61b3cdfe4c953273b8300de51a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90e4900337b66a407435e2dc95e0f57f1971df167cf84454201c5ffd14dee3c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dda07c4b90a7b320fe42caf0081bc202e80a811870dbd23c9ae8294a6a1f22e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.StorageBundleProps",
    jsii_struct_bases=[],
    name_mapping={
        "storage_bundle_name": "storageBundleName",
        "description": "description",
    },
)
class StorageBundleProps:
    def __init__(
        self,
        *,
        storage_bundle_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``StorageBundle``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle

        :param storage_bundle_name: Property storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        :param description: Property description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d86e804011533216007ffe4c5698d39d70b22448b6db238f600cea85dcadd6f8)
            check_type(argname="argument storage_bundle_name", value=storage_bundle_name, expected_type=type_hints["storage_bundle_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "storage_bundle_name": storage_bundle_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def storage_bundle_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storageBundleName: The name of the gateway cluster.

        The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("storage_bundle_name")
        assert result is not None, "Required property 'storage_bundle_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the gateway cluster.

        The description must be 0 to 128 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StorageBundleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IStorageBundle",
    "RosStorageBundle",
    "RosStorageBundleProps",
    "StorageBundle",
    "StorageBundleProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__56d2380a5509994a8c8eee5aafe9fd096c3a188020ed9a8da2480d7292658d5d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosStorageBundleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be52e25b65572f5489850a4a5d3356e21977705c9145e65d503ab4b960bf66e6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__346cdfb325e42f4bb6f4071e7036bf961be31313bb72d6730a92a0ba69978bb3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6e6b73bca7c16c2dced1aa9a4ebd6f9a864c10ba7f5441d0e967bbe263d52d4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5abb34238558f693492014ed7b517f64fe9df482a2ff48deb00a18eba8b75f1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66ad57281efe1aa1fefdca2857faf4c01bc410bc71243a793b91b6cb934bf30b(
    *,
    storage_bundle_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1a1115458c009442e51da9d68f192b969ed01d43f4e92300b0517bd29049c9c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[StorageBundleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ad3c04df5aa7074f476c5b2e5171384ad55d61b3cdfe4c953273b8300de51a8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90e4900337b66a407435e2dc95e0f57f1971df167cf84454201c5ffd14dee3c7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dda07c4b90a7b320fe42caf0081bc202e80a811870dbd23c9ae8294a6a1f22e2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d86e804011533216007ffe4c5698d39d70b22448b6db238f600cea85dcadd6f8(
    *,
    storage_bundle_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
