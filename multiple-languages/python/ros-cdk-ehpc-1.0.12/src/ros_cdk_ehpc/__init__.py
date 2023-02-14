'''
## Aliyun ROS EHPC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EHPC from '@alicloud/ros-cdk-ehpc';
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


class AutoScaleConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.AutoScaleConfig",
):
    '''A ROS resource type:  ``ALIYUN::EHPC::AutoScaleConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AutoScaleConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EHPC::AutoScaleConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__871b92a5787489715c1b4796c24157ba88adefdd89167ef4e90f7ab3fc2d0f7a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.AutoScaleConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "enable_auto_grow": "enableAutoGrow",
        "enable_auto_shrink": "enableAutoShrink",
        "exclude_nodes": "excludeNodes",
        "extra_nodes_grow_ratio": "extraNodesGrowRatio",
        "grow_interval_in_minutes": "growIntervalInMinutes",
        "grow_ratio": "growRatio",
        "grow_timeout_in_minutes": "growTimeoutInMinutes",
        "image_id": "imageId",
        "max_nodes_in_cluster": "maxNodesInCluster",
        "queues": "queues",
        "shrink_idle_times": "shrinkIdleTimes",
        "shrink_interval_in_minutes": "shrinkIntervalInMinutes",
        "spot_price_limit": "spotPriceLimit",
        "spot_strategy": "spotStrategy",
    },
)
class AutoScaleConfigProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        extra_nodes_grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_nodes_in_cluster: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAutoScaleConfig.QueuesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        shrink_idle_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shrink_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EHPC::AutoScaleConfig``.

        :param cluster_id: Property clusterId: Cluster ID.
        :param enable_auto_grow: Property enableAutoGrow: Specifies whether to enable auto scale-out. Valid values: true: enables auto scale-out. false: disables auto scale-out Default value: false
        :param enable_auto_shrink: Property enableAutoShrink: Specifies whether to enable auto scale-in. Valid values: true: enables auto scale-in. false: disables auto scale-in Default value: false
        :param exclude_nodes: Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        :param extra_nodes_grow_ratio: Property extraNodesGrowRatio: The percentage of extra compute nodes. Default value: 0
        :param grow_interval_in_minutes: Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes. Default value: 2
        :param grow_ratio: Property growRatio: The percentage of each round of scale-out. Default value: 100
        :param grow_timeout_in_minutes: Property growTimeoutInMinutes: The scale-out timeout period. Unit: minutes. Default value: 20
        :param image_id: Property imageId: The ID of the image. If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails. If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect. If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        :param max_nodes_in_cluster: Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster. Default value: 100
        :param queues: Property queues:.
        :param shrink_idle_times: Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check. Default value: 3
        :param shrink_interval_in_minutes: Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes. Default value: 2
        :param spot_price_limit: Property spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        :param spot_strategy: Property spotStrategy: The preemption policy of the compute nodes. Valid values: NoSpot: The compute nodes are pay-as-you-go instances. SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price. SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price. Default value: NoSpot
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__196d52035879bf00b7184dea87eeacd9bfe3bfa64e309819dc860bccc220f2d9)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument enable_auto_grow", value=enable_auto_grow, expected_type=type_hints["enable_auto_grow"])
            check_type(argname="argument enable_auto_shrink", value=enable_auto_shrink, expected_type=type_hints["enable_auto_shrink"])
            check_type(argname="argument exclude_nodes", value=exclude_nodes, expected_type=type_hints["exclude_nodes"])
            check_type(argname="argument extra_nodes_grow_ratio", value=extra_nodes_grow_ratio, expected_type=type_hints["extra_nodes_grow_ratio"])
            check_type(argname="argument grow_interval_in_minutes", value=grow_interval_in_minutes, expected_type=type_hints["grow_interval_in_minutes"])
            check_type(argname="argument grow_ratio", value=grow_ratio, expected_type=type_hints["grow_ratio"])
            check_type(argname="argument grow_timeout_in_minutes", value=grow_timeout_in_minutes, expected_type=type_hints["grow_timeout_in_minutes"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument max_nodes_in_cluster", value=max_nodes_in_cluster, expected_type=type_hints["max_nodes_in_cluster"])
            check_type(argname="argument queues", value=queues, expected_type=type_hints["queues"])
            check_type(argname="argument shrink_idle_times", value=shrink_idle_times, expected_type=type_hints["shrink_idle_times"])
            check_type(argname="argument shrink_interval_in_minutes", value=shrink_interval_in_minutes, expected_type=type_hints["shrink_interval_in_minutes"])
            check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if enable_auto_grow is not None:
            self._values["enable_auto_grow"] = enable_auto_grow
        if enable_auto_shrink is not None:
            self._values["enable_auto_shrink"] = enable_auto_shrink
        if exclude_nodes is not None:
            self._values["exclude_nodes"] = exclude_nodes
        if extra_nodes_grow_ratio is not None:
            self._values["extra_nodes_grow_ratio"] = extra_nodes_grow_ratio
        if grow_interval_in_minutes is not None:
            self._values["grow_interval_in_minutes"] = grow_interval_in_minutes
        if grow_ratio is not None:
            self._values["grow_ratio"] = grow_ratio
        if grow_timeout_in_minutes is not None:
            self._values["grow_timeout_in_minutes"] = grow_timeout_in_minutes
        if image_id is not None:
            self._values["image_id"] = image_id
        if max_nodes_in_cluster is not None:
            self._values["max_nodes_in_cluster"] = max_nodes_in_cluster
        if queues is not None:
            self._values["queues"] = queues
        if shrink_idle_times is not None:
            self._values["shrink_idle_times"] = shrink_idle_times
        if shrink_interval_in_minutes is not None:
            self._values["shrink_interval_in_minutes"] = shrink_interval_in_minutes
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_auto_grow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAutoGrow: Specifies whether to enable auto scale-out.

        Valid values:
        true: enables auto scale-out.
        false: disables auto scale-out
        Default value: false
        '''
        result = self._values.get("enable_auto_grow")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auto_shrink(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAutoShrink: Specifies whether to enable auto scale-in.

        Valid values:
        true: enables auto scale-in.
        false: disables auto scale-in
        Default value: false
        '''
        result = self._values.get("enable_auto_shrink")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes.

        Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        '''
        result = self._values.get("exclude_nodes")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def extra_nodes_grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property extraNodesGrowRatio: The percentage of extra compute nodes.

        Default value: 0
        '''
        result = self._values.get("extra_nodes_grow_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out.

        Unit: minutes.
        Default value: 2
        '''
        result = self._values.get("grow_interval_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property growRatio: The percentage of each round of scale-out.

        Default value: 100
        '''
        result = self._values.get("grow_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property growTimeoutInMinutes: The scale-out timeout period.

        Unit: minutes.
        Default value: 20
        '''
        result = self._values.get("grow_timeout_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: The ID of the image.

        If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
        If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
        If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_nodes_in_cluster(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.

        Default value: 100
        '''
        result = self._values.get("max_nodes_in_cluster")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]]:
        '''Property queues:.'''
        result = self._values.get("queues")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]], result)

    @builtins.property
    def shrink_idle_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.

        Default value: 3
        '''
        result = self._values.get("shrink_idle_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shrink_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in.

        Unit: minutes.
        Default value: 2
        '''
        result = self._values.get("shrink_interval_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotPriceLimit: The maximum hourly price of the compute nodes.

        The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        '''
        result = self._values.get("spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotStrategy: The preemption policy of the compute nodes.

        Valid values:
        NoSpot: The compute nodes are pay-as-you-go instances.
        SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
        SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
        Default value: NoSpot
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AutoScaleConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Cluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::EHPC::Cluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EHPC::Cluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42fad8b829254cde00b4b66624801be4034f9a3b2e118a654013f4c23ac80df2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsInfo")
    def attr_ecs_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.

        You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: Cluster name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityGroupId: Security group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_order_compute_count": "ecsOrderComputeCount",
        "ecs_order_compute_instance_type": "ecsOrderComputeInstanceType",
        "ecs_order_login_count": "ecsOrderLoginCount",
        "ecs_order_login_instance_type": "ecsOrderLoginInstanceType",
        "ecs_order_manager_instance_type": "ecsOrderManagerInstanceType",
        "name": "name",
        "os_tag": "osTag",
        "v_switch_id": "vSwitchId",
        "account_type": "accountType",
        "additional_volumes": "additionalVolumes",
        "application": "application",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "client_version": "clientVersion",
        "compute_enable_ht": "computeEnableHt",
        "compute_spot_price_limit": "computeSpotPriceLimit",
        "compute_spot_strategy": "computeSpotStrategy",
        "deploy_mode": "deployMode",
        "description": "description",
        "ecs_charge_type": "ecsChargeType",
        "ecs_order_manager_count": "ecsOrderManagerCount",
        "ehpc_version": "ehpcVersion",
        "ha_enable": "haEnable",
        "image_id": "imageId",
        "image_owner_alias": "imageOwnerAlias",
        "input_file_url": "inputFileUrl",
        "is_compute_ess": "isComputeEss",
        "job_queue": "jobQueue",
        "key_pair_name": "keyPairName",
        "password": "password",
        "period": "period",
        "period_unit": "periodUnit",
        "post_install_script": "postInstallScript",
        "remote_directory": "remoteDirectory",
        "remote_vis_enable": "remoteVisEnable",
        "resource_group_id": "resourceGroupId",
        "scc_cluster_id": "sccClusterId",
        "scheduler_type": "schedulerType",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "system_disk_level": "systemDiskLevel",
        "system_disk_size": "systemDiskSize",
        "system_disk_type": "systemDiskType",
        "volume_id": "volumeId",
        "volume_mountpoint": "volumeMountpoint",
        "volume_protocol": "volumeProtocol",
        "volume_type": "volumeType",
        "without_elastic_ip": "withoutElasticIp",
        "zone_id": "zoneId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        ecs_order_compute_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_compute_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_login_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_login_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_manager_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        os_tag: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        additional_volumes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.AdditionalVolumesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        application: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.ApplicationProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ehpc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ha_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        input_file_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_compute_ess: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_install_script: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.PostInstallScriptProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remote_vis_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_mountpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        without_elastic_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EHPC::Cluster``.

        :param ecs_order_compute_count: Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
        :param ecs_order_compute_instance_type: Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        :param ecs_order_login_count: Property ecsOrderLoginCount: Login node number can only be 1.
        :param ecs_order_login_instance_type: Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
        :param ecs_order_manager_instance_type: Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
        :param name: Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        :param os_tag: Property osTag: Operating system image tag. You can call ListImages API to query.
        :param v_switch_id: Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        :param account_type: Property accountType: The service type of the domain account. Valid values: nis ldap Default value: nis
        :param additional_volumes: Property additionalVolumes:.
        :param application: Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        :param auto_renew: Property autoRenew: true: automatic renewals; false: no automatic renewals.
        :param auto_renew_period: Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        :param client_version: Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number. You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        :param compute_enable_ht: Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values: true: Hyper-threading is supported. false: Hyper-threading is not supported. Default value: true
        :param compute_spot_price_limit: Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        :param compute_spot_strategy: Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
        :param deploy_mode: Property deployMode: The mode in which the cluster is deployed. Valid values: Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed. Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed. Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed. Default value: Standard
        :param description: Property description: Cluster description, 2 to 128 characters.
        :param ecs_charge_type: Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        :param ecs_order_manager_count: Property ecsOrderManagerCount: Control node number can be 1, 2.
        :param ehpc_version: Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
        :param ha_enable: Property haEnable: Specifies whether to enable the high availability feature. Valid values: true: enables the high availability feature false: disables the high availability feature Default value: false Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        :param image_id: Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        :param image_owner_alias: Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
        :param input_file_url: Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
        :param is_compute_ess: Property isComputeEss: Specifies whether to enable auto scaling. Valid values: true: enables auto scaling false: disables auto scaling Default value: false
        :param job_queue: Property jobQueue: The queue to which the compute nodes are added.
        :param key_pair_name: Property keyPairName: Key pair name.
        :param password: Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        :param period: Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        :param period_unit: Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        :param post_install_script: Property postInstallScript:.
        :param remote_directory: Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        :param remote_vis_enable: Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values: true: enables VNC false: disables VNC Default value: false
        :param resource_group_id: Property resourceGroupId: The ID of the resource group. You can call the ListResourceGroups operation to obtain the ID of the resource group.
        :param scc_cluster_id: Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        :param scheduler_type: Property schedulerType: The type of the scheduler. Valid values: pbs slurm opengridscheduler deadline Default value: pbs
        :param security_group_id: Property securityGroupId: Security group ID.
        :param security_group_name: Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        :param system_disk_level: Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values: PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write. PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write. PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write. PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write. Default value: PL1
        :param system_disk_size: Property systemDiskSize: The size of the system disk. Unit: GB Valid values: 40 to 500 Default value: 40
        :param system_disk_type: Property systemDiskType: The type of the system disk. Valid values: cloud_efficiency: ultra disk. cloud_ssd: SSD. cloud_essd: ESSD. Default value: cloud_ssd
        :param volume_id: Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
        :param volume_mountpoint: Property volumeMountpoint: The mount target of the file system. Take note of the following information: If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default. If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        :param volume_protocol: Property volumeProtocol: The type of the protocol that is used by the file system. Valid values: nfs smb Default value: nfs
        :param volume_type: Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
        :param without_elastic_ip: Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
        :param zone_id: Property zoneId: Available area ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45e193143351251319a5627dd2ae3499075d631305c83a432861b0b284235a34)
            check_type(argname="argument ecs_order_compute_count", value=ecs_order_compute_count, expected_type=type_hints["ecs_order_compute_count"])
            check_type(argname="argument ecs_order_compute_instance_type", value=ecs_order_compute_instance_type, expected_type=type_hints["ecs_order_compute_instance_type"])
            check_type(argname="argument ecs_order_login_count", value=ecs_order_login_count, expected_type=type_hints["ecs_order_login_count"])
            check_type(argname="argument ecs_order_login_instance_type", value=ecs_order_login_instance_type, expected_type=type_hints["ecs_order_login_instance_type"])
            check_type(argname="argument ecs_order_manager_instance_type", value=ecs_order_manager_instance_type, expected_type=type_hints["ecs_order_manager_instance_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument os_tag", value=os_tag, expected_type=type_hints["os_tag"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
            check_type(argname="argument additional_volumes", value=additional_volumes, expected_type=type_hints["additional_volumes"])
            check_type(argname="argument application", value=application, expected_type=type_hints["application"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument client_version", value=client_version, expected_type=type_hints["client_version"])
            check_type(argname="argument compute_enable_ht", value=compute_enable_ht, expected_type=type_hints["compute_enable_ht"])
            check_type(argname="argument compute_spot_price_limit", value=compute_spot_price_limit, expected_type=type_hints["compute_spot_price_limit"])
            check_type(argname="argument compute_spot_strategy", value=compute_spot_strategy, expected_type=type_hints["compute_spot_strategy"])
            check_type(argname="argument deploy_mode", value=deploy_mode, expected_type=type_hints["deploy_mode"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument ecs_charge_type", value=ecs_charge_type, expected_type=type_hints["ecs_charge_type"])
            check_type(argname="argument ecs_order_manager_count", value=ecs_order_manager_count, expected_type=type_hints["ecs_order_manager_count"])
            check_type(argname="argument ehpc_version", value=ehpc_version, expected_type=type_hints["ehpc_version"])
            check_type(argname="argument ha_enable", value=ha_enable, expected_type=type_hints["ha_enable"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument image_owner_alias", value=image_owner_alias, expected_type=type_hints["image_owner_alias"])
            check_type(argname="argument input_file_url", value=input_file_url, expected_type=type_hints["input_file_url"])
            check_type(argname="argument is_compute_ess", value=is_compute_ess, expected_type=type_hints["is_compute_ess"])
            check_type(argname="argument job_queue", value=job_queue, expected_type=type_hints["job_queue"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument post_install_script", value=post_install_script, expected_type=type_hints["post_install_script"])
            check_type(argname="argument remote_directory", value=remote_directory, expected_type=type_hints["remote_directory"])
            check_type(argname="argument remote_vis_enable", value=remote_vis_enable, expected_type=type_hints["remote_vis_enable"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scc_cluster_id", value=scc_cluster_id, expected_type=type_hints["scc_cluster_id"])
            check_type(argname="argument scheduler_type", value=scheduler_type, expected_type=type_hints["scheduler_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_group_name", value=security_group_name, expected_type=type_hints["security_group_name"])
            check_type(argname="argument system_disk_level", value=system_disk_level, expected_type=type_hints["system_disk_level"])
            check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            check_type(argname="argument system_disk_type", value=system_disk_type, expected_type=type_hints["system_disk_type"])
            check_type(argname="argument volume_id", value=volume_id, expected_type=type_hints["volume_id"])
            check_type(argname="argument volume_mountpoint", value=volume_mountpoint, expected_type=type_hints["volume_mountpoint"])
            check_type(argname="argument volume_protocol", value=volume_protocol, expected_type=type_hints["volume_protocol"])
            check_type(argname="argument volume_type", value=volume_type, expected_type=type_hints["volume_type"])
            check_type(argname="argument without_elastic_ip", value=without_elastic_ip, expected_type=type_hints["without_elastic_ip"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ecs_order_compute_count": ecs_order_compute_count,
            "ecs_order_compute_instance_type": ecs_order_compute_instance_type,
            "ecs_order_login_count": ecs_order_login_count,
            "ecs_order_login_instance_type": ecs_order_login_instance_type,
            "ecs_order_manager_instance_type": ecs_order_manager_instance_type,
            "name": name,
            "os_tag": os_tag,
            "v_switch_id": v_switch_id,
        }
        if account_type is not None:
            self._values["account_type"] = account_type
        if additional_volumes is not None:
            self._values["additional_volumes"] = additional_volumes
        if application is not None:
            self._values["application"] = application
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if client_version is not None:
            self._values["client_version"] = client_version
        if compute_enable_ht is not None:
            self._values["compute_enable_ht"] = compute_enable_ht
        if compute_spot_price_limit is not None:
            self._values["compute_spot_price_limit"] = compute_spot_price_limit
        if compute_spot_strategy is not None:
            self._values["compute_spot_strategy"] = compute_spot_strategy
        if deploy_mode is not None:
            self._values["deploy_mode"] = deploy_mode
        if description is not None:
            self._values["description"] = description
        if ecs_charge_type is not None:
            self._values["ecs_charge_type"] = ecs_charge_type
        if ecs_order_manager_count is not None:
            self._values["ecs_order_manager_count"] = ecs_order_manager_count
        if ehpc_version is not None:
            self._values["ehpc_version"] = ehpc_version
        if ha_enable is not None:
            self._values["ha_enable"] = ha_enable
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_owner_alias is not None:
            self._values["image_owner_alias"] = image_owner_alias
        if input_file_url is not None:
            self._values["input_file_url"] = input_file_url
        if is_compute_ess is not None:
            self._values["is_compute_ess"] = is_compute_ess
        if job_queue is not None:
            self._values["job_queue"] = job_queue
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if post_install_script is not None:
            self._values["post_install_script"] = post_install_script
        if remote_directory is not None:
            self._values["remote_directory"] = remote_directory
        if remote_vis_enable is not None:
            self._values["remote_vis_enable"] = remote_vis_enable
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scc_cluster_id is not None:
            self._values["scc_cluster_id"] = scc_cluster_id
        if scheduler_type is not None:
            self._values["scheduler_type"] = scheduler_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if system_disk_level is not None:
            self._values["system_disk_level"] = system_disk_level
        if system_disk_size is not None:
            self._values["system_disk_size"] = system_disk_size
        if system_disk_type is not None:
            self._values["system_disk_type"] = system_disk_type
        if volume_id is not None:
            self._values["volume_id"] = volume_id
        if volume_mountpoint is not None:
            self._values["volume_mountpoint"] = volume_mountpoint
        if volume_protocol is not None:
            self._values["volume_protocol"] = volume_protocol
        if volume_type is not None:
            self._values["volume_type"] = volume_type
        if without_elastic_ip is not None:
            self._values["without_elastic_ip"] = without_elastic_ip
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.'''
        result = self._values.get("ecs_order_compute_count")
        assert result is not None, "Required property 'ecs_order_compute_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.'''
        result = self._values.get("ecs_order_compute_instance_type")
        assert result is not None, "Required property 'ecs_order_compute_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderLoginCount: Login node number can only be 1.'''
        result = self._values.get("ecs_order_login_count")
        assert result is not None, "Required property 'ecs_order_login_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderLoginInstanceType: Log cluster node instance specifications.'''
        result = self._values.get("ecs_order_login_instance_type")
        assert result is not None, "Required property 'ecs_order_login_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderManagerInstanceType: Cluster control node instance specifications.'''
        result = self._values.get("ecs_order_manager_instance_type")
        assert result is not None, "Required property 'ecs_order_manager_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Cluster name.

        2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def os_tag(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property osTag: Operating system image tag.

        You can call ListImages API to query.
        '''
        result = self._values.get("os_tag")
        assert result is not None, "Required property 'os_tag' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: VPC in switch ID.

        Products currently only supports VPC network.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountType: The service type of the domain account.

        Valid values:
        nis
        ldap
        Default value: nis
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def additional_volumes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]]:
        '''Property additionalVolumes:.'''
        result = self._values.get("additional_volumes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]], result)

    @builtins.property
    def application(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]]:
        '''Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.'''
        result = self._values.get("application")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: true: automatic renewals;

        false: no automatic renewals.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clientVersion: The version of the E-HPC client.

        By default, the parameter is set to the latest version number.
        You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        '''
        result = self._values.get("client_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_enable_ht(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property computeEnableHt: Specifies whether the compute nodes support hyper-threading.

        Valid values:
        true: Hyper-threading is supported.
        false: Hyper-threading is not supported.
        Default value: true
        '''
        result = self._values.get("compute_enable_ht")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.'''
        result = self._values.get("compute_spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.'''
        result = self._values.get("compute_spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deployMode: The mode in which the cluster is deployed.

        Valid values:
        Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
        Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
        Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
        Default value: Standard
        '''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Cluster description, 2 to 128 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.'''
        result = self._values.get("ecs_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsOrderManagerCount: Control node number can be 1, 2.'''
        result = self._values.get("ecs_order_manager_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ehpc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ehpcVersion: The version of E-HPC.

        By default, the parameter is set to the latest version number.
        '''
        result = self._values.get("ehpc_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property haEnable: Specifies whether to enable the high availability feature.

        Valid values:
        true: enables the high availability feature
        false: disables the high availability feature
        Default value: false
        Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        '''
        result = self._values.get("ha_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;

        if self, others, or marketplace, ImageId is mandatory.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageOwnerAlias: Mirror type: system, self, others or marketplace.'''
        result = self._values.get("image_owner_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def input_file_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.'''
        result = self._values.get("input_file_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_compute_ess(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isComputeEss: Specifies whether to enable auto scaling.

        Valid values:
        true: enables auto scaling
        false: disables auto scaling
        Default value: false
        '''
        result = self._values.get("is_compute_ess")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jobQueue: 	The queue to which the compute nodes are added.'''
        result = self._values.get("job_queue")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: Key pair name.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: Root password of jump server (login node).

        8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The purchase of long resources, units: week / month / year.

        When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The purchase of long-resources unit.

        Alternatively value Week / Month / year.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]]:
        '''Property postInstallScript:.'''
        result = self._values.get("post_install_script")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]], result)

    @builtins.property
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remoteDirectory: Mount shared storage remote directory.

        The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        result = self._values.get("remote_directory")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remote_vis_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC).

        Valid values:
        true: enables VNC
        false: disables VNC
        Default value: false
        '''
        result = self._values.get("remote_vis_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.

        You can call the ListResourceGroups operation to obtain the ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.'''
        result = self._values.get("scc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property schedulerType: The type of the scheduler.

        Valid values:
        pbs
        slurm
        opengridscheduler
        deadline
        Default value: pbs
        '''
        result = self._values.get("scheduler_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Security group ID.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.

        Format Requirements Reference ECS security group name.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskLevel: The performance level of the ESSD that is created as the system disk.

        Valid values:
        PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
        PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
        PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
        PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
        Default value: PL1
        '''
        result = self._values.get("system_disk_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskSize: The size of the system disk.

        Unit: GB
        Valid values: 40 to 500
        Default value: 40
        '''
        result = self._values.get("system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskType: The type of the system disk.

        Valid values:
        cloud_efficiency: ultra disk.
        cloud_ssd: SSD.
        cloud_essd: ESSD.
        Default value: cloud_ssd
        '''
        result = self._values.get("system_disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeId: The ID of the file system.

        If you leave the parameter empty, a Performance NAS file system is created by default.
        '''
        result = self._values.get("volume_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_mountpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeMountpoint: The mount target of the file system.

        Take note of the following information:
        If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
        If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        '''
        result = self._values.get("volume_mountpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeProtocol: The type of the protocol that is used by the file system.

        Valid values:
        nfs
        smb
        Default value: nfs
        '''
        result = self._values.get("volume_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeType: The type of the shared storage.

        Only Apsara File Storage nas file systems are supported.
        '''
        result = self._values.get("volume_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def without_elastic_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP).

        Default value: false
        '''
        result = self._values.get("without_elastic_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: Available area ID.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAutoScaleConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfig",
):
    '''A ROS template type:  ``ALIYUN::EHPC::AutoScaleConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAutoScaleConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EHPC::AutoScaleConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e6aa3a147ede06e83fbeb4315c5101912fc2a982848075b358e751418ba52ec)
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
            type_hints = typing.get_type_hints(_typecheckingstub__52c9bcab2898982620100e8afb81348f593abb2657af225d289f72561a50dc01)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fef2d493a4213be1ae35c64fd562de14cdba28cc1115d9254813bc309f9e80a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__747c41aebd15546922847383a55a3b84e5455a9cf295e054acbc568e174d0526)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="enableAutoGrow")
    def enable_auto_grow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
        true: enables auto scale-out.
        false: disables auto scale-out
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAutoGrow"))

    @enable_auto_grow.setter
    def enable_auto_grow(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcaaed7b479ebb2284a85d268698232ab66ca8db3067cb0c46e28d08f434492e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAutoGrow", value)

    @builtins.property
    @jsii.member(jsii_name="enableAutoShrink")
    def enable_auto_shrink(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
        true: enables auto scale-in.
        false: disables auto scale-in
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAutoShrink"))

    @enable_auto_shrink.setter
    def enable_auto_shrink(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c77607b7f550120466836d948b578ecbd9d393e97f72b0754be58d8b1aaf3ab6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAutoShrink", value)

    @builtins.property
    @jsii.member(jsii_name="excludeNodes")
    def exclude_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "excludeNodes"))

    @exclude_nodes.setter
    def exclude_nodes(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29b6f058b52f19cf24326d4260893bae238df966af5c490433da5566f2026919)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "excludeNodes", value)

    @builtins.property
    @jsii.member(jsii_name="extraNodesGrowRatio")
    def extra_nodes_grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        extraNodesGrowRatio: The percentage of extra compute nodes.
        Default value: 0
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "extraNodesGrowRatio"))

    @extra_nodes_grow_ratio.setter
    def extra_nodes_grow_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63f23a241a75ed57a74039e387b7fb929befcb7736619afc8ab0763d2e64bd17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extraNodesGrowRatio", value)

    @builtins.property
    @jsii.member(jsii_name="growIntervalInMinutes")
    def grow_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
        Default value: 2
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "growIntervalInMinutes"))

    @grow_interval_in_minutes.setter
    def grow_interval_in_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09a7cb6fd221814ea9f72a243e3b5afa22ab9ef202db82e85d0833bcd9e65ecf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "growIntervalInMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="growRatio")
    def grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growRatio: The percentage of each round of scale-out.
        Default value: 100
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "growRatio"))

    @grow_ratio.setter
    def grow_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__999d92e0bce30dda57e3ccd922ad611d18b485722a2cc374d99eb4ae047918c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "growRatio", value)

    @builtins.property
    @jsii.member(jsii_name="growTimeoutInMinutes")
    def grow_timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
        Default value: 20
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "growTimeoutInMinutes"))

    @grow_timeout_in_minutes.setter
    def grow_timeout_in_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__772ed5b0016d0f2bfdad234649dc20809d39aff1c2e5e8210134395724d5e00c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "growTimeoutInMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        imageId: The ID of the image.
        If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
        If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
        If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b8d6ac888e1527778bd98c8936cdc0d6a5aa69ebb096bc43de04c9f661c0114)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="maxNodesInCluster")
    def max_nodes_in_cluster(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
        Default value: 100
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxNodesInCluster"))

    @max_nodes_in_cluster.setter
    def max_nodes_in_cluster(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__896a0afa37141b9f5672200c0a9571cb6c229736a95ffcf16f878b406d49e348)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxNodesInCluster", value)

    @builtins.property
    @jsii.member(jsii_name="queues")
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]]:
        '''
        :Property: queues:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]], jsii.get(self, "queues"))

    @queues.setter
    def queues(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02ce51878aaca07f205a84d3429d425f89ada6a958b1e0c5d818635a5088d11a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queues", value)

    @builtins.property
    @jsii.member(jsii_name="shrinkIdleTimes")
    def shrink_idle_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
        Default value: 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shrinkIdleTimes"))

    @shrink_idle_times.setter
    def shrink_idle_times(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a54e2edb75347b44916d732ca529551820705aa21ce763a40f6be2745468b0d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shrinkIdleTimes", value)

    @builtins.property
    @jsii.member(jsii_name="shrinkIntervalInMinutes")
    def shrink_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
        Default value: 2
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shrinkIntervalInMinutes"))

    @shrink_interval_in_minutes.setter
    def shrink_interval_in_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e43451a7f375511269acd231ddd4f1bd7dd4fbc36d273eeb3bb3824fa738f6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shrinkIntervalInMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="spotPriceLimit")
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotPriceLimit"))

    @spot_price_limit.setter
    def spot_price_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73a8d0109ee8c3a0cd73cc459ae668f970f8e68e3af8ad166452dd37d81b21fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotPriceLimit", value)

    @builtins.property
    @jsii.member(jsii_name="spotStrategy")
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: The preemption policy of the compute nodes. Valid values:
        NoSpot: The compute nodes are pay-as-you-go instances.
        SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
        SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
        Default value: NoSpot
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotStrategy"))

    @spot_strategy.setter
    def spot_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1abe4597b590dbe3d2c3de16f154b753392a081f4934eaf52ef49846ec103de5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotStrategy", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.DataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "data_disk_category": "dataDiskCategory",
            "data_disk_delete_with_instance": "dataDiskDeleteWithInstance",
            "data_disk_encrypted": "dataDiskEncrypted",
            "data_disk_kms_key_id": "dataDiskKmsKeyId",
            "data_disk_performance_level": "dataDiskPerformanceLevel",
            "data_disk_size": "dataDiskSize",
        },
    )
    class DataDisksProperty:
        def __init__(
            self,
            *,
            data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param data_disk_category: 
            :param data_disk_delete_with_instance: 
            :param data_disk_encrypted: 
            :param data_disk_kms_key_id: 
            :param data_disk_performance_level: 
            :param data_disk_size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8898d1e5b9634a3b2524bf8d141df15fc3a1415239536314b090cb16db48f424)
                check_type(argname="argument data_disk_category", value=data_disk_category, expected_type=type_hints["data_disk_category"])
                check_type(argname="argument data_disk_delete_with_instance", value=data_disk_delete_with_instance, expected_type=type_hints["data_disk_delete_with_instance"])
                check_type(argname="argument data_disk_encrypted", value=data_disk_encrypted, expected_type=type_hints["data_disk_encrypted"])
                check_type(argname="argument data_disk_kms_key_id", value=data_disk_kms_key_id, expected_type=type_hints["data_disk_kms_key_id"])
                check_type(argname="argument data_disk_performance_level", value=data_disk_performance_level, expected_type=type_hints["data_disk_performance_level"])
                check_type(argname="argument data_disk_size", value=data_disk_size, expected_type=type_hints["data_disk_size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if data_disk_category is not None:
                self._values["data_disk_category"] = data_disk_category
            if data_disk_delete_with_instance is not None:
                self._values["data_disk_delete_with_instance"] = data_disk_delete_with_instance
            if data_disk_encrypted is not None:
                self._values["data_disk_encrypted"] = data_disk_encrypted
            if data_disk_kms_key_id is not None:
                self._values["data_disk_kms_key_id"] = data_disk_kms_key_id
            if data_disk_performance_level is not None:
                self._values["data_disk_performance_level"] = data_disk_performance_level
            if data_disk_size is not None:
                self._values["data_disk_size"] = data_disk_size

        @builtins.property
        def data_disk_category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dataDiskCategory: The type of the data disk. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: SSD.
            cloud_essd: ESSD.
            Default value: cloud_efficiency
            '''
            result = self._values.get("data_disk_category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_delete_with_instance(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataDiskDeleteWithInstance: Specifies whether the data disk is released when the node is released.
            '''
            result = self._values.get("data_disk_delete_with_instance")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_encrypted(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataDiskEncrypted: Specifies whether to encrypt the data disk.
            '''
            result = self._values.get("data_disk_encrypted")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_kms_key_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataDiskKmsKeyId: The KMS key ID of the data disk.
            '''
            result = self._values.get("data_disk_kms_key_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dataDiskPerformanceLevel: The performance level of the ESSD used as the data disk. The parameter takes effect only when the Queues.N.DataDisks.M.DataDiskCategory parameter is set to cloud_essd. Valid values:
            PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
            PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
            PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
            PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
            Default value: PL1
            '''
            result = self._values.get("data_disk_performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dataDiskSize: The size of the data disk. Unit: GB.
            Default value: 40
            '''
            result = self._values.get("data_disk_size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.InstanceTypesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "v_switch_id": "vSwitchId",
            "zone_id": "zoneId",
            "spot_price_limit": "spotPriceLimit",
            "spot_strategy": "spotStrategy",
        },
    )
    class InstanceTypesProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param v_switch_id: 
            :param zone_id: 
            :param spot_price_limit: 
            :param spot_strategy: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d167d30cbe4d4102e62760d61cf3096d77424041b9175713e4beca1a2048d2e7)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
                check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
                check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }
            if spot_price_limit is not None:
                self._values["spot_price_limit"] = spot_price_limit
            if spot_strategy is not None:
                self._values["spot_strategy"] = spot_strategy

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceType: The instance type of the compute nodes that are automatically added in the queue.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: The vSwitch ID of the compute nodes that are automatically added in the queue.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: The zone ID of the compute nodes that are automatically added in the queue belongs.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def spot_price_limit(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: spotPriceLimit: The maximum hourly price of the compute nodes that are automatically added in the queue. The value can be accurate to three decimal places. The parameter takes effect only when Queues.N.InstanceTypes.M.SpotStrategy is set to SpotWithPriceLimit
            '''
            result = self._values.get("spot_price_limit")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            spotStrategy: The bidding method of the compute nodes that are automatically added in the queue. Valid values:
            NoSpot: The compute nodes are pay-as-you-go instances.
            SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
            SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
            Default value: NoSpot
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceTypesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.QueuesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "data_disks": "dataDisks",
            "enable_auto_grow": "enableAutoGrow",
            "enable_auto_shrink": "enableAutoShrink",
            "host_name_prefix": "hostNamePrefix",
            "host_name_suffix": "hostNameSuffix",
            "instance_type": "instanceType",
            "instance_types": "instanceTypes",
            "max_nodes_in_queue": "maxNodesInQueue",
            "max_nodes_per_cycle": "maxNodesPerCycle",
            "min_nodes_in_queue": "minNodesInQueue",
            "min_nodes_per_cycle": "minNodesPerCycle",
            "queue_image_id": "queueImageId",
            "queue_name": "queueName",
            "spot_price_limit": "spotPriceLimit",
            "spot_strategy": "spotStrategy",
            "system_disk_category": "systemDiskCategory",
            "system_disk_level": "systemDiskLevel",
            "system_disk_size": "systemDiskSize",
        },
    )
    class QueuesProperty:
        def __init__(
            self,
            *,
            data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAutoScaleConfig.DataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_name_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_name_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAutoScaleConfig.InstanceTypesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            max_nodes_in_queue: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_nodes_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            min_nodes_in_queue: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            min_nodes_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            queue_image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param data_disks: 
            :param enable_auto_grow: 
            :param enable_auto_shrink: 
            :param host_name_prefix: 
            :param host_name_suffix: 
            :param instance_type: 
            :param instance_types: 
            :param max_nodes_in_queue: 
            :param max_nodes_per_cycle: 
            :param min_nodes_in_queue: 
            :param min_nodes_per_cycle: 
            :param queue_image_id: 
            :param queue_name: 
            :param spot_price_limit: 
            :param spot_strategy: 
            :param system_disk_category: 
            :param system_disk_level: 
            :param system_disk_size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8a4ab527712ba869a751af8d2f99de8772b964e864912bb8d2debf26be716578)
                check_type(argname="argument data_disks", value=data_disks, expected_type=type_hints["data_disks"])
                check_type(argname="argument enable_auto_grow", value=enable_auto_grow, expected_type=type_hints["enable_auto_grow"])
                check_type(argname="argument enable_auto_shrink", value=enable_auto_shrink, expected_type=type_hints["enable_auto_shrink"])
                check_type(argname="argument host_name_prefix", value=host_name_prefix, expected_type=type_hints["host_name_prefix"])
                check_type(argname="argument host_name_suffix", value=host_name_suffix, expected_type=type_hints["host_name_suffix"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument instance_types", value=instance_types, expected_type=type_hints["instance_types"])
                check_type(argname="argument max_nodes_in_queue", value=max_nodes_in_queue, expected_type=type_hints["max_nodes_in_queue"])
                check_type(argname="argument max_nodes_per_cycle", value=max_nodes_per_cycle, expected_type=type_hints["max_nodes_per_cycle"])
                check_type(argname="argument min_nodes_in_queue", value=min_nodes_in_queue, expected_type=type_hints["min_nodes_in_queue"])
                check_type(argname="argument min_nodes_per_cycle", value=min_nodes_per_cycle, expected_type=type_hints["min_nodes_per_cycle"])
                check_type(argname="argument queue_image_id", value=queue_image_id, expected_type=type_hints["queue_image_id"])
                check_type(argname="argument queue_name", value=queue_name, expected_type=type_hints["queue_name"])
                check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
                check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
                check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
                check_type(argname="argument system_disk_level", value=system_disk_level, expected_type=type_hints["system_disk_level"])
                check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if enable_auto_grow is not None:
                self._values["enable_auto_grow"] = enable_auto_grow
            if enable_auto_shrink is not None:
                self._values["enable_auto_shrink"] = enable_auto_shrink
            if host_name_prefix is not None:
                self._values["host_name_prefix"] = host_name_prefix
            if host_name_suffix is not None:
                self._values["host_name_suffix"] = host_name_suffix
            if instance_type is not None:
                self._values["instance_type"] = instance_type
            if instance_types is not None:
                self._values["instance_types"] = instance_types
            if max_nodes_in_queue is not None:
                self._values["max_nodes_in_queue"] = max_nodes_in_queue
            if max_nodes_per_cycle is not None:
                self._values["max_nodes_per_cycle"] = max_nodes_per_cycle
            if min_nodes_in_queue is not None:
                self._values["min_nodes_in_queue"] = min_nodes_in_queue
            if min_nodes_per_cycle is not None:
                self._values["min_nodes_per_cycle"] = min_nodes_per_cycle
            if queue_image_id is not None:
                self._values["queue_image_id"] = queue_image_id
            if queue_name is not None:
                self._values["queue_name"] = queue_name
            if spot_price_limit is not None:
                self._values["spot_price_limit"] = spot_price_limit
            if spot_strategy is not None:
                self._values["spot_strategy"] = spot_strategy
            if system_disk_category is not None:
                self._values["system_disk_category"] = system_disk_category
            if system_disk_level is not None:
                self._values["system_disk_level"] = system_disk_level
            if system_disk_size is not None:
                self._values["system_disk_size"] = system_disk_size

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: undefined
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.DataDisksProperty"]]]], result)

        @builtins.property
        def enable_auto_grow(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableAutoGrow: Specifies whether the queue enables auto scale-out. Valid values:
            true: enables auto scale-out.
            false: disables auto scale-out
            Default value: false
            '''
            result = self._values.get("enable_auto_grow")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_auto_shrink(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableAutoShrink: Specifies whether the queue enables auto scale-in. Valid values:
            true: enables auto scale-in.
            false: disables auto scale-in
            Default value: false
            '''
            result = self._values.get("enable_auto_shrink")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_name_prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostNamePrefix: The hostname prefix of the host that is used to perform scale-out for the queue. You can manage compute nodes that have a specified hostname prefix.
            '''
            result = self._values.get("host_name_prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_name_suffix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostNameSuffix: The hostname suffix of the host that is used to perform scale-out for the queue. You can manage nodes that have a specified hostname suffix.
            '''
            result = self._values.get("host_name_suffix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceType: The instance type of the compute nodes that are automatically added in the queue.
            '''
            result = self._values.get("instance_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_types(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.InstanceTypesProperty"]]]]:
            '''
            :Property: instanceTypes: undefined
            '''
            result = self._values.get("instance_types")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.InstanceTypesProperty"]]]], result)

        @builtins.property
        def max_nodes_in_queue(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maxNodesInQueue: The maximum number of the compute nodes that can be added in the queue.
            Default value: 100
            '''
            result = self._values.get("max_nodes_in_queue")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_nodes_per_cycle(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maxNodesPerCycle: The maximum number of compute nodes that can be added in each round of scale-out.
            Default value: 0
            '''
            result = self._values.get("max_nodes_per_cycle")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def min_nodes_in_queue(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            minNodesInQueue: The minimum number of the compute nodes that can be removed in the queue.
            Default value: 0
            '''
            result = self._values.get("min_nodes_in_queue")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def min_nodes_per_cycle(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            minNodesPerCycle: The minimum number of compute nodes that can be added in each round of scale-out.
            Default value: 1
            '''
            result = self._values.get("min_nodes_per_cycle")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def queue_image_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            queueImageId: The image ID of the queue where scale-out is performed.
            If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
            If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
            If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
            '''
            result = self._values.get("queue_image_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def queue_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: queueName: The name of the queue.
            '''
            result = self._values.get("queue_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_price_limit(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: spotPriceLimit: The maximum hourly price of the compute nodes that are automatically added in the queue. The value can be accurate to three decimal places. The parameter takes effect only when Queues.N.SpotStrategy is set to SpotWithPriceLimit.
            '''
            result = self._values.get("spot_price_limit")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            spotStrategy: The bidding method of the compute nodes that are automatically added in the queue. Valid values:
            NoSpot: The compute nodes are pay-as-you-go instances.
            SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
            SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
            Default value: NoSpot
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskCategory: The type of the system disk specified for the compute nodes that are added in the queue. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: SSD.
            cloud_essd: ESSD.
            Default value: cloud_efficiency
            '''
            result = self._values.get("system_disk_category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskLevel: The performance level of the system disk specified for the compute nodes that are added in the queue. Valid values:
            PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
            PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
            PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
            PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
            Default value: PL1
            '''
            result = self._values.get("system_disk_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskSize: The size of the system disk specified for the compute nodes that are added in the queue. Unit: GB.
            Default value: 40
            '''
            result = self._values.get("system_disk_size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueuesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "enable_auto_grow": "enableAutoGrow",
        "enable_auto_shrink": "enableAutoShrink",
        "exclude_nodes": "excludeNodes",
        "extra_nodes_grow_ratio": "extraNodesGrowRatio",
        "grow_interval_in_minutes": "growIntervalInMinutes",
        "grow_ratio": "growRatio",
        "grow_timeout_in_minutes": "growTimeoutInMinutes",
        "image_id": "imageId",
        "max_nodes_in_cluster": "maxNodesInCluster",
        "queues": "queues",
        "shrink_idle_times": "shrinkIdleTimes",
        "shrink_interval_in_minutes": "shrinkIntervalInMinutes",
        "spot_price_limit": "spotPriceLimit",
        "spot_strategy": "spotStrategy",
    },
)
class RosAutoScaleConfigProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        extra_nodes_grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_nodes_in_cluster: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        shrink_idle_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shrink_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EHPC::AutoScaleConfig``.

        :param cluster_id: 
        :param enable_auto_grow: 
        :param enable_auto_shrink: 
        :param exclude_nodes: 
        :param extra_nodes_grow_ratio: 
        :param grow_interval_in_minutes: 
        :param grow_ratio: 
        :param grow_timeout_in_minutes: 
        :param image_id: 
        :param max_nodes_in_cluster: 
        :param queues: 
        :param shrink_idle_times: 
        :param shrink_interval_in_minutes: 
        :param spot_price_limit: 
        :param spot_strategy: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__527569db2babe86e47fee4c8b26c23d682c7cbf15f4c8858bc4221fc2b2da6c8)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument enable_auto_grow", value=enable_auto_grow, expected_type=type_hints["enable_auto_grow"])
            check_type(argname="argument enable_auto_shrink", value=enable_auto_shrink, expected_type=type_hints["enable_auto_shrink"])
            check_type(argname="argument exclude_nodes", value=exclude_nodes, expected_type=type_hints["exclude_nodes"])
            check_type(argname="argument extra_nodes_grow_ratio", value=extra_nodes_grow_ratio, expected_type=type_hints["extra_nodes_grow_ratio"])
            check_type(argname="argument grow_interval_in_minutes", value=grow_interval_in_minutes, expected_type=type_hints["grow_interval_in_minutes"])
            check_type(argname="argument grow_ratio", value=grow_ratio, expected_type=type_hints["grow_ratio"])
            check_type(argname="argument grow_timeout_in_minutes", value=grow_timeout_in_minutes, expected_type=type_hints["grow_timeout_in_minutes"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument max_nodes_in_cluster", value=max_nodes_in_cluster, expected_type=type_hints["max_nodes_in_cluster"])
            check_type(argname="argument queues", value=queues, expected_type=type_hints["queues"])
            check_type(argname="argument shrink_idle_times", value=shrink_idle_times, expected_type=type_hints["shrink_idle_times"])
            check_type(argname="argument shrink_interval_in_minutes", value=shrink_interval_in_minutes, expected_type=type_hints["shrink_interval_in_minutes"])
            check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if enable_auto_grow is not None:
            self._values["enable_auto_grow"] = enable_auto_grow
        if enable_auto_shrink is not None:
            self._values["enable_auto_shrink"] = enable_auto_shrink
        if exclude_nodes is not None:
            self._values["exclude_nodes"] = exclude_nodes
        if extra_nodes_grow_ratio is not None:
            self._values["extra_nodes_grow_ratio"] = extra_nodes_grow_ratio
        if grow_interval_in_minutes is not None:
            self._values["grow_interval_in_minutes"] = grow_interval_in_minutes
        if grow_ratio is not None:
            self._values["grow_ratio"] = grow_ratio
        if grow_timeout_in_minutes is not None:
            self._values["grow_timeout_in_minutes"] = grow_timeout_in_minutes
        if image_id is not None:
            self._values["image_id"] = image_id
        if max_nodes_in_cluster is not None:
            self._values["max_nodes_in_cluster"] = max_nodes_in_cluster
        if queues is not None:
            self._values["queues"] = queues
        if shrink_idle_times is not None:
            self._values["shrink_idle_times"] = shrink_idle_times
        if shrink_interval_in_minutes is not None:
            self._values["shrink_interval_in_minutes"] = shrink_interval_in_minutes
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_auto_grow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
        true: enables auto scale-out.
        false: disables auto scale-out
        Default value: false
        '''
        result = self._values.get("enable_auto_grow")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auto_shrink(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
        true: enables auto scale-in.
        false: disables auto scale-in
        Default value: false
        '''
        result = self._values.get("enable_auto_shrink")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        '''
        result = self._values.get("exclude_nodes")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def extra_nodes_grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        extraNodesGrowRatio: The percentage of extra compute nodes.
        Default value: 0
        '''
        result = self._values.get("extra_nodes_grow_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
        Default value: 2
        '''
        result = self._values.get("grow_interval_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growRatio: The percentage of each round of scale-out.
        Default value: 100
        '''
        result = self._values.get("grow_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
        Default value: 20
        '''
        result = self._values.get("grow_timeout_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        imageId: The ID of the image.
        If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
        If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
        If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_nodes_in_cluster(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
        Default value: 100
        '''
        result = self._values.get("max_nodes_in_cluster")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAutoScaleConfig.QueuesProperty]]]]:
        '''
        :Property: queues:
        '''
        result = self._values.get("queues")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAutoScaleConfig.QueuesProperty]]]], result)

    @builtins.property
    def shrink_idle_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
        Default value: 3
        '''
        result = self._values.get("shrink_idle_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shrink_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
        Default value: 2
        '''
        result = self._values.get("shrink_interval_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        '''
        result = self._values.get("spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: The preemption policy of the compute nodes. Valid values:
        NoSpot: The compute nodes are pay-as-you-go instances.
        SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
        SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
        Default value: NoSpot
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAutoScaleConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::EHPC::Cluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EHPC::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf93d989786b299a7833199d65147d8075a203cba28aee188bd9dc8d127864a2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4c16cc463df9bd416f4663a0515a5b8f67111cde04577c2e89746bf1aee1bfb1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsInfo")
    def attr_ecs_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
        You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: Cluster name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: Security group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ecsOrderComputeCount")
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderComputeCount"))

    @ecs_order_compute_count.setter
    def ecs_order_compute_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__011909b9f7478db8d3e01d15c8e18a6c063eab31685533c356c968a9a49aa581)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderComputeCount", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderComputeInstanceType")
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderComputeInstanceType"))

    @ecs_order_compute_instance_type.setter
    def ecs_order_compute_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd5c2642f0a44ed0abe0f563e22eea45e303b9d647adeb1db75d51be5874dc13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderComputeInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderLoginCount")
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderLoginCount: Login node number can only be 1.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderLoginCount"))

    @ecs_order_login_count.setter
    def ecs_order_login_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__442acdebf2f065232ea367d5983c3f18ed6d621b479297ad1030c25f810dd5ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderLoginCount", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderLoginInstanceType")
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderLoginInstanceType: Log cluster node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderLoginInstanceType"))

    @ecs_order_login_instance_type.setter
    def ecs_order_login_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e53c7928b3b53d98e4a53c1e42762a8d8c696667f8d3820a8b191ce7b9004bee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderLoginInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderManagerInstanceType")
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderManagerInstanceType: Cluster control node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderManagerInstanceType"))

    @ecs_order_manager_instance_type.setter
    def ecs_order_manager_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6685a8b886f129222820659b26ef3d1bcfea35e44ef743c8e80674df50e0e3c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderManagerInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9675e0300f626dc93caa437a6a6a116bfdc347d690ea833a87d144962402171)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23d4209ba794939b3d8e069503780aa5758947ddf750d6f695dbfcefacb47bca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="osTag")
    def os_tag(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: osTag: Operating system image tag. You can call ListImages API to query.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "osTag"))

    @os_tag.setter
    def os_tag(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae6a7faa5e4c00d6e2a830f72ebcb41a67489d2ed99706e6c22289abeb95d234)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osTag", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e1264e301623e85196ffefec0bcfc8bc19570fb2ecf768ba0d5d4ca4c2b771b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountType: The service type of the domain account. Valid values:
        nis
        ldap
        Default value: nis
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd95cf09d7b4deec1a52f53ffbe408a26c21d094bb68a8628a4763d4513f592f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountType", value)

    @builtins.property
    @jsii.member(jsii_name="additionalVolumes")
    def additional_volumes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]]:
        '''
        :Property: additionalVolumes:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]], jsii.get(self, "additionalVolumes"))

    @additional_volumes.setter
    def additional_volumes(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd3aa0fc9b29b3b357f9f1691162543c7fb36135ffdbfeff299dc1ccb3b0b292)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "additionalVolumes", value)

    @builtins.property
    @jsii.member(jsii_name="application")
    def application(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]]:
        '''
        :Property: application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]], jsii.get(self, "application"))

    @application.setter
    def application(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1f817c99fa88d2cf61097b18f1a8cab8436beb3dc65d787c3cdf76d07949b4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "application", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: true: automatic renewals; false: no automatic renewals.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bc77fcdedcc6a20cc568ca4697eb2d19d8c1bee2cc02832cf4352d115d06a1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83163176f4265844a9c7b7672e49a3fccb0347a9a85550e49260992da495d840)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="clientVersion")
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
        You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clientVersion"))

    @client_version.setter
    def client_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28cf772b526ea2f695a6ba87c1b47c77471dcc01de6781382f580983bb564e2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clientVersion", value)

    @builtins.property
    @jsii.member(jsii_name="computeEnableHt")
    def compute_enable_ht(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
        true: Hyper-threading is supported.
        false: Hyper-threading is not supported.
        Default value: true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "computeEnableHt"))

    @compute_enable_ht.setter
    def compute_enable_ht(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d07de26c8a7c217859a0a87e930c2b6bc5169d5c9411d249203241db9b5308f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "computeEnableHt", value)

    @builtins.property
    @jsii.member(jsii_name="computeSpotPriceLimit")
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "computeSpotPriceLimit"))

    @compute_spot_price_limit.setter
    def compute_spot_price_limit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84d101d934cfec211821e325182d34e8baa1936a1449a8669cc2f8f38101c118)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "computeSpotPriceLimit", value)

    @builtins.property
    @jsii.member(jsii_name="computeSpotStrategy")
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "computeSpotStrategy"))

    @compute_spot_strategy.setter
    def compute_spot_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04fd17506be7e28b16c12e89a9989b5f52c377a549ef3c99620eeeabe84d0831)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "computeSpotStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="deployMode")
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deployMode: The mode in which the cluster is deployed. Valid values:
        Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
        Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
        Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
        Default value: Standard
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deployMode"))

    @deploy_mode.setter
    def deploy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67e0069b30be5334aca0e38f3140a3bb6220a51cb3247cd23a9a57ce1e8bea87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployMode", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Cluster description, 2 to 128 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fb252a4810d5f659209965c392b66698435db4866f405a09a97112ddd7d22cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="ecsChargeType")
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsChargeType"))

    @ecs_charge_type.setter
    def ecs_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cad091f7522b589ac02ee3e7f489e78f4a87f1e9684cfa27caf80ebbb3d6f082)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderManagerCount")
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsOrderManagerCount: Control node number can be 1, 2
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsOrderManagerCount"))

    @ecs_order_manager_count.setter
    def ecs_order_manager_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ab1df340496c9abd4a315fcd9f0a2b9c0f38bb2e8649d419da5c3f271f61e78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderManagerCount", value)

    @builtins.property
    @jsii.member(jsii_name="ehpcVersion")
    def ehpc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ehpcVersion"))

    @ehpc_version.setter
    def ehpc_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81c960b8eb91fb2154c762da4a1825bfce99419896f27d82d6c33101c50dc3a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ehpcVersion", value)

    @builtins.property
    @jsii.member(jsii_name="haEnable")
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        haEnable: Specifies whether to enable the high availability feature. Valid values:
        true: enables the high availability feature
        false: disables the high availability feature
        Default value: false
        Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "haEnable"))

    @ha_enable.setter
    def ha_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a676bb10dbf7fb79da1681e849e71ea0dc4ccead98b07e97d026b61a8b8070a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "haEnable", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c93f309f1b47355df4b0e5b95d509eb5b73804d2feefa1efa7f6d43578d1ab1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="imageOwnerAlias")
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageOwnerAlias: Mirror type: system, self, others or marketplace
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageOwnerAlias"))

    @image_owner_alias.setter
    def image_owner_alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e51df2fc113d1cf59a2222418e5e4076bba1fd8e6a8be952f2c8f36178e3724)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageOwnerAlias", value)

    @builtins.property
    @jsii.member(jsii_name="inputFileUrl")
    def input_file_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "inputFileUrl"))

    @input_file_url.setter
    def input_file_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a736d2f2f170307b01546fb9e719e74a29746621c6c4eff24dfb0e258d2118ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inputFileUrl", value)

    @builtins.property
    @jsii.member(jsii_name="isComputeEss")
    def is_compute_ess(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isComputeEss: Specifies whether to enable auto scaling. Valid values:
        true: enables auto scaling
        false: disables auto scaling
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isComputeEss"))

    @is_compute_ess.setter
    def is_compute_ess(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe23634f9a834032a4e7a6e5fe4bb4fc2e6393a81a873f0291c5ada7bb5f7ab7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isComputeEss", value)

    @builtins.property
    @jsii.member(jsii_name="jobQueue")
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jobQueue: 	The queue to which the compute nodes are added.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jobQueue"))

    @job_queue.setter
    def job_queue(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0651dba12f1f67b4544fbc0b421a29b0b29e2b725d212699a2e1c036b4a35b2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jobQueue", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: Key pair name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79d17d537aa8fc0fec83073478f30c897043ef2a67b66d3bfca3164af45b4e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__657e009d65230e887e3a27f351cf58104406994874996458415b6700cfcf8bd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23fb6535c6582e9aafae54321bd979c9eb430b0ca2547d51324d5f971c25b97b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a714bdfa0670bcb42c0993c5737a90af245b5930f4fd23d562c5311bd4d70f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="postInstallScript")
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]]:
        '''
        :Property: postInstallScript:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]], jsii.get(self, "postInstallScript"))

    @post_install_script.setter
    def post_install_script(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34de0b293259def086d741f7c0e7dab754bceb4a2ec89ed01e9fa055c0598090)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "postInstallScript", value)

    @builtins.property
    @jsii.member(jsii_name="remoteDirectory")
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remoteDirectory"))

    @remote_directory.setter
    def remote_directory(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bbebac803f7af975e311d295ca881a957d7c0c4149b219ad45beb2ad3b64e59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remoteDirectory", value)

    @builtins.property
    @jsii.member(jsii_name="remoteVisEnable")
    def remote_vis_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
        true: enables VNC
        false: disables VNC
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remoteVisEnable"))

    @remote_vis_enable.setter
    def remote_vis_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__308bc690fb0ad5800270e9d466ab5420d3f7722b1b4e13f2b71d21d5401a059f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remoteVisEnable", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group.
        You can call the ListResourceGroups operation to obtain the ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74105de73744288f5040a4c9e0c31bb5b13dc782555399eb665e4216f46a92ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="sccClusterId")
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sccClusterId"))

    @scc_cluster_id.setter
    def scc_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c3d96c1e3c2250eb0bc9b2d51104f98f51032e52618818071381e2a0c063303)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sccClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="schedulerType")
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        schedulerType: The type of the scheduler. Valid values:
        pbs
        slurm
        opengridscheduler
        deadline
        Default value: pbs
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "schedulerType"))

    @scheduler_type.setter
    def scheduler_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b54659551ac4a234501cd61490320d484daaa2d21d1549fc681f0114cb3c80ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schedulerType", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a11181dd640ee823b32f36010f92d14c6edd2b0a78370e03063c55376ed9971f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupName")
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupName"))

    @security_group_name.setter
    def security_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01f2c0581699ece08c4bdba215dfa9c1b8ce57f153b3b2c52aa8acbe7a79302f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskLevel")
    def system_disk_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
        PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
        PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
        PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
        PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
        Default value: PL1
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskLevel"))

    @system_disk_level.setter
    def system_disk_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c1ae049b76b16c2525dba7017ddafdaec286e526d82fab2b4f9ccaff1a8149c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskLevel", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskSize")
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskSize: The size of the system disk. Unit: GB
        Valid values: 40 to 500
        Default value: 40
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskSize"))

    @system_disk_size.setter
    def system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0de2102d5cb73b2217c541186305c8cd330008ce9d6a598e71710e4b225b3295)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskType")
    def system_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskType: The type of the system disk. Valid values:
        cloud_efficiency: ultra disk.
        cloud_ssd: SSD.
        cloud_essd: ESSD.
        Default value: cloud_ssd
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskType"))

    @system_disk_type.setter
    def system_disk_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15b80086c31a65901fa49e921bf5deb821b8b056f5531161e8e895e5f4e50a65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskType", value)

    @builtins.property
    @jsii.member(jsii_name="volumeId")
    def volume_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeId"))

    @volume_id.setter
    def volume_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__feb25ac143d8c65bf76f43af5b2e71a82e63613a09cddc781de8dc56ba26cae1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeId", value)

    @builtins.property
    @jsii.member(jsii_name="volumeMountpoint")
    def volume_mountpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        volumeMountpoint: The mount target of the file system. Take note of the following information:
        If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
        If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeMountpoint"))

    @volume_mountpoint.setter
    def volume_mountpoint(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__191c0053df3422e2951f31fe3030aa6c11088cf00ca8f7f46b326f1e34cdd55d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeMountpoint", value)

    @builtins.property
    @jsii.member(jsii_name="volumeProtocol")
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        volumeProtocol: The type of the protocol that is used by the file system. Valid values:
        nfs
        smb
        Default value: nfs
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeProtocol"))

    @volume_protocol.setter
    def volume_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a57c8244dacb5aa00bb77fb51c75e19b43d48a5b270fae9bafd68041efe0c883)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="volumeType")
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeType"))

    @volume_type.setter
    def volume_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dec30dc8c5046fb2006cea3dd3c5e2e9828cdd220ed1c01737d958494b39ef5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeType", value)

    @builtins.property
    @jsii.member(jsii_name="withoutElasticIp")
    def without_elastic_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "withoutElasticIp"))

    @without_elastic_ip.setter
    def without_elastic_ip(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c3c0168ad4a9ee650b34b52f9e920272235e20c6d8cf780b3fddf51773dfd24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "withoutElasticIp", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: Available area ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42d21b2922e8df9ad551fc1fb204f7b5763731844edff20520b5e67b700ab88a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosCluster.AdditionalVolumesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "local_directory": "localDirectory",
            "volume_id": "volumeId",
            "volume_mountpoint": "volumeMountpoint",
            "job_queue": "jobQueue",
            "location": "location",
            "remote_directory": "remoteDirectory",
            "volume_protocol": "volumeProtocol",
            "volume_type": "volumeType",
        },
    )
    class AdditionalVolumesProperty:
        def __init__(
            self,
            *,
            local_directory: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            volume_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            volume_mountpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param local_directory: 
            :param volume_id: 
            :param volume_mountpoint: 
            :param job_queue: 
            :param location: 
            :param remote_directory: 
            :param volume_protocol: 
            :param volume_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__078f69ae7a13d416f6d6917f77c4c80846f7ad6897a4b5a55b4ce01acbffac2c)
                check_type(argname="argument local_directory", value=local_directory, expected_type=type_hints["local_directory"])
                check_type(argname="argument volume_id", value=volume_id, expected_type=type_hints["volume_id"])
                check_type(argname="argument volume_mountpoint", value=volume_mountpoint, expected_type=type_hints["volume_mountpoint"])
                check_type(argname="argument job_queue", value=job_queue, expected_type=type_hints["job_queue"])
                check_type(argname="argument location", value=location, expected_type=type_hints["location"])
                check_type(argname="argument remote_directory", value=remote_directory, expected_type=type_hints["remote_directory"])
                check_type(argname="argument volume_protocol", value=volume_protocol, expected_type=type_hints["volume_protocol"])
                check_type(argname="argument volume_type", value=volume_type, expected_type=type_hints["volume_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "local_directory": local_directory,
                "volume_id": volume_id,
                "volume_mountpoint": volume_mountpoint,
            }
            if job_queue is not None:
                self._values["job_queue"] = job_queue
            if location is not None:
                self._values["location"] = location
            if remote_directory is not None:
                self._values["remote_directory"] = remote_directory
            if volume_protocol is not None:
                self._values["volume_protocol"] = volume_protocol
            if volume_type is not None:
                self._values["volume_type"] = volume_type

        @builtins.property
        def local_directory(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: localDirectory: The local directory to which the additional file system is mounted.
            '''
            result = self._values.get("local_directory")
            assert result is not None, "Required property 'local_directory' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def volume_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: volumeId: The ID of the additional file system.
            '''
            result = self._values.get("volume_id")
            assert result is not None, "Required property 'volume_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def volume_mountpoint(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: volumeMountpoint: The mount target of the additional file system.
            '''
            result = self._values.get("volume_mountpoint")
            assert result is not None, "Required property 'volume_mountpoint' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def job_queue(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: jobQueue: The queue of the nodes to which the additional file system is attached.
            '''
            result = self._values.get("job_queue")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def location(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: location: The type of the cluster. Valid value: PublicCloud.
            '''
            result = self._values.get("location")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def remote_directory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: remoteDirectory: The remote directory to which the additional file system is mounted.
            '''
            result = self._values.get("remote_directory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def volume_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            volumeProtocol: The type of the protocol that is used by the additional file system. Valid values:
            nfs
            smb
            Default value: nfs
            '''
            result = self._values.get("volume_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def volume_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: volumeType: The type of the additional shared storage. Only nas file systems are supported.
            '''
            result = self._values.get("volume_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AdditionalVolumesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty",
        jsii_struct_bases=[],
        name_mapping={"tag": "tag"},
    )
    class ApplicationProperty:
        def __init__(
            self,
            *,
            tag: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param tag: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__91f667542426b4e96f766ac0d0ce1a1c60e5a9f5ffd3fff89c86ea88186ea8c9)
                check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "tag": tag,
            }

        @builtins.property
        def tag(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
            '''
            result = self._values.get("tag")
            assert result is not None, "Required property 'tag' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ApplicationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty",
        jsii_struct_bases=[],
        name_mapping={"args": "args", "url": "url"},
    )
    class PostInstallScriptProperty:
        def __init__(
            self,
            *,
            args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param args: 
            :param url: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0418a5eec8fe94e92a82f369e91ee5c99a421ee24d25814a12e30b6972af9205)
                check_type(argname="argument args", value=args, expected_type=type_hints["args"])
                check_type(argname="argument url", value=url, expected_type=type_hints["url"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if args is not None:
                self._values["args"] = args
            if url is not None:
                self._values["url"] = url

        @builtins.property
        def args(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
            '''
            result = self._values.get("args")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
            '''
            result = self._values.get("url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PostInstallScriptProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_order_compute_count": "ecsOrderComputeCount",
        "ecs_order_compute_instance_type": "ecsOrderComputeInstanceType",
        "ecs_order_login_count": "ecsOrderLoginCount",
        "ecs_order_login_instance_type": "ecsOrderLoginInstanceType",
        "ecs_order_manager_instance_type": "ecsOrderManagerInstanceType",
        "name": "name",
        "os_tag": "osTag",
        "v_switch_id": "vSwitchId",
        "account_type": "accountType",
        "additional_volumes": "additionalVolumes",
        "application": "application",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "client_version": "clientVersion",
        "compute_enable_ht": "computeEnableHt",
        "compute_spot_price_limit": "computeSpotPriceLimit",
        "compute_spot_strategy": "computeSpotStrategy",
        "deploy_mode": "deployMode",
        "description": "description",
        "ecs_charge_type": "ecsChargeType",
        "ecs_order_manager_count": "ecsOrderManagerCount",
        "ehpc_version": "ehpcVersion",
        "ha_enable": "haEnable",
        "image_id": "imageId",
        "image_owner_alias": "imageOwnerAlias",
        "input_file_url": "inputFileUrl",
        "is_compute_ess": "isComputeEss",
        "job_queue": "jobQueue",
        "key_pair_name": "keyPairName",
        "password": "password",
        "period": "period",
        "period_unit": "periodUnit",
        "post_install_script": "postInstallScript",
        "remote_directory": "remoteDirectory",
        "remote_vis_enable": "remoteVisEnable",
        "resource_group_id": "resourceGroupId",
        "scc_cluster_id": "sccClusterId",
        "scheduler_type": "schedulerType",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "system_disk_level": "systemDiskLevel",
        "system_disk_size": "systemDiskSize",
        "system_disk_type": "systemDiskType",
        "volume_id": "volumeId",
        "volume_mountpoint": "volumeMountpoint",
        "volume_protocol": "volumeProtocol",
        "volume_type": "volumeType",
        "without_elastic_ip": "withoutElasticIp",
        "zone_id": "zoneId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        ecs_order_compute_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_compute_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_login_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_login_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_manager_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        os_tag: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        additional_volumes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AdditionalVolumesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        application: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ApplicationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ehpc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ha_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        input_file_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_compute_ess: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_install_script: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.PostInstallScriptProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remote_vis_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_mountpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        without_elastic_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EHPC::Cluster``.

        :param ecs_order_compute_count: 
        :param ecs_order_compute_instance_type: 
        :param ecs_order_login_count: 
        :param ecs_order_login_instance_type: 
        :param ecs_order_manager_instance_type: 
        :param name: 
        :param os_tag: 
        :param v_switch_id: 
        :param account_type: 
        :param additional_volumes: 
        :param application: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param client_version: 
        :param compute_enable_ht: 
        :param compute_spot_price_limit: 
        :param compute_spot_strategy: 
        :param deploy_mode: 
        :param description: 
        :param ecs_charge_type: 
        :param ecs_order_manager_count: 
        :param ehpc_version: 
        :param ha_enable: 
        :param image_id: 
        :param image_owner_alias: 
        :param input_file_url: 
        :param is_compute_ess: 
        :param job_queue: 
        :param key_pair_name: 
        :param password: 
        :param period: 
        :param period_unit: 
        :param post_install_script: 
        :param remote_directory: 
        :param remote_vis_enable: 
        :param resource_group_id: 
        :param scc_cluster_id: 
        :param scheduler_type: 
        :param security_group_id: 
        :param security_group_name: 
        :param system_disk_level: 
        :param system_disk_size: 
        :param system_disk_type: 
        :param volume_id: 
        :param volume_mountpoint: 
        :param volume_protocol: 
        :param volume_type: 
        :param without_elastic_ip: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9544891090de6cbb7ca4fdd01d92448fdfc3c5efc0f3980d28ff825c1725bef)
            check_type(argname="argument ecs_order_compute_count", value=ecs_order_compute_count, expected_type=type_hints["ecs_order_compute_count"])
            check_type(argname="argument ecs_order_compute_instance_type", value=ecs_order_compute_instance_type, expected_type=type_hints["ecs_order_compute_instance_type"])
            check_type(argname="argument ecs_order_login_count", value=ecs_order_login_count, expected_type=type_hints["ecs_order_login_count"])
            check_type(argname="argument ecs_order_login_instance_type", value=ecs_order_login_instance_type, expected_type=type_hints["ecs_order_login_instance_type"])
            check_type(argname="argument ecs_order_manager_instance_type", value=ecs_order_manager_instance_type, expected_type=type_hints["ecs_order_manager_instance_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument os_tag", value=os_tag, expected_type=type_hints["os_tag"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
            check_type(argname="argument additional_volumes", value=additional_volumes, expected_type=type_hints["additional_volumes"])
            check_type(argname="argument application", value=application, expected_type=type_hints["application"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument client_version", value=client_version, expected_type=type_hints["client_version"])
            check_type(argname="argument compute_enable_ht", value=compute_enable_ht, expected_type=type_hints["compute_enable_ht"])
            check_type(argname="argument compute_spot_price_limit", value=compute_spot_price_limit, expected_type=type_hints["compute_spot_price_limit"])
            check_type(argname="argument compute_spot_strategy", value=compute_spot_strategy, expected_type=type_hints["compute_spot_strategy"])
            check_type(argname="argument deploy_mode", value=deploy_mode, expected_type=type_hints["deploy_mode"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument ecs_charge_type", value=ecs_charge_type, expected_type=type_hints["ecs_charge_type"])
            check_type(argname="argument ecs_order_manager_count", value=ecs_order_manager_count, expected_type=type_hints["ecs_order_manager_count"])
            check_type(argname="argument ehpc_version", value=ehpc_version, expected_type=type_hints["ehpc_version"])
            check_type(argname="argument ha_enable", value=ha_enable, expected_type=type_hints["ha_enable"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument image_owner_alias", value=image_owner_alias, expected_type=type_hints["image_owner_alias"])
            check_type(argname="argument input_file_url", value=input_file_url, expected_type=type_hints["input_file_url"])
            check_type(argname="argument is_compute_ess", value=is_compute_ess, expected_type=type_hints["is_compute_ess"])
            check_type(argname="argument job_queue", value=job_queue, expected_type=type_hints["job_queue"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument post_install_script", value=post_install_script, expected_type=type_hints["post_install_script"])
            check_type(argname="argument remote_directory", value=remote_directory, expected_type=type_hints["remote_directory"])
            check_type(argname="argument remote_vis_enable", value=remote_vis_enable, expected_type=type_hints["remote_vis_enable"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scc_cluster_id", value=scc_cluster_id, expected_type=type_hints["scc_cluster_id"])
            check_type(argname="argument scheduler_type", value=scheduler_type, expected_type=type_hints["scheduler_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_group_name", value=security_group_name, expected_type=type_hints["security_group_name"])
            check_type(argname="argument system_disk_level", value=system_disk_level, expected_type=type_hints["system_disk_level"])
            check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            check_type(argname="argument system_disk_type", value=system_disk_type, expected_type=type_hints["system_disk_type"])
            check_type(argname="argument volume_id", value=volume_id, expected_type=type_hints["volume_id"])
            check_type(argname="argument volume_mountpoint", value=volume_mountpoint, expected_type=type_hints["volume_mountpoint"])
            check_type(argname="argument volume_protocol", value=volume_protocol, expected_type=type_hints["volume_protocol"])
            check_type(argname="argument volume_type", value=volume_type, expected_type=type_hints["volume_type"])
            check_type(argname="argument without_elastic_ip", value=without_elastic_ip, expected_type=type_hints["without_elastic_ip"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ecs_order_compute_count": ecs_order_compute_count,
            "ecs_order_compute_instance_type": ecs_order_compute_instance_type,
            "ecs_order_login_count": ecs_order_login_count,
            "ecs_order_login_instance_type": ecs_order_login_instance_type,
            "ecs_order_manager_instance_type": ecs_order_manager_instance_type,
            "name": name,
            "os_tag": os_tag,
            "v_switch_id": v_switch_id,
        }
        if account_type is not None:
            self._values["account_type"] = account_type
        if additional_volumes is not None:
            self._values["additional_volumes"] = additional_volumes
        if application is not None:
            self._values["application"] = application
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if client_version is not None:
            self._values["client_version"] = client_version
        if compute_enable_ht is not None:
            self._values["compute_enable_ht"] = compute_enable_ht
        if compute_spot_price_limit is not None:
            self._values["compute_spot_price_limit"] = compute_spot_price_limit
        if compute_spot_strategy is not None:
            self._values["compute_spot_strategy"] = compute_spot_strategy
        if deploy_mode is not None:
            self._values["deploy_mode"] = deploy_mode
        if description is not None:
            self._values["description"] = description
        if ecs_charge_type is not None:
            self._values["ecs_charge_type"] = ecs_charge_type
        if ecs_order_manager_count is not None:
            self._values["ecs_order_manager_count"] = ecs_order_manager_count
        if ehpc_version is not None:
            self._values["ehpc_version"] = ehpc_version
        if ha_enable is not None:
            self._values["ha_enable"] = ha_enable
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_owner_alias is not None:
            self._values["image_owner_alias"] = image_owner_alias
        if input_file_url is not None:
            self._values["input_file_url"] = input_file_url
        if is_compute_ess is not None:
            self._values["is_compute_ess"] = is_compute_ess
        if job_queue is not None:
            self._values["job_queue"] = job_queue
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if post_install_script is not None:
            self._values["post_install_script"] = post_install_script
        if remote_directory is not None:
            self._values["remote_directory"] = remote_directory
        if remote_vis_enable is not None:
            self._values["remote_vis_enable"] = remote_vis_enable
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scc_cluster_id is not None:
            self._values["scc_cluster_id"] = scc_cluster_id
        if scheduler_type is not None:
            self._values["scheduler_type"] = scheduler_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if system_disk_level is not None:
            self._values["system_disk_level"] = system_disk_level
        if system_disk_size is not None:
            self._values["system_disk_size"] = system_disk_size
        if system_disk_type is not None:
            self._values["system_disk_type"] = system_disk_type
        if volume_id is not None:
            self._values["volume_id"] = volume_id
        if volume_mountpoint is not None:
            self._values["volume_mountpoint"] = volume_mountpoint
        if volume_protocol is not None:
            self._values["volume_protocol"] = volume_protocol
        if volume_type is not None:
            self._values["volume_type"] = volume_type
        if without_elastic_ip is not None:
            self._values["without_elastic_ip"] = without_elastic_ip
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
        '''
        result = self._values.get("ecs_order_compute_count")
        assert result is not None, "Required property 'ecs_order_compute_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        '''
        result = self._values.get("ecs_order_compute_instance_type")
        assert result is not None, "Required property 'ecs_order_compute_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderLoginCount: Login node number can only be 1.
        '''
        result = self._values.get("ecs_order_login_count")
        assert result is not None, "Required property 'ecs_order_login_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderLoginInstanceType: Log cluster node instance specifications.
        '''
        result = self._values.get("ecs_order_login_instance_type")
        assert result is not None, "Required property 'ecs_order_login_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderManagerInstanceType: Cluster control node instance specifications.
        '''
        result = self._values.get("ecs_order_manager_instance_type")
        assert result is not None, "Required property 'ecs_order_manager_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def os_tag(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: osTag: Operating system image tag. You can call ListImages API to query.
        '''
        result = self._values.get("os_tag")
        assert result is not None, "Required property 'os_tag' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountType: The service type of the domain account. Valid values:
        nis
        ldap
        Default value: nis
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def additional_volumes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AdditionalVolumesProperty]]]]:
        '''
        :Property: additionalVolumes:
        '''
        result = self._values.get("additional_volumes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AdditionalVolumesProperty]]]], result)

    @builtins.property
    def application(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ApplicationProperty]]]]:
        '''
        :Property: application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        '''
        result = self._values.get("application")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ApplicationProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: true: automatic renewals; false: no automatic renewals.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
        You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        '''
        result = self._values.get("client_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_enable_ht(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
        true: Hyper-threading is supported.
        false: Hyper-threading is not supported.
        Default value: true
        '''
        result = self._values.get("compute_enable_ht")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        '''
        result = self._values.get("compute_spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
        '''
        result = self._values.get("compute_spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deployMode: The mode in which the cluster is deployed. Valid values:
        Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
        Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
        Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
        Default value: Standard
        '''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Cluster description, 2 to 128 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        '''
        result = self._values.get("ecs_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsOrderManagerCount: Control node number can be 1, 2
        '''
        result = self._values.get("ecs_order_manager_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ehpc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
        '''
        result = self._values.get("ehpc_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        haEnable: Specifies whether to enable the high availability feature. Valid values:
        true: enables the high availability feature
        false: disables the high availability feature
        Default value: false
        Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        '''
        result = self._values.get("ha_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageOwnerAlias: Mirror type: system, self, others or marketplace
        '''
        result = self._values.get("image_owner_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def input_file_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
        '''
        result = self._values.get("input_file_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_compute_ess(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isComputeEss: Specifies whether to enable auto scaling. Valid values:
        true: enables auto scaling
        false: disables auto scaling
        Default value: false
        '''
        result = self._values.get("is_compute_ess")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jobQueue: 	The queue to which the compute nodes are added.
        '''
        result = self._values.get("job_queue")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: Key pair name.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.PostInstallScriptProperty]]]]:
        '''
        :Property: postInstallScript:
        '''
        result = self._values.get("post_install_script")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.PostInstallScriptProperty]]]], result)

    @builtins.property
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        result = self._values.get("remote_directory")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remote_vis_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
        true: enables VNC
        false: disables VNC
        Default value: false
        '''
        result = self._values.get("remote_vis_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group.
        You can call the ListResourceGroups operation to obtain the ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        '''
        result = self._values.get("scc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        schedulerType: The type of the scheduler. Valid values:
        pbs
        slurm
        opengridscheduler
        deadline
        Default value: pbs
        '''
        result = self._values.get("scheduler_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
        PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
        PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
        PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
        PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
        Default value: PL1
        '''
        result = self._values.get("system_disk_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskSize: The size of the system disk. Unit: GB
        Valid values: 40 to 500
        Default value: 40
        '''
        result = self._values.get("system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskType: The type of the system disk. Valid values:
        cloud_efficiency: ultra disk.
        cloud_ssd: SSD.
        cloud_essd: ESSD.
        Default value: cloud_ssd
        '''
        result = self._values.get("system_disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
        '''
        result = self._values.get("volume_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_mountpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        volumeMountpoint: The mount target of the file system. Take note of the following information:
        If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
        If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        '''
        result = self._values.get("volume_mountpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        volumeProtocol: The type of the protocol that is used by the file system. Valid values:
        nfs
        smb
        Default value: nfs
        '''
        result = self._values.get("volume_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
        '''
        result = self._values.get("volume_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def without_elastic_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
        '''
        result = self._values.get("without_elastic_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: Available area ID.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AutoScaleConfig",
    "AutoScaleConfigProps",
    "Cluster",
    "ClusterProps",
    "RosAutoScaleConfig",
    "RosAutoScaleConfigProps",
    "RosCluster",
    "RosClusterProps",
]

publication.publish()

def _typecheckingstub__871b92a5787489715c1b4796c24157ba88adefdd89167ef4e90f7ab3fc2d0f7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AutoScaleConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__196d52035879bf00b7184dea87eeacd9bfe3bfa64e309819dc860bccc220f2d9(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extra_nodes_grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_nodes_in_cluster: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    shrink_idle_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shrink_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42fad8b829254cde00b4b66624801be4034f9a3b2e118a654013f4c23ac80df2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45e193143351251319a5627dd2ae3499075d631305c83a432861b0b284235a34(
    *,
    ecs_order_compute_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_compute_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_login_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_login_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_manager_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    os_tag: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    additional_volumes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AdditionalVolumesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    application: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ApplicationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ehpc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ha_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    input_file_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_compute_ess: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_install_script: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.PostInstallScriptProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remote_vis_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_mountpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    without_elastic_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e6aa3a147ede06e83fbeb4315c5101912fc2a982848075b358e751418ba52ec(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAutoScaleConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52c9bcab2898982620100e8afb81348f593abb2657af225d289f72561a50dc01(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fef2d493a4213be1ae35c64fd562de14cdba28cc1115d9254813bc309f9e80a7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__747c41aebd15546922847383a55a3b84e5455a9cf295e054acbc568e174d0526(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcaaed7b479ebb2284a85d268698232ab66ca8db3067cb0c46e28d08f434492e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c77607b7f550120466836d948b578ecbd9d393e97f72b0754be58d8b1aaf3ab6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29b6f058b52f19cf24326d4260893bae238df966af5c490433da5566f2026919(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63f23a241a75ed57a74039e387b7fb929befcb7736619afc8ab0763d2e64bd17(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09a7cb6fd221814ea9f72a243e3b5afa22ab9ef202db82e85d0833bcd9e65ecf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__999d92e0bce30dda57e3ccd922ad611d18b485722a2cc374d99eb4ae047918c8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__772ed5b0016d0f2bfdad234649dc20809d39aff1c2e5e8210134395724d5e00c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b8d6ac888e1527778bd98c8936cdc0d6a5aa69ebb096bc43de04c9f661c0114(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__896a0afa37141b9f5672200c0a9571cb6c229736a95ffcf16f878b406d49e348(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02ce51878aaca07f205a84d3429d425f89ada6a958b1e0c5d818635a5088d11a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAutoScaleConfig.QueuesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a54e2edb75347b44916d732ca529551820705aa21ce763a40f6be2745468b0d0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e43451a7f375511269acd231ddd4f1bd7dd4fbc36d273eeb3bb3824fa738f6d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73a8d0109ee8c3a0cd73cc459ae668f970f8e68e3af8ad166452dd37d81b21fe(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1abe4597b590dbe3d2c3de16f154b753392a081f4934eaf52ef49846ec103de5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8898d1e5b9634a3b2524bf8d141df15fc3a1415239536314b090cb16db48f424(
    *,
    data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d167d30cbe4d4102e62760d61cf3096d77424041b9175713e4beca1a2048d2e7(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a4ab527712ba869a751af8d2f99de8772b964e864912bb8d2debf26be716578(
    *,
    data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.DataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.InstanceTypesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    max_nodes_in_queue: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_nodes_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_nodes_in_queue: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_nodes_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queue_image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__527569db2babe86e47fee4c8b26c23d682c7cbf15f4c8858bc4221fc2b2da6c8(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extra_nodes_grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_nodes_in_cluster: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    shrink_idle_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shrink_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf93d989786b299a7833199d65147d8075a203cba28aee188bd9dc8d127864a2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c16cc463df9bd416f4663a0515a5b8f67111cde04577c2e89746bf1aee1bfb1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__011909b9f7478db8d3e01d15c8e18a6c063eab31685533c356c968a9a49aa581(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd5c2642f0a44ed0abe0f563e22eea45e303b9d647adeb1db75d51be5874dc13(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__442acdebf2f065232ea367d5983c3f18ed6d621b479297ad1030c25f810dd5ab(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e53c7928b3b53d98e4a53c1e42762a8d8c696667f8d3820a8b191ce7b9004bee(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6685a8b886f129222820659b26ef3d1bcfea35e44ef743c8e80674df50e0e3c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9675e0300f626dc93caa437a6a6a116bfdc347d690ea833a87d144962402171(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23d4209ba794939b3d8e069503780aa5758947ddf750d6f695dbfcefacb47bca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae6a7faa5e4c00d6e2a830f72ebcb41a67489d2ed99706e6c22289abeb95d234(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e1264e301623e85196ffefec0bcfc8bc19570fb2ecf768ba0d5d4ca4c2b771b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd95cf09d7b4deec1a52f53ffbe408a26c21d094bb68a8628a4763d4513f592f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd3aa0fc9b29b3b357f9f1691162543c7fb36135ffdbfeff299dc1ccb3b0b292(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AdditionalVolumesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1f817c99fa88d2cf61097b18f1a8cab8436beb3dc65d787c3cdf76d07949b4d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ApplicationProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bc77fcdedcc6a20cc568ca4697eb2d19d8c1bee2cc02832cf4352d115d06a1c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83163176f4265844a9c7b7672e49a3fccb0347a9a85550e49260992da495d840(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28cf772b526ea2f695a6ba87c1b47c77471dcc01de6781382f580983bb564e2b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d07de26c8a7c217859a0a87e930c2b6bc5169d5c9411d249203241db9b5308f6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84d101d934cfec211821e325182d34e8baa1936a1449a8669cc2f8f38101c118(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04fd17506be7e28b16c12e89a9989b5f52c377a549ef3c99620eeeabe84d0831(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67e0069b30be5334aca0e38f3140a3bb6220a51cb3247cd23a9a57ce1e8bea87(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fb252a4810d5f659209965c392b66698435db4866f405a09a97112ddd7d22cd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cad091f7522b589ac02ee3e7f489e78f4a87f1e9684cfa27caf80ebbb3d6f082(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ab1df340496c9abd4a315fcd9f0a2b9c0f38bb2e8649d419da5c3f271f61e78(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81c960b8eb91fb2154c762da4a1825bfce99419896f27d82d6c33101c50dc3a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a676bb10dbf7fb79da1681e849e71ea0dc4ccead98b07e97d026b61a8b8070a5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c93f309f1b47355df4b0e5b95d509eb5b73804d2feefa1efa7f6d43578d1ab1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e51df2fc113d1cf59a2222418e5e4076bba1fd8e6a8be952f2c8f36178e3724(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a736d2f2f170307b01546fb9e719e74a29746621c6c4eff24dfb0e258d2118ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe23634f9a834032a4e7a6e5fe4bb4fc2e6393a81a873f0291c5ada7bb5f7ab7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0651dba12f1f67b4544fbc0b421a29b0b29e2b725d212699a2e1c036b4a35b2e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79d17d537aa8fc0fec83073478f30c897043ef2a67b66d3bfca3164af45b4e72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__657e009d65230e887e3a27f351cf58104406994874996458415b6700cfcf8bd3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23fb6535c6582e9aafae54321bd979c9eb430b0ca2547d51324d5f971c25b97b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a714bdfa0670bcb42c0993c5737a90af245b5930f4fd23d562c5311bd4d70f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34de0b293259def086d741f7c0e7dab754bceb4a2ec89ed01e9fa055c0598090(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.PostInstallScriptProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bbebac803f7af975e311d295ca881a957d7c0c4149b219ad45beb2ad3b64e59(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__308bc690fb0ad5800270e9d466ab5420d3f7722b1b4e13f2b71d21d5401a059f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74105de73744288f5040a4c9e0c31bb5b13dc782555399eb665e4216f46a92ca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c3d96c1e3c2250eb0bc9b2d51104f98f51032e52618818071381e2a0c063303(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b54659551ac4a234501cd61490320d484daaa2d21d1549fc681f0114cb3c80ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a11181dd640ee823b32f36010f92d14c6edd2b0a78370e03063c55376ed9971f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01f2c0581699ece08c4bdba215dfa9c1b8ce57f153b3b2c52aa8acbe7a79302f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c1ae049b76b16c2525dba7017ddafdaec286e526d82fab2b4f9ccaff1a8149c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0de2102d5cb73b2217c541186305c8cd330008ce9d6a598e71710e4b225b3295(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15b80086c31a65901fa49e921bf5deb821b8b056f5531161e8e895e5f4e50a65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feb25ac143d8c65bf76f43af5b2e71a82e63613a09cddc781de8dc56ba26cae1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__191c0053df3422e2951f31fe3030aa6c11088cf00ca8f7f46b326f1e34cdd55d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a57c8244dacb5aa00bb77fb51c75e19b43d48a5b270fae9bafd68041efe0c883(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dec30dc8c5046fb2006cea3dd3c5e2e9828cdd220ed1c01737d958494b39ef5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c3c0168ad4a9ee650b34b52f9e920272235e20c6d8cf780b3fddf51773dfd24(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42d21b2922e8df9ad551fc1fb204f7b5763731844edff20520b5e67b700ab88a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__078f69ae7a13d416f6d6917f77c4c80846f7ad6897a4b5a55b4ce01acbffac2c(
    *,
    local_directory: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    volume_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    volume_mountpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91f667542426b4e96f766ac0d0ce1a1c60e5a9f5ffd3fff89c86ea88186ea8c9(
    *,
    tag: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0418a5eec8fe94e92a82f369e91ee5c99a421ee24d25814a12e30b6972af9205(
    *,
    args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9544891090de6cbb7ca4fdd01d92448fdfc3c5efc0f3980d28ff825c1725bef(
    *,
    ecs_order_compute_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_compute_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_login_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_login_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_manager_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    os_tag: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    additional_volumes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AdditionalVolumesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    application: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ApplicationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ehpc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ha_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    input_file_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_compute_ess: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_install_script: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.PostInstallScriptProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remote_vis_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_mountpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    without_elastic_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
