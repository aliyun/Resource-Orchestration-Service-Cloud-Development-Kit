"""
## Aliyun ROS VPC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_vpc as VPC
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


class CommonBandwidthPackage(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.CommonBandwidthPackage",
):
    """A ROS resource type:  ``ALIYUN::VPC::CommonBandwidthPackage``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CommonBandwidthPackageProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::CommonBandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CommonBandwidthPackage, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> typing.Any:
        """
        :Attribute: BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        """
        return jsii.get(self, "attrBandwidthPackageId")


class CommonBandwidthPackageIp(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.CommonBandwidthPackageIp",
):
    """A ROS resource type:  ``ALIYUN::VPC::CommonBandwidthPackageIp``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CommonBandwidthPackageIpProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::CommonBandwidthPackageIp``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CommonBandwidthPackageIp, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAllocationIds")
    def attr_allocation_ids(self) -> typing.Any:
        """
        :Attribute: AllocationIds: All eip allocation ids of common bandwidth package.
        """
        return jsii.get(self, "attrAllocationIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpAddresses")
    def attr_ip_addresses(self) -> typing.Any:
        """
        :Attribute: IpAddresses: All eip addresses of common bandwidth package.
        """
        return jsii.get(self, "attrIpAddresses")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps",
    jsii_struct_bases=[],
    name_mapping={"bandwidth_package_id": "bandwidthPackageId", "eips": "eips"},
)
class CommonBandwidthPackageIpProps:
    def __init__(
        self,
        *,
        bandwidth_package_id: builtins.str,
        eips: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]],
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::CommonBandwidthPackageIp``.

        :param bandwidth_package_id: 
        :param eips: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth_package_id": bandwidth_package_id,
            "eips": eips,
        }

    @builtins.property
    def bandwidth_package_id(self) -> builtins.str:
        """
        :Property: bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        """
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return result

    @builtins.property
    def eips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]]:
        """
        :Property: eips: List of eip associated with the Internet Shared Bandwidth instance.
        """
        result = self._values.get("eips")
        assert result is not None, "Required property 'eips' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CommonBandwidthPackageIpProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.CommonBandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "description": "description",
        "internet_charge_type": "internetChargeType",
        "isp": "isp",
        "name": "name",
        "ratio": "ratio",
        "resource_group_id": "resourceGroupId",
        "zone": "zone",
    },
)
class CommonBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: jsii.Number,
        description: typing.Optional[builtins.str] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        isp: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        ratio: typing.Optional[jsii.Number] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        zone: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::CommonBandwidthPackage``.

        :param bandwidth: 
        :param description: 
        :param internet_charge_type: 
        :param isp: 
        :param name: 
        :param ratio: 
        :param resource_group_id: 
        :param zone: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
        }
        if description is not None:
            self._values["description"] = description
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if ratio is not None:
            self._values["ratio"] = ratio
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone is not None:
            self._values["zone"] = zone

    @builtins.property
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the Internet Shared Bandwidth instance.
        The description must be 2 to 256 characters in length. It must start with a letter,
        and cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
        PayByBandwidth (default): Billed by bandwidth.
        PayBy95: Charged at Enhanced 95.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def isp(self) -> typing.Optional[builtins.str]:
        """
        :Property: isp: Line type of EIP, value: BGP (multi-line).
        """
        result = self._values.get("isp")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the Internet Shared Bandwidth instance.
        The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def ratio(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
        Note This parameter is only supported on the China site.
        """
        result = self._values.get("ratio")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: zone: Zone Id.
        """
        result = self._values.get("zone")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CommonBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomerGateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.CustomerGateway",
):
    """A ROS resource type:  ``ALIYUN::VPC::CustomerGateway``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CustomerGatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::CustomerGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CustomerGateway, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCustomerGatewayId")
    def attr_customer_gateway_id(self) -> typing.Any:
        """
        :Attribute: CustomerGatewayId: The ID of the user gateway.
        """
        return jsii.get(self, "attrCustomerGatewayId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.CustomerGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "ip_address": "ipAddress",
        "description": "description",
        "name": "name",
    },
)
class CustomerGatewayProps:
    def __init__(
        self,
        *,
        ip_address: builtins.str,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::CustomerGateway``.

        :param ip_address: 
        :param description: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ip_address": ip_address,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ip_address(self) -> builtins.str:
        """
        :Property: ipAddress: The IP address of the user gateway.
        """
        result = self._values.get("ip_address")
        assert result is not None, "Required property 'ip_address' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the user gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the user gateway.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomerGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EIPAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.EIPAssociation",
):
    """A ROS resource type:  ``ALIYUN::VPC::EIPAssociation``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "EIPAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::EIPAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(EIPAssociation, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> typing.Any:
        """
        :Attribute: AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
        """
        return jsii.get(self, "attrAllocationId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> typing.Any:
        """
        :Attribute: EipAddress: IP address of created EIP.
        """
        return jsii.get(self, "attrEipAddress")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.EIPAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "allocation_id": "allocationId",
        "instance_id": "instanceId",
        "mode": "mode",
        "private_ip_address": "privateIpAddress",
    },
)
class EIPAssociationProps:
    def __init__(
        self,
        *,
        allocation_id: builtins.str,
        instance_id: builtins.str,
        mode: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::EIPAssociation``.

        :param allocation_id: 
        :param instance_id: 
        :param mode: 
        :param private_ip_address: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "allocation_id": allocation_id,
            "instance_id": instance_id,
        }
        if mode is not None:
            self._values["mode"] = mode
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address

    @builtins.property
    def allocation_id(self) -> builtins.str:
        """
        :Property: allocationId: EIP instance id to bind.
        """
        result = self._values.get("allocation_id")
        assert result is not None, "Required property 'allocation_id' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        mode: The mode of association. Valid values:
        NAT(Default): NAT mode.
        BINDED: Cut-through mode.
        MULTI_BINDED: Multi-EIP to ENI mode.
        This is required only when the value of InstanceType is NetworkInterface.
        """
        result = self._values.get("mode")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        privateIpAddress: An IP address in the CIDR block of the VSwitch.
        If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        """
        result = self._values.get("private_ip_address")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EIPAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.EIPProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "bandwidth": "bandwidth",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "isp": "isp",
        "name": "name",
        "netmode": "netmode",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class EIPProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[jsii.Number] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        isp: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        netmode: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::EIP``.

        :param auto_pay: 
        :param bandwidth: 
        :param deletion_protection: 
        :param description: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param isp: 
        :param name: 
        :param netmode: 
        :param period: 
        :param pricing_cycle: 
        :param resource_group_id: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if netmode is not None:
            self._values["netmode"] = netmode
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Automatic Payment. Default is false.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def bandwidth(self) -> typing.Optional[jsii.Number]:
        """
        :Property: bandwidth: Bandwidth for the output network. Default is 5MB.
        """
        result = self._values.get("bandwidth")
        return result

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        """
        result = self._values.get("deletion_protection")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The resource charge type. Default value is Postpaid
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def isp(self) -> typing.Optional[builtins.str]:
        """
        :Property: isp: ISP tag for finance cloud region. only for cn-hangzhou and cn-qingdao region), if you are not finance cloud user, this value will be ignore.
        """
        result = self._values.get("isp")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def netmode(self) -> typing.Optional[builtins.str]:
        """
        :Property: netmode: The network type. Valid value: public (public network).
        """
        result = self._values.get("netmode")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EIPProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Eip(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.Eip",
):
    """A ROS resource type:  ``ALIYUN::VPC::EIP``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional[EIPProps] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::EIP``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Eip, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> typing.Any:
        """
        :Attribute: AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
        """
        return jsii.get(self, "attrAllocationId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> typing.Any:
        """
        :Attribute: EipAddress: IP address of created EIP.
        """
        return jsii.get(self, "attrEipAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order ID of prepaid EIP instance.
        """
        return jsii.get(self, "attrOrderId")


