'''
## Aliyun ROS BASTIONHOST Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as BASTIONHOST from '@alicloud/ros-cdk-bastionhost';
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

import ros_cdk_core


class Host(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.Host",
):
    '''A ROS resource type:  ``ALIYUN::BastionHost::Host``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["HostProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::BastionHost::Host``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[HostProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHostId")
    def attr_host_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostId: The ID of the host that was created.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.HostProps",
    jsii_struct_bases=[],
    name_mapping={
        "active_address_type": "activeAddressType",
        "host_name": "hostName",
        "instance_id": "instanceId",
        "os_type": "osType",
        "source": "source",
        "comment": "comment",
        "host_private_address": "hostPrivateAddress",
        "host_public_address": "hostPublicAddress",
        "instance_region_id": "instanceRegionId",
        "source_instance_id": "sourceInstanceId",
    },
)
class HostProps:
    def __init__(
        self,
        *,
        active_address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        os_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        host_private_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        host_public_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BastionHost::Host``.

        :param active_address_type: Property activeAddressType: The endpoint type of the host that you want to create. Valid values: Public: a public endpoint Private: an internal endpoint
        :param host_name: Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        :param instance_id: Property instanceId: The ID of the Bastionhost instance where you want to create the host. Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        :param os_type: Property osType: The operating system of the host that you want to create. Valid values: - Linux - Windows
        :param source: Property source: The source of the host that you want to create. Valid values: - Local: an on-premises host - Ecs: an Elastic Compute Service (ECS) instance - Rds: a host in a dedicated cluster
        :param comment: Property comment: The description of the host that you want to create. The value can be up to 500 characters.
        :param host_private_address: Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address. Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        :param host_public_address: Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address. Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        :param instance_region_id: Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides. Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        :param source_instance_id: Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create. Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        if __debug__:
            def stub(
                *,
                active_address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                host_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                os_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                host_private_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                host_public_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                instance_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                source_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument active_address_type", value=active_address_type, expected_type=type_hints["active_address_type"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument host_private_address", value=host_private_address, expected_type=type_hints["host_private_address"])
            check_type(argname="argument host_public_address", value=host_public_address, expected_type=type_hints["host_public_address"])
            check_type(argname="argument instance_region_id", value=instance_region_id, expected_type=type_hints["instance_region_id"])
            check_type(argname="argument source_instance_id", value=source_instance_id, expected_type=type_hints["source_instance_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "active_address_type": active_address_type,
            "host_name": host_name,
            "instance_id": instance_id,
            "os_type": os_type,
            "source": source,
        }
        if comment is not None:
            self._values["comment"] = comment
        if host_private_address is not None:
            self._values["host_private_address"] = host_private_address
        if host_public_address is not None:
            self._values["host_public_address"] = host_public_address
        if instance_region_id is not None:
            self._values["instance_region_id"] = instance_region_id
        if source_instance_id is not None:
            self._values["source_instance_id"] = source_instance_id

    @builtins.property
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property activeAddressType: The endpoint type of the host that you want to create.

        Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        result = self._values.get("active_address_type")
        assert result is not None, "Required property 'active_address_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property hostName: The name of the host that you want to create.

        The name can be up to 128 characters in length.
        '''
        result = self._values.get("host_name")
        assert result is not None, "Required property 'host_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of the Bastionhost instance where you want to create the host.

        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def os_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property osType: The operating system of the host that you want to create.

        Valid values:

        - Linux
        - Windows
        '''
        result = self._values.get("os_type")
        assert result is not None, "Required property 'os_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property source: The source of the host that you want to create.

        Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property comment: The description of the host that you want to create.

        The value can be up to 500 characters.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property hostPrivateAddress: The internal endpoint of the host that you want to create.

        You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        result = self._values.get("host_private_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property hostPublicAddress: The public endpoint of the host that you want to create.

        You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        result = self._values.get("host_public_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.

        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("instance_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.

        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("source_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHost(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHost",
):
    '''A ROS template type:  ``ALIYUN::BastionHost::Host``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosHostProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BastionHost::Host``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosHostProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHostId")
    def attr_host_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostId: The ID of the host that was created.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="activeAddressType")
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        activeAddressType: The endpoint type of the host that you want to create. Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "activeAddressType"))

    @active_address_type.setter
    def active_address_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "activeAddressType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostName")
    def host_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "hostName"))

    @host_name.setter
    def host_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Bastionhost instance where you want to create the host.
        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="osType")
    def os_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        osType: The operating system of the host that you want to create. Valid values:

        - Linux
        - Windows
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osType", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        source: The source of the host that you want to create. Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comment: The description of the host that you want to create. The value can be up to 500 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="hostPrivateAddress")
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "hostPrivateAddress"))

    @host_private_address.setter
    def host_private_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostPrivateAddress", value)

    @builtins.property
    @jsii.member(jsii_name="hostPublicAddress")
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "hostPublicAddress"))

    @host_public_address.setter
    def host_public_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostPublicAddress", value)

    @builtins.property
    @jsii.member(jsii_name="instanceRegionId")
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceRegionId"))

    @instance_region_id.setter
    def instance_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceInstanceId")
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sourceInstanceId"))

    @source_instance_id.setter
    def source_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHostProps",
    jsii_struct_bases=[],
    name_mapping={
        "active_address_type": "activeAddressType",
        "host_name": "hostName",
        "instance_id": "instanceId",
        "os_type": "osType",
        "source": "source",
        "comment": "comment",
        "host_private_address": "hostPrivateAddress",
        "host_public_address": "hostPublicAddress",
        "instance_region_id": "instanceRegionId",
        "source_instance_id": "sourceInstanceId",
    },
)
class RosHostProps:
    def __init__(
        self,
        *,
        active_address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        os_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        host_private_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        host_public_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BastionHost::Host``.

        :param active_address_type: 
        :param host_name: 
        :param instance_id: 
        :param os_type: 
        :param source: 
        :param comment: 
        :param host_private_address: 
        :param host_public_address: 
        :param instance_region_id: 
        :param source_instance_id: 
        '''
        if __debug__:
            def stub(
                *,
                active_address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                host_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                os_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                host_private_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                host_public_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                instance_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                source_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument active_address_type", value=active_address_type, expected_type=type_hints["active_address_type"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument host_private_address", value=host_private_address, expected_type=type_hints["host_private_address"])
            check_type(argname="argument host_public_address", value=host_public_address, expected_type=type_hints["host_public_address"])
            check_type(argname="argument instance_region_id", value=instance_region_id, expected_type=type_hints["instance_region_id"])
            check_type(argname="argument source_instance_id", value=source_instance_id, expected_type=type_hints["source_instance_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "active_address_type": active_address_type,
            "host_name": host_name,
            "instance_id": instance_id,
            "os_type": os_type,
            "source": source,
        }
        if comment is not None:
            self._values["comment"] = comment
        if host_private_address is not None:
            self._values["host_private_address"] = host_private_address
        if host_public_address is not None:
            self._values["host_public_address"] = host_public_address
        if instance_region_id is not None:
            self._values["instance_region_id"] = instance_region_id
        if source_instance_id is not None:
            self._values["source_instance_id"] = source_instance_id

    @builtins.property
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        activeAddressType: The endpoint type of the host that you want to create. Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        result = self._values.get("active_address_type")
        assert result is not None, "Required property 'active_address_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        '''
        result = self._values.get("host_name")
        assert result is not None, "Required property 'host_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Bastionhost instance where you want to create the host.
        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def os_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        osType: The operating system of the host that you want to create. Valid values:

        - Linux
        - Windows
        '''
        result = self._values.get("os_type")
        assert result is not None, "Required property 'os_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        source: The source of the host that you want to create. Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comment: The description of the host that you want to create. The value can be up to 500 characters.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        result = self._values.get("host_private_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        result = self._values.get("host_public_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("instance_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("source_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Host",
    "HostProps",
    "RosHost",
    "RosHostProps",
]

publication.publish()
