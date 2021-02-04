"""
## Aliyun ROS MARKETPLACE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_marketplace as MARKETPLACE
```
"""
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


class Order(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-marketplace.Order",
):
    """A ROS resource type:  ``ALIYUN::MarketPlace::Order``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "OrderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::MarketPlace::Order``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Order, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order ID of created instance.
        """
        return jsii.get(self, "attrOrderId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-marketplace.OrderProps",
    jsii_struct_bases=[],
    name_mapping={
        "product_code": "productCode",
        "sku_code": "skuCode",
        "charge_type": "chargeType",
        "duration": "duration",
        "preference": "preference",
        "pricing_cycle": "pricingCycle",
        "quantity": "quantity",
    },
)
class OrderProps:
    def __init__(
        self,
        *,
        product_code: builtins.str,
        sku_code: builtins.str,
        charge_type: typing.Optional[builtins.str] = None,
        duration: typing.Optional[jsii.Number] = None,
        preference: typing.Optional[typing.Union[typing.Mapping[builtins.str, typing.Any], ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        quantity: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MarketPlace::Order``.

        :param product_code: 
        :param sku_code: 
        :param charge_type: 
        :param duration: 
        :param preference: 
        :param pricing_cycle: 
        :param quantity: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "product_code": product_code,
            "sku_code": sku_code,
        }
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if duration is not None:
            self._values["duration"] = duration
        if preference is not None:
            self._values["preference"] = preference
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if quantity is not None:
            self._values["quantity"] = quantity

    @builtins.property
    def product_code(self) -> builtins.str:
        """
        :Property: productCode: Product code for the resource.
        """
        result = self._values.get("product_code")
        assert result is not None, "Required property 'product_code' is missing"
        return result

    @builtins.property
    def sku_code(self) -> builtins.str:
        """
        :Property: skuCode: Sku code for the resource.
        """
        result = self._values.get("sku_code")
        assert result is not None, "Required property 'sku_code' is missing"
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The resource charge type. Default value is Prepaid
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def preference(
        self,
    ) -> typing.Optional[typing.Union[typing.Mapping[builtins.str, typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: preference: Customized parameters.
        """
        result = self._values.get("preference")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def quantity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: quantity: Resource number. Default value is 1
        """
        result = self._values.get("quantity")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOrder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-marketplace.RosOrder",
):
    """A ROS template type:  ``ALIYUN::MarketPlace::Order``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosOrderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::MarketPlace::Order``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosOrder, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order ID of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="productCode")
    def product_code(self) -> builtins.str:
        """
        :Property: productCode: Product code for the resource.
        """
        return jsii.get(self, "productCode")

    @product_code.setter # type: ignore
    def product_code(self, value: builtins.str) -> None:
        jsii.set(self, "productCode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="skuCode")
    def sku_code(self) -> builtins.str:
        """
        :Property: skuCode: Sku code for the resource.
        """
        return jsii.get(self, "skuCode")

    @sku_code.setter # type: ignore
    def sku_code(self, value: builtins.str) -> None:
        jsii.set(self, "skuCode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The resource charge type. Default value is Prepaid
        """
        return jsii.get(self, "chargeType")

    @charge_type.setter # type: ignore
    def charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="duration")
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
        """
        return jsii.get(self, "duration")

    @duration.setter # type: ignore
    def duration(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preference")
    def preference(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: preference: Customized parameters.
        """
        return jsii.get(self, "preference")

    @preference.setter # type: ignore
    def preference(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "preference", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        """
        return jsii.get(self, "pricingCycle")

    @pricing_cycle.setter # type: ignore
    def pricing_cycle(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="quantity")
    def quantity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: quantity: Resource number. Default value is 1
        """
        return jsii.get(self, "quantity")

    @quantity.setter # type: ignore
    def quantity(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "quantity", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-marketplace.RosOrderProps",
    jsii_struct_bases=[],
    name_mapping={
        "product_code": "productCode",
        "sku_code": "skuCode",
        "charge_type": "chargeType",
        "duration": "duration",
        "preference": "preference",
        "pricing_cycle": "pricingCycle",
        "quantity": "quantity",
    },
)
class RosOrderProps:
    def __init__(
        self,
        *,
        product_code: builtins.str,
        sku_code: builtins.str,
        charge_type: typing.Optional[builtins.str] = None,
        duration: typing.Optional[jsii.Number] = None,
        preference: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        quantity: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MarketPlace::Order``.

        :param product_code: 
        :param sku_code: 
        :param charge_type: 
        :param duration: 
        :param preference: 
        :param pricing_cycle: 
        :param quantity: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "product_code": product_code,
            "sku_code": sku_code,
        }
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if duration is not None:
            self._values["duration"] = duration
        if preference is not None:
            self._values["preference"] = preference
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if quantity is not None:
            self._values["quantity"] = quantity

    @builtins.property
    def product_code(self) -> builtins.str:
        """
        :Property: productCode: Product code for the resource.
        """
        result = self._values.get("product_code")
        assert result is not None, "Required property 'product_code' is missing"
        return result

    @builtins.property
    def sku_code(self) -> builtins.str:
        """
        :Property: skuCode: Sku code for the resource.
        """
        result = self._values.get("sku_code")
        assert result is not None, "Required property 'sku_code' is missing"
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The resource charge type. Default value is Prepaid
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def preference(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: preference: Customized parameters.
        """
        result = self._values.get("preference")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def quantity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: quantity: Resource number. Default value is 1
        """
        result = self._values.get("quantity")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Order",
    "OrderProps",
    "RosOrder",
    "RosOrderProps",
]

publication.publish()
