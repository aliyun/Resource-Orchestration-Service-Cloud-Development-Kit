'''
## Aliyun ROS EMR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EMR from '@alicloud/ros-cdk-emr';
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
    jsii_type="@alicloud/ros-cdk-emr.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::EMR::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::Cluster``.

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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostGroups")
    def attr_host_groups(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostGroups: The host group list of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostGroups"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterNodeInnerIps")
    def attr_master_node_inner_ips(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterNodeInnerIps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterNodePubIps")
    def attr_master_node_pub_ips(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterNodePubIps: The public ip list of the cluster master nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterNodePubIps"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "cluster_type": "clusterType",
        "emr_ver": "emrVer",
        "host_group": "hostGroup",
        "name": "name",
        "net_type": "netType",
        "use_local_meta_db": "useLocalMetaDb",
        "zone_id": "zoneId",
        "authorize_content": "authorizeContent",
        "auto_renew": "autoRenew",
        "bootstrap_action": "bootstrapAction",
        "click_house_conf": "clickHouseConf",
        "config": "config",
        "configurations": "configurations",
        "deposit_type": "depositType",
        "eas_enable": "easEnable",
        "high_availability_enable": "highAvailabilityEnable",
        "init_custom_hive_meta_db": "initCustomHiveMetaDb",
        "instance_generation": "instanceGeneration",
        "io_optimized": "ioOptimized",
        "is_open_public_ip": "isOpenPublicIp",
        "key_pair_name": "keyPairName",
        "log_path": "logPath",
        "machine_type": "machineType",
        "master_pwd": "masterPwd",
        "meta_store_conf": "metaStoreConf",
        "meta_store_type": "metaStoreType",
        "option_soft_ware_list": "optionSoftWareList",
        "period": "period",
        "related_cluster_id": "relatedClusterId",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "ssh_enable": "sshEnable",
        "use_custom_hive_meta_db": "useCustomHiveMetaDb",
        "user_defined_emr_ecs_role": "userDefinedEmrEcsRole",
        "user_info": "userInfo",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "white_list_type": "whiteListType",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        emr_ver: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_group: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        net_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        use_local_meta_db: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        authorize_content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bootstrap_action: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]] = None,
        click_house_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]] = None,
        configurations: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deposit_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eas_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        high_availability_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_generation: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_open_public_ip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        machine_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_pwd: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        meta_store_conf: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        meta_store_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        option_soft_ware_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        related_cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssh_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        white_list_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::Cluster``.

        :param charge_type: Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid: subscription.
        :param cluster_type: Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        :param emr_ver: Property emrVer: The version of EMR.
        :param host_group: Property hostGroup:.
        :param name: Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        :param net_type: Property netType: The type of the network.
        :param use_local_meta_db: Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        :param zone_id: Property zoneId: The zone ID.
        :param authorize_content: Property authorizeContent: Not required.
        :param auto_renew: Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
        :param bootstrap_action: Property bootstrapAction:.
        :param click_house_conf: Property clickHouseConf: undefined.
        :param config: Property config:.
        :param configurations: Property configurations: Not required.
        :param deposit_type: Property depositType: The hosting type.
        :param eas_enable: Property easEnable: Indicates whether the cluster is a high-security cluster.
        :param high_availability_enable: Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates that two master nodes are required.
        :param init_custom_hive_meta_db: Property initCustomHiveMetaDb: A reserved parameter. Not required.
        :param instance_generation: Property instanceGeneration: The generation of the ECS instances.
        :param io_optimized: Property ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        :param is_open_public_ip: Property isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that a bandwidth of 8 MB is set by default.
        :param key_pair_name: Property keyPairName: The name of the key pair.
        :param log_path: Property logPath: The log path in OSS.
        :param machine_type: Property machineType: The type of the machine.
        :param master_pwd: Property masterPwd: The SSH password for the master node. The password must meet the following requirements. Length constraints: Minimum length of 8 characters. Maximum length of 30 characters. It must contain three types of characters (uppercase letters, lowercase letters, numbers, and special symbols).
        :param meta_store_conf: Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        :param meta_store_type: Property metaStoreType: Meta store type. Allow types: local: Local cluster unified: Unified meta data user_rds: User's RDS
        :param option_soft_ware_list: Property optionSoftWareList: The list of optional services.
        :param period: Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        :param related_cluster_id: Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        :param security_group_id: Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and use it. Note: If you use an existing security group, the default security group policy is applied to this security group: Only port 22 is open at the inbound and all ports are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        :param security_group_name: Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified, this name is used to create a new security group. After the cluster is created, you can view the ID of the security group on the Cluster Management page. The default security group policy is applied to this security group: Only port 22 is open at the inbound and all ports are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        :param ssh_enable: Property sshEnable: Indicates whether SSH is enabled.
        :param use_custom_hive_meta_db: Property useCustomHiveMetaDb: A reserved parameter. Not required.
        :param user_defined_emr_ecs_role: Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        :param user_info: Property userInfo:.
        :param vpc_id: Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
        :param v_switch_id: Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        :param white_list_type: Property whiteListType: Not required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "charge_type": charge_type,
            "cluster_type": cluster_type,
            "emr_ver": emr_ver,
            "host_group": host_group,
            "name": name,
            "net_type": net_type,
            "use_local_meta_db": use_local_meta_db,
            "zone_id": zone_id,
        }
        if authorize_content is not None:
            self._values["authorize_content"] = authorize_content
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if bootstrap_action is not None:
            self._values["bootstrap_action"] = bootstrap_action
        if click_house_conf is not None:
            self._values["click_house_conf"] = click_house_conf
        if config is not None:
            self._values["config"] = config
        if configurations is not None:
            self._values["configurations"] = configurations
        if deposit_type is not None:
            self._values["deposit_type"] = deposit_type
        if eas_enable is not None:
            self._values["eas_enable"] = eas_enable
        if high_availability_enable is not None:
            self._values["high_availability_enable"] = high_availability_enable
        if init_custom_hive_meta_db is not None:
            self._values["init_custom_hive_meta_db"] = init_custom_hive_meta_db
        if instance_generation is not None:
            self._values["instance_generation"] = instance_generation
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if is_open_public_ip is not None:
            self._values["is_open_public_ip"] = is_open_public_ip
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if log_path is not None:
            self._values["log_path"] = log_path
        if machine_type is not None:
            self._values["machine_type"] = machine_type
        if master_pwd is not None:
            self._values["master_pwd"] = master_pwd
        if meta_store_conf is not None:
            self._values["meta_store_conf"] = meta_store_conf
        if meta_store_type is not None:
            self._values["meta_store_type"] = meta_store_type
        if option_soft_ware_list is not None:
            self._values["option_soft_ware_list"] = option_soft_ware_list
        if period is not None:
            self._values["period"] = period
        if related_cluster_id is not None:
            self._values["related_cluster_id"] = related_cluster_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if ssh_enable is not None:
            self._values["ssh_enable"] = ssh_enable
        if use_custom_hive_meta_db is not None:
            self._values["use_custom_hive_meta_db"] = use_custom_hive_meta_db
        if user_defined_emr_ecs_role is not None:
            self._values["user_defined_emr_ecs_role"] = user_defined_emr_ecs_role
        if user_info is not None:
            self._values["user_info"] = user_info
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if white_list_type is not None:
            self._values["white_list_type"] = white_list_type

    @builtins.property
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property chargeType: The billing method.

        Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterType: The type of the cluster.

        Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def emr_ver(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property emrVer: The version of EMR.'''
        result = self._values.get("emr_ver")
        assert result is not None, "Required property 'emr_ver' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]]:
        '''Property hostGroup:.'''
        result = self._values.get("host_group")
        assert result is not None, "Required property 'host_group' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the cluster.

        The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property netType: The type of the network.'''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.'''
        result = self._values.get("use_local_meta_db")
        assert result is not None, "Required property 'use_local_meta_db' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: The zone ID.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property authorizeContent: Not required.'''
        result = self._values.get("authorize_content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Indicates whether the subscription cluster is auto-renewed.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]]:
        '''Property bootstrapAction:.'''
        result = self._values.get("bootstrap_action")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]], result)

    @builtins.property
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property clickHouseConf: undefined.'''
        result = self._values.get("click_house_conf")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]]:
        '''Property config:.'''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]], result)

    @builtins.property
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property configurations: Not required.'''
        result = self._values.get("configurations")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property depositType: The hosting type.'''
        result = self._values.get("deposit_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property easEnable: Indicates whether the cluster is a high-security cluster.'''
        result = self._values.get("eas_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.

        A value of true indicates
        that two master nodes are required.
        '''
        result = self._values.get("high_availability_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property initCustomHiveMetaDb: A reserved parameter.

        Not required.
        '''
        result = self._values.get("init_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceGeneration: The generation of the ECS instances.'''
        result = self._values.get("instance_generation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property ioOptimized: Indicates wether I/O optimization is enabled.

        Default value: true.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isOpenPublicIp: Indicates whether a public IP address is assigned.

        A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        result = self._values.get("is_open_public_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keyPairName: The name of the key pair.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logPath: The log path in OSS.'''
        result = self._values.get("log_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property machineType: The type of the machine.'''
        result = self._values.get("machine_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterPwd: The SSH password for the master node.

        The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        result = self._values.get("master_pwd")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property metaStoreConf: Meta store conf of specific meta store type.

        If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        result = self._values.get("meta_store_conf")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property metaStoreType: Meta store type.

        Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        result = self._values.get("meta_store_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property optionSoftWareList: The list of optional services.'''
        result = self._values.get("option_soft_ware_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The length of the subscription.

        Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).'''
        result = self._values.get("related_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: The ID of the security group.

        You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupName: The name of the security group to create.

        If the ID of the security group is not specified,
        this name is used to create a new security group. After the cluster is created, you
        can view the ID of the security group on the Cluster Management page. The default
        security group policy is applied to this security group: Only port 22 is open at the
        inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        or SecurityGroupName.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property sshEnable: Indicates whether SSH is enabled.'''
        result = self._values.get("ssh_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def use_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property useCustomHiveMetaDb: A reserved parameter.

        Not required.
        '''
        result = self._values.get("use_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.'''
        result = self._values.get("user_defined_emr_ecs_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]]:
        '''Property userInfo:.'''
        result = self._values.get("user_info")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The ID of the VPC.

        A value is required when NetType=vpc.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The ID of the Vswitch.

        A value is required when NetType=vpc.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property whiteListType: Not required.'''
        result = self._values.get("white_list_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterServiceConfigs(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.ClusterServiceConfigs",
):
    '''A ROS resource type:  ``ALIYUN::EMR::ClusterServiceConfigs``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterServiceConfigsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::ClusterServiceConfigs``.

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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.ClusterServiceConfigsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "service_configs": "serviceConfigs"},
)
class ClusterServiceConfigsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_configs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::ClusterServiceConfigs``.

        :param cluster_id: Property clusterId: The ID of the cluster.
        :param service_configs: Property serviceConfigs: Server configs.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "service_configs": service_configs,
        }

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: The ID of the cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_configs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]]:
        '''Property serviceConfigs: Server configs.'''
        result = self._values.get("service_configs")
        assert result is not None, "Required property 'service_configs' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterServiceConfigsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::EMR::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::Cluster``.

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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostGroups")
    def attr_host_groups(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostGroups: The host group list of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostGroups"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterNodeInnerIps")
    def attr_master_node_inner_ips(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterNodeInnerIps: The inner ip list of the cluster master nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterNodeInnerIps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterNodePubIps")
    def attr_master_node_pub_ips(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterNodePubIps: The public ip list of the cluster master nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterNodePubIps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="emrVer")
    def emr_ver(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: emrVer: The version of EMR.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "emrVer"))

    @emr_ver.setter
    def emr_ver(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "emrVer", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="hostGroup")
    def host_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]]:
        '''
        :Property: hostGroup:
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]], jsii.get(self, "hostGroup"))

    @host_group.setter
    def host_group(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]],
    ) -> None:
        jsii.set(self, "hostGroup", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="netType")
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: netType: The type of the network.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "netType"))

    @net_type.setter
    def net_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "netType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="useLocalMetaDb")
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        '''
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], jsii.get(self, "useLocalMetaDb"))

    @use_local_meta_db.setter
    def use_local_meta_db(
        self,
        value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "useLocalMetaDb", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The zone ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="authorizeContent")
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authorizeContent: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "authorizeContent"))

    @authorize_content.setter
    def authorize_content(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "authorizeContent", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether the subscription cluster is auto-renewed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bootstrapAction")
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]]:
        '''
        :Property: bootstrapAction:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]], jsii.get(self, "bootstrapAction"))

    @bootstrap_action.setter
    def bootstrap_action(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]],
    ) -> None:
        jsii.set(self, "bootstrapAction", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clickHouseConf")
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: clickHouseConf: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "clickHouseConf"))

    @click_house_conf.setter
    def click_house_conf(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "clickHouseConf", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]]:
        '''
        :Property: config:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]],
    ) -> None:
        jsii.set(self, "config", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="configurations")
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: configurations: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "configurations"))

    @configurations.setter
    def configurations(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "configurations", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="depositType")
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: depositType: The hosting type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "depositType"))

    @deposit_type.setter
    def deposit_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "depositType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="easEnable")
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: easEnable: Indicates whether the cluster is a high-security cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "easEnable"))

    @eas_enable.setter
    def eas_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "easEnable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="highAvailabilityEnable")
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        that two master nodes are required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "highAvailabilityEnable"))

    @high_availability_enable.setter
    def high_availability_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "highAvailabilityEnable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="initCustomHiveMetaDb")
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: initCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "initCustomHiveMetaDb"))

    @init_custom_hive_meta_db.setter
    def init_custom_hive_meta_db(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "initCustomHiveMetaDb", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceGeneration")
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceGeneration: The generation of the ECS instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceGeneration"))

    @instance_generation.setter
    def instance_generation(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceGeneration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ioOptimized")
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "ioOptimized"))

    @io_optimized.setter
    def io_optimized(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ioOptimized", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isOpenPublicIp")
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isOpenPublicIp"))

    @is_open_public_ip.setter
    def is_open_public_ip(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isOpenPublicIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPairName: The name of the key pair.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keyPairName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logPath")
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logPath: The log path in OSS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logPath"))

    @log_path.setter
    def log_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logPath", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="machineType")
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: machineType: The type of the machine.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "machineType"))

    @machine_type.setter
    def machine_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "machineType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterPwd")
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterPwd: The SSH password for the master node. The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterPwd"))

    @master_pwd.setter
    def master_pwd(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterPwd", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="metaStoreConf")
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "metaStoreConf"))

    @meta_store_conf.setter
    def meta_store_conf(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "metaStoreConf", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="metaStoreType")
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        metaStoreType: Meta store type. Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "metaStoreType"))

    @meta_store_type.setter
    def meta_store_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "metaStoreType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="optionSoftWareList")
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: optionSoftWareList: The list of optional services.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "optionSoftWareList"))

    @option_soft_ware_list.setter
    def option_soft_ware_list(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "optionSoftWareList", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="relatedClusterId")
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "relatedClusterId"))

    @related_cluster_id.setter
    def related_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "relatedClusterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
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
        :Property:

        securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
        this name is used to create a new security group. After the cluster is created, you
        can view the ID of the security group on the Cluster Management page. The default
        security group policy is applied to this security group: Only port 22 is open at the
        inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        or SecurityGroupName.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupName"))

    @security_group_name.setter
    def security_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sshEnable")
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: sshEnable: Indicates whether SSH is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "sshEnable"))

    @ssh_enable.setter
    def ssh_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sshEnable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="useCustomHiveMetaDb")
    def use_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: useCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "useCustomHiveMetaDb"))

    @use_custom_hive_meta_db.setter
    def use_custom_hive_meta_db(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "useCustomHiveMetaDb", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userDefinedEmrEcsRole")
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userDefinedEmrEcsRole"))

    @user_defined_emr_ecs_role.setter
    def user_defined_emr_ecs_role(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "userDefinedEmrEcsRole", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userInfo")
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]]:
        '''
        :Property: userInfo:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]], jsii.get(self, "userInfo"))

    @user_info.setter
    def user_info(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]],
    ) -> None:
        jsii.set(self, "userInfo", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="whiteListType")
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: whiteListType: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "whiteListType"))

    @white_list_type.setter
    def white_list_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "whiteListType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty",
        jsii_struct_bases=[],
        name_mapping={"arg": "arg", "name": "name", "path": "path"},
    )
    class BootstrapActionProperty:
        def __init__(
            self,
            *,
            arg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param arg: 
            :param name: 
            :param path: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if arg is not None:
                self._values["arg"] = arg
            if name is not None:
                self._values["name"] = name
            if path is not None:
                self._values["path"] = path

        @builtins.property
        def arg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: arg: The argument that you pass into the bootstrap action.
            '''
            result = self._values.get("arg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: The name of the bootstrap action.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: path: The path where the bootstrap action script is stored.
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BootstrapActionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.ConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "config_key": "configKey",
            "config_value": "configValue",
            "encrypt": "encrypt",
            "file_name": "fileName",
            "replace": "replace",
            "service_name": "serviceName",
        },
    )
    class ConfigProperty:
        def __init__(
            self,
            *,
            config_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            encrypt: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            file_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            replace: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param config_key: 
            :param config_value: 
            :param encrypt: 
            :param file_name: 
            :param replace: 
            :param service_name: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if config_key is not None:
                self._values["config_key"] = config_key
            if config_value is not None:
                self._values["config_value"] = config_value
            if encrypt is not None:
                self._values["encrypt"] = encrypt
            if file_name is not None:
                self._values["file_name"] = file_name
            if replace is not None:
                self._values["replace"] = replace
            if service_name is not None:
                self._values["service_name"] = service_name

        @builtins.property
        def config_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configKey: The key of the custom configuration item.
            '''
            result = self._values.get("config_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configValue: The value of the custom configuration item.
            '''
            result = self._values.get("config_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def encrypt(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: encrypt: A reserved parameter.
            '''
            result = self._values.get("encrypt")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def file_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: fileName: The name of the file that contains the configuration item.
            '''
            result = self._values.get("file_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def replace(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: replace: A reserved parameter.
            '''
            result = self._values.get("replace")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            serviceName: The name (capitalized) of the service that is configured by using the custom configuration
            item.
            '''
            result = self._values.get("service_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty",
        jsii_struct_bases=[],
        name_mapping={
            "charge_type": "chargeType",
            "disk_capacity": "diskCapacity",
            "disk_count": "diskCount",
            "disk_type": "diskType",
            "host_group_type": "hostGroupType",
            "instance_type": "instanceType",
            "node_count": "nodeCount",
            "sys_disk_capacity": "sysDiskCapacity",
            "sys_disk_type": "sysDiskType",
            "auto_renew": "autoRenew",
            "cluster_id": "clusterId",
            "comment": "comment",
            "create_type": "createType",
            "gpu_driver": "gpuDriver",
            "host_group_id": "hostGroupId",
            "host_group_name": "hostGroupName",
            "host_key_pair_name": "hostKeyPairName",
            "host_password": "hostPassword",
            "period": "period",
            "v_switch_id": "vSwitchId",
        },
    )
    class HostGroupProperty:
        def __init__(
            self,
            *,
            charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            disk_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            disk_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            host_group_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            node_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            sys_disk_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            sys_disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            create_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            gpu_driver: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param charge_type: 
            :param disk_capacity: 
            :param disk_count: 
            :param disk_type: 
            :param host_group_type: 
            :param instance_type: 
            :param node_count: 
            :param sys_disk_capacity: 
            :param sys_disk_type: 
            :param auto_renew: 
            :param cluster_id: 
            :param comment: 
            :param create_type: 
            :param gpu_driver: 
            :param host_group_id: 
            :param host_group_name: 
            :param host_key_pair_name: 
            :param host_password: 
            :param period: 
            :param v_switch_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "charge_type": charge_type,
                "disk_capacity": disk_capacity,
                "disk_count": disk_count,
                "disk_type": disk_type,
                "host_group_type": host_group_type,
                "instance_type": instance_type,
                "node_count": node_count,
                "sys_disk_capacity": sys_disk_capacity,
                "sys_disk_type": sys_disk_type,
            }
            if auto_renew is not None:
                self._values["auto_renew"] = auto_renew
            if cluster_id is not None:
                self._values["cluster_id"] = cluster_id
            if comment is not None:
                self._values["comment"] = comment
            if create_type is not None:
                self._values["create_type"] = create_type
            if gpu_driver is not None:
                self._values["gpu_driver"] = gpu_driver
            if host_group_id is not None:
                self._values["host_group_id"] = host_group_id
            if host_group_name is not None:
                self._values["host_group_name"] = host_group_name
            if host_key_pair_name is not None:
                self._values["host_key_pair_name"] = host_key_pair_name
            if host_password is not None:
                self._values["host_password"] = host_password
            if period is not None:
                self._values["period"] = period
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id

        @builtins.property
        def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: chargeType: The billing method for the instance group.
            '''
            result = self._values.get("charge_type")
            assert result is not None, "Required property 'charge_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_capacity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: diskCapacity: The data disk capacity of the instance group.
            '''
            result = self._values.get("disk_capacity")
            assert result is not None, "Required property 'disk_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: diskCount: The data disk number of the instance group.
            '''
            result = self._values.get("disk_count")
            assert result is not None, "Required property 'disk_count' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: diskType: The data disk type of the instance group. Valid values: CLOUD, CLOUD_EFFICIENCY, CLOUD_SSD, CLOUD_ESSD etc.
            '''
            result = self._values.get("disk_type")
            assert result is not None, "Required property 'disk_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def host_group_type(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            hostGroupType: The type of the instance group. Valid values: MASTER, CORE, and TASK. Currently, you
            can only create a maximum of one master instance group and core instance group.
            '''
            result = self._values.get("host_group_type")
            assert result is not None, "Required property 'host_group_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: instanceType: The instance type of the instance group.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def node_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: nodeCount: The number of nodes in the node group.
            '''
            result = self._values.get("node_count")
            assert result is not None, "Required property 'node_count' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def sys_disk_capacity(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: sysDiskCapacity: The system disk capacity of the instance group.
            '''
            result = self._values.get("sys_disk_capacity")
            assert result is not None, "Required property 'sys_disk_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def sys_disk_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: sysDiskType: The system disk type of the instance group.
            '''
            result = self._values.get("sys_disk_type")
            assert result is not None, "Required property 'sys_disk_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def auto_renew(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: autoRenew: Indicates whether the instance group is auto-renewed.
            '''
            result = self._values.get("auto_renew")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cluster_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: clusterId: A reserved parameter. Not required.
            '''
            result = self._values.get("cluster_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: comment: A reserved parameter. Not required.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def create_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: createType: A reserved parameter. Not required.
            '''
            result = self._values.get("create_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def gpu_driver(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: gpuDriver: The GPU driver.
            '''
            result = self._values.get("gpu_driver")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostGroupId: A reserved parameter.
            '''
            result = self._values.get("host_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostGroupName: The name of the instance group.
            '''
            result = self._values.get("host_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_key_pair_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostKeyPairName: The key pair name of the host group. Currently, only gateways are supported.
            '''
            result = self._values.get("host_key_pair_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostPassword: The password of the host. Currently, only gateways are supported.
            '''
            result = self._values.get("host_password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
            9, 12, 24, and 36. A value is required when HostGroup.n.ChargeType=PrePaid.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HostGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "password": "password",
            "user_id": "userId",
            "user_name": "userName",
        },
    )
    class UserInfoProperty:
        def __init__(
            self,
            *,
            password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            user_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param password: 
            :param user_id: 
            :param user_name: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if password is not None:
                self._values["password"] = password
            if user_id is not None:
                self._values["user_id"] = user_id
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: password: The password of the cluster.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def user_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: userId: The ID of the Alibaba Cloud account for Knox.
            '''
            result = self._values.get("user_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: userName: The username for Knox.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UserInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "cluster_type": "clusterType",
        "emr_ver": "emrVer",
        "host_group": "hostGroup",
        "name": "name",
        "net_type": "netType",
        "use_local_meta_db": "useLocalMetaDb",
        "zone_id": "zoneId",
        "authorize_content": "authorizeContent",
        "auto_renew": "autoRenew",
        "bootstrap_action": "bootstrapAction",
        "click_house_conf": "clickHouseConf",
        "config": "config",
        "configurations": "configurations",
        "deposit_type": "depositType",
        "eas_enable": "easEnable",
        "high_availability_enable": "highAvailabilityEnable",
        "init_custom_hive_meta_db": "initCustomHiveMetaDb",
        "instance_generation": "instanceGeneration",
        "io_optimized": "ioOptimized",
        "is_open_public_ip": "isOpenPublicIp",
        "key_pair_name": "keyPairName",
        "log_path": "logPath",
        "machine_type": "machineType",
        "master_pwd": "masterPwd",
        "meta_store_conf": "metaStoreConf",
        "meta_store_type": "metaStoreType",
        "option_soft_ware_list": "optionSoftWareList",
        "period": "period",
        "related_cluster_id": "relatedClusterId",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "ssh_enable": "sshEnable",
        "use_custom_hive_meta_db": "useCustomHiveMetaDb",
        "user_defined_emr_ecs_role": "userDefinedEmrEcsRole",
        "user_info": "userInfo",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "white_list_type": "whiteListType",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        emr_ver: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_group: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosCluster.HostGroupProperty]]],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        net_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        use_local_meta_db: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        authorize_content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bootstrap_action: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosCluster.BootstrapActionProperty]]]] = None,
        click_house_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosCluster.ConfigProperty]]]] = None,
        configurations: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deposit_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eas_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        high_availability_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_generation: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_open_public_ip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        machine_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_pwd: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        meta_store_conf: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        meta_store_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        option_soft_ware_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        related_cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssh_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosCluster.UserInfoProperty]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        white_list_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::Cluster``.

        :param charge_type: 
        :param cluster_type: 
        :param emr_ver: 
        :param host_group: 
        :param name: 
        :param net_type: 
        :param use_local_meta_db: 
        :param zone_id: 
        :param authorize_content: 
        :param auto_renew: 
        :param bootstrap_action: 
        :param click_house_conf: 
        :param config: 
        :param configurations: 
        :param deposit_type: 
        :param eas_enable: 
        :param high_availability_enable: 
        :param init_custom_hive_meta_db: 
        :param instance_generation: 
        :param io_optimized: 
        :param is_open_public_ip: 
        :param key_pair_name: 
        :param log_path: 
        :param machine_type: 
        :param master_pwd: 
        :param meta_store_conf: 
        :param meta_store_type: 
        :param option_soft_ware_list: 
        :param period: 
        :param related_cluster_id: 
        :param security_group_id: 
        :param security_group_name: 
        :param ssh_enable: 
        :param use_custom_hive_meta_db: 
        :param user_defined_emr_ecs_role: 
        :param user_info: 
        :param vpc_id: 
        :param v_switch_id: 
        :param white_list_type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "charge_type": charge_type,
            "cluster_type": cluster_type,
            "emr_ver": emr_ver,
            "host_group": host_group,
            "name": name,
            "net_type": net_type,
            "use_local_meta_db": use_local_meta_db,
            "zone_id": zone_id,
        }
        if authorize_content is not None:
            self._values["authorize_content"] = authorize_content
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if bootstrap_action is not None:
            self._values["bootstrap_action"] = bootstrap_action
        if click_house_conf is not None:
            self._values["click_house_conf"] = click_house_conf
        if config is not None:
            self._values["config"] = config
        if configurations is not None:
            self._values["configurations"] = configurations
        if deposit_type is not None:
            self._values["deposit_type"] = deposit_type
        if eas_enable is not None:
            self._values["eas_enable"] = eas_enable
        if high_availability_enable is not None:
            self._values["high_availability_enable"] = high_availability_enable
        if init_custom_hive_meta_db is not None:
            self._values["init_custom_hive_meta_db"] = init_custom_hive_meta_db
        if instance_generation is not None:
            self._values["instance_generation"] = instance_generation
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if is_open_public_ip is not None:
            self._values["is_open_public_ip"] = is_open_public_ip
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if log_path is not None:
            self._values["log_path"] = log_path
        if machine_type is not None:
            self._values["machine_type"] = machine_type
        if master_pwd is not None:
            self._values["master_pwd"] = master_pwd
        if meta_store_conf is not None:
            self._values["meta_store_conf"] = meta_store_conf
        if meta_store_type is not None:
            self._values["meta_store_type"] = meta_store_type
        if option_soft_ware_list is not None:
            self._values["option_soft_ware_list"] = option_soft_ware_list
        if period is not None:
            self._values["period"] = period
        if related_cluster_id is not None:
            self._values["related_cluster_id"] = related_cluster_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if ssh_enable is not None:
            self._values["ssh_enable"] = ssh_enable
        if use_custom_hive_meta_db is not None:
            self._values["use_custom_hive_meta_db"] = use_custom_hive_meta_db
        if user_defined_emr_ecs_role is not None:
            self._values["user_defined_emr_ecs_role"] = user_defined_emr_ecs_role
        if user_info is not None:
            self._values["user_info"] = user_info
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if white_list_type is not None:
            self._values["white_list_type"] = white_list_type

    @builtins.property
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def emr_ver(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: emrVer: The version of EMR.
        '''
        result = self._values.get("emr_ver")
        assert result is not None, "Required property 'emr_ver' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.HostGroupProperty]]]:
        '''
        :Property: hostGroup:
        '''
        result = self._values.get("host_group")
        assert result is not None, "Required property 'host_group' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.HostGroupProperty]]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: netType: The type of the network.
        '''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        '''
        result = self._values.get("use_local_meta_db")
        assert result is not None, "Required property 'use_local_meta_db' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The zone ID.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authorizeContent: Not required.
        '''
        result = self._values.get("authorize_content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether the subscription cluster is auto-renewed.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.BootstrapActionProperty]]]]:
        '''
        :Property: bootstrapAction:
        '''
        result = self._values.get("bootstrap_action")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.BootstrapActionProperty]]]], result)

    @builtins.property
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: clickHouseConf: undefined
        '''
        result = self._values.get("click_house_conf")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.ConfigProperty]]]]:
        '''
        :Property: config:
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.ConfigProperty]]]], result)

    @builtins.property
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: configurations: Not required.
        '''
        result = self._values.get("configurations")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: depositType: The hosting type.
        '''
        result = self._values.get("deposit_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: easEnable: Indicates whether the cluster is a high-security cluster.
        '''
        result = self._values.get("eas_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        that two master nodes are required.
        '''
        result = self._values.get("high_availability_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: initCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        result = self._values.get("init_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceGeneration: The generation of the ECS instances.
        '''
        result = self._values.get("instance_generation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        result = self._values.get("is_open_public_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPairName: The name of the key pair.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logPath: The log path in OSS.
        '''
        result = self._values.get("log_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: machineType: The type of the machine.
        '''
        result = self._values.get("machine_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterPwd: The SSH password for the master node. The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        result = self._values.get("master_pwd")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        result = self._values.get("meta_store_conf")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        metaStoreType: Meta store type. Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        result = self._values.get("meta_store_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: optionSoftWareList: The list of optional services.
        '''
        result = self._values.get("option_soft_ware_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        '''
        result = self._values.get("related_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
        this name is used to create a new security group. After the cluster is created, you
        can view the ID of the security group on the Cluster Management page. The default
        security group policy is applied to this security group: Only port 22 is open at the
        inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        or SecurityGroupName.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: sshEnable: Indicates whether SSH is enabled.
        '''
        result = self._values.get("ssh_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def use_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: useCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        result = self._values.get("use_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        '''
        result = self._values.get("user_defined_emr_ecs_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.UserInfoProperty]]]]:
        '''
        :Property: userInfo:
        '''
        result = self._values.get("user_info")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.UserInfoProperty]]]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: whiteListType: Not required.
        '''
        result = self._values.get("white_list_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterServiceConfigs(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosClusterServiceConfigs",
):
    '''A ROS template type:  ``ALIYUN::EMR::ClusterServiceConfigs``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterServiceConfigsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::ClusterServiceConfigs``.

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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceConfigs")
    def service_configs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]]:
        '''
        :Property: serviceConfigs: Server configs
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]], jsii.get(self, "serviceConfigs"))

    @service_configs.setter
    def service_configs(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]],
    ) -> None:
        jsii.set(self, "serviceConfigs", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "config_params": "configParams",
            "service_name": "serviceName",
            "comment": "comment",
            "config_type": "configType",
            "custom_config_params": "customConfigParams",
            "gateway_cluster_id_list": "gatewayClusterIdList",
            "group_id": "groupId",
            "host_instance_id": "hostInstanceId",
            "refresh_host_config": "refreshHostConfig",
        },
    )
    class ServiceConfigsProperty:
        def __init__(
            self,
            *,
            config_params: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            custom_config_params: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            gateway_cluster_id_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            refresh_host_config: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param config_params: 
            :param service_name: 
            :param comment: 
            :param config_type: 
            :param custom_config_params: 
            :param gateway_cluster_id_list: 
            :param group_id: 
            :param host_instance_id: 
            :param refresh_host_config: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "config_params": config_params,
                "service_name": service_name,
            }
            if comment is not None:
                self._values["comment"] = comment
            if config_type is not None:
                self._values["config_type"] = config_type
            if custom_config_params is not None:
                self._values["custom_config_params"] = custom_config_params
            if gateway_cluster_id_list is not None:
                self._values["gateway_cluster_id_list"] = gateway_cluster_id_list
            if group_id is not None:
                self._values["group_id"] = group_id
            if host_instance_id is not None:
                self._values["host_instance_id"] = host_instance_id
            if refresh_host_config is not None:
                self._values["refresh_host_config"] = refresh_host_config

        @builtins.property
        def config_params(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: configParams: The specific change of the configuration. It is a JSON string.
            '''
            result = self._values.get("config_params")
            assert result is not None, "Required property 'config_params' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serviceName: The name of the service.
            '''
            result = self._values.get("service_name")
            assert result is not None, "Required property 'service_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: comment: The comment for the configuration change.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configType: The type of the configuration parameters.
            '''
            result = self._values.get("config_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def custom_config_params(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: customConfigParams: The modification of custom configuration parameters.
            '''
            result = self._values.get("custom_config_params")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def gateway_cluster_id_list(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: gatewayClusterIdList:
            '''
            result = self._values.get("gateway_cluster_id_list")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: groupId: The ID of the host group.
            '''
            result = self._values.get("group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostInstanceId: The instance ID of the host. This is typically the ID of an ECS instance.
            '''
            result = self._values.get("host_instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def refresh_host_config(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: refreshHostConfig: Specifies whether to configure the job immediately after the modification.
            '''
            result = self._values.get("refresh_host_config")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServiceConfigsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.RosClusterServiceConfigsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "service_configs": "serviceConfigs"},
)
class RosClusterServiceConfigsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_configs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::ClusterServiceConfigs``.

        :param cluster_id: 
        :param service_configs: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "service_configs": service_configs,
        }

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_configs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]]:
        '''
        :Property: serviceConfigs: Server configs
        '''
        result = self._values.get("service_configs")
        assert result is not None, "Required property 'service_configs' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterServiceConfigsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "ClusterServiceConfigs",
    "ClusterServiceConfigsProps",
    "RosCluster",
    "RosClusterProps",
    "RosClusterServiceConfigs",
    "RosClusterServiceConfigsProps",
]

publication.publish()
