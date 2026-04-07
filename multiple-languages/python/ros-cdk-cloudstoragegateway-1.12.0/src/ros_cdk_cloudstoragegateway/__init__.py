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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.ExpressSyncProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "bucket_region": "bucketRegion",
        "name": "name",
        "bucket_prefix": "bucketPrefix",
        "description": "description",
    },
)
class ExpressSyncProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bucket_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bucket_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ExpressSync``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync

        :param bucket_name: Property bucketName: The name of the OSS bucket.
        :param bucket_region: Property bucketRegion: The region of the OSS bucket.
        :param name: Property name: The name of the ExpressSync.
        :param bucket_prefix: Property bucketPrefix: The prefix of the OSS bucket.
        :param description: Property description: The description of the ExpressSync.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ed35ffc46eaabc3388925671c84f5cb9f795ff7adf1678f1a9c853fdad9ead7)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument bucket_region", value=bucket_region, expected_type=type_hints["bucket_region"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument bucket_prefix", value=bucket_prefix, expected_type=type_hints["bucket_prefix"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "bucket_region": bucket_region,
            "name": name,
        }
        if bucket_prefix is not None:
            self._values["bucket_prefix"] = bucket_prefix
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: The name of the OSS bucket.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bucket_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketRegion: The region of the OSS bucket.'''
        result = self._values.get("bucket_region")
        assert result is not None, "Required property 'bucket_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the ExpressSync.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bucket_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bucketPrefix: The prefix of the OSS bucket.'''
        result = self._values.get("bucket_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the ExpressSync.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ExpressSyncProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.GatewayLoggingProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_id": "gatewayId",
        "sls_logstore": "slsLogstore",
        "sls_project": "slsProject",
    },
)
class GatewayLoggingProps:
    def __init__(
        self,
        *,
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sls_logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sls_project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``GatewayLogging``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging

        :param gateway_id: Property gatewayId: The ID of the gateway.
        :param sls_logstore: Property slsLogstore: The name of the SLS log store.
        :param sls_project: Property slsProject: The name of the SLS project.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f210a20fca2c648edb7d170495a219df385db53c97070f95c733e52b24397b0d)
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument sls_logstore", value=sls_logstore, expected_type=type_hints["sls_logstore"])
            check_type(argname="argument sls_project", value=sls_project, expected_type=type_hints["sls_project"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_id": gateway_id,
            "sls_logstore": sls_logstore,
            "sls_project": sls_project,
        }

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayId: The ID of the gateway.'''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sls_logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property slsLogstore: The name of the SLS log store.'''
        result = self._values.get("sls_logstore")
        assert result is not None, "Required property 'sls_logstore' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sls_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property slsProject: The name of the SLS project.'''
        result = self._values.get("sls_project")
        assert result is not None, "Required property 'sls_project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GatewayLoggingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.GatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "location": "location",
        "name": "name",
        "type": "type",
        "description": "description",
        "gateway_class": "gatewayClass",
        "post_paid": "postPaid",
        "public_network_bandwidth": "publicNetworkBandwidth",
        "release_after_expiration": "releaseAfterExpiration",
        "resource_region_id": "resourceRegionId",
        "secondary_v_switch_id": "secondaryVSwitchId",
        "storage_bundle_id": "storageBundleId",
        "untrusted_env_id": "untrustedEnvId",
        "untrusted_env_instance_type": "untrustedEnvInstanceType",
        "v_switch_id": "vSwitchId",
    },
)
class GatewayProps:
    def __init__(
        self,
        *,
        category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gateway_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_paid: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        public_network_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release_after_expiration: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_bundle_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        untrusted_env_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        untrusted_env_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Gateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway

        :param category: Property category: The category of the gateway.
        :param location: Property location: The location of the gateway.
        :param name: Property name: The name of the gateway.
        :param type: Property type: The type of the gateway.
        :param description: Property description: The description of the gateway.
        :param gateway_class: Property gatewayClass: The class of the gateway.
        :param post_paid: Property postPaid: Whether the gateway is pay-as-you-go.
        :param public_network_bandwidth: Property publicNetworkBandwidth: The public network bandwidth of the gateway.
        :param release_after_expiration: Property releaseAfterExpiration: Whether to release the gateway after expiration.
        :param resource_region_id: Property resourceRegionId: The region ID of the resource.
        :param secondary_v_switch_id: Property secondaryVSwitchId: The ID of the secondary VSwitch.
        :param storage_bundle_id: Property storageBundleId: The ID of the storage bundle.
        :param untrusted_env_id: Property untrustedEnvId: The ID of the untrusted environment.
        :param untrusted_env_instance_type: Property untrustedEnvInstanceType: The instance type of the untrusted environment.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea2afdd452839bef173a207caeaa92cdd55b54a77383b1271b7563a517626920)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument location", value=location, expected_type=type_hints["location"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument gateway_class", value=gateway_class, expected_type=type_hints["gateway_class"])
            check_type(argname="argument post_paid", value=post_paid, expected_type=type_hints["post_paid"])
            check_type(argname="argument public_network_bandwidth", value=public_network_bandwidth, expected_type=type_hints["public_network_bandwidth"])
            check_type(argname="argument release_after_expiration", value=release_after_expiration, expected_type=type_hints["release_after_expiration"])
            check_type(argname="argument resource_region_id", value=resource_region_id, expected_type=type_hints["resource_region_id"])
            check_type(argname="argument secondary_v_switch_id", value=secondary_v_switch_id, expected_type=type_hints["secondary_v_switch_id"])
            check_type(argname="argument storage_bundle_id", value=storage_bundle_id, expected_type=type_hints["storage_bundle_id"])
            check_type(argname="argument untrusted_env_id", value=untrusted_env_id, expected_type=type_hints["untrusted_env_id"])
            check_type(argname="argument untrusted_env_instance_type", value=untrusted_env_instance_type, expected_type=type_hints["untrusted_env_instance_type"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "category": category,
            "location": location,
            "name": name,
            "type": type,
        }
        if description is not None:
            self._values["description"] = description
        if gateway_class is not None:
            self._values["gateway_class"] = gateway_class
        if post_paid is not None:
            self._values["post_paid"] = post_paid
        if public_network_bandwidth is not None:
            self._values["public_network_bandwidth"] = public_network_bandwidth
        if release_after_expiration is not None:
            self._values["release_after_expiration"] = release_after_expiration
        if resource_region_id is not None:
            self._values["resource_region_id"] = resource_region_id
        if secondary_v_switch_id is not None:
            self._values["secondary_v_switch_id"] = secondary_v_switch_id
        if storage_bundle_id is not None:
            self._values["storage_bundle_id"] = storage_bundle_id
        if untrusted_env_id is not None:
            self._values["untrusted_env_id"] = untrusted_env_id
        if untrusted_env_instance_type is not None:
            self._values["untrusted_env_instance_type"] = untrusted_env_instance_type
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property category: The category of the gateway.'''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property location: The location of the gateway.'''
        result = self._values.get("location")
        assert result is not None, "Required property 'location' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the gateway.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The type of the gateway.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the gateway.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gateway_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gatewayClass: The class of the gateway.'''
        result = self._values.get("gateway_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_paid(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property postPaid: Whether the gateway is pay-as-you-go.'''
        result = self._values.get("post_paid")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def public_network_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property publicNetworkBandwidth: The public network bandwidth of the gateway.'''
        result = self._values.get("public_network_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def release_after_expiration(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property releaseAfterExpiration: Whether to release the gateway after expiration.'''
        result = self._values.get("release_after_expiration")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceRegionId: The region ID of the resource.'''
        result = self._values.get("resource_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secondaryVSwitchId: The ID of the secondary VSwitch.'''
        result = self._values.get("secondary_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_bundle_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageBundleId: The ID of the storage bundle.'''
        result = self._values.get("storage_bundle_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def untrusted_env_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property untrustedEnvId: The ID of the untrusted environment.'''
        result = self._values.get("untrusted_env_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def untrusted_env_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property untrustedEnvInstanceType: The instance type of the untrusted environment.'''
        result = self._values.get("untrusted_env_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the VSwitch.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudstoragegateway.IExpressSync")
class IExpressSync(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ExpressSync``.'''

    @builtins.property
    @jsii.member(jsii_name="attrExpressSyncId")
    def attr_express_sync_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpressSyncId: The ID of the ExpressSync.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExpressSyncProps:
        ...


class _IExpressSyncProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ExpressSync``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudstoragegateway.IExpressSync"

    @builtins.property
    @jsii.member(jsii_name="attrExpressSyncId")
    def attr_express_sync_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpressSyncId: The ID of the ExpressSync.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpressSyncId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExpressSyncProps:
        return typing.cast(ExpressSyncProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IExpressSync).__jsii_proxy_class__ = lambda : _IExpressSyncProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudstoragegateway.IGateway")
class IGateway(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Gateway``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        ...


class _IGatewayProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Gateway``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudstoragegateway.IGateway"

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        return typing.cast(GatewayProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGateway).__jsii_proxy_class__ = lambda : _IGatewayProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudstoragegateway.IGatewayLogging")
class IGatewayLogging(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``GatewayLogging``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayLoggingProps:
        ...


class _IGatewayLoggingProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``GatewayLogging``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudstoragegateway.IGatewayLogging"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayLoggingProps:
        return typing.cast(GatewayLoggingProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGatewayLogging).__jsii_proxy_class__ = lambda : _IGatewayLoggingProxy


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


class RosExpressSync(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.RosExpressSync",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudStorageGateway::ExpressSync``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ExpressSync`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosExpressSyncProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0360f75a99a2a9c88139717bd8c7a49fd43131757a0e3fcf612d904fcb73ff5a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__135ce4c994437808624961a161e6c74aafb8190b383ff313810963f16c27b567)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrExpressSyncId")
    def attr_express_sync_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpressSyncId: The ID of the ExpressSync.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpressSyncId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bucketName")
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: The name of the OSS bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucketName"))

    @bucket_name.setter
    def bucket_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92aaccddba331027e5a3b5e8ce18f82571643cbefc2b360c6d8d3845d73aab49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="bucketRegion")
    def bucket_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketRegion: The region of the OSS bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucketRegion"))

    @bucket_region.setter
    def bucket_region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9a452dcde460110b093afa2b06b992f08233161c2e51bbd5723e6031f3c86ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketRegion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d67e0ca1b186aa4949135e5ed124a3e0bcbe13113ce6f4dd39fb715a7510397d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the ExpressSync.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc36a6d239d5f489a429be8febd57502f1195cf391e968c4b62ab44f264d327f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="bucketPrefix")
    def bucket_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bucketPrefix: The prefix of the OSS bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bucketPrefix"))

    @bucket_prefix.setter
    def bucket_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2a33d5fc63a88c5f918f6f79edd50897623a40b50ff5f5edf93c659c7492f3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketPrefix", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the ExpressSync.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c35b95df3f9b36239dab06ebe0b6c5147fe24c50b86cee0e7e157a58d39497d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.RosExpressSyncProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "bucket_region": "bucketRegion",
        "name": "name",
        "bucket_prefix": "bucketPrefix",
        "description": "description",
    },
)
class RosExpressSyncProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bucket_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bucket_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosExpressSync``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync

        :param bucket_name: 
        :param bucket_region: 
        :param name: 
        :param bucket_prefix: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47ed80e6e49bd91c512d67e2d3135089d2201712b9f28d21deb195aa53b0a905)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument bucket_region", value=bucket_region, expected_type=type_hints["bucket_region"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument bucket_prefix", value=bucket_prefix, expected_type=type_hints["bucket_prefix"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "bucket_region": bucket_region,
            "name": name,
        }
        if bucket_prefix is not None:
            self._values["bucket_prefix"] = bucket_prefix
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: The name of the OSS bucket.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bucket_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketRegion: The region of the OSS bucket.
        '''
        result = self._values.get("bucket_region")
        assert result is not None, "Required property 'bucket_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the ExpressSync.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bucket_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bucketPrefix: The prefix of the OSS bucket.
        '''
        result = self._values.get("bucket_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the ExpressSync.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosExpressSyncProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGateway(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.RosGateway",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudStorageGateway::Gateway``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Gateway`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed107b2b3dab89d098ef06f36d97d18e7176459f564457c9c4c1e12a6d28aed8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__181494d049388377f34d90ff3c5a6c54d1270fe865dbee93e83127ed1b2fa367)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayId: The ID of the gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: category: The category of the gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26b6f4b47e6c1409764b9f2ba27765245cf74d32f31c8db4aa9da9604663f141)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d94304bcf325c1d1e9bc730f3b24080e6b5a4b331d8d71b1fc2a9e6397e4bd7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="location")
    def location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: location: The location of the gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "location"))

    @location.setter
    def location(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97c9a0d3599c67ffb3b7b3fec361a08290283a5c28ba29b88c3d342b6ac5330d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "location", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a54053c8608d7583759ff592bb1e509008270326023fa93fc9b037b5e61176d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: The type of the gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__140d2579d473d909d689a7b4372d7b9420d91214e46dacb6ec7dff4fbbfef9e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c7d58cbb0f3fffa76d3717b5137a7764836845ba9c4300091097dabcbcdcc70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayClass")
    def gateway_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gatewayClass: The class of the gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gatewayClass"))

    @gateway_class.setter
    def gateway_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97819961773bb5e939f3ffba3a39b50f476a52ef1ef79671cf5dfd9c6ee8652e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayClass", value)

    @builtins.property
    @jsii.member(jsii_name="postPaid")
    def post_paid(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: postPaid: Whether the gateway is pay-as-you-go.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "postPaid"))

    @post_paid.setter
    def post_paid(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8595c696f6911210d3fb619108de8bd8222ca32c3b19d38a93d2f8197825df1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "postPaid", value)

    @builtins.property
    @jsii.member(jsii_name="publicNetworkBandwidth")
    def public_network_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: publicNetworkBandwidth: The public network bandwidth of the gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "publicNetworkBandwidth"))

    @public_network_bandwidth.setter
    def public_network_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7261b7c33371aefd5e3b1980a720d777c558d5c103736cd35afec7aa069d78a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "publicNetworkBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="releaseAfterExpiration")
    def release_after_expiration(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: releaseAfterExpiration: Whether to release the gateway after expiration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "releaseAfterExpiration"))

    @release_after_expiration.setter
    def release_after_expiration(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e6f100b310fd809eee76b9582b8f2c034353d84bd649173f8ef63bd930bd098)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "releaseAfterExpiration", value)

    @builtins.property
    @jsii.member(jsii_name="resourceRegionId")
    def resource_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceRegionId: The region ID of the resource.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceRegionId"))

    @resource_region_id.setter
    def resource_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6345a5b2064d59d7dc87bb10839df9774a7ebd47f0a666ed4c3ac27eda6f5c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="secondaryVSwitchId")
    def secondary_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondaryVSwitchId: The ID of the secondary VSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secondaryVSwitchId"))

    @secondary_v_switch_id.setter
    def secondary_v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b18303d4a7fb213feb3811538c819cd3866efd8c7dc4ae9708b577a790d5e9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondaryVSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="storageBundleId")
    def storage_bundle_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageBundleId: The ID of the storage bundle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageBundleId"))

    @storage_bundle_id.setter
    def storage_bundle_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__254d7f2756c97430a502c81b5a84a97a0500dc091401330b0fa98d097a77dbab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageBundleId", value)

    @builtins.property
    @jsii.member(jsii_name="untrustedEnvId")
    def untrusted_env_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: untrustedEnvId: The ID of the untrusted environment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "untrustedEnvId"))

    @untrusted_env_id.setter
    def untrusted_env_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2d53bd0bc0618bbbf3f0ef2b348e0489522b58a7da84020fe43d74ac4fc9115)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "untrustedEnvId", value)

    @builtins.property
    @jsii.member(jsii_name="untrustedEnvInstanceType")
    def untrusted_env_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: untrustedEnvInstanceType: The instance type of the untrusted environment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "untrustedEnvInstanceType"))

    @untrusted_env_instance_type.setter
    def untrusted_env_instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__882c973b9401eaa4ae9cdc0e993513c08df5ddc7bf66d3e584e20ee395d6fce4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "untrustedEnvInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6013ca350b9be38d491ce0f073193c6a12157413bcc469570fa75da11b3ebe1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


class RosGatewayLogging(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.RosGatewayLogging",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudStorageGateway::GatewayLogging``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GatewayLogging`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGatewayLoggingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05974615663dc2f9d1d3ecc43e36ac71d2012941e9b9773ed9cdcbcb7b784919)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c587c288e993fdf185cf5fb2ceecc53c4ac982b6f59e4f1de0d3c962ba94c99b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__73305a36c9f2537ffc9f90f70bcd355d88c27ec44284ef572d9d4b2d80cb9519)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayId")
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: The ID of the gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayId"))

    @gateway_id.setter
    def gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd5cfc02edc782e70073bcddfc44ff1ac0deb33c86b6cee7abeee32f5e35d147)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="slsLogstore")
    def sls_logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: slsLogstore: The name of the SLS log store.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "slsLogstore"))

    @sls_logstore.setter
    def sls_logstore(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3607f1b816a255e35046c211bb2860a934d96cf5ffd33b423af145332e801487)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsLogstore", value)

    @builtins.property
    @jsii.member(jsii_name="slsProject")
    def sls_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: slsProject: The name of the SLS project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "slsProject"))

    @sls_project.setter
    def sls_project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13257f0a90514e81d3b64c4b5c9cabc28e627f947e41aa6227bda0691fa3b4de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsProject", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.RosGatewayLoggingProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_id": "gatewayId",
        "sls_logstore": "slsLogstore",
        "sls_project": "slsProject",
    },
)
class RosGatewayLoggingProps:
    def __init__(
        self,
        *,
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sls_logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sls_project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosGatewayLogging``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging

        :param gateway_id: 
        :param sls_logstore: 
        :param sls_project: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__410ffb53d4c5ec9188f9c4e8d982a6d3032faa3c8f23735cfb5bd4b77efc3521)
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument sls_logstore", value=sls_logstore, expected_type=type_hints["sls_logstore"])
            check_type(argname="argument sls_project", value=sls_project, expected_type=type_hints["sls_project"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_id": gateway_id,
            "sls_logstore": sls_logstore,
            "sls_project": sls_project,
        }

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: The ID of the gateway.
        '''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sls_logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: slsLogstore: The name of the SLS log store.
        '''
        result = self._values.get("sls_logstore")
        assert result is not None, "Required property 'sls_logstore' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sls_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: slsProject: The name of the SLS project.
        '''
        result = self._values.get("sls_project")
        assert result is not None, "Required property 'sls_project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGatewayLoggingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.RosGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "location": "location",
        "name": "name",
        "type": "type",
        "description": "description",
        "gateway_class": "gatewayClass",
        "post_paid": "postPaid",
        "public_network_bandwidth": "publicNetworkBandwidth",
        "release_after_expiration": "releaseAfterExpiration",
        "resource_region_id": "resourceRegionId",
        "secondary_v_switch_id": "secondaryVSwitchId",
        "storage_bundle_id": "storageBundleId",
        "untrusted_env_id": "untrustedEnvId",
        "untrusted_env_instance_type": "untrustedEnvInstanceType",
        "v_switch_id": "vSwitchId",
    },
)
class RosGatewayProps:
    def __init__(
        self,
        *,
        category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gateway_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_paid: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        public_network_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release_after_expiration: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_bundle_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        untrusted_env_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        untrusted_env_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosGateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway

        :param category: 
        :param location: 
        :param name: 
        :param type: 
        :param description: 
        :param gateway_class: 
        :param post_paid: 
        :param public_network_bandwidth: 
        :param release_after_expiration: 
        :param resource_region_id: 
        :param secondary_v_switch_id: 
        :param storage_bundle_id: 
        :param untrusted_env_id: 
        :param untrusted_env_instance_type: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__180ba91297311f265389bede5950b9aa58bdd29184fe48c4c2265046c0dc0a9e)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument location", value=location, expected_type=type_hints["location"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument gateway_class", value=gateway_class, expected_type=type_hints["gateway_class"])
            check_type(argname="argument post_paid", value=post_paid, expected_type=type_hints["post_paid"])
            check_type(argname="argument public_network_bandwidth", value=public_network_bandwidth, expected_type=type_hints["public_network_bandwidth"])
            check_type(argname="argument release_after_expiration", value=release_after_expiration, expected_type=type_hints["release_after_expiration"])
            check_type(argname="argument resource_region_id", value=resource_region_id, expected_type=type_hints["resource_region_id"])
            check_type(argname="argument secondary_v_switch_id", value=secondary_v_switch_id, expected_type=type_hints["secondary_v_switch_id"])
            check_type(argname="argument storage_bundle_id", value=storage_bundle_id, expected_type=type_hints["storage_bundle_id"])
            check_type(argname="argument untrusted_env_id", value=untrusted_env_id, expected_type=type_hints["untrusted_env_id"])
            check_type(argname="argument untrusted_env_instance_type", value=untrusted_env_instance_type, expected_type=type_hints["untrusted_env_instance_type"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "category": category,
            "location": location,
            "name": name,
            "type": type,
        }
        if description is not None:
            self._values["description"] = description
        if gateway_class is not None:
            self._values["gateway_class"] = gateway_class
        if post_paid is not None:
            self._values["post_paid"] = post_paid
        if public_network_bandwidth is not None:
            self._values["public_network_bandwidth"] = public_network_bandwidth
        if release_after_expiration is not None:
            self._values["release_after_expiration"] = release_after_expiration
        if resource_region_id is not None:
            self._values["resource_region_id"] = resource_region_id
        if secondary_v_switch_id is not None:
            self._values["secondary_v_switch_id"] = secondary_v_switch_id
        if storage_bundle_id is not None:
            self._values["storage_bundle_id"] = storage_bundle_id
        if untrusted_env_id is not None:
            self._values["untrusted_env_id"] = untrusted_env_id
        if untrusted_env_instance_type is not None:
            self._values["untrusted_env_instance_type"] = untrusted_env_instance_type
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: category: The category of the gateway.
        '''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: location: The location of the gateway.
        '''
        result = self._values.get("location")
        assert result is not None, "Required property 'location' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the gateway.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: The type of the gateway.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the gateway.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gateway_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gatewayClass: The class of the gateway.
        '''
        result = self._values.get("gateway_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_paid(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: postPaid: Whether the gateway is pay-as-you-go.
        '''
        result = self._values.get("post_paid")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def public_network_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: publicNetworkBandwidth: The public network bandwidth of the gateway.
        '''
        result = self._values.get("public_network_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def release_after_expiration(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: releaseAfterExpiration: Whether to release the gateway after expiration.
        '''
        result = self._values.get("release_after_expiration")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceRegionId: The region ID of the resource.
        '''
        result = self._values.get("resource_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondaryVSwitchId: The ID of the secondary VSwitch.
        '''
        result = self._values.get("secondary_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_bundle_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageBundleId: The ID of the storage bundle.
        '''
        result = self._values.get("storage_bundle_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def untrusted_env_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: untrustedEnvId: The ID of the untrusted environment.
        '''
        result = self._values.get("untrusted_env_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def untrusted_env_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: untrustedEnvInstanceType: The instance type of the untrusted environment.
        '''
        result = self._values.get("untrusted_env_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


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


@jsii.implements(IExpressSync)
class ExpressSync(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.ExpressSync",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudStorageGateway::ExpressSync``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosExpressSync``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ExpressSyncProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__284ade511c616c006198be73d767ef8bcd2aff95c4e93092cf0ac8a3a1418c2b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrExpressSyncId")
    def attr_express_sync_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpressSyncId: The ID of the ExpressSync.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpressSyncId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExpressSyncProps:
        return typing.cast(ExpressSyncProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d50ec094d6dc5050dc15e056caca5fda0819a2af5b577c3d3cf88967229098a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf530962e36c15f9b4158570c78be38887f1ff16bf1ad94c7a0262d6b78db53d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f72301bd005422c44f302c4b3b7510a6f71c579f58345c8f77648019e13db00b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGateway)
class Gateway(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.Gateway",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudStorageGateway::Gateway``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGateway``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GatewayProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ec4e23130d087adf607383777eaa3c61d1e6e4c7e31346ecdfa70e9e8abc0af)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        return typing.cast(GatewayProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b5365011f30b7e4844b37677f6af92640a3830ebb3c6365b8228f1873c68bc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e7c6793add2ba638fd223e70e5e585a90880d9734f6f31ee457dde1efe5d628)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4abedbee1cf733fea875bb8f18b95ed6f390cf9a847c81a02d79a27b5b3106fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGatewayLogging)
class GatewayLogging(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudstoragegateway.GatewayLogging",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudStorageGateway::GatewayLogging``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGatewayLogging``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GatewayLoggingProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b057bf29384b55c0893c36d6e65abc89c6927658be0e1ab2c0e89266c1e5344b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayLoggingProps:
        return typing.cast(GatewayLoggingProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28093d84f14cbde4ca178c23fc223a7a2e7d6223740834e5bde0718bf8d04da4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb886e89752ee88d648bca5e32006b7d798f6fb4427d2c73db964ca36685df25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ae670b966a93287ef3cde322173b4c1832bb29c121a3f95cbd782d179bf2ac3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "ExpressSync",
    "ExpressSyncProps",
    "Gateway",
    "GatewayLogging",
    "GatewayLoggingProps",
    "GatewayProps",
    "IExpressSync",
    "IGateway",
    "IGatewayLogging",
    "IStorageBundle",
    "RosExpressSync",
    "RosExpressSyncProps",
    "RosGateway",
    "RosGatewayLogging",
    "RosGatewayLoggingProps",
    "RosGatewayProps",
    "RosStorageBundle",
    "RosStorageBundleProps",
    "StorageBundle",
    "StorageBundleProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__1ed35ffc46eaabc3388925671c84f5cb9f795ff7adf1678f1a9c853fdad9ead7(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bucket_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bucket_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f210a20fca2c648edb7d170495a219df385db53c97070f95c733e52b24397b0d(
    *,
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sls_logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sls_project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea2afdd452839bef173a207caeaa92cdd55b54a77383b1271b7563a517626920(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gateway_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_paid: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    public_network_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release_after_expiration: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_bundle_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    untrusted_env_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    untrusted_env_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0360f75a99a2a9c88139717bd8c7a49fd43131757a0e3fcf612d904fcb73ff5a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosExpressSyncProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__135ce4c994437808624961a161e6c74aafb8190b383ff313810963f16c27b567(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92aaccddba331027e5a3b5e8ce18f82571643cbefc2b360c6d8d3845d73aab49(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9a452dcde460110b093afa2b06b992f08233161c2e51bbd5723e6031f3c86ce(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d67e0ca1b186aa4949135e5ed124a3e0bcbe13113ce6f4dd39fb715a7510397d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc36a6d239d5f489a429be8febd57502f1195cf391e968c4b62ab44f264d327f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2a33d5fc63a88c5f918f6f79edd50897623a40b50ff5f5edf93c659c7492f3a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c35b95df3f9b36239dab06ebe0b6c5147fe24c50b86cee0e7e157a58d39497d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47ed80e6e49bd91c512d67e2d3135089d2201712b9f28d21deb195aa53b0a905(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bucket_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bucket_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed107b2b3dab89d098ef06f36d97d18e7176459f564457c9c4c1e12a6d28aed8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__181494d049388377f34d90ff3c5a6c54d1270fe865dbee93e83127ed1b2fa367(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26b6f4b47e6c1409764b9f2ba27765245cf74d32f31c8db4aa9da9604663f141(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d94304bcf325c1d1e9bc730f3b24080e6b5a4b331d8d71b1fc2a9e6397e4bd7c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97c9a0d3599c67ffb3b7b3fec361a08290283a5c28ba29b88c3d342b6ac5330d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a54053c8608d7583759ff592bb1e509008270326023fa93fc9b037b5e61176d3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__140d2579d473d909d689a7b4372d7b9420d91214e46dacb6ec7dff4fbbfef9e5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c7d58cbb0f3fffa76d3717b5137a7764836845ba9c4300091097dabcbcdcc70(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97819961773bb5e939f3ffba3a39b50f476a52ef1ef79671cf5dfd9c6ee8652e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8595c696f6911210d3fb619108de8bd8222ca32c3b19d38a93d2f8197825df1f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7261b7c33371aefd5e3b1980a720d777c558d5c103736cd35afec7aa069d78a9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e6f100b310fd809eee76b9582b8f2c034353d84bd649173f8ef63bd930bd098(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6345a5b2064d59d7dc87bb10839df9774a7ebd47f0a666ed4c3ac27eda6f5c5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b18303d4a7fb213feb3811538c819cd3866efd8c7dc4ae9708b577a790d5e9c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__254d7f2756c97430a502c81b5a84a97a0500dc091401330b0fa98d097a77dbab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2d53bd0bc0618bbbf3f0ef2b348e0489522b58a7da84020fe43d74ac4fc9115(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__882c973b9401eaa4ae9cdc0e993513c08df5ddc7bf66d3e584e20ee395d6fce4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6013ca350b9be38d491ce0f073193c6a12157413bcc469570fa75da11b3ebe1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05974615663dc2f9d1d3ecc43e36ac71d2012941e9b9773ed9cdcbcb7b784919(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGatewayLoggingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c587c288e993fdf185cf5fb2ceecc53c4ac982b6f59e4f1de0d3c962ba94c99b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73305a36c9f2537ffc9f90f70bcd355d88c27ec44284ef572d9d4b2d80cb9519(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd5cfc02edc782e70073bcddfc44ff1ac0deb33c86b6cee7abeee32f5e35d147(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3607f1b816a255e35046c211bb2860a934d96cf5ffd33b423af145332e801487(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13257f0a90514e81d3b64c4b5c9cabc28e627f947e41aa6227bda0691fa3b4de(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__410ffb53d4c5ec9188f9c4e8d982a6d3032faa3c8f23735cfb5bd4b77efc3521(
    *,
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sls_logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sls_project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__180ba91297311f265389bede5950b9aa58bdd29184fe48c4c2265046c0dc0a9e(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gateway_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_paid: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    public_network_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release_after_expiration: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_bundle_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    untrusted_env_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    untrusted_env_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

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

def _typecheckingstub__284ade511c616c006198be73d767ef8bcd2aff95c4e93092cf0ac8a3a1418c2b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ExpressSyncProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d50ec094d6dc5050dc15e056caca5fda0819a2af5b577c3d3cf88967229098a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf530962e36c15f9b4158570c78be38887f1ff16bf1ad94c7a0262d6b78db53d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f72301bd005422c44f302c4b3b7510a6f71c579f58345c8f77648019e13db00b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ec4e23130d087adf607383777eaa3c61d1e6e4c7e31346ecdfa70e9e8abc0af(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b5365011f30b7e4844b37677f6af92640a3830ebb3c6365b8228f1873c68bc9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e7c6793add2ba638fd223e70e5e585a90880d9734f6f31ee457dde1efe5d628(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4abedbee1cf733fea875bb8f18b95ed6f390cf9a847c81a02d79a27b5b3106fc(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b057bf29384b55c0893c36d6e65abc89c6927658be0e1ab2c0e89266c1e5344b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GatewayLoggingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28093d84f14cbde4ca178c23fc223a7a2e7d6223740834e5bde0718bf8d04da4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb886e89752ee88d648bca5e32006b7d798f6fb4427d2c73db964ca36685df25(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ae670b966a93287ef3cde322173b4c1832bb29c121a3f95cbd782d179bf2ac3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
