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

from ._jsii import *

import ros_cdk_core


class ResourcePackage(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.ResourcePackage",
):
    '''A ROS resource type:  ``ALIYUN::BSS::ResourcePackage``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ResourcePackageProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::BSS::ResourcePackage``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the specified instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The ID of the specified order.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bss.ResourcePackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "duration": "duration",
        "package_type": "packageType",
        "product_code": "productCode",
        "specification": "specification",
        "effective_date": "effectiveDate",
        "pricing_cycle": "pricingCycle",
    },
)
class ResourcePackageProps:
    def __init__(
        self,
        *,
        duration: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        package_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        product_code: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        specification: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        effective_date: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BSS::ResourcePackage``.

        :param duration: Property duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        :param package_type: Property packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        :param product_code: Property productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
        :param specification: Property specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        :param effective_date: Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        :param pricing_cycle: Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "duration": duration,
            "package_type": package_type,
            "product_code": product_code,
            "specification": specification,
        }
        if effective_date is not None:
            self._values["effective_date"] = effective_date
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle

    @builtins.property
    def duration(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property duration: The validity of the specified resource package.

        The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("duration")
        assert result is not None, "Required property 'duration' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def package_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property packageType: The type of the specified resource package.

        The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("package_type")
        assert result is not None, "Required property 'package_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def product_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property productCode: The code of the specified product.

        The value is the same as the value of ProductType returned by QueryProductList.
        '''
        result = self._values.get("product_code")
        assert result is not None, "Required property 'product_code' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def specification(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property specification: The size of the specified resource package.

        The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def effective_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property effectiveDate: The effective date of the specified resource package.

        The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        '''
        result = self._values.get("effective_date")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: The validity of the specified resource package.

        Default value: Month. Valid values: Month, Year
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourcePackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourcePackage(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.RosResourcePackage",
):
    '''A ROS template type:  ``ALIYUN::BSS::ResourcePackage``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosResourcePackageProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BSS::ResourcePackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the specified instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The ID of the specified order.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="duration")
    def duration(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="packageType")
    def package_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "packageType"))

    @package_type.setter
    def package_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "packageType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="productCode")
    def product_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "productCode"))

    @product_code.setter
    def product_code(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "productCode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="specification")
    def specification(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "specification"))

    @specification.setter
    def specification(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "specification", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="effectiveDate")
    def effective_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "effectiveDate"))

    @effective_date.setter
    def effective_date(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "effectiveDate", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bss.RosResourcePackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "duration": "duration",
        "package_type": "packageType",
        "product_code": "productCode",
        "specification": "specification",
        "effective_date": "effectiveDate",
        "pricing_cycle": "pricingCycle",
    },
)
class RosResourcePackageProps:
    def __init__(
        self,
        *,
        duration: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        package_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        product_code: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        specification: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        effective_date: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BSS::ResourcePackage``.

        :param duration: 
        :param package_type: 
        :param product_code: 
        :param specification: 
        :param effective_date: 
        :param pricing_cycle: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "duration": duration,
            "package_type": package_type,
            "product_code": product_code,
            "specification": specification,
        }
        if effective_date is not None:
            self._values["effective_date"] = effective_date
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle

    @builtins.property
    def duration(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("duration")
        assert result is not None, "Required property 'duration' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def package_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("package_type")
        assert result is not None, "Required property 'package_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def product_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
        '''
        result = self._values.get("product_code")
        assert result is not None, "Required property 'product_code' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def specification(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        '''
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def effective_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        '''
        result = self._values.get("effective_date")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourcePackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWaitOrder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.RosWaitOrder",
):
    '''A ROS template type:  ``ALIYUN::BSS::WaitOrder``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWaitOrderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BSS::WaitOrder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="orderIds")
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: orderIds: A list of order ids.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "orderIds"))

    @order_ids.setter
    def order_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "orderIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cancelOnDelete")
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "cancelOnDelete"))

    @cancel_on_delete.setter
    def cancel_on_delete(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cancelOnDelete", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="waitForOrderProduced")
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        waitForOrderProduced: Wait util all orders related ROS resources are produced.
        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "waitForOrderProduced"))

    @wait_for_order_produced.setter
    def wait_for_order_produced(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
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
        order_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        cancel_on_delete: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        wait_for_order_produced: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BSS::WaitOrder``.

        :param order_ids: 
        :param cancel_on_delete: 
        :param wait_for_order_produced: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "order_ids": order_ids,
        }
        if cancel_on_delete is not None:
            self._values["cancel_on_delete"] = cancel_on_delete
        if wait_for_order_produced is not None:
            self._values["wait_for_order_produced"] = wait_for_order_produced

    @builtins.property
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: orderIds: A list of order ids.
        '''
        result = self._values.get("order_ids")
        assert result is not None, "Required property 'order_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        '''
        result = self._values.get("cancel_on_delete")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        waitForOrderProduced: Wait util all orders related ROS resources are produced.
        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        '''
        result = self._values.get("wait_for_order_produced")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWaitOrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WaitOrder(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.WaitOrder",
):
    '''A ROS resource type:  ``ALIYUN::BSS::WaitOrder``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WaitOrderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::BSS::WaitOrder``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


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
        order_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        cancel_on_delete: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        wait_for_order_produced: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BSS::WaitOrder``.

        :param order_ids: Property orderIds: A list of order ids.
        :param cancel_on_delete: Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        :param wait_for_order_produced: Property waitForOrderProduced: Wait util all orders related ROS resources are produced. Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "order_ids": order_ids,
        }
        if cancel_on_delete is not None:
            self._values["cancel_on_delete"] = cancel_on_delete
        if wait_for_order_produced is not None:
            self._values["wait_for_order_produced"] = wait_for_order_produced

    @builtins.property
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''Property orderIds: A list of order ids.'''
        result = self._values.get("order_ids")
        assert result is not None, "Required property 'order_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property cancelOnDelete: Cancel order where delete the resource.

        Ignore the paid order. Default true
        '''
        result = self._values.get("cancel_on_delete")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property waitForOrderProduced: Wait util all orders related ROS resources are produced.

        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        '''
        result = self._values.get("wait_for_order_produced")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WaitOrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
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
