'''
## Aliyun ROS EHPC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_ehpc as EHPC
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


class Cluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::EHPC::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterProps",
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
        jsii.create(Cluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEcsInfo")
    def attr_ecs_info(self) -> ros_cdk_core.IResolvable:
        '''Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.

        You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEcsInfo"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: Cluster name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SecurityGroupId: Security group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_order_compute_count": "ecsOrderComputeCount",
        "ecs_order_compute_instance_type": "ecsOrderComputeInstanceType",
        "ecs_order_login_count": "ecsOrderLoginCount",
        "ecs_order_login_instance_type": "ecsOrderLoginInstanceType",
        "ecs_order_manager_instance_type": "ecsOrderManagerInstanceType",
        "ehpc_version": "ehpcVersion",
        "name": "name",
        "os_tag": "osTag",
        "volume_id": "volumeId",
        "volume_mountpoint": "volumeMountpoint",
        "v_switch_id": "vSwitchId",
        "account_type": "accountType",
        "application": "application",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "compute_spot_price_limit": "computeSpotPriceLimit",
        "compute_spot_strategy": "computeSpotStrategy",
        "deploy_mode": "deployMode",
        "description": "description",
        "ecs_charge_type": "ecsChargeType",
        "ecs_order_manager_count": "ecsOrderManagerCount",
        "ha_enable": "haEnable",
        "image_id": "imageId",
        "image_owner_alias": "imageOwnerAlias",
        "job_queue": "jobQueue",
        "key_pair_name": "keyPairName",
        "password": "password",
        "period": "period",
        "period_unit": "periodUnit",
        "post_install_script": "postInstallScript",
        "remote_directory": "remoteDirectory",
        "scc_cluster_id": "sccClusterId",
        "scheduler_type": "schedulerType",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "volume_protocol": "volumeProtocol",
        "volume_type": "volumeType",
        "zone_id": "zoneId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        ecs_order_compute_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ecs_order_compute_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ecs_order_login_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ecs_order_login_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ecs_order_manager_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ehpc_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        os_tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        volume_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        volume_mountpoint: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        application: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ApplicationProperty"]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        compute_spot_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecs_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ha_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        image_owner_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        job_queue: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        post_install_script: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCluster.PostInstallScriptProperty"]]]] = None,
        remote_directory: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scc_cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scheduler_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        volume_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        volume_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EHPC::Cluster``.

        :param ecs_order_compute_count: Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
        :param ecs_order_compute_instance_type: Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        :param ecs_order_login_count: Property ecsOrderLoginCount: Login node number can only be 1.
        :param ecs_order_login_instance_type: Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
        :param ecs_order_manager_instance_type: Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
        :param ehpc_version: Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.
        :param name: Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        :param os_tag: Property osTag: Operating system image tag. You can call ListImages API to query.
        :param volume_id: Property volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
        :param volume_mountpoint: Property volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
        :param v_switch_id: Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        :param account_type: Property accountType: Domain service account types, currently supports nis.
        :param application: Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        :param auto_renew: Property autoRenew: true: automatic renewals; false: no automatic renewals.
        :param auto_renew_period: Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        :param compute_spot_price_limit: Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        :param compute_spot_strategy: Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
        :param deploy_mode: Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node. Advanced: HA mode. Simple: (account + schedule) node + login node + compute node. Tiny: (account + scheduling + login) node + compute node. OneBox: (account + scheduling + login + compute) node + more compute nodes.
        :param description: Property description: Cluster description, 2 to 128 characters.
        :param ecs_charge_type: Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        :param ecs_order_manager_count: Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).
        :param ha_enable: Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
        :param image_id: Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        :param image_owner_alias: Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
        :param job_queue: Property jobQueue: Computing node added queue.
        :param key_pair_name: Property keyPairName: Key pair name.
        :param password: Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        :param period: Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        :param period_unit: Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        :param post_install_script: Property postInstallScript:.
        :param remote_directory: Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        :param scc_cluster_id: Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        :param scheduler_type: Property schedulerType: The scheduler type, currently support pbs.
        :param security_group_id: Property securityGroupId: Security group ID.
        :param security_group_name: Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        :param volume_protocol: Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
        :param volume_type: Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
        :param zone_id: Property zoneId: Available area ID.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ecs_order_compute_count": ecs_order_compute_count,
            "ecs_order_compute_instance_type": ecs_order_compute_instance_type,
            "ecs_order_login_count": ecs_order_login_count,
            "ecs_order_login_instance_type": ecs_order_login_instance_type,
            "ecs_order_manager_instance_type": ecs_order_manager_instance_type,
            "ehpc_version": ehpc_version,
            "name": name,
            "os_tag": os_tag,
            "volume_id": volume_id,
            "volume_mountpoint": volume_mountpoint,
            "v_switch_id": v_switch_id,
        }
        if account_type is not None:
            self._values["account_type"] = account_type
        if application is not None:
            self._values["application"] = application
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
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
        if ha_enable is not None:
            self._values["ha_enable"] = ha_enable
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_owner_alias is not None:
            self._values["image_owner_alias"] = image_owner_alias
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
        if scc_cluster_id is not None:
            self._values["scc_cluster_id"] = scc_cluster_id
        if scheduler_type is not None:
            self._values["scheduler_type"] = scheduler_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if volume_protocol is not None:
            self._values["volume_protocol"] = volume_protocol
        if volume_type is not None:
            self._values["volume_type"] = volume_type
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.'''
        result = self._values.get("ecs_order_compute_count")
        assert result is not None, "Required property 'ecs_order_compute_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.'''
        result = self._values.get("ecs_order_compute_instance_type")
        assert result is not None, "Required property 'ecs_order_compute_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property ecsOrderLoginCount: Login node number can only be 1.'''
        result = self._values.get("ecs_order_login_count")
        assert result is not None, "Required property 'ecs_order_login_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ecsOrderLoginInstanceType: Log cluster node instance specifications.'''
        result = self._values.get("ecs_order_login_instance_type")
        assert result is not None, "Required property 'ecs_order_login_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ecsOrderManagerInstanceType: Cluster control node instance specifications.'''
        result = self._values.get("ecs_order_manager_instance_type")
        assert result is not None, "Required property 'ecs_order_manager_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ehpc_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.'''
        result = self._values.get("ehpc_version")
        assert result is not None, "Required property 'ehpc_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: Cluster name.

        2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def os_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property osTag: Operating system image tag.

        You can call ListImages API to query.
        '''
        result = self._values.get("os_tag")
        assert result is not None, "Required property 'os_tag' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def volume_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property volumeId: Ali cloud NAS instance Id.

        Currently it does not support automatic creation Ali cloud NAS instance.
        '''
        result = self._values.get("volume_id")
        assert result is not None, "Required property 'volume_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def volume_mountpoint(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property volumeMountpoint: NAS vpc mount point.

        Currently it does not support automatic creation Ali cloud NAS mount point.
        '''
        result = self._values.get("volume_mountpoint")
        assert result is not None, "Required property 'volume_mountpoint' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: VPC in switch ID.

        Products currently only supports VPC network.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accountType: Domain service account types, currently supports nis.'''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def application(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ApplicationProperty"]]]]:
        '''Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.'''
        result = self._values.get("application")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ApplicationProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: true: automatic renewals;

        false: no automatic renewals.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.'''
        result = self._values.get("compute_spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.'''
        result = self._values.get("compute_spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.

        Advanced: HA mode.
        Simple: (account + schedule) node + login node + compute node.
        Tiny: (account + scheduling + login) node + compute node.
        OneBox: (account + scheduling + login + compute) node + more compute nodes.
        '''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Cluster description, 2 to 128 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.'''
        result = self._values.get("ecs_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).'''
        result = self._values.get("ecs_order_manager_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.'''
        result = self._values.get("ha_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;

        if self, others, or marketplace, ImageId is mandatory.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property imageOwnerAlias: Mirror type: system, self, others or marketplace.'''
        result = self._values.get("image_owner_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property jobQueue: Computing node added queue.'''
        result = self._values.get("job_queue")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keyPairName: Key pair name.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property password: Root password of jump server (login node).

        8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The purchase of long resources, units: week / month / year.

        When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodUnit: The purchase of long-resources unit.

        Alternatively value Week / Month / year.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.PostInstallScriptProperty"]]]]:
        '''Property postInstallScript:.'''
        result = self._values.get("post_install_script")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.PostInstallScriptProperty"]]]], result)

    @builtins.property
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property remoteDirectory: Mount shared storage remote directory.

        The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        result = self._values.get("remote_directory")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.'''
        result = self._values.get("scc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property schedulerType: The scheduler type, currently support pbs.'''
        result = self._values.get("scheduler_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: Security group ID.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.

        Format Requirements Reference ECS security group name.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property volumeProtocol: Shared storage network protocols, currently only supports nfs.'''
        result = self._values.get("volume_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.'''
        result = self._values.get("volume_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: Available area ID.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::EHPC::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EHPC::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosCluster, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster Id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEcsInfo")
    def attr_ecs_info(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
        You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEcsInfo"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: Cluster name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SecurityGroupId: Security group ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsOrderComputeCount")
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "ecsOrderComputeCount"))

    @ecs_order_compute_count.setter
    def ecs_order_compute_count(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ecsOrderComputeCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsOrderComputeInstanceType")
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ecsOrderComputeInstanceType"))

    @ecs_order_compute_instance_type.setter
    def ecs_order_compute_instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ecsOrderComputeInstanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsOrderLoginCount")
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderLoginCount: Login node number can only be 1.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "ecsOrderLoginCount"))

    @ecs_order_login_count.setter
    def ecs_order_login_count(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ecsOrderLoginCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsOrderLoginInstanceType")
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderLoginInstanceType: Log cluster node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ecsOrderLoginInstanceType"))

    @ecs_order_login_instance_type.setter
    def ecs_order_login_instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ecsOrderLoginInstanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsOrderManagerInstanceType")
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderManagerInstanceType: Cluster control node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ecsOrderManagerInstanceType"))

    @ecs_order_manager_instance_type.setter
    def ecs_order_manager_instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ecsOrderManagerInstanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ehpcVersion")
    def ehpc_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ehpcVersion"))

    @ehpc_version.setter
    def ehpc_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ehpcVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="osTag")
    def os_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: osTag: Operating system image tag. You can call ListImages API to query.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "osTag"))

    @os_tag.setter
    def os_tag(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "osTag", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="volumeId")
    def volume_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "volumeId"))

    @volume_id.setter
    def volume_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "volumeId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="volumeMountpoint")
    def volume_mountpoint(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "volumeMountpoint"))

    @volume_mountpoint.setter
    def volume_mountpoint(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "volumeMountpoint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accountType: Domain service account types, currently supports nis.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accountType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="application")
    def application(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ApplicationProperty"]]]]:
        '''
        :Property: application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ApplicationProperty"]]]], jsii.get(self, "application"))

    @application.setter
    def application(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ApplicationProperty"]]]],
    ) -> None:
        jsii.set(self, "application", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: true: automatic renewals; false: no automatic renewals.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="computeSpotPriceLimit")
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "computeSpotPriceLimit"))

    @compute_spot_price_limit.setter
    def compute_spot_price_limit(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "computeSpotPriceLimit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="computeSpotStrategy")
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "computeSpotStrategy"))

    @compute_spot_strategy.setter
    def compute_spot_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "computeSpotStrategy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deployMode")
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deployMode: Deployment mode:
        Standard: account node + scheduling node + login node + computing node.
        Advanced: HA mode.
        Simple: (account + schedule) node + login node + compute node.
        Tiny: (account + scheduling + login) node + compute node.
        OneBox: (account + scheduling + login + compute) node + more compute nodes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "deployMode"))

    @deploy_mode.setter
    def deploy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deployMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Cluster description, 2 to 128 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsChargeType")
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ecsChargeType"))

    @ecs_charge_type.setter
    def ecs_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ecsChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsOrderManagerCount")
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: ecsOrderManagerCount: Control node number can be 1, 2, 4(HA)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ecsOrderManagerCount"))

    @ecs_order_manager_count.setter
    def ecs_order_manager_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ecsOrderManagerCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="haEnable")
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "haEnable"))

    @ha_enable.setter
    def ha_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "haEnable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "imageId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="imageOwnerAlias")
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: imageOwnerAlias: Mirror type: system, self, others or marketplace
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "imageOwnerAlias"))

    @image_owner_alias.setter
    def image_owner_alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "imageOwnerAlias", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="jobQueue")
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: jobQueue: Computing node added queue
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "jobQueue"))

    @job_queue.setter
    def job_queue(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "jobQueue", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPairName: Key pair name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keyPairName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodUnit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="postInstallScript")
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.PostInstallScriptProperty"]]]]:
        '''
        :Property: postInstallScript:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.PostInstallScriptProperty"]]]], jsii.get(self, "postInstallScript"))

    @post_install_script.setter
    def post_install_script(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.PostInstallScriptProperty"]]]],
    ) -> None:
        jsii.set(self, "postInstallScript", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="remoteDirectory")
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "remoteDirectory"))

    @remote_directory.setter
    def remote_directory(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "remoteDirectory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sccClusterId")
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sccClusterId"))

    @scc_cluster_id.setter
    def scc_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sccClusterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="schedulerType")
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: schedulerType: The scheduler type, currently support pbs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "schedulerType"))

    @scheduler_type.setter
    def scheduler_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "schedulerType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupName")
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupName"))

    @security_group_name.setter
    def security_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="volumeProtocol")
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: volumeProtocol: Shared storage network protocols, currently only supports nfs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "volumeProtocol"))

    @volume_protocol.setter
    def volume_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "volumeProtocol", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="volumeType")
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: volumeType: Network shared storage types, currently supports only Ali cloud NAS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "volumeType"))

    @volume_type.setter
    def volume_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "volumeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: Available area ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty",
        jsii_struct_bases=[],
        name_mapping={"tag": "tag"},
    )
    class ApplicationProperty:
        def __init__(
            self,
            *,
            tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param tag: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "tag": tag,
            }

        @builtins.property
        def tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
            '''
            result = self._values.get("tag")
            assert result is not None, "Required property 'tag' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            args: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param args: 
            :param url: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if args is not None:
                self._values["args"] = args
            if url is not None:
                self._values["url"] = url

        @builtins.property
        def args(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
            '''
            result = self._values.get("args")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
            '''
            result = self._values.get("url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        "ehpc_version": "ehpcVersion",
        "name": "name",
        "os_tag": "osTag",
        "volume_id": "volumeId",
        "volume_mountpoint": "volumeMountpoint",
        "v_switch_id": "vSwitchId",
        "account_type": "accountType",
        "application": "application",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "compute_spot_price_limit": "computeSpotPriceLimit",
        "compute_spot_strategy": "computeSpotStrategy",
        "deploy_mode": "deployMode",
        "description": "description",
        "ecs_charge_type": "ecsChargeType",
        "ecs_order_manager_count": "ecsOrderManagerCount",
        "ha_enable": "haEnable",
        "image_id": "imageId",
        "image_owner_alias": "imageOwnerAlias",
        "job_queue": "jobQueue",
        "key_pair_name": "keyPairName",
        "password": "password",
        "period": "period",
        "period_unit": "periodUnit",
        "post_install_script": "postInstallScript",
        "remote_directory": "remoteDirectory",
        "scc_cluster_id": "sccClusterId",
        "scheduler_type": "schedulerType",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "volume_protocol": "volumeProtocol",
        "volume_type": "volumeType",
        "zone_id": "zoneId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        ecs_order_compute_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ecs_order_compute_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ecs_order_login_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ecs_order_login_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ecs_order_manager_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ehpc_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        os_tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        volume_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        volume_mountpoint: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        application: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosCluster.ApplicationProperty]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        compute_spot_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecs_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ha_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        image_owner_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        job_queue: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        post_install_script: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosCluster.PostInstallScriptProperty]]]] = None,
        remote_directory: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scc_cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scheduler_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        volume_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        volume_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EHPC::Cluster``.

        :param ecs_order_compute_count: 
        :param ecs_order_compute_instance_type: 
        :param ecs_order_login_count: 
        :param ecs_order_login_instance_type: 
        :param ecs_order_manager_instance_type: 
        :param ehpc_version: 
        :param name: 
        :param os_tag: 
        :param volume_id: 
        :param volume_mountpoint: 
        :param v_switch_id: 
        :param account_type: 
        :param application: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param compute_spot_price_limit: 
        :param compute_spot_strategy: 
        :param deploy_mode: 
        :param description: 
        :param ecs_charge_type: 
        :param ecs_order_manager_count: 
        :param ha_enable: 
        :param image_id: 
        :param image_owner_alias: 
        :param job_queue: 
        :param key_pair_name: 
        :param password: 
        :param period: 
        :param period_unit: 
        :param post_install_script: 
        :param remote_directory: 
        :param scc_cluster_id: 
        :param scheduler_type: 
        :param security_group_id: 
        :param security_group_name: 
        :param volume_protocol: 
        :param volume_type: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ecs_order_compute_count": ecs_order_compute_count,
            "ecs_order_compute_instance_type": ecs_order_compute_instance_type,
            "ecs_order_login_count": ecs_order_login_count,
            "ecs_order_login_instance_type": ecs_order_login_instance_type,
            "ecs_order_manager_instance_type": ecs_order_manager_instance_type,
            "ehpc_version": ehpc_version,
            "name": name,
            "os_tag": os_tag,
            "volume_id": volume_id,
            "volume_mountpoint": volume_mountpoint,
            "v_switch_id": v_switch_id,
        }
        if account_type is not None:
            self._values["account_type"] = account_type
        if application is not None:
            self._values["application"] = application
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
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
        if ha_enable is not None:
            self._values["ha_enable"] = ha_enable
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_owner_alias is not None:
            self._values["image_owner_alias"] = image_owner_alias
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
        if scc_cluster_id is not None:
            self._values["scc_cluster_id"] = scc_cluster_id
        if scheduler_type is not None:
            self._values["scheduler_type"] = scheduler_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if volume_protocol is not None:
            self._values["volume_protocol"] = volume_protocol
        if volume_type is not None:
            self._values["volume_type"] = volume_type
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
        '''
        result = self._values.get("ecs_order_compute_count")
        assert result is not None, "Required property 'ecs_order_compute_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        '''
        result = self._values.get("ecs_order_compute_instance_type")
        assert result is not None, "Required property 'ecs_order_compute_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderLoginCount: Login node number can only be 1.
        '''
        result = self._values.get("ecs_order_login_count")
        assert result is not None, "Required property 'ecs_order_login_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderLoginInstanceType: Log cluster node instance specifications.
        '''
        result = self._values.get("ecs_order_login_instance_type")
        assert result is not None, "Required property 'ecs_order_login_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ecsOrderManagerInstanceType: Cluster control node instance specifications.
        '''
        result = self._values.get("ecs_order_manager_instance_type")
        assert result is not None, "Required property 'ecs_order_manager_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ehpc_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
        '''
        result = self._values.get("ehpc_version")
        assert result is not None, "Required property 'ehpc_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def os_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: osTag: Operating system image tag. You can call ListImages API to query.
        '''
        result = self._values.get("os_tag")
        assert result is not None, "Required property 'os_tag' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def volume_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
        '''
        result = self._values.get("volume_id")
        assert result is not None, "Required property 'volume_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def volume_mountpoint(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
        '''
        result = self._values.get("volume_mountpoint")
        assert result is not None, "Required property 'volume_mountpoint' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accountType: Domain service account types, currently supports nis.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def application(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.ApplicationProperty]]]]:
        '''
        :Property: application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        '''
        result = self._values.get("application")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.ApplicationProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: true: automatic renewals; false: no automatic renewals.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        '''
        result = self._values.get("compute_spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
        '''
        result = self._values.get("compute_spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deployMode: Deployment mode:
        Standard: account node + scheduling node + login node + computing node.
        Advanced: HA mode.
        Simple: (account + schedule) node + login node + compute node.
        Tiny: (account + scheduling + login) node + compute node.
        OneBox: (account + scheduling + login + compute) node + more compute nodes.
        '''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Cluster description, 2 to 128 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        '''
        result = self._values.get("ecs_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: ecsOrderManagerCount: Control node number can be 1, 2, 4(HA)
        '''
        result = self._values.get("ecs_order_manager_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
        '''
        result = self._values.get("ha_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: imageOwnerAlias: Mirror type: system, self, others or marketplace
        '''
        result = self._values.get("image_owner_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: jobQueue: Computing node added queue
        '''
        result = self._values.get("job_queue")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPairName: Key pair name.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.PostInstallScriptProperty]]]]:
        '''
        :Property: postInstallScript:
        '''
        result = self._values.get("post_install_script")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.PostInstallScriptProperty]]]], result)

    @builtins.property
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        result = self._values.get("remote_directory")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        '''
        result = self._values.get("scc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: schedulerType: The scheduler type, currently support pbs.
        '''
        result = self._values.get("scheduler_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: volumeProtocol: Shared storage network protocols, currently only supports nfs.
        '''
        result = self._values.get("volume_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: volumeType: Network shared storage types, currently supports only Ali cloud NAS.
        '''
        result = self._values.get("volume_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: Available area ID.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "RosCluster",
    "RosClusterProps",
]

publication.publish()
