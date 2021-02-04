"""
## Aliyun ROS SLS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_sls as SLS
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


class Alert(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Alert",
):
    """A ROS resource type:  ``ALIYUN::SLS::Alert``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AlertProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Alert``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Alert, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: Alert name.
        """
        return jsii.get(self, "attrName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.AlertProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class AlertProps:
    def __init__(
        self,
        *,
        detail: typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable],
        project: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Alert``.

        :param detail: 
        :param project: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable]:
        """
        :Property: detail:
        """
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return result

    @builtins.property
    def project(self) -> builtins.str:
        """
        :Property:

        project: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ApplyConfigToMachineGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.ApplyConfigToMachineGroup",
):
    """A ROS resource type:  ``ALIYUN::SLS::ApplyConfigToMachineGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["ApplyConfigToMachineGroupProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ApplyConfigToMachineGroup, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ApplyConfigToMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_name": "configName",
        "group_name": "groupName",
        "project_name": "projectName",
    },
)
class ApplyConfigToMachineGroupProps:
    def __init__(
        self,
        *,
        config_name: typing.Optional[builtins.str] = None,
        group_name: typing.Optional[builtins.str] = None,
        project_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        :param config_name: 
        :param group_name: 
        :param project_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if config_name is not None:
            self._values["config_name"] = config_name
        if group_name is not None:
            self._values["group_name"] = group_name
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def config_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: configName: Apply config to the config name
        """
        result = self._values.get("config_name")
        return result

    @builtins.property
    def group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupName: Apply config to the group name
        """
        result = self._values.get("group_name")
        return result

    @builtins.property
    def project_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: projectName: Apply config to the project name.
        """
        result = self._values.get("project_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplyConfigToMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Index(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Index",
):
    """A ROS resource type:  ``ALIYUN::SLS::Index``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "IndexProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Index``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Index, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.IndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "full_text_index": "fullTextIndex",
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "key_indices": "keyIndices",
        "log_reduce": "logReduce",
    },
)
class IndexProps:
    def __init__(
        self,
        *,
        full_text_index: typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"],
        logstore_name: builtins.str,
        project_name: builtins.str,
        key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]] = None,
        log_reduce: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Index``.

        :param full_text_index: 
        :param logstore_name: 
        :param project_name: 
        :param key_indices: 
        :param log_reduce: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "full_text_index": full_text_index,
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if key_indices is not None:
            self._values["key_indices"] = key_indices
        if log_reduce is not None:
            self._values["log_reduce"] = log_reduce

    @builtins.property
    def full_text_index(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"]:
        """
        :Property:

        fullTextIndex: Full-text indexing configuration.
        Full-text indexing and key indexing must have at least one enabled.
        """
        result = self._values.get("full_text_index")
        assert result is not None, "Required property 'full_text_index' is missing"
        return result

    @builtins.property
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

    @builtins.property
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]]:
        """
        :Property:

        keyIndices: Key index configurations.
        Full-text indexing and key indexing must have at least one enabled.
        """
        result = self._values.get("key_indices")
        return result

    @builtins.property
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: logReduce: Whether to enable log reduce. Default to false.
        """
        result = self._values.get("log_reduce")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Logstore(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Logstore",
):
    """A ROS resource type:  ``ALIYUN::SLS::Logstore``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "LogstoreProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Logstore``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Logstore, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(self) -> typing.Any:
        """
        :Attribute: LogstoreName: Logstore name.
        """
        return jsii.get(self, "attrLogstoreName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.LogstoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "append_meta": "appendMeta",
        "auto_split": "autoSplit",
        "enable_tracking": "enableTracking",
        "max_split_shard": "maxSplitShard",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class LogstoreProps:
    def __init__(
        self,
        *,
        logstore_name: builtins.str,
        project_name: builtins.str,
        append_meta: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_split: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_tracking: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        max_split_shard: typing.Optional[jsii.Number] = None,
        preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        shard_count: typing.Optional[jsii.Number] = None,
        ttl: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Logstore``.

        :param logstore_name: 
        :param project_name: 
        :param append_meta: 
        :param auto_split: 
        :param enable_tracking: 
        :param max_split_shard: 
        :param preserve_storage: 
        :param shard_count: 
        :param ttl: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if append_meta is not None:
            self._values["append_meta"] = append_meta
        if auto_split is not None:
            self._values["auto_split"] = auto_split
        if enable_tracking is not None:
            self._values["enable_tracking"] = enable_tracking
        if max_split_shard is not None:
            self._values["max_split_shard"] = max_split_shard
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

    @builtins.property
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        Default to false.
        """
        result = self._values.get("append_meta")
        return result

    @builtins.property
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoSplit: Whether to automatically split the shard.
        Default to false.
        """
        result = self._values.get("auto_split")
        return result

    @builtins.property
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        Default to false.
        """
        result = self._values.get("enable_tracking")
        return result

    @builtins.property
    def max_split_shard(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        """
        result = self._values.get("max_split_shard")
        return result

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        """
        result = self._values.get("preserve_storage")
        return result

    @builtins.property
    def shard_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-100, default to 2.
        """
        result = self._values.get("shard_count")
        return result

    @builtins.property
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ttl: The lifecycle of log in the logstore in days.
        Allowed Values: 1-3600, default to 30.
        """
        result = self._values.get("ttl")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogstoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LogtailConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.LogtailConfig",
):
    """A ROS resource type:  ``ALIYUN::SLS::LogtailConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "LogtailConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SLS::LogtailConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(LogtailConfig, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppliedMachineGroups")
    def attr_applied_machine_groups(self) -> typing.Any:
        """
        :Attribute: AppliedMachineGroups: Applied machine groups.
        """
        return jsii.get(self, "attrAppliedMachineGroups")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> typing.Any:
        """
        :Attribute: Endpoint: Endpoint address.
        """
        return jsii.get(self, "attrEndpoint")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.LogtailConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "logtail_config_name": "logtailConfigName",
        "project_name": "projectName",
        "clone_from": "cloneFrom",
        "raw_config_data": "rawConfigData",
    },
)
class LogtailConfigProps:
    def __init__(
        self,
        *,
        logstore_name: builtins.str,
        logtail_config_name: builtins.str,
        project_name: builtins.str,
        clone_from: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]] = None,
        raw_config_data: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::LogtailConfig``.

        :param logstore_name: 
        :param logtail_config_name: 
        :param project_name: 
        :param clone_from: 
        :param raw_config_data: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "logtail_config_name": logtail_config_name,
            "project_name": project_name,
        }
        if clone_from is not None:
            self._values["clone_from"] = clone_from
        if raw_config_data is not None:
            self._values["raw_config_data"] = raw_config_data

    @builtins.property
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return result

    @builtins.property
    def logtail_config_name(self) -> builtins.str:
        """
        :Property:

        logtailConfigName: Logtail config name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("logtail_config_name")
        assert result is not None, "Required property 'logtail_config_name' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

    @builtins.property
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]]:
        """
        :Property:

        cloneFrom: Clone logtail config data from existing logtail config.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        """
        result = self._values.get("clone_from")
        return result

    @builtins.property
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        rawConfigData: The format is the same as the response of SLS API GetConfig.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        """
        result = self._values.get("raw_config_data")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogtailConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MachineGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.MachineGroup",
):
    """A ROS resource type:  ``ALIYUN::SLS::MachineGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["MachineGroupProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SLS::MachineGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(MachineGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> typing.Any:
        """
        :Attribute: GroupName: GroupName of SLS.
        """
        return jsii.get(self, "attrGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> typing.Any:
        """
        :Attribute: ProjectName: ProjectName of SLS.
        """
        return jsii.get(self, "attrProjectName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.MachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_attribute": "groupAttribute",
        "group_name": "groupName",
        "group_type": "groupType",
        "machine_identify_type": "machineIdentifyType",
        "machine_list": "machineList",
        "project_name": "projectName",
    },
)
class MachineGroupProps:
    def __init__(
        self,
        *,
        group_attribute: typing.Optional[builtins.str] = None,
        group_name: typing.Optional[builtins.str] = None,
        group_type: typing.Optional[builtins.str] = None,
        machine_identify_type: typing.Optional[builtins.str] = None,
        machine_list: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        project_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::MachineGroup``.

        :param group_attribute: 
        :param group_name: 
        :param group_type: 
        :param machine_identify_type: 
        :param machine_list: 
        :param project_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if group_attribute is not None:
            self._values["group_attribute"] = group_attribute
        if group_name is not None:
            self._values["group_name"] = group_name
        if group_type is not None:
            self._values["group_type"] = group_type
        if machine_identify_type is not None:
            self._values["machine_identify_type"] = machine_identify_type
        if machine_list is not None:
            self._values["machine_list"] = machine_list
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
        """
        result = self._values.get("group_attribute")
        return result

    @builtins.property
    def group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("group_name")
        return result

    @builtins.property
    def group_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupType: MachineGroup type, the value is empty or Armory
        """
        result = self._values.get("group_type")
        return result

    @builtins.property
    def machine_identify_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        """
        result = self._values.get("machine_identify_type")
        return result

    @builtins.property
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: machineList: The machine tag, the value is ip or userdefined-id.
        """
        result = self._values.get("machine_list")
        return result

    @builtins.property
    def project_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: projectName: MachineGroup created in project.
        """
        result = self._values.get("project_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Project(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Project",
):
    """A ROS resource type:  ``ALIYUN::SLS::Project``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProjectProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Project, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: Project name.
        """
        return jsii.get(self, "attrName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "description": "description"},
)
class ProjectProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Project``.

        :param name: 
        :param description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property:

        name: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Project description: <>'"\\ is not supported, up to 64 characters.
        """
        result = self._values.get("description")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlert(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosAlert",
):
    """A ROS template type:  ``ALIYUN::SLS::Alert``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAlertProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Alert``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAlert, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: Alert name.
        """
        return jsii.get(self, "attrName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable]:
        """
        :Property: detail:
        """
        return jsii.get(self, "detail")

    @detail.setter # type: ignore
    def detail(
        self,
        value: typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "detail", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="project")
    def project(self) -> builtins.str:
        """
        :Property:

        project: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "project")

    @project.setter # type: ignore
    def project(self, value: builtins.str) -> None:
        jsii.set(self, "project", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "condition": "condition",
            "dashboard": "dashboard",
            "query_list": "queryList",
            "throttling": "throttling",
            "notification_list": "notificationList",
            "notify_threshold": "notifyThreshold",
        },
    )
    class ConfigurationProperty:
        def __init__(
            self,
            *,
            condition: builtins.str,
            dashboard: builtins.str,
            query_list: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.QueryListProperty"]]],
            throttling: builtins.str,
            notification_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.NotificationListProperty"]]]] = None,
            notify_threshold: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param condition: 
            :param dashboard: 
            :param query_list: 
            :param throttling: 
            :param notification_list: 
            :param notify_threshold: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "condition": condition,
                "dashboard": dashboard,
                "query_list": query_list,
                "throttling": throttling,
            }
            if notification_list is not None:
                self._values["notification_list"] = notification_list
            if notify_threshold is not None:
                self._values["notify_threshold"] = notify_threshold

        @builtins.property
        def condition(self) -> builtins.str:
            """
            :Property:

            condition: he condition that is required to trigger an alert.
            Log Service triggers an alert if the trigger condition is met.
            For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
            """
            result = self._values.get("condition")
            assert result is not None, "Required property 'condition' is missing"
            return result

        @builtins.property
        def dashboard(self) -> builtins.str:
            """
            :Property: dashboard: Alarm associated dashboard.
            """
            result = self._values.get("dashboard")
            assert result is not None, "Required property 'dashboard' is missing"
            return result

        @builtins.property
        def query_list(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.QueryListProperty"]]]:
            """
            :Property: queryList:
            """
            result = self._values.get("query_list")
            assert result is not None, "Required property 'query_list' is missing"
            return result

        @builtins.property
        def throttling(self) -> builtins.str:
            """
            :Property: throttling: Notification interval, default is no interval.
            """
            result = self._values.get("throttling")
            assert result is not None, "Required property 'throttling' is missing"
            return result

        @builtins.property
        def notification_list(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.NotificationListProperty"]]]]:
            """
            :Property: notificationList:
            """
            result = self._values.get("notification_list")
            return result

        @builtins.property
        def notify_threshold(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            notifyThreshold: The notification threshold,
            which will not be notified until the number of triggers is reached.
            """
            result = self._values.get("notify_threshold")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.DetailProperty",
        jsii_struct_bases=[],
        name_mapping={
            "configuration": "configuration",
            "display_name": "displayName",
            "name": "name",
            "schedule": "schedule",
            "description": "description",
            "state": "state",
            "type": "type",
        },
    )
    class DetailProperty:
        def __init__(
            self,
            *,
            configuration: typing.Union[ros_cdk_core.IResolvable, "RosAlert.ConfigurationProperty"],
            display_name: builtins.str,
            name: builtins.str,
            schedule: typing.Union[ros_cdk_core.IResolvable, "RosAlert.ScheduleProperty"],
            description: typing.Optional[builtins.str] = None,
            state: typing.Optional[builtins.str] = None,
            type: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param configuration: 
            :param display_name: 
            :param name: 
            :param schedule: 
            :param description: 
            :param state: 
            :param type: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "configuration": configuration,
                "display_name": display_name,
                "name": name,
                "schedule": schedule,
            }
            if description is not None:
                self._values["description"] = description
            if state is not None:
                self._values["state"] = state
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def configuration(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosAlert.ConfigurationProperty"]:
            """
            :Property: configuration:
            """
            result = self._values.get("configuration")
            assert result is not None, "Required property 'configuration' is missing"
            return result

        @builtins.property
        def display_name(self) -> builtins.str:
            """
            :Property: displayName: Alert name display in console. The name length is 1-64 characters.
            """
            result = self._values.get("display_name")
            assert result is not None, "Required property 'display_name' is missing"
            return result

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: Alert name.
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def schedule(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosAlert.ScheduleProperty"]:
            """
            :Property:

            schedule: The interval at which Log Service evaluates the alert rule.
            Note During an alert rule evaluation, if a query returns more than 100 log entries,
            Log Service checks only the first 100 log entries.
            """
            result = self._values.get("schedule")
            assert result is not None, "Required property 'schedule' is missing"
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Description of the alert.
            """
            result = self._values.get("description")
            return result

        @builtins.property
        def state(self) -> typing.Optional[builtins.str]:
            """
            :Property: state:
            """
            result = self._values.get("state")
            return result

        @builtins.property
        def type(self) -> typing.Optional[builtins.str]:
            """
            :Property: type:
            """
            result = self._values.get("type")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DetailProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "type": "type",
            "content": "content",
            "email_list": "emailList",
            "mobile_list": "mobileList",
            "service_uri": "serviceUri",
        },
    )
    class NotificationListProperty:
        def __init__(
            self,
            *,
            type: builtins.str,
            content: typing.Optional[builtins.str] = None,
            email_list: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            mobile_list: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            service_uri: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param type: 
            :param content: 
            :param email_list: 
            :param mobile_list: 
            :param service_uri: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "type": type,
            }
            if content is not None:
                self._values["content"] = content
            if email_list is not None:
                self._values["email_list"] = email_list
            if mobile_list is not None:
                self._values["mobile_list"] = mobile_list
            if service_uri is not None:
                self._values["service_uri"] = service_uri

        @builtins.property
        def type(self) -> builtins.str:
            """
            :Property:

            type: This topic describes how to configure a notification method.
            Log Service can send alert notifications by using one or more methods.
            Available notification methods include emails, DingTalk chatbot webhooks,
            custom webhooks, and Alibaba Cloud Message Center.
            """
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return result

        @builtins.property
        def content(self) -> typing.Optional[builtins.str]:
            """
            :Property: content: The content of an alert notification
            """
            result = self._values.get("content")
            return result

        @builtins.property
        def email_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: emailList:
            """
            result = self._values.get("email_list")
            return result

        @builtins.property
        def mobile_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: mobileList:
            """
            result = self._values.get("mobile_list")
            return result

        @builtins.property
        def service_uri(self) -> typing.Optional[builtins.str]:
            """
            :Property: serviceUri: The webhook URL of the DingTalk chatbot.
            """
            result = self._values.get("service_uri")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NotificationListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.QueryListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "chart_title": "chartTitle",
            "end": "end",
            "log_store": "logStore",
            "query": "query",
            "start": "start",
            "time_span_type": "timeSpanType",
        },
    )
    class QueryListProperty:
        def __init__(
            self,
            *,
            chart_title: builtins.str,
            end: builtins.str,
            log_store: builtins.str,
            query: builtins.str,
            start: builtins.str,
            time_span_type: builtins.str,
        ) -> None:
            """
            :param chart_title: 
            :param end: 
            :param log_store: 
            :param query: 
            :param start: 
            :param time_span_type: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "chart_title": chart_title,
                "end": end,
                "log_store": log_store,
                "query": query,
                "start": start,
                "time_span_type": time_span_type,
            }

        @builtins.property
        def chart_title(self) -> builtins.str:
            """
            :Property: chartTitle:
            """
            result = self._values.get("chart_title")
            assert result is not None, "Required property 'chart_title' is missing"
            return result

        @builtins.property
        def end(self) -> builtins.str:
            """
            :Property: end:
            """
            result = self._values.get("end")
            assert result is not None, "Required property 'end' is missing"
            return result

        @builtins.property
        def log_store(self) -> builtins.str:
            """
            :Property: logStore:
            """
            result = self._values.get("log_store")
            assert result is not None, "Required property 'log_store' is missing"
            return result

        @builtins.property
        def query(self) -> builtins.str:
            """
            :Property: query:
            """
            result = self._values.get("query")
            assert result is not None, "Required property 'query' is missing"
            return result

        @builtins.property
        def start(self) -> builtins.str:
            """
            :Property: start:
            """
            result = self._values.get("start")
            assert result is not None, "Required property 'start' is missing"
            return result

        @builtins.property
        def time_span_type(self) -> builtins.str:
            """
            :Property: timeSpanType:
            """
            result = self._values.get("time_span_type")
            assert result is not None, "Required property 'time_span_type' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueryListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "type": "type",
            "cron_expression": "cronExpression",
            "day_of_week": "dayOfWeek",
            "delay": "delay",
            "hour": "hour",
            "interval": "interval",
            "run_immediately": "runImmediately",
        },
    )
    class ScheduleProperty:
        def __init__(
            self,
            *,
            type: builtins.str,
            cron_expression: typing.Optional[builtins.str] = None,
            day_of_week: typing.Optional[jsii.Number] = None,
            delay: typing.Optional[jsii.Number] = None,
            hour: typing.Optional[jsii.Number] = None,
            interval: typing.Optional[builtins.str] = None,
            run_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param type: 
            :param cron_expression: 
            :param day_of_week: 
            :param delay: 
            :param hour: 
            :param interval: 
            :param run_immediately: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "type": type,
            }
            if cron_expression is not None:
                self._values["cron_expression"] = cron_expression
            if day_of_week is not None:
                self._values["day_of_week"] = day_of_week
            if delay is not None:
                self._values["delay"] = delay
            if hour is not None:
                self._values["hour"] = hour
            if interval is not None:
                self._values["interval"] = interval
            if run_immediately is not None:
                self._values["run_immediately"] = run_immediately

        @builtins.property
        def type(self) -> builtins.str:
            """
            :Property: type:
            """
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return result

        @builtins.property
        def cron_expression(self) -> typing.Optional[builtins.str]:
            """
            :Property: cronExpression:
            """
            result = self._values.get("cron_expression")
            return result

        @builtins.property
        def day_of_week(self) -> typing.Optional[jsii.Number]:
            """
            :Property: dayOfWeek:
            """
            result = self._values.get("day_of_week")
            return result

        @builtins.property
        def delay(self) -> typing.Optional[jsii.Number]:
            """
            :Property: delay:
            """
            result = self._values.get("delay")
            return result

        @builtins.property
        def hour(self) -> typing.Optional[jsii.Number]:
            """
            :Property: hour:
            """
            result = self._values.get("hour")
            return result

        @builtins.property
        def interval(self) -> typing.Optional[builtins.str]:
            """
            :Property: interval: Execution interval
            """
            result = self._values.get("interval")
            return result

        @builtins.property
        def run_immediately(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: runImmediately:
            """
            result = self._values.get("run_immediately")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScheduleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosAlertProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class RosAlertProps:
    def __init__(
        self,
        *,
        detail: typing.Union[RosAlert.DetailProperty, ros_cdk_core.IResolvable],
        project: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Alert``.

        :param detail: 
        :param project: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(self) -> typing.Union[RosAlert.DetailProperty, ros_cdk_core.IResolvable]:
        """
        :Property: detail:
        """
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return result

    @builtins.property
    def project(self) -> builtins.str:
        """
        :Property:

        project: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplyConfigToMachineGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroup",
):
    """A ROS template type:  ``ALIYUN::SLS::ApplyConfigToMachineGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosApplyConfigToMachineGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosApplyConfigToMachineGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="configName")
    def config_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: configName: Apply config to the config name
        """
        return jsii.get(self, "configName")

    @config_name.setter # type: ignore
    def config_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "configName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupName: Apply config to the group name
        """
        return jsii.get(self, "groupName")

    @group_name.setter # type: ignore
    def group_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: projectName: Apply config to the project name.
        """
        return jsii.get(self, "projectName")

    @project_name.setter # type: ignore
    def project_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "projectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_name": "configName",
        "group_name": "groupName",
        "project_name": "projectName",
    },
)
class RosApplyConfigToMachineGroupProps:
    def __init__(
        self,
        *,
        config_name: typing.Optional[builtins.str] = None,
        group_name: typing.Optional[builtins.str] = None,
        project_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        :param config_name: 
        :param group_name: 
        :param project_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if config_name is not None:
            self._values["config_name"] = config_name
        if group_name is not None:
            self._values["group_name"] = group_name
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def config_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: configName: Apply config to the config name
        """
        result = self._values.get("config_name")
        return result

    @builtins.property
    def group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupName: Apply config to the group name
        """
        result = self._values.get("group_name")
        return result

    @builtins.property
    def project_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: projectName: Apply config to the project name.
        """
        result = self._values.get("project_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplyConfigToMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIndex(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosIndex",
):
    """A ROS template type:  ``ALIYUN::SLS::Index``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosIndexProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Index``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosIndex, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="fullTextIndex")
    def full_text_index(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"]:
        """
        :Property:

        fullTextIndex: Full-text indexing configuration.
        Full-text indexing and key indexing must have at least one enabled.
        """
        return jsii.get(self, "fullTextIndex")

    @full_text_index.setter # type: ignore
    def full_text_index(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"],
    ) -> None:
        jsii.set(self, "fullTextIndex", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "logstoreName")

    @logstore_name.setter # type: ignore
    def logstore_name(self, value: builtins.str) -> None:
        jsii.set(self, "logstoreName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "projectName")

    @project_name.setter # type: ignore
    def project_name(self, value: builtins.str) -> None:
        jsii.set(self, "projectName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="keyIndices")
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]]:
        """
        :Property:

        keyIndices: Key index configurations.
        Full-text indexing and key indexing must have at least one enabled.
        """
        return jsii.get(self, "keyIndices")

    @key_indices.setter # type: ignore
    def key_indices(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]],
    ) -> None:
        jsii.set(self, "keyIndices", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="logReduce")
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: logReduce: Whether to enable log reduce. Default to false.
        """
        return jsii.get(self, "logReduce")

    @log_reduce.setter # type: ignore
    def log_reduce(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logReduce", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "case_sensitive": "caseSensitive",
            "delimiter": "delimiter",
            "include_chinese": "includeChinese",
        },
    )
    class FullTextIndexProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            case_sensitive: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            delimiter: typing.Optional[builtins.str] = None,
            include_chinese: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param enable: 
            :param case_sensitive: 
            :param delimiter: 
            :param include_chinese: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "enable": enable,
            }
            if case_sensitive is not None:
                self._values["case_sensitive"] = case_sensitive
            if delimiter is not None:
                self._values["delimiter"] = delimiter
            if include_chinese is not None:
                self._values["include_chinese"] = include_chinese

        @builtins.property
        def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            """
            :Property: enable: Whether to enable full-text indexing. Default to true.
            """
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return result

        @builtins.property
        def case_sensitive(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: caseSensitive: Whether it is case sensitive. Default to false.
            """
            result = self._values.get("case_sensitive")
            return result

        @builtins.property
        def delimiter(self) -> typing.Optional[builtins.str]:
            """
            :: &<>/:\\n\\t\\r )).
            :Property: delimiter: Delimiter. Default to (( , '";=()[]{}?
            """
            result = self._values.get("delimiter")
            return result

        @builtins.property
        def include_chinese(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: includeChinese: Whether it contains Chinese. Default to false.
            """
            result = self._values.get("include_chinese")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FullTextIndexProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "type": "type",
            "alias": "alias",
            "enable_analytics": "enableAnalytics",
        },
    )
    class JsonKeyIndicesProperty:
        def __init__(
            self,
            *,
            name: builtins.str,
            type: builtins.str,
            alias: typing.Optional[builtins.str] = None,
            enable_analytics: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param name: 
            :param type: 
            :param alias: 
            :param enable_analytics: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if alias is not None:
                self._values["alias"] = alias
            if enable_analytics is not None:
                self._values["enable_analytics"] = enable_analytics

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def type(self) -> builtins.str:
            """
            :Property: type: Json key type. Allowed types: text, long, double. Default to text.
            """
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return result

        @builtins.property
        def alias(self) -> typing.Optional[builtins.str]:
            """
            :Property: alias: Json key alias.
            """
            result = self._values.get("alias")
            return result

        @builtins.property
        def enable_analytics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: enableAnalytics: Whether this json key is enabled for statistics. Default to true.
            """
            result = self._values.get("enable_analytics")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "JsonKeyIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "type": "type",
            "alias": "alias",
            "case_sensitive": "caseSensitive",
            "delimiter": "delimiter",
            "enable_analytics": "enableAnalytics",
            "include_chinese": "includeChinese",
            "json_key_indices": "jsonKeyIndices",
        },
    )
    class KeyIndicesProperty:
        def __init__(
            self,
            *,
            name: builtins.str,
            type: builtins.str,
            alias: typing.Optional[builtins.str] = None,
            case_sensitive: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            delimiter: typing.Optional[builtins.str] = None,
            enable_analytics: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            include_chinese: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            json_key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.JsonKeyIndicesProperty"]]]] = None,
        ) -> None:
            """
            :param name: 
            :param type: 
            :param alias: 
            :param case_sensitive: 
            :param delimiter: 
            :param enable_analytics: 
            :param include_chinese: 
            :param json_key_indices: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if alias is not None:
                self._values["alias"] = alias
            if case_sensitive is not None:
                self._values["case_sensitive"] = case_sensitive
            if delimiter is not None:
                self._values["delimiter"] = delimiter
            if enable_analytics is not None:
                self._values["enable_analytics"] = enable_analytics
            if include_chinese is not None:
                self._values["include_chinese"] = include_chinese
            if json_key_indices is not None:
                self._values["json_key_indices"] = json_key_indices

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: Key name.
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def type(self) -> builtins.str:
            """
            :Property: type: Key type. Allowed types: text, long, double, json. Default to text.
            """
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return result

        @builtins.property
        def alias(self) -> typing.Optional[builtins.str]:
            """
            :Property: alias: Key alias.
            """
            result = self._values.get("alias")
            return result

        @builtins.property
        def case_sensitive(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
            """
            result = self._values.get("case_sensitive")
            return result

        @builtins.property
        def delimiter(self) -> typing.Optional[builtins.str]:
            """
            :: &<>/:\\n\\t\\r )).
            :Property: delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?
            """
            result = self._values.get("delimiter")
            return result

        @builtins.property
        def enable_analytics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
            """
            result = self._values.get("enable_analytics")
            return result

        @builtins.property
        def include_chinese(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
            """
            result = self._values.get("include_chinese")
            return result

        @builtins.property
        def json_key_indices(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.JsonKeyIndicesProperty"]]]]:
            """
            :Property: jsonKeyIndices: Json key index configurations.
            """
            result = self._values.get("json_key_indices")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "KeyIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "full_text_index": "fullTextIndex",
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "key_indices": "keyIndices",
        "log_reduce": "logReduce",
    },
)
class RosIndexProps:
    def __init__(
        self,
        *,
        full_text_index: typing.Union[ros_cdk_core.IResolvable, RosIndex.FullTextIndexProperty],
        logstore_name: builtins.str,
        project_name: builtins.str,
        key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosIndex.KeyIndicesProperty]]]] = None,
        log_reduce: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Index``.

        :param full_text_index: 
        :param logstore_name: 
        :param project_name: 
        :param key_indices: 
        :param log_reduce: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "full_text_index": full_text_index,
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if key_indices is not None:
            self._values["key_indices"] = key_indices
        if log_reduce is not None:
            self._values["log_reduce"] = log_reduce

    @builtins.property
    def full_text_index(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosIndex.FullTextIndexProperty]:
        """
        :Property:

        fullTextIndex: Full-text indexing configuration.
        Full-text indexing and key indexing must have at least one enabled.
        """
        result = self._values.get("full_text_index")
        assert result is not None, "Required property 'full_text_index' is missing"
        return result

    @builtins.property
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

    @builtins.property
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosIndex.KeyIndicesProperty]]]]:
        """
        :Property:

        keyIndices: Key index configurations.
        Full-text indexing and key indexing must have at least one enabled.
        """
        result = self._values.get("key_indices")
        return result

    @builtins.property
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: logReduce: Whether to enable log reduce. Default to false.
        """
        result = self._values.get("log_reduce")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogstore(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosLogstore",
):
    """A ROS template type:  ``ALIYUN::SLS::Logstore``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLogstoreProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Logstore``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosLogstore, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(self) -> typing.Any:
        """
        :Attribute: LogstoreName: Logstore name.
        """
        return jsii.get(self, "attrLogstoreName")

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
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "logstoreName")

    @logstore_name.setter # type: ignore
    def logstore_name(self, value: builtins.str) -> None:
        jsii.set(self, "logstoreName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "projectName")

    @project_name.setter # type: ignore
    def project_name(self, value: builtins.str) -> None:
        jsii.set(self, "projectName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appendMeta")
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        Default to false.
        """
        return jsii.get(self, "appendMeta")

    @append_meta.setter # type: ignore
    def append_meta(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "appendMeta", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoSplit")
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoSplit: Whether to automatically split the shard.
        Default to false.
        """
        return jsii.get(self, "autoSplit")

    @auto_split.setter # type: ignore
    def auto_split(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoSplit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableTracking")
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        Default to false.
        """
        return jsii.get(self, "enableTracking")

    @enable_tracking.setter # type: ignore
    def enable_tracking(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableTracking", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maxSplitShard")
    def max_split_shard(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        """
        return jsii.get(self, "maxSplitShard")

    @max_split_shard.setter # type: ignore
    def max_split_shard(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "maxSplitShard", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preserveStorage")
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        """
        return jsii.get(self, "preserveStorage")

    @preserve_storage.setter # type: ignore
    def preserve_storage(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preserveStorage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="shardCount")
    def shard_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-100, default to 2.
        """
        return jsii.get(self, "shardCount")

    @shard_count.setter # type: ignore
    def shard_count(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "shardCount", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ttl")
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ttl: The lifecycle of log in the logstore in days.
        Allowed Values: 1-3600, default to 30.
        """
        return jsii.get(self, "ttl")

    @ttl.setter # type: ignore
    def ttl(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "ttl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosLogstoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "append_meta": "appendMeta",
        "auto_split": "autoSplit",
        "enable_tracking": "enableTracking",
        "max_split_shard": "maxSplitShard",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class RosLogstoreProps:
    def __init__(
        self,
        *,
        logstore_name: builtins.str,
        project_name: builtins.str,
        append_meta: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_split: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_tracking: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        max_split_shard: typing.Optional[jsii.Number] = None,
        preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        shard_count: typing.Optional[jsii.Number] = None,
        ttl: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Logstore``.

        :param logstore_name: 
        :param project_name: 
        :param append_meta: 
        :param auto_split: 
        :param enable_tracking: 
        :param max_split_shard: 
        :param preserve_storage: 
        :param shard_count: 
        :param ttl: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if append_meta is not None:
            self._values["append_meta"] = append_meta
        if auto_split is not None:
            self._values["auto_split"] = auto_split
        if enable_tracking is not None:
            self._values["enable_tracking"] = enable_tracking
        if max_split_shard is not None:
            self._values["max_split_shard"] = max_split_shard
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

    @builtins.property
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        Default to false.
        """
        result = self._values.get("append_meta")
        return result

    @builtins.property
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoSplit: Whether to automatically split the shard.
        Default to false.
        """
        result = self._values.get("auto_split")
        return result

    @builtins.property
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        Default to false.
        """
        result = self._values.get("enable_tracking")
        return result

    @builtins.property
    def max_split_shard(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        """
        result = self._values.get("max_split_shard")
        return result

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        """
        result = self._values.get("preserve_storage")
        return result

    @builtins.property
    def shard_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-100, default to 2.
        """
        result = self._values.get("shard_count")
        return result

    @builtins.property
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ttl: The lifecycle of log in the logstore in days.
        Allowed Values: 1-3600, default to 30.
        """
        result = self._values.get("ttl")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogstoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogtailConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfig",
):
    """A ROS template type:  ``ALIYUN::SLS::LogtailConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLogtailConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SLS::LogtailConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosLogtailConfig, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAppliedMachineGroups")
    def attr_applied_machine_groups(self) -> typing.Any:
        """
        :Attribute: AppliedMachineGroups: Applied machine groups.
        """
        return jsii.get(self, "attrAppliedMachineGroups")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> typing.Any:
        """
        :Attribute: Endpoint: Endpoint address.
        """
        return jsii.get(self, "attrEndpoint")

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
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "logstoreName")

    @logstore_name.setter # type: ignore
    def logstore_name(self, value: builtins.str) -> None:
        jsii.set(self, "logstoreName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="logtailConfigName")
    def logtail_config_name(self) -> builtins.str:
        """
        :Property:

        logtailConfigName: Logtail config name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "logtailConfigName")

    @logtail_config_name.setter # type: ignore
    def logtail_config_name(self, value: builtins.str) -> None:
        jsii.set(self, "logtailConfigName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "projectName")

    @project_name.setter # type: ignore
    def project_name(self, value: builtins.str) -> None:
        jsii.set(self, "projectName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cloneFrom")
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]]:
        """
        :Property:

        cloneFrom: Clone logtail config data from existing logtail config.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        """
        return jsii.get(self, "cloneFrom")

    @clone_from.setter # type: ignore
    def clone_from(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]],
    ) -> None:
        jsii.set(self, "cloneFrom", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rawConfigData")
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        rawConfigData: The format is the same as the response of SLS API GetConfig.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        """
        return jsii.get(self, "rawConfigData")

    @raw_config_data.setter # type: ignore
    def raw_config_data(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "rawConfigData", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logtail_config_name": "logtailConfigName",
            "project_name": "projectName",
        },
    )
    class CloneFromProperty:
        def __init__(
            self,
            *,
            logtail_config_name: builtins.str,
            project_name: builtins.str,
        ) -> None:
            """
            :param logtail_config_name: 
            :param project_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "logtail_config_name": logtail_config_name,
                "project_name": project_name,
            }

        @builtins.property
        def logtail_config_name(self) -> builtins.str:
            """
            :Property:

            logtailConfigName: Logtail config name:

            1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            2. Must start and end with lowercase letters and numbers.
            3. The name length is 3-63 characters.
            """
            result = self._values.get("logtail_config_name")
            assert result is not None, "Required property 'logtail_config_name' is missing"
            return result

        @builtins.property
        def project_name(self) -> builtins.str:
            """
            :Property:

            projectName: Project name:

            1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            2. Must start and end with lowercase letters and numbers.
            3. The name length is 3-63 characters.
            """
            result = self._values.get("project_name")
            assert result is not None, "Required property 'project_name' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CloneFromProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "logtail_config_name": "logtailConfigName",
        "project_name": "projectName",
        "clone_from": "cloneFrom",
        "raw_config_data": "rawConfigData",
    },
)
class RosLogtailConfigProps:
    def __init__(
        self,
        *,
        logstore_name: builtins.str,
        logtail_config_name: builtins.str,
        project_name: builtins.str,
        clone_from: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLogtailConfig.CloneFromProperty]] = None,
        raw_config_data: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::LogtailConfig``.

        :param logstore_name: 
        :param logtail_config_name: 
        :param project_name: 
        :param clone_from: 
        :param raw_config_data: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "logtail_config_name": logtail_config_name,
            "project_name": project_name,
        }
        if clone_from is not None:
            self._values["clone_from"] = clone_from
        if raw_config_data is not None:
            self._values["raw_config_data"] = raw_config_data

    @builtins.property
    def logstore_name(self) -> builtins.str:
        """
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return result

    @builtins.property
    def logtail_config_name(self) -> builtins.str:
        """
        :Property:

        logtailConfigName: Logtail config name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("logtail_config_name")
        assert result is not None, "Required property 'logtail_config_name' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

    @builtins.property
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLogtailConfig.CloneFromProperty]]:
        """
        :Property:

        cloneFrom: Clone logtail config data from existing logtail config.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        """
        result = self._values.get("clone_from")
        return result

    @builtins.property
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        rawConfigData: The format is the same as the response of SLS API GetConfig.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        """
        result = self._values.get("raw_config_data")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogtailConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMachineGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosMachineGroup",
):
    """A ROS template type:  ``ALIYUN::SLS::MachineGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMachineGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SLS::MachineGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosMachineGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> typing.Any:
        """
        :Attribute: GroupName: GroupName of SLS.
        """
        return jsii.get(self, "attrGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> typing.Any:
        """
        :Attribute: ProjectName: ProjectName of SLS.
        """
        return jsii.get(self, "attrProjectName")

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
    @jsii.member(jsii_name="groupAttribute")
    def group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
        """
        return jsii.get(self, "groupAttribute")

    @group_attribute.setter # type: ignore
    def group_attribute(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "groupAttribute", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        return jsii.get(self, "groupName")

    @group_name.setter # type: ignore
    def group_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupType")
    def group_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupType: MachineGroup type, the value is empty or Armory
        """
        return jsii.get(self, "groupType")

    @group_type.setter # type: ignore
    def group_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "groupType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="machineIdentifyType")
    def machine_identify_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        """
        return jsii.get(self, "machineIdentifyType")

    @machine_identify_type.setter # type: ignore
    def machine_identify_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "machineIdentifyType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="machineList")
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: machineList: The machine tag, the value is ip or userdefined-id.
        """
        return jsii.get(self, "machineList")

    @machine_list.setter # type: ignore
    def machine_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "machineList", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: projectName: MachineGroup created in project.
        """
        return jsii.get(self, "projectName")

    @project_name.setter # type: ignore
    def project_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "projectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_attribute": "groupAttribute",
        "group_name": "groupName",
        "group_type": "groupType",
        "machine_identify_type": "machineIdentifyType",
        "machine_list": "machineList",
        "project_name": "projectName",
    },
)
class RosMachineGroupProps:
    def __init__(
        self,
        *,
        group_attribute: typing.Optional[builtins.str] = None,
        group_name: typing.Optional[builtins.str] = None,
        group_type: typing.Optional[builtins.str] = None,
        machine_identify_type: typing.Optional[builtins.str] = None,
        machine_list: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        project_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::MachineGroup``.

        :param group_attribute: 
        :param group_name: 
        :param group_type: 
        :param machine_identify_type: 
        :param machine_list: 
        :param project_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if group_attribute is not None:
            self._values["group_attribute"] = group_attribute
        if group_name is not None:
            self._values["group_name"] = group_name
        if group_type is not None:
            self._values["group_type"] = group_type
        if machine_identify_type is not None:
            self._values["machine_identify_type"] = machine_identify_type
        if machine_list is not None:
            self._values["machine_list"] = machine_list
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
        """
        result = self._values.get("group_attribute")
        return result

    @builtins.property
    def group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("group_name")
        return result

    @builtins.property
    def group_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupType: MachineGroup type, the value is empty or Armory
        """
        result = self._values.get("group_type")
        return result

    @builtins.property
    def machine_identify_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        """
        result = self._values.get("machine_identify_type")
        return result

    @builtins.property
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: machineList: The machine tag, the value is ip or userdefined-id.
        """
        result = self._values.get("machine_list")
        return result

    @builtins.property
    def project_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: projectName: MachineGroup created in project.
        """
        result = self._values.get("project_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosProject",
):
    """A ROS template type:  ``ALIYUN::SLS::Project``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProjectProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosProject, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: Project name.
        """
        return jsii.get(self, "attrName")

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
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property:

        name: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Project description: <>'"\\ is not supported, up to 64 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "description": "description"},
)
class RosProjectProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Project``.

        :param name: 
        :param description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property:

        name: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Project description: <>'"\\ is not supported, up to 64 characters.
        """
        result = self._values.get("description")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSavedsearch(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosSavedsearch",
):
    """A ROS template type:  ``ALIYUN::SLS::Savedsearch``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSavedsearchProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Savedsearch``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSavedsearch, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrSavedsearchName")
    def attr_savedsearch_name(self) -> typing.Any:
        """
        :Attribute: SavedsearchName: Savedsearch name.
        """
        return jsii.get(self, "attrSavedsearchName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosSavedsearch.DetailProperty"]:
        """
        :Property: detail:
        """
        return jsii.get(self, "detail")

    @detail.setter # type: ignore
    def detail(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosSavedsearch.DetailProperty"],
    ) -> None:
        jsii.set(self, "detail", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="project")
    def project(self) -> builtins.str:
        """
        :Property: project: Project name
        """
        return jsii.get(self, "project")

    @project.setter # type: ignore
    def project(self, value: builtins.str) -> None:
        jsii.set(self, "project", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logstore": "logstore",
            "savedsearch_name": "savedsearchName",
            "search_query": "searchQuery",
            "topic": "topic",
            "display_name": "displayName",
        },
    )
    class DetailProperty:
        def __init__(
            self,
            *,
            logstore: builtins.str,
            savedsearch_name: builtins.str,
            search_query: builtins.str,
            topic: builtins.str,
            display_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param logstore: 
            :param savedsearch_name: 
            :param search_query: 
            :param topic: 
            :param display_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "logstore": logstore,
                "savedsearch_name": savedsearch_name,
                "search_query": search_query,
                "topic": topic,
            }
            if display_name is not None:
                self._values["display_name"] = display_name

        @builtins.property
        def logstore(self) -> builtins.str:
            """
            :Property: logstore: Logstore name.
            """
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return result

        @builtins.property
        def savedsearch_name(self) -> builtins.str:
            """
            :Property: savedsearchName: Savedsearch name.
            """
            result = self._values.get("savedsearch_name")
            assert result is not None, "Required property 'savedsearch_name' is missing"
            return result

        @builtins.property
        def search_query(self) -> builtins.str:
            """
            :Property: searchQuery: Check sentence.
            """
            result = self._values.get("search_query")
            assert result is not None, "Required property 'search_query' is missing"
            return result

        @builtins.property
        def topic(self) -> builtins.str:
            """
            :Property: topic: Topic name
            """
            result = self._values.get("topic")
            assert result is not None, "Required property 'topic' is missing"
            return result

        @builtins.property
        def display_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: displayName: Display name.
            """
            result = self._values.get("display_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DetailProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosSavedsearchProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class RosSavedsearchProps:
    def __init__(
        self,
        *,
        detail: typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty],
        project: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Savedsearch``.

        :param detail: 
        :param project: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty]:
        """
        :Property: detail:
        """
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return result

    @builtins.property
    def project(self) -> builtins.str:
        """
        :Property: project: Project name
        """
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSavedsearchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Savedsearch(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Savedsearch",
):
    """A ROS resource type:  ``ALIYUN::SLS::Savedsearch``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SavedsearchProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SLS::Savedsearch``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Savedsearch, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSavedsearchName")
    def attr_savedsearch_name(self) -> typing.Any:
        """
        :Attribute: SavedsearchName: Savedsearch name.
        """
        return jsii.get(self, "attrSavedsearchName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.SavedsearchProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class SavedsearchProps:
    def __init__(
        self,
        *,
        detail: typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty],
        project: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::SLS::Savedsearch``.

        :param detail: 
        :param project: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty]:
        """
        :Property: detail:
        """
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return result

    @builtins.property
    def project(self) -> builtins.str:
        """
        :Property: project: Project name
        """
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SavedsearchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Alert",
    "AlertProps",
    "ApplyConfigToMachineGroup",
    "ApplyConfigToMachineGroupProps",
    "Index",
    "IndexProps",
    "Logstore",
    "LogstoreProps",
    "LogtailConfig",
    "LogtailConfigProps",
    "MachineGroup",
    "MachineGroupProps",
    "Project",
    "ProjectProps",
    "RosAlert",
    "RosAlertProps",
    "RosApplyConfigToMachineGroup",
    "RosApplyConfigToMachineGroupProps",
    "RosIndex",
    "RosIndexProps",
    "RosLogstore",
    "RosLogstoreProps",
    "RosLogtailConfig",
    "RosLogtailConfigProps",
    "RosMachineGroup",
    "RosMachineGroupProps",
    "RosProject",
    "RosProjectProps",
    "RosSavedsearch",
    "RosSavedsearchProps",
    "Savedsearch",
    "SavedsearchProps",
]

publication.publish()
