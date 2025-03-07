'''
## Aliyun ROS BSS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as BSS from '@alicloud/ros-cdk-bss';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-bss.IResourcePackage")
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

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bss.IResourcePackage"

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


@jsii.interface(jsii_type="@alicloud/ros-cdk-bss.IWaitOrder")
class IWaitOrder(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``WaitOrder``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WaitOrderProps":
        ...


class _IWaitOrderProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WaitOrder``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bss.IWaitOrder"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WaitOrderProps":
        return typing.cast("WaitOrderProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWaitOrder).__jsii_proxy_class__ = lambda : _IWaitOrderProxy


@jsii.implements(IResourcePackage)
class ResourcePackage(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.ResourcePackage",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BSS::ResourcePackage``, which is used to create a resource plan.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosResourcePackage``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
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
            type_hints = typing.get_type_hints(_typecheckingstub__4556252a24e6571d9038641222c679da064c616259b74a0623cbc1e989ed3e67)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f4ff0919336f22353d5d069f97ea080e32b4d7a18795fc62760be16db3a4bc3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39ed145b55e145b1c042b030f3182596edafe86dc78d64ddb6e72169bca34133)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__385b8252fdcad99cfd91647c4db9d912fc56f517c89578cd46e27d73eb04c045)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bss.ResourcePackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "duration": "duration",
        "package_type": "packageType",
        "product_code": "productCode",
        "specification": "specification",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "auto_renew_period_unit": "autoRenewPeriodUnit",
        "effective_date": "effectiveDate",
        "pricing_cycle": "pricingCycle",
    },
)
class ResourcePackageProps:
    def __init__(
        self,
        *,
        duration: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        package_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        effective_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ResourcePackage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage

        :param duration: Property duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        :param package_type: Property packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        :param product_code: Property productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
        :param specification: Property specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        :param auto_renew: Property autoRenew: Whether to automatically renew the resource package. The value is true or false. Default value: false.
        :param auto_renew_period: Property autoRenewPeriod: Duration of resource packs renewals. Valid values: - When AutoRenewPeriodUnit is Year: 1, 2, 3. - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6. Default is 1.
        :param auto_renew_period_unit: Property autoRenewPeriodUnit: Unit of resource pack renewals. Valid values: Month, Year. Default is Month.
        :param effective_date: Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        :param pricing_cycle: Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d776edf40b265146361a737f36e012b290b731d353df3797b4c184228b9021c7)
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument package_type", value=package_type, expected_type=type_hints["package_type"])
            check_type(argname="argument product_code", value=product_code, expected_type=type_hints["product_code"])
            check_type(argname="argument specification", value=specification, expected_type=type_hints["specification"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument auto_renew_period_unit", value=auto_renew_period_unit, expected_type=type_hints["auto_renew_period_unit"])
            check_type(argname="argument effective_date", value=effective_date, expected_type=type_hints["effective_date"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "duration": duration,
            "package_type": package_type,
            "product_code": product_code,
            "specification": specification,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if auto_renew_period_unit is not None:
            self._values["auto_renew_period_unit"] = auto_renew_period_unit
        if effective_date is not None:
            self._values["effective_date"] = effective_date
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle

    @builtins.property
    def duration(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property duration: The validity of the specified resource package.

        The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("duration")
        assert result is not None, "Required property 'duration' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property packageType: The type of the specified resource package.

        The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("package_type")
        assert result is not None, "Required property 'package_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productCode: The code of the specified product.

        The value is the same as the value of ProductType returned by QueryProductList.
        '''
        result = self._values.get("product_code")
        assert result is not None, "Required property 'product_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property specification: The size of the specified resource package.

        The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether to automatically renew the resource package.

        The value is true or false. Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Duration of resource packs renewals.

        Valid values:

        - When AutoRenewPeriodUnit is Year: 1, 2, 3.
        - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
          Default is 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriodUnit: Unit of resource pack renewals.

        Valid values: Month, Year. Default is Month.
        '''
        result = self._values.get("auto_renew_period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def effective_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property effectiveDate: The effective date of the specified resource package.

        The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        '''
        result = self._values.get("effective_date")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pricingCycle: The validity of the specified resource package.

        Default value: Month. Valid values: Month, Year
        '''
        result = self._values.get("pricing_cycle")
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
    jsii_type="@alicloud/ros-cdk-bss.RosResourcePackage",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BSS::ResourcePackage``, which is used to create a resource plan.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ResourcePackage`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
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
            type_hints = typing.get_type_hints(_typecheckingstub__8abb9f6277a47b2064b4c71afd619eb4964c05ffb2545db77e9f49c5ccbc990b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f3f3d5ccb39e39312e340535a4404e327e980ee11a6f91b1db24e5379976bc24)
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
    @jsii.member(jsii_name="duration")
    def duration(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d020f2dcb966b37d7b70468ceb1c7d2ee6a0fa784752efef932067a41a85a882)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__190ad1893b74dd666cab266cb27eb1af42fe78bb72022f5599c5ef786c292b4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="packageType")
    def package_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "packageType"))

    @package_type.setter
    def package_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__924961f7f6a74a947cc6d1f457d285bce2f179f4e7395556e42912b0fb63583b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "packageType", value)

    @builtins.property
    @jsii.member(jsii_name="productCode")
    def product_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productCode"))

    @product_code.setter
    def product_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c42494620bfdf8cbb1fbbdd4f3521876fd018de3dbdcf8c5397cfdfee2dcd109)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productCode", value)

    @builtins.property
    @jsii.member(jsii_name="specification")
    def specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "specification"))

    @specification.setter
    def specification(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3f5bd2441faf37ff5ccd4c9e59948f4ed20f69455c48662908f6d82bf2a460a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "specification", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to automatically renew the resource package. The value is true or false. Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c4e3c248d0ea9a12fbf857dc79d6e7e75475e51d9064806f91b63eb36b60131)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Duration of resource packs renewals. Valid values:

        - When AutoRenewPeriodUnit is Year: 1, 2, 3.
        - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
        Default is 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44680e0457e115f2fdf1af081b4a33448f1639afcbdf874273d5ccfa48a98694)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriodUnit")
    def auto_renew_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriodUnit: Unit of resource pack renewals. Valid values: Month, Year. Default is Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriodUnit"))

    @auto_renew_period_unit.setter
    def auto_renew_period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82c30e6802a751154d3b7d395a5428adb034757c8ca6d1b54de505c79e417942)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="effectiveDate")
    def effective_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "effectiveDate"))

    @effective_date.setter
    def effective_date(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50212e616c2d15b4159b54e7d6bcf3fb9b300048619ce809656307857c766cbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "effectiveDate", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80eaf78e233c38d39adfdd58fcaf5b8169d3f425027325df5c418c2c80b781d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bss.RosResourcePackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "duration": "duration",
        "package_type": "packageType",
        "product_code": "productCode",
        "specification": "specification",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "auto_renew_period_unit": "autoRenewPeriodUnit",
        "effective_date": "effectiveDate",
        "pricing_cycle": "pricingCycle",
    },
)
class RosResourcePackageProps:
    def __init__(
        self,
        *,
        duration: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        package_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        effective_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosResourcePackage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage

        :param duration: 
        :param package_type: 
        :param product_code: 
        :param specification: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param auto_renew_period_unit: 
        :param effective_date: 
        :param pricing_cycle: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47b49e529d279e26202d69cef5aea2e98969d20331c8cc8eed68c6b2cfb9f531)
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument package_type", value=package_type, expected_type=type_hints["package_type"])
            check_type(argname="argument product_code", value=product_code, expected_type=type_hints["product_code"])
            check_type(argname="argument specification", value=specification, expected_type=type_hints["specification"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument auto_renew_period_unit", value=auto_renew_period_unit, expected_type=type_hints["auto_renew_period_unit"])
            check_type(argname="argument effective_date", value=effective_date, expected_type=type_hints["effective_date"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "duration": duration,
            "package_type": package_type,
            "product_code": product_code,
            "specification": specification,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if auto_renew_period_unit is not None:
            self._values["auto_renew_period_unit"] = auto_renew_period_unit
        if effective_date is not None:
            self._values["effective_date"] = effective_date
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle

    @builtins.property
    def duration(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("duration")
        assert result is not None, "Required property 'duration' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("package_type")
        assert result is not None, "Required property 'package_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
        '''
        result = self._values.get("product_code")
        assert result is not None, "Required property 'product_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to automatically renew the resource package. The value is true or false. Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Duration of resource packs renewals. Valid values:

        - When AutoRenewPeriodUnit is Year: 1, 2, 3.
        - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
        Default is 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriodUnit: Unit of resource pack renewals. Valid values: Month, Year. Default is Month.
        '''
        result = self._values.get("auto_renew_period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def effective_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        '''
        result = self._values.get("effective_date")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourcePackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWaitOrder(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.RosWaitOrder",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BSS::WaitOrder``, which is used to wait for orders to be completed.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WaitOrder`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWaitOrderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8edf84f8e46e1eb3f1bd5b23cf812f310dc97832e781d497fa52ed925359375)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b4053cc7d534107f4a44271c004627de4e91c0a3930d927df3b115ff096633db)
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
            type_hints = typing.get_type_hints(_typecheckingstub__76f9a760688b347cc614f6090665a9653069a5e745b5af877ae7ebed4146f7ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="orderIds")
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: orderIds: A list of order ids.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "orderIds"))

    @order_ids.setter
    def order_ids(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d355df593fe7895ebb5aa6a565bdc20a500e6d7f72ab87c1c687ead1b3c6957)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "orderIds", value)

    @builtins.property
    @jsii.member(jsii_name="cancelOnDelete")
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cancelOnDelete"))

    @cancel_on_delete.setter
    def cancel_on_delete(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ecbe5a4061946d85b832ce5cfcd4b78f289267ee502d79749734c447528d72d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cancelOnDelete", value)

    @builtins.property
    @jsii.member(jsii_name="waitForOrderProduced")
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        waitForOrderProduced: Wait util all orders related ROS resources are produced.
        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "waitForOrderProduced"))

    @wait_for_order_produced.setter
    def wait_for_order_produced(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa80ee8ae3d4804d4fd278b62c4066671b3b6ec1403358b8b0818c7f81ca122c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "waitForOrderProduced", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bss.RosWaitOrderProps",
    jsii_struct_bases=[],
    name_mapping={
        "order_ids": "orderIds",
        "cancel_on_delete": "cancelOnDelete",
        "wait_for_order_produced": "waitForOrderProduced",
    },
)
class RosWaitOrderProps:
    def __init__(
        self,
        *,
        order_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        cancel_on_delete: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        wait_for_order_produced: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWaitOrder``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder

        :param order_ids: 
        :param cancel_on_delete: 
        :param wait_for_order_produced: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b09626cb3bccbdcb4a77f4417c88b7b8393c27a2781b96dc4867b16778597e2)
            check_type(argname="argument order_ids", value=order_ids, expected_type=type_hints["order_ids"])
            check_type(argname="argument cancel_on_delete", value=cancel_on_delete, expected_type=type_hints["cancel_on_delete"])
            check_type(argname="argument wait_for_order_produced", value=wait_for_order_produced, expected_type=type_hints["wait_for_order_produced"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "order_ids": order_ids,
        }
        if cancel_on_delete is not None:
            self._values["cancel_on_delete"] = cancel_on_delete
        if wait_for_order_produced is not None:
            self._values["wait_for_order_produced"] = wait_for_order_produced

    @builtins.property
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: orderIds: A list of order ids.
        '''
        result = self._values.get("order_ids")
        assert result is not None, "Required property 'order_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        '''
        result = self._values.get("cancel_on_delete")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        waitForOrderProduced: Wait util all orders related ROS resources are produced.
        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        '''
        result = self._values.get("wait_for_order_produced")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWaitOrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWaitOrder)
class WaitOrder(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.WaitOrder",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BSS::WaitOrder``, which is used to wait for orders to be completed.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWaitOrder``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WaitOrderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53486ba28136b5e5d82ed7073e44c0c7e3cfef2ca6533d0d717ee0d3dc41d28c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WaitOrderProps":
        return typing.cast("WaitOrderProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f563a42f3c318e01d3dabad1e5aabc1425768481a9a623e0f7eab2b6bab8ae6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae5c4415e504138898c81a67d3aadbe3dfaa7138a58b912354ca07ac164f1644)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f11b580f8898a6f38c36dc600f91e615abc74046aead3f161c942a03a4ac3de4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bss.WaitOrderProps",
    jsii_struct_bases=[],
    name_mapping={
        "order_ids": "orderIds",
        "cancel_on_delete": "cancelOnDelete",
        "wait_for_order_produced": "waitForOrderProduced",
    },
)
class WaitOrderProps:
    def __init__(
        self,
        *,
        order_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        cancel_on_delete: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        wait_for_order_produced: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WaitOrder``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder

        :param order_ids: Property orderIds: A list of order ids.
        :param cancel_on_delete: Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        :param wait_for_order_produced: Property waitForOrderProduced: Wait util all orders related ROS resources are produced. Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f117bc8c7a25c09f00d0e1fd5d7ed40e3a161e66949f35f571df5ec5951db5e)
            check_type(argname="argument order_ids", value=order_ids, expected_type=type_hints["order_ids"])
            check_type(argname="argument cancel_on_delete", value=cancel_on_delete, expected_type=type_hints["cancel_on_delete"])
            check_type(argname="argument wait_for_order_produced", value=wait_for_order_produced, expected_type=type_hints["wait_for_order_produced"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "order_ids": order_ids,
        }
        if cancel_on_delete is not None:
            self._values["cancel_on_delete"] = cancel_on_delete
        if wait_for_order_produced is not None:
            self._values["wait_for_order_produced"] = wait_for_order_produced

    @builtins.property
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property orderIds: A list of order ids.'''
        result = self._values.get("order_ids")
        assert result is not None, "Required property 'order_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cancelOnDelete: Cancel order where delete the resource.

        Ignore the paid order. Default true
        '''
        result = self._values.get("cancel_on_delete")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property waitForOrderProduced: Wait util all orders related ROS resources are produced.

        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        '''
        result = self._values.get("wait_for_order_produced")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WaitOrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IResourcePackage",
    "IWaitOrder",
    "ResourcePackage",
    "ResourcePackageProps",
    "RosResourcePackage",
    "RosResourcePackageProps",
    "RosWaitOrder",
    "RosWaitOrderProps",
    "WaitOrder",
    "WaitOrderProps",
]