class GrantInstanceToCen(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.GrantInstanceToCen",
):
    """A ROS resource type:  ``ALIYUN::VPC::GrantInstanceToCen``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GrantInstanceToCenProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::GrantInstanceToCen``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(GrantInstanceToCen, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> typing.Any:
        """
        :Attribute: CenId: The ID of the CEN instance to be authorized.
        """
        return jsii.get(self, "attrCenId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The ID of the network instance.
        """
        return jsii.get(self, "attrInstanceId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.GrantInstanceToCenProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "cen_owner_id": "cenOwnerId",
        "instance_id": "instanceId",
        "instance_type": "instanceType",
    },
)
class GrantInstanceToCenProps:
    def __init__(
        self,
        *,
        cen_id: builtins.str,
        cen_owner_id: jsii.Number,
        instance_id: builtins.str,
        instance_type: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::GrantInstanceToCen``.

        :param cen_id: 
        :param cen_owner_id: 
        :param instance_id: 
        :param instance_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "cen_owner_id": cen_owner_id,
            "instance_id": instance_id,
            "instance_type": instance_type,
        }

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance to be authorized.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

    @builtins.property
    def cen_owner_id(self) -> jsii.Number:
        """
        :Property: cenOwnerId: The UID of the account to which the target CEN instance belongs.
        """
        result = self._values.get("cen_owner_id")
        assert result is not None, "Required property 'cen_owner_id' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the network instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def instance_type(self) -> builtins.str:
        """
        :Property:

        instanceType: The type of the network instance. Valid values:
        VPC: Virtual Private Cloud (VPC).
        VBR: Virtual Border Router (VBR).
        CCN: Cloud Connect Network (CCN).
        """
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GrantInstanceToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Ipv6Gateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.Ipv6Gateway",
):
    """A ROS resource type:  ``ALIYUN::VPC::Ipv6Gateway``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "Ipv6GatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::Ipv6Gateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Ipv6Gateway, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpv6GatewayId")
    def attr_ipv6_gateway_id(self) -> typing.Any:
        """
        :Attribute: Ipv6GatewayId: ID IPv6 gateway.
        """
        return jsii.get(self, "attrIpv6GatewayId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.Ipv6GatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "name": "name",
        "spec": "spec",
    },
)
class Ipv6GatewayProps:
    def __init__(
        self,
        *,
        vpc_id: builtins.str,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        spec: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::Ipv6Gateway``.

        :param vpc_id: 
        :param description: 
        :param name: 
        :param spec: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: To open VPC ID IPv6 gateway.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of IPv6 gateway.
        Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: Name of the IPv6 gateway.
        Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spec: Specifications IPv6 gateway, the value:
        Small (default): Free.
        Medium: Enterprise Edition.
        Large: Enterprise Enhanced Edition.
        Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
        """
        result = self._values.get("spec")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Ipv6GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Ipv6InternetBandwidth(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.Ipv6InternetBandwidth",
):
    """A ROS resource type:  ``ALIYUN::VPC::Ipv6InternetBandwidth``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "Ipv6InternetBandwidthProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::Ipv6InternetBandwidth``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Ipv6InternetBandwidth, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetBandwidthId")
    def attr_internet_bandwidth_id(self) -> typing.Any:
        """
        :Attribute: InternetBandwidthId: Purchase of public network bandwidth.
        """
        return jsii.get(self, "attrInternetBandwidthId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.Ipv6InternetBandwidthProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "ipv6_address_id": "ipv6AddressId",
        "ipv6_gateway_id": "ipv6GatewayId",
        "internet_charge_type": "internetChargeType",
    },
)
class Ipv6InternetBandwidthProps:
    def __init__(
        self,
        *,
        bandwidth: jsii.Number,
        ipv6_address_id: builtins.str,
        ipv6_gateway_id: builtins.str,
        internet_charge_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::Ipv6InternetBandwidth``.

        :param bandwidth: 
        :param ipv6_address_id: 
        :param ipv6_gateway_id: 
        :param internet_charge_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
            "ipv6_address_id": ipv6_address_id,
            "ipv6_gateway_id": ipv6_gateway_id,
        }
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type

    @builtins.property
    def bandwidth(self) -> jsii.Number:
        """
        :Property:

        bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
        When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
        When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
        Small (default free version), the public network bandwidth range 1-500.
        Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
        Large (Enterprise Edition), the public network bandwidth range 1-2000.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def ipv6_address_id(self) -> builtins.str:
        """
        :Property: ipv6AddressId: ID of IPv6 address.
        """
        result = self._values.get("ipv6_address_id")
        assert result is not None, "Required property 'ipv6_address_id' is missing"
        return result

    @builtins.property
    def ipv6_gateway_id(self) -> builtins.str:
        """
        :Property: ipv6GatewayId: ID of IPv6 gateway.
        """
        result = self._values.get("ipv6_gateway_id")
        assert result is not None, "Required property 'ipv6_gateway_id' is missing"
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: IPv6 public network bandwidth billing, value:
        PayByTraffic: by using the traffic accounting.
        PayByBandwidth (default): Bandwidth billing.
        """
        result = self._values.get("internet_charge_type")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Ipv6InternetBandwidthProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NatGateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.NatGateway",
):
    """A ROS resource type:  ``ALIYUN::VPC::NatGateway``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "NatGatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::NatGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(NatGateway, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrForwardTableId")
    def attr_forward_table_id(self) -> typing.Any:
        """
        :Attribute: ForwardTableId: The forward table id.
        """
        return jsii.get(self, "attrForwardTableId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNatGatewayId")
    def attr_nat_gateway_id(self) -> typing.Any:
        """
        :Attribute: NatGatewayId: The Id of created NAT gateway.
        """
        return jsii.get(self, "attrNatGatewayId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSNatTableId")
    def attr_s_nat_table_id(self) -> typing.Any:
        """
        :Attribute: SNatTableId: The SNAT table id.
        """
        return jsii.get(self, "attrSNatTableId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.NatGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "auto_pay": "autoPay",
        "deletion_force": "deletionForce",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "duration": "duration",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "nat_gateway_name": "natGatewayName",
        "nat_type": "natType",
        "pricing_cycle": "pricingCycle",
        "spec": "spec",
        "tags": "tags",
    },
)
class NatGatewayProps:
    def __init__(
        self,
        *,
        vpc_id: builtins.str,
        v_switch_id: builtins.str,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        duration: typing.Optional[jsii.Number] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        nat_gateway_name: typing.Optional[builtins.str] = None,
        nat_type: typing.Optional[builtins.str] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        spec: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::NatGateway``.

        :param vpc_id: 
        :param v_switch_id: 
        :param auto_pay: 
        :param deletion_force: 
        :param deletion_protection: 
        :param description: 
        :param duration: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param nat_gateway_name: 
        :param nat_type: 
        :param pricing_cycle: 
        :param spec: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if duration is not None:
            self._values["duration"] = duration
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if nat_gateway_name is not None:
            self._values["nat_gateway_name"] = nat_gateway_name
        if nat_type is not None:
            self._values["nat_type"] = nat_type
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if spec is not None:
            self._values["spec"] = spec
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The VPC id to create NAT gateway.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The VSwitch id to create NAT gateway.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Specifies whether to enable automatic payment. Default is false.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
        """
        result = self._values.get("deletion_force")
        return result

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        """
        result = self._values.get("deletion_protection")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: The subscription duration. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: The billing method for the NAT gateway. Valid values:
        PayBySpec: billed on a pay-by-specification basis.
        PayByLcu: billed on a pay-by-LCU basis.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def nat_gateway_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("nat_gateway_name")
        return result

    @builtins.property
    def nat_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        natType: The type of the NAT gateway. Valid values:

        - Enhanced: enhanced NAT gateway.
        """
        result = self._values.get("nat_type")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Price cycle of the resource. This property has no default value.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
        """
        result = self._values.get("spec")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NatGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PeeringRouterInterfaceBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBinding",
):
    """A ROS resource type:  ``ALIYUN::VPC::PeeringRouterInterfaceBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PeeringRouterInterfaceBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(PeeringRouterInterfaceBinding, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> typing.Any:
        """
        :Attribute: RouterInterfaceId: The RouterInterface ID.
        """
        return jsii.get(self, "attrRouterInterfaceId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "opposite_interface_id": "oppositeInterfaceId",
        "router_interface_id": "routerInterfaceId",
        "opposite_interface_owner_id": "oppositeInterfaceOwnerId",
        "opposite_router_id": "oppositeRouterId",
    },
)
class PeeringRouterInterfaceBindingProps:
    def __init__(
        self,
        *,
        opposite_interface_id: builtins.str,
        router_interface_id: builtins.str,
        opposite_interface_owner_id: typing.Optional[builtins.str] = None,
        opposite_router_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.

        :param opposite_interface_id: 
        :param router_interface_id: 
        :param opposite_interface_owner_id: 
        :param opposite_router_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "opposite_interface_id": opposite_interface_id,
            "router_interface_id": router_interface_id,
        }
        if opposite_interface_owner_id is not None:
            self._values["opposite_interface_owner_id"] = opposite_interface_owner_id
        if opposite_router_id is not None:
            self._values["opposite_router_id"] = opposite_router_id

    @builtins.property
    def opposite_interface_id(self) -> builtins.str:
        """
        :Property: oppositeInterfaceId: The connection peer RouterInterface ID.
        """
        result = self._values.get("opposite_interface_id")
        assert result is not None, "Required property 'opposite_interface_id' is missing"
        return result

    @builtins.property
    def router_interface_id(self) -> builtins.str:
        """
        :Property: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        """
        result = self._values.get("router_interface_id")
        assert result is not None, "Required property 'router_interface_id' is missing"
        return result

    @builtins.property
    def opposite_interface_owner_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        """
        result = self._values.get("opposite_interface_owner_id")
        return result

    @builtins.property
    def opposite_router_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterId: Router ID of the connection peer RouterInterface.
        """
        result = self._values.get("opposite_router_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PeeringRouterInterfaceBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PeeringRouterInterfaceConnection(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnection",
):
    """A ROS resource type:  ``ALIYUN::VPC::PeeringRouterInterfaceConnection``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PeeringRouterInterfaceConnectionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(PeeringRouterInterfaceConnection, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOppositeInterfaceId")
    def attr_opposite_interface_id(self) -> typing.Any:
        """
        :Attribute: OppositeInterfaceId: The receiver RouterInterface ID.
        """
        return jsii.get(self, "attrOppositeInterfaceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> typing.Any:
        """
        :Attribute: RouterInterfaceId: The initiator RouterInterface ID.
        """
        return jsii.get(self, "attrRouterInterfaceId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "opposite_interface_id": "oppositeInterfaceId",
        "router_interface_id": "routerInterfaceId",
    },
)
class PeeringRouterInterfaceConnectionProps:
    def __init__(
        self,
        *,
        opposite_interface_id: builtins.str,
        router_interface_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.

        :param opposite_interface_id: 
        :param router_interface_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "opposite_interface_id": opposite_interface_id,
            "router_interface_id": router_interface_id,
        }

    @builtins.property
    def opposite_interface_id(self) -> builtins.str:
        """
        :Property: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
        """
        result = self._values.get("opposite_interface_id")
        assert result is not None, "Required property 'opposite_interface_id' is missing"
        return result

    @builtins.property
    def router_interface_id(self) -> builtins.str:
        """
        :Property: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
        """
        result = self._values.get("router_interface_id")
        assert result is not None, "Required property 'router_interface_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PeeringRouterInterfaceConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCommonBandwidthPackage(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage",
):
    """A ROS template type:  ``ALIYUN::VPC::CommonBandwidthPackage``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCommonBandwidthPackageProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::CommonBandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCommonBandwidthPackage, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> typing.Any:
        """
        :Attribute: BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        """
        return jsii.get(self, "attrBandwidthPackageId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
        """
        return jsii.get(self, "bandwidth")

    @bandwidth.setter # type: ignore
    def bandwidth(self, value: jsii.Number) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the Internet Shared Bandwidth instance.
        The description must be 2 to 256 characters in length. It must start with a letter,
        and cannot start with http:// or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
        PayByBandwidth (default): Billed by bandwidth.
        PayBy95: Charged at Enhanced 95.
        """
        return jsii.get(self, "internetChargeType")

    @internet_charge_type.setter # type: ignore
    def internet_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="isp")
    def isp(self) -> typing.Optional[builtins.str]:
        """
        :Property: isp: Line type of EIP, value: BGP (multi-line).
        """
        return jsii.get(self, "isp")

    @isp.setter # type: ignore
    def isp(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "isp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the Internet Shared Bandwidth instance.
        The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ratio")
    def ratio(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
        Note This parameter is only supported on the China site.
        """
        return jsii.get(self, "ratio")

    @ratio.setter # type: ignore
    def ratio(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "ratio", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zone")
    def zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: zone: Zone Id.
        """
        return jsii.get(self, "zone")

    @zone.setter # type: ignore
    def zone(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "zone", value)


class RosCommonBandwidthPackageIp(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp",
):
    """A ROS template type:  ``ALIYUN::VPC::CommonBandwidthPackageIp``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCommonBandwidthPackageIpProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::CommonBandwidthPackageIp``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCommonBandwidthPackageIp, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAllocationIds")
    def attr_allocation_ids(self) -> typing.Any:
        """
        :Attribute: AllocationIds: All eip allocation ids of common bandwidth package.
        """
        return jsii.get(self, "attrAllocationIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpAddresses")
    def attr_ip_addresses(self) -> typing.Any:
        """
        :Attribute: IpAddresses: All eip addresses of common bandwidth package.
        """
        return jsii.get(self, "attrIpAddresses")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(self) -> builtins.str:
        """
        :Property: bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        """
        return jsii.get(self, "bandwidthPackageId")

    @bandwidth_package_id.setter # type: ignore
    def bandwidth_package_id(self, value: builtins.str) -> None:
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="eips")
    def eips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]]:
        """
        :Property: eips: List of eip associated with the Internet Shared Bandwidth instance.
        """
        return jsii.get(self, "eips")

    @eips.setter # type: ignore
    def eips(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]],
    ) -> None:
        jsii.set(self, "eips", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty",
        jsii_struct_bases=[],
        name_mapping={"allocation_id": "allocationId", "bandwidth": "bandwidth"},
    )
    class EipsProperty:
        def __init__(
            self,
            *,
            allocation_id: builtins.str,
            bandwidth: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param allocation_id: 
            :param bandwidth: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "allocation_id": allocation_id,
            }
            if bandwidth is not None:
                self._values["bandwidth"] = bandwidth

        @builtins.property
        def allocation_id(self) -> builtins.str:
            """
            :Property: allocationId: The ID of the EIP instance.
            """
            result = self._values.get("allocation_id")
            assert result is not None, "Required property 'allocation_id' is missing"
            return result

        @builtins.property
        def bandwidth(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            bandwidth: The maximum allocatable bandwidth value in Mbps within the shared bandwidth.
            0 which means no limit.
            Default to no limit.
            """
            result = self._values.get("bandwidth")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EipsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIpProps",
    jsii_struct_bases=[],
    name_mapping={"bandwidth_package_id": "bandwidthPackageId", "eips": "eips"},
)
class RosCommonBandwidthPackageIpProps:
    def __init__(
        self,
        *,
        bandwidth_package_id: builtins.str,
        eips: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCommonBandwidthPackageIp.EipsProperty]]],
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::CommonBandwidthPackageIp``.

        :param bandwidth_package_id: 
        :param eips: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth_package_id": bandwidth_package_id,
            "eips": eips,
        }

    @builtins.property
    def bandwidth_package_id(self) -> builtins.str:
        """
        :Property: bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        """
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return result

    @builtins.property
    def eips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCommonBandwidthPackageIp.EipsProperty]]]:
        """
        :Property: eips: List of eip associated with the Internet Shared Bandwidth instance.
        """
        result = self._values.get("eips")
        assert result is not None, "Required property 'eips' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCommonBandwidthPackageIpProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "description": "description",
        "internet_charge_type": "internetChargeType",
        "isp": "isp",
        "name": "name",
        "ratio": "ratio",
        "resource_group_id": "resourceGroupId",
        "zone": "zone",
    },
)
class RosCommonBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: jsii.Number,
        description: typing.Optional[builtins.str] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        isp: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        ratio: typing.Optional[jsii.Number] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        zone: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::CommonBandwidthPackage``.

        :param bandwidth: 
        :param description: 
        :param internet_charge_type: 
        :param isp: 
        :param name: 
        :param ratio: 
        :param resource_group_id: 
        :param zone: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
        }
        if description is not None:
            self._values["description"] = description
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if ratio is not None:
            self._values["ratio"] = ratio
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone is not None:
            self._values["zone"] = zone

    @builtins.property
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the Internet Shared Bandwidth instance.
        The description must be 2 to 256 characters in length. It must start with a letter,
        and cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
        PayByBandwidth (default): Billed by bandwidth.
        PayBy95: Charged at Enhanced 95.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def isp(self) -> typing.Optional[builtins.str]:
        """
        :Property: isp: Line type of EIP, value: BGP (multi-line).
        """
        result = self._values.get("isp")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the Internet Shared Bandwidth instance.
        The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def ratio(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
        Note This parameter is only supported on the China site.
        """
        result = self._values.get("ratio")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def zone(self) -> typing.Optional[builtins.str]:
        """
        :Property: zone: Zone Id.
        """
        result = self._values.get("zone")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCommonBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomerGateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosCustomerGateway",
):
    """A ROS template type:  ``ALIYUN::VPC::CustomerGateway``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCustomerGatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::CustomerGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCustomerGateway, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCustomerGatewayId")
    def attr_customer_gateway_id(self) -> typing.Any:
        """
        :Attribute: CustomerGatewayId: The ID of the user gateway.
        """
        return jsii.get(self, "attrCustomerGatewayId")

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
    @jsii.member(jsii_name="ipAddress")
    def ip_address(self) -> builtins.str:
        """
        :Property: ipAddress: The IP address of the user gateway.
        """
        return jsii.get(self, "ipAddress")

    @ip_address.setter # type: ignore
    def ip_address(self, value: builtins.str) -> None:
        jsii.set(self, "ipAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the user gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the user gateway.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosCustomerGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "ip_address": "ipAddress",
        "description": "description",
        "name": "name",
    },
)
class RosCustomerGatewayProps:
    def __init__(
        self,
        *,
        ip_address: builtins.str,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::CustomerGateway``.

        :param ip_address: 
        :param description: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ip_address": ip_address,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ip_address(self) -> builtins.str:
        """
        :Property: ipAddress: The IP address of the user gateway.
        """
        result = self._values.get("ip_address")
        assert result is not None, "Required property 'ip_address' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the user gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the user gateway.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomerGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEIP(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosEIP",
):
    """A ROS template type:  ``ALIYUN::VPC::EIP``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEIPProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::EIP``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosEIP, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> typing.Any:
        """
        :Attribute: AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
        """
        return jsii.get(self, "attrAllocationId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> typing.Any:
        """
        :Attribute: EipAddress: IP address of created EIP.
        """
        return jsii.get(self, "attrEipAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order ID of prepaid EIP instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Automatic Payment. Default is false.
        """
        return jsii.get(self, "autoPay")

    @auto_pay.setter # type: ignore
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> typing.Optional[jsii.Number]:
        """
        :Property: bandwidth: Bandwidth for the output network. Default is 5MB.
        """
        return jsii.get(self, "bandwidth")

    @bandwidth.setter # type: ignore
    def bandwidth(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        """
        return jsii.get(self, "deletionProtection")

    @deletion_protection.setter # type: ignore
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The resource charge type. Default value is Postpaid
        """
        return jsii.get(self, "instanceChargeType")

    @instance_charge_type.setter # type: ignore
    def instance_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        """
        return jsii.get(self, "internetChargeType")

    @internet_charge_type.setter # type: ignore
    def internet_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="isp")
    def isp(self) -> typing.Optional[builtins.str]:
        """
        :Property: isp: ISP tag for finance cloud region. only for cn-hangzhou and cn-qingdao region), if you are not finance cloud user, this value will be ignore.
        """
        return jsii.get(self, "isp")

    @isp.setter # type: ignore
    def isp(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "isp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="netmode")
    def netmode(self) -> typing.Optional[builtins.str]:
        """
        :Property: netmode: The network type. Valid value: public (public network).
        """
        return jsii.get(self, "netmode")

    @netmode.setter # type: ignore
    def netmode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "netmode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

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
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)


class RosEIPAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPAssociation",
):
    """A ROS template type:  ``ALIYUN::VPC::EIPAssociation``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEIPAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::EIPAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosEIPAssociation, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> typing.Any:
        """
        :Attribute: AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
        """
        return jsii.get(self, "attrAllocationId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> typing.Any:
        """
        :Attribute: EipAddress: IP address of created EIP.
        """
        return jsii.get(self, "attrEipAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="allocationId")
    def allocation_id(self) -> builtins.str:
        """
        :Property: allocationId: EIP instance id to bind.
        """
        return jsii.get(self, "allocationId")

    @allocation_id.setter # type: ignore
    def allocation_id(self, value: builtins.str) -> None:
        jsii.set(self, "allocationId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mode")
    def mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        mode: The mode of association. Valid values:
        NAT(Default): NAT mode.
        BINDED: Cut-through mode.
        MULTI_BINDED: Multi-EIP to ENI mode.
        This is required only when the value of InstanceType is NetworkInterface.
        """
        return jsii.get(self, "mode")

    @mode.setter # type: ignore
    def mode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "mode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        privateIpAddress: An IP address in the CIDR block of the VSwitch.
        If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        """
        return jsii.get(self, "privateIpAddress")

    @private_ip_address.setter # type: ignore
    def private_ip_address(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "privateIpAddress", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "allocation_id": "allocationId",
        "instance_id": "instanceId",
        "mode": "mode",
        "private_ip_address": "privateIpAddress",
    },
)
class RosEIPAssociationProps:
    def __init__(
        self,
        *,
        allocation_id: builtins.str,
        instance_id: builtins.str,
        mode: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::EIPAssociation``.

        :param allocation_id: 
        :param instance_id: 
        :param mode: 
        :param private_ip_address: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "allocation_id": allocation_id,
            "instance_id": instance_id,
        }
        if mode is not None:
            self._values["mode"] = mode
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address

    @builtins.property
    def allocation_id(self) -> builtins.str:
        """
        :Property: allocationId: EIP instance id to bind.
        """
        result = self._values.get("allocation_id")
        assert result is not None, "Required property 'allocation_id' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        mode: The mode of association. Valid values:
        NAT(Default): NAT mode.
        BINDED: Cut-through mode.
        MULTI_BINDED: Multi-EIP to ENI mode.
        This is required only when the value of InstanceType is NetworkInterface.
        """
        result = self._values.get("mode")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        privateIpAddress: An IP address in the CIDR block of the VSwitch.
        If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        """
        result = self._values.get("private_ip_address")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEIPAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "bandwidth": "bandwidth",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "isp": "isp",
        "name": "name",
        "netmode": "netmode",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosEIPProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[jsii.Number] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        isp: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        netmode: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::EIP``.

        :param auto_pay: 
        :param bandwidth: 
        :param deletion_protection: 
        :param description: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param isp: 
        :param name: 
        :param netmode: 
        :param period: 
        :param pricing_cycle: 
        :param resource_group_id: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if netmode is not None:
            self._values["netmode"] = netmode
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Automatic Payment. Default is false.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def bandwidth(self) -> typing.Optional[jsii.Number]:
        """
        :Property: bandwidth: Bandwidth for the output network. Default is 5MB.
        """
        result = self._values.get("bandwidth")
        return result

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        """
        result = self._values.get("deletion_protection")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The resource charge type. Default value is Postpaid
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def isp(self) -> typing.Optional[builtins.str]:
        """
        :Property: isp: ISP tag for finance cloud region. only for cn-hangzhou and cn-qingdao region), if you are not finance cloud user, this value will be ignore.
        """
        result = self._values.get("isp")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def netmode(self) -> typing.Optional[builtins.str]:
        """
        :Property: netmode: The network type. Valid value: public (public network).
        """
        result = self._values.get("netmode")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEIPProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGrantInstanceToCen(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosGrantInstanceToCen",
):
    """A ROS template type:  ``ALIYUN::VPC::GrantInstanceToCen``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGrantInstanceToCenProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::GrantInstanceToCen``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosGrantInstanceToCen, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> typing.Any:
        """
        :Attribute: CenId: The ID of the CEN instance to be authorized.
        """
        return jsii.get(self, "attrCenId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The ID of the network instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance to be authorized.
        """
        return jsii.get(self, "cenId")

    @cen_id.setter # type: ignore
    def cen_id(self, value: builtins.str) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenOwnerId")
    def cen_owner_id(self) -> jsii.Number:
        """
        :Property: cenOwnerId: The UID of the account to which the target CEN instance belongs.
        """
        return jsii.get(self, "cenOwnerId")

    @cen_owner_id.setter # type: ignore
    def cen_owner_id(self, value: jsii.Number) -> None:
        jsii.set(self, "cenOwnerId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the network instance.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> builtins.str:
        """
        :Property:

        instanceType: The type of the network instance. Valid values:
        VPC: Virtual Private Cloud (VPC).
        VBR: Virtual Border Router (VBR).
        CCN: Cloud Connect Network (CCN).
        """
        return jsii.get(self, "instanceType")

    @instance_type.setter # type: ignore
    def instance_type(self, value: builtins.str) -> None:
        jsii.set(self, "instanceType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "cen_owner_id": "cenOwnerId",
        "instance_id": "instanceId",
        "instance_type": "instanceType",
    },
)
class RosGrantInstanceToCenProps:
    def __init__(
        self,
        *,
        cen_id: builtins.str,
        cen_owner_id: jsii.Number,
        instance_id: builtins.str,
        instance_type: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::GrantInstanceToCen``.

        :param cen_id: 
        :param cen_owner_id: 
        :param instance_id: 
        :param instance_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "cen_owner_id": cen_owner_id,
            "instance_id": instance_id,
            "instance_type": instance_type,
        }

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance to be authorized.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

    @builtins.property
    def cen_owner_id(self) -> jsii.Number:
        """
        :Property: cenOwnerId: The UID of the account to which the target CEN instance belongs.
        """
        result = self._values.get("cen_owner_id")
        assert result is not None, "Required property 'cen_owner_id' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the network instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def instance_type(self) -> builtins.str:
        """
        :Property:

        instanceType: The type of the network instance. Valid values:
        VPC: Virtual Private Cloud (VPC).
        VBR: Virtual Border Router (VBR).
        CCN: Cloud Connect Network (CCN).
        """
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGrantInstanceToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpv6Gateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosIpv6Gateway",
):
    """A ROS template type:  ``ALIYUN::VPC::Ipv6Gateway``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosIpv6GatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::Ipv6Gateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosIpv6Gateway, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrIpv6GatewayId")
    def attr_ipv6_gateway_id(self) -> typing.Any:
        """
        :Attribute: Ipv6GatewayId: ID IPv6 gateway.
        """
        return jsii.get(self, "attrIpv6GatewayId")

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
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: To open VPC ID IPv6 gateway.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of IPv6 gateway.
        Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: Name of the IPv6 gateway.
        Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spec")
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spec: Specifications IPv6 gateway, the value:
        Small (default): Free.
        Medium: Enterprise Edition.
        Large: Enterprise Enhanced Edition.
        Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
        """
        return jsii.get(self, "spec")

    @spec.setter # type: ignore
    def spec(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "spec", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosIpv6GatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "name": "name",
        "spec": "spec",
    },
)
class RosIpv6GatewayProps:
    def __init__(
        self,
        *,
        vpc_id: builtins.str,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        spec: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::Ipv6Gateway``.

        :param vpc_id: 
        :param description: 
        :param name: 
        :param spec: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: To open VPC ID IPv6 gateway.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of IPv6 gateway.
        Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: Name of the IPv6 gateway.
        Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spec: Specifications IPv6 gateway, the value:
        Small (default): Free.
        Medium: Enterprise Edition.
        Large: Enterprise Enhanced Edition.
        Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
        """
        result = self._values.get("spec")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpv6GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpv6InternetBandwidth(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidth",
):
    """A ROS template type:  ``ALIYUN::VPC::Ipv6InternetBandwidth``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosIpv6InternetBandwidthProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::Ipv6InternetBandwidth``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosIpv6InternetBandwidth, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrInternetBandwidthId")
    def attr_internet_bandwidth_id(self) -> typing.Any:
        """
        :Attribute: InternetBandwidthId: Purchase of public network bandwidth.
        """
        return jsii.get(self, "attrInternetBandwidthId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> jsii.Number:
        """
        :Property:

        bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
        When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
        When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
        Small (default free version), the public network bandwidth range 1-500.
        Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
        Large (Enterprise Edition), the public network bandwidth range 1-2000.
        """
        return jsii.get(self, "bandwidth")

    @bandwidth.setter # type: ignore
    def bandwidth(self, value: jsii.Number) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ipv6AddressId")
    def ipv6_address_id(self) -> builtins.str:
        """
        :Property: ipv6AddressId: ID of IPv6 address.
        """
        return jsii.get(self, "ipv6AddressId")

    @ipv6_address_id.setter # type: ignore
    def ipv6_address_id(self, value: builtins.str) -> None:
        jsii.set(self, "ipv6AddressId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ipv6GatewayId")
    def ipv6_gateway_id(self) -> builtins.str:
        """
        :Property: ipv6GatewayId: ID of IPv6 gateway.
        """
        return jsii.get(self, "ipv6GatewayId")

    @ipv6_gateway_id.setter # type: ignore
    def ipv6_gateway_id(self, value: builtins.str) -> None:
        jsii.set(self, "ipv6GatewayId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: IPv6 public network bandwidth billing, value:
        PayByTraffic: by using the traffic accounting.
        PayByBandwidth (default): Bandwidth billing.
        """
        return jsii.get(self, "internetChargeType")

    @internet_charge_type.setter # type: ignore
    def internet_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internetChargeType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidthProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "ipv6_address_id": "ipv6AddressId",
        "ipv6_gateway_id": "ipv6GatewayId",
        "internet_charge_type": "internetChargeType",
    },
)
class RosIpv6InternetBandwidthProps:
    def __init__(
        self,
        *,
        bandwidth: jsii.Number,
        ipv6_address_id: builtins.str,
        ipv6_gateway_id: builtins.str,
        internet_charge_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::Ipv6InternetBandwidth``.

        :param bandwidth: 
        :param ipv6_address_id: 
        :param ipv6_gateway_id: 
        :param internet_charge_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
            "ipv6_address_id": ipv6_address_id,
            "ipv6_gateway_id": ipv6_gateway_id,
        }
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type

    @builtins.property
    def bandwidth(self) -> jsii.Number:
        """
        :Property:

        bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
        When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
        When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
        Small (default free version), the public network bandwidth range 1-500.
        Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
        Large (Enterprise Edition), the public network bandwidth range 1-2000.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def ipv6_address_id(self) -> builtins.str:
        """
        :Property: ipv6AddressId: ID of IPv6 address.
        """
        result = self._values.get("ipv6_address_id")
        assert result is not None, "Required property 'ipv6_address_id' is missing"
        return result

    @builtins.property
    def ipv6_gateway_id(self) -> builtins.str:
        """
        :Property: ipv6GatewayId: ID of IPv6 gateway.
        """
        result = self._values.get("ipv6_gateway_id")
        assert result is not None, "Required property 'ipv6_gateway_id' is missing"
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: IPv6 public network bandwidth billing, value:
        PayByTraffic: by using the traffic accounting.
        PayByBandwidth (default): Bandwidth billing.
        """
        result = self._values.get("internet_charge_type")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpv6InternetBandwidthProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNatGateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosNatGateway",
):
    """A ROS template type:  ``ALIYUN::VPC::NatGateway``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosNatGatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::NatGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosNatGateway, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrForwardTableId")
    def attr_forward_table_id(self) -> typing.Any:
        """
        :Attribute: ForwardTableId: The forward table id.
        """
        return jsii.get(self, "attrForwardTableId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNatGatewayId")
    def attr_nat_gateway_id(self) -> typing.Any:
        """
        :Attribute: NatGatewayId: The Id of created NAT gateway.
        """
        return jsii.get(self, "attrNatGatewayId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSNatTableId")
    def attr_s_nat_table_id(self) -> typing.Any:
        """
        :Attribute: SNatTableId: The SNAT table id.
        """
        return jsii.get(self, "attrSNatTableId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The VPC id to create NAT gateway.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The VSwitch id to create NAT gateway.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: builtins.str) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Specifies whether to enable automatic payment. Default is false.
        """
        return jsii.get(self, "autoPay")

    @auto_pay.setter # type: ignore
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
        """
        return jsii.get(self, "deletionForce")

    @deletion_force.setter # type: ignore
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        """
        return jsii.get(self, "deletionProtection")

    @deletion_protection.setter # type: ignore
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="duration")
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: The subscription duration. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        return jsii.get(self, "duration")

    @duration.setter # type: ignore
    def duration(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
        """
        return jsii.get(self, "instanceChargeType")

    @instance_charge_type.setter # type: ignore
    def instance_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: The billing method for the NAT gateway. Valid values:
        PayBySpec: billed on a pay-by-specification basis.
        PayByLcu: billed on a pay-by-LCU basis.
        """
        return jsii.get(self, "internetChargeType")

    @internet_charge_type.setter # type: ignore
    def internet_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="natGatewayName")
    def nat_gateway_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        return jsii.get(self, "natGatewayName")

    @nat_gateway_name.setter # type: ignore
    def nat_gateway_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "natGatewayName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="natType")
    def nat_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        natType: The type of the NAT gateway. Valid values:

        - Enhanced: enhanced NAT gateway.
        """
        return jsii.get(self, "natType")

    @nat_type.setter # type: ignore
    def nat_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "natType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Price cycle of the resource. This property has no default value.
        """
        return jsii.get(self, "pricingCycle")

    @pricing_cycle.setter # type: ignore
    def pricing_cycle(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spec")
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
        """
        return jsii.get(self, "spec")

    @spec.setter # type: ignore
    def spec(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "spec", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosNatGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "auto_pay": "autoPay",
        "deletion_force": "deletionForce",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "duration": "duration",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "nat_gateway_name": "natGatewayName",
        "nat_type": "natType",
        "pricing_cycle": "pricingCycle",
        "spec": "spec",
        "tags": "tags",
    },
)
class RosNatGatewayProps:
    def __init__(
        self,
        *,
        vpc_id: builtins.str,
        v_switch_id: builtins.str,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        duration: typing.Optional[jsii.Number] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        nat_gateway_name: typing.Optional[builtins.str] = None,
        nat_type: typing.Optional[builtins.str] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        spec: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::NatGateway``.

        :param vpc_id: 
        :param v_switch_id: 
        :param auto_pay: 
        :param deletion_force: 
        :param deletion_protection: 
        :param description: 
        :param duration: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param nat_gateway_name: 
        :param nat_type: 
        :param pricing_cycle: 
        :param spec: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if duration is not None:
            self._values["duration"] = duration
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if nat_gateway_name is not None:
            self._values["nat_gateway_name"] = nat_gateway_name
        if nat_type is not None:
            self._values["nat_type"] = nat_type
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if spec is not None:
            self._values["spec"] = spec
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The VPC id to create NAT gateway.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The VSwitch id to create NAT gateway.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Specifies whether to enable automatic payment. Default is false.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
        """
        result = self._values.get("deletion_force")
        return result

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        """
        result = self._values.get("deletion_protection")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: The subscription duration. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: The billing method for the NAT gateway. Valid values:
        PayBySpec: billed on a pay-by-specification basis.
        PayByLcu: billed on a pay-by-LCU basis.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def nat_gateway_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("nat_gateway_name")
        return result

    @builtins.property
    def nat_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        natType: The type of the NAT gateway. Valid values:

        - Enhanced: enhanced NAT gateway.
        """
        result = self._values.get("nat_type")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Price cycle of the resource. This property has no default value.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
        """
        result = self._values.get("spec")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNatGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPeeringRouterInterfaceBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBinding",
):
    """A ROS template type:  ``ALIYUN::VPC::PeeringRouterInterfaceBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPeeringRouterInterfaceBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosPeeringRouterInterfaceBinding, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> typing.Any:
        """
        :Attribute: RouterInterfaceId: The RouterInterface ID.
        """
        return jsii.get(self, "attrRouterInterfaceId")

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
    @jsii.member(jsii_name="oppositeInterfaceId")
    def opposite_interface_id(self) -> builtins.str:
        """
        :Property: oppositeInterfaceId: The connection peer RouterInterface ID.
        """
        return jsii.get(self, "oppositeInterfaceId")

    @opposite_interface_id.setter # type: ignore
    def opposite_interface_id(self, value: builtins.str) -> None:
        jsii.set(self, "oppositeInterfaceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="routerInterfaceId")
    def router_interface_id(self) -> builtins.str:
        """
        :Property: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        """
        return jsii.get(self, "routerInterfaceId")

    @router_interface_id.setter # type: ignore
    def router_interface_id(self, value: builtins.str) -> None:
        jsii.set(self, "routerInterfaceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeInterfaceOwnerId")
    def opposite_interface_owner_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        """
        return jsii.get(self, "oppositeInterfaceOwnerId")

    @opposite_interface_owner_id.setter # type: ignore
    def opposite_interface_owner_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "oppositeInterfaceOwnerId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeRouterId")
    def opposite_router_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterId: Router ID of the connection peer RouterInterface.
        """
        return jsii.get(self, "oppositeRouterId")

    @opposite_router_id.setter # type: ignore
    def opposite_router_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "oppositeRouterId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "opposite_interface_id": "oppositeInterfaceId",
        "router_interface_id": "routerInterfaceId",
        "opposite_interface_owner_id": "oppositeInterfaceOwnerId",
        "opposite_router_id": "oppositeRouterId",
    },
)
class RosPeeringRouterInterfaceBindingProps:
    def __init__(
        self,
        *,
        opposite_interface_id: builtins.str,
        router_interface_id: builtins.str,
        opposite_interface_owner_id: typing.Optional[builtins.str] = None,
        opposite_router_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.

        :param opposite_interface_id: 
        :param router_interface_id: 
        :param opposite_interface_owner_id: 
        :param opposite_router_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "opposite_interface_id": opposite_interface_id,
            "router_interface_id": router_interface_id,
        }
        if opposite_interface_owner_id is not None:
            self._values["opposite_interface_owner_id"] = opposite_interface_owner_id
        if opposite_router_id is not None:
            self._values["opposite_router_id"] = opposite_router_id

    @builtins.property
    def opposite_interface_id(self) -> builtins.str:
        """
        :Property: oppositeInterfaceId: The connection peer RouterInterface ID.
        """
        result = self._values.get("opposite_interface_id")
        assert result is not None, "Required property 'opposite_interface_id' is missing"
        return result

    @builtins.property
    def router_interface_id(self) -> builtins.str:
        """
        :Property: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        """
        result = self._values.get("router_interface_id")
        assert result is not None, "Required property 'router_interface_id' is missing"
        return result

    @builtins.property
    def opposite_interface_owner_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        """
        result = self._values.get("opposite_interface_owner_id")
        return result

    @builtins.property
    def opposite_router_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterId: Router ID of the connection peer RouterInterface.
        """
        result = self._values.get("opposite_router_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPeeringRouterInterfaceBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPeeringRouterInterfaceConnection(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnection",
):
    """A ROS template type:  ``ALIYUN::VPC::PeeringRouterInterfaceConnection``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPeeringRouterInterfaceConnectionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosPeeringRouterInterfaceConnection, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrOppositeInterfaceId")
    def attr_opposite_interface_id(self) -> typing.Any:
        """
        :Attribute: OppositeInterfaceId: The receiver RouterInterface ID.
        """
        return jsii.get(self, "attrOppositeInterfaceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> typing.Any:
        """
        :Attribute: RouterInterfaceId: The initiator RouterInterface ID.
        """
        return jsii.get(self, "attrRouterInterfaceId")

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
    @jsii.member(jsii_name="oppositeInterfaceId")
    def opposite_interface_id(self) -> builtins.str:
        """
        :Property: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
        """
        return jsii.get(self, "oppositeInterfaceId")

    @opposite_interface_id.setter # type: ignore
    def opposite_interface_id(self, value: builtins.str) -> None:
        jsii.set(self, "oppositeInterfaceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="routerInterfaceId")
    def router_interface_id(self) -> builtins.str:
        """
        :Property: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
        """
        return jsii.get(self, "routerInterfaceId")

    @router_interface_id.setter # type: ignore
    def router_interface_id(self, value: builtins.str) -> None:
        jsii.set(self, "routerInterfaceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "opposite_interface_id": "oppositeInterfaceId",
        "router_interface_id": "routerInterfaceId",
    },
)
class RosPeeringRouterInterfaceConnectionProps:
    def __init__(
        self,
        *,
        opposite_interface_id: builtins.str,
        router_interface_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.

        :param opposite_interface_id: 
        :param router_interface_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "opposite_interface_id": opposite_interface_id,
            "router_interface_id": router_interface_id,
        }

    @builtins.property
    def opposite_interface_id(self) -> builtins.str:
        """
        :Property: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
        """
        result = self._values.get("opposite_interface_id")
        assert result is not None, "Required property 'opposite_interface_id' is missing"
        return result

    @builtins.property
    def router_interface_id(self) -> builtins.str:
        """
        :Property: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
        """
        result = self._values.get("router_interface_id")
        assert result is not None, "Required property 'router_interface_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPeeringRouterInterfaceConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouteTable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosRouteTable",
):
    """A ROS template type:  ``ALIYUN::VPC::RouteTable``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRouteTableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::RouteTable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRouteTable, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> typing.Any:
        """
        :Attribute: RouteTableId: The ID of the route table.
        """
        return jsii.get(self, "attrRouteTableId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouteTableName")
    def attr_route_table_name(self) -> typing.Any:
        """
        :Attribute: RouteTableName: The name of the route table.
        """
        return jsii.get(self, "attrRouteTableName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouteTableType")
    def attr_route_table_type(self) -> typing.Any:
        """
        :Attribute: RouteTableType: The type of the route table.
        """
        return jsii.get(self, "attrRouteTableType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> typing.Any:
        """
        :Attribute: VpcId: The ID of the VRouter to which the route table belongs.
        """
        return jsii.get(self, "attrVpcId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> typing.Any:
        """
        :Attribute: VSwitchIds: A list of VSwitches under the VPC.
        """
        return jsii.get(self, "attrVSwitchIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The ID of the VPC to which the custom route table belongs.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the route table.
        The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="routeTableName")
    def route_table_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        routeTableName: The name of the route table.
        The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        """
        return jsii.get(self, "routeTableName")

    @route_table_name.setter # type: ignore
    def route_table_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "routeTableName", value)


class RosRouteTableAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosRouteTableAssociation",
):
    """A ROS template type:  ``ALIYUN::VPC::RouteTableAssociation``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRouteTableAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::RouteTableAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRouteTableAssociation, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> typing.Any:
        """
        :Attribute: RouteTableId: The ID of the route table.
        """
        return jsii.get(self, "attrRouteTableId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> typing.Any:
        """
        :Attribute: VSwitchId: The VSwitch ID which the route table associated with.
        """
        return jsii.get(self, "attrVSwitchId")

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
    @jsii.member(jsii_name="routeTableId")
    def route_table_id(self) -> builtins.str:
        """
        :Property: routeTableId: The ID of the route table.
        """
        return jsii.get(self, "routeTableId")

    @route_table_id.setter # type: ignore
    def route_table_id(self, value: builtins.str) -> None:
        jsii.set(self, "routeTableId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: builtins.str) -> None:
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosRouteTableAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"route_table_id": "routeTableId", "v_switch_id": "vSwitchId"},
)
class RosRouteTableAssociationProps:
    def __init__(
        self,
        *,
        route_table_id: builtins.str,
        v_switch_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::RouteTableAssociation``.

        :param route_table_id: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "route_table_id": route_table_id,
            "v_switch_id": v_switch_id,
        }

    @builtins.property
    def route_table_id(self) -> builtins.str:
        """
        :Property: routeTableId: The ID of the route table.
        """
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteTableAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosRouteTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "route_table_name": "routeTableName",
        "tags": "tags",
    },
)
class RosRouteTableProps:
    def __init__(
        self,
        *,
        vpc_id: builtins.str,
        description: typing.Optional[builtins.str] = None,
        route_table_name: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::RouteTable``.

        :param vpc_id: 
        :param description: 
        :param route_table_name: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if route_table_name is not None:
            self._values["route_table_name"] = route_table_name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The ID of the VPC to which the custom route table belongs.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the route table.
        The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def route_table_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        routeTableName: The name of the route table.
        The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        """
        result = self._values.get("route_table_name")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouterInterface(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosRouterInterface",
):
    """A ROS template type:  ``ALIYUN::VPC::RouterInterface``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRouterInterfaceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::RouterInterface``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRouterInterface, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> typing.Any:
        """
        :Attribute: RouterInterfaceId: The ID of created RouterInterface.
        """
        return jsii.get(self, "attrRouterInterfaceId")

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
    @jsii.member(jsii_name="role")
    def role(self) -> builtins.str:
        """
        :Property: role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        """
        return jsii.get(self, "role")

    @role.setter # type: ignore
    def role(self, value: builtins.str) -> None:
        jsii.set(self, "role", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="routerId")
    def router_id(self) -> builtins.str:
        """
        :Property: routerId: The router ID to create RouterInterface.
        """
        return jsii.get(self, "routerId")

    @router_id.setter # type: ignore
    def router_id(self, value: builtins.str) -> None:
        jsii.set(self, "routerId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accessPointId")
    def access_point_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
        """
        return jsii.get(self, "accessPointId")

    @access_point_id.setter # type: ignore
    def access_point_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accessPointId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Indicates whether automatic payment is enabled. Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
        """
        return jsii.get(self, "autoPay")

    @auto_pay.setter # type: ignore
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="healthCheckSourceIp")
    def health_check_source_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        """
        return jsii.get(self, "healthCheckSourceIp")

    @health_check_source_ip.setter # type: ignore
    def health_check_source_ip(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "healthCheckSourceIp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="healthCheckTargetIp")
    def health_check_target_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        """
        return jsii.get(self, "healthCheckTargetIp")

    @health_check_target_ip.setter # type: ignore
    def health_check_target_ip(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "healthCheckTargetIp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        """
        return jsii.get(self, "instanceChargeType")

    @instance_charge_type.setter # type: ignore
    def instance_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeAccessPointId")
    def opposite_access_point_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
        """
        return jsii.get(self, "oppositeAccessPointId")

    @opposite_access_point_id.setter # type: ignore
    def opposite_access_point_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "oppositeAccessPointId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeInterfaceId")
    def opposite_interface_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceId: The ID of the peer router interface.
        """
        return jsii.get(self, "oppositeInterfaceId")

    @opposite_interface_id.setter # type: ignore
    def opposite_interface_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "oppositeInterfaceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeInterfaceOwnerId")
    def opposite_interface_owner_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
        """
        return jsii.get(self, "oppositeInterfaceOwnerId")

    @opposite_interface_owner_id.setter # type: ignore
    def opposite_interface_owner_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "oppositeInterfaceOwnerId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeRegionId")
    def opposite_region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
        """
        return jsii.get(self, "oppositeRegionId")

    @opposite_region_id.setter # type: ignore
    def opposite_region_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "oppositeRegionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeRouterId")
    def opposite_router_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterId: The router ID of the connection peer RouterInterface.
        """
        return jsii.get(self, "oppositeRouterId")

    @opposite_router_id.setter # type: ignore
    def opposite_router_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "oppositeRouterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeRouterType")
    def opposite_router_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        """
        return jsii.get(self, "oppositeRouterType")

    @opposite_router_type.setter # type: ignore
    def opposite_router_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "oppositeRouterType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        """
        return jsii.get(self, "pricingCycle")

    @pricing_cycle.setter # type: ignore
    def pricing_cycle(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="routerType")
    def router_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: routerType: Router type. Now support 'VRouter|VBR'
        """
        return jsii.get(self, "routerType")

    @router_type.setter # type: ignore
    def router_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "routerType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spec")
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        """
        return jsii.get(self, "spec")

    @spec.setter # type: ignore
    def spec(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "spec", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosRouterInterfaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "role": "role",
        "router_id": "routerId",
        "access_point_id": "accessPointId",
        "auto_pay": "autoPay",
        "description": "description",
        "health_check_source_ip": "healthCheckSourceIp",
        "health_check_target_ip": "healthCheckTargetIp",
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "opposite_access_point_id": "oppositeAccessPointId",
        "opposite_interface_id": "oppositeInterfaceId",
        "opposite_interface_owner_id": "oppositeInterfaceOwnerId",
        "opposite_region_id": "oppositeRegionId",
        "opposite_router_id": "oppositeRouterId",
        "opposite_router_type": "oppositeRouterType",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "router_type": "routerType",
        "spec": "spec",
    },
)
class RosRouterInterfaceProps:
    def __init__(
        self,
        *,
        role: builtins.str,
        router_id: builtins.str,
        access_point_id: typing.Optional[builtins.str] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        health_check_source_ip: typing.Optional[builtins.str] = None,
        health_check_target_ip: typing.Optional[builtins.str] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        opposite_access_point_id: typing.Optional[builtins.str] = None,
        opposite_interface_id: typing.Optional[builtins.str] = None,
        opposite_interface_owner_id: typing.Optional[builtins.str] = None,
        opposite_region_id: typing.Optional[builtins.str] = None,
        opposite_router_id: typing.Optional[builtins.str] = None,
        opposite_router_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        router_type: typing.Optional[builtins.str] = None,
        spec: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::RouterInterface``.

        :param role: 
        :param router_id: 
        :param access_point_id: 
        :param auto_pay: 
        :param description: 
        :param health_check_source_ip: 
        :param health_check_target_ip: 
        :param instance_charge_type: 
        :param name: 
        :param opposite_access_point_id: 
        :param opposite_interface_id: 
        :param opposite_interface_owner_id: 
        :param opposite_region_id: 
        :param opposite_router_id: 
        :param opposite_router_type: 
        :param period: 
        :param pricing_cycle: 
        :param router_type: 
        :param spec: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "role": role,
            "router_id": router_id,
        }
        if access_point_id is not None:
            self._values["access_point_id"] = access_point_id
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if description is not None:
            self._values["description"] = description
        if health_check_source_ip is not None:
            self._values["health_check_source_ip"] = health_check_source_ip
        if health_check_target_ip is not None:
            self._values["health_check_target_ip"] = health_check_target_ip
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if opposite_access_point_id is not None:
            self._values["opposite_access_point_id"] = opposite_access_point_id
        if opposite_interface_id is not None:
            self._values["opposite_interface_id"] = opposite_interface_id
        if opposite_interface_owner_id is not None:
            self._values["opposite_interface_owner_id"] = opposite_interface_owner_id
        if opposite_region_id is not None:
            self._values["opposite_region_id"] = opposite_region_id
        if opposite_router_id is not None:
            self._values["opposite_router_id"] = opposite_router_id
        if opposite_router_type is not None:
            self._values["opposite_router_type"] = opposite_router_type
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if router_type is not None:
            self._values["router_type"] = router_type
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def role(self) -> builtins.str:
        """
        :Property: role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        """
        result = self._values.get("role")
        assert result is not None, "Required property 'role' is missing"
        return result

    @builtins.property
    def router_id(self) -> builtins.str:
        """
        :Property: routerId: The router ID to create RouterInterface.
        """
        result = self._values.get("router_id")
        assert result is not None, "Required property 'router_id' is missing"
        return result

    @builtins.property
    def access_point_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
        """
        result = self._values.get("access_point_id")
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Indicates whether automatic payment is enabled. Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def health_check_source_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        """
        result = self._values.get("health_check_source_ip")
        return result

    @builtins.property
    def health_check_target_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        """
        result = self._values.get("health_check_target_ip")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def opposite_access_point_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
        """
        result = self._values.get("opposite_access_point_id")
        return result

    @builtins.property
    def opposite_interface_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceId: The ID of the peer router interface.
        """
        result = self._values.get("opposite_interface_id")
        return result

    @builtins.property
    def opposite_interface_owner_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
        """
        result = self._values.get("opposite_interface_owner_id")
        return result

    @builtins.property
    def opposite_region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
        """
        result = self._values.get("opposite_region_id")
        return result

    @builtins.property
    def opposite_router_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterId: The router ID of the connection peer RouterInterface.
        """
        result = self._values.get("opposite_router_id")
        return result

    @builtins.property
    def opposite_router_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        """
        result = self._values.get("opposite_router_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def router_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: routerType: Router type. Now support 'VRouter|VBR'
        """
        result = self._values.get("router_type")
        return result

    @builtins.property
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        """
        result = self._values.get("spec")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouterInterfaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSnatEntry(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosSnatEntry",
):
    """A ROS template type:  ``ALIYUN::VPC::SnatEntry``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSnatEntryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::SnatEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSnatEntry, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrSnatEntryIds")
    def attr_snat_entry_ids(self) -> typing.Any:
        """
        :Attribute: SnatEntryIds: The IDS of the SNAT entry.
        """
        return jsii.get(self, "attrSnatEntryIds")

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
    @jsii.member(jsii_name="snatIp")
    def snat_ip(self) -> builtins.str:
        """
        :Property: snatIp: The public IP address. Separate multiple EIPs with commas.
        """
        return jsii.get(self, "snatIp")

    @snat_ip.setter # type: ignore
    def snat_ip(self, value: builtins.str) -> None:
        jsii.set(self, "snatIp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="snatTableId")
    def snat_table_id(self) -> builtins.str:
        """
        :Property: snatTableId: The ID of the SNAT table.
        """
        return jsii.get(self, "snatTableId")

    @snat_table_id.setter # type: ignore
    def snat_table_id(self, value: builtins.str) -> None:
        jsii.set(self, "snatTableId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="snatEntryName")
    def snat_entry_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        """
        return jsii.get(self, "snatEntryName")

    @snat_entry_name.setter # type: ignore
    def snat_entry_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "snatEntryName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceCidr")
    def source_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        """
        return jsii.get(self, "sourceCidr")

    @source_cidr.setter # type: ignore
    def source_cidr(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sourceCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceVSwitchIds")
    def source_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        """
        return jsii.get(self, "sourceVSwitchIds")

    @source_v_switch_ids.setter # type: ignore
    def source_v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sourceVSwitchIds", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosSnatEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "snat_ip": "snatIp",
        "snat_table_id": "snatTableId",
        "snat_entry_name": "snatEntryName",
        "source_cidr": "sourceCidr",
        "source_v_switch_ids": "sourceVSwitchIds",
    },
)
class RosSnatEntryProps:
    def __init__(
        self,
        *,
        snat_ip: builtins.str,
        snat_table_id: builtins.str,
        snat_entry_name: typing.Optional[builtins.str] = None,
        source_cidr: typing.Optional[builtins.str] = None,
        source_v_switch_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::SnatEntry``.

        :param snat_ip: 
        :param snat_table_id: 
        :param snat_entry_name: 
        :param source_cidr: 
        :param source_v_switch_ids: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "snat_ip": snat_ip,
            "snat_table_id": snat_table_id,
        }
        if snat_entry_name is not None:
            self._values["snat_entry_name"] = snat_entry_name
        if source_cidr is not None:
            self._values["source_cidr"] = source_cidr
        if source_v_switch_ids is not None:
            self._values["source_v_switch_ids"] = source_v_switch_ids

    @builtins.property
    def snat_ip(self) -> builtins.str:
        """
        :Property: snatIp: The public IP address. Separate multiple EIPs with commas.
        """
        result = self._values.get("snat_ip")
        assert result is not None, "Required property 'snat_ip' is missing"
        return result

    @builtins.property
    def snat_table_id(self) -> builtins.str:
        """
        :Property: snatTableId: The ID of the SNAT table.
        """
        result = self._values.get("snat_table_id")
        assert result is not None, "Required property 'snat_table_id' is missing"
        return result

    @builtins.property
    def snat_entry_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        """
        result = self._values.get("snat_entry_name")
        return result

    @builtins.property
    def source_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        """
        result = self._values.get("source_cidr")
        return result

    @builtins.property
    def source_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        """
        result = self._values.get("source_v_switch_ids")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSnatEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSslVpnClientCert(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosSslVpnClientCert",
):
    """A ROS template type:  ``ALIYUN::VPC::SslVpnClientCert``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSslVpnClientCertProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::SslVpnClientCert``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSslVpnClientCert, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrSslVpnClientCertId")
    def attr_ssl_vpn_client_cert_id(self) -> typing.Any:
        """
        :Attribute: SslVpnClientCertId: The ID of the client certificate.
        """
        return jsii.get(self, "attrSslVpnClientCertId")

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
    @jsii.member(jsii_name="sslVpnServerId")
    def ssl_vpn_server_id(self) -> builtins.str:
        """
        :Property: sslVpnServerId: ID of the SSL-VPN server.
        """
        return jsii.get(self, "sslVpnServerId")

    @ssl_vpn_server_id.setter # type: ignore
    def ssl_vpn_server_id(self, value: builtins.str) -> None:
        jsii.set(self, "sslVpnServerId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the client certificate.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosSslVpnClientCertProps",
    jsii_struct_bases=[],
    name_mapping={"ssl_vpn_server_id": "sslVpnServerId", "name": "name"},
)
class RosSslVpnClientCertProps:
    def __init__(
        self,
        *,
        ssl_vpn_server_id: builtins.str,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::SslVpnClientCert``.

        :param ssl_vpn_server_id: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ssl_vpn_server_id": ssl_vpn_server_id,
        }
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ssl_vpn_server_id(self) -> builtins.str:
        """
        :Property: sslVpnServerId: ID of the SSL-VPN server.
        """
        result = self._values.get("ssl_vpn_server_id")
        assert result is not None, "Required property 'ssl_vpn_server_id' is missing"
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the client certificate.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSslVpnClientCertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSslVpnServer(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosSslVpnServer",
):
    """A ROS template type:  ``ALIYUN::VPC::SslVpnServer``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSslVpnServerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::SslVpnServer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSslVpnServer, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrSslVpnServerId")
    def attr_ssl_vpn_server_id(self) -> typing.Any:
        """
        :Attribute: SslVpnServerId: ID of the SSL-VPN server.
        """
        return jsii.get(self, "attrSslVpnServerId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clientIpPool")
    def client_ip_pool(self) -> builtins.str:
        """
        :Property:

        clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
        When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        The network segment cannot conflict with the LocalSubnet address segment.
        """
        return jsii.get(self, "clientIpPool")

    @client_ip_pool.setter # type: ignore
    def client_ip_pool(self, value: builtins.str) -> None:
        jsii.set(self, "clientIpPool", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="localSubnet")
    def local_subnet(self) -> builtins.str:
        """
        :Property:

        localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
        The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        """
        return jsii.get(self, "localSubnet")

    @local_subnet.setter # type: ignore
    def local_subnet(self, value: builtins.str) -> None:
        jsii.set(self, "localSubnet", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpnGatewayId")
    def vpn_gateway_id(self) -> builtins.str:
        """
        :Property: vpnGatewayId: ID of the VPN gateway.
        """
        return jsii.get(self, "vpnGatewayId")

    @vpn_gateway_id.setter # type: ignore
    def vpn_gateway_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpnGatewayId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cipher")
    def cipher(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        cipher: The encryption algorithm used by SSL-VPN. Value:
        AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        """
        return jsii.get(self, "cipher")

    @cipher.setter # type: ignore
    def cipher(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "cipher", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="compress")
    def compress(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: compress: Whether it is compressed.
        """
        return jsii.get(self, "compress")

    @compress.setter # type: ignore
    def compress(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "compress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        But it can't start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
        22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        """
        return jsii.get(self, "port")

    @port.setter # type: ignore
    def port(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="proto")
    def proto(self) -> typing.Optional[builtins.str]:
        """
        :Property: proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
        """
        return jsii.get(self, "proto")

    @proto.setter # type: ignore
    def proto(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "proto", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosSslVpnServerProps",
    jsii_struct_bases=[],
    name_mapping={
        "client_ip_pool": "clientIpPool",
        "local_subnet": "localSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "cipher": "cipher",
        "compress": "compress",
        "name": "name",
        "port": "port",
        "proto": "proto",
    },
)
class RosSslVpnServerProps:
    def __init__(
        self,
        *,
        client_ip_pool: builtins.str,
        local_subnet: builtins.str,
        vpn_gateway_id: builtins.str,
        cipher: typing.Optional[builtins.str] = None,
        compress: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[builtins.str] = None,
        port: typing.Optional[jsii.Number] = None,
        proto: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::SslVpnServer``.

        :param client_ip_pool: 
        :param local_subnet: 
        :param vpn_gateway_id: 
        :param cipher: 
        :param compress: 
        :param name: 
        :param port: 
        :param proto: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "client_ip_pool": client_ip_pool,
            "local_subnet": local_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if cipher is not None:
            self._values["cipher"] = cipher
        if compress is not None:
            self._values["compress"] = compress
        if name is not None:
            self._values["name"] = name
        if port is not None:
            self._values["port"] = port
        if proto is not None:
            self._values["proto"] = proto

    @builtins.property
    def client_ip_pool(self) -> builtins.str:
        """
        :Property:

        clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
        When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        The network segment cannot conflict with the LocalSubnet address segment.
        """
        result = self._values.get("client_ip_pool")
        assert result is not None, "Required property 'client_ip_pool' is missing"
        return result

    @builtins.property
    def local_subnet(self) -> builtins.str:
        """
        :Property:

        localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
        The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        """
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return result

    @builtins.property
    def vpn_gateway_id(self) -> builtins.str:
        """
        :Property: vpnGatewayId: ID of the VPN gateway.
        """
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return result

    @builtins.property
    def cipher(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        cipher: The encryption algorithm used by SSL-VPN. Value:
        AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        """
        result = self._values.get("cipher")
        return result

    @builtins.property
    def compress(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: compress: Whether it is compressed.
        """
        result = self._values.get("compress")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        But it can't start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
        22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        """
        result = self._values.get("port")
        return result

    @builtins.property
    def proto(self) -> typing.Optional[builtins.str]:
        """
        :Property: proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
        """
        result = self._values.get("proto")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSslVpnServerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpnConnection(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnection",
):
    """A ROS template type:  ``ALIYUN::VPC::VpnConnection``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpnConnectionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::VpnConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosVpnConnection, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrPeerVpnConnectionConfig")
    def attr_peer_vpn_connection_config(self) -> typing.Any:
        """
        :Attribute: PeerVpnConnectionConfig: Peer vpc connection config.
        """
        return jsii.get(self, "attrPeerVpnConnectionConfig")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> typing.Any:
        """
        :Attribute: Status: Status of the IPsec connection.
        """
        return jsii.get(self, "attrStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpnConnectionId")
    def attr_vpn_connection_id(self) -> typing.Any:
        """
        :Attribute: VpnConnectionId: ID of the IPsec connection.
        """
        return jsii.get(self, "attrVpnConnectionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="customerGatewayId")
    def customer_gateway_id(self) -> builtins.str:
        """
        :Property: customerGatewayId: The ID of the user gateway.
        """
        return jsii.get(self, "customerGatewayId")

    @customer_gateway_id.setter # type: ignore
    def customer_gateway_id(self, value: builtins.str) -> None:
        jsii.set(self, "customerGatewayId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="localSubnet")
    def local_subnet(self) -> builtins.str:
        """
        :Property:

        localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        """
        return jsii.get(self, "localSubnet")

    @local_subnet.setter # type: ignore
    def local_subnet(self, value: builtins.str) -> None:
        jsii.set(self, "localSubnet", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="remoteSubnet")
    def remote_subnet(self) -> builtins.str:
        """
        :Property:

        remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        """
        return jsii.get(self, "remoteSubnet")

    @remote_subnet.setter # type: ignore
    def remote_subnet(self, value: builtins.str) -> None:
        jsii.set(self, "remoteSubnet", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpnGatewayId")
    def vpn_gateway_id(self) -> builtins.str:
        """
        :Property: vpnGatewayId: ID of the VPN gateway.
        """
        return jsii.get(self, "vpnGatewayId")

    @vpn_gateway_id.setter # type: ignore
    def vpn_gateway_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpnGatewayId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="effectImmediately")
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
        True: Negotiate immediately after the configuration is complete.
        False (default): Negotiate when traffic enters.
        """
        return jsii.get(self, "effectImmediately")

    @effect_immediately.setter # type: ignore
    def effect_immediately(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "effectImmediately", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="healthCheckConfig")
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.HealthCheckConfigProperty"]]:
        """
        :Property: healthCheckConfig: Whether to enable the health check configuration.
        """
        return jsii.get(self, "healthCheckConfig")

    @health_check_config.setter # type: ignore
    def health_check_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.HealthCheckConfigProperty"]],
    ) -> None:
        jsii.set(self, "healthCheckConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ikeConfig")
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IkeConfigProperty"]]:
        """
        :Property: ikeConfig: Configuration information for the first phase of negotiation.
        """
        return jsii.get(self, "ikeConfig")

    @ike_config.setter # type: ignore
    def ike_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IkeConfigProperty"]],
    ) -> None:
        jsii.set(self, "ikeConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ipsecConfig")
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IpsecConfigProperty"]]:
        """
        :Property: ipsecConfig: Configuration information for the second phase negotiation.
        """
        return jsii.get(self, "ipsecConfig")

    @ipsec_config.setter # type: ignore
    def ipsec_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IpsecConfigProperty"]],
    ) -> None:
        jsii.set(self, "ipsecConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the IPsec connection.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dip": "dip",
            "enable": "enable",
            "interval": "interval",
            "retry": "retry",
            "sip": "sip",
        },
    )
    class HealthCheckConfigProperty:
        def __init__(
            self,
            *,
            dip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            interval: typing.Optional[jsii.Number] = None,
            retry: typing.Optional[jsii.Number] = None,
            sip: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param dip: 
            :param enable: 
            :param interval: 
            :param retry: 
            :param sip: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if dip is not None:
                self._values["dip"] = dip
            if enable is not None:
                self._values["enable"] = enable
            if interval is not None:
                self._values["interval"] = interval
            if retry is not None:
                self._values["retry"] = retry
            if sip is not None:
                self._values["sip"] = sip

        @builtins.property
        def dip(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: dip:
            """
            result = self._values.get("dip")
            return result

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: enable:
            """
            result = self._values.get("enable")
            return result

        @builtins.property
        def interval(self) -> typing.Optional[jsii.Number]:
            """
            :Property: interval:
            """
            result = self._values.get("interval")
            return result

        @builtins.property
        def retry(self) -> typing.Optional[jsii.Number]:
            """
            :Property: retry:
            """
            result = self._values.get("retry")
            return result

        @builtins.property
        def sip(self) -> typing.Optional[builtins.str]:
            """
            :Property: sip:
            """
            result = self._values.get("sip")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HealthCheckConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ike_auth_alg": "ikeAuthAlg",
            "ike_enc_alg": "ikeEncAlg",
            "ike_lifetime": "ikeLifetime",
            "ike_mode": "ikeMode",
            "ike_pfs": "ikePfs",
            "ike_version": "ikeVersion",
            "local_id_i_psec": "localIdIPsec",
            "psk": "psk",
            "remote_id": "remoteId",
        },
    )
    class IkeConfigProperty:
        def __init__(
            self,
            *,
            ike_auth_alg: typing.Optional[builtins.str] = None,
            ike_enc_alg: typing.Optional[builtins.str] = None,
            ike_lifetime: typing.Optional[jsii.Number] = None,
            ike_mode: typing.Optional[builtins.str] = None,
            ike_pfs: typing.Optional[builtins.str] = None,
            ike_version: typing.Optional[builtins.str] = None,
            local_id_i_psec: typing.Optional[builtins.str] = None,
            psk: typing.Optional[builtins.str] = None,
            remote_id: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param ike_auth_alg: 
            :param ike_enc_alg: 
            :param ike_lifetime: 
            :param ike_mode: 
            :param ike_pfs: 
            :param ike_version: 
            :param local_id_i_psec: 
            :param psk: 
            :param remote_id: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if ike_auth_alg is not None:
                self._values["ike_auth_alg"] = ike_auth_alg
            if ike_enc_alg is not None:
                self._values["ike_enc_alg"] = ike_enc_alg
            if ike_lifetime is not None:
                self._values["ike_lifetime"] = ike_lifetime
            if ike_mode is not None:
                self._values["ike_mode"] = ike_mode
            if ike_pfs is not None:
                self._values["ike_pfs"] = ike_pfs
            if ike_version is not None:
                self._values["ike_version"] = ike_version
            if local_id_i_psec is not None:
                self._values["local_id_i_psec"] = local_id_i_psec
            if psk is not None:
                self._values["psk"] = psk
            if remote_id is not None:
                self._values["remote_id"] = remote_id

        @builtins.property
        def ike_auth_alg(self) -> typing.Optional[builtins.str]:
            """
            :Property: ikeAuthAlg: The authentication algorithm negotiated in the first phase, the value is md5|sha1, and the default value is md5.
            """
            result = self._values.get("ike_auth_alg")
            return result

        @builtins.property
        def ike_enc_alg(self) -> typing.Optional[builtins.str]:
            """
            :Property: ikeEncAlg: The encryption algorithm negotiated in the first phase, value: aes|aes192|aes256|des|3des, default value: aes.
            """
            result = self._values.get("ike_enc_alg")
            return result

        @builtins.property
        def ike_lifetime(self) -> typing.Optional[jsii.Number]:
            """
            :Property: ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
            """
            result = self._values.get("ike_lifetime")
            return result

        @builtins.property
        def ike_mode(self) -> typing.Optional[builtins.str]:
            """
            :Property: ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
            """
            result = self._values.get("ike_mode")
            return result

        @builtins.property
        def ike_pfs(self) -> typing.Optional[builtins.str]:
            """
            :Property: ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
            """
            result = self._values.get("ike_pfs")
            return result

        @builtins.property
        def ike_version(self) -> typing.Optional[builtins.str]:
            """
            :Property: ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
            """
            result = self._values.get("ike_version")
            return result

        @builtins.property
        def local_id_i_psec(self) -> typing.Optional[builtins.str]:
            """
            :Property: localIdIPsec: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
            """
            result = self._values.get("local_id_i_psec")
            return result

        @builtins.property
        def psk(self) -> typing.Optional[builtins.str]:
            """
            :Property: psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
            """
            result = self._values.get("psk")
            return result

        @builtins.property
        def remote_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
            """
            result = self._values.get("remote_id")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IkeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ipsec_auth_alg": "ipsecAuthAlg",
            "ipsec_enc_alg": "ipsecEncAlg",
            "ipsec_lifetime": "ipsecLifetime",
            "ipsec_pfs": "ipsecPfs",
        },
    )
    class IpsecConfigProperty:
        def __init__(
            self,
            *,
            ipsec_auth_alg: typing.Optional[builtins.str] = None,
            ipsec_enc_alg: typing.Optional[builtins.str] = None,
            ipsec_lifetime: typing.Optional[jsii.Number] = None,
            ipsec_pfs: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param ipsec_auth_alg: 
            :param ipsec_enc_alg: 
            :param ipsec_lifetime: 
            :param ipsec_pfs: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if ipsec_auth_alg is not None:
                self._values["ipsec_auth_alg"] = ipsec_auth_alg
            if ipsec_enc_alg is not None:
                self._values["ipsec_enc_alg"] = ipsec_enc_alg
            if ipsec_lifetime is not None:
                self._values["ipsec_lifetime"] = ipsec_lifetime
            if ipsec_pfs is not None:
                self._values["ipsec_pfs"] = ipsec_pfs

        @builtins.property
        def ipsec_auth_alg(self) -> typing.Optional[builtins.str]:
            """
            :Property: ipsecAuthAlg: Authentication algorithm negotiated in the second phase. Value: md5|sha1, default value: md5.
            """
            result = self._values.get("ipsec_auth_alg")
            return result

        @builtins.property
        def ipsec_enc_alg(self) -> typing.Optional[builtins.str]:
            """
            :Property: ipsecEncAlg: Encryption algorithm negotiated in the second phase. Value: aes|aes192|aes256|des|3des, default value: aes.
            """
            result = self._values.get("ipsec_enc_alg")
            return result

        @builtins.property
        def ipsec_lifetime(self) -> typing.Optional[jsii.Number]:
            """
            :Property: ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
            """
            result = self._values.get("ipsec_lifetime")
            return result

        @builtins.property
        def ipsec_pfs(self) -> typing.Optional[builtins.str]:
            """
            :Property: ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
            """
            result = self._values.get("ipsec_pfs")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IpsecConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "customer_gateway_id": "customerGatewayId",
        "local_subnet": "localSubnet",
        "remote_subnet": "remoteSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "effect_immediately": "effectImmediately",
        "health_check_config": "healthCheckConfig",
        "ike_config": "ikeConfig",
        "ipsec_config": "ipsecConfig",
        "name": "name",
    },
)
class RosVpnConnectionProps:
    def __init__(
        self,
        *,
        customer_gateway_id: builtins.str,
        local_subnet: builtins.str,
        remote_subnet: builtins.str,
        vpn_gateway_id: builtins.str,
        effect_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        health_check_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]] = None,
        ike_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]] = None,
        ipsec_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::VpnConnection``.

        :param customer_gateway_id: 
        :param local_subnet: 
        :param remote_subnet: 
        :param vpn_gateway_id: 
        :param effect_immediately: 
        :param health_check_config: 
        :param ike_config: 
        :param ipsec_config: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "customer_gateway_id": customer_gateway_id,
            "local_subnet": local_subnet,
            "remote_subnet": remote_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if effect_immediately is not None:
            self._values["effect_immediately"] = effect_immediately
        if health_check_config is not None:
            self._values["health_check_config"] = health_check_config
        if ike_config is not None:
            self._values["ike_config"] = ike_config
        if ipsec_config is not None:
            self._values["ipsec_config"] = ipsec_config
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def customer_gateway_id(self) -> builtins.str:
        """
        :Property: customerGatewayId: The ID of the user gateway.
        """
        result = self._values.get("customer_gateway_id")
        assert result is not None, "Required property 'customer_gateway_id' is missing"
        return result

    @builtins.property
    def local_subnet(self) -> builtins.str:
        """
        :Property:

        localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        """
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return result

    @builtins.property
    def remote_subnet(self) -> builtins.str:
        """
        :Property:

        remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        """
        result = self._values.get("remote_subnet")
        assert result is not None, "Required property 'remote_subnet' is missing"
        return result

    @builtins.property
    def vpn_gateway_id(self) -> builtins.str:
        """
        :Property: vpnGatewayId: ID of the VPN gateway.
        """
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return result

    @builtins.property
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
        True: Negotiate immediately after the configuration is complete.
        False (default): Negotiate when traffic enters.
        """
        result = self._values.get("effect_immediately")
        return result

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]]:
        """
        :Property: healthCheckConfig: Whether to enable the health check configuration.
        """
        result = self._values.get("health_check_config")
        return result

    @builtins.property
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]]:
        """
        :Property: ikeConfig: Configuration information for the first phase of negotiation.
        """
        result = self._values.get("ike_config")
        return result

    @builtins.property
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]]:
        """
        :Property: ipsecConfig: Configuration information for the second phase negotiation.
        """
        result = self._values.get("ipsec_config")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the IPsec connection.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpnConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpnGateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnGateway",
):
    """A ROS template type:  ``ALIYUN::VPC::VpnGateway``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpnGatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VPC::VpnGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosVpnGateway, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrInternetIp")
    def attr_internet_ip(self) -> typing.Any:
        """
        :Attribute: InternetIp: The public IP address of the VPN gateway.
        """
        return jsii.get(self, "attrInternetIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: The order ID.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> typing.Any:
        """
        :Attribute: Spec: The specification of the VPN gateway.
        """
        return jsii.get(self, "attrSpec")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSslMaxConnections")
    def attr_ssl_max_connections(self) -> typing.Any:
        """
        :Attribute: SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
        """
        return jsii.get(self, "attrSslMaxConnections")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpnGatewayId")
    def attr_vpn_gateway_id(self) -> typing.Any:
        """
        :Attribute: VpnGatewayId: ID of the VPN gateway.
        """
        return jsii.get(self, "attrVpnGatewayId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> jsii.Number:
        """
        :Property:

        bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
        Value: 5|10|20|50|100|200.
        """
        return jsii.get(self, "bandwidth")

    @bandwidth.setter # type: ignore
    def bandwidth(self, value: jsii.Number) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID to which the VPN gateway belongs.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
        True: Automatically pays the bill for the VPN gateway.
        False (default): Does not automatically pay the bill for the VPN gateway.
        """
        return jsii.get(self, "autoPay")

    @auto_pay.setter # type: ignore
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the VPN gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableIpsec")
    def enable_ipsec(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
        True (default): Enables the IPsec-VPN feature.
        False: The IPsec-VPN function is not enabled.
        """
        return jsii.get(self, "enableIpsec")

    @enable_ipsec.setter # type: ignore
    def enable_ipsec(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableIpsec", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableSsl")
    def enable_ssl(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
        True: Enable SSL-VPN.
        False (default): Does not enable SSL-VPN.
        """
        return jsii.get(self, "enableSsl")

    @enable_ssl.setter # type: ignore
    def enable_ssl(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableSsl", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceChargeType: Accounting type of the VPN gateway, the value is:
        PREPAY, POSTPAY
        """
        return jsii.get(self, "instanceChargeType")

    @instance_charge_type.setter # type: ignore
    def instance_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
        The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        period: Purchase time, value: 1~9|12|24|36.
        When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sslConnections")
    def ssl_connections(self) -> typing.Optional[jsii.Number]:
        """
        :Property: sslConnections: The maximum number of clients allowed to connect at the same time.
        """
        return jsii.get(self, "sslConnections")

    @ssl_connections.setter # type: ignore
    def ssl_connections(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "sslConnections", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "vpc_id": "vpcId",
        "auto_pay": "autoPay",
        "description": "description",
        "enable_ipsec": "enableIpsec",
        "enable_ssl": "enableSsl",
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "period": "period",
        "ssl_connections": "sslConnections",
        "v_switch_id": "vSwitchId",
    },
)
class RosVpnGatewayProps:
    def __init__(
        self,
        *,
        bandwidth: jsii.Number,
        vpc_id: builtins.str,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        enable_ipsec: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_ssl: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        ssl_connections: typing.Optional[jsii.Number] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::VpnGateway``.

        :param bandwidth: 
        :param vpc_id: 
        :param auto_pay: 
        :param description: 
        :param enable_ipsec: 
        :param enable_ssl: 
        :param instance_charge_type: 
        :param name: 
        :param period: 
        :param ssl_connections: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
            "vpc_id": vpc_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if description is not None:
            self._values["description"] = description
        if enable_ipsec is not None:
            self._values["enable_ipsec"] = enable_ipsec
        if enable_ssl is not None:
            self._values["enable_ssl"] = enable_ssl
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if ssl_connections is not None:
            self._values["ssl_connections"] = ssl_connections
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def bandwidth(self) -> jsii.Number:
        """
        :Property:

        bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
        Value: 5|10|20|50|100|200.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID to which the VPN gateway belongs.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
        True: Automatically pays the bill for the VPN gateway.
        False (default): Does not automatically pay the bill for the VPN gateway.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the VPN gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def enable_ipsec(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
        True (default): Enables the IPsec-VPN feature.
        False: The IPsec-VPN function is not enabled.
        """
        result = self._values.get("enable_ipsec")
        return result

    @builtins.property
    def enable_ssl(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
        True: Enable SSL-VPN.
        False (default): Does not enable SSL-VPN.
        """
        result = self._values.get("enable_ssl")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceChargeType: Accounting type of the VPN gateway, the value is:
        PREPAY, POSTPAY
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
        The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        period: Purchase time, value: 1~9|12|24|36.
        When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def ssl_connections(self) -> typing.Optional[jsii.Number]:
        """
        :Property: sslConnections: The maximum number of clients allowed to connect at the same time.
        """
        result = self._values.get("ssl_connections")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpnGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouteTable(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RouteTable",
):
    """A ROS resource type:  ``ALIYUN::VPC::RouteTable``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RouteTableProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::RouteTable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RouteTable, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> typing.Any:
        """
        :Attribute: RouteTableId: The ID of the route table.
        """
        return jsii.get(self, "attrRouteTableId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouteTableName")
    def attr_route_table_name(self) -> typing.Any:
        """
        :Attribute: RouteTableName: The name of the route table.
        """
        return jsii.get(self, "attrRouteTableName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouteTableType")
    def attr_route_table_type(self) -> typing.Any:
        """
        :Attribute: RouteTableType: The type of the route table.
        """
        return jsii.get(self, "attrRouteTableType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> typing.Any:
        """
        :Attribute: VpcId: The ID of the VRouter to which the route table belongs.
        """
        return jsii.get(self, "attrVpcId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> typing.Any:
        """
        :Attribute: VSwitchIds: A list of VSwitches under the VPC.
        """
        return jsii.get(self, "attrVSwitchIds")


class RouteTableAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RouteTableAssociation",
):
    """A ROS resource type:  ``ALIYUN::VPC::RouteTableAssociation``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RouteTableAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::RouteTableAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RouteTableAssociation, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> typing.Any:
        """
        :Attribute: RouteTableId: The ID of the route table.
        """
        return jsii.get(self, "attrRouteTableId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> typing.Any:
        """
        :Attribute: VSwitchId: The VSwitch ID which the route table associated with.
        """
        return jsii.get(self, "attrVSwitchId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RouteTableAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"route_table_id": "routeTableId", "v_switch_id": "vSwitchId"},
)
class RouteTableAssociationProps:
    def __init__(
        self,
        *,
        route_table_id: builtins.str,
        v_switch_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::RouteTableAssociation``.

        :param route_table_id: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "route_table_id": route_table_id,
            "v_switch_id": v_switch_id,
        }

    @builtins.property
    def route_table_id(self) -> builtins.str:
        """
        :Property: routeTableId: The ID of the route table.
        """
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteTableAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RouteTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "route_table_name": "routeTableName",
        "tags": "tags",
    },
)
class RouteTableProps:
    def __init__(
        self,
        *,
        vpc_id: builtins.str,
        description: typing.Optional[builtins.str] = None,
        route_table_name: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::RouteTable``.

        :param vpc_id: 
        :param description: 
        :param route_table_name: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if route_table_name is not None:
            self._values["route_table_name"] = route_table_name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The ID of the VPC to which the custom route table belongs.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the route table.
        The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def route_table_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        routeTableName: The name of the route table.
        The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        """
        result = self._values.get("route_table_name")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouterInterface(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RouterInterface",
):
    """A ROS resource type:  ``ALIYUN::VPC::RouterInterface``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RouterInterfaceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::RouterInterface``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RouterInterface, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> typing.Any:
        """
        :Attribute: RouterInterfaceId: The ID of created RouterInterface.
        """
        return jsii.get(self, "attrRouterInterfaceId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RouterInterfaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "role": "role",
        "router_id": "routerId",
        "access_point_id": "accessPointId",
        "auto_pay": "autoPay",
        "description": "description",
        "health_check_source_ip": "healthCheckSourceIp",
        "health_check_target_ip": "healthCheckTargetIp",
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "opposite_access_point_id": "oppositeAccessPointId",
        "opposite_interface_id": "oppositeInterfaceId",
        "opposite_interface_owner_id": "oppositeInterfaceOwnerId",
        "opposite_region_id": "oppositeRegionId",
        "opposite_router_id": "oppositeRouterId",
        "opposite_router_type": "oppositeRouterType",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "router_type": "routerType",
        "spec": "spec",
    },
)
class RouterInterfaceProps:
    def __init__(
        self,
        *,
        role: builtins.str,
        router_id: builtins.str,
        access_point_id: typing.Optional[builtins.str] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        health_check_source_ip: typing.Optional[builtins.str] = None,
        health_check_target_ip: typing.Optional[builtins.str] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        opposite_access_point_id: typing.Optional[builtins.str] = None,
        opposite_interface_id: typing.Optional[builtins.str] = None,
        opposite_interface_owner_id: typing.Optional[builtins.str] = None,
        opposite_region_id: typing.Optional[builtins.str] = None,
        opposite_router_id: typing.Optional[builtins.str] = None,
        opposite_router_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        router_type: typing.Optional[builtins.str] = None,
        spec: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::RouterInterface``.

        :param role: 
        :param router_id: 
        :param access_point_id: 
        :param auto_pay: 
        :param description: 
        :param health_check_source_ip: 
        :param health_check_target_ip: 
        :param instance_charge_type: 
        :param name: 
        :param opposite_access_point_id: 
        :param opposite_interface_id: 
        :param opposite_interface_owner_id: 
        :param opposite_region_id: 
        :param opposite_router_id: 
        :param opposite_router_type: 
        :param period: 
        :param pricing_cycle: 
        :param router_type: 
        :param spec: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "role": role,
            "router_id": router_id,
        }
        if access_point_id is not None:
            self._values["access_point_id"] = access_point_id
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if description is not None:
            self._values["description"] = description
        if health_check_source_ip is not None:
            self._values["health_check_source_ip"] = health_check_source_ip
        if health_check_target_ip is not None:
            self._values["health_check_target_ip"] = health_check_target_ip
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if opposite_access_point_id is not None:
            self._values["opposite_access_point_id"] = opposite_access_point_id
        if opposite_interface_id is not None:
            self._values["opposite_interface_id"] = opposite_interface_id
        if opposite_interface_owner_id is not None:
            self._values["opposite_interface_owner_id"] = opposite_interface_owner_id
        if opposite_region_id is not None:
            self._values["opposite_region_id"] = opposite_region_id
        if opposite_router_id is not None:
            self._values["opposite_router_id"] = opposite_router_id
        if opposite_router_type is not None:
            self._values["opposite_router_type"] = opposite_router_type
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if router_type is not None:
            self._values["router_type"] = router_type
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def role(self) -> builtins.str:
        """
        :Property: role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        """
        result = self._values.get("role")
        assert result is not None, "Required property 'role' is missing"
        return result

    @builtins.property
    def router_id(self) -> builtins.str:
        """
        :Property: routerId: The router ID to create RouterInterface.
        """
        result = self._values.get("router_id")
        assert result is not None, "Required property 'router_id' is missing"
        return result

    @builtins.property
    def access_point_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
        """
        result = self._values.get("access_point_id")
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoPay: Indicates whether automatic payment is enabled. Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def health_check_source_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        """
        result = self._values.get("health_check_source_ip")
        return result

    @builtins.property
    def health_check_target_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        """
        result = self._values.get("health_check_target_ip")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def opposite_access_point_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
        """
        result = self._values.get("opposite_access_point_id")
        return result

    @builtins.property
    def opposite_interface_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceId: The ID of the peer router interface.
        """
        result = self._values.get("opposite_interface_id")
        return result

    @builtins.property
    def opposite_interface_owner_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
        """
        result = self._values.get("opposite_interface_owner_id")
        return result

    @builtins.property
    def opposite_region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
        """
        result = self._values.get("opposite_region_id")
        return result

    @builtins.property
    def opposite_router_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterId: The router ID of the connection peer RouterInterface.
        """
        result = self._values.get("opposite_router_id")
        return result

    @builtins.property
    def opposite_router_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        """
        result = self._values.get("opposite_router_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def router_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: routerType: Router type. Now support 'VRouter|VBR'
        """
        result = self._values.get("router_type")
        return result

    @builtins.property
    def spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        """
        result = self._values.get("spec")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouterInterfaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SnatEntry(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.SnatEntry",
):
    """A ROS resource type:  ``ALIYUN::VPC::SnatEntry``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SnatEntryProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::SnatEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SnatEntry, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSnatEntryIds")
    def attr_snat_entry_ids(self) -> typing.Any:
        """
        :Attribute: SnatEntryIds: The IDS of the SNAT entry.
        """
        return jsii.get(self, "attrSnatEntryIds")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.SnatEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "snat_ip": "snatIp",
        "snat_table_id": "snatTableId",
        "snat_entry_name": "snatEntryName",
        "source_cidr": "sourceCidr",
        "source_v_switch_ids": "sourceVSwitchIds",
    },
)
class SnatEntryProps:
    def __init__(
        self,
        *,
        snat_ip: builtins.str,
        snat_table_id: builtins.str,
        snat_entry_name: typing.Optional[builtins.str] = None,
        source_cidr: typing.Optional[builtins.str] = None,
        source_v_switch_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::SnatEntry``.

        :param snat_ip: 
        :param snat_table_id: 
        :param snat_entry_name: 
        :param source_cidr: 
        :param source_v_switch_ids: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "snat_ip": snat_ip,
            "snat_table_id": snat_table_id,
        }
        if snat_entry_name is not None:
            self._values["snat_entry_name"] = snat_entry_name
        if source_cidr is not None:
            self._values["source_cidr"] = source_cidr
        if source_v_switch_ids is not None:
            self._values["source_v_switch_ids"] = source_v_switch_ids

    @builtins.property
    def snat_ip(self) -> builtins.str:
        """
        :Property: snatIp: The public IP address. Separate multiple EIPs with commas.
        """
        result = self._values.get("snat_ip")
        assert result is not None, "Required property 'snat_ip' is missing"
        return result

    @builtins.property
    def snat_table_id(self) -> builtins.str:
        """
        :Property: snatTableId: The ID of the SNAT table.
        """
        result = self._values.get("snat_table_id")
        assert result is not None, "Required property 'snat_table_id' is missing"
        return result

    @builtins.property
    def snat_entry_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        """
        result = self._values.get("snat_entry_name")
        return result

    @builtins.property
    def source_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        """
        result = self._values.get("source_cidr")
        return result

    @builtins.property
    def source_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        """
        result = self._values.get("source_v_switch_ids")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SnatEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SslVpnClientCert(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.SslVpnClientCert",
):
    """A ROS resource type:  ``ALIYUN::VPC::SslVpnClientCert``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SslVpnClientCertProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::SslVpnClientCert``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SslVpnClientCert, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSslVpnClientCertId")
    def attr_ssl_vpn_client_cert_id(self) -> typing.Any:
        """
        :Attribute: SslVpnClientCertId: The ID of the client certificate.
        """
        return jsii.get(self, "attrSslVpnClientCertId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.SslVpnClientCertProps",
    jsii_struct_bases=[],
    name_mapping={"ssl_vpn_server_id": "sslVpnServerId", "name": "name"},
)
class SslVpnClientCertProps:
    def __init__(
        self,
        *,
        ssl_vpn_server_id: builtins.str,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::SslVpnClientCert``.

        :param ssl_vpn_server_id: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ssl_vpn_server_id": ssl_vpn_server_id,
        }
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ssl_vpn_server_id(self) -> builtins.str:
        """
        :Property: sslVpnServerId: ID of the SSL-VPN server.
        """
        result = self._values.get("ssl_vpn_server_id")
        assert result is not None, "Required property 'ssl_vpn_server_id' is missing"
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the client certificate.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SslVpnClientCertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SslVpnServer(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.SslVpnServer",
):
    """A ROS resource type:  ``ALIYUN::VPC::SslVpnServer``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SslVpnServerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::SslVpnServer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SslVpnServer, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSslVpnServerId")
    def attr_ssl_vpn_server_id(self) -> typing.Any:
        """
        :Attribute: SslVpnServerId: ID of the SSL-VPN server.
        """
        return jsii.get(self, "attrSslVpnServerId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.SslVpnServerProps",
    jsii_struct_bases=[],
    name_mapping={
        "client_ip_pool": "clientIpPool",
        "local_subnet": "localSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "cipher": "cipher",
        "compress": "compress",
        "name": "name",
        "port": "port",
        "proto": "proto",
    },
)
class SslVpnServerProps:
    def __init__(
        self,
        *,
        client_ip_pool: builtins.str,
        local_subnet: builtins.str,
        vpn_gateway_id: builtins.str,
        cipher: typing.Optional[builtins.str] = None,
        compress: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[builtins.str] = None,
        port: typing.Optional[jsii.Number] = None,
        proto: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::SslVpnServer``.

        :param client_ip_pool: 
        :param local_subnet: 
        :param vpn_gateway_id: 
        :param cipher: 
        :param compress: 
        :param name: 
        :param port: 
        :param proto: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "client_ip_pool": client_ip_pool,
            "local_subnet": local_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if cipher is not None:
            self._values["cipher"] = cipher
        if compress is not None:
            self._values["compress"] = compress
        if name is not None:
            self._values["name"] = name
        if port is not None:
            self._values["port"] = port
        if proto is not None:
            self._values["proto"] = proto

    @builtins.property
    def client_ip_pool(self) -> builtins.str:
        """
        :Property:

        clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
        When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        The network segment cannot conflict with the LocalSubnet address segment.
        """
        result = self._values.get("client_ip_pool")
        assert result is not None, "Required property 'client_ip_pool' is missing"
        return result

    @builtins.property
    def local_subnet(self) -> builtins.str:
        """
        :Property:

        localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
        The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        """
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return result

    @builtins.property
    def vpn_gateway_id(self) -> builtins.str:
        """
        :Property: vpnGatewayId: ID of the VPN gateway.
        """
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return result

    @builtins.property
    def cipher(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        cipher: The encryption algorithm used by SSL-VPN. Value:
        AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        """
        result = self._values.get("cipher")
        return result

    @builtins.property
    def compress(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: compress: Whether it is compressed.
        """
        result = self._values.get("compress")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        But it can't start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def port(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
        22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        """
        result = self._values.get("port")
        return result

    @builtins.property
    def proto(self) -> typing.Optional[builtins.str]:
        """
        :Property: proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
        """
        result = self._values.get("proto")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SslVpnServerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpnConnection(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.VpnConnection",
):
    """A ROS resource type:  ``ALIYUN::VPC::VpnConnection``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpnConnectionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::VpnConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(VpnConnection, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPeerVpnConnectionConfig")
    def attr_peer_vpn_connection_config(self) -> typing.Any:
        """
        :Attribute: PeerVpnConnectionConfig: Peer vpc connection config.
        """
        return jsii.get(self, "attrPeerVpnConnectionConfig")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> typing.Any:
        """
        :Attribute: Status: Status of the IPsec connection.
        """
        return jsii.get(self, "attrStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpnConnectionId")
    def attr_vpn_connection_id(self) -> typing.Any:
        """
        :Attribute: VpnConnectionId: ID of the IPsec connection.
        """
        return jsii.get(self, "attrVpnConnectionId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.VpnConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "customer_gateway_id": "customerGatewayId",
        "local_subnet": "localSubnet",
        "remote_subnet": "remoteSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "effect_immediately": "effectImmediately",
        "health_check_config": "healthCheckConfig",
        "ike_config": "ikeConfig",
        "ipsec_config": "ipsecConfig",
        "name": "name",
    },
)
class VpnConnectionProps:
    def __init__(
        self,
        *,
        customer_gateway_id: builtins.str,
        local_subnet: builtins.str,
        remote_subnet: builtins.str,
        vpn_gateway_id: builtins.str,
        effect_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        health_check_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]] = None,
        ike_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]] = None,
        ipsec_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::VpnConnection``.

        :param customer_gateway_id: 
        :param local_subnet: 
        :param remote_subnet: 
        :param vpn_gateway_id: 
        :param effect_immediately: 
        :param health_check_config: 
        :param ike_config: 
        :param ipsec_config: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "customer_gateway_id": customer_gateway_id,
            "local_subnet": local_subnet,
            "remote_subnet": remote_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if effect_immediately is not None:
            self._values["effect_immediately"] = effect_immediately
        if health_check_config is not None:
            self._values["health_check_config"] = health_check_config
        if ike_config is not None:
            self._values["ike_config"] = ike_config
        if ipsec_config is not None:
            self._values["ipsec_config"] = ipsec_config
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def customer_gateway_id(self) -> builtins.str:
        """
        :Property: customerGatewayId: The ID of the user gateway.
        """
        result = self._values.get("customer_gateway_id")
        assert result is not None, "Required property 'customer_gateway_id' is missing"
        return result

    @builtins.property
    def local_subnet(self) -> builtins.str:
        """
        :Property:

        localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        """
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return result

    @builtins.property
    def remote_subnet(self) -> builtins.str:
        """
        :Property:

        remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        """
        result = self._values.get("remote_subnet")
        assert result is not None, "Required property 'remote_subnet' is missing"
        return result

    @builtins.property
    def vpn_gateway_id(self) -> builtins.str:
        """
        :Property: vpnGatewayId: ID of the VPN gateway.
        """
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return result

    @builtins.property
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
        True: Negotiate immediately after the configuration is complete.
        False (default): Negotiate when traffic enters.
        """
        result = self._values.get("effect_immediately")
        return result

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]]:
        """
        :Property: healthCheckConfig: Whether to enable the health check configuration.
        """
        result = self._values.get("health_check_config")
        return result

    @builtins.property
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]]:
        """
        :Property: ikeConfig: Configuration information for the first phase of negotiation.
        """
        result = self._values.get("ike_config")
        return result

    @builtins.property
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]]:
        """
        :Property: ipsecConfig: Configuration information for the second phase negotiation.
        """
        result = self._values.get("ipsec_config")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the IPsec connection.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpnConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpnGateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.VpnGateway",
):
    """A ROS resource type:  ``ALIYUN::VPC::VpnGateway``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpnGatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VPC::VpnGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(VpnGateway, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetIp")
    def attr_internet_ip(self) -> typing.Any:
        """
        :Attribute: InternetIp: The public IP address of the VPN gateway.
        """
        return jsii.get(self, "attrInternetIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: The order ID.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> typing.Any:
        """
        :Attribute: Spec: The specification of the VPN gateway.
        """
        return jsii.get(self, "attrSpec")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSslMaxConnections")
    def attr_ssl_max_connections(self) -> typing.Any:
        """
        :Attribute: SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
        """
        return jsii.get(self, "attrSslMaxConnections")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpnGatewayId")
    def attr_vpn_gateway_id(self) -> typing.Any:
        """
        :Attribute: VpnGatewayId: ID of the VPN gateway.
        """
        return jsii.get(self, "attrVpnGatewayId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.VpnGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "vpc_id": "vpcId",
        "auto_pay": "autoPay",
        "description": "description",
        "enable_ipsec": "enableIpsec",
        "enable_ssl": "enableSsl",
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "period": "period",
        "ssl_connections": "sslConnections",
        "v_switch_id": "vSwitchId",
    },
)
class VpnGatewayProps:
    def __init__(
        self,
        *,
        bandwidth: jsii.Number,
        vpc_id: builtins.str,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        enable_ipsec: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_ssl: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        ssl_connections: typing.Optional[jsii.Number] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VPC::VpnGateway``.

        :param bandwidth: 
        :param vpc_id: 
        :param auto_pay: 
        :param description: 
        :param enable_ipsec: 
        :param enable_ssl: 
        :param instance_charge_type: 
        :param name: 
        :param period: 
        :param ssl_connections: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
            "vpc_id": vpc_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if description is not None:
            self._values["description"] = description
        if enable_ipsec is not None:
            self._values["enable_ipsec"] = enable_ipsec
        if enable_ssl is not None:
            self._values["enable_ssl"] = enable_ssl
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if ssl_connections is not None:
            self._values["ssl_connections"] = ssl_connections
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def bandwidth(self) -> jsii.Number:
        """
        :Property:

        bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
        Value: 5|10|20|50|100|200.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID to which the VPN gateway belongs.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
        True: Automatically pays the bill for the VPN gateway.
        False (default): Does not automatically pay the bill for the VPN gateway.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the VPN gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def enable_ipsec(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
        True (default): Enables the IPsec-VPN feature.
        False: The IPsec-VPN function is not enabled.
        """
        result = self._values.get("enable_ipsec")
        return result

    @builtins.property
    def enable_ssl(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
        True: Enable SSL-VPN.
        False (default): Does not enable SSL-VPN.
        """
        result = self._values.get("enable_ssl")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceChargeType: Accounting type of the VPN gateway, the value is:
        PREPAY, POSTPAY
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
        The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        period: Purchase time, value: 1~9|12|24|36.
        When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def ssl_connections(self) -> typing.Optional[jsii.Number]:
        """
        :Property: sslConnections: The maximum number of clients allowed to connect at the same time.
        """
        result = self._values.get("ssl_connections")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpnGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "CommonBandwidthPackage",
    "CommonBandwidthPackageIp",
    "CommonBandwidthPackageIpProps",
    "CommonBandwidthPackageProps",
    "CustomerGateway",
    "CustomerGatewayProps",
    "EIPAssociation",
    "EIPAssociationProps",
    "EIPProps",
    "Eip",
    "GrantInstanceToCen",
    "GrantInstanceToCenProps",
    "Ipv6Gateway",
    "Ipv6GatewayProps",
    "Ipv6InternetBandwidth",
    "Ipv6InternetBandwidthProps",
    "NatGateway",
    "NatGatewayProps",
    "PeeringRouterInterfaceBinding",
    "PeeringRouterInterfaceBindingProps",
    "PeeringRouterInterfaceConnection",
    "PeeringRouterInterfaceConnectionProps",
    "RosCommonBandwidthPackage",
    "RosCommonBandwidthPackageIp",
    "RosCommonBandwidthPackageIpProps",
    "RosCommonBandwidthPackageProps",
    "RosCustomerGateway",
    "RosCustomerGatewayProps",
    "RosEIP",
    "RosEIPAssociation",
    "RosEIPAssociationProps",
    "RosEIPProps",
    "RosGrantInstanceToCen",
    "RosGrantInstanceToCenProps",
    "RosIpv6Gateway",
    "RosIpv6GatewayProps",
    "RosIpv6InternetBandwidth",
    "RosIpv6InternetBandwidthProps",
    "RosNatGateway",
    "RosNatGatewayProps",
    "RosPeeringRouterInterfaceBinding",
    "RosPeeringRouterInterfaceBindingProps",
    "RosPeeringRouterInterfaceConnection",
    "RosPeeringRouterInterfaceConnectionProps",
    "RosRouteTable",
    "RosRouteTableAssociation",
    "RosRouteTableAssociationProps",
    "RosRouteTableProps",
    "RosRouterInterface",
    "RosRouterInterfaceProps",
    "RosSnatEntry",
    "RosSnatEntryProps",
    "RosSslVpnClientCert",
    "RosSslVpnClientCertProps",
    "RosSslVpnServer",
    "RosSslVpnServerProps",
    "RosVpnConnection",
    "RosVpnConnectionProps",
    "RosVpnGateway",
    "RosVpnGatewayProps",
    "RouteTable",
    "RouteTableAssociation",
    "RouteTableAssociationProps",
    "RouteTableProps",
    "RouterInterface",
    "RouterInterfaceProps",
    "SnatEntry",
    "SnatEntryProps",
    "SslVpnClientCert",
    "SslVpnClientCertProps",
    "SslVpnServer",
    "SslVpnServerProps",
    "VpnConnection",
    "VpnConnectionProps",
    "VpnGateway",
    "VpnGatewayProps",
]

publication.publish()
