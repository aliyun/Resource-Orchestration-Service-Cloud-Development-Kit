'''
## Aliyun ROS CDT Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CDT from '@alicloud/ros-cdk-cdt';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-cdt.IResourcePackage")
class IResourcePackage(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ResourcePackage``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the specified instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The ID of the specified order.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourcePackageProps":
        ...


class _IResourcePackageProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ResourcePackage``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cdt.IResourcePackage"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the specified instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The ID of the specified order.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourcePackageProps":
        return typing.cast("ResourcePackageProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResourcePackage).__jsii_proxy_class__ = lambda : _IResourcePackageProxy


@jsii.implements(IResourcePackage)
class ResourcePackage(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdt.ResourcePackage",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CDT::ResourcePackage``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosResourcePackage``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ResourcePackageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c59799650d3000d5c96c2abd55954459ff2c42c72c18c44bbe2a460db482d92)
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
        '''Attribute InstanceId: The ID of the specified instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The ID of the specified order.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourcePackageProps":
        return typing.cast("ResourcePackageProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cef5d4b0113471b139cd361bffa7c7383c4dcc76ddd0a85082f24709b0f1928a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b72ba1f49b8ca8f6f82c33bc56f0115348d77fa686a8f6c19885cb27aecc0fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__635a89e92806abed4b6848225a75589e1e6edb5f15fc98005e697bad90fb918d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdt.ResourcePackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "capacity": "capacity",
        "pack": "pack",
        "region": "region",
        "isp": "isp",
    },
)
class ResourcePackageProps:
    def __init__(
        self,
        *,
        capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        pack: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ResourcePackage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage

        :param capacity: Property capacity: The capacity of the specified CDT resource package.
        :param pack: Property pack: The pack of the specified CDT resource package. It can be obtained from the ``components`` field in the payload of the ``getPrice`` network request on the CDT common buy page.
        :param region: Property region: The region of the specified CDT resource package.
        :param isp: Property isp: The ISP of the specified CDT resource package.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6241b13205211e5971729d2054523e33648711f9851a4c36a79c8e7ac3418f69)
            check_type(argname="argument capacity", value=capacity, expected_type=type_hints["capacity"])
            check_type(argname="argument pack", value=pack, expected_type=type_hints["pack"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument isp", value=isp, expected_type=type_hints["isp"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "capacity": capacity,
            "pack": pack,
            "region": region,
        }
        if isp is not None:
            self._values["isp"] = isp

    @builtins.property
    def capacity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property capacity: The capacity of the specified CDT resource package.'''
        result = self._values.get("capacity")
        assert result is not None, "Required property 'capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pack(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pack: The pack of the specified CDT resource package.

        It can be obtained from the ``components`` field in the payload of the ``getPrice`` network request on the CDT common buy page.
        '''
        result = self._values.get("pack")
        assert result is not None, "Required property 'pack' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property region: The region of the specified CDT resource package.'''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isp: The ISP of the specified CDT resource package.'''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourcePackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourcePackage(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdt.RosResourcePackage",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CDT::ResourcePackage``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ResourcePackage`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosResourcePackageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd130bc4e4830175bdd9a91a1aecdb3f26c8025fb68238e00bb3372aebd8bea2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0c86f4b36455a1ceaab16c4ecec56329637896ed25e3d5ddfe63be71a55f9031)
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
        :Attribute: InstanceId: The ID of the specified instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The ID of the specified order.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="capacity")
    def capacity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: capacity: The capacity of the specified CDT resource package.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "capacity"))

    @capacity.setter
    def capacity(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65491ce60d887b5044a866d26af8759afbbd3e4d99e80713a73f716489d1e9fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "capacity", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c4b22ac7846baa57efd6488d34ec983729e766247487dd84257a31cd74e31be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="pack")
    def pack(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pack: The pack of the specified CDT resource package. It can be obtained from the ``components`` field in the payload of the ``getPrice`` network request on the CDT common buy page.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pack"))

    @pack.setter
    def pack(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__736f485ed21e5f88d4cdc75e772303a29fbd4a2f4aba83fffee390ec37d37a1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pack", value)

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: region: The region of the specified CDT resource package.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83aa30ec9e19103a2190f75b33ea7f0a11787d362e494b6f66b44d9ffbc4aaae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "region", value)

    @builtins.property
    @jsii.member(jsii_name="isp")
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isp: The ISP of the specified CDT resource package.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isp"))

    @isp.setter
    def isp(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54b1bd7a000ce0e9a251bc60bb5cd79f7d6b88c46d199bebe10f3985e6eabf3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isp", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdt.RosResourcePackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "capacity": "capacity",
        "pack": "pack",
        "region": "region",
        "isp": "isp",
    },
)
class RosResourcePackageProps:
    def __init__(
        self,
        *,
        capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        pack: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosResourcePackage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage

        :param capacity: 
        :param pack: 
        :param region: 
        :param isp: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d133974f6f4783b978a6cc5db2ba66867bc1580be7e89ea8eb66a8bd7259553b)
            check_type(argname="argument capacity", value=capacity, expected_type=type_hints["capacity"])
            check_type(argname="argument pack", value=pack, expected_type=type_hints["pack"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument isp", value=isp, expected_type=type_hints["isp"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "capacity": capacity,
            "pack": pack,
            "region": region,
        }
        if isp is not None:
            self._values["isp"] = isp

    @builtins.property
    def capacity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: capacity: The capacity of the specified CDT resource package.
        '''
        result = self._values.get("capacity")
        assert result is not None, "Required property 'capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pack(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pack: The pack of the specified CDT resource package. It can be obtained from the ``components`` field in the payload of the ``getPrice`` network request on the CDT common buy page.
        '''
        result = self._values.get("pack")
        assert result is not None, "Required property 'pack' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: region: The region of the specified CDT resource package.
        '''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isp: The ISP of the specified CDT resource package.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourcePackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IResourcePackage",
    "ResourcePackage",
    "ResourcePackageProps",
    "RosResourcePackage",
    "RosResourcePackageProps",
]

publication.publish()

def _typecheckingstub__1c59799650d3000d5c96c2abd55954459ff2c42c72c18c44bbe2a460db482d92(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ResourcePackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cef5d4b0113471b139cd361bffa7c7383c4dcc76ddd0a85082f24709b0f1928a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b72ba1f49b8ca8f6f82c33bc56f0115348d77fa686a8f6c19885cb27aecc0fb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__635a89e92806abed4b6848225a75589e1e6edb5f15fc98005e697bad90fb918d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6241b13205211e5971729d2054523e33648711f9851a4c36a79c8e7ac3418f69(
    *,
    capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    pack: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd130bc4e4830175bdd9a91a1aecdb3f26c8025fb68238e00bb3372aebd8bea2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosResourcePackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c86f4b36455a1ceaab16c4ecec56329637896ed25e3d5ddfe63be71a55f9031(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65491ce60d887b5044a866d26af8759afbbd3e4d99e80713a73f716489d1e9fe(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c4b22ac7846baa57efd6488d34ec983729e766247487dd84257a31cd74e31be(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__736f485ed21e5f88d4cdc75e772303a29fbd4a2f4aba83fffee390ec37d37a1b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83aa30ec9e19103a2190f75b33ea7f0a11787d362e494b6f66b44d9ffbc4aaae(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54b1bd7a000ce0e9a251bc60bb5cd79f7d6b88c46d199bebe10f3985e6eabf3e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d133974f6f4783b978a6cc5db2ba66867bc1580be7e89ea8eb66a8bd7259553b(
    *,
    capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    pack: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
