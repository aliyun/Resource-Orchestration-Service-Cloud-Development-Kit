'''
## Aliyun ROS COMPUTENEST Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as COMPUTENEST from '@alicloud/ros-cdk-computenest';
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


class IntranetConnectorEndpoint(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-computenest.IntranetConnectorEndpoint",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ComputeNest::IntranetConnectorEndpoint``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIntranetConnectorEndpoint``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["IntranetConnectorEndpointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4dc5356e5c8322ae9ec37987d7a418cb5fd4d33d674211e3233436cceb4ab58)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EndpointId: The ID of the endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b933a9db8a086c2542489795b9392c4766bfec2876b1b2472e86dc0e4ff7823)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b1c13aea7d6a5d6f2725467ceae53bfceba6147fa856e5b67c37d9472b43b02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "IntranetConnectorEndpointProps":
        return typing.cast("IntranetConnectorEndpointProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "IntranetConnectorEndpointProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d6e1d1437c50b9f0c78240716b602e7cb31516e0a2cf806f2534ab7eb3b31b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3320494e0c02d3408d5eb700cecb415e2dba52872d963e7772752971b682d63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-computenest.IntranetConnectorEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "endpoint_region_id": "endpointRegionId",
        "vpc_id": "vpcId",
        "description": "description",
        "enable_private_zone": "enablePrivateZone",
        "name": "name",
        "resource_ids": "resourceIds",
        "type": "type",
    },
)
class IntranetConnectorEndpointProps:
    def __init__(
        self,
        *,
        endpoint_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_private_zone: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``IntranetConnectorEndpoint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint

        :param endpoint_region_id: Property endpointRegionId: The region ID of the endpoint.
        :param vpc_id: Property vpcId: The ID of the VPC to which the endpoint belongs.
        :param description: Property description: The description of the endpoint, supporting full character set. The length must not exceed 500 characters.
        :param enable_private_zone: Property enablePrivateZone: Whether to enable the private zone. This parameter is only valid when the access point type is Managed.
        :param name: Property name: The name of the endpoint, supporting full character set except space. The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
        :param resource_ids: Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC. Hosted access points do not require incoming.
        :param type: Property type: The type of the endpoint. - Private (default) : private access point - Managed: managed access point.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c971da0b3aafd83a4021f9f790482d201ed5d300a11e6fbc91ca2626df2364af)
            check_type(argname="argument endpoint_region_id", value=endpoint_region_id, expected_type=type_hints["endpoint_region_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_private_zone", value=enable_private_zone, expected_type=type_hints["enable_private_zone"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument resource_ids", value=resource_ids, expected_type=type_hints["resource_ids"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "endpoint_region_id": endpoint_region_id,
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if enable_private_zone is not None:
            self._values["enable_private_zone"] = enable_private_zone
        if name is not None:
            self._values["name"] = name
        if resource_ids is not None:
            self._values["resource_ids"] = resource_ids
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def endpoint_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endpointRegionId: The region ID of the endpoint.'''
        result = self._values.get("endpoint_region_id")
        assert result is not None, "Required property 'endpoint_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC to which the endpoint belongs.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the endpoint, supporting full character set.

        The length must not exceed 500 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enablePrivateZone: Whether to enable the private zone.

        This parameter is only valid when the access point type is Managed.
        '''
        result = self._values.get("enable_private_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the endpoint, supporting full character set except space.

        The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.

        Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
        Hosted access points do not require incoming.
        '''
        result = self._values.get("resource_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of the endpoint.

        - Private (default) : private access point
        - Managed: managed access point.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IntranetConnectorEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIntranetConnectorEndpoint(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-computenest.RosIntranetConnectorEndpoint",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ComputeNest::IntranetConnectorEndpoint``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``IntranetConnectorEndpoint`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIntranetConnectorEndpointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01004cba30e0241dabbcc34e8f0e5f25a413d91816668d2073fe78367f55c561)
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
            type_hints = typing.get_type_hints(_typecheckingstub__29d3105add53814041d1054b46702b29efe8a3da9c3b6682c2a72edcca4bb7fe)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndpointId: The ID of the endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__57dc6725adaec5765848de92d0a07a20ca095a89b6ecb5ee8d89c6c8d6e74554)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpointRegionId")
    def endpoint_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointRegionId: The region ID of the endpoint.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endpointRegionId"))

    @endpoint_region_id.setter
    def endpoint_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29d9bc18441734b54c644189161d5e8cedc4f7929258e2e214a6ca5c57258ff8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC to which the endpoint belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59346456e2bb8919316bebc8019442206a93177e74145e282562e4e5434dc2e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the endpoint, supporting full character set. The length must not exceed 500 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c8f6eb3af305ccc288eba2ba1ea47be6df7ca21a8995f3674b19285152a99f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enablePrivateZone")
    def enable_private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enablePrivateZone: Whether to enable the private zone.
        This parameter is only valid when the access point type is Managed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enablePrivateZone"))

    @enable_private_zone.setter
    def enable_private_zone(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e372ee3566a49769bc638578c9234cf1eaf434a7f64d1712a19c0839f0b5868)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enablePrivateZone", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint, supporting full character set except space. The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b90fb65c64b6510bd9e36588b9e29192ebefd25e94a95621226f54e4f0167cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="resourceIds")
    def resource_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
        Hosted access points do not require incoming.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "resourceIds"))

    @resource_ids.setter
    def resource_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__735885117b21d6e3b6b724245bdd7c4236760571e6f89c82a824301181399109)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceIds", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the endpoint.

        - Private (default) : private access point
        - Managed: managed access point.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd49af9ed2210ffc3964deab8cf4526207981b064a92f3611e61fa73502bd3f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-computenest.RosIntranetConnectorEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "endpoint_region_id": "endpointRegionId",
        "vpc_id": "vpcId",
        "description": "description",
        "enable_private_zone": "enablePrivateZone",
        "name": "name",
        "resource_ids": "resourceIds",
        "type": "type",
    },
)
class RosIntranetConnectorEndpointProps:
    def __init__(
        self,
        *,
        endpoint_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_private_zone: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosIntranetConnectorEndpoint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint

        :param endpoint_region_id: 
        :param vpc_id: 
        :param description: 
        :param enable_private_zone: 
        :param name: 
        :param resource_ids: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a093eea72522cd0a25beec59532476964ceb92d9f889a3552493390e9dd1605)
            check_type(argname="argument endpoint_region_id", value=endpoint_region_id, expected_type=type_hints["endpoint_region_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_private_zone", value=enable_private_zone, expected_type=type_hints["enable_private_zone"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument resource_ids", value=resource_ids, expected_type=type_hints["resource_ids"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "endpoint_region_id": endpoint_region_id,
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if enable_private_zone is not None:
            self._values["enable_private_zone"] = enable_private_zone
        if name is not None:
            self._values["name"] = name
        if resource_ids is not None:
            self._values["resource_ids"] = resource_ids
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def endpoint_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointRegionId: The region ID of the endpoint.
        '''
        result = self._values.get("endpoint_region_id")
        assert result is not None, "Required property 'endpoint_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC to which the endpoint belongs.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the endpoint, supporting full character set. The length must not exceed 500 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enablePrivateZone: Whether to enable the private zone.
        This parameter is only valid when the access point type is Managed.
        '''
        result = self._values.get("enable_private_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint, supporting full character set except space. The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
        Hosted access points do not require incoming.
        '''
        result = self._values.get("resource_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the endpoint.

        - Private (default) : private access point
        - Managed: managed access point.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIntranetConnectorEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosServiceInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-computenest.RosServiceInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ComputeNest::ServiceInstance``, which is used to create and deploy a service instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ServiceInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6000bd74c300b50b5899029e72643799a7cec31d40e45f1e644d7ffb7548686)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0e527c849f9874b549777729bbc382fbabccd4c61cd8d7864359f248b19895ea)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrComponents")
    def attr_components(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Components: Additional billing items.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrComponents"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Creation time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableInstanceOps")
    def attr_enable_instance_ops(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnableInstanceOps: Whether the service instance has the O & M function.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnableInstanceOps"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableUserPrometheus")
    def attr_enable_user_prometheus(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnableUserPrometheus: Whether Prometheus monitoring is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnableUserPrometheus"))

    @builtins.property
    @jsii.member(jsii_name="attrIsOperated")
    def attr_is_operated(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsOperated: Whether the generation O & M function of the service instance is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsOperated"))

    @builtins.property
    @jsii.member(jsii_name="attrLicenseEndTime")
    def attr_license_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LicenseEndTime: License expiration time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLicenseEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The name of the service instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkConfig")
    def attr_network_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkConfig: Network configuration information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Outputs: Create the output Field returned by the service instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Parameters: The parameters entered by the deployment service instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrPredefinedParameterName")
    def attr_predefined_parameter_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PredefinedParameterName: Package name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPredefinedParameterName"))

    @builtins.property
    @jsii.member(jsii_name="attrProgress")
    def attr_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Progress: The deployment progress of the service instance. Unit:%.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrService")
    def attr_service(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Service: Service details.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrService"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceInstanceId")
    def attr_service_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceInstanceId: The ID of the service instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceType")
    def attr_service_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceType: Service type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceType"))

    @builtins.property
    @jsii.member(jsii_name="attrSource")
    def attr_source(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Source: The source of the service instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSource"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusDetail")
    def attr_status_detail(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StatusDetail: The status description of the deployment instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatusDetail"))

    @builtins.property
    @jsii.member(jsii_name="attrSupplierUid")
    def attr_supplier_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SupplierUid: Service provider AliUid.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSupplierUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: User-defined labels.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateName: Template name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateName"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateTime: Update time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: AliUid of the user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3da80f478d7eec62f1d925d03a86f270f185f99fef50d437cbd29c4a8f63d9ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="service")
    def service(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceInstance.ServiceProperty"]:
        '''
        :Property: service: Service details.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceInstance.ServiceProperty"], jsii.get(self, "service"))

    @service.setter
    def service(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceInstance.ServiceProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd07929fb4bdc75af20e07143c1ffec7c99df4e881a88092260165a18ace6723)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "service", value)

    @builtins.property
    @jsii.member(jsii_name="commodity")
    def commodity(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceInstance.CommodityProperty"]]:
        '''
        :Property: commodity: Cloud market commodity purchase parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceInstance.CommodityProperty"]], jsii.get(self, "commodity"))

    @commodity.setter
    def commodity(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceInstance.CommodityProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b564d3a8f9a99a64725cad1d15a365f6688b71930129da483b86626730e3cbc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commodity", value)

    @builtins.property
    @jsii.member(jsii_name="contactGroup")
    def contact_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: contactGroup: Alarm Contact Group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "contactGroup"))

    @contact_group.setter
    def contact_group(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0346ac1f8bcc0fc0337d74ba5fd44d3ee0e47de59991076a258263dd8255a0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactGroup", value)

    @builtins.property
    @jsii.member(jsii_name="enableInstanceOps")
    def enable_instance_ops(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableInstanceOps: Whether the service instance has the O & M function. Possible values:

        - true: The service instance has a generation O & M function.
        - false: The service instance does not have the O & M function.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableInstanceOps"))

    @enable_instance_ops.setter
    def enable_instance_ops(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f1ed94a997a8e77ce214515bc7ff1fe487f6663b6589cc713dd6f8dbe1f1f53)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableInstanceOps", value)

    @builtins.property
    @jsii.member(jsii_name="enableUserPrometheus")
    def enable_user_prometheus(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableUserPrometheus: Whether Prometheus monitoring is enabled. Possible values:

        - true: enabled.
        - false: not enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableUserPrometheus"))

    @enable_user_prometheus.setter
    def enable_user_prometheus(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7129c12f00bf6eed62354cfc27bf00270f41f8df4f78d16533b210eba48e9d02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableUserPrometheus", value)

    @builtins.property
    @jsii.member(jsii_name="marketInstanceId")
    def market_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: marketInstanceId: The ID of the cloud marketplace instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "marketInstanceId"))

    @market_instance_id.setter
    def market_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5244f9fc41b44ce7844e85a39a6f9259916c1d040721917ad83aab4f0c9c6eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "marketInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the service instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8d0055288576619bb56352f2821b5c38fd399a2dc2aa964245432c453a0cae9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="operationName")
    def operation_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: operationName: Change operation name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "operationName"))

    @operation_name.setter
    def operation_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3a7319c4767c19d40745cbad12ecd7221ee1b666dee6ca5282cd5c620ba6605)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "operationName", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The parameters entered by the deployment service instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__764220405f8f3292e3e4a7fb329e969c5bbd3cb7110b784d00a0bd5ae964d8ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="predefinedParameterName")
    def predefined_parameter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: predefinedParameterName: Package name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "predefinedParameterName"))

    @predefined_parameter_name.setter
    def predefined_parameter_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f5ab1434bb6792085d57ac4e6a90994ab91a23d67f558910c6b9a78d7f5d0ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "predefinedParameterName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1b4098b348839b7a054b4f835c38be00c9becf4e2e1c444fc80d112b1755d3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="specificationCode")
    def specification_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: specificationCode: Commodity specification Code.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "specificationCode"))

    @specification_code.setter
    def specification_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0e6fbda82b4d3e0ae138b27d9264b0a956624359c461a323eee3d5a8167d66b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "specificationCode", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosServiceInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags of service instance.
        '''
        return typing.cast(typing.Optional[typing.List["RosServiceInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosServiceInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efea0664f771bc93be52bfb93ddc55f0a64b07eddb6db4b16bb8bfde3cc30645)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateName: Template name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b75117a0d434d179b14d0977f26aaf84b754e596d553e0863063a76493826ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-computenest.RosServiceInstance.CommodityProperty",
        jsii_struct_bases=[],
        name_mapping={"pay_period": "payPeriod", "pay_period_unit": "payPeriodUnit"},
    )
    class CommodityProperty:
        def __init__(
            self,
            *,
            pay_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            pay_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param pay_period: 
            :param pay_period_unit: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8f5443f7ec6f886bc9d2dae36bbe3553ed1df1707679e3daff4afbd33311832a)
                check_type(argname="argument pay_period", value=pay_period, expected_type=type_hints["pay_period"])
                check_type(argname="argument pay_period_unit", value=pay_period_unit, expected_type=type_hints["pay_period_unit"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if pay_period is not None:
                self._values["pay_period"] = pay_period
            if pay_period_unit is not None:
                self._values["pay_period_unit"] = pay_period_unit

        @builtins.property
        def pay_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: payPeriod: Cloud Market Goods Purchase Duration.
            '''
            result = self._values.get("pay_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def pay_period_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            payPeriodUnit: Cloud market goods purchase time unit, possible value:

            - Month: monthly purchase
            - Year: buy on an annual basis.
            '''
            result = self._values.get("pay_period_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CommodityProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-computenest.RosServiceInstance.ServiceProperty",
        jsii_struct_bases=[],
        name_mapping={"service_id": "serviceId", "version": "version"},
    )
    class ServiceProperty:
        def __init__(
            self,
            *,
            service_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param service_id: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0d66092ba5f0ea2cdc42db614a90cf0d51244ca46a2f2c6eb4871020eb4d166c)
                check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "service_id": service_id,
            }
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def service_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serviceId: The service ID.
            '''
            result = self._values.get("service_id")
            assert result is not None, "Required property 'service_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: Service version.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServiceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-computenest.RosServiceInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__371746a1a80d209209c71e50c1f6b1b16974d9fec5215d2391eafa9bfc8263c5)
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
    jsii_type="@alicloud/ros-cdk-computenest.RosServiceInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service": "service",
        "commodity": "commodity",
        "contact_group": "contactGroup",
        "enable_instance_ops": "enableInstanceOps",
        "enable_user_prometheus": "enableUserPrometheus",
        "market_instance_id": "marketInstanceId",
        "name": "name",
        "operation_name": "operationName",
        "parameters": "parameters",
        "predefined_parameter_name": "predefinedParameterName",
        "resource_group_id": "resourceGroupId",
        "specification_code": "specificationCode",
        "tags": "tags",
        "template_name": "templateName",
    },
)
class RosServiceInstanceProps:
    def __init__(
        self,
        *,
        service: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceInstance.ServiceProperty, typing.Dict[builtins.str, typing.Any]]],
        commodity: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceInstance.CommodityProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        contact_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_instance_ops: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_user_prometheus: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        market_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        operation_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        predefined_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        specification_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosServiceInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosServiceInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance

        :param service: 
        :param commodity: 
        :param contact_group: 
        :param enable_instance_ops: 
        :param enable_user_prometheus: 
        :param market_instance_id: 
        :param name: 
        :param operation_name: 
        :param parameters: 
        :param predefined_parameter_name: 
        :param resource_group_id: 
        :param specification_code: 
        :param tags: 
        :param template_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64f3f318de6a4c1ee07a120794bfe50f7a12739e58185330a0bfa697c65c5758)
            check_type(argname="argument service", value=service, expected_type=type_hints["service"])
            check_type(argname="argument commodity", value=commodity, expected_type=type_hints["commodity"])
            check_type(argname="argument contact_group", value=contact_group, expected_type=type_hints["contact_group"])
            check_type(argname="argument enable_instance_ops", value=enable_instance_ops, expected_type=type_hints["enable_instance_ops"])
            check_type(argname="argument enable_user_prometheus", value=enable_user_prometheus, expected_type=type_hints["enable_user_prometheus"])
            check_type(argname="argument market_instance_id", value=market_instance_id, expected_type=type_hints["market_instance_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument operation_name", value=operation_name, expected_type=type_hints["operation_name"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument predefined_parameter_name", value=predefined_parameter_name, expected_type=type_hints["predefined_parameter_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument specification_code", value=specification_code, expected_type=type_hints["specification_code"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service": service,
        }
        if commodity is not None:
            self._values["commodity"] = commodity
        if contact_group is not None:
            self._values["contact_group"] = contact_group
        if enable_instance_ops is not None:
            self._values["enable_instance_ops"] = enable_instance_ops
        if enable_user_prometheus is not None:
            self._values["enable_user_prometheus"] = enable_user_prometheus
        if market_instance_id is not None:
            self._values["market_instance_id"] = market_instance_id
        if name is not None:
            self._values["name"] = name
        if operation_name is not None:
            self._values["operation_name"] = operation_name
        if parameters is not None:
            self._values["parameters"] = parameters
        if predefined_parameter_name is not None:
            self._values["predefined_parameter_name"] = predefined_parameter_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if specification_code is not None:
            self._values["specification_code"] = specification_code
        if tags is not None:
            self._values["tags"] = tags
        if template_name is not None:
            self._values["template_name"] = template_name

    @builtins.property
    def service(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.ServiceProperty]:
        '''
        :Property: service: Service details.
        '''
        result = self._values.get("service")
        assert result is not None, "Required property 'service' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.ServiceProperty], result)

    @builtins.property
    def commodity(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.CommodityProperty]]:
        '''
        :Property: commodity: Cloud market commodity purchase parameters.
        '''
        result = self._values.get("commodity")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.CommodityProperty]], result)

    @builtins.property
    def contact_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: contactGroup: Alarm Contact Group.
        '''
        result = self._values.get("contact_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_instance_ops(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableInstanceOps: Whether the service instance has the O & M function. Possible values:

        - true: The service instance has a generation O & M function.
        - false: The service instance does not have the O & M function.
        '''
        result = self._values.get("enable_instance_ops")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_user_prometheus(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableUserPrometheus: Whether Prometheus monitoring is enabled. Possible values:

        - true: enabled.
        - false: not enabled.
        '''
        result = self._values.get("enable_user_prometheus")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def market_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: marketInstanceId: The ID of the cloud marketplace instance.
        '''
        result = self._values.get("market_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the service instance.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def operation_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: operationName: Change operation name.
        '''
        result = self._values.get("operation_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The parameters entered by the deployment service instance.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def predefined_parameter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: predefinedParameterName: Package name.
        '''
        result = self._values.get("predefined_parameter_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def specification_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: specificationCode: Commodity specification Code.
        '''
        result = self._values.get("specification_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosServiceInstance.TagsProperty]]:
        '''
        :Property: tags: Tags of service instance.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosServiceInstance.TagsProperty]], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateName: Template name.
        '''
        result = self._values.get("template_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ServiceInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-computenest.ServiceInstance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ComputeNest::ServiceInstance``, which is used to create and deploy a service instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosServiceInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__096fbfc5892d66ae109dbbb3b42e0e29fa17724e1ad8544253e8d2384e991cb8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrComponents")
    def attr_components(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Components: Additional billing items.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrComponents"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableInstanceOps")
    def attr_enable_instance_ops(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnableInstanceOps: Whether the service instance has the O & M function.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnableInstanceOps"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableUserPrometheus")
    def attr_enable_user_prometheus(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnableUserPrometheus"))

    @builtins.property
    @jsii.member(jsii_name="attrIsOperated")
    def attr_is_operated(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsOperated: Whether the generation O & M function of the service instance is enabled.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsOperated"))

    @builtins.property
    @jsii.member(jsii_name="attrLicenseEndTime")
    def attr_license_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LicenseEndTime: License expiration time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLicenseEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: The name of the service instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkConfig")
    def attr_network_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkConfig: Network configuration information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Outputs: Create the output Field returned by the service instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Parameters: The parameters entered by the deployment service instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrPredefinedParameterName")
    def attr_predefined_parameter_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PredefinedParameterName: Package name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPredefinedParameterName"))

    @builtins.property
    @jsii.member(jsii_name="attrProgress")
    def attr_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Progress: The deployment progress of the service instance.

        Unit:%.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrService")
    def attr_service(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Service: Service details.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrService"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceInstanceId")
    def attr_service_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceInstanceId: The ID of the service instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceType")
    def attr_service_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceType: Service type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceType"))

    @builtins.property
    @jsii.member(jsii_name="attrSource")
    def attr_source(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Source: The source of the service instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSource"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusDetail")
    def attr_status_detail(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StatusDetail: The status description of the deployment instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatusDetail"))

    @builtins.property
    @jsii.member(jsii_name="attrSupplierUid")
    def attr_supplier_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SupplierUid: Service provider AliUid.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSupplierUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: User-defined labels.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TemplateName: Template name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateName"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdateTime: Update time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserId: AliUid of the user.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a865eb4036e1d0166c1dd24734476c6eb967fb1dfbdcbf990e12f5691b13db3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35f31cd7fa9c25a750503117a7e415a872b7306b00b7027afcadf57e755e6c2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ServiceInstanceProps":
        return typing.cast("ServiceInstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ServiceInstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f403f3aa0e1a55b1998bb712e64f1f84ea6bf4ac47c4819ecfc310c697b0bcd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09c2e8c8a26aa0a633a9ecbe1b267dbb806995c0ded62eb2b90cabddc867bcfe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-computenest.ServiceInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service": "service",
        "commodity": "commodity",
        "contact_group": "contactGroup",
        "enable_instance_ops": "enableInstanceOps",
        "enable_user_prometheus": "enableUserPrometheus",
        "market_instance_id": "marketInstanceId",
        "name": "name",
        "operation_name": "operationName",
        "parameters": "parameters",
        "predefined_parameter_name": "predefinedParameterName",
        "resource_group_id": "resourceGroupId",
        "specification_code": "specificationCode",
        "tags": "tags",
        "template_name": "templateName",
    },
)
class ServiceInstanceProps:
    def __init__(
        self,
        *,
        service: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceInstance.ServiceProperty, typing.Dict[builtins.str, typing.Any]]],
        commodity: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceInstance.CommodityProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        contact_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_instance_ops: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_user_prometheus: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        market_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        operation_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        predefined_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        specification_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosServiceInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ServiceInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance

        :param service: Property service: Service details.
        :param commodity: Property commodity: Cloud market commodity purchase parameters.
        :param contact_group: Property contactGroup: Alarm Contact Group.
        :param enable_instance_ops: Property enableInstanceOps: Whether the service instance has the O & M function. Possible values: - true: The service instance has a generation O & M function. - false: The service instance does not have the O & M function.
        :param enable_user_prometheus: Property enableUserPrometheus: Whether Prometheus monitoring is enabled. Possible values: - true: enabled. - false: not enabled.
        :param market_instance_id: Property marketInstanceId: The ID of the cloud marketplace instance.
        :param name: Property name: The name of the service instance.
        :param operation_name: Property operationName: Change operation name.
        :param parameters: Property parameters: The parameters entered by the deployment service instance.
        :param predefined_parameter_name: Property predefinedParameterName: Package name.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param specification_code: Property specificationCode: Commodity specification Code.
        :param tags: Property tags: Tags of service instance.
        :param template_name: Property templateName: Template name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47129f4e549b144b413e590cdecc0eeb7b0fd809de6fab63b1ef9cb2fecafb49)
            check_type(argname="argument service", value=service, expected_type=type_hints["service"])
            check_type(argname="argument commodity", value=commodity, expected_type=type_hints["commodity"])
            check_type(argname="argument contact_group", value=contact_group, expected_type=type_hints["contact_group"])
            check_type(argname="argument enable_instance_ops", value=enable_instance_ops, expected_type=type_hints["enable_instance_ops"])
            check_type(argname="argument enable_user_prometheus", value=enable_user_prometheus, expected_type=type_hints["enable_user_prometheus"])
            check_type(argname="argument market_instance_id", value=market_instance_id, expected_type=type_hints["market_instance_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument operation_name", value=operation_name, expected_type=type_hints["operation_name"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument predefined_parameter_name", value=predefined_parameter_name, expected_type=type_hints["predefined_parameter_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument specification_code", value=specification_code, expected_type=type_hints["specification_code"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service": service,
        }
        if commodity is not None:
            self._values["commodity"] = commodity
        if contact_group is not None:
            self._values["contact_group"] = contact_group
        if enable_instance_ops is not None:
            self._values["enable_instance_ops"] = enable_instance_ops
        if enable_user_prometheus is not None:
            self._values["enable_user_prometheus"] = enable_user_prometheus
        if market_instance_id is not None:
            self._values["market_instance_id"] = market_instance_id
        if name is not None:
            self._values["name"] = name
        if operation_name is not None:
            self._values["operation_name"] = operation_name
        if parameters is not None:
            self._values["parameters"] = parameters
        if predefined_parameter_name is not None:
            self._values["predefined_parameter_name"] = predefined_parameter_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if specification_code is not None:
            self._values["specification_code"] = specification_code
        if tags is not None:
            self._values["tags"] = tags
        if template_name is not None:
            self._values["template_name"] = template_name

    @builtins.property
    def service(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.ServiceProperty]:
        '''Property service: Service details.'''
        result = self._values.get("service")
        assert result is not None, "Required property 'service' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.ServiceProperty], result)

    @builtins.property
    def commodity(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.CommodityProperty]]:
        '''Property commodity: Cloud market commodity purchase parameters.'''
        result = self._values.get("commodity")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.CommodityProperty]], result)

    @builtins.property
    def contact_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property contactGroup: Alarm Contact Group.'''
        result = self._values.get("contact_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_instance_ops(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableInstanceOps: Whether the service instance has the O & M function.

        Possible values:

        - true: The service instance has a generation O & M function.
        - false: The service instance does not have the O & M function.
        '''
        result = self._values.get("enable_instance_ops")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_user_prometheus(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableUserPrometheus: Whether Prometheus monitoring is enabled.

        Possible values:

        - true: enabled.
        - false: not enabled.
        '''
        result = self._values.get("enable_user_prometheus")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def market_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property marketInstanceId: The ID of the cloud marketplace instance.'''
        result = self._values.get("market_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the service instance.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def operation_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property operationName: Change operation name.'''
        result = self._values.get("operation_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: The parameters entered by the deployment service instance.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def predefined_parameter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property predefinedParameterName: Package name.'''
        result = self._values.get("predefined_parameter_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def specification_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property specificationCode: Commodity specification Code.'''
        result = self._values.get("specification_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosServiceInstance.TagsProperty]]:
        '''Property tags: Tags of service instance.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosServiceInstance.TagsProperty]], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateName: Template name.'''
        result = self._values.get("template_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IntranetConnectorEndpoint",
    "IntranetConnectorEndpointProps",
    "RosIntranetConnectorEndpoint",
    "RosIntranetConnectorEndpointProps",
    "RosServiceInstance",
    "RosServiceInstanceProps",
    "ServiceInstance",
    "ServiceInstanceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__e4dc5356e5c8322ae9ec37987d7a418cb5fd4d33d674211e3233436cceb4ab58(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[IntranetConnectorEndpointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b933a9db8a086c2542489795b9392c4766bfec2876b1b2472e86dc0e4ff7823(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b1c13aea7d6a5d6f2725467ceae53bfceba6147fa856e5b67c37d9472b43b02(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d6e1d1437c50b9f0c78240716b602e7cb31516e0a2cf806f2534ab7eb3b31b7(
    value: IntranetConnectorEndpointProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3320494e0c02d3408d5eb700cecb415e2dba52872d963e7772752971b682d63(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c971da0b3aafd83a4021f9f790482d201ed5d300a11e6fbc91ca2626df2364af(
    *,
    endpoint_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_private_zone: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01004cba30e0241dabbcc34e8f0e5f25a413d91816668d2073fe78367f55c561(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIntranetConnectorEndpointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29d3105add53814041d1054b46702b29efe8a3da9c3b6682c2a72edcca4bb7fe(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57dc6725adaec5765848de92d0a07a20ca095a89b6ecb5ee8d89c6c8d6e74554(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29d9bc18441734b54c644189161d5e8cedc4f7929258e2e214a6ca5c57258ff8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59346456e2bb8919316bebc8019442206a93177e74145e282562e4e5434dc2e3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c8f6eb3af305ccc288eba2ba1ea47be6df7ca21a8995f3674b19285152a99f2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e372ee3566a49769bc638578c9234cf1eaf434a7f64d1712a19c0839f0b5868(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b90fb65c64b6510bd9e36588b9e29192ebefd25e94a95621226f54e4f0167cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__735885117b21d6e3b6b724245bdd7c4236760571e6f89c82a824301181399109(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd49af9ed2210ffc3964deab8cf4526207981b064a92f3611e61fa73502bd3f0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a093eea72522cd0a25beec59532476964ceb92d9f889a3552493390e9dd1605(
    *,
    endpoint_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_private_zone: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6000bd74c300b50b5899029e72643799a7cec31d40e45f1e644d7ffb7548686(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e527c849f9874b549777729bbc382fbabccd4c61cd8d7864359f248b19895ea(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3da80f478d7eec62f1d925d03a86f270f185f99fef50d437cbd29c4a8f63d9ec(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd07929fb4bdc75af20e07143c1ffec7c99df4e881a88092260165a18ace6723(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.ServiceProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b564d3a8f9a99a64725cad1d15a365f6688b71930129da483b86626730e3cbc6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceInstance.CommodityProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0346ac1f8bcc0fc0337d74ba5fd44d3ee0e47de59991076a258263dd8255a0f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f1ed94a997a8e77ce214515bc7ff1fe487f6663b6589cc713dd6f8dbe1f1f53(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7129c12f00bf6eed62354cfc27bf00270f41f8df4f78d16533b210eba48e9d02(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5244f9fc41b44ce7844e85a39a6f9259916c1d040721917ad83aab4f0c9c6eb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8d0055288576619bb56352f2821b5c38fd399a2dc2aa964245432c453a0cae9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3a7319c4767c19d40745cbad12ecd7221ee1b666dee6ca5282cd5c620ba6605(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__764220405f8f3292e3e4a7fb329e969c5bbd3cb7110b784d00a0bd5ae964d8ac(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f5ab1434bb6792085d57ac4e6a90994ab91a23d67f558910c6b9a78d7f5d0ad(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1b4098b348839b7a054b4f835c38be00c9becf4e2e1c444fc80d112b1755d3b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0e6fbda82b4d3e0ae138b27d9264b0a956624359c461a323eee3d5a8167d66b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efea0664f771bc93be52bfb93ddc55f0a64b07eddb6db4b16bb8bfde3cc30645(
    value: typing.Optional[typing.List[RosServiceInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b75117a0d434d179b14d0977f26aaf84b754e596d553e0863063a76493826ba(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f5443f7ec6f886bc9d2dae36bbe3553ed1df1707679e3daff4afbd33311832a(
    *,
    pay_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d66092ba5f0ea2cdc42db614a90cf0d51244ca46a2f2c6eb4871020eb4d166c(
    *,
    service_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__371746a1a80d209209c71e50c1f6b1b16974d9fec5215d2391eafa9bfc8263c5(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64f3f318de6a4c1ee07a120794bfe50f7a12739e58185330a0bfa697c65c5758(
    *,
    service: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceInstance.ServiceProperty, typing.Dict[builtins.str, typing.Any]]],
    commodity: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceInstance.CommodityProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    contact_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_instance_ops: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_user_prometheus: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    market_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    operation_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    predefined_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    specification_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosServiceInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__096fbfc5892d66ae109dbbb3b42e0e29fa17724e1ad8544253e8d2384e991cb8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a865eb4036e1d0166c1dd24734476c6eb967fb1dfbdcbf990e12f5691b13db3d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35f31cd7fa9c25a750503117a7e415a872b7306b00b7027afcadf57e755e6c2b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f403f3aa0e1a55b1998bb712e64f1f84ea6bf4ac47c4819ecfc310c697b0bcd3(
    value: ServiceInstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09c2e8c8a26aa0a633a9ecbe1b267dbb806995c0ded62eb2b90cabddc867bcfe(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47129f4e549b144b413e590cdecc0eeb7b0fd809de6fab63b1ef9cb2fecafb49(
    *,
    service: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceInstance.ServiceProperty, typing.Dict[builtins.str, typing.Any]]],
    commodity: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceInstance.CommodityProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    contact_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_instance_ops: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_user_prometheus: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    market_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    operation_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    predefined_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    specification_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosServiceInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