publication.publish()

def _typecheckingstub__4556252a24e6571d9038641222c679da064c616259b74a0623cbc1e989ed3e67(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ResourcePackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4ff0919336f22353d5d069f97ea080e32b4d7a18795fc62760be16db3a4bc3b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39ed145b55e145b1c042b030f3182596edafe86dc78d64ddb6e72169bca34133(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__385b8252fdcad99cfd91647c4db9d912fc56f517c89578cd46e27d73eb04c045(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d776edf40b265146361a737f36e012b290b731d353df3797b4c184228b9021c7(
    *,
    duration: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    package_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    effective_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8abb9f6277a47b2064b4c71afd619eb4964c05ffb2545db77e9f49c5ccbc990b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosResourcePackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3f3d5ccb39e39312e340535a4404e327e980ee11a6f91b1db24e5379976bc24(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d020f2dcb966b37d7b70468ceb1c7d2ee6a0fa784752efef932067a41a85a882(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__190ad1893b74dd666cab266cb27eb1af42fe78bb72022f5599c5ef786c292b4d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__924961f7f6a74a947cc6d1f457d285bce2f179f4e7395556e42912b0fb63583b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c42494620bfdf8cbb1fbbdd4f3521876fd018de3dbdcf8c5397cfdfee2dcd109(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3f5bd2441faf37ff5ccd4c9e59948f4ed20f69455c48662908f6d82bf2a460a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c4e3c248d0ea9a12fbf857dc79d6e7e75475e51d9064806f91b63eb36b60131(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44680e0457e115f2fdf1af081b4a33448f1639afcbdf874273d5ccfa48a98694(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82c30e6802a751154d3b7d395a5428adb034757c8ca6d1b54de505c79e417942(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50212e616c2d15b4159b54e7d6bcf3fb9b300048619ce809656307857c766cbc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80eaf78e233c38d39adfdd58fcaf5b8169d3f425027325df5c418c2c80b781d3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47b49e529d279e26202d69cef5aea2e98969d20331c8cc8eed68c6b2cfb9f531(
    *,
    duration: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    package_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    effective_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8edf84f8e46e1eb3f1bd5b23cf812f310dc97832e781d497fa52ed925359375(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWaitOrderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4053cc7d534107f4a44271c004627de4e91c0a3930d927df3b115ff096633db(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76f9a760688b347cc614f6090665a9653069a5e745b5af877ae7ebed4146f7ba(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d355df593fe7895ebb5aa6a565bdc20a500e6d7f72ab87c1c687ead1b3c6957(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ecbe5a4061946d85b832ce5cfcd4b78f289267ee502d79749734c447528d72d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa80ee8ae3d4804d4fd278b62c4066671b3b6ec1403358b8b0818c7f81ca122c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b09626cb3bccbdcb4a77f4417c88b7b8393c27a2781b96dc4867b16778597e2(
    *,
    order_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    cancel_on_delete: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    wait_for_order_produced: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53486ba28136b5e5d82ed7073e44c0c7e3cfef2ca6533d0d717ee0d3dc41d28c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WaitOrderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f563a42f3c318e01d3dabad1e5aabc1425768481a9a623e0f7eab2b6bab8ae6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae5c4415e504138898c81a67d3aadbe3dfaa7138a58b912354ca07ac164f1644(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f11b580f8898a6f38c36dc600f91e615abc74046aead3f161c942a03a4ac3de4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f117bc8c7a25c09f00d0e1fd5d7ed40e3a161e66949f35f571df5ec5951db5e(
    *,
    order_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    cancel_on_delete: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    wait_for_order_produced: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
